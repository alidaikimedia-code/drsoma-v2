import React, { useState, useEffect, useRef } from "react";
import BaseImage from "@/components/BaseImage";
import Link from "next/link";
import Head from "next/head";
import { getFullUrl } from "@/utils/helper";
import { useTranslation } from "react-i18next";

const FaceHub = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const treatmentsRef = useRef<HTMLDivElement>(null);
  const guideRef = useRef<HTMLDivElement>(null);
  const naturalRef = useRef<HTMLDivElement>(null);
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

    const sections = [heroRef, trustRef, treatmentsRef, guideRef, naturalRef, journeyRef, faqRef, ctaRef];
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", `section-${index}`);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleElements.has(sectionId);

  // Trust points data
  const trustPoints = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: t('faceHub.trust0Title'),
      description: t('faceHub.trust0Desc'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('faceHub.trust1Title'),
      description: t('faceHub.trust1Desc'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: t('faceHub.trust2Title'),
      description: t('faceHub.trust2Desc'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('faceHub.trust3Title'),
      description: t('faceHub.trust3Desc'),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t('faceHub.trust4Title'),
      description: t('faceHub.trust4Desc'),
    },
  ];

  // Facial treatments data
  const facialTreatments = [
    {
      title: t('faceHub.rhinoTitle'),
      subtitle: t('faceHub.rhinoSubtitle'),
      category: "nose",
      description: t('faceHub.rhinoDesc'),
      bestFor: [t('faceHub.rhinoBest0'), t('faceHub.rhinoBest1'), t('faceHub.rhinoBest2')],
      href: "/face/rhinoplasty-malaysia",
      image: "/images/Rhinoplasty.jpg",
      featured: true,
    },
    {
      title: t('faceHub.asianRhinoTitle'),
      subtitle: t('faceHub.asianRhinoSubtitle'),
      category: "nose",
      description: t('faceHub.asianRhinoDesc'),
      bestFor: [t('faceHub.asianRhinoBest0'), t('faceHub.asianRhinoBest1'), t('faceHub.asianRhinoBest2')],
      href: "/face/asian-rhinoplasty-malaysia",
      image: "/images/Asian Rhinoplasty.jpg",
    },
    {
      title: t('faceHub.revisionTitle'),
      subtitle: t('faceHub.revisionSubtitle'),
      category: "nose",
      description: t('faceHub.revisionDesc'),
      bestFor: [t('faceHub.revisionBest0'), t('faceHub.revisionBest1'), t('faceHub.revisionBest2')],
      href: "/face/rhinoplasty-revision-malaysia",
      image: "/images/Revision Rhinoplasty.jpg",
    },
    {
      title: t('faceHub.eyelidTitle'),
      subtitle: t('faceHub.eyelidSubtitle'),
      category: "eyes",
      description: t('faceHub.eyelidDesc'),
      bestFor: [t('faceHub.eyelidBest0'), t('faceHub.eyelidBest1'), t('faceHub.eyelidBest2')],
      href: "/face/eyelid-surgery-malaysia",
      image: "/images/eyelid_reduction.webp",
      featured: true,
    },
    {
      title: t('faceHub.asianEyelidTitle'),
      subtitle: t('faceHub.asianEyelidSubtitle'),
      category: "eyes",
      description: t('faceHub.asianEyelidDesc'),
      bestFor: [t('faceHub.asianEyelidBest0'), t('faceHub.asianEyelidBest1'), t('faceHub.asianEyelidBest2')],
      href: "/face/asian-eyelid-surgery-malaysia",
      image: "/images/Asian Eyelid Surgery.jpg",
    },
    {
      title: t('faceHub.browLiftTitle'),
      subtitle: t('faceHub.browLiftSubtitle'),
      category: "lift",
      description: t('faceHub.browLiftDesc'),
      bestFor: [t('faceHub.browLiftBest0'), t('faceHub.browLiftBest1'), t('faceHub.browLiftBest2')],
      href: "/face/brow-lift-malaysia",
      image: "/images/Brow Lift.jpg",
    },
    {
      title: t('faceHub.faceLiftTitle'),
      subtitle: t('faceHub.faceLiftSubtitle'),
      category: "lift",
      description: t('faceHub.faceLiftDesc'),
      bestFor: [t('faceHub.faceLiftBest0'), t('faceHub.faceLiftBest1'), t('faceHub.faceLiftBest2')],
      href: "/face/face-lift-malaysia",
      image: "/images/Face Lift.jpg",
      featured: true,
    },
    {
      title: t('faceHub.neckLiftTitle'),
      subtitle: t('faceHub.neckLiftSubtitle'),
      category: "lift",
      description: t('faceHub.neckLiftDesc'),
      bestFor: [t('faceHub.neckLiftBest0'), t('faceHub.neckLiftBest1'), t('faceHub.neckLiftBest2')],
      href: "/face/neck-lift-malaysia",
      image: "/images/Neck Lift.jpg",
    },
    {
      title: t('faceHub.buccalTitle'),
      subtitle: t('faceHub.buccalSubtitle'),
      category: "contour",
      description: t('faceHub.buccalDesc'),
      bestFor: [t('faceHub.buccalBest0'), t('faceHub.buccalBest1'), t('faceHub.buccalBest2')],
      href: "/face/buccal-fat-removal-malaysia",
      image: "/images/Buccal Fat Removal.jpg",
    },
    {
      title: t('faceHub.chinTitle'),
      subtitle: t('faceHub.chinSubtitle'),
      category: "contour",
      description: t('faceHub.chinDesc'),
      bestFor: [t('faceHub.chinBest0'), t('faceHub.chinBest1'), t('faceHub.chinBest2')],
      href: "/face/chin-augmentation-malaysia",
      image: "/images/Chin Augmentation.jpg",
    },
  ];

  // Filter categories
  const filterCategories = [
    { id: "all", label: t('faceHub.filterAll') },
    { id: "nose", label: t('faceHub.filterNose') },
    { id: "eyes", label: t('faceHub.filterEyes') },
    { id: "lift", label: t('faceHub.filterLift') },
    { id: "contour", label: t('faceHub.filterContour') },
  ];

  // Decision guide data
  const decisionGuide = [
    { concern: t('faceHub.concern0'), solution: t('faceHub.solution0'), href: "/face/rhinoplasty-malaysia" },
    { concern: t('faceHub.concern1'), solution: t('faceHub.solution1'), href: "/face/rhinoplasty-revision-malaysia" },
    { concern: t('faceHub.concern2'), solution: t('faceHub.solution2'), href: "/face/eyelid-surgery-malaysia" },
    { concern: t('faceHub.concern3'), solution: t('faceHub.solution3'), href: "/face/face-lift-malaysia" },
    { concern: t('faceHub.concern4'), solution: t('faceHub.solution4'), href: "/face/brow-lift-malaysia" },
    { concern: t('faceHub.concern5'), solution: t('faceHub.solution5'), href: "/face/neck-lift-malaysia" },
    { concern: t('faceHub.concern6'), solution: t('faceHub.solution6'), href: "/face/buccal-fat-removal-malaysia" },
    { concern: t('faceHub.concern7'), solution: t('faceHub.solution7'), href: "/face/chin-augmentation-malaysia" },
  ];

  // Natural results points
  const naturalResults = Array.from({ length: 4 }, (_, i) => t(`faceHub.naturalItem${i}`));

  // Journey steps
  const journeySteps = [
    { num: "01", title: t('faceHub.journeyStep1Title'), description: t('faceHub.journeyStep1Desc') },
    { num: "02", title: t('faceHub.journeyStep2Title'), description: t('faceHub.journeyStep2Desc') },
    { num: "03", title: t('faceHub.journeyStep3Title'), description: t('faceHub.journeyStep3Desc') },
    { num: "04", title: t('faceHub.journeyStep4Title'), description: t('faceHub.journeyStep4Desc') },
  ];

  // FAQ data
  const faqData = Array.from({ length: 8 }, (_, i) => ({
    question: t(`faceHub.faq${i}Q`),
    answer: t(`faceHub.faq${i}A`),
  }));

  // Filter treatments
  const filteredTreatments = activeFilter === "all"
    ? facialTreatments
    : facialTreatments.filter((tr) => tr.category === activeFilter);

  return (
    <>
      <Head>
        <title>Facial Cosmetic Surgery in Malaysia | Dr. Soma Clinical Aesthetics</title>
        <meta name="description" content="Explore facial cosmetic surgery options in Malaysia with Dr. Soma. From rhinoplasty to face lift, find procedures that enhance your natural beauty in a safe, professional environment." />
        <meta property="og:title" content="Facial Cosmetic Surgery in Malaysia | Dr. Soma Clinical Aesthetics" />
        <meta property="og:description" content="Explore facial cosmetic surgery options in Malaysia. Natural-looking results that still look like you." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl("/face")} />
        <meta property="og:image" content={getFullUrl("/images/face_lift.webp")} />
        <link rel="canonical" href={getFullUrl("/face")} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://drsomaplasticsurgery.com/face#faq",
              "mainEntity": [
                {"@type": "Question", "name": "What is facial cosmetic surgery?", "acceptedAnswer": {"@type": "Answer", "text": "Facial cosmetic surgery includes procedures that refine facial features, restore balance, or refresh appearance while preserving your natural identity."}},
                {"@type": "Question", "name": "Is facial cosmetic surgery about changing how I look?", "acceptedAnswer": {"@type": "Answer", "text": "Most patients are not looking to change who they are. The goal is usually to look more refreshed, balanced, and confident while still looking like themselves."}},
                {"@type": "Question", "name": "How do I know if facial surgery is right for me?", "acceptedAnswer": {"@type": "Answer", "text": "You do not need to be sure before booking. A consultation helps clarify whether surgery is suitable and which option, if any, fits your concerns."}},
                {"@type": "Question", "name": "Do I need to decide on a procedure before a consultation?", "acceptedAnswer": {"@type": "Answer", "text": "No. Most patients start with a concern, not a procedure name. The consultation helps match concerns to the right options."}},
                {"@type": "Question", "name": "Can multiple facial areas be treated together?", "acceptedAnswer": {"@type": "Answer", "text": "Some patients combine procedures to improve overall harmony, such as nose and chin balance or face and neck lifting. This depends on suitability and safety."}},
                {"@type": "Question", "name": "Is facial cosmetic surgery permanent?", "acceptedAnswer": {"@type": "Answer", "text": "Surgical changes are long-lasting, but natural ageing continues. The goal is improvement, not stopping time."}},
                {"@type": "Question", "name": "What if I am worried about making the wrong decision?", "acceptedAnswer": {"@type": "Answer", "text": "That concern is very common. Consultations are meant to provide clarity and honest guidance, not pressure to proceed."}},
                {"@type": "Question", "name": "Is facial cosmetic surgery only for older patients?", "acceptedAnswer": {"@type": "Answer", "text": "No. Patients of different ages seek facial surgery for different reasons, from structural concerns to early signs of ageing."}}
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
              "@id": "https://drsomaplasticsurgery.com/face#service",
              "name": "Facial Cosmetic Surgery in Malaysia | Dr. Soma Clinical Aesthetics",
              "url": "https://drsomaplasticsurgery.com/face",
              "description": "Explore facial cosmetic surgery options in Malaysia with Dr. Soma. From rhinoplasty to face lift, find procedures that enhance your natural beauty in a safe, professional environment.",
              "aggregateRating": {"@type": "AggregateRating", "ratingValue": 4.9, "reviewCount": 127},
              "image": "https://drsomaplasticsurgery.com/images/face_lift.webp"
            })
          }}
        />
      </Head>

      {/* ==================== LUXURIOUS HERO SECTION ==================== */}
      <section
        className="relative min-h-[90vh] flex items-center bg-[#0a0a0a] overflow-hidden"
        ref={heroRef}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <BaseImage
            src="/images/face_background.png"
            fill
            alt="Facial Surgery Malaysia"
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="flex containers w-full relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
            {/* Left Content */}
            <div className={`flex-1 max-w-2xl text-center sm:text-left ${isVisible("section-0") ? "animate-slideInLeft" : "opacity-100 sm:opacity-0"}`}>
              {/* Luxury Badge */}
              <div className={`inline-flex items-center gap-3 mb-5 justify-center sm:justify-start ${isVisible("section-0") ? "animate-fadeInUp" : "opacity-100 sm:opacity-0"}`}>
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
                <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                  {t('faceHub.heroBadge')}
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
              </div>

              <h1 className={`text-white max-sm:text-4xl text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 ${
                isVisible("section-0") ? "animate-fadeInUp delay-100" : "opacity-100 sm:opacity-0"
              }`}>
                {t('faceHub.heroTitle1')}
                <span className="block text-primary font-semibold mt-2">{t('faceHub.heroTitle2')}</span>
              </h1>

              <p className={`text-white text-base sm:text-lg md:text-xl font-light leading-relaxed mb-4 ${
                isVisible("section-0") ? "animate-fadeInUp delay-200" : "opacity-100 sm:opacity-0"
              }`}>
                {t('faceHub.heroSubtitle')}
              </p>

              <p className={`text-white text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto sm:mx-0 ${
                isVisible("section-0") ? "animate-fadeInUp delay-300" : "opacity-100 sm:opacity-0"
              }`}>
                {t('faceHub.heroDesc')}
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-4 mb-5 justify-center sm:justify-start ${
                isVisible("section-0") ? "animate-fadeInUp delay-400" : "opacity-100 sm:opacity-0"
              }`}>
                <Link
                  href="/contact"
                  className="group relative bg-primary hover:bg-primary/90 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-500 overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative z-10">{t('faceHub.bookConsultation')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
                <Link
                  href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20facial%20surgery%20procedures.%20Can%20I%20get%20more%20information%3F"
                  className="group border border-white/20 hover:border-primary/50 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 flex items-center gap-3 hover:bg-white/5 text-sm sm:text-base"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24">
                    <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t('faceHub.whatsappUs')}
                </Link>
              </div>

              {/* Disclaimer */}
              <p className={`text-white/30 text-xs italic ${
                isVisible("section-0") ? "animate-fadeInUp delay-500" : "opacity-100 sm:opacity-0"
              }`}>
                {t('faceHub.heroDisclaimer')}
              </p>
            </div>

            {/* Right Side - Stats Card */}
            <div className={`flex-1 hidden lg:flex justify-end ${
              isVisible("section-0") ? "animate-slideInRight" : "opacity-100 sm:opacity-0"
            }`}>
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative w-[400px] h-[500px] rounded-3xl overflow-hidden border border-white/10">
                  <BaseImage
                    src="/images/face_image.webp"
                    fill
                    alt="Facial Surgery"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

                  {/* Floating Stats Cards - Inside Image */}
                  <div className="absolute top-6 left-6 bg-white/15 backdrop-blur-xl rounded-2xl p-5 border border-white/20 animate-float z-10">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary mb-1">{t('faceHub.yearsExp')}</p>
                      <p className="text-white text-sm">{t('faceHub.yearsExpLabel')}</p>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 bg-white/15 backdrop-blur-xl rounded-2xl p-5 border border-white/20 animate-float z-10" style={{ animationDelay: "1s" }}>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-white mb-1">{t('faceHub.happyPatients')}</p>
                      <p className="text-white text-sm">{t('faceHub.happyPatientsLabel')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounceSoft">
          <span className="text-white/30 text-xs tracking-widest uppercase">{t('faceHub.scroll')}</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE SOMA SECTION ==================== */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white relative overflow-hidden" ref={trustRef}>
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="flex containers w-full relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-14 w-full">
            {/* Left Content */}
            <div className={`flex-1 text-center sm:text-left ${isVisible("section-1") ? "animate-slideInLeft" : "opacity-100 sm:opacity-0"}`}>
              <div className="sm:sticky sm:top-32">
                <span className="inline-block text-primary text-sm font-medium tracking-[0.15em] uppercase mb-4">
                  {t('faceHub.whyChooseUs')}
                </span>
                <h2 className="text-header-black text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-4">
                  {t('faceHub.whyTitle1')}
                  <span className="text-primary block">{t('faceHub.whyTitle2')}</span>
                </h2>

                <p className="text-para-black text-base sm:text-lg mb-4">
                  {t('faceHub.whyIntro')}
                </p>

                <div className="flex gap-4 sm:gap-8 mb-5 justify-center sm:justify-start">
                  <div className="flex-1 border-l-2 border-primary pl-4 text-left">
                    <p className="text-header-black font-semibold">{t('faceHub.hope')}</p>
                    <p className="text-para-black text-sm">{t('faceHub.hopeDesc')}</p>
                  </div>
                  <div className="flex-1 border-l-2 border-gray-200 pl-4 text-left">
                    <p className="text-header-black font-semibold">{t('faceHub.worry')}</p>
                    <p className="text-para-black text-sm">{t('faceHub.worryDesc')}</p>
                  </div>
                </div>

                <p className="text-para-black">
                  {t('faceHub.trustIntro')}
                </p>
              </div>
            </div>

            {/* Right - Trust Points */}
            <div className={`flex-1 ${isVisible("section-1") ? "animate-slideInRight" : "opacity-100 sm:opacity-0"}`}>
              <div className="space-y-3 sm:space-y-4">
                {trustPoints.map((point, index) => (
                  <div
                    key={index}
                    className={`group bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500 ${
                      isVisible("section-1") ? "animate-fadeInUp" : "opacity-100 sm:opacity-0"
                    }`}
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {point.icon}
                      </div>
                      <div>
                        <h4 className="text-header-black font-semibold text-base sm:text-lg mb-1 normal-case">{point.title}</h4>
                        <p className="text-para-black text-sm sm:text-base">{point.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              </div>
          </div>
        </div>
      </section>

      {/* ==================== TREATMENTS SECTION ==================== */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#fafafa]" ref={treatmentsRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-4 sm:gap-6 w-full">
            {/* Section Header */}
            <div className={`text-center max-w-3xl mx-auto ${isVisible("section-2") ? "animate-fadeInUp" : "opacity-100 sm:opacity-0"}`}>
              <span className="inline-block text-primary text-sm font-medium tracking-[0.15em] uppercase mb-4">
                {t('faceHub.ourExpertise')}
              </span>
              <h2 className="text-header-black text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                {t('faceHub.exploreTitle1')} <span className="text-primary">{t('faceHub.exploreTitle2')}</span>
              </h2>
              <p className="text-para-black text-base sm:text-lg">
                {t('faceHub.exploreSubtitle')}
              </p>
            </div>

            {/* Mobile Dropdown */}
            <div className={`sm:hidden mb-0 ${isVisible("section-2") ? "animate-fadeInUp delay-200" : "opacity-100"}`}>
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="w-full h-14 px-6 bg-white border border-gray-200 rounded-full text-[14px] font-semibold text-[#1A1A1A] shadow-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1.5rem center',
                  backgroundSize: '1.25rem'
                }}
              >
                {filterCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Filter Tabs */}
            <div className={`hidden sm:flex flex-wrap justify-center gap-3 ${isVisible("section-2") ? "animate-fadeInUp delay-200" : "opacity-100 sm:opacity-0"}`}>
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "bg-white text-para-black hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Treatments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredTreatments.map((treatment, index) => (
                <Link
                  key={index}
                  href={treatment.href}
                  className={`group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                    treatment.featured ? "md:col-span-2 lg:col-span-1" : ""
                  } ${isVisible("section-2") ? "animate-fadeInUp" : "opacity-100 sm:opacity-0"}`}
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {/* Featured Badge */}
                  {treatment.featured && (
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                      <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {t('faceHub.popularChoice')}
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-[200px] sm:h-[240px] overflow-hidden">
                    <BaseImage
                      src={treatment.image}
                      fill
                      alt={treatment.title}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-5 sm:p-6 lg:p-8">
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-header-black text-lg sm:text-xl font-bold mb-1 group-hover:text-primary transition-colors normal-case">
                        {treatment.title}
                      </h3>
                      <p className="text-primary text-sm font-medium">{treatment.subtitle}</p>
                    </div>

                    <p className="text-para-black text-sm leading-relaxed mb-4 sm:mb-5">
                      {treatment.description}
                    </p>

                    {/* Best For Tags */}
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      {treatment.bestFor.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-secondary text-header-black text-xs px-3 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-gray-100">
                      <span className="text-primary font-semibold text-sm">{t('faceHub.viewTreatment')}</span>
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                        <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DECISION GUIDE SECTION ==================== */}
      <section className="py-8 sm:py-12 lg:py-16 bg-secondary relative overflow-hidden" ref={guideRef}>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="flex containers w-full relative z-10">
          <div className="flex flex-col gap-8 sm:gap-14 w-full">
            {/* Section Header */}
            <div className={`text-center max-w-3xl mx-auto ${isVisible("section-3") ? "animate-fadeInUp" : "opacity-100 sm:opacity-0"}`}>
              <span className="inline-block text-primary text-sm font-medium tracking-[0.15em] uppercase mb-4">
                {t('faceHub.quickGuide')}
              </span>
              <h2 className="text-header-black text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                {t('faceHub.guideTitle1')}
                <span className="text-primary block">{t('faceHub.guideTitle2')}</span>
              </h2>
              <p className="text-para-black text-base sm:text-lg">
                {t('faceHub.guideSubtitle')}
              </p>
            </div>

            {/* Decision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {decisionGuide.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`group relative bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 text-center sm:text-left ${
                    isVisible("section-3") ? "animate-fadeInUp" : "opacity-100 sm:opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {/* Number */}
                  <div className="hidden sm:block absolute top-4 right-4 sm:top-6 sm:right-6 text-primary/10 text-4xl sm:text-5xl font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative">
                    <p className="text-header-black text-base sm:text-lg mb-4 pr-8 sm:pr-12 font-medium">{item.concern}</p>
                    <div className="flex items-center gap-3 justify-center sm:justify-start">
                      <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent hidden sm:block"></div>
                      <span className="text-primary font-semibold text-sm">{item.solution}</span>
                      <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className={`text-center ${isVisible("section-3") ? "animate-fadeInUp delay-600" : "opacity-100 sm:opacity-0"}`}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-medium px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 text-sm sm:text-base"
              >
                {t('faceHub.bookConsultation')}
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT NATURAL MEANS SECTION ==================== */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white relative overflow-hidden" ref={naturalRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-14 items-center w-full">
            {/* Left Image */}
            <div className={`flex-1 hidden sm:block ${isVisible("section-4") ? "animate-slideInLeft" : "opacity-100 sm:opacity-0"}`}>
              <div className="relative">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
                  <BaseImage
                    src="/images/face_lift_image.webp"
                    fill
                    alt="Natural Results"
                    className="object-cover"
                  />
                </div>
                {/* Decorative Frame */}
                <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border-2 border-primary/20 -z-10"></div>

                {/* Quote Card */}
                <div className="absolute -bottom-10 -left-10 bg-white rounded-2xl shadow-2xl p-6 max-w-[280px] animate-float">
                  <p className="text-header-black text-lg font-medium italic mb-3">
                    &ldquo;{t('faceHub.quoteText')}&rdquo;
                  </p>
                  <p className="text-primary text-sm font-semibold">{t('faceHub.quoteSubtext')}</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className={`flex-1 text-center sm:text-left ${isVisible("section-4") ? "animate-slideInRight" : "opacity-100 sm:opacity-0"}`}>
              <span className="inline-block text-primary text-sm font-medium tracking-[0.15em] uppercase mb-4">
                {t('faceHub.ourPhilosophy')}
              </span>
              <h2 className="text-header-black text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                {t('faceHub.naturalTitle1')}
                <span className="text-primary block">{t('faceHub.naturalTitle2')}</span>
              </h2>

              <div className="bg-secondary/50 rounded-2xl p-5 sm:p-6 mb-3 sm:mb-4">
                <p className="text-header-black text-base sm:text-lg font-medium mb-2">
                  {t('faceHub.naturalNote1')}
                </p>
                <p className="text-para-black text-sm sm:text-base">
                  {t('faceHub.naturalNote2')}
                </p>
              </div>

              <p className="text-para-black text-base sm:text-lg font-medium mb-3 sm:mb-4">{t('faceHub.naturalGoal')}</p>

              <div className="space-y-1 sm:space-y-1">
                {naturalResults.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 sm:gap-3 justify-center sm:justify-start ${
                      isVisible("section-4") ? "animate-fadeInUp" : "opacity-100 sm:opacity-0"
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-header-black text-sm sm:text-lg text-left">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== JOURNEY SECTION ==================== */}
      <section className="py-8 sm:py-12 lg:py-16 bg-secondary" ref={journeyRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-6 sm:gap-10 w-full">
            {/* Section Header */}
            <div className={`text-center max-w-3xl mx-auto ${isVisible("section-5") ? "animate-fadeInUp" : "opacity-100 sm:opacity-0"}`}>
              <span className="inline-block text-primary text-sm font-medium tracking-[0.15em] uppercase mb-4">
                {t('faceHub.theProcess')}
              </span>
              <h2 className="text-header-black text-2xl sm:text-3xl lg:text-4xl font-semibold">
                {t('faceHub.journeyTitle1')} <span className="text-primary">{t('faceHub.journeyTitle2')}</span>
              </h2>
            </div>

            {/* Journey Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative ${isVisible("section-5") ? "animate-fadeInUp" : "opacity-100 sm:opacity-0"}`}
                  style={{ animationDelay: `${0.1 + index * 0.15}s` }}
                >
                  {/* Connector Line */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}

                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full relative hover:shadow-xl transition-shadow duration-300 text-center sm:text-left">
                    <div className="relative flex flex-col items-center sm:items-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary text-white flex items-center justify-center text-base sm:text-lg font-bold mb-3 sm:mb-4">
                        {step.num}
                      </div>
                      <h4 className="text-header-black text-lg sm:text-xl font-bold mb-3 sm:mb-4 normal-case">{step.title}</h4>
                      <p className="text-para-black text-sm sm:text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-12 lg:py-20 bg-secondary" ref={faqRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-10 w-full max-w-4xl mx-auto">
            {/* Centered Header */}
            <div className={`text-center ${isVisible("section-6") ? "animate-fadeInUp" : "opacity-100 sm:opacity-0"}`}>
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">
                {t('faceHub.gotQuestions')}
              </span>
              <h2 className="text-header-black mb-4">
                {t('faceHub.faqTitle1')} <span className="text-primary">{t('faceHub.faqTitle2')}</span>
              </h2>
              <p className="text-para-black max-w-2xl mx-auto">
                {t('faceHub.faqSubtitle')}
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "shadow-lg border-2 border-primary/20"
                      : "shadow-sm border border-gray-100 hover:shadow-md"
                  } ${isVisible("section-6") ? "animate-fadeInUp" : "opacity-100 sm:opacity-0"}`}
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
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

            {/* Bottom CTA */}
            <div className={`text-center ${isVisible("section-6") ? "animate-fadeInUp delay-500" : "opacity-100 sm:opacity-0"}`}>
              <p className="text-para-black mb-4 text-sm sm:text-base">{t('faceHub.stillQuestions')}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
              >
                {t('faceHub.contactUs')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#0a0a0a] relative overflow-hidden" ref={ctaRef}>
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="flex containers w-full relative z-10">
          <div className={`text-center max-w-3xl mx-auto ${isVisible("section-7") ? "animate-fadeInUp" : "opacity-100 sm:opacity-0"}`}>
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-3 sm:mb-4">
              <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            <h2 className={`text-white text-2xl sm:text-3xl lg:text-5xl font-light mb-3 sm:mb-4 ${
              isVisible("section-7") ? "animate-fadeInUp delay-100" : "opacity-100 sm:opacity-0"
            }`}>
              {t('faceHub.ctaTitle1')}
              <span className="text-primary font-semibold block mt-2">{t('faceHub.ctaTitle2')}</span>
            </h2>

            <p className={`text-white text-base sm:text-lg mb-8 sm:mb-12 max-w-xl mx-auto ${
              isVisible("section-7") ? "animate-fadeInUp delay-200" : "opacity-100 sm:opacity-0"
            }`}>
              {t('faceHub.ctaDesc')}
            </p>

            <div className={`flex flex-wrap justify-center gap-4 px-4 sm:px-0 ${
              isVisible("section-7") ? "animate-fadeInUp delay-300" : "opacity-100 sm:opacity-0"
            }`}>
              <Link
                href="/contact"
                className="group relative bg-primary hover:bg-primary/90 text-white font-medium px-8 sm:px-12 py-3 sm:py-5 rounded-full transition-all duration-500 overflow-hidden shadow-xl shadow-primary/30 text-sm sm:text-base"
              >
                <span className="relative z-10">{t('faceHub.bookConsultation')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
              <Link
                href="https://wa.me/60142616007"
                className="group border border-white/20 hover:border-green-500/50 text-white font-medium px-8 sm:px-12 py-3 sm:py-5 rounded-full transition-all duration-300 flex items-center gap-3 hover:bg-green-500/10 text-sm sm:text-base"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t('faceHub.whatsappUs')}
              </Link>
            </div>

            {/* Trust Note */}
            <p className={`text-white/30 text-xs sm:text-sm mt-8 sm:mt-10 ${
              isVisible("section-7") ? "animate-fadeInUp delay-400" : "opacity-100 sm:opacity-0"
            }`}>
              {t('faceHub.ctaDisclaimer')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaceHub;
