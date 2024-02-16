import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/app/(test)/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextAuth.js Example',
  description:
    'This is an example site to demonstrate how to use NextAuth.js for authentication',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex size-full min-h-screen flex-col justify-between">
          <Header />
          <main className="mx-auto w-full max-w-3xl flex-auto p-4 sm:px-6 md:py-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
