import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/shared/styles/main.sass';

/**
 * Import the Inter font with the Latin subset.
 */
const inter = Inter({ subsets: ['latin'] });

/**
 * Metadata for the application.
 * @type {Metadata}
 */

export const metadata: Metadata = {
  title: 'Smart test task',
  description: 'JUNIOR FRONTEND DEVELOPER ASSIGNMENT',
};


/**
 * RootLayout component serves as the root layout for the application.
 *
 * @param {Readonly<{ children: React.ReactNode }>} props - The props object containing children.
 * @returns {JSX.Element} The JSX element representing the root layout of the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
