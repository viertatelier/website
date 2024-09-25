import MouseBlobity from '@/components/mouseblobity-component/MouseBlobity.component';
import PageTransition from '@/components/pagetransition-component/PageTransitions.component';
import { SmoothScrolling } from '@/components/SmoothScrolling-component';
import { AppProvider } from '@/context/AppContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Baskervville, Montserrat } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import { metaTags } from '@/constants';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
});
const baskervville = Baskervville({
  subsets: ['latin'],
  weight: ['400'],
});

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{metaTags.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <AppProvider>
        <PageTransition>
          <SmoothScrolling>
            <main
              className={`${montserrat.className} ${baskervville.className}`}
            >
              <Component {...pageProps} />
              <MouseBlobity />
            </main>
          </SmoothScrolling>
        </PageTransition>
      </AppProvider>
      <Analytics />
      <Script
        src={`${process.env.BASE_PREFIX}gtm.script.js`}
        id="gtagscript"
        strategy="afterInteractive"
      />
      <Script
        defer
        strategy="afterInteractive"
        src={`${process.env.BASE_PREFIX}hotjar.script.js`}
        id="hotjar"
      />
      <Script
        defer
        strategy="lazyOnload"
        id="handtalk"
        src="https://plugin.handtalk.me/web/latest/handtalk.min.js"
        onLoad={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          // @ts-ignore
          const ht = new HT({
            token: '35e4d8e605f76afdf8ac6af37efb065c',
            avatar: 'MAYA',
            opacity: 0,
            highContrast: true,
            mobileConfig: {
              align: 'top',
            },
          });
        }}
      />
    </>
  );
}

export default App;
