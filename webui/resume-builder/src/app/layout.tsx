import type { Metadata } from 'next';
import './globals.css';
import AppClientComponentWrapper from '@/_components/AppClientComponentWrapper';

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
    <html lang="en" suppressContentEditableWarning={true}>
      <body>
        <AppClientComponentWrapper>{children}</AppClientComponentWrapper>
      </body>
    </html>
  );
}
