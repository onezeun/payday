import 'globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'payday',
  description: '',
  openGraph: {
    title: 'payday',
    description: 'payday',
    images: '',
  },
  robots: 'noindex,nofollow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head></head>
      <body>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
