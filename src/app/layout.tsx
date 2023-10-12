import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Inter } from 'next/font/google';
import Script from 'next/script'
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />   
        <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 276814995270046);
          `,
        }}
      />
    </>
  
      </Head>
      <body className={inter.className}>
        <Header />

        <div>{children}</div>
      
        <Footer />

      </body>
    </html>
  );
}
