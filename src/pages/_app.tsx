import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/styles.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import React from "react";
import * as gtag from "@/utils/gtag";

// Initialize i18next
import '@/i18n/config';
import i18n from '@/i18n/config';
import { getLocaleFromPath } from '@/i18n/config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App({ Component, pageProps }: any) {
  const router = useRouter();

  // Detect language from URL path or localStorage on mount
  useEffect(() => {
    const detectedLocale = getLocaleFromPath(window.location.pathname);
    const savedLocale = localStorage.getItem('preferred-language');

    if (detectedLocale !== 'en') {
      // URL has a locale prefix, use it
      i18n.changeLanguage(detectedLocale);
      localStorage.setItem('preferred-language', detectedLocale);
      document.documentElement.lang = detectedLocale;
    } else if (savedLocale && savedLocale !== 'en') {
      // No locale in URL but saved preference exists
      i18n.changeLanguage(savedLocale);
      document.documentElement.lang = savedLocale;
    }
  }, []);

  // Update html lang attribute when language changes
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      document.documentElement.lang = lng;
    };
    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <div className="flex flex-col w-full overflow-x-hidden">
        <Head>
          <link rel="icon" type="image/ico" href={"/favicon.ico"} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
