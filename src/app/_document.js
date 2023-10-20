'use client';

import { Html, Head, Main, NextScript } from 'next/document'
import { FB_PIXEL_ID } from '../components/lib/fpixel'

export default function Document() {
  return (
    <Html>
      <Head>
        <noscript>
          <Image>
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          </Image>
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}