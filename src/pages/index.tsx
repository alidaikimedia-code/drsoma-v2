import BaseImage from "@/components/BaseImage";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { getFullUrl, getAssetPath } from "@/utils/helper";
import { Award, BadgeCheck, Users, ShieldCheck, Star, ArrowUpRight } from 'lucide-react';

const NewHome = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    {
      name: t('home.testimonial1Name'),
      title: t('home.testimonial1Title'),
      rating: 5,
      text: t('home.testimonial1Text')
    },
    {
      name: t('home.testimonial2Name'),
      title: t('home.testimonial2Title'),
      rating: 5,
      text: t('home.testimonial2Text')
    },
    {
      name: t('home.testimonial3Name'),
      title: t('home.testimonial3Title'),
      rating: 5,
      text: t('home.testimonial3Text')
    }
  ];

  const faqs = [
    {
      question: t('home.faq1Q'),
      answer: t('home.faq1A')
    },
    {
      question: t('home.faq2Q'),
      answer: t('home.faq2A')
    },
    {
      question: t('home.faq3Q'),
      answer: t('home.faq3A')
    },
    {
      question: t('home.faq4Q'),
      answer: t('home.faq4A')
    },
    {
      question: t('home.faq5Q'),
      answer: t('home.faq5A')
    },
    {
      question: t('home.faq6Q'),
      answer: t('home.faq6A')
    },
    {
      question: t('home.faq7Q'),
      answer: t('home.faq7A')
    },
    {
      question: t('home.faq8Q'),
      answer: t('home.faq8A')
    },
    {
      question: t('home.faq9Q'),
      answer: t('home.faq9A')
    },
    {
      question: t('home.faq10Q'),
      answer: t('home.faq10A')
    }
  ];

  const specialties = [
    {
      title: t('home.specFace'),
      description: t('home.specFaceDesc'),
      image: "/images/face_image.webp",
      link: "/face",
      colSpan: "md:col-span-2"
    },
    {
      title: t('home.specBreast'),
      description: t('home.specBreastDesc'),
      image: "/images/breast_image.webp",
      link: "/breast",
      colSpan: "md:col-span-1"
    },
    {
      title: t('home.specBody'),
      description: t('home.specBodyDesc'),
      image: "/images/body_image.webp",
      link: "/body",
      colSpan: "md:col-span-1"
    },
    {
      title: t('home.specRecon'),
      description: t('home.specReconDesc'),
      image: "/images/scar_care_image.webp",
      link: "/face",
      colSpan: "md:col-span-1"
    },
    {
      title: t('home.specNonSurg'),
      description: t('home.specNonSurgDesc'),
      image: "/images/aesthetic_services.webp",
      link: "/aesthetic-treatments",
      colSpan: "md:col-span-1"
    }
  ];

  return (
    <>
      <Head>
        <title>Soma Plastic Surgery - Clinical Aesthetics | Plastic Surgeon Malaysia</title>
        <meta name="description" content="Dr. Somasundaram Sathappan is a Plastic and Reconstructive Surgeon and heads the Soma Plastic Surgery (Clinical Aesthetics) Clinic in Subang Jaya, Malaysia." />
        <meta property="og:title" content="Soma Plastic Surgery - Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta property="og:description" content="Dr. Somasundaram Sathappan is a Plastic and Reconstructive Surgeon and heads the Soma Plastic Surgery (Clinical Aesthetics) Clinic in Subang Jaya, Malaysia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drsomaplasticsurgery.com/" />
        <meta property="og:image" content="https://drsomaplasticsurgery.com/images/dr_soma_hero.png" />
        <link rel="canonical" href={getFullUrl('/')} />
        <link rel="alternate" hrefLang="en" href={getFullUrl('/')} />
        <link rel="alternate" hrefLang="id" href={getFullUrl('/id')} />
        <link rel="alternate" hrefLang="zh-Hans-CN" href={getFullUrl('/zh-cn')} />
        <link rel="alternate" hrefLang="zh-Hans-MY" href={getFullUrl('/zh-my')} />
        <link rel="alternate" hrefLang="ms" href={getFullUrl('/ms')} />
        <link rel="alternate" hrefLang="ko" href={getFullUrl('/ko')} />
        <link rel="alternate" hrefLang="x-default" href={getFullUrl('/')} />
        {/* Preload hero LCP image */}
        <link rel="preload" as="image" href="/images/Dr%20Soma%20Hero%20Image.png" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-[#F9FAFB] overflow-hidden pt-32 lg:pt-36 pb-20 lg:pb-24">
        {/* Background Image - CSS background-image on right side */}
        <div
          className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-cover bg-center md:bg-left-top z-0 opacity-5 md:opacity-100"
          style={{ backgroundImage: `url('${getAssetPath('/images/Dr%20Soma%20Hero%20Image.png')}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9FAFB] via-[#F9FAFB]/80 to-transparent md:via-[#F9FAFB]/10"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-[#EA622F] text-xs font-bold tracking-widest uppercase mb-6">
              {t('home.heroBadge')}
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#101010] leading-[1.1] mb-6" style={{ textTransform: 'none' }}>
              {t('home.heroTitle1')} <span className="text-[#EA622F]">{t('home.heroTitle2')}</span> <br /> {t('home.heroTitle3')}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              {t('home.heroDesc')}
            </p>

            {/* Checkmarks - 2x2 grid */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">{t('home.heroCheck1')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">{t('home.heroCheck2')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">{t('home.heroCheck3')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">{t('home.heroCheck4')}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none active:scale-95 bg-[#EA622F] text-white hover:bg-[#d55627] hover:shadow-md h-14 rounded-full px-8 text-base shadow-lg shadow-orange-500/20"
                style={{ textTransform: 'none' }}
                onClick={() => router.push('/contact')}
              >
                {t('home.heroBtn1')}
              </button>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none active:scale-95 border bg-background shadow-sm hover:text-accent-foreground border-[#EA622F] text-[#EA622F] hover:bg-[#EA622F]/10 h-14 rounded-full px-8 text-base"
                style={{ textTransform: 'none' }}
                onClick={() => router.push('/face')}
              >
                {t('home.heroBtn2')}
              </button>
            </div>
          </div>

          {/* Empty right column - image is in background */}
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border-x border-gray-100">
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center group hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#EA622F] mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 leading-tight" style={{ textTransform: 'capitalize' }}>{t('home.stat1Title')}</h3>
              <p className="text-sm text-gray-500 mt-1">{t('home.stat1Sub')}</p>
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center group hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#EA622F] mb-4 group-hover:scale-110 transition-transform duration-300">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 leading-tight" style={{ textTransform: 'capitalize' }}>{t('home.stat2Title')}</h3>
              <p className="text-sm text-gray-500 mt-1">{t('home.stat2Sub')}</p>
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center group hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#EA622F] mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 leading-tight" style={{ textTransform: 'capitalize' }}>{t('home.stat3Title')}</h3>
              <p className="text-sm text-gray-500 mt-1">{t('home.stat3Sub')}</p>
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center group hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#EA622F] mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 leading-tight" style={{ textTransform: 'capitalize' }}>{t('home.stat4Title')}</h3>
              <p className="text-sm text-gray-500 mt-1">{t('home.stat4Sub')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Details Matter Section */}
      <section id="about" className="py-[50px] bg-white text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#101010] mb-6" style={{ textTransform: 'none' }}>{t('home.detailsTitle')}</h2>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">
            {t('home.detailsDesc')}
          </p>
        </div>
      </section>

      {/* Our Specialties Section */}
      <section id="services" className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-3 mb-12 items-center text-center">
            <span className="text-[#EA622F] font-semibold tracking-wider text-sm uppercase">{t('home.specLabel')}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101010] leading-[1.15]" style={{ textTransform: 'capitalize' }}>{t('home.specTitle')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mt-2">
              {t('home.specDesc')}
            </p>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {specialties.map((specialty, index) => (
              <Link
                key={index}
                href={specialty.link}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 ${specialty.colSpan}`}
              >
                <div className="absolute inset-0 w-full h-full">
                  <BaseImage
                    src={specialty.image}
                    alt={specialty.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2">{specialty.title}</h3>
                    <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {specialty.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#EA622F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {t('home.viewOptions')} <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Surgeon Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Doctor Image */}
            <div className="relative max-w-sm mx-auto">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 relative z-10">
                <BaseImage
                  src="/images/dr-soma-surgeon.jpg"
                  alt="Dr. Somasundaram Sathappan"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-50 rounded-full -z-0 hidden md:block"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-orange-100 rounded-full -z-0 hidden md:block"></div>
            </div>

            {/* Doctor Info */}
            <div>
              <div className="flex flex-col gap-3 items-start text-left mb-8">
                <span className="text-[#EA622F] font-semibold tracking-wider text-sm uppercase">{t('home.surgeonLabel')}</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101010] leading-[1.15]">
                  {t('home.surgeonName')}
                </h2>
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-4">
                {t('home.surgeonTitle')}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {t('home.surgeonBio1')}
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                {t('home.surgeonBio2')}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-gray-700 flex-1">{t('home.surgeonPoint1')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-gray-700 flex-1">{t('home.surgeonPoint2')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-gray-700 flex-1">{t('home.surgeonPoint3')}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none active:scale-95 bg-[#EA622F] text-white hover:bg-[#d55627] shadow-sm hover:shadow-md h-12 px-6 py-2"
                  onClick={() => router.push('/about-dr-soma')}
                >
                  {t('home.surgeonBtn1')}
                </button>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none active:scale-95 border bg-background shadow-sm hover:text-accent-foreground border-[#EA622F] text-[#EA622F] hover:bg-[#EA622F]/10 h-12 px-6 py-2"
                  onClick={() => router.push('/about-dr-soma')}
                >
                  {t('home.surgeonBtn2')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Experience Section */}
      <section className="py-24 bg-white text-[#101010]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-3 items-center text-center mb-20">
            <span className="text-[#EA622F] font-semibold tracking-wider text-sm uppercase">{t('home.journeyLabel')}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101010] leading-[1.15]">{t('home.journeyTitle')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mt-2">
              {t('home.journeyDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative isolate">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[48px] left-[50px] right-[50px] h-[2px] bg-gray-200 -z-10"></div>

            {/* Step 1 */}
            <div className="relative z-10 group flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 group-hover:border-[#EA622F] rounded-full flex items-center justify-center text-3xl font-bold mb-8 transition-colors duration-300 mx-auto md:mx-0 shadow-sm text-[#101010]">
                01
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#101010]">{t('home.step1Title')}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
                {t('home.step1Desc')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 group flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 group-hover:border-[#EA622F] rounded-full flex items-center justify-center text-3xl font-bold mb-8 transition-colors duration-300 mx-auto md:mx-0 shadow-sm text-[#101010]">
                02
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#101010]">{t('home.step2Title')}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
                {t('home.step2Desc')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 group flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 group-hover:border-[#EA622F] rounded-full flex items-center justify-center text-3xl font-bold mb-8 transition-colors duration-300 mx-auto md:mx-0 shadow-sm text-[#101010]">
                03
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#101010]">{t('home.step3Title')}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
                {t('home.step3Desc')}
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 group flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 group-hover:border-[#EA622F] rounded-full flex items-center justify-center text-3xl font-bold mb-8 transition-colors duration-300 mx-auto md:mx-0 shadow-sm text-[#101010]">
                04
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#101010]">{t('home.step4Title')}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
                {t('home.step4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Stories Section */}
      <section id="reviews" className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-3 mb-12 items-center text-center">
            <span className="text-[#EA622F] font-semibold tracking-wider text-sm uppercase">{t('home.reviewsLabel')}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101010] leading-[1.15]">{t('home.reviewsTitle')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mt-2">
              {t('home.reviewsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4 text-[#EA622F]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">{testimonial.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Memberships Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-3 mb-10 items-center text-center">
            <span className="text-[#EA622F] font-semibold tracking-wider text-sm uppercase">{t('home.credLabel')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] leading-[1.15]">{t('home.credTitle')}</h2>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mt-2">
              {t('home.credDesc')}
            </p>
          </div>
        </div>

        {/* Auto-scrolling certificates */}
        <div className="relative w-full max-w-full overflow-hidden">
          <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .certificates-wrapper {
              width: 100%;
              max-width: 100vw;
              overflow: hidden;
            }
            .certificates-scroll {
              display: flex;
              flex-wrap: nowrap;
              align-items: center;
              animation: scroll 40s linear infinite;
              width: max-content;
            }
            .certificates-scroll:hover {
              animation-play-state: paused;
            }
            .certificates-scroll img {
              height: 120px;
              width: auto;
              flex-shrink: 0;
              margin: 0 20px;
            }
            @media (min-width: 768px) {
              .certificates-scroll img {
                height: 200px;
                margin: 0 32px;
              }
            }
          `}</style>
          <div className="certificates-wrapper">
            <div className="certificates-scroll">
              <img src="/icons/certificate_one.svg" alt="International Society of Aesthetic Plastic Surgery Member" />
              <img src="/icons/certificate_two.svg" alt="Malaysian Medical Association Member" />
              <img src="/icons/certificate_three.svg" alt="Royal College of Surgeons Fellowship" />
              <img src="/icons/certificate_four.svg" alt="Asian Pacific Association of Plastic Surgeons" />
              <img src="/icons/certificate_five.svg" alt="Board Certified Plastic Surgeon" />
              <img src="/icons/certificate_six.svg" alt="Malaysian Society of Plastic Surgeons" />
              <img src="/icons/certificate_seven.svg" alt="Aesthetic Surgery Certification" />
              <img src="/icons/certificate_eight.svg" alt="International Confederation for Plastic Surgery" />
              <img src="/icons/certificate_nine.svg" alt="Medical Specialist Registration" />
              <img src="/icons/certificate_ten.svg" alt="Professional Medical License Malaysia" />
              <img src="/icons/certificate_eleven.svg" alt="Reconstructive Surgery Certification" />
              <img src="/icons/certificate_twevel.svg" alt="Advanced Aesthetic Training Certificate" />
              <img src="/icons/certificate_thirteen.svg" alt="Continuing Medical Education Certificate" />
              {/* Duplicate for seamless loop */}
              <img src="/icons/certificate_one.svg" alt="International Society of Aesthetic Plastic Surgery Member" />
              <img src="/icons/certificate_two.svg" alt="Malaysian Medical Association Member" />
              <img src="/icons/certificate_three.svg" alt="Royal College of Surgeons Fellowship" />
              <img src="/icons/certificate_four.svg" alt="Asian Pacific Association of Plastic Surgeons" />
              <img src="/icons/certificate_five.svg" alt="Board Certified Plastic Surgeon" />
              <img src="/icons/certificate_six.svg" alt="Malaysian Society of Plastic Surgeons" />
              <img src="/icons/certificate_seven.svg" alt="Aesthetic Surgery Certification" />
              <img src="/icons/certificate_eight.svg" alt="International Confederation for Plastic Surgery" />
              <img src="/icons/certificate_nine.svg" alt="Medical Specialist Registration" />
              <img src="/icons/certificate_ten.svg" alt="Professional Medical License Malaysia" />
              <img src="/icons/certificate_eleven.svg" alt="Reconstructive Surgery Certification" />
              <img src="/icons/certificate_twevel.svg" alt="Advanced Aesthetic Training Certificate" />
              <img src="/icons/certificate_thirteen.svg" alt="Continuing Medical Education Certificate" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-gray-900 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <span className="text-[#EA622F] font-bold tracking-widest uppercase text-sm mb-2 block">{t('home.faqLabel')}</span>
                <h2 className="text-3xl font-bold mb-6">{t('home.faqTitle')}</h2>
                <p className="text-gray-600 mb-8">{t('home.faqDesc')}</p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none active:scale-95 bg-[#EA622F] text-white hover:bg-[#d55627] shadow-sm hover:shadow-md h-12 px-6 py-2"
                    style={{ textTransform: 'capitalize' }}
                    onClick={() => router.push('/contact')}
                  >
                    {t('home.faqBtn1')}
                  </button>
                  <a
                    href="https://wa.me/60142616007?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none active:scale-95 bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm h-12 px-6 py-2"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {t('home.faqBtn2')}
                  </a>
                </div>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div>
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      className="w-full py-6 flex items-start justify-between text-left hover:text-[#EA622F] transition-colors gap-4"
                      onClick={() => toggleFaq(index)}
                    >
                      <h4 className="font-medium text-lg text-[#101010] flex-1">{faq.question}</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EA622F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pb-8">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewHome;
