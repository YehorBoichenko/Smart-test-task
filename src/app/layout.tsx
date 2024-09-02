import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/shared/styles/main.sass';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smart test task',
  description: 'JUNIOR FRONTEND DEVELOPER ASSIGNMENT',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
