import React, { useState, useEffect, useRef } from "react";
import BaseImage from "@/components/BaseImage";
import Link from "next/link";
import Head from "next/head";
import { getFullUrl, getAssetPath } from "@/utils/helper";
import { useTranslation } from "react-i18next";

const AestheticTreatmentsHub = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  const heroRef = useRef<HTMLDivElement>(null);
  const whatIsRef = useRef<HTMLDivElement>(null);
  const treatmentsRef = useRef<HTMLDivElement>(null);
  const decisionRef = useRef<HTMLDivElement>(null);
  const safetyRef = useRef<HTMLDivElement>(null);
  const whyHubRef = useRef<HTMLDivElement>(null);
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

    const sections = [heroRef, whatIsRef, treatmentsRef, decisionRef, safetyRef, whyHubRef, faqRef, ctaRef];
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
      category: t('aesHub.cat1Name'),
      description: t('aesHub.cat1Desc'),
      categoryImage: "/images/lip_filler.webp",
      treatments: [
        {
          title: t('aesHub.dermalFillersTitle'),
          area: t('aesHub.dermalFillersArea'),
          description: t('aesHub.dermalFillersDesc'),
          href: "/aesthetic-treatments/dermal-fillers-malaysia",
          image: "/images/lip_filler.webp",
          tag: t('aesHub.dermalFillersTag'),
        },
        {
          title: t('aesHub.lipFillerTitle'),
          area: t('aesHub.lipFillerArea'),
          description: t('aesHub.lipFillerDesc'),
          href: "/aesthetic-treatments/lip-filler-malaysia",
          image: "/images/lip_filler.webp",
          tag: null,
        },
        {
          title: t('aesHub.botoxTitle'),
          area: t('aesHub.botoxArea'),
          description: t('aesHub.botoxDesc'),
          href: "/aesthetic-treatments/botox-malaysia",
          image: "/images/botox.jpg",
          tag: t('aesHub.botoxTag'),
        },
        {
          title: t('aesHub.profhiloTitle'),
          area: t('aesHub.profhiloArea'),
          description: t('aesHub.profhiloDesc'),
          href: "/aesthetic-treatments/profhilo-malaysia",
          image: "/images/profhilo.jpg",
          tag: t('aesHub.profhiloTag'),
        },
      ],
    },
    {
      category: t('aesHub.cat2Name'),
      description: t('aesHub.cat2Desc'),
      categoryImage: "/images/Safe_thread_in_face.webp",
      treatments: [
        {
          title: t('aesHub.threadLiftTitle'),
          area: t('aesHub.threadLiftArea'),
          description: t('aesHub.threadLiftDesc'),
          href: "/aesthetic-treatments/thread-lift-malaysia",
          image: "/images/Safe_thread_in_face.webp",
          tag: t('aesHub.threadLiftTag'),
        },
        {
          title: t('aesHub.noseThreadTitle'),
          area: t('aesHub.noseThreadArea'),
          description: t('aesHub.noseThreadDesc'),
          href: "/aesthetic-treatments/nose-thread-lift-malaysia",
          image: "/images/rhinoplasty_in_nose.webp",
          tag: null,
        },
      ],
    },
    {
      category: t('aesHub.cat3Name'),
      description: t('aesHub.cat3Desc'),
      categoryImage: "/images/skin_care_image.webp",
      treatments: [
        {
          title: t('aesHub.keloidTitle'),
          area: t('aesHub.keloidArea'),
          description: t('aesHub.keloidDesc'),
          href: "/aesthetic-treatments/keloid-treatment-malaysia",
          image: "/images/keloid_treatment.webp",
          tag: t('aesHub.keloidTag'),
        },
        {
          title: t('aesHub.scarTitle'),
          area: t('aesHub.scarArea'),
          description: t('aesHub.scarDesc'),
          href: "/aesthetic-treatments/scar-treatment-malaysia",
          image: "/images/skin_care_image.webp",
          tag: null,
        },
        {
          title: t('aesHub.laserScarTitle'),
          area: t('aesHub.laserScarArea'),
          description: t('aesHub.laserScarDesc'),
          href: "/aesthetic-treatments/laser-scar-removal-malaysia",
          image: "/images/skin_care_image.webp",
          tag: t('aesHub.laserScarTag'),
        },
        {
          title: t('aesHub.chemPeelTitle'),
          area: t('aesHub.chemPeelArea'),
          description: t('aesHub.chemPeelDesc'),
          href: "/aesthetic-treatments/chemical-peel-malaysia",
          image: "/images/chemical_peel.jpg",
          tag: null,
        },
        {
          title: t('aesHub.acneTitle'),
          area: t('aesHub.acneArea'),
          description: t('aesHub.acneDesc'),
          href: "/aesthetic-treatments/acne-treatment-malaysia",
          image: "/images/acne.jpg",
          tag: null,
        },
      ],
    },
  ];

  // Decision guide data
  const decisionGuide = [
    { concern: t('aesHub.concern1'), solution: t('aesHub.solution1'), href: "/aesthetic-treatments/botox-malaysia" },
    { concern: t('aesHub.concern2'), solution: t('aesHub.solution2'), href: "/aesthetic-treatments/dermal-fillers-malaysia" },
    { concern: t('aesHub.concern3'), solution: t('aesHub.solution3'), href: "/aesthetic-treatments/lip-filler-malaysia" },
    { concern: t('aesHub.concern4'), solution: t('aesHub.solution4'), href: "/aesthetic-treatments/thread-lift-malaysia" },
    { concern: t('aesHub.concern5'), solution: t('aesHub.solution5'), href: "/aesthetic-treatments/nose-thread-lift-malaysia" },
    { concern: t('aesHub.concern6'), solution: t('aesHub.solution6'), href: "/aesthetic-treatments/profhilo-malaysia" },
    { concern: t('aesHub.concern7'), solution: t('aesHub.solution7'), href: "/aesthetic-treatments/keloid-treatment-malaysia" },
    { concern: t('aesHub.concern8'), solution: t('aesHub.solution8'), href: "/aesthetic-treatments/scar-treatment-malaysia" },
    { concern: t('aesHub.concern9'), solution: t('aesHub.solution9'), href: "/aesthetic-treatments/acne-treatment-malaysia" },
    { concern: t('aesHub.concern10'), solution: t('aesHub.solution10'), href: "/aesthetic-treatments/chemical-peel-malaysia" },
  ];

  // Safety and ethics points
  const safetyPoints = [
    t('aesHub.safety1'),
    t('aesHub.safety2'),
    t('aesHub.safety3'),
    t('aesHub.safety4'),
  ];

  // Why use hub points
  const whyHubPoints = [
    t('aesHub.why1'),
    t('aesHub.why2'),
    t('aesHub.why3'),
    t('aesHub.why4'),
  ];

  // FAQ data
  const faqData = [
    { question: t('aesHub.faq1Q'), answer: t('aesHub.faq1A') },
    { question: t('aesHub.faq2Q'), answer: t('aesHub.faq2A') },
    { question: t('aesHub.faq3Q'), answer: t('aesHub.faq3A') },
    { question: t('aesHub.faq4Q'), answer: t('aesHub.faq4A') },
    { question: t('aesHub.faq5Q'), answer: t('aesHub.faq5A') },
    { question: t('aesHub.faq6Q'), answer: t('aesHub.faq6A') },
    { question: t('aesHub.faq7Q'), answer: t('aesHub.faq7A') },
    { question: t('aesHub.faq8Q'), answer: t('aesHub.faq8A') },
  ];

  return (
    <>
      <Head>
        <title>Aesthetic Treatments Hub | Surgical & Non-Surgical Procedures in Malaysia</title>
        <meta name="description" content="Explore our aesthetic treatments hub in Malaysia covering facial surgery, body contouring, and advanced non-surgical enhancements delivered by qualified specialists." />
        <meta property="og:title" content="Aesthetic Treatments Hub | Surgical & Non-Surgical Procedures in Malaysia" />
        <meta property="og:description" content="Explore our aesthetic treatments hub in Malaysia covering facial surgery, body contouring, and advanced non-surgical enhancements delivered by qualified specialists." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl("/aesthetic-treatments")} />
        <meta property="og:image" content={getFullUrl("/images/face_image.webp")} />
        <link rel="canonical" href="https://drsomaplasticsurgery.com/aesthetic-treatments" />
      </Head>

      {/* ==================== HERO SECTION ==================== */}
      <section
        className="relative bg-no-repeat bg-cover bg-center py-20 lg:py-32 overflow-hidden"
        style={{ backgroundImage: `url(${getAssetPath('/images/face_background.png')})` }}
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
                {t('aesHub.badge')}
              </span>

              <h1 className={`text-primary drop-shadow-lg text-3xl sm:text-4xl lg:text-5xl ${
                isVisible("section-0") ? "animate-fadeInUp delay-100" : "opacity-0"
              }`}>
                {t('aesHub.heroTitle1')} <span className="text-header-black">{t('aesHub.heroTitle2')}</span>
              </h1>

              <p className={`text-white/90 text-lg lg:text-xl font-medium ${
                isVisible("section-0") ? "animate-fadeInUp delay-200" : "opacity-0"
              }`}>
                {t('aesHub.heroSubtitle')}
              </p>

              <p className={`text-white/80 text-sm lg:text-base leading-relaxed ${
                isVisible("section-0") ? "animate-fadeInUp delay-300" : "opacity-0"
              }`}>
                {t('aesHub.heroDesc')}
              </p>

              <div className={`flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 ${
                isVisible("section-0") ? "animate-fadeInUp delay-350" : "opacity-0"
              }`}>
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white text-sm font-medium">{t('aesHub.regulatedBy')}</span>
              </div>

              <div className={`flex flex-wrap gap-4 mt-4 justify-center sm:justify-start ${
                isVisible("section-0") ? "animate-fadeInUp delay-400" : "opacity-0"
              }`}>
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg uppercase tracking-wide text-sm animate-pulseGlow"
                >
                  {t('aesHub.bookConsultation')}
                </Link>
                <Link
                  href="https://wa.me/60142616007"
                  className="bg-white hover:bg-gray-100 text-header-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 uppercase tracking-wide text-sm"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t('aesHub.whatsappUs')}
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className={`flex-1 hidden lg:flex justify-end ${
              isVisible("section-0") ? "animate-slideInRight" : "opacity-0"
            }`}>
              <div className="relative">
                <BaseImage
                  src="/images/face_image.webp"
                  width={450}
                  height={400}
                  alt="Aesthetic Treatments Malaysia"
                  className="rounded-2xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl px-8 py-6 animate-float">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-bounceSoft">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-header-black text-xl">{t('aesHub.mohRegulated')}</p>
                      <p className="text-para-black text-sm">{t('aesHub.licensedFacility')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT ARE AESTHETIC TREATMENTS SECTION ==================== */}
      <section className="py-16 lg:py-24 bg-white" ref={whatIsRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center w-full">
            {/* Left Image */}
            <div className={`flex-1 order-2 lg:order-1 ${
              isVisible("section-1") ? "animate-slideInLeft" : "opacity-0"
            }`}>
              <div className="relative group">
                <BaseImage
                  src="/images/dr-soma-surgeon.jpg"
                  width={500}
                  height={450}
                  alt="Dr. Somasundaram Sathappan"
                  className="rounded-2xl shadow-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-primary/20 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className={`flex-1 flex flex-col gap-6 order-1 lg:order-2 ${
              isVisible("section-1") ? "animate-slideInRight" : "opacity-0"
            }`}>
              <h2 className="text-header-black">
                {t('aesHub.whatTitle1')} <span className="text-primary">{t('aesHub.whatTitle2')}</span>
              </h2>

              <p className="text-para-black text-lg">
                {t('aesHub.whatDesc1')}
              </p>

              <p className="text-para-black">
                {t('aesHub.whatDesc2')}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ==================== CATEGORIES OF TREATMENTS SECTION ==================== */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-para-white to-white" ref={treatmentsRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-16 w-full">
            {/* Section Header */}
            <div className={`text-center transition-all duration-700 opacity-100 sm:opacity-0 ${
              isVisible("section-2") ? "sm:opacity-100 translate-y-0" : "sm:translate-y-8"
            }`}>
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">
                {t('aesHub.ourServices')}
              </span>
              <h2 className="text-header-black mb-4">
                {t('aesHub.catTitle1')} <span className="text-primary">{t('aesHub.catTitle2')}</span>
              </h2>
              <p className="text-para-black max-w-2xl mx-auto">
                {t('aesHub.catDesc')}
              </p>
            </div>

            {/* Treatment Categories */}
            {treatmentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className={`transition-all duration-700 opacity-100 sm:opacity-0 ${
                isVisible("section-2") ? "sm:opacity-100 translate-y-0" : "sm:translate-y-8"
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
                    <h3 className="text-header-black text-2xl lg:text-3xl font-bold mb-3">
                      {category.category}
                    </h3>
                    <p className="text-para-black mb-4">{category.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                      <span>{category.treatments.length} {t('aesHub.treatmentsAvailable')}</span>
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
                            <span>{t('aesHub.viewTreatment')}</span>
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
          </div>
        </div>
      </section>

      {/* ==================== DECISION GUIDE SECTION ==================== */}
      <section className="py-16 lg:py-20 bg-white" ref={decisionRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col w-full">
            {/* Section Header */}
            <div className={`text-center mb-10 ${
              isVisible("section-3") ? "animate-fadeInUp" : "opacity-0"
            }`}>
              <h2 className="text-header-black mb-3">
                {t('aesHub.decisionTitle1')} <span className="text-primary">{t('aesHub.decisionTitle2')}</span>
              </h2>
              <p className="text-para-black">
                {t('aesHub.decisionDesc')}
              </p>
            </div>

            {/* Decision Guide Cards */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {decisionGuide.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`group bg-para-white rounded-xl px-6 py-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden ${
                      isVisible("section-3") ? "animate-fadeInUp" : "opacity-0"
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
          </div>
        </div>
      </section>

      {/* ==================== SAFETY & ETHICS SECTION ==================== */}
      <section className="py-16 lg:py-24 bg-secondary overflow-hidden" ref={safetyRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center w-full">
            {/* Left Content */}
            <div className={`flex-1 flex flex-col gap-6 ${
              isVisible("section-4") ? "animate-slideInLeft" : "opacity-0"
            }`}>
              <h2 className="text-header-black">
                {t('aesHub.safetyTitle1')} <span className="text-primary">{t('aesHub.safetyTitle2')}</span>
              </h2>

              <p className="text-para-black text-lg font-medium">
                {t('aesHub.safetySubtitle')}
              </p>

              <p className="text-para-black">
                {t('aesHub.safetyDesc')}
              </p>

              <div className="space-y-4">
                {safetyPoints.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-row items-center gap-2 ${
                      isVisible("section-4") ? "animate-fadeInUp" : "opacity-0"
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
            </div>

            {/* Right Image */}
            <div className={`flex-1 ${
              isVisible("section-4") ? "animate-slideInRight" : "opacity-0"
            }`}>
              <div className="relative group">
                <BaseImage
                  src="/images/highly_skilled_doctor.webp"
                  width={500}
                  height={400}
                  alt="Safety and Ethics"
                  className="rounded-2xl shadow-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary/20 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY USE AN AESTHETIC HUB SECTION ==================== */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden" ref={whyHubRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center w-full">
            {/* Left Image */}
            <div className={`flex-1 order-2 lg:order-1 ${
              isVisible("section-5") ? "animate-slideInLeft" : "opacity-0"
            }`}>
              <div className="relative group">
                <BaseImage
                  src="/images/doctor_patient_relationship.webp"
                  width={500}
                  height={450}
                  alt="Why Use Aesthetic Hub"
                  className="rounded-2xl shadow-xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-primary/20 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className={`flex-1 flex flex-col gap-6 order-1 lg:order-2 ${
              isVisible("section-5") ? "animate-slideInRight" : "opacity-0"
            }`}>
              <h2 className="text-header-black">
                {t('aesHub.whyTitle1')} <span className="text-primary">{t('aesHub.whyTitle2')}</span>
              </h2>

              <p className="text-para-black">
                {t('aesHub.whyDesc')}
              </p>

              <div className="space-y-4">
                {whyHubPoints.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-row items-center gap-2 ${
                      isVisible("section-5") ? "animate-fadeInUp" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
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

              <div className="bg-secondary rounded-xl p-6 mt-4">
                <p className="text-para-black italic">
                  {t('aesHub.whyQuote')}
                </p>
              </div>
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
                {t('aesHub.faqBadge')}
              </span>
              <h2 className="text-header-black mb-4">
                {t('aesHub.faqTitle1')} <span className="text-primary">{t('aesHub.faqTitle2')}</span>
              </h2>
              <p className="text-para-black max-w-2xl mx-auto">
                {t('aesHub.faqDesc')}
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
              {t('aesHub.ctaTitle')}
            </h2>

            <p className={`text-white text-lg mb-8 ${
              isVisible("section-7") ? "animate-fadeInUp delay-200" : "opacity-0"
            }`}>
              {t('aesHub.ctaDesc')}
            </p>

            <div className={`flex flex-wrap justify-center gap-4 ${
              isVisible("section-7") ? "animate-fadeInUp delay-400" : "opacity-0"
            }`}>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg uppercase tracking-wide text-sm hover:shadow-2xl"
              >
                {t('aesHub.bookConsultation')}
              </Link>
              <Link
                href="https://wa.me/60142616007"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 uppercase tracking-wide text-sm"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('aesHub.whatsappUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AestheticTreatmentsHub;
