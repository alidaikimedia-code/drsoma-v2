import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import BaseImage from "@/components/BaseImage";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";

const BeltLipectomyMalaysia = () => {
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
      question: "1. What is belt lipectomy?",
      answer: "Belt lipectomy is a circumferential body contouring surgery that removes excess skin and fat around the entire lower torso.",
    },
    {
      question: "2. Is belt lipectomy the same as a body lift?",
      answer: "Belt lipectomy is a type of lower body lift focusing on the abdomen, waist, hips, and buttocks.",
    },
    {
      question: "3. Is belt lipectomy safe?",
      answer: "When performed by a certified plastic surgeon in a regulated hospital, belt lipectomy is considered safe and well-established.",
    },
    {
      question: "4. How long is recovery after belt lipectomy?",
      answer: "Initial recovery takes about 2–3 weeks, with full healing over several months.",
    },
    {
      question: "5. Will belt lipectomy leave scars?",
      answer: "Yes. A circumferential scar is expected but is placed low and typically concealed by clothing.",
    },
    {
      question: "6. Does belt lipectomy tighten the buttocks?",
      answer: "Yes. The procedure often produces a lifting effect on the buttocks due to tissue repositioning.",
    },
    {
      question: "7. Are the results permanent?",
      answer: "Results are long-lasting as long as body weight remains stable.",
    },
    {
      question: "8. Who should not undergo belt lipectomy?",
      answer: "Patients with unstable weight, poor wound healing, or significant medical risks may not be suitable candidates.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Head>
        <title>Belt Lipectomy in Malaysia | Dr. Soma Plastic Surgery</title>
        <meta name="description" content="Belt lipectomy surgery in Malaysia by Dr. Soma. 360° body contouring after massive weight loss to remove excess skin around the entire lower torso. Book your consultation today." />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-zinc-50">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent opacity-60 pointer-events-none"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-orange-100 rounded-full shadow-sm animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-primary">Certified Plastic Surgeon</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold text-zinc-900 leading-[1.1] tracking-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                BELT LIPECTOMY <br />
                <span className="text-primary">IN MALAYSIA</span>
              </h1>

              <p className="text-xl lg:text-2xl text-zinc-500 font-light border-l-4 border-primary pl-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                360° Body Contouring After Massive Weight Loss
              </p>

              <p className="text-lg leading-relaxed text-zinc-600 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                After significant weight loss, many patients are left with loose, hanging skin not only in the abdomen but also around the waist, hips, lower back, and buttocks. A belt lipectomy, also known as a circumferential lower body lift, is a comprehensive surgical procedure designed to remove excess skin and fat in a full 360-degree pattern, restoring smoother body contours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  Book a Consultation (WhatsApp)
                </a>
              </div>

              {/* Regulatory Badge */}
              <div className="mt-8 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm flex items-start gap-3 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <div className="text-primary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900">Regulated by: Ministry of Health Malaysia</p>
                  <p className="text-xs text-zinc-500">Private Healthcare Services – Performed in a licensed medical facility.</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-scaleIn" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-zinc-200 relative">
                <BaseImage src="/images/beltlipectomy.jpg" alt="Belt Lipectomy Surgery Malaysia" width={800} height={1000} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm font-bold uppercase tracking-wider mb-2 text-orange-100">Surgeon Performed</p>
                  <p className="font-light text-white/90">At Dr. Soma Plastic Surgery, belt lipectomy is personally performed by Dr. Soma, ensuring consistent surgical planning, meticulous execution, and hospital-grade safety.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-zinc-50 rounded-3xl p-8 lg:p-12 border border-zinc-100 shadow-sm animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">What Is Belt Lipectomy?</h2>
            <div className="prose prose-lg text-zinc-600 mb-8">
              <p className="mb-4">
                Belt lipectomy is a surgical body contouring procedure that removes excess skin and fat circumferentially around the lower torso, similar to removing a &quot;belt&quot; of loose tissue.
              </p>
              <p>
                This procedure is not intended for weight loss, but for reshaping and functional improvement after weight stabilisation.
              </p>
            </div>

            {/* Citation Box */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border-l-4 border-primary shadow-sm">
              <div className="min-w-[40px] h-10 flex items-center justify-center rounded-full bg-orange-50 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              <div>
                <p className="italic text-zinc-700 font-medium">&quot;Major medical institutions describe circumferential body contouring as an effective option for patients with extensive skin laxity following massive weight loss.&quot;</p>
                <p className="text-xs font-bold text-primary mt-2 uppercase tracking-wide">Clinical overview from: Mayo Clinic – Body Contouring After Weight Loss</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Treated */}
      <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-zinc-900"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest text-sm uppercase animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Scope of Surgery</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Areas Treated in Belt Lipectomy</h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">The surgery provides both skin removal and buttock elevation through tissue repositioning.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-primary/50 transition-colors animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
              <h3 className="text-lg font-bold mb-1">Abdomen</h3>
              <p className="text-sm text-zinc-400">Frontal abdominal area</p>
            </div>

            {/* Item 2 */}
            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-primary/50 transition-colors animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
                <path d="M8 3L4 7l4 4"/>
                <path d="M4 7h16"/>
                <path d="m16 21 4-4-4-4"/>
                <path d="M20 17H4"/>
              </svg>
              <h3 className="text-lg font-bold mb-1">Waist &amp; Flanks</h3>
              <p className="text-sm text-zinc-400">Side contouring</p>
            </div>

            {/* Item 3 */}
            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-primary/50 transition-colors animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <h3 className="text-lg font-bold mb-1">Lower Back</h3>
              <p className="text-sm text-zinc-400">Posterior tightening</p>
            </div>

            {/* Item 4 */}
            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-primary/50 transition-colors animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.4s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="1"/>
              </svg>
              <h3 className="text-lg font-bold mb-1">Hips</h3>
              <p className="text-sm text-zinc-400">Defining the hip curve</p>
            </div>

            {/* Item 5 */}
            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-primary/50 transition-colors animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.5s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
                <circle cx="12" cy="12" r="10"/>
                <path d="m16 12-4-4-4 4"/>
                <path d="M12 16V8"/>
              </svg>
              <h3 className="text-lg font-bold mb-1">Buttocks</h3>
              <p className="text-sm text-zinc-400">Often with lifting effect</p>
            </div>

            {/* Item 6 */}
            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-primary/50 transition-colors animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.6s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mb-4">
                <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                <path d="M7 12h10"/>
              </svg>
              <h3 className="text-lg font-bold mb-1">Upper Outer Thighs</h3>
              <p className="text-sm text-zinc-400">Indirect tightening</p>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Steps & Benefits */}
      <section className="py-24 bg-orange-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* How Performed */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">How Belt Lipectomy Surgery Is Performed</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.1s' }}>
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                  <p className="text-zinc-700 font-medium">Preoperative assessment and marking in standing position</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.2s' }}>
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                  <p className="text-zinc-700 font-medium">Circumferential incision placed low around the torso</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.3s' }}>
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                  <p className="text-zinc-700 font-medium">Removal of excess skin and fat</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.4s' }}>
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">4</div>
                  <p className="text-zinc-700 font-medium">Tightening and lifting of tissues</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-zinc-100 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-500 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-x-0" style={{ transitionDelay: '0.5s' }}>
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">5</div>
                  <p className="text-zinc-700 font-medium">Layered wound closure &amp; compression garments</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-zinc-500 flex items-center gap-2 animate-on-scroll opacity-0 [&.animate-visible]:opacity-100 transition-all duration-500 delay-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
                Performed under general anaesthesia in a fully equipped hospital.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Benefits of Belt Lipectomy</h2>
              <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-lg animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <span className="text-zinc-700">Removes excess skin from the entire lower torso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <span className="text-zinc-700">Improves waistline, hip, and buttock contour</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <span className="text-zinc-700">Reduces skin infections, rashes, and hygiene issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <span className="text-zinc-700">Enhances posture, comfort, and mobility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <span className="text-zinc-700">Long-lasting results with stable body weight</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Results and Recovery Timeline</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Week 1 */}
            <div className="group relative bg-white p-6 rounded-2xl border border-zinc-200 hover:border-primary hover:shadow-lg transition-all animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.1s' }}>
              <div className="text-4xl font-extrabold text-primary/20 absolute top-4 right-4">01</div>
              <h3 className="text-xl font-bold text-primary mb-2">Week 1</h3>
              <p className="text-sm text-zinc-600">Hospital stay, swelling, drainage, compression garment use.</p>
            </div>

            {/* Week 2-3 */}
            <div className="group relative bg-white p-6 rounded-2xl border border-zinc-200 hover:border-primary hover:shadow-lg transition-all animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.2s' }}>
              <div className="text-4xl font-extrabold text-primary/20 absolute top-4 right-4">02</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Week 2–3</h3>
              <p className="text-sm text-zinc-600">Improved mobility, reduced discomfort.</p>
            </div>

            {/* Week 4-6 */}
            <div className="group relative bg-white p-6 rounded-2xl border border-zinc-200 hover:border-primary hover:shadow-lg transition-all animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.3s' }}>
              <div className="text-4xl font-extrabold text-primary/20 absolute top-4 right-4">03</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Week 4–6</h3>
              <p className="text-sm text-zinc-600">Return to most daily activities.</p>
            </div>

            {/* Month 3-6 */}
            <div className="group relative bg-white p-6 rounded-2xl border border-zinc-200 hover:border-primary hover:shadow-lg transition-all animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0" style={{ transitionDelay: '0.4s' }}>
              <div className="text-4xl font-extrabold text-primary/20 absolute top-4 right-4">04</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Month 3–6</h3>
              <p className="text-sm text-zinc-600">Final contour becomes visible.</p>
            </div>
          </div>

          <div className="mt-12 text-center animate-on-scroll opacity-0 [&.animate-visible]:opacity-100 transition-all duration-500 delay-300">
            <div className="inline-block bg-zinc-50 border border-zinc-200 rounded-lg px-6 py-3">
              <p className="text-sm text-zinc-500 font-medium">Aftercare guidance aligned with: <strong className="text-zinc-800">World Health Organization</strong> – Surgical Safety &amp; Postoperative Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-50">
        <div className="flex containers w-full">
          <div className="flex flex-col w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Belt Lipectomy vs Tummy Tuck</h2>

            <div className="w-full border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 animate-on-scroll opacity-0 translate-y-8 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
              {/* Header */}
              <div className="grid grid-cols-3 bg-zinc-900 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-white">
                <div>Feature</div>
                <div className="text-primary">Belt Lipectomy</div>
                <div>Tummy Tuck</div>
              </div>

              {/* Rows */}
              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Skin Removal</div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  360° around waist
                </div>
                <div className="text-zinc-600">Front abdomen only</div>
              </div>

              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Buttock Lift</div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Yes
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  No
                </div>
              </div>

              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Scar</div>
                <div className="text-zinc-700">Circumferential</div>
                <div className="text-zinc-600">Lower abdomen</div>
              </div>

              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Recovery</div>
                <div className="text-zinc-700">Longer</div>
                <div className="text-zinc-600">Shorter</div>
              </div>

              <div className="grid grid-cols-3 px-4 sm:px-6 py-4 sm:py-6 items-center text-sm hover:bg-zinc-50 transition-colors">
                <div className="font-medium text-zinc-900">Best For</div>
                <div className="text-primary font-semibold">Massive weight loss</div>
                <div className="text-zinc-600">Localised abdominal laxity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Who Is a Good Candidate?</h2>
          <div className="bg-orange-50 rounded-3xl p-8 lg:p-12 border border-orange-100 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white shrink-0 text-xs mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-800 font-medium">Have lost a significant amount of weight</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white shrink-0 text-xs mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-800 font-medium">Have maintained a stable weight for several months</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white shrink-0 text-xs mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-800 font-medium">Experience circumferential loose skin</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white shrink-0 text-xs mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-800 font-medium">Are medically fit for major surgery</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white shrink-0 text-xs mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="text-zinc-800 font-medium">Understand scarring and recovery requirements</span>
                </div>
              </div>
            </div>
            <p className="mt-8 text-sm text-orange-900 font-medium bg-orange-100/50 p-4 rounded-xl inline-block">
              Note: Patients with uncontrolled medical conditions or ongoing weight changes may need further optimisation before surgery.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-50 lg:py-100 bg-zinc-50">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-zinc-900"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">Final Call to Action</h2>
          <p className="text-xl text-zinc-300 mb-2 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            Restore balance, comfort, and body confidence after massive weight loss with surgeon-performed belt lipectomy in Malaysia.
          </p>
          <p className="text-lg text-orange-100 mb-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            Dr. Soma delivers 360-degree body contouring with precision, safety, and long-term results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 [&.animate-visible]:opacity-100 [&.animate-visible]:translate-y-0">
            <a href="#" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Chat with Us on WhatsApp
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-xl font-bold hover:bg-zinc-100 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center">
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

export default BeltLipectomyMalaysia;
