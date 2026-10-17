export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chandimae.com',
  name: 'Chandima Ekanayake',
  jobTitle: 'Full-Stack Developer',
  title: 'Chandima Ekanayake | Full-Stack Developer',
  tagline: '.NET · Angular · Azure · AI-assisted development',
  description:
    'Full-stack developer in Singapore with over 9 years of professional experience delivering secure, large-scale systems with C#, .NET, Angular, TypeScript and Azure, and building AI-assisted products with Claude Code, OpenAI and agentic workflows.',
  location: 'Singapore',
  email: 'chandima.c.ekanayake@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/chandima-ekanayake/',
    'https://github.com/Chandima1990',
    'https://medium.com/@ChandimaEkanayake',
  ],
} as const;
