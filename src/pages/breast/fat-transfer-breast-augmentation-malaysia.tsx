import BaseImage from "@/components/BaseImage";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const FatTransferBreastAugmentation = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  const heroRef = useRef<HTMLDivElement>(null);
  const definitionRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const evidenceRef = useRef<HTMLDivElement>(null);
  const recoveryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const faqData = [
    {
      question: "How much bigger will my breasts get?",
      answer: "Most patients achieve a subtle increase. The exact change depends on your donor fat availability, breast tissue capacity, and how much fat survives long-term."
    },
    {
      question: "Will all the transferred fat survive?",
      answer: "No. A portion is naturally reabsorbed by the body (usually 30-40%). Dr. Soma uses techniques to maximize retention, and the fat that integrates becomes permanent."
    },
    {
      question: "Does fat transfer cause lumps?",
      answer: "Small lumps or firmness can occur if fat healing is uneven. Proper layering technique reduces this risk significantly, and most minor firmness resolves over time."
    },
    {
      question: "Will it affect mammograms?",
      answer: "Imaging can still be performed. Skilled radiologists can distinguish fat grafts from other findings, but you must inform your team about your prior procedure."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.getAttribute('data-section');
          if (elementId) {
            setVisibleElements(prev => new Set([...prev, elementId]));
          }
        }
      });
    }, observerOptions);

    const sections = [heroRef, definitionRef, benefitsRef, processRef, comparisonRef, evidenceRef, recoveryRef, testimonialsRef, faqRef, ctaRef];
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute('data-section', `section-${index}`);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleElements.has(sectionId);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-50 lg:py-100 px-6 overflow-hidden border-b border-zinc-100" ref={heroRef}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FE7623 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className={`max-w-[1166px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative transition-all duration-700 ${isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-semibold mb-8 uppercase animate-pulse-slow">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping-slow"></span>
              Natural Breast Enhancement
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-header-black leading-[1.05] mb-6">
              No Implants. <br />
              <span className="text-zinc-400">Just You, Enhanced.</span>
            </h1>
            <p className="text-lg text-para-black leading-relaxed mb-8 max-w-xl">
              Fat transfer breast augmentation uses your body&apos;s own fat to create softer, natural volume. Performed exclusively by Dr. Soma for subtle enhancement and refined contour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/" className="inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-[#e56010] hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg shadow-orange-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Book Consultation (WhatsApp)
              </a>
              <a href="#how-it-works" className="inline-flex justify-center items-center gap-2 bg-white border border-zinc-200 text-para-black px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-zinc-50 hover:scale-105 transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                How It Works
              </a>
            </div>
          </div>

          {/* Visual Abstract */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-100 border border-zinc-100 shadow-2xl">
              <BaseImage
                src="/images/fat-transfer-breast-augmentation.jpg"
                alt="Fat Transfer Breast Augmentation"
                fill
                className="object-cover opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 animate-float">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-orange-50 rounded-lg text-primary">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-header-black">Dual Benefit</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="px-3 py-2 bg-zinc-50 rounded border border-zinc-100 text-para-black">
                      <span className="block font-semibold text-header-black">+ Volume</span>
                      Breasts
                    </div>
                    <div className="px-3 py-2 bg-zinc-50 rounded border border-zinc-100 text-para-black">
                      <span className="block font-semibold text-header-black">- Fat</span>
                      Donor Areas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition & Candidates Section */}
      <section className="py-50 lg:py-100 px-6 bg-white" ref={definitionRef}>
        <div className={`max-w-[1166px] mx-auto transition-all duration-700 ${isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-header-black mb-6">What Is Fat Transfer Breast Augmentation?</h2>
                <div className="text-para-black leading-relaxed">
                  <p className="mb-4">
                    Also known as <span className="text-primary font-medium">autologous fat grafting</span>, this procedure enhances breast volume using your own body fat. It involves removing fat from areas like the abdomen or thighs, purifying it, and gently layering it into the breasts.
                  </p>
                  <p>
                    Because no foreign materials are used, the result feels completely natural. It is ideal for women seeking modest enhancement (0.5 to 1 cup size) and body contouring in a single surgery.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <h3 className="text-sm font-bold text-header-black uppercase mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  Who typically chooses this?
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-para-black">
                    <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="flex-1">Patients wanting a strictly natural look (no implants).</span>
                  </li>
                  <li className="flex gap-3 text-sm text-para-black">
                    <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="flex-1">Those with mild asymmetry needing correction.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-para-black">
                    <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="flex-1">Women wanting body contouring (liposuction) alongside enhancement.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-para-black">
                    <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="flex-1">Patients restoring volume lost after pregnancy or weight loss.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Candidate Grid */}
            <div>
              <h3 className="text-xl font-semibold text-header-black mb-6">Candidate Checklist</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Good Candidate */}
                <div className="col-span-1 sm:col-span-2 px-8 py-6 rounded-xl border border-emerald-100 bg-emerald-50/30 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded mb-4 inline-block">Ideal Candidate</span>
                  <ul className="space-y-3 mt-3">
                    <li className="flex gap-3 text-sm text-para-black">
                      <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="flex-1">Has adequate donor fat supply</span>
                    </li>
                    <li className="flex gap-3 text-sm text-para-black">
                      <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="flex-1">Wants modest, refined volume</span>
                    </li>
                    <li className="flex gap-3 text-sm text-para-black">
                      <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="flex-1">Stable weight &amp; healthy lifestyle</span>
                    </li>
                  </ul>
                </div>

                {/* Not Suitable */}
                <div className="px-8 py-6 rounded-xl border border-red-100 bg-red-50/30 hover:border-red-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xs font-bold text-red-700 bg-red-100 px-3 py-1.5 rounded mb-4 inline-block">Not Suitable If</span>
                  <ul className="space-y-3 mt-3">
                    <li className="flex gap-3 text-sm text-para-black">
                      <svg className="w-6 h-6 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="flex-1">Very low body fat (thin)</span>
                    </li>
                    <li className="flex gap-3 text-sm text-para-black">
                      <svg className="w-6 h-6 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="flex-1">Smoker (reduces survival)</span>
                    </li>
                  </ul>
                </div>
                <div className="px-8 py-6 rounded-xl border border-red-100 bg-red-50/30 hover:border-red-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xs font-bold text-red-700 bg-red-100 px-3 py-1.5 rounded mb-4 inline-block">Goal Mismatch</span>
                  <ul className="space-y-3 mt-3">
                    <li className="flex gap-3 text-sm text-para-black">
                      <svg className="w-6 h-6 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="flex-1">Wants large increase</span>
                    </li>
                    <li className="flex gap-3 text-sm text-para-black">
                      <svg className="w-6 h-6 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="flex-1">Wants high projection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bento Grid Benefits */}
      <section className="py-50 lg:py-100 px-6 bg-zinc-50" id="benefits" ref={benefitsRef}>
        <div className={`max-w-[1166px] mx-auto transition-all duration-700 ${isVisible('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-semibold text-header-black mb-4">Why Choose Fat Transfer?</h2>
            <p className="text-para-black text-sm">A biological approach to augmentation that prioritizes feel, safety, and dual-zone contouring.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">

            {/* Main Benefit */}
            <div className="md:col-span-2 row-span-2 bg-white rounded-2xl p-8 border border-zinc-200 hover:border-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center text-primary mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-header-black mb-2">Completely Natural</h3>
                <p className="text-sm text-para-black leading-relaxed max-w-sm">Since it is your own tissue, the breast moves, feels, and ages naturally with you. No foreign body reaction and no need for implant monitoring.</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl group-hover:bg-orange-100 transition-colors"></div>
            </div>

            {/* Secondary Benefit */}
            <div className="md:col-span-1 row-span-2 bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center text-primary mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Liposuction Bonus</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">To get the fat, we must sculpt another area. You get slimmer flanks, abdomen, or thighs as part of the process.</p>
              </div>
            </div>

            {/* Small Benefit 1 */}
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <svg className="w-8 h-8 text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <h3 className="text-sm font-bold text-header-black">Minimal Scarring</h3>
              <p className="text-xs text-para-black mt-1">Only tiny injection points used.</p>
            </div>

            {/* Small Benefit 2 */}
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <svg className="w-8 h-8 text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <h3 className="text-sm font-bold text-header-black">Fix Asymmetry</h3>
              <p className="text-xs text-para-black mt-1">Precise volume dosing.</p>
            </div>

            {/* Wide Benefit */}
            <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-zinc-200 hover:border-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-6">
              <div className="shrink-0 w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-header-black">Long-Lasting Results</h3>
                <p className="text-xs text-para-black mt-1">Fat cells that survive the transfer (integrate) become permanent living tissue.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section (Vertical Timeline) */}
      <section id="how-it-works" className="py-50 lg:py-100 px-6 bg-white" ref={processRef}>
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-header-black mb-4">How It Works</h2>
            <p className="text-para-black text-sm">Three controlled stages to ensure safety and maximum fat survival.</p>
          </div>

          <div className="relative space-y-12">
            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-zinc-100"></div>

            {/* Step 1 */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center text-sm font-bold text-para-black group-hover:border-primary group-hover:text-primary transition-colors z-10">1</div>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 group-hover:border-primary/30 transition-all">
                <h3 className="text-lg font-bold text-header-black mb-2">Harvesting (Liposuction)</h3>
                <p className="text-sm text-para-black mb-4">Fat is gently removed from donor areas using small cannulas to preserve cell integrity.</p>
                <div className="bg-white p-3 rounded-lg border border-zinc-200 inline-block">
                  <span className="text-xs font-semibold text-para-black uppercase mb-2 block">Common Donor Sites</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-zinc-100 rounded text-xs text-para-black">Abdomen</span>
                    <span className="px-2 py-1 bg-zinc-100 rounded text-xs text-para-black">Waist/Flanks</span>
                    <span className="px-2 py-1 bg-zinc-100 rounded text-xs text-para-black">Thighs</span>
                    <span className="px-2 py-1 bg-zinc-100 rounded text-xs text-para-black">Bra-line</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center text-sm font-bold text-para-black group-hover:border-primary group-hover:text-primary transition-colors z-10">2</div>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 group-hover:border-primary/30 transition-all">
                <h3 className="text-lg font-bold text-header-black mb-2">Purification</h3>
                <p className="text-sm text-para-black">The harvested fat is processed (centrifuged or filtered) to remove excess fluid, oil, and impurities. Only healthy, high-quality yellow fat is prepared for transfer.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pl-12 sm:pl-16 group">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center text-sm font-bold text-para-black group-hover:border-primary group-hover:text-primary transition-colors z-10">3</div>
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 group-hover:border-primary/30 transition-all">
                <h3 className="text-lg font-bold text-header-black mb-2">Grafting (Injection)</h3>
                <p className="text-sm text-para-black mb-3">Purified fat is injected into the breast in micro-layers. Dr. Soma focuses on even distribution to ensure smoothness and improve upper pole fullness.</p>
                <div className="flex items-center gap-2 text-xs text-primary font-medium bg-orange-50 px-3 py-2 rounded-lg w-fit">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Note: We do not inject into gland tissue directly to preserve mammogram clarity.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-50 lg:py-100 bg-zinc-900 text-white" ref={comparisonRef}>
        <div className={`containers transition-all duration-700 ${isVisible('section-4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Fat Transfer vs. Implants</h2>
              <p className="text-zinc-400 text-sm">Which approach aligns with your goals?</p>
            </div>
            <Link href="/breast/breast-augmentation-malaysia" className="text-sm text-primary hover:text-white transition-colors flex items-center gap-2">
              View Breast Implants
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="border border-zinc-700 rounded-xl overflow-hidden bg-zinc-800/50">
            <div className="grid grid-cols-3 bg-zinc-800 p-4 border-b border-zinc-700 font-semibold text-sm">
              <div className="text-zinc-400">Feature</div>
              <div className="text-primary">Fat Transfer</div>
              <div className="text-white">Breast Implants</div>
            </div>

            <div className="grid grid-cols-3 p-4 border-b border-zinc-700/50 items-center text-sm hover:bg-zinc-800/30 transition-colors">
              <div className="text-zinc-400 font-medium">Material</div>
              <div className="text-zinc-200">Your own fat</div>
              <div className="text-zinc-400">Silicone/Saline</div>
            </div>

            <div className="grid grid-cols-3 p-4 border-b border-zinc-700/50 items-center text-sm hover:bg-zinc-800/30 transition-colors">
              <div className="text-zinc-400 font-medium">Feel</div>
              <div className="text-zinc-200">100% Natural</div>
              <div className="text-zinc-400">Firm / Round</div>
            </div>

            <div className="grid grid-cols-3 p-4 border-b border-zinc-700/50 items-center text-sm hover:bg-zinc-800/30 transition-colors">
              <div className="text-zinc-400 font-medium">Size Increase</div>
              <div className="text-zinc-200">Modest (0.5 - 1 cup)</div>
              <div className="text-zinc-400">Moderate to Large</div>
            </div>

            <div className="grid grid-cols-3 p-4 border-b border-zinc-700/50 items-center text-sm hover:bg-zinc-800/30 transition-colors">
              <div className="text-zinc-400 font-medium">Scarring</div>
              <div className="text-zinc-200">Tiny injection dots</div>
              <div className="text-zinc-400">Incision scars</div>
            </div>

            <div className="grid grid-cols-3 p-4 items-center text-sm hover:bg-zinc-800/30 transition-colors">
              <div className="text-zinc-400 font-medium">Maintenance</div>
              <div className="text-zinc-200">None (if stable weight)</div>
              <div className="text-zinc-400">Monitoring required</div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Evidence */}
      <section className="py-50 lg:py-100 px-6 bg-zinc-50 border-b border-zinc-100" ref={evidenceRef}>
        <div className={`max-w-[1166px] mx-auto transition-all duration-700 ${isVisible('section-5') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-sm font-bold text-header-black uppercase mb-6">Scientific Evidence &amp; Clinical Context</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <a href="https://www.mayoclinic.org/" target="_blank" rel="noopener noreferrer" className="block px-8 py-6 bg-white border border-zinc-200 rounded-xl hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-para-black">Mayo Clinic</span>
                <svg className="w-6 h-6 text-zinc-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm text-para-black leading-relaxed">Discusses fat grafting technique using a patient&apos;s own fat, emphasizing surgical skill and planning.</p>
            </a>

            <a href="https://www.health.harvard.edu/" target="_blank" rel="noopener noreferrer" className="block px-8 py-6 bg-white border border-zinc-200 rounded-xl hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-para-black">Harvard Health</span>
                <svg className="w-6 h-6 text-zinc-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm text-para-black leading-relaxed">Outlines autologous fat transfer for contour refinement, outcomes depending on patient factors.</p>
            </a>

            <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="block px-8 py-6 bg-white border border-zinc-200 rounded-xl hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-para-black">PubMed</span>
                <svg className="w-6 h-6 text-zinc-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm text-para-black leading-relaxed">Clinical literature on graft survival, injection technique, and patient satisfaction.</p>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-zinc-100 rounded text-[10px] text-para-black uppercase">Clinical Focus:</span>
            <span className="px-2 py-1 border border-zinc-200 rounded text-[10px] text-para-black">Autologous Fat Grafting</span>
            <span className="px-2 py-1 border border-zinc-200 rounded text-[10px] text-para-black">Adipose-derived Stem Cells</span>
            <span className="px-2 py-1 border border-zinc-200 rounded text-[10px] text-para-black">Microdroplet Injection</span>
            <span className="px-2 py-1 border border-zinc-200 rounded text-[10px] text-para-black">Volume Retention</span>
            <span className="px-2 py-1 border border-zinc-200 rounded text-[10px] text-para-black">Liposuction Harvesting</span>
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-50 lg:py-100 px-6 bg-white" ref={recoveryRef}>
        <div className={`max-w-[1166px] mx-auto transition-all duration-700 ${isVisible('section-6') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-semibold text-header-black mb-12">Recovery Timeline</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connect Line */}
            <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-zinc-100 -z-10"></div>

            <div className="bg-white p-6 rounded-xl border border-zinc-200 relative hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary text-white rounded-lg flex items-center justify-center font-bold mb-4 shadow-lg shadow-orange-200 text-lg group-hover:scale-110 transition-transform duration-300">0</div>
              <h4 className="font-bold text-header-black mb-2">Immediate</h4>
              <p className="text-xs text-para-black leading-relaxed">Compression garment on donor areas. Breasts swollen/firm. Walking encouraged same day.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-zinc-200 relative hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white text-header-black border border-zinc-200 rounded-lg flex items-center justify-center font-bold mb-4 text-lg group-hover:border-primary group-hover:text-primary transition-all duration-300">1</div>
              <h4 className="font-bold text-header-black mb-2">Week 1–2</h4>
              <p className="text-xs text-para-black leading-relaxed">Return to desk work. Bruising in donor areas fades. Breasts begin to soften. Avoid pressure.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-zinc-200 relative hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white text-header-black border border-zinc-200 rounded-lg flex items-center justify-center font-bold mb-4 text-lg group-hover:border-primary group-hover:text-primary transition-all duration-300">4</div>
              <h4 className="font-bold text-header-black mb-2">Week 4–6</h4>
              <p className="text-xs text-para-black leading-relaxed">Light exercise resumes. Shape becomes natural. Donor areas refine further.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-zinc-200 relative hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white text-header-black border border-zinc-200 rounded-lg flex items-center justify-center font-bold mb-4 text-lg group-hover:border-primary group-hover:text-primary transition-all duration-300">M3</div>
              <h4 className="font-bold text-header-black mb-2">Month 3–6</h4>
              <p className="text-xs text-para-black leading-relaxed">Volume stabilizes as &quot;fat take&quot; is confirmed. Softness and contour fully refined.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-orange-50 rounded-xl border border-orange-100 flex flex-col sm:flex-row gap-6 items-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
            <div className="shrink-0 p-3 bg-white rounded-full text-primary shadow-sm animate-bounce-slow">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-header-black text-sm">What about pain?</h4>
              <p className="text-sm text-para-black mt-1">&quot;More soreness from the liposuction areas than the breasts.&quot; – Pain is generally manageable with oral medication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-50 lg:py-100 px-6 bg-zinc-50" ref={testimonialsRef}>
        <div className={`max-w-[1166px] mx-auto transition-all duration-700 ${isVisible('section-7') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-semibold text-header-black mb-12 text-center">Patient Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm flex flex-col h-full hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm text-para-black leading-relaxed flex-grow">&quot;I wanted a natural look without implants. The result is subtle but beautiful, and my waist looks better too.&quot;</blockquote>
              <div className="mt-6 pt-6 border-t border-zinc-50">
                <p className="text-sm font-bold text-header-black">Hani, 33</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm flex flex-col h-full hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm text-para-black leading-relaxed flex-grow">&quot;My breasts feel completely natural. Dr. Soma explained the process clearly and set the right expectations.&quot;</blockquote>
              <div className="mt-6 pt-6 border-t border-zinc-50">
                <p className="text-sm font-bold text-header-black">Elaine, 39</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm flex flex-col h-full hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm text-para-black leading-relaxed flex-grow">&quot;Soft, feminine results and the recovery was manageable. The overall body contour change was a bonus.&quot;</blockquote>
              <div className="mt-6 pt-6 border-t border-zinc-50">
                <p className="text-sm font-bold text-header-black">Nur, 36</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Pricing Grid */}
      <section className="py-50 lg:py-100 px-4 md:px-6 bg-white" ref={faqRef}>
        <div className={`max-w-[1166px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 transition-all duration-700 ${isVisible('section-8') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* FAQ Column */}
          <div className="lg:col-span-2">
            <h2 className="text-xl md:text-2xl font-semibold text-header-black mb-6 md:mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqData.map((item, index) => (
                <div key={index} className="border border-zinc-100 rounded-xl overflow-hidden shadow-sm">
                  <button
                    className="w-full flex items-center justify-between gap-4 p-4 md:p-5 bg-white text-left group"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className={`text-sm md:text-base font-semibold transition-colors flex-1 pr-2 ${openFaq === index ? 'text-primary' : 'text-header-black group-hover:text-primary'}`}>{item.question}</span>
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openFaq === index ? 'bg-primary text-white' : 'bg-zinc-100 text-para-black group-hover:text-primary'
                    }`}>
                      {openFaq === index ? (
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-zinc-50 px-4 md:px-5 py-4 text-sm text-para-black leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Info Card */}
          <div className="lg:col-span-1 order-first lg:order-last">
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 text-white lg:sticky lg:top-24">
              <h3 className="text-xl font-semibold mb-6">Pricing Guide</h3>
              <p className="text-zinc-400 text-sm mb-6">Costs vary based on complexity and donor sites. Factors include:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Number of donor areas
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Volume of fat harvested
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Surgical time
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Hospital &amp; Anaesthesia
                </li>
              </ul>
              <a href="https://wa.me/" className="block w-full text-center bg-primary text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#e56010] hover:scale-105 hover:shadow-xl transition-all duration-300">
                Get a Quote via WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-50 lg:py-100 px-6 bg-zinc-50 border-t border-zinc-200" ref={ctaRef}>
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible('section-9') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-semibold text-header-black mb-6">Enhance Your Breasts Naturally</h2>
          <p className="text-lg text-para-black mb-10 max-w-xl mx-auto">
            Dr. Soma combines precision liposuction, advanced fat grafting, and safety-first technique to deliver soft, proportionate, long-lasting contour improvement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://wa.me/" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-[#e56010] hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl shadow-orange-500/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a href="#" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-header-black border border-zinc-200 px-8 py-3.5 rounded-md text-sm font-medium hover:bg-zinc-50 hover:scale-105 hover:shadow-lg transition-all duration-300 hover:border-primary hover:text-primary">
              Book a Consultation
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-xs text-para-black">Certified Plastic Surgeon · Kuala Lumpur, Malaysia</p>
        </div>
      </section>


      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default FatTransferBreastAugmentation;
