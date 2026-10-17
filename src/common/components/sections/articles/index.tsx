import { ArrowUpRight } from 'lucide-react';

import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { getMediumArticles, MEDIUM_PROFILE_URL } from '@/common/lib/medium';

const formatDate = (value: string) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? ''
    : date.toLocaleDateString('en-SG', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
};

export default async function Articles() {
  const articles = await getMediumArticles();

  if (articles.length === 0) {
    return null;
  }

  return (
    <section
      id="articles"
      className="flex w-full scroll-mt-28 flex-col items-center px-4 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>Latest writing</SectionHeading>
      <ul className="grid w-full max-w-[60rem] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <li key={article.url}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="borderBlack flex h-full flex-col gap-3 rounded-xl bg-gray-100 p-5 transition hover:-translate-y-1 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <time
                dateTime={article.publishedAt}
                className="text-xs uppercase tracking-wider text-gray-500 dark:text-white/50"
              >
                {formatDate(article.publishedAt)}
              </time>
              <h3 className="font-semibold leading-snug">{article.title}</h3>
              <span className="sr-only">(opens Medium in a new tab)</span>
              {article.categories.length > 0 && (
                <ul className="mt-auto flex flex-wrap gap-2">
                  {article.categories.map((category) => (
                    <li
                      key={category}
                      className="rounded-full bg-[#ffcbb4] px-2.5 py-0.5 text-[0.7rem] uppercase tracking-wider text-black dark:bg-[#ddbea9]"
                    >
                      {category.replace(/-/g, ' ')}
                    </li>
                  ))}
                </ul>
              )}
            </a>
          </li>
        ))}
      </ul>
      <a
        href={MEDIUM_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-16 mt-10 inline-flex items-center gap-1 underline-offset-4 hover:underline"
      >
        All articles on Medium
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </a>
      <SectionDivider />
    </section>
  );
}
