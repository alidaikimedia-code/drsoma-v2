import React, { useState, useEffect, useRef } from "react";
import BaseImage from "@/components/BaseImage";
import Link from "next/link";
import Head from "next/head";
import { getFullUrl, getAssetPath } from "@/utils/helper";
import { useTranslation } from "react-i18next";
import { getLocaleFromPath } from "@/i18n/config";

const MaleHub = () => {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const locale = getLocaleFromPath(window.location.pathname);
    if (locale !== i18n.language) {
      i18n.changeLanguage(locale);
    }
  }, [i18n]);

  const heroRef = useRef<HTMLDivElement>(null);
  const treatmentsRef = useRef<HTMLDivElement>(null);
  const decisionRef = useRef<HTMLDivElement>(null);
  const meaningRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.getAttribute("data-section");
          if (elementId) {
            setVisibleElements((prev) => new Set([...prev, elementId]));
          }
        }
      });
    }, observerOptions);

    const sections = [heroRef, treatmentsRef, decisionRef, meaningRef, journeyRef, faqRef, ctaRef];
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", `section-${index}`);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleElements.has(sectionId);

  // Treatment categories with data
  const treatmentCategories = [
    {
      category: t('mh.cat0Name'),
      description: t('mh.cat0Desc'),
      categoryImage: "/images/Gynecomastia Surgery men.jpg",
      treatments: [
        {
          title: t('mh.cat0Treat0Title'),
          area: t('mh.cat0Treat0Area'),
          description: t('mh.cat0Treat0Desc'),
          href: "/male/gynecomastia-surgery-malaysia",
          image: "/images/Gynecomastia Surgery men.jpg",
          tag: t('mh.cat0Treat0Tag'),
        },
        {
          title: t('mh.cat0Treat1Title'),
          area: t('mh.cat0Treat1Area'),
          description: t('mh.cat0Treat1Desc'),
          href: "/male/male-breast-reduction-malaysia",
          image: "/images/male_breast_reduction.png",
          tag: null,
        },
      ],
    },
    {
      category: t('mh.cat1Name'),
      description: t('mh.cat1Desc'),
      categoryImage: "/images/Jawline Enhancement men.jpg",
      treatments: [
        {
          title: t('mh.cat1Treat0Title'),
          area: t('mh.cat1Treat0Area'),
          description: t('mh.cat1Treat0Desc'),
          href: "/male/jawline-enhancement-malaysia",
          image: "/images/Jawline Enhancement men.jpg",
          tag: t('mh.cat1Treat0Tag'),
        },
        {
          title: t('mh.cat1Treat1Title'),
          area: t('mh.cat1Treat1Area'),
          description: t('mh.cat1Treat1Desc'),
          href: "/male/chin-implant-malaysia",
          image: "/images/Chin Implant men.jpg",
          tag: null,
        },
        {
          title: t('mh.cat1Treat2Title'),
          area: t('mh.cat1Treat2Area'),
          description: t('mh.cat1Treat2Desc'),
          href: "/male/male-rhinoplasty-malaysia",
          image: "/images/Male Rhinoplasty men.jpg",
          tag: null,
        },
      ],
    },
    {
      category: t('mh.cat2Name'),
      description: t('mh.cat2Desc'),
      categoryImage: "/images/six_pack_enhancement.jpg",
      treatments: [
        {
          title: t('mh.cat2Treat0Title'),
          area: t('mh.cat2Treat0Area'),
          description: t('mh.cat2Treat0Desc'),
          href: "/male/six-pack-enhancement-malaysia",
          image: "/images/six_pack_enhancement.jpg",
          tag: t('mh.cat2Treat0Tag'),
        },
        {
          title: t('mh.cat2Treat1Title'),
          area: t('mh.cat2Treat1Area'),
          description: t('mh.cat2Treat1Desc'),
          href: "/male/hair-transplant-malaysia",
          image: "/images/Hair Transplant men.jpg",
          tag: null,
        },
        {
          title: t('mh.cat2Treat2Title'),
          area: t('mh.cat2Treat2Area'),
          description: t('mh.cat2Treat2Desc'),
          href: "/male/penile-enhancement-malaysia",
          image: "/images/Penile Enhancement men.jpg",
          tag: t('mh.cat2Treat2Tag'),
        },
      ],
    },
  ];

  // Decision guide data
  const decisionGuide = [
    { concern: t('mh.dg0Concern'), solution: t('mh.dg0Solution'), href: "/male/gynecomastia-surgery-malaysia" },
    { concern: t('mh.dg1Concern'), solution: t('mh.dg1Solution'), href: "/male/hair-transplant-malaysia" },
    { concern: t('mh.dg2Concern'), solution: t('mh.dg2Solution'), href: "/male/jawline-enhancement-malaysia" },
    { concern: t('mh.dg3Concern'), solution: t('mh.dg3Solution'), href: "/male/chin-implant-malaysia" },
    { concern: t('mh.dg4Concern'), solution: t('mh.dg4Solution'), href: "/male/male-rhinoplasty-malaysia" },
    { concern: t('mh.dg5Concern'), solution: t('mh.dg5Solution'), href: "/male/six-pack-enhancement-malaysia" },
    { concern: t('mh.dg6Concern'), solution: t('mh.dg6Solution'), href: "/male/penile-enhancement-malaysia" },
  ];

  // FAQ data
  const faqData = Array.from({ length: 13 }, (_, i) => ({
    question: t(`mh.faq${i}Q`),
    answer: t(`mh.faq${i}A`),
  }));

  // Journey steps
  const journeySteps = Array.from({ length: 4 }, (_, i) => ({
    num: i + 1,
    title: t(`mh.j${i}Title`),
    description: t(`mh.j${i}Desc`),
  }));

  // What natural means
  const naturalMeans = Array.from({ length: 4 }, (_, i) => t(`mh.nat${i}`));

  return (
    <>
      <Head>
        <title>Male Cosmetic Surgery in Malaysia | Dr. Soma Clinical Aesthetics</title>
        <meta name="description" content="Private, respectful male cosmetic surgery in Malaysia. Gynecomastia, hair transplant, jawline enhancement, rhinoplasty, and more. Natural results that preserve masculine proportions." />
        <meta property="og:title" content="Male Cosmetic Surgery in Malaysia | Dr. Soma Clinical Aesthetics" />
        <meta property="og:description" content="Private, respectful care for men who want to feel confident again. Explore male cosmetic surgery options in Malaysia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl("/male")} />
        <meta property="og:image" content={getFullUrl("/images/Male Cosmetic Surgery.jpg")} />
        <link rel="canonical" href={getFullUrl("/male")} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://drsomaplasticsurgery.com/male#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is male cosmetic surgery?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Male cosmetic surgery includes procedures designed to improve body or facial appearance while preserving masculine proportions and a natural look."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is cosmetic surgery common among men in Malaysia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Many men seek cosmetic procedures for confidence, comfort, and self-image, often choosing to keep it private."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will male cosmetic surgery look obvious?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most men want subtle improvements. When planned correctly, results aim to look natural and fit your build, face, and age."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will people be able to tell I had surgery?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The goal is discreet change. Many people simply notice that you look fitter or more confident, not that you had a procedure."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is male cosmetic surgery safe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All procedures carry risks. Safety depends on proper assessment, realistic planning, and careful surgical technique."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to decide on a procedure before booking?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Many men start with a concern rather than a procedure name. The consultation helps clarify suitable options."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is male cosmetic surgery confidential?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Consultations and treatments are handled with strict privacy and discretion."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I talk openly without being judged?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Consultations are respectful, professional, and focused on your concerns, not assumptions or pressure."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can multiple treatments be combined?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Some men combine treatments for better overall balance. This depends on health, goals, and safety assessment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is male cosmetic surgery only for younger men?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Men of different ages seek cosmetic surgery for different reasons, from body contouring to facial balance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will results last long term?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Surgical changes are long-lasting, but maintaining results depends on lifestyle, weight stability, and ageing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if I am unsure or nervous about surgery?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "That is very common. A consultation is meant to give clarity and honest guidance, not push you into a decision."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I start male cosmetic surgery in Malaysia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The first step is a private consultation to discuss your concerns, options, and suitability."
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://drsomaplasticsurgery.com/male#service",
              "name": "Male Cosmetic Surgery in Malaysia | Dr. Soma Clinical Aesthetics",
              "url": "https://drsomaplasticsurgery.com/male",
              "description": "Private, respectful male cosmetic surgery in Malaysia. Gynecomastia, hair transplant, jawline enhancement, rhinoplasty, and more. Natural results that preserve masculine proportions.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.9,
                "reviewCount": 127
              },
              "image": "https://drsomaplasticsurgery.com/images/Male Cosmetic Surgery.jpg"
            })
          }}
        />
      </Head>

      {/* ==================== HERO SECTION ==================== */}
      <section
        className="relative bg-no-repeat bg-cover bg-center py-20 lg:py-32 overflow-hidden"
        style={{ backgroundImage: `url(${getAssetPath('/images/Male Cosmetic Surgery.jpg')})` }}
        ref={heroRef}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="flex containers w-full relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center w-full">
            {/* Left Content */}
            <div className={`flex-1 flex flex-col gap-5 max-w-2xl text-center sm:text-left items-center sm:items-start ${
              isVisible("section-0") ? "animate-slideInLeft" : "opacity-0"
            }`}>
              <span className={`inline-block bg-primary text-white text-sm font-bold px-4 py-2 rounded-full w-fit uppercase tracking-wide ${
                isVisible("section-0") ? "animate-fadeInUp" : "opacity-0"
              }`}>
                {t('mh.badge')}
              </span>

              <h1 className={`text-primary drop-shadow-lg text-3xl sm:text-4xl lg:text-5xl ${
                isVisible("section-0") ? "animate-fadeInUp delay-100" : "opacity-0"
              }`}>
                {t('mh.title1')} <span className="text-header-black">{t('mh.titleHighlight')}</span>
              </h1>

              <p className={`text-white/90 text-lg lg:text-xl font-medium ${
                isVisible("section-0") ? "animate-fadeInUp delay-200" : "opacity-0"
              }`}>
                {t('mh.subtitle')}
              </p>

              <p className={`text-white/80 text-sm lg:text-base leading-relaxed ${
                isVisible("section-0") ? "animate-fadeInUp delay-300" : "opacity-0"
              }`}>
                {t('mh.heroDesc')}
              </p>

              <div className={`flex flex-wrap gap-4 mt-4 justify-center sm:justify-start ${
                isVisible("section-0") ? "animate-fadeInUp delay-400" : "opacity-0"
              }`}>
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg uppercase tracking-wide text-sm animate-pulseGlow"
                >
                  {t('mh.bookBtn')}
                </Link>
                <Link
                  href="https://wa.me/60142616007"
                  className="bg-white hover:bg-gray-100 text-header-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 uppercase tracking-wide text-sm"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t('mh.whatsAppBtn')}
                </Link>
              </div>

              <p className={`text-white/50 text-xs lg:text-sm italic mt-2 ${
                isVisible("section-0") ? "animate-fadeInUp delay-500" : "opacity-0"
              }`}>
                {t('mh.disclaimer')}
              </p>
            </div>

            {/* Right Image */}
            <div className={`flex-1 hidden lg:flex justify-end ${
              isVisible("section-0") ? "animate-slideInRight" : "opacity-0"
            }`}>
              <div className="relative">
                <BaseImage
                  src="/images/Male Cosmetic Surgery.jpg"
                  width={450}
                  height={400}
                  alt="Male Cosmetic Surgery Malaysia"
                  className="rounded-2xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl px-8 py-6 animate-float">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-bounceSoft">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-header-black text-xl">{t('mh.hundredPercent')}</p>
                      <p className="text-para-black text-sm">{t('mh.confidential')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DISCOVER MALE TREATMENTS SECTION ==================== */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-para-white" ref={treatmentsRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-16 w-full">
            {/* Section Header */}
            <div className={`text-center transition-all duration-700 opacity-100 sm:opacity-0 ${
              isVisible("section-1") ? "sm:opacity-100 translate-y-0" : "sm:translate-y-8"
            }`}>
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">
                {t('mh.treatLabel')}
              </span>
              <h2 className="text-header-black mb-4">
                {t('mh.treatTitle1')} <span className="text-primary">{t('mh.treatTitle2')}</span>
              </h2>
              <p className="text-para-black max-w-2xl mx-auto">
                {t('mh.treatDesc')}
              </p>
            </div>

            {/* Treatment Categories */}
            {treatmentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className={`transition-all duration-700 opacity-100 sm:opacity-0 ${
                isVisible("section-1") ? "sm:opacity-100 translate-y-0" : "sm:translate-y-8"
              }`}>
                {/* Category Header with Image */}
                <div className="flex flex-col lg:flex-row gap-8 mb-10 bg-secondary rounded-2xl overflow-hidden">
                  {/* Category Image */}
                  <div className="relative w-full lg:w-[300px] h-[200px] lg:h-auto flex-shrink-0">
                    <BaseImage
                      src={category.categoryImage}
                      fill
                      alt={category.category}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/50 hidden lg:block"></div>
                  </div>

                  {/* Category Info */}
                  <div className="flex flex-col justify-center p-6 lg:py-8 lg:pr-8 lg:pl-0">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                      {categoryIndex === 0 ? t('mh.catLabel0') : categoryIndex === 1 ? t('mh.catLabel1') : t('mh.catLabel2')}
                    </span>
                    <h3 className="text-header-black text-2xl lg:text-3xl font-bold mb-3">
                      {category.category}
                    </h3>
                    <p className="text-para-black mb-4">{category.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                      <span>{category.treatments.length} {t('mh.treatmentsAvailable')}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Treatment Cards - Professional Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {category.treatments.map((treatment, index) => (
                    <Link
                      key={index}
                      href={treatment.href}
                      className="group block"
                    >
                      {/* Card Container */}
                      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary/20 group-hover:-translate-y-1 h-full flex flex-col">

                        {/* Image Section with Padding */}
                        <div className="p-4">
                          <div className="relative h-[200px] rounded-xl overflow-hidden">
                            <BaseImage
                              src={treatment.image}
                              fill
                              alt={treatment.title}
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Tag Badge */}
                            {treatment.tag && (
                              <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                {treatment.tag}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Content Section with More Padding */}
                        <div className="px-6 pb-6 pt-2 flex flex-col flex-grow">
                          {/* Title */}
                          <h4 className="text-header-black text-lg font-bold mb-3 group-hover:text-primary transition-colors normal-case">
                            {treatment.title}
                          </h4>

                          {/* Description */}
                          <p className="text-para-black text-sm leading-relaxed mb-5 flex-grow">
                            {treatment.description}
                          </p>

                          {/* CTA Button */}
                          <div className="flex items-center gap-2 text-primary font-semibold text-sm pt-4 border-t border-gray-100">
                            <span>{t('mh.viewTreatment')}</span>
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* View All CTA */}
            <div className={`text-center transition-all duration-700 opacity-100 sm:opacity-0 ${
              isVisible("section-1") ? "sm:opacity-100 translate-y-0" : "sm:translate-y-8"
            }`}>
              <p className="text-para-black mb-4">{t('mh.cantFind')}</p>
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm"
              >
                {t('mh.bookPrivate')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DECISION GUIDE SECTION ==================== */}
      <section className="py-16 lg:py-20 bg-white" ref={decisionRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col w-full">
            {/* Section Header */}
            <div className={`text-center mb-10 ${
              isVisible("section-2") ? "animate-fadeInUp" : "opacity-0"
            }`}>
              <h2 className="text-header-black mb-3">
                {t('mh.dgTitle1')} <span className="text-primary">{t('mh.dgTitle2')}</span>
              </h2>
              <p className="text-para-black">
                {t('mh.dgDesc')}
              </p>
            </div>

            {/* Decision Guide Cards */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {decisionGuide.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`group bg-para-white rounded-xl px-6 py-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden ${
                      isVisible("section-2") ? "animate-fadeInUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Hover line animation */}
                    <div className="absolute top-0 left-0 h-[3px] w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out"></div>

                    {/* Number Badge */}
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mb-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>

                    {/* Concern Text */}
                    <p className="text-header-black text-sm leading-relaxed mb-5 flex-grow">
                      {item.concern}
                    </p>

                    {/* Solution Link */}
                    <div className="pt-4 border-t border-gray-100 flex-shrink-0">
                      <span className="text-primary font-semibold text-sm group-hover:underline">
                        {item.solution}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={`text-center mt-14 ${
              isVisible("section-2") ? "animate-fadeInUp delay-700" : "opacity-0"
            }`}>
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t('mh.bookPrivate')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT NATURAL MEANS SECTION ==================== */}
      <section className="py-16 lg:py-24 bg-secondary overflow-hidden" ref={meaningRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center w-full">
            {/* Left Content */}
            <div className={`flex-1 flex flex-col gap-6 ${
              isVisible("section-3") ? "animate-slideInLeft" : "opacity-0"
            }`}>
              <h2 className="text-header-black">
                {t('mh.natTitle1')} <span className="text-primary">{t('mh.natTitle2')}</span>
              </h2>

              <p className="text-para-black text-lg font-medium">
                {t('mh.natSubtitle')}
              </p>

              <p className="text-para-black">
                {t('mh.natDesc')}
              </p>

              <div className="space-y-4">
                {naturalMeans.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-row items-center gap-2 ${
                      isVisible("section-3") ? "animate-fadeInUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 min-w-[2rem] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 hover:bg-primary/20 transition-colors">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-header-black flex-1">{item}</p>
                  </div>
                ))}
              </div>

              <p className={`text-para-black mt-4 ${
                isVisible("section-3") ? "animate-fadeInUp delay-600" : "opacity-0"
              }`}>
                {t('mh.natClosing')}
              </p>
            </div>

            {/* Right Image */}
            <div className={`flex-1 ${
              isVisible("section-3") ? "animate-slideInRight" : "opacity-0"
            }`}>
              <div className="relative group">
                <BaseImage
                  src="/images/natural.jpg"
                  width={500}
                  height={400}
                  alt="Natural Results for Men"
                  className="rounded-2xl shadow-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary/20 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== YOUR JOURNEY SECTION ==================== */}
      <section className="py-16 lg:py-24 bg-para-white" ref={journeyRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-10 lg:gap-14 w-full">
            {/* Section Header */}
            <div className={`text-center ${
              isVisible("section-5") ? "animate-fadeInUp" : "opacity-0"
            }`}>
              <h2 className="text-header-black">
                {t('mh.jTitle1')} <span className="text-primary">{t('mh.jTitle2')}</span>
              </h2>
            </div>

            {/* Journey Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-md text-center relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    isVisible("section-5") ? "animate-fadeInUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.15}s` }}
                >
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg animate-bounceSoft">
                    {step.num}
                  </div>
                  <h4 className="text-header-black font-bold mb-3 normal-case">{step.title}</h4>
                  <p className="text-para-black text-sm">{step.description}</p>

                  {/* Connector line */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-20 lg:py-28 bg-secondary" ref={faqRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-12 w-full max-w-4xl mx-auto">
            {/* Section Header */}
            <div className={`text-center transition-all duration-700 ${
              isVisible("section-6") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">
                {t('mh.faqLabel')}
              </span>
              <h2 className="text-header-black mb-4">
                {t('mh.faqTitle1')} <span className="text-primary">{t('mh.faqTitle2')}</span>
              </h2>
              <p className="text-para-black max-w-2xl mx-auto">
                {t('mh.faqDesc')}
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className={`space-y-4 transition-all duration-700 ${
              isVisible("section-6") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "shadow-lg border-2 border-primary/20"
                      : "shadow-sm border border-gray-100 hover:shadow-md"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 lg:px-8 lg:py-6 text-left"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h4 className={`font-semibold flex-1 text-sm lg:text-base transition-colors ${
                      openIndex === index ? "text-primary" : "text-header-black"
                    }`}>
                      {faq.question}
                    </h4>
                    <div className={`flex-shrink-0 min-w-[32px] w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                      openIndex === index
                        ? "bg-primary text-white"
                        : "bg-secondary text-primary"
                    }`}>
                      {openIndex === index ? "−" : "+"}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}>
                    <div className="px-6 pb-6 lg:px-8 lg:pb-8 text-para-black text-sm lg:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="py-16 lg:py-24 bg-primary overflow-hidden" ref={ctaRef}>
        <div className="flex containers w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className={`text-white mb-4 ${
              isVisible("section-7") ? "animate-fadeInUp" : "opacity-0"
            }`}>
              {t('mh.ctaTitle')}
            </h2>

            <p className={`text-white mb-8 ${
              isVisible("section-7") ? "animate-fadeInUp delay-200" : "opacity-0"
            }`}>
              {t('mh.ctaDesc')}
            </p>

            <div className={`flex flex-wrap justify-center gap-4 ${
              isVisible("section-7") ? "animate-fadeInUp delay-400" : "opacity-0"
            }`}>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg uppercase tracking-wide text-sm hover:shadow-2xl"
              >
                {t('mh.ctaBookBtn')}
              </Link>
              <Link
                href="https://wa.me/60142616007"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 uppercase tracking-wide text-sm"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('mh.ctaWhatsApp')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MaleHub;
