import { Html, Main, NextScript, Head } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Global site meta */}
        <meta property="og:site_name" content="Soma Plastic Surgery" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="id_ID" />
        <meta property="og:locale:alternate" content="zh_CN" />
        <meta property="og:locale:alternate" content="ms_MY" />
        <meta property="og:locale:alternate" content="ko_KR" />
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="R5MjYmM1PcvrzXa95Gh0JwuT2o0PCLWlXHl0vb5JgV4" />
        {/* Google Fonts - preconnect + non-blocking stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" />
        {/* Google Analytics - G-7LF9EQM7KP */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7LF9EQM7KP" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7LF9EQM7KP');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
