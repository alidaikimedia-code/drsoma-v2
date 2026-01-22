import React, { useState, useEffect } from "react";
import Head from "next/head";
import BaseImage from "@/components/BaseImage";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";

const ArmLiftMalaysia = () => {
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
      question: "1. What is an arm lift?",
      answer:
        "An arm lift is a surgical procedure that removes excess skin and fat from the upper arms to improve contour and firmness.",
    },
    {
      question: "2. Is arm lift surgery safe?",
      answer:
        "Yes, when performed by a certified plastic surgeon in a regulated medical facility, arm lift surgery is considered safe and well-established.",
    },
    {
      question: "3. How long does recovery take after an arm lift?",
      answer:
        "Most patients return to daily activities within 1-2 weeks, with full recovery over several months.",
    },
    {
      question: "4. Will there be visible scars after an arm lift?",
      answer:
        "Yes, scars are expected, but they are placed strategically along the inner arm and fade gradually with time.",
    },
    {
      question: "5. Is arm lift surgery painful?",
      answer:
        "Discomfort is usually mild to moderate and well-controlled with prescribed medication.",
    },
    {
      question: "6. Can an arm lift be combined with other procedures?",
      answer:
        "Yes, it is commonly combined with liposuction or other body-contouring procedures.",
    },
    {
      question: "7. Are arm lift results permanent?",
      answer:
        "Results are long-lasting if body weight remains stable and healthy lifestyle habits are maintained.",
    },
    {
      question: "8. Who is not suitable for arm lift surgery?",
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
        <title>Arm Lift in Malaysia | Dr. Soma Plastic Surgery</title>
        <meta name="description" content="Arm lift surgery (brachioplasty) in Malaysia by Dr. Soma. Remove excess skin and fat from upper arms for firmer, contoured arms. Book your consultation today." />
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
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">ARM LIFT IN MALAYSIA</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 leading-[1.1] tracking-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                Brachioplasty for Firmer, <span className="text-primary">Contoured Upper Arms</span>
              </h1>

              <p className="text-lg text-zinc-900 font-medium border-l-4 border-primary pl-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                Performed by a Certified Plastic Surgeon
              </p>

              <div className="prose prose-zinc text-zinc-600 max-w-lg animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <p>
                  Loose or sagging upper-arm skin—often referred to as &quot;bat wings&quot;—is a common concern after significant weight loss, ageing, or genetic predisposition. An arm lift, medically known as brachioplasty, is a surgical procedure designed to remove excess skin and fat from the upper arms, restoring a firmer, more defined contour.
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
                      In Malaysia, arm lift surgery is considered a regulated surgical procedure and must be performed by a registered medical practitioner in a licensed healthcare facility, under the governance of the Ministry of Health Malaysia, which regulates surgical safety and private medical services.
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
                  At Dr. Soma Plastic Surgery, all arm lift procedures are performed personally by Dr. Soma, ensuring surgical precision, patient safety, and structured aftercare.
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
              <BaseImage src="/images/armlift.jpg" alt="Arm Lift Surgery Malaysia" width={800} height={650} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">What Is an Arm Lift (Brachioplasty)?</h2>
            <p className="text-zinc-600 leading-relaxed text-lg animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
              An arm lift is a body-contouring surgery that removes loose skin and excess fat from the inner or back portion of the upper arms, typically from the armpit to the elbow. The procedure improves arm shape and firmness when exercise and weight control alone are insufficient.
            </p>

            <div className="bg-orange-50/50 p-6 rounded-xl border-l-4 border-primary animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
              <p className="text-sm text-zinc-800 italic mb-2 font-medium">
                &quot;Major medical institutions describe brachioplasty as an effective option for patients with significant skin laxity following weight loss or ageing.&quot;
              </p>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Clinical overview from: Mayo Clinic – Arm Lift (Brachioplasty)</span>
            </div>

            <p className="text-sm text-zinc-500 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
              Arm lift surgery is not a weight-loss procedure, but a contouring solution for excess skin.
            </p>
          </div>
        </div>
      </section>

      {/* How It Is Performed */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-12 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">How Arm Lift Surgery Is Performed</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 19 7-7 3 3-7 7-3-3z"/>
                  <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                  <path d="m2 2 7.586 7.586"/>
                  <circle cx="11" cy="11" r="2"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Preoperative Marking</h3>
              <p className="text-sm text-zinc-500">Preoperative marking of excess skin.</p>
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
              <h3 className="font-semibold text-zinc-900 mb-2">Skin &amp; Fat Removal</h3>
              <p className="text-sm text-zinc-500">Removal of loose skin and underlying fat.</p>
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
              <h3 className="font-semibold text-zinc-900 mb-2">Refinement</h3>
              <p className="text-sm text-zinc-500">Possible combination with liposuction for refinement.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.4s' }}>
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 14 10 14 10 20"/>
                  <polyline points="20 10 14 10 14 4"/>
                  <line x1="14" x2="21" y1="10" y2="3"/>
                  <line x1="3" x2="10" y1="21" y2="14"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Incision Placement</h3>
              <p className="text-sm text-zinc-500">Strategic incision placement along the inner arm.</p>
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
              <p className="text-sm text-zinc-500">Layered closure to support optimal healing.</p>
            </div>

            {/* Step 6 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.6s' }}>
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Compression</h3>
              <p className="text-sm text-zinc-500">Application of compression garments.</p>
            </div>
          </div>

          <div className="mt-8 text-center bg-white p-4 rounded-xl border border-zinc-100 inline-block w-full">
            <p className="text-sm text-zinc-600">The incision pattern depends on the degree of skin laxity and is discussed during consultation.</p>
          </div>
        </div>
      </section>

      {/* Types of Procedures */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Types of Arm Lift Procedures</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mini */}
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
              <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">Level 1</span>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Mini Arm Lift</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">Limited skin removal near the armpit.</p>
            </div>

            {/* Standard */}
            <div className="bg-primary text-white rounded-2xl p-8 shadow-xl relative overflow-hidden hover:-translate-y-2 transition-all duration-300 animate-on-scroll opacity-0 scale-95 [&.animate-visible]:opacity-100 [&.animate-visible]:scale-100" style={{ transitionDelay: '0.2s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <span className="text-orange-100 font-bold text-sm uppercase tracking-wider mb-2 block">Most Common</span>
              <h3 className="text-xl font-semibold text-white mb-4">Standard Arm Lift</h3>
              <p className="text-orange-50 text-sm leading-relaxed">Skin removal from armpit to elbow.</p>
            </div>

            {/* Extended */}
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
              <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">Level 3</span>
              <h3 className="text-xl font-semibold text-zinc-900 mb-4">Extended Arm Lift</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">Includes side chest or lateral chest wall.</p>
            </div>
          </div>

          <p className="mt-8 text-zinc-500 text-sm animate-on-scroll opacity-0 [&.animate-visible]:opacity-100 transition-all duration-500 delay-300">The appropriate technique is selected based on anatomy and goals.</p>
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
                  <div className="font-semibold text-zinc-900 mb-2">Week 1</div>
                  <div className="text-sm text-zinc-500">Swelling, mild discomfort, compression garment use.</div>
                </div>
              </div>

              {/* Week 2 */}
              <div className="flex items-start gap-4 md:gap-6 relative animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.2s' }}>
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white bg-primary text-white shadow-lg shrink-0 z-10">
                  <span className="text-xs md:text-sm font-bold">W2</span>
                </div>
                <div className="flex-1 px-5 py-6 md:px-6 md:py-8 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-semibold text-zinc-900 mb-2">Week 2</div>
                  <div className="text-sm text-zinc-500">Return to desk-based work.</div>
                </div>
              </div>

              {/* Week 4-6 */}
              <div className="flex items-start gap-4 md:gap-6 relative animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.3s' }}>
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white bg-primary text-white shadow-lg shrink-0 z-10">
                  <span className="text-[10px] md:text-xs font-bold">W4-6</span>
                </div>
                <div className="flex-1 px-5 py-6 md:px-6 md:py-8 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-semibold text-zinc-900 mb-2">Week 4–6</div>
                  <div className="text-sm text-zinc-500">Improved arm contour, reduced swelling.</div>
                </div>
              </div>

              {/* Month 3 */}
              <div className="flex items-start gap-4 md:gap-6 relative animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.4s' }}>
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white bg-zinc-900 text-white shadow-lg shrink-0 z-10">
                  <span className="text-xs md:text-sm font-bold">M3</span>
                </div>
                <div className="flex-1 px-5 py-6 md:px-6 md:py-8 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-semibold text-zinc-900 mb-2">Month 3</div>
                  <div className="text-sm text-zinc-500">Final results become more apparent.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-6 rounded-xl border-t-4 border-primary shadow-sm">
            <p className="text-sm text-zinc-600 mb-3">Postoperative care principles used in arm lift surgery align with internationally accepted patient safety and surgical recovery standards.</p>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 uppercase">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
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
            <div>
              <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Benefits of an Arm Lift</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.1s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="text-zinc-600">Removes loose, sagging upper-arm skin</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.2s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="text-zinc-600">Improves arm contour and firmness</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.3s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="text-zinc-600">Enhances confidence in fitted or sleeveless clothing</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.4s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="text-zinc-600">Long-lasting results with stable weight</span>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.5s' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 flex-shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="text-zinc-600">Can be combined with liposuction for improved definition</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-on-scroll opacity-0 scale-95 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:scale-100">
              <BaseImage src="/images/lift2.jpg" alt="Arm Lift Surgery Results" width={800} height={500} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" x2="9.01" y1="9" y2="9"/>
                  <line x1="15" x2="15.01" y1="9" y2="9"/>
                </svg>
                Ideal Candidates
              </h3>
              <p className="text-zinc-400 mb-4 text-sm">Ideal candidates typically:</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-200">Have significant upper-arm skin laxity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-200">Are at a stable body weight</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-200">Are in good general health</span>
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
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-zinc-400 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Important Consideration</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Patients planning major future weight loss may be advised to postpone surgery.
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
          <h2 className="text-3xl font-semibold mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Arm Lift and Liposuction</h2>
          <p className="text-lg text-orange-50 leading-relaxed max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-150 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            Liposuction alone removes fat but cannot tighten loose skin. In many cases, arm lift surgery is combined with liposuction for enhanced contouring.
          </p>
        </div>
      </section>

      {/* Post Surgery Aftercare */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-12 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Post-Surgery Aftercare</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
                <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
              </svg>
              <p className="text-zinc-700 font-medium">Wear compression garments for 4–6 weeks</p>
            </div>
            {/* Item 2 */}
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
                <path d="m6.5 6.5 11 11"/>
                <path d="m21 21-1-1"/>
                <path d="m3 3 1 1"/>
                <path d="m18 22 4-4"/>
                <path d="m2 6 4-4"/>
                <path d="m3 10 7-7"/>
                <path d="m14 21 7-7"/>
              </svg>
              <p className="text-zinc-700 font-medium">Avoid heavy lifting initially</p>
            </div>
            {/* Item 3 */}
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/>
                <line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
                <path d="m9 16 2 2 4-4"/>
              </svg>
              <p className="text-zinc-700 font-medium">Attend scheduled follow-up visits</p>
            </div>
            {/* Item 4 */}
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.4s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
                <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
                <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
              </svg>
              <p className="text-zinc-700 font-medium">Keep incisions clean and dry</p>
            </div>
            {/* Item 5 */}
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.5s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
              <p className="text-zinc-700 font-medium">Gradually resume physical activity as advised</p>
            </div>
            {/* Item 6 */}
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.6s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <p className="text-zinc-700 font-medium">Scars fade gradually over time and are monitored during follow-up</p>
            </div>
          </div>

          <p className="mt-8 text-center text-zinc-500 text-sm animate-on-scroll opacity-0 [&.animate-visible]:opacity-100 transition-all duration-500 delay-500">After arm lift surgery, following these guidelines is crucial for optimal healing.</p>
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
            Achieve firmer, more confident upper arms with surgeon-performed arm lift surgery in Malaysia.
          </h2>
          <p className="text-lg text-zinc-500 mb-12 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            Dr. Soma delivers personalized body-contouring solutions with a focus on safety, proportion, and natural-looking outcomes.
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
              Schedule Your Consultation Today
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default ArmLiftMalaysia;
