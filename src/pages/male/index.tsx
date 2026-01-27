import React, { useState, useEffect, useRef } from "react";
import BaseImage from "@/components/BaseImage";
import Link from "next/link";
import Head from "next/head";
import { getFullUrl, getAssetPath } from "@/utils/helper";

const MaleHub = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

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
      category: "Chest Procedures",
      description: "Address chest concerns with surgical precision for a flatter, more masculine contour",
      categoryImage: "/images/Gynecomastia Surgery men.jpg",
      treatments: [
        {
          title: "Gynecomastia Surgery",
          area: "Chest Reshaping",
          description: "For men with enlarged breast tissue that affects confidence and clothing fit.",
          href: "/male/gynecomastia-surgery-malaysia",
          image: "/images/Gynecomastia Surgery men.jpg",
          tag: "Most Popular",
        },
        {
          title: "Male Breast Reduction",
          area: "Chest Contouring",
          description: "For men who want a flatter, firmer-looking chest, especially when fat and tissue are involved.",
          href: "/male/male-breast-reduction-malaysia",
          image: "/images/male_breast_reduction.png",
          tag: null,
        },
      ],
    },
    {
      category: "Facial Enhancement",
      description: "Define and enhance masculine facial features while maintaining natural proportions",
      categoryImage: "/images/Jawline Enhancement men.jpg",
      treatments: [
        {
          title: "Jawline Enhancement",
          area: "Lower Face Definition",
          description: "For men who want a stronger jawline, sharper lower face definition, and better profile balance.",
          href: "/male/jawline-enhancement-malaysia",
          image: "/images/Jawline Enhancement men.jpg",
          tag: "Popular Choice",
        },
        {
          title: "Chin Implant",
          area: "Profile Enhancement",
          description: "For men who feel their chin is weak and want stronger profile balance.",
          href: "/male/chin-implant-malaysia",
          image: "/images/Chin Implant men.jpg",
          tag: null,
        },
        {
          title: "Male Rhinoplasty",
          area: "Nose Reshaping",
          description: "For men who want nose reshaping while keeping strong, masculine facial proportions.",
          href: "/male/male-rhinoplasty-malaysia",
          image: "/images/Male Rhinoplasty men.jpg",
          tag: null,
        },
      ],
    },
    {
      category: "Body & Hair",
      description: "Enhance body definition and restore hairline confidence",
      categoryImage: "/images/six_pack_enhancement.jpg",
      treatments: [
        {
          title: "Six Pack Enhancement",
          area: "Abdominal Definition",
          description: "For men who want more visible abdominal definition through detailed contouring.",
          href: "/male/six-pack-enhancement-malaysia",
          image: "/images/six_pack_enhancement.jpg",
          tag: "For Athletes",
        },
        {
          title: "Hair Transplant",
          area: "Hairline Restoration",
          description: "For men who want to restore hairline density and a more confident appearance.",
          href: "/male/hair-transplant-malaysia",
          image: "/images/Hair Transplant men.jpg",
          tag: null,
        },
        {
          title: "Penile Enhancement",
          area: "Confidence & Comfort",
          description: "For men exploring improvement in confidence and intimate comfort, with a medical-first discussion.",
          href: "/male/penile-enhancement-malaysia",
          image: "/images/Penile Enhancement men.jpg",
          tag: "Discreet",
        },
      ],
    },
  ];

  // Decision guide data
  const decisionGuide = [
    { concern: "Chest looks enlarged or puffy", solution: "Gynecomastia Surgery or Male Breast Reduction", href: "/male/gynecomastia-surgery-malaysia" },
    { concern: "Hairline recession or thinning", solution: "Hair Transplant", href: "/male/hair-transplant-malaysia" },
    { concern: "Want a stronger jawline", solution: "Jawline Enhancement", href: "/male/jawline-enhancement-malaysia" },
    { concern: "Chin looks weak in profile", solution: "Chin Implant", href: "/male/chin-implant-malaysia" },
    { concern: "Want nose reshaping that stays masculine", solution: "Male Rhinoplasty", href: "/male/male-rhinoplasty-malaysia" },
    { concern: "Want more ab definition", solution: "Six Pack Enhancement", href: "/male/six-pack-enhancement-malaysia" },
    { concern: "Exploring intimate confidence concerns", solution: "Penile Enhancement (consultation required)", href: "/male/penile-enhancement-malaysia" },
  ];

  // FAQ data
  const faqData = [
    {
      question: "What is male cosmetic surgery?",
      answer: "Male cosmetic surgery includes procedures designed to improve body or facial appearance while preserving masculine proportions and a natural look.",
    },
    {
      question: "Is cosmetic surgery common among men in Malaysia?",
      answer: "Yes. Many men seek cosmetic procedures for confidence, comfort, and self-image, often choosing to keep it private.",
    },
    {
      question: "Will male cosmetic surgery look obvious?",
      answer: "Most men want subtle improvements. When planned correctly, results aim to look natural and fit your build, face, and age.",
    },
    {
      question: "Will people be able to tell I had surgery?",
      answer: "The goal is discreet change. Many people simply notice that you look fitter or more confident, not that you had a procedure.",
    },
    {
      question: "Is male cosmetic surgery safe?",
      answer: "All procedures carry risks. Safety depends on proper assessment, realistic planning, and careful surgical technique.",
    },
    {
      question: "Do I need to decide on a procedure before booking?",
      answer: "No. Many men start with a concern rather than a procedure name. The consultation helps clarify suitable options.",
    },
    {
      question: "Is male cosmetic surgery confidential?",
      answer: "Yes. Consultations and treatments are handled with strict privacy and discretion.",
    },
    {
      question: "Can I talk openly without being judged?",
      answer: "Absolutely. Consultations are respectful, professional, and focused on your concerns, not assumptions or pressure.",
    },
    {
      question: "Can multiple treatments be combined?",
      answer: "Some men combine treatments for better overall balance. This depends on health, goals, and safety assessment.",
    },
    {
      question: "Is male cosmetic surgery only for younger men?",
      answer: "No. Men of different ages seek cosmetic surgery for different reasons, from body contouring to facial balance.",
    },
    {
      question: "Will results last long term?",
      answer: "Surgical changes are long-lasting, but maintaining results depends on lifestyle, weight stability, and ageing.",
    },
    {
      question: "What if I am unsure or nervous about surgery?",
      answer: "That is very common. A consultation is meant to give clarity and honest guidance, not push you into a decision.",
    },
    {
      question: "How do I start male cosmetic surgery in Malaysia?",
      answer: "The first step is a private consultation to discuss your concerns, options, and suitability.",
    },
  ];

  // Journey steps
  const journeySteps = [
    { num: 1, title: "Private Consultation", description: "You share your concern. We listen, assess, and explain options in simple words." },
    { num: 2, title: "Personalized Plan", description: "You get a clear plan covering suitability, expected outcome, recovery, and safety steps." },
    { num: 3, title: "Procedure Day", description: "Calm, guided care with comfort and safety as the priority." },
    { num: 4, title: "Recovery & Follow-up", description: "Healing is supported with instructions, check-ups, and ongoing guidance." },
  ];

  // What natural means
  const naturalMeans = [
    "Stronger lines, not exaggerated changes",
    "Better proportions, not a \"different face\"",
    "Shaping that still looks like your genetics",
    "Results that suit your age, build, and lifestyle",
  ];

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
                Male Cosmetic Hub
              </span>

              <h1 className={`text-primary drop-shadow-lg text-3xl sm:text-4xl lg:text-5xl ${
                isVisible("section-0") ? "animate-fadeInUp delay-100" : "opacity-0"
              }`}>
                Male Cosmetic Surgery <span className="text-header-black">in Malaysia</span>
              </h1>

              <p className={`text-white/90 text-lg lg:text-xl font-medium ${
                isVisible("section-0") ? "animate-fadeInUp delay-200" : "opacity-0"
              }`}>
                Private, respectful care for men who want to feel confident again
              </p>

              <p className={`text-white/80 text-sm lg:text-base leading-relaxed ${
                isVisible("section-0") ? "animate-fadeInUp delay-300" : "opacity-0"
              }`}>
                Most men do not talk openly about body or face concerns. They just live with them. They avoid the beach. They wear extra layers. They skip photos. They laugh it off, but it still bothers them. If that feels familiar, you are not alone.
              </p>

              <div className={`flex flex-wrap gap-4 mt-4 justify-center sm:justify-start ${
                isVisible("section-0") ? "animate-fadeInUp delay-400" : "opacity-0"
              }`}>
                <Link
                  href="/contact-us"
                  className="bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg uppercase tracking-wide text-sm animate-pulseGlow"
                >
                  Book a Private Consultation
                </Link>
                <Link
                  href="https://wa.me/60142616007"
                  className="bg-white hover:bg-gray-100 text-header-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 uppercase tracking-wide text-sm"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </Link>
              </div>

              <p className={`text-white/50 text-xs lg:text-sm italic mt-2 ${
                isVisible("section-0") ? "animate-fadeInUp delay-500" : "opacity-0"
              }`}>
                Results vary. Suitability depends on medical assessment. Your privacy is respected at every step.
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
                      <p className="font-bold text-header-black text-xl">100%</p>
                      <p className="text-para-black text-sm">Confidential</p>
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
                Our Treatments
              </span>
              <h2 className="text-header-black mb-4">
                Explore <span className="text-primary">Male Treatments</span>
              </h2>
              <p className="text-para-black max-w-2xl mx-auto">
                Each treatment has its own dedicated page with full details, recovery information, and FAQs
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
                      {categoryIndex === 0 ? "Chest Contouring" : categoryIndex === 1 ? "Facial Definition" : "Body & Restoration"}
                    </span>
                    <h3 className="text-header-black text-2xl lg:text-3xl font-bold mb-3">
                      {category.category}
                    </h3>
                    <p className="text-para-black mb-4">{category.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                      <span>{category.treatments.length} Treatments Available</span>
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
                            <span>View Treatment</span>
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
              <p className="text-para-black mb-4">Can&apos;t find what you&apos;re looking for?</p>
              <Link
                href="/contact-us"
                className="inline-block bg-primary hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm"
              >
                Book a Private Consultation
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
                Unsure Which Treatment <span className="text-primary">You Need?</span>
              </h2>
              <p className="text-para-black">
                Use this guide to find the right page for your concern
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
                href="/contact-us"
                className="inline-block bg-primary hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book a Private Consultation
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
                What &ldquo;Natural&rdquo; Means <span className="text-primary">for Men</span>
              </h2>

              <p className="text-para-black text-lg font-medium">
                Men often want improvement without looking obvious.
              </p>

              <p className="text-para-black">
                If your biggest fear is looking unnatural, say it in your consultation. We plan around that. Natural results usually mean:
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
                People notice you look fitter. Not that you had a procedure.
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
                Your Journey, <span className="text-primary">Step by Step</span>
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
                Got Questions?
              </span>
              <h2 className="text-header-black mb-4">
                Male Cosmetic Surgery <span className="text-primary">FAQs</span>
              </h2>
              <p className="text-para-black max-w-2xl mx-auto">
                Find answers to common questions about male cosmetic surgery in Malaysia
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
              Ready to Talk Privately?
            </h2>

            <p className={`text-white mb-8 ${
              isVisible("section-7") ? "animate-fadeInUp delay-200" : "opacity-0"
            }`}>
              You do not have to decide today. Start by exploring the treatment pages above. When you feel ready, book a private consultation and get clear, honest guidance.
            </p>

            <div className={`flex flex-wrap justify-center gap-4 ${
              isVisible("section-7") ? "animate-fadeInUp delay-400" : "opacity-0"
            }`}>
              <Link
                href="/contact-us"
                className="bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg uppercase tracking-wide text-sm hover:shadow-2xl"
              >
                Book a Private Consultation
              </Link>
              <Link
                href="https://wa.me/60142616007"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 uppercase tracking-wide text-sm"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MaleHub;
