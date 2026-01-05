import BaseImage from "@/components/BaseImage";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import { getFullUrl, getAssetPath } from "@/utils/helper";
import { ShieldCheck, PenTool, Scissors, Activity, Minus, CircleOff, Clock, ThumbsUp, CheckCircle2, Smile, AlertCircle, Check, X, MessageCircle, Calendar, ChevronDown, HelpCircle } from 'lucide-react';

const MiniTummyTuckMalaysia = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  // Create refs for sections
  const heroRef = useRef<HTMLElement>(null);
  const whatIsRef = useRef<HTMLElement>(null);
  const comparisonRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLElement>(null);
  const candidatesRef = useRef<HTMLElement>(null);
  const recoveryRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const faqData = [
    {
      question: "What is a mini tummy tuck?",
      answer: "A mini tummy tuck is a surgical procedure that removes loose skin from the lower abdomen and may tighten lower abdominal muscles without repositioning the belly button."
    },
    {
      question: "How is it different from a full tummy tuck?",
      answer: "A mini tummy tuck treats only the lower abdomen with a smaller incision, while a full tummy tuck addresses the entire abdomen and tightens muscles extensively."
    },
    {
      question: "Is a mini tummy tuck safe?",
      answer: "When performed by a certified plastic surgeon in a regulated medical facility, a mini tummy tuck is considered safe and well-established."
    },
    {
      question: "How long is recovery?",
      answer: "Most patients return to normal daily activities within 1-2 weeks, with final results developing over 2-3 months."
    },
    {
      question: "Will there be a scar?",
      answer: "Yes, but the scar is shorter than a full tummy tuck and placed low on the abdomen, usually hidden by underwear or swimwear."
    },
    {
      question: "Is the result permanent?",
      answer: "Results are long-lasting as long as body weight remains stable."
    },
    {
      question: "Can it fix muscle separation?",
      answer: "Only mild lower-abdominal muscle laxity can be corrected. Significant muscle separation usually requires a full tummy tuck."
    },
    {
      question: "Who is the ideal candidate?",
      answer: "Patients with mild lower-abdominal skin looseness, stable weight, and realistic expectations are ideal candidates."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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

    const sections = [heroRef, whatIsRef, comparisonRef, resultsRef, candidatesRef, recoveryRef, faqRef, ctaRef];
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute('data-section', `section-${index}`);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleElements.has(sectionId);

  const bookingLink = "https://wa.me/60142616007?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20mini%20tummy%20tuck%20surgery.";

  return (
    <>
      <Head>
        <title>Mini Tummy Tuck Malaysia - Dr. Soma Plastic Surgery</title>
        <meta name="description" content="Mini tummy tuck surgery in Malaysia by Dr. Soma. Targeted lower-abdominal tightening with a smaller incision. Certified plastic surgeon with experience in body contouring." />
        <meta property="og:title" content="Mini Tummy Tuck Malaysia - Dr. Soma Plastic Surgery" />
        <meta property="og:description" content="Mini tummy tuck surgery in Malaysia by Dr. Soma. Targeted lower-abdominal tightening with a smaller incision." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl('/body/mini-tummy-tuck-malaysia')} />
        <meta property="og:image" content={getFullUrl('/images/mini_tummy_tuck.jpg')} />
        <link rel="canonical" href={getFullUrl('/body/mini-tummy-tuck-malaysia')} />
      </Head>

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-zinc-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 translate-x-20 hidden lg:block"></div>

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-28 relative z-10 transition-all duration-1000 ${isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-white border border-primary/20 px-4 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-xs font-bold text-primary tracking-widest uppercase">Mini Tummy Tuck In Malaysia</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-zinc-900 leading-[1.1] tracking-tight">
                Targeted Lower-Abdominal Tightening with a <span className="text-primary">Smaller Incision</span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-light border-l-4 border-primary pl-4 sm:pl-6">
                Performed by a Certified Plastic Surgeon
              </p>

              <div className="prose prose-zinc text-zinc-500 max-w-lg">
                <p className="text-sm sm:text-base">
                  Mild looseness of the lower abdomen, often after pregnancy or modest weight changes, may not require a full tummy tuck. A mini tummy tuck, also known as mini abdominoplasty, is a surgical procedure designed to remove excess skin and limited fat from the lower abdomen below the navel, creating a smoother, firmer contour with a shorter scar and reduced downtime.
                </p>
              </div>

              {/* Regulation Box */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-zinc-100 shadow-lg shadow-zinc-200/50">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      In Malaysia, mini tummy tuck surgery is classified as a regulated surgical procedure and must be performed by a registered medical practitioner in a licensed medical facility, under standards governed by the Ministry of Health Malaysia, which oversees private healthcare services and surgical safety.
                    </p>
                    <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wide flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Regulated by: Ministry of Health Malaysia – Private Healthcare Services
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 text-white p-4 sm:p-6 rounded-xl">
                <p className="text-xs sm:text-sm leading-relaxed mb-4">
                  At Dr. Soma Plastic Surgery, all mini tummy tuck procedures are performed personally by Dr. Soma, a certified plastic surgeon with experience in body contouring and structured postoperative care.
                </p>
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition-colors text-sm">
                  <MessageCircle className="w-5 h-5" /> Book a Consultation (WhatsApp)
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[350px] sm:h-[450px] lg:h-[700px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <BaseImage
                src="/images/tumy.jpg"
                alt="Mini Tummy Tuck Surgery Malaysia"
                width={800}
                height={700}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It & How It Works */}
      <section ref={whatIsRef} className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* What Is It */}
            <div className="lg:col-span-5 space-y-6 lg:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">What Is a Mini Tummy Tuck?</h2>
              <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
                A mini tummy tuck is a modified form of abdominoplasty that focuses on the lower abdominal area only. It removes loose skin and may involve limited tightening of the lower abdominal muscles, without repositioning the belly button.
              </p>

              <div className="bg-primary/5 p-4 sm:p-6 rounded-xl border-l-4 border-primary">
                <p className="text-xs sm:text-sm text-zinc-700 italic mb-2">
                  &quot;Major medical institutions describe mini abdominoplasty as an appropriate option for selected patients with mild skin laxity confined to the lower abdomen&quot;
                </p>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Clinical overview from: Mayo Clinic – Tummy Tuck (Abdominoplasty Variations)</span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-500">
                A mini tummy tuck is not a weight-loss procedure and is not suitable for patients with significant upper-abdominal skin excess or severe muscle separation.
              </p>
            </div>

            {/* How It Works */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mb-6 lg:mb-8">How a Mini Tummy Tuck Works</h2>
              <p className="text-zinc-600 mb-6 lg:mb-8 text-sm sm:text-base">A mini tummy tuck typically involves:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-xl border border-zinc-100 hover:border-primary/30 transition-colors group bg-zinc-50 hover:bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <PenTool className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-700">Preoperative marking of the lower abdomen</span>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-xl border border-zinc-100 hover:border-primary/30 transition-colors group bg-zinc-50 hover:bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Scissors className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-700">Removal of excess skin below the navel</span>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-xl border border-zinc-100 hover:border-primary/30 transition-colors group bg-zinc-50 hover:bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Activity className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-700">Limited tightening of lower abdominal muscles (if needed)</span>
                </div>
                {/* Step 4 */}
                <div className="flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-xl border border-zinc-100 hover:border-primary/30 transition-colors group bg-zinc-50 hover:bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Minus className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-700">A shorter, low-placed incision</span>
                </div>
                {/* Step 5 */}
                <div className="flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-xl border border-zinc-100 hover:border-primary/30 transition-colors group bg-zinc-50 hover:bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CircleOff className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-700">No belly button repositioning</span>
                </div>
                {/* Step 6 */}
                <div className="flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-xl border border-zinc-100 hover:border-primary/30 transition-colors group bg-zinc-50 hover:bg-white">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ShieldCheck className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-700">Layered closure and compression garment application</span>
                </div>
              </div>

              <div className="mt-6 lg:mt-8 bg-primary text-white p-3 sm:p-4 rounded-lg flex items-center gap-3">
                <Clock className="w-6 h-6 flex-shrink-0" />
                <p className="text-xs sm:text-sm font-medium">Because the surgery is less extensive than a full tummy tuck, recovery is generally faster for suitable candidates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section ref={comparisonRef} className="py-16 sm:py-20 lg:py-24 bg-zinc-50">
        <div className="flex containers w-full">
          <div className={`flex flex-col w-full transition-all duration-700 ${isVisible('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mb-4">Mini Tummy Tuck vs Full Tummy Tuck</h2>
              <p className="text-zinc-500 text-sm sm:text-base">The correct procedure is determined during consultation based on anatomy and goals.</p>
            </div>

            <div className="w-full border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Header */}
              <div className="grid grid-cols-3 bg-zinc-900 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-white">
                <div>Feature</div>
                <div className="text-primary">Mini Tummy Tuck</div>
                <div>Full Tummy Tuck</div>
              </div>

              {/* Rows */}
              {[
                { feat: "Targets Lower Abdomen Only", mini: "Yes", full: "No", miniHighlight: true, fullHighlight: false },
                { feat: "Removes Loose Skin", mini: "Limited", full: "Extensive", miniHighlight: false, fullHighlight: false },
                { feat: "Muscle Tightening", mini: "Limited", full: "Full", miniHighlight: false, fullHighlight: false },
                { feat: "Belly Button Reposition", mini: "No", full: "Yes", miniHighlight: false, fullHighlight: true },
                { feat: "Scar Length", mini: "Shorter", full: "Longer", miniHighlight: true, fullHighlight: false },
                { feat: "Downtime", mini: "1-2 weeks", full: "3-4 weeks", miniHighlight: true, fullHighlight: false }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                  <div className="font-medium text-zinc-900">{row.feat}</div>
                  <div className={`flex items-center gap-2 ${row.miniHighlight ? 'text-primary font-semibold' : 'text-zinc-600'}`}>
                    {row.mini === "Yes" || row.mini === "Limited" || row.mini === "Shorter" || row.mini === "1-2 weeks" ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    ) : row.mini === "No" ? (
                      <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : null}
                    {row.mini}
                  </div>
                  <div className={`flex items-center gap-2 ${row.fullHighlight ? 'text-primary font-semibold' : 'text-zinc-600'}`}>
                    {row.full === "Yes" || row.full === "Extensive" || row.full === "Full" ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    ) : row.full === "No" ? (
                      <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : null}
                    {row.full}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-center text-zinc-400 mt-6 max-w-2xl mx-auto">The correct procedure is determined during consultation based on your anatomy and goals.</p>
          </div>
        </div>
      </section>

      {/* Results & Timeline */}
      <section ref={resultsRef} className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Timeline */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mb-6 lg:mb-8">When Will I See Results?</h2>
              <p className="text-zinc-600 mb-6 lg:mb-8 text-sm sm:text-base">Recovery and results follow a predictable timeline:</p>

              <div className="space-y-5 sm:space-y-6">
                {/* Week 1 */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white shadow-lg shrink-0">
                    <span className="text-sm sm:text-base font-bold">01</span>
                  </div>
                  <div className="px-5 sm:px-6 lg:px-7 py-4 sm:py-5 rounded-xl border border-zinc-100 bg-white shadow-sm flex-1">
                    <div className="font-bold text-zinc-900 text-sm sm:text-base mb-2">Week 1</div>
                    <div className="text-xs sm:text-sm text-zinc-500">Mild swelling and tightness</div>
                  </div>
                </div>

                {/* Week 2 */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white shadow-lg shrink-0">
                    <span className="text-sm sm:text-base font-bold">02</span>
                  </div>
                  <div className="px-5 sm:px-6 lg:px-7 py-4 sm:py-5 rounded-xl border border-zinc-100 bg-white shadow-sm flex-1">
                    <div className="font-bold text-zinc-900 text-sm sm:text-base mb-2">Week 2</div>
                    <div className="text-xs sm:text-sm text-zinc-500">Improved comfort, return to desk work</div>
                  </div>
                </div>

                {/* Week 4-6 */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white shadow-lg shrink-0">
                    <span className="text-sm sm:text-base font-bold">04</span>
                  </div>
                  <div className="px-5 sm:px-6 lg:px-7 py-4 sm:py-5 rounded-xl border border-zinc-100 bg-white shadow-sm flex-1">
                    <div className="font-bold text-zinc-900 text-sm sm:text-base mb-2">Week 4-6</div>
                    <div className="text-xs sm:text-sm text-zinc-500">Visible lower-abdominal flattening</div>
                  </div>
                </div>

                {/* Month 3 */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white shadow-lg shrink-0">
                    <span className="text-sm sm:text-base font-bold">M3</span>
                  </div>
                  <div className="px-5 sm:px-6 lg:px-7 py-4 sm:py-5 rounded-xl border border-zinc-100 bg-white shadow-sm flex-1">
                    <div className="font-bold text-zinc-900 text-sm sm:text-base mb-2">Month 3</div>
                    <div className="text-xs sm:text-sm text-zinc-500">Final contour as swelling resolves</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-zinc-100">
                <p className="text-xs sm:text-sm text-zinc-500 mb-2">
                  Postoperative recovery principles used in mini tummy tuck surgery align with internationally recognised surgical safety and postoperative care standards
                </p>
                <p className="text-xs font-bold text-primary uppercase tracking-wider">
                  Clinical guidance aligned with: World Health Organization – Safe Surgery &amp; Postoperative Care
                </p>
              </div>
            </div>

            {/* Benefits & Liposuction Info */}
            <div className="space-y-8 lg:space-y-12">
              {/* Benefits */}
              <div className="bg-zinc-50 p-5 sm:p-8 rounded-2xl border border-zinc-100">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-4 sm:mb-6 flex items-center gap-2">
                  <ThumbsUp className="w-6 h-6 text-primary" /> Benefits of a Mini Tummy Tuck
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-zinc-600 text-xs sm:text-sm">Removes loose skin from the lower abdomen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-zinc-600 text-xs sm:text-sm">Smaller incision and shorter scar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-zinc-600 text-xs sm:text-sm">Faster recovery compared to full tummy tuck</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-zinc-600 text-xs sm:text-sm">Improves lower-abdominal contour</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-zinc-600 text-xs sm:text-sm">Can be combined with liposuction for refinement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span className="text-zinc-600 text-xs sm:text-sm">Long-lasting results with stable weight</span>
                  </li>
                </ul>
              </div>

              {/* Liposuction */}
              <div className="bg-primary text-white p-5 sm:p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <h3 className="text-lg sm:text-xl font-bold mb-4">Mini Tummy Tuck and Liposuction</h3>
                <p className="text-primary/90 leading-relaxed text-sm sm:text-base text-white/90">
                  A mini tummy tuck may be combined with liposuction to enhance contour, but liposuction alone cannot correct loose skin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidates Section */}
      <section ref={candidatesRef} className="py-16 sm:py-20 lg:py-24 bg-zinc-900 text-white">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible('section-4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 lg:mb-12 text-center">Who Is a Good Candidate?</h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Ideal */}
            <div className="bg-zinc-800 p-5 sm:p-8 rounded-2xl border border-zinc-700">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6 flex items-center gap-2">
                <Smile className="w-6 h-6" /> Ideal Candidates
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-zinc-300 text-xs sm:text-sm">Mild lower-abdominal skin laxity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-zinc-300 text-xs sm:text-sm">Minimal upper-abdominal looseness</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-zinc-300 text-xs sm:text-sm">Stable body weight</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-zinc-300 text-xs sm:text-sm">Good general health</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-zinc-300 text-xs sm:text-sm">Realistic expectations</span>
                </li>
              </ul>
            </div>

            {/* Not Suitable */}
            <div className="bg-zinc-800 p-5 sm:p-8 rounded-2xl border border-zinc-700">
              <h3 className="text-lg sm:text-xl font-bold text-zinc-400 mb-4 sm:mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" /> Not Suitable If
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4" />
                  </span>
                  <span className="text-zinc-400 text-xs sm:text-sm">Significant muscle separation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4" />
                  </span>
                  <span className="text-zinc-400 text-xs sm:text-sm">Excess skin above the navel</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4" />
                  </span>
                  <span className="text-zinc-400 text-xs sm:text-sm">Planning future pregnancy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4" />
                  </span>
                  <span className="text-zinc-400 text-xs sm:text-sm">Unstable weight</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-zinc-500 mt-6 lg:mt-8 text-xs sm:text-sm">Suitability is confirmed during clinical consultation.</p>
        </div>
      </section>

      {/* Post-Op Recovery */}
      <section ref={recoveryRef} className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible('section-5') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mb-6 lg:mb-8 text-center">Post-Operative Recovery &amp; Aftercare</h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <BaseImage
                src="/images/tummy_tuck_new.jpg"
                alt="Post-operative care"
                width={600}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-zinc-600 text-sm sm:text-base">After surgery, patients typically receive:</p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700 font-medium bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                  <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" /> Compression garment (4-6 weeks)
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700 font-medium bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                  <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" /> Pain relief medication
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700 font-medium bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                  <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" /> Wound care instructions
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700 font-medium bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                  <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" /> Activity guidelines
                </li>
                <li className="flex items-center gap-3 text-xs sm:text-sm text-zinc-700 font-medium bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                  <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" /> Scheduled follow-up visits
                </li>
              </ul>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed border-l-4 border-primary pl-4">
                Walking is encouraged early, while strenuous activity is restricted during healing. Discomfort is usually described as mild tightness or muscle soreness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section ref={faqRef} className="py-16 sm:py-20 lg:py-24 bg-zinc-50">
        <div className={`max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 transition-all duration-700 ${isVisible('section-6') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 lg:mb-16 px-0 sm:px-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">Everything you need to know about the mini tummy tuck procedure, recovery process, and expected results.</p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'ring-1 ring-primary/10 border-primary/30' : 'border-zinc-200/80 hover:border-primary/30'
                }`}
              >
                <div
                  className="flex items-center justify-between px-5 py-4 sm:p-6 lg:p-7 cursor-pointer select-none hover:bg-zinc-50/50 transition-colors gap-3 sm:gap-4"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-sm sm:text-base lg:text-[17px] font-medium text-zinc-900">{item.question}</span>
                  <span className={`text-zinc-400 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-primary' : ''}`}>
                    <ChevronDown className="w-6 h-6" />
                  </span>
                </div>
                {openIndex === index && (
                  <div className="px-5 sm:px-6 lg:px-7 pb-5 sm:pb-6 lg:pb-7 pt-0">
                    <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="py-16 sm:py-20 lg:py-24 bg-white border-t border-zinc-100">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 ${isVisible('section-7') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight mb-4 sm:mb-6">
            Refine your lower-abdominal contour with surgeon-performed mini tummy tuck surgery in Malaysia.
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 mb-8 lg:mb-12 max-w-2xl mx-auto">
            Dr. Soma combines surgical precision, patient safety, and aesthetic judgment to deliver natural, proportionate results.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-500/20 text-sm sm:text-base">
              <MessageCircle className="w-6 h-6" /> Chat with Us on WhatsApp
            </a>
            <Link href="/contact-us" className="inline-flex justify-center items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-sm sm:text-base">
              <Calendar className="w-6 h-6" /> Book a Consultation Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiniTummyTuckMalaysia;
