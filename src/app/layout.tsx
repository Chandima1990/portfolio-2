import type { Metadata } from 'next';

import { Montserrat as FontMontserrat } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';

import Footer from '@/common/components/shared/footer';
import Header from '@/common/components/shared/header';
import { siteConfig } from '@/common/lib/site';
import { cn } from '@/common/lib/utils';
import ActiveSectionContextProvider from '@/common/stores/active-section';
import '@/common/styles/globals.css';
import { ModeToggle } from '@/common/theme/mode-toggler';
import { ThemeProvider } from '@/common/theme/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    'Full-Stack Developer',
    'Singapore',
    '.NET',
    'C#',
    'Angular',
    'TypeScript',
    'Azure',
    'AI-assisted development',
    'Claude Code',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: 'en_SG',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: siteConfig.jobTitle,
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.location,
    addressCountry: 'SG',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Moratuwa',
  },
  knowsAbout: [
    'C#',
    '.NET',
    'Angular',
    'TypeScript',
    'Azure',
    'Microservices',
    'AI-assisted software development',
  ],
  sameAs: siteConfig.sameAs,
};

const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex items-center justify-center',
          fontMontserrat.className,
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="flex min-h-screen w-full flex-col">
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <div className="fixed left-1 right-auto top-1 z-[99] sm:bottom-6 sm:left-6 sm:top-auto">
                <ModeToggle />
              </div>
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
        {umamiScriptUrl && umamiWebsiteId && (
          <Script
            src={umamiScriptUrl}
            data-website-id={umamiWebsiteId}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
