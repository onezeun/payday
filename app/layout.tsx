import 'globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '🤑🤑🤑🤑🤑',
  description: '',
  openGraph: {
    title: '🤑월급날🤑',
    description: '얼마나 좋을까?',
    images: '/favicon.png',
  },
  robots: 'noindex,nofollow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head></head>
      <body>
        <div className="min-h-screen overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
