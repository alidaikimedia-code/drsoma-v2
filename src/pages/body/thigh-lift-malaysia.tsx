import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import BaseImage from "@/components/BaseImage";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";

const ThighLiftMalaysia = () => {
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
      question: "1. What is a thigh lift?",
      answer:
        "A thigh lift is a surgical procedure that removes excess skin and fat from the thighs to improve contour and firmness.",
    },
    {
      question: "2. Is thigh lift surgery safe?",
      answer:
        "Yes, when performed by a certified plastic surgeon in a regulated medical facility, thigh lift surgery is considered safe and well-established.",
    },
    {
      question: "3. How long does recovery take after a thigh lift?",
      answer:
        "Most patients return to normal daily activities within 2 weeks, with full recovery over several months.",
    },
    {
      question: "4. Will there be scars after a thigh lift?",
      answer:
        "Yes, scars are expected but are placed strategically and typically fade over time.",
    },
    {
      question: "5. Is thigh lift surgery painful?",
      answer:
        "Postoperative discomfort is usually manageable with prescribed pain medication.",
    },
    {
      question: "6. Can a thigh lift be combined with other procedures?",
      answer:
        "Yes, thigh lift surgery is often combined with liposuction or other body-contouring procedures.",
    },
    {
      question: "7. Are thigh lift results permanent?",
      answer:
        "Results are long-lasting as long as weight remains stable and healthy lifestyle habits are maintained.",
    },
    {
      question: "8. Who is not a good candidate for thigh lift surgery?",
      answer:
        "Patients with unstable weight, uncontrolled medical conditions, or unrealistic expectations may not be suitable candidates.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Head>
        <title>Thigh Lift in Malaysia | Dr. Soma Plastic Surgery</title>
        <meta name="description" content="Thigh lift surgery (thighplasty) in Malaysia by Dr. Soma. Remove excess skin and fat from thighs for smoother, firmer contours. Book your consultation today." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-zinc-50 overflow-hidden">
        {/* Abstract Background Shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50/40 -skew-x-12 translate-x-20"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white border border-orange-100 px-4 py-1.5 rounded-full shadow-sm animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">THIGH LIFT IN MALAYSIA</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 leading-[1.1] tracking-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                Thighplasty for Firmer, <span className="text-primary">Smoother Thigh Contours</span>
              </h1>

              <p className="text-lg text-zinc-900 font-medium border-l-4 border-primary pl-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                Performed by a Certified Plastic Surgeon
              </p>

              <div className="prose prose-zinc text-zinc-600 max-w-lg animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <p>
                  Loose or sagging thigh skin, particularly along the inner thighs, is a common concern after significant weight loss, ageing, or genetic factors. A thigh lift, medically referred to as thighplasty, is a surgical procedure designed to remove excess skin and fat from the thighs, restoring smoother contours and improved firmness.
                </p>
              </div>

              {/* Regulation Box */}
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-lg shadow-zinc-200/50 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-start gap-4">
                  <div className="min-w-[40px] h-10 bg-orange-50 rounded-full flex items-center justify-center text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      In Malaysia, thigh lift surgery is classified as a regulated surgical procedure and must be performed by a registered medical practitioner in a licensed medical facility, in accordance with standards set by the Ministry of Health Malaysia, which oversees surgical safety and private healthcare services.
                    </p>
                    <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wide flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Regulated by: Ministry of Health Malaysia – Private Healthcare Services
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <p className="text-sm font-medium text-zinc-800">
                  At Dr. Soma Plastic Surgery, all thigh lift procedures are performed personally by Dr. Soma, ensuring precise surgical planning and comprehensive postoperative care.
                </p>
                <a href="#" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-zinc-800 hover:scale-105 transition-all duration-300 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  Book a Consultation (WhatsApp)
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-full min-h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-scaleIn" style={{ animationDelay: '0.3s' }}>
              <BaseImage src="/images/thighlift.jpg" alt="Thigh Lift Surgery Malaysia" width={800} height={650} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">What Is a Thigh Lift (Thighplasty)?</h2>
            <p className="text-zinc-600 leading-relaxed text-lg animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
              A thigh lift is a body-contouring surgery that removes excess skin and fat from the inner, outer, or front of the thighs, depending on individual anatomy and concerns. The procedure is particularly effective when skin laxity persists despite exercise and weight control.
            </p>

            <div className="bg-orange-50/50 p-6 rounded-xl border-l-4 border-primary animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
              <p className="text-sm text-zinc-800 italic mb-2 font-medium">
                &quot;Major medical institutions describe thighplasty as a suitable option for patients with significant thigh skin laxity following weight loss or ageing.&quot;
              </p>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Clinical overview from: Mayo Clinic – Thigh Lift (Thighplasty)</span>
            </div>

            <p className="text-sm text-zinc-500 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
              Thigh lift surgery is not intended for weight loss but for reshaping and contour improvement.
            </p>
          </div>
        </div>
      </section>

      {/* How It Is Performed */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">How Thigh Lift Surgery Is Performed</h2>
            <p className="text-zinc-500 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">A typical thigh lift procedure may involve:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Preoperative Assessment</h3>
              <p className="text-sm text-zinc-500">Preoperative assessment and marking of the surgical area.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3"/>
                  <path d="M8.12 8.12 12 12"/>
                  <path d="M20 4 8.12 15.88"/>
                  <circle cx="6" cy="18" r="3"/>
                  <path d="M14.8 14.8 20 20"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Tissue Removal</h3>
              <p className="text-sm text-zinc-500">Removal of excess skin and fat for contouring.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 12h8"/>
                  <path d="M12 8v8"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Liposuction</h3>
              <p className="text-sm text-zinc-500">Possible combination with liposuction for enhanced results.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.4s' }}>
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Incision Placement</h3>
              <p className="text-sm text-zinc-500">Strategic placement in groin, inner thigh, or outer thigh.</p>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.5s' }}>
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                  <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
                  <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Layered Closure</h3>
              <p className="text-sm text-zinc-500">Precise layered closure to support proper healing.</p>
            </div>

            {/* Step 6 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.6s' }}>
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Compression</h3>
              <p className="text-sm text-zinc-500">Compression garment application to reduce swelling.</p>
            </div>
          </div>

          <div className="mt-8 text-center bg-white p-4 rounded-xl border border-zinc-100 inline-block w-full">
            <p className="text-sm text-zinc-600">The incision pattern depends on the type of thigh lift required.</p>
          </div>
        </div>
      </section>

      {/* Types of Procedures */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Types of Thigh Lift Procedures</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Inner */}
            <div className="group relative bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
              <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2 block">Common</span>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Inner (Medial) Thigh Lift</h3>
              <p className="text-zinc-600">Targets inner thigh laxity.</p>
            </div>

            {/* Outer */}
            <div className="group relative bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
              <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2 block">Contouring</span>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Outer (Lateral) Thigh Lift</h3>
              <p className="text-zinc-600">Improves outer thigh and hip contour.</p>
            </div>

            {/* Mini */}
            <div className="group relative bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
              <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2 block">Minimal</span>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Mini Thigh Lift</h3>
              <p className="text-zinc-600">Limited skin removal near the groin.</p>
            </div>

            {/* Extended */}
            <div className="group relative bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 overflow-hidden animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.4s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
              <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2 block">Comprehensive</span>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Extended Thigh Lift</h3>
              <p className="text-zinc-600">Addresses extensive skin laxity.</p>
            </div>
          </div>

          <p className="mt-8 text-zinc-500 text-sm animate-on-scroll opacity-0 [&.animate-visible]:opacity-100 transition-all duration-500 delay-300">Procedure selection is individualized during consultation.</p>
        </div>
      </section>

      {/* Results & Recovery */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Results and Recovery Timeline</h2>
            <p className="text-zinc-600 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Expected recovery progression:</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-6 md:left-7 top-6 md:top-7 bottom-6 md:bottom-7 w-0.5 bg-gradient-to-b from-primary via-primary to-zinc-900"></div>

            <div className="grid gap-6 md:gap-8">
              {/* Week 1 */}
              <div className="flex items-start gap-4 md:gap-6 relative animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.1s' }}>
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white bg-primary text-white shadow-lg shrink-0 z-10">
                  <span className="text-xs md:text-sm font-bold">W1</span>
                </div>
                <div className="flex-1 px-5 py-6 md:px-6 md:py-8 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-zinc-900">Week 1</span>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Healing</span>
                  </div>
                  <div className="text-sm text-zinc-500">Swelling, bruising, compression garment use.</div>
                </div>
              </div>

              {/* Week 2 */}
              <div className="flex items-start gap-4 md:gap-6 relative animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.2s' }}>
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white bg-primary text-white shadow-lg shrink-0 z-10">
                  <span className="text-xs md:text-sm font-bold">W2</span>
                </div>
                <div className="flex-1 px-5 py-6 md:px-6 md:py-8 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-zinc-900">Week 2</span>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Progress</span>
                  </div>
                  <div className="text-sm text-zinc-500">Gradual return to routine activities.</div>
                </div>
              </div>

              {/* Week 4-6 */}
              <div className="flex items-start gap-4 md:gap-6 relative animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.3s' }}>
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white bg-primary text-white shadow-lg shrink-0 z-10">
                  <span className="text-[10px] md:text-xs font-bold">W4-6</span>
                </div>
                <div className="flex-1 px-5 py-6 md:px-6 md:py-8 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-zinc-900">Week 4–6</span>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Mobility</span>
                  </div>
                  <div className="text-sm text-zinc-500">Improved thigh contour and mobility.</div>
                </div>
              </div>

              {/* Month 3 */}
              <div className="flex items-start gap-4 md:gap-6 relative animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.4s' }}>
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white bg-zinc-900 text-white shadow-lg shrink-0 z-10">
                  <span className="text-xs md:text-sm font-bold">M3</span>
                </div>
                <div className="flex-1 px-5 py-6 md:px-6 md:py-8 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-zinc-900">Month 3</span>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Result</span>
                  </div>
                  <div className="text-sm text-zinc-500">Final results as swelling resolves.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-xl border-t-4 border-primary shadow-sm">
            <p className="text-sm text-zinc-600 mb-3">Postoperative recovery protocols used in thigh lift surgery align with internationally recognised surgical safety and postoperative care principles.</p>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" x2="22" y1="12" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              Clinical guidance aligned with: World Health Organization – Safe Surgery &amp; Postoperative Care
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Benefits of a Thigh Lift</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.1s' }}>
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-700 font-medium">Removes loose, sagging thigh skin</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.2s' }}>
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-700 font-medium">Improves thigh shape and smoothness</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.3s' }}>
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-700 font-medium">Reduces skin irritation or chafing</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.4s' }}>
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-700 font-medium">Enhances comfort in fitted clothing</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.5s' }}>
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-700 font-medium">Long-lasting results with stable weight</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-on-scroll opacity-0 scale-95 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:scale-100">
              <BaseImage src="/images/lift2.jpg" alt="Thigh Lift Surgery Results" width={800} height={600} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Candidates Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Who Is a Good Candidate?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ideal */}
            <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 hover:border-primary/50 transition-colors animate-on-scroll opacity-0 translate-x-[-30px] transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <polyline points="16 11 18 13 22 9"/>
                </svg>
                Ideal Candidates generally:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-200">Have significant thigh skin laxity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-200">Maintain a stable body weight</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-200">Are in good overall health</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-200">Do not smoke or can stop temporarily</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-200">Have realistic expectations</span>
                </li>
              </ul>
            </div>

            {/* Note */}
            <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 flex flex-col justify-center hover:border-primary/50 transition-colors animate-on-scroll opacity-0 translate-x-[30px] transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-700 flex items-center justify-center text-zinc-400 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Important Consideration</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Patients planning further major weight changes may be advised to delay surgery to ensure the longevity of their results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liposuction Note */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-3xl font-semibold mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Thigh Lift and Liposuction</h2>
          <p className="text-lg text-orange-50 leading-relaxed max-w-2xl mx-auto mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-150 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            Liposuction can remove excess fat but does not tighten loose skin. A thigh lift may be combined with liposuction to refine contour when appropriate.
          </p>
          <Link href="/body/liposuction-malaysia" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16l4-4-4-4"/>
              <path d="M8 12h8"/>
            </svg>
            Learn more about Liposuction
          </Link>
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
                  <h4 className="text-primary">{item.question}</h4>
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
      <section className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            Restore smoother, firmer thigh contours with surgeon-performed thigh lift surgery in Malaysia.
          </h2>
          <p className="text-lg text-zinc-500 mb-12 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            Dr. Soma combines surgical expertise with patient-focused care to deliver natural, balanced results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            <a href="#" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Chat with Us on WhatsApp
            </a>
            <a href="#" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20">
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

export default ThighLiftMalaysia;
