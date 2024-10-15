import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { metaTags, SITE_URL } from '@/constants';

export default class MyDocument extends Document {
  baseUrl = process.env.BASE_PREFIX;
  isProd = process.env.NODE_ENV === 'production';
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content={metaTags.keywords}
          ></meta>
          <link rel="canonical" href={SITE_URL} />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={`${this.baseUrl}images/general/icons/apple-icon-120x120.webp`}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={`${this.baseUrl}images/general/icons/apple-icon-144x144.webp`}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={`${this.baseUrl}images/general/icons/apple-icon-152x152.webp`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${this.baseUrl}images/general/icons/apple-icon-180x180.webp`}
          />

          <link
            rel="icon"
            type="image/webp"
            sizes="32x32"
            href={`${this.baseUrl}favicon-32x32.png`}
          />
          <link
            rel="mask-icon"
            href={`${this.baseUrl}images/general/icons/safari-pinned-tab.svg`}
            color={'#1C1C1C'}
          />
          <link
            rel="icon"
            type="image/webp"
            sizes="16x16"
            href={`${this.baseUrl}favicon-16x16.png`}
          />
          <link
            rel="manifest"
            href={`${this.baseUrl}site.webmanifest`}
          />
          <meta
            name="msapplication-TileColor"
            content="#ff1430"
          />
          <meta name="theme-color" content="#1C1C1C" />
          <meta
            name="description"
            content={metaTags.description}
          />
          <meta name="title" content={metaTags.title} />
          <meta property="image" content={metaTags.image} />

          <meta
            property="og:title"
            content={metaTags.facebook.title || metaTags.title}
          />
          <meta
            property="og:description"
            content={
              metaTags.facebook.description ||
              metaTags.description
            }
          />
          <meta
            property="og:site_name"
            content={metaTags.facebook.title || metaTags.title}
          />
          <meta property="og:url" content={metaTags.url} />
          <meta
            property="fb:app_id"
            content={metaTags.facebook.app_id || ''}
          />
          <meta
            property="og:type"
            content={metaTags.facebook.type}
          />
          <meta
            property="og:image"
            content={metaTags.facebook.image}
          />
          <meta
            property="og:image:alt"
            content={
              metaTags.facebook.imageAlt ||
              metaTags.imageAlt ||
              ''
            }
          />
          <meta
            property="og:image:width"
            content={metaTags.facebook.imageWidth}
          />
          <meta
            property="og:image:height"
            content={metaTags.facebook.imageHeight}
          />

          <meta
            name="twitter:card"
            content={metaTags.twitter.card}
          />
          <meta
            name="twitter:title"
            content={metaTags.twitter.title || metaTags.title}
          />
          <meta
            name="twitter:description"
            content={
              metaTags.twitter.description ||
              metaTags.description
            }
          />
          <meta
            name="twitter:site"
            content={metaTags.twitter.site || ''}
          />
          <meta
            name="twitter:image"
            content={metaTags.twitter.image}
          />
          <meta
            name="twitter:image:alt"
            content={
              metaTags.twitter.imageAlt ||
              metaTags.imageAlt ||
              ''
            }
          />
          <meta name="twitter:url" content={metaTags.url} />

          <meta name="author" content={metaTags.author.name} />

          <link rel="author" href={metaTags.author.href} />

          <meta
            name="facebook-domain-verification"
            content="pvuxa7yrcztva0jel8gkw7h4vxeupy"
          />
          <meta
            name="google-adsense-account"
            content="ca-pub-7264556982952268"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
