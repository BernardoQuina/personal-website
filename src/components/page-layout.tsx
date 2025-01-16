import { ReactNode } from 'react';
import Head from 'next/head';

// import { Header } from './header';
// import { Footer } from './footer';

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
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
