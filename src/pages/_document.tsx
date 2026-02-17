import { Html, Main, NextScript, Head } from "next/document";
import { GA_TRACKING_ID } from "@/utils/gtag";

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
        {/* Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
        {/* Google tag (gtag.js) - G-7LF9EQM7KP */}
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
