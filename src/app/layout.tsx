import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations, getMessages } from 'next-intl/server';
import { Geist, Geist_Mono, Poppins } from 'next/font/google';

import { ConvexClientProvider } from '@/components/organisms/providers/convex-client-provider';

import '@/styles/globals.css';
import { cn } from '@/libs/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const popins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['600', '700'],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const t = await getTranslations({
    locale,
    namespace: 'Metadata',
  });

  return {
    title: t('title'),
    description: t('description'),
  };
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default async function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          popins.variable,
          'antialiased',
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
