import React, { useState, useEffect } from "react";
import Head from "next/head";
import BaseImage from "@/components/BaseImage";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";

const FatGraftingButtockMalaysia = () => {
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
      question: "1. What is fat grafting to the buttocks?",
      answer: "It is a procedure that enhances buttock shape using fat taken from other parts of your body.",
    },
    {
      question: "2. Is fat grafting to the buttocks safe?",
      answer: "When performed by a certified plastic surgeon in a regulated hospital setting, it is considered a well-established procedure.",
    },
    {
      question: "3. How long does recovery take?",
      answer: "Most patients resume light activities within 2 weeks, with full recovery over several months.",
    },
    {
      question: "4. How long do the results last?",
      answer: "Surviving fat cells are permanent if body weight remains stable.",
    },
    {
      question: "5. Will all the injected fat survive?",
      answer: "No. A portion is naturally reabsorbed, which is why surgical planning accounts for fat loss.",
    },
    {
      question: "6. Is fat grafting better than implants?",
      answer: "It depends on goals. Fat grafting offers natural enhancement, while implants provide more volume.",
    },
    {
      question: "7. Does the procedure leave scars?",
      answer: "Only small liposuction scars, which usually fade over time.",
    },
    {
      question: "8. Who should not undergo fat grafting?",
      answer: "Patients with insufficient fat, unstable weight, or certain medical conditions may not be suitable candidates.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Head>
        <title>Fat Grafting Buttock in Malaysia | Dr. Soma Plastic Surgery</title>
        <meta name="description" content="Fat grafting to buttocks (BBL) in Malaysia by Dr. Soma. Natural buttock enhancement using your own fat. Certified plastic surgeon with hospital-grade safety. Book consultation today." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-zinc-50">
        {/* Abstract Background blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-orange-100/40 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-50 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-orange-100 rounded-full shadow-sm animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-primary">Certified Plastic Surgeon</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 leading-[1.1] tracking-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                FAT GRAFTING TO <br />
                <span className="text-primary">BUTTOCKS IN MALAYSIA</span>
              </h1>

              <h2 className="text-xl text-zinc-700 font-medium animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                Natural Buttock Enhancement Using Your Own Fat
              </h2>

              <div className="prose prose-lg text-zinc-600 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <p>
                  Fat grafting to the buttocks—commonly referred to as autologous fat transfer—is a surgical procedure that enhances buttock shape and volume using fat harvested from other areas of the body such as the abdomen, flanks, or thighs. The goal is to achieve natural-looking contour improvement while simultaneously reducing unwanted fat elsewhere.
                </p>
              </div>

              {/* Regulatory Info */}
              <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <p className="text-sm leading-relaxed text-zinc-500">
                  In Malaysia, fat grafting procedures are classified as surgical interventions and must be performed by a registered medical practitioner in a licensed facility under standards regulated by the Ministry of Health Malaysia, which oversees patient safety and surgical practice which is regulated by: <strong className="text-zinc-800">Ministry of Health Malaysia – Private Healthcare Services</strong>
                </p>
              </div>

              <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <p className="text-zinc-800 font-medium">
                  At Dr. Soma Plastic Surgery, fat grafting to the buttocks is personally performed by Dr. Soma, ensuring careful fat handling, precise placement, and hospital-grade safety protocols.
                </p>
              </div>

              <div className="pt-2 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  Book a Consultation (WhatsApp)
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-scaleIn" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative bg-zinc-200">
                <BaseImage src="/images/fatgrafting.jpg" alt="Fat Grafting to Buttocks Malaysia" width={800} height={1000} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider">Dual Benefit</span>
                  </div>
                  <p className="font-medium text-lg leading-snug">Achieve natural-looking contour improvement while simultaneously reducing unwanted fat elsewhere.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">The Procedure</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mt-3 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">What Is Fat Grafting to the Buttocks?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-primary/30 transition-colors text-center group animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
              <div className="w-14 h-14 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="m2 22 1-1h3l9-9"/>
                  <path d="M3 21v-3l9-9"/>
                  <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"/>
                </svg>
              </div>
              <h3 className="font-bold text-zinc-900 mb-2">Harvesting</h3>
              <p className="text-sm text-zinc-500">Liposuction to harvest fat from donor areas.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-primary/30 transition-colors text-center group animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
              <div className="w-14 h-14 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M10 2v7.31"/>
                  <path d="M14 9.3V1.99"/>
                  <path d="M8.5 2h7"/>
                  <path d="M14 9.3a6.5 6.5 0 1 1-4 0"/>
                  <path d="M5.52 16h12.96"/>
                </svg>
              </div>
              <h3 className="font-bold text-zinc-900 mb-2">Processing</h3>
              <p className="text-sm text-zinc-500">Processing and purification of fat cells.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:border-primary/30 transition-colors text-center group animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
              <div className="w-14 h-14 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="m18 2 4 4"/>
                  <path d="m17 7 3-3"/>
                  <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/>
                  <path d="m9 11 4 4"/>
                  <path d="m5 19-3 3"/>
                  <path d="m14 4 6 6"/>
                </svg>
              </div>
              <h3 className="font-bold text-zinc-900 mb-2">Reinjection</h3>
              <p className="text-sm text-zinc-500">Strategic reinjection into the buttocks.</p>
            </div>
          </div>

          <div className="bg-orange-50/50 rounded-2xl p-8 border border-orange-100 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              <div>
                <p className="text-zinc-700 italic text-lg font-medium mb-4">
                  &quot;Major medical institutions describe fat grafting as a method to enhance volume using the patient&apos;s own tissue, which reduces the risk of allergic reactions compared to implants.&quot;
                </p>
                <div className="flex items-center gap-2 text-sm text-zinc-500 font-bold uppercase tracking-wide">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                  </svg>
                  Clinical overview from: Mayo Clinic – Fat Grafting and Body Contouring
                </div>
                <p className="mt-4 text-zinc-800 font-semibold border-t border-orange-200 pt-4">
                  This procedure focuses on shape and proportion, not extreme enlargement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Used for Fat Harvesting */}
      <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-900 opacity-50"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Areas Commonly Used for Fat Harvesting</h2>
              <p className="text-zinc-400 text-lg mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
                Fat is typically harvested from areas with excess deposits, providing a dual benefit that allows patients to improve multiple body areas in one procedure.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800 p-5 rounded-xl border border-zinc-700 flex items-center gap-3 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.1s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="font-medium">Abdomen</span>
                </div>
                <div className="bg-zinc-800 p-5 rounded-xl border border-zinc-700 flex items-center gap-3 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.2s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="font-medium">Flanks (love handles)</span>
                </div>
                <div className="bg-zinc-800 p-5 rounded-xl border border-zinc-700 flex items-center gap-3 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.3s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="font-medium">Thighs</span>
                </div>
                <div className="bg-zinc-800 p-5 rounded-xl border border-zinc-700 flex items-center gap-3 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.4s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="font-medium">Lower back</span>
                </div>
              </div>
            </div>
            <div className="relative animate-on-scroll opacity-0 scale-95 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:scale-100">
              <div className="aspect-square rounded-full bg-gradient-to-tr from-primary to-orange-300 opacity-20 blur-3xl absolute -right-10 -top-10"></div>
              <BaseImage src="/images/fatgrafting32.jpg" alt="Fat Harvesting Areas" width={600} height={600} className="relative rounded-2xl shadow-2xl border border-zinc-700" />
            </div>
          </div>
        </div>
      </section>

      {/* How Performed & Results */}
      <section className="py-24 bg-orange-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* How Performed */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">How Fat Grafting to the Buttocks Is Performed</h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-zinc-100 items-center animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.1s' }}>
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-primary flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  <p className="font-medium text-zinc-700">Preoperative assessment and marking</p>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-zinc-100 items-center animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.2s' }}>
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-primary flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  <p className="font-medium text-zinc-700">Liposuction using fine cannulas</p>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-zinc-100 items-center animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.3s' }}>
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-primary flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  <p className="font-medium text-zinc-700">Fat purification and preparation</p>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-zinc-100 items-center animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.4s' }}>
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-primary flex items-center justify-center font-bold text-sm shrink-0">4</div>
                  <p className="font-medium text-zinc-700">Controlled reinjection into the buttocks</p>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-zinc-100 items-center animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.5s' }}>
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-primary flex items-center justify-center font-bold text-sm shrink-0">5</div>
                  <p className="font-medium text-zinc-700">Application of compression garments</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-zinc-500 flex items-center gap-2 animate-on-scroll opacity-0 [&.animate-visible]:opacity-100 transition-all duration-500 delay-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
                The surgery is performed under general or regional anaesthesia in a hospital setting.
              </p>
            </div>

            {/* Results & Survival */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Results and Fat Survival</h2>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 h-full animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
                <p className="text-zinc-600 mb-6 leading-relaxed">
                  Not all transferred fat survives permanently. A portion of the grafted fat is naturally reabsorbed by the body within the first few months. Clinical guidance recognises that long-term results depend on surgical technique and patient factors.
                </p>

                <div className="bg-zinc-50 p-5 rounded-xl border-l-4 border-primary mb-6">
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Research Guidance</p>
                  <p className="text-zinc-700 font-medium text-sm">National Institutes of Health (NCBI) – Autologous Fat Grafting</p>
                </div>

                <div className="flex items-center gap-4 text-zinc-800 font-bold">
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 2v4"/>
                      <path d="M16 2v4"/>
                      <rect width="18" height="18" x="3" y="4" rx="2"/>
                      <path d="M3 10h18"/>
                      <path d="M8 14h.01"/>
                      <path d="M12 14h.01"/>
                      <path d="M16 14h.01"/>
                      <path d="M8 18h.01"/>
                      <path d="M12 18h.01"/>
                      <path d="M16 18h.01"/>
                    </svg>
                  </span>
                  Final results typically stabilize by 3–6 months after surgery.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Candidates */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Benefits of Fat Grafting to the Buttocks</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.1s' }}>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-700 font-medium">Uses the patient&apos;s own fat (no implants)</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.2s' }}>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-700 font-medium">Natural look and feel</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.3s' }}>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-700 font-medium">Simultaneous body contouring via liposuction</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.4s' }}>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-700 font-medium">Improved buttock shape and proportion</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.5s' }}>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-700 font-medium">Long-lasting results with stable weight</span>
                </li>
              </ul>
            </div>

            {/* Candidates */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Who Is a Good Candidate?</h2>
              <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
                <p className="text-zinc-600 font-medium mb-6">Suitable candidates usually:</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-zinc-700">Have sufficient fat for harvesting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-zinc-700">Are at a stable body weight</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-zinc-700">Desire moderate, natural enhancement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-zinc-700">Are in good overall health</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-zinc-700">Understand variability in fat retention</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-zinc-200 text-sm text-zinc-500">
                  Patients seeking dramatic size increase may require alternative approaches.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-50">
        <div className="flex containers w-full">
          <div className="flex flex-col w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 text-center mb-12 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Fat Grafting vs Buttock Implants</h2>

            <div className="w-full border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
              {/* Header */}
              <div className="grid grid-cols-3 bg-zinc-900 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-white">
                <div>Feature</div>
                <div className="text-primary">Fat Grafting</div>
                <div>Buttock Implants</div>
              </div>

              {/* Rows */}
              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Material Used</div>
                <div className="text-primary font-semibold">Patient&apos;s own fat</div>
                <div className="text-zinc-600">Silicone implant</div>
              </div>

              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Look &amp; Feel</div>
                <div className="text-primary font-semibold">Natural</div>
                <div className="text-zinc-600">Firm</div>
              </div>

              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Scar Size</div>
                <div className="text-primary font-semibold">Small liposuction scars</div>
                <div className="text-zinc-600">Larger incisions</div>
              </div>

              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Risk Profile</div>
                <div className="text-zinc-700">Fat survival variability</div>
                <div className="text-zinc-600">Implant-related risks</div>
              </div>

              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Best For</div>
                <div className="text-primary font-semibold">Natural contour</div>
                <div className="text-zinc-600">Structural augmentation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Aftercare */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Safety and Aftercare</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg transition-all animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mx-auto mb-4">
                <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/>
                <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"/>
                <path d="M5 18v2"/>
                <path d="M19 18v2"/>
              </svg>
              <p className="font-medium text-zinc-700">Avoiding prolonged sitting initially</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg transition-all animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mx-auto mb-4">
                <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
              </svg>
              <p className="font-medium text-zinc-700">Wearing compression garments</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg transition-all animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mx-auto mb-4">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
              <p className="font-medium text-zinc-700">Gradual return to activities</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg transition-all animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.4s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary mx-auto mb-4">
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
              <p className="font-medium text-zinc-700">Regular follow-up appointments</p>
            </div>
          </div>

          <div className="bg-zinc-50 inline-block p-6 rounded-2xl border border-zinc-200 animate-on-scroll opacity-0 [&.animate-visible]:opacity-100 transition-all duration-500 delay-300">
            <p className="text-zinc-600 mb-2">Postoperative recommendations follow internationally recognised surgical safety and recovery principles.</p>
            <div className="text-sm font-bold text-primary uppercase tracking-wide">
              Aftercare aligned with: World Health Organization – Safe Surgery &amp; Patient Care
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-50 lg:py-100 bg-zinc-50 border-t border-zinc-100">
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
      <section id="contact" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-900"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Final Call to Action</h2>
          <p className="text-xl text-zinc-200 mb-2 font-light animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            Enhance your curves naturally with surgeon-performed fat grafting to the buttocks in Malaysia.
          </p>
          <p className="text-orange-300 mb-10 font-medium animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            Dr. Soma combines precision liposuction, meticulous fat handling, and safety-first surgical care to deliver balanced, natural-looking results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            <a href="#" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Chat with Us on WhatsApp
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/>
                <line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
              Book Your Consultation Today
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default FatGraftingButtockMalaysia;
