import type { Metadata } from 'next';
import './globals.css';
import AppClientComponentWrapper from '@/_components/AppClientComponentWrapper';
import Script from 'next/script';
import { COOKIE_BOT_DOMAIN_GROUP_ID } from './config';

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
      <Script
        src={`https://consent.cookiebot.com/uc.js?cbid=${COOKIE_BOT_DOMAIN_GROUP_ID}`}
      />
      <body>
        <AppClientComponentWrapper>{children}</AppClientComponentWrapper>
      </body>
    </html>
  );
}
