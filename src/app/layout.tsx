import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Inter } from 'next/font/google';
import './app.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Data Insight Lab',
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <div>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
