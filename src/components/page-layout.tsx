import { ReactNode } from 'react';
import Head from 'next/head';

import { Header } from './header';
import { Footer } from './footer';

export function PageLayout({
  children,
  pageTitle,
  pageDescription,
}: {
  children: ReactNode;
  pageTitle: string;
  pageDescription: string;
}) {
  return (
    <div className="items-center overflow-x-clip">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <Header />
      <main className="w-full max-w-[70rem] px-4 py-4 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
}
