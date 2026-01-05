import React, { useState, useEffect } from "react";
import Head from "next/head";
import BaseImage from "@/components/BaseImage";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";

const BodyLiftMalaysia = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Scroll Animation Effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const faqData = [
    {
      question: "1. What happens to the scars?",
      answer:
        "Scars are inevitable with body lift surgery but are placed strategically within the bikini line to be hidden by underwear or swimwear. They will fade from red to white over 12–18 months.",
    },
    {
      question: "2. How much weight should I lose before surgery?",
      answer:
        "You should be at or near your goal weight and have maintained a stable weight for at least 6 months. Fluctuations in weight after surgery can affect the results.",
    },
    {
      question: "3. Can I combine this with other surgeries?",
      answer:
        "Yes, but safety is paramount. Combining procedures (like breast lift or arm lift) increases operating time. Dr. Soma will assess if a staged approach is safer for you.",
    },
    {
      question: "4. Is it painful?",
      answer:
        "There will be discomfort and tightness, especially in the first week. Pain is managed with prescribed medication and generally subsides significantly after the first few days.",
    },
    {
      question: "5. How long is the recovery period?",
      answer:
        "Most patients can return to light desk work within 2-4 weeks. Full recovery with return to exercise and normal activities typically takes 6-8 weeks.",
    },
    {
      question: "6. Am I a good candidate for body lift surgery?",
      answer:
        "Ideal candidates have achieved significant weight loss, are at a stable weight, are in good overall health, do not smoke, and have realistic expectations about the outcomes.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Head>
        <title>Body Lift in Malaysia | Dr. Soma Plastic Surgery</title>
        <meta name="description" content="Body lift surgery in Malaysia by Dr. Soma. Comprehensive body contouring after weight loss to remove excess skin and reshape your body. Book your consultation today." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2.5 bg-white border border-zinc-200 px-4 py-1.5 rounded-full shadow-sm animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-[11px] font-bold text-zinc-600 tracking-widest uppercase">Certified Plastic Surgeon</span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-zinc-900 leading-[1.05] tracking-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                Body Contouring <br />
                <span className="text-primary">After Weight Loss</span>
              </h1>

              <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed max-w-lg animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                Restore your body&apos;s natural contours. A comprehensive surgical procedure to remove excess skin and refine shape, performed by Dr. Soma.
              </p>

              {/* Trust Badge */}
              <div className="flex items-start gap-4 p-5 bg-zinc-50 rounded-2xl border border-zinc-200/60 shadow-sm animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="min-w-[40px] h-10 bg-white rounded-lg border border-zinc-100 flex items-center justify-center text-primary shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">MOH Regulated</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Performed in a licensed hospital facility under Ministry of Health Malaysia guidelines.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <a href="#contact" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  Book Consultation
                </a>
                <a href="#learn-more" className="inline-flex items-center gap-2 bg-white text-zinc-700 border border-zinc-200 px-8 py-4 rounded-xl font-semibold hover:bg-zinc-50 hover:border-zinc-300 transition-all">
                  Learn More
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-scaleIn" style={{ animationDelay: '0.3s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-zinc-100 aspect-[4/5]">
                <BaseImage src="/images/bodylift.jpg" alt="Body Lift Surgery Malaysia" width={800} height={1000} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Floating Card */}
                <div className="absolute bottom-12 left-10 right-10 bg-primary p-6 rounded-2xl shadow-xl border border-orange-400">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-orange-100 uppercase tracking-wider">Procedure Focus</p>
                      <p className="text-white font-semibold text-lg">Circumferential Body Lift</p>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-60 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-zinc-300 rounded-full blur-3xl opacity-60 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section id="learn-more" className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <span className="text-primary font-bold tracking-widest uppercase text-xs animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Medical Overview</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">What Is a Body Lift?</h2>
              <p className="text-xl text-zinc-500 leading-relaxed animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
                A body lift is a reconstructive surgical procedure designed to reshape the body by removing excess sagging skin and underlying fat. It is the gold standard for patients who have achieved significant weight loss but are left with lax tissue that diet and exercise cannot correct.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <span className="block text-2xl font-bold text-zinc-900 mb-1">Not</span>
                  <span className="text-sm text-zinc-500">a weight loss substitute. It is for contouring.</span>
                </div>
                <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                  <span className="block text-2xl font-bold text-primary mb-1">Yes</span>
                  <span className="text-sm text-orange-700">it improves comfort, hygiene, and mobility.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Addressed */}
      <section className="py-24 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Targeted Areas</h2>
            <p className="text-zinc-500 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Comprehensive correction for circumferential excess.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 text-center group cursor-default hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
              <div className="w-12 h-12 mx-auto bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20"/>
                  <path d="m8 6 4-4 4 4"/>
                  <path d="m8 18 4 4 4-4"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">Abdomen</h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 text-center group cursor-default hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
              <div className="w-12 h-12 mx-auto bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3L4 7l4 4"/>
                  <path d="M4 7h16"/>
                  <path d="m16 21 4-4-4-4"/>
                  <path d="M20 17H4"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">Flanks/Waist</h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 text-center group cursor-default hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
              <div className="w-12 h-12 mx-auto bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="1"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">Buttocks</h3>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 text-center group cursor-default hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.4s' }}>
              <div className="w-12 h-12 mx-auto bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                  <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                  <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                  <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                  <path d="M7 12h10"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">Outer Thighs</h3>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 text-center group cursor-default hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.5s' }}>
              <div className="w-12 h-12 mx-auto bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 text-sm">Lower Back</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">The Surgical Process</h2>
              <p className="text-zinc-600 leading-relaxed text-lg mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
                Every procedure is meticulously planned. Dr. Soma performs body lifts under general anaesthesia in a fully equipped hospital setting to ensure maximum safety.
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-zinc-50 rounded-lg border border-zinc-200 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span className="text-sm font-semibold text-zinc-700">Duration: 4–6 Hours (Approx.)</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:border-orange-200 hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-zinc-900">01. Markings &amp; Planning</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m12 19 7-7 3 3-7 7-3-3z"/>
                    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                    <path d="m2 2 7.586 7.586"/>
                    <circle cx="11" cy="11" r="2"/>
                  </svg>
                </div>
                <p className="text-zinc-500 leading-relaxed">Detailed pre-operative markings are made while standing to identify the exact amount of skin to be removed for symmetry.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:border-orange-200 hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-zinc-900">02. Incision &amp; Removal</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="6" cy="6" r="3"/>
                    <path d="M8.12 8.12 12 12"/>
                    <path d="M20 4 8.12 15.88"/>
                    <circle cx="6" cy="18" r="3"/>
                    <path d="M14.8 14.8 20 20"/>
                  </svg>
                </div>
                <p className="text-zinc-500 leading-relaxed">Incisions are strategically placed to be hidden by clothing. Excess skin and fat are removed, and underlying tissues are suspended.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:border-orange-200 hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-zinc-900">03. Layered Closure</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
                  </svg>
                </div>
                <p className="text-zinc-500 leading-relaxed">Deep sutures tighten the tissue, while surface sutures are placed meticulously to minimize scarring. Drains may be used to prevent fluid collection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Grid */}
      <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,98,47,0.15),transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Procedure Variations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 hover:border-primary/50 transition-all duration-300 group animate-on-scroll opacity-0 translate-x-[-30px] [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-zinc-700/50 rounded-xl flex items-center justify-center mb-6 text-zinc-400 group-hover:text-primary group-hover:bg-primary/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 3H5"/>
                  <path d="M12 21V7"/>
                  <path d="m6 15 6 6 6-6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lower Body Lift</h3>
              <p className="text-zinc-400 leading-relaxed">Focuses on the abdomen, hips, buttocks, and thighs. Often combined with a tummy tuck (abdominoplasty).</p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 hover:border-primary/50 transition-all duration-300 group animate-on-scroll opacity-0 translate-x-[30px] [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-zinc-700/50 rounded-xl flex items-center justify-center mb-6 text-zinc-400 group-hover:text-primary group-hover:bg-primary/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 9-6-6-6 6"/>
                  <path d="M12 3v14"/>
                  <path d="M5 21h14"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Upper Body Lift</h3>
              <p className="text-zinc-400 leading-relaxed">Addresses back rolls, loose skin on the chest or breasts, and sometimes the arms (brachioplasty).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-50">
        <div className="flex containers w-full">
          <div className="flex flex-col w-full">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mb-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Body Lift vs. Tummy Tuck</h2>
              <p className="text-zinc-500 text-sm sm:text-base animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Understanding the difference in scope.</p>
            </div>

            <div className="w-full border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
              {/* Header */}
              <div className="grid grid-cols-3 bg-zinc-900 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-white">
                <div>Feature</div>
                <div className="text-primary">Body Lift</div>
                <div>Tummy Tuck</div>
              </div>

              {/* Rows */}
              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Treatment Area</div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  360° (Front &amp; Back)
                </div>
                <div className="text-zinc-600">Front Abdomen Only</div>
              </div>

              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Skin Removal</div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Extensive
                </div>
                <div className="text-zinc-600">Moderate</div>
              </div>

              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Buttock Lift</div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Included
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  No
                </div>
              </div>

              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Flank/Waist</div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Included
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  No
                </div>
              </div>

              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Ideal Patient</div>
                <div className="text-primary font-semibold">Massive Weight Loss</div>
                <div className="text-zinc-600">Post-Pregnancy / Local Fat</div>
              </div>
            </div>

            <p className="text-xs text-center text-zinc-400 mt-6 max-w-2xl mx-auto">The correct procedure is determined during consultation based on your anatomy and goals.</p>
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-16 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Recovery Timeline</h2>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {/* Week 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
                <div className="md:w-1/2 md:text-right md:pr-16 pl-12 md:pl-0">
                  <h3 className="text-lg font-bold text-primary">Week 1</h3>
                  <p className="text-sm text-zinc-600 mt-1">Hospital stay (usually 2-3 nights). Drains may be present. Rest and limited movement.</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full outline outline-4 outline-white transform -translate-x-1/2 z-10 top-1 md:top-auto shadow-sm"></div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Week 2-4 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
                <div className="md:w-1/2 md:pr-16"></div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full transform -translate-x-1/2 z-10 top-1 md:top-auto"></div>
                <div className="md:w-1/2 pl-12 md:pl-16">
                  <h3 className="text-lg font-bold text-zinc-900">Week 2–4</h3>
                  <p className="text-sm text-zinc-600 mt-1">Drains removed. Compression garments worn 24/7. Return to light desk work possible.</p>
                </div>
              </div>

              {/* Week 6-8 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
                <div className="md:w-1/2 md:text-right md:pr-16 pl-12 md:pl-0">
                  <h3 className="text-lg font-bold text-zinc-900">Week 6–8</h3>
                  <p className="text-sm text-zinc-600 mt-1">Compression garment use reduced. Gradual return to exercise and normal activities.</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-zinc-300 rounded-full transform -translate-x-1/2 z-10 top-1 md:top-auto"></div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-50 lg:py-100 bg-white">
        <div className="containers">
          <h2 className="text-primary md:text-start text-center max-[512px]:!text-[34px] mb-16 lg:mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            Frequently Asked <span className="text-header-black">Questions</span>
          </h2>

          <div className="flex w-full flex-col gap-[6px]">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="w-full border border-stroke bg-para-white rounded-[12px] py-[14px] px-[24px] md:py-[18px] md:px-[32px] hover:border-primary/30 transition-colors animate-on-scroll opacity-0 translate-y-4 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0"
                style={{ transitionDelay: `${0.05 * index}s` }}
              >
                <div
                  className="flex justify-between !flex-nowrap w-full cursor-pointer items-center gap-4"
                  onClick={() => toggleAccordion(index)}
                >
                  <h5 className="text-primary">{item.question}</h5>
                  <div className="shrink-0">
                    {openIndex === index ? (
                      <CloseIcon />
                    ) : (
                      <PlusIcon />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="pt-4 mt-4 border-t border-stroke">
                    <p className="text-para-black leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-white border-t border-zinc-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,98,47,0.08),transparent_70%)] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            Ready to complete your journey?
          </h2>
          <p className="text-xl text-zinc-500 mb-10 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            Schedule a consultation with Dr. Soma to discuss your goals and create a personalised surgical plan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            <a href="#" className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 shadow-lg min-w-[240px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              WhatsApp Chat
            </a>
            <a href="#" className="inline-flex justify-center items-center gap-3 px-8 py-4 bg-zinc-900 text-white font-semibold rounded-xl hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-lg min-w-[240px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/>
                <line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
              Book Appointment
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default BodyLiftMalaysia;
