import type { Metadata } from 'next';
import './globals.css';
import SessionProviderWrapper from '@/components/SessionProviderWrapper';

export const metadata: Metadata = {
  title: 'Resume Builder',
  description: 'Build your resume in a few clicks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

          <SessionProviderWrapper>{children}</SessionProviderWrapper>

      </body>
    </html>
  );
}
