export const MEDIUM_PROFILE_URL = 'https://medium.com/@ChandimaEkanayake';
const MEDIUM_FEED_URL = 'https://medium.com/feed/@ChandimaEkanayake';

export type MediumArticle = {
  title: string;
  url: string;
  publishedAt: string;
  categories: string[];
};

const readTag = (xml: string, tag: string) => {
  const match = xml.match(
    new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`),
  );
  return match?.[1].trim() ?? '';
};

const readAllTags = (xml: string, tag: string) =>
  Array.from(
    xml.matchAll(
      new RegExp(
        `<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`,
        'g',
      ),
    ),
    (match) => match[1].trim(),
  );

// Fetches the latest articles from the Medium RSS feed, refreshed once a day.
// Returns an empty list if Medium is unreachable so the page still renders.
export async function getMediumArticles(limit = 6): Promise<MediumArticle[]> {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: 60 * 60 * 24 },
      headers: { 'User-Agent': 'Mozilla/5.0 (portfolio RSS reader)' },
    });
    if (!response.ok) {
      return [];
    }

    const xml = await response.text();
    const items = xml.split('<item>').slice(1);

    return items.slice(0, limit).map((item) => {
      const link = readTag(item, 'link');
      return {
        title: readTag(item, 'title'),
        // Medium appends RSS tracking parameters; drop them
        url: link.split('?')[0],
        publishedAt: readTag(item, 'pubDate'),
        categories: readAllTags(item, 'category').slice(0, 3),
      };
    });
  } catch {
    return [];
  }
}
