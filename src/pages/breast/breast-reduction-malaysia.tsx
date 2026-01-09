import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function BreastReductionMalaysia() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate')
            if (id) {
              setVisibleSections((prev) => new Set([...prev, id]))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const isVisible = (id: string) => visibleSections.has(id)

  const faqs = [
    {
      question: "What is breast reduction?",
      answer: "Breast reduction is a surgical procedure that reduces breast size by removing excess breast tissue, fat, and skin, while reshaping and lifting the breast for a lighter, more proportionate result."
    },
    {
      question: "How is breast reduction done?",
      answer: "Incisions are planned based on breast size and sagging. Excess tissue and skin are removed, the breast is reshaped, and the nipple and areola are repositioned to a higher, natural level."
    },
    {
      question: "When will I see results after breast reduction?",
      answer: "You will notice immediate reduction in size, but swelling takes time to settle. Many patients feel more comfortable within 2–4 weeks, with final contour refining over 3–6 months."
    },
    {
      question: "Will breast reduction remove back and shoulder pain?",
      answer: "Many patients report significant improvement in neck, shoulder, and back discomfort after surgery, especially when symptoms are caused by breast heaviness."
    },
    {
      question: "Is breast reduction painful?",
      answer: "Discomfort is usually mild to moderate in the first week and is controlled with medication. Most patients describe soreness and tightness rather than sharp pain."
    },
    {
      question: "Can I breastfeed after breast reduction?",
      answer: "Breastfeeding may still be possible, but it can be affected depending on the technique and tissue removed. This is discussed during consultation based on your future plans."
    },
    {
      question: "Does breast reduction leave scars?",
      answer: "Yes. Scars depend on the technique required. They are placed strategically and usually fade significantly over time with proper scar care."
    },
    {
      question: "How much smaller will my breasts be?",
      answer: "The target size is planned around your body frame, tissue quality, and goals. The safest and most proportionate reduction is chosen, not an arbitrary cup size."
    }
  ]

  return (
    <>
      <Head>
        <title>Breast Reduction Malaysia (Reduction Mammaplasty) | Dr. Soma Plastic Surgery</title>
        <meta name="description" content="Certified Plastic Surgeon for Breast Reduction in Malaysia. Relieve pain, improve proportion, and restore comfort." />
      </Head>

      <style jsx global>{`
        @media (max-width: 640px) {
          html, body {
            overflow-x: hidden;
          }
          .breast-reduction-page {
            overflow-x: hidden;
            max-width: 100vw;
          }
        }

        .breast-reduction-page ::selection {
          background-color: #FE7623;
          color: white;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .hover-scale {
          transition: all 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.02);
        }

        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(254, 118, 35, 0.3);
        }
      `}</style>

      <main className="breast-reduction-page bg-white text-header-black">
        {/* Hero Section */}
        <section className="relative pt-6 pb-12 sm:pt-12 sm:pb-20 md:pt-[100px] md:pb-24 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl z-10 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#FE7623] text-[10px] sm:text-xs font-semibold mb-4 sm:mb-6 uppercase animate-fadeInUp opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                Breast Reduction Malaysia
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-header-black leading-[1.1] mb-4 sm:mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                Lighter. Proportionate. <br />
                <span className="text-para-black">More Comfortable.</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-para-black leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto sm:mx-0 animate-fadeInUp opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                Performed by a Certified Plastic Surgeon. Large, heavy breasts can cause chronic neck, shoulder, and back pain. Dr. Soma performs reduction surgery to achieve a balanced size, improved symmetry, and long-term relief.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0 justify-center sm:justify-start" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007" className="inline-flex justify-center items-center gap-2 bg-[#FE7623] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:bg-[#e56010] hover:scale-105 hover-glow transition-all duration-300 shadow-lg shadow-orange-200">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24">
                    <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book Consultation (WhatsApp)
                </a>
                <a href="#procedure" className="inline-flex justify-center items-center gap-2 bg-white border border-zinc-200 text-header-black px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-medium hover:bg-zinc-50 hover:border-[#FE7623] hover:text-[#FE7623] hover:scale-105 transition-all duration-300">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Procedure Details
                </a>
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full rounded-2xl sm:rounded-3xl overflow-hidden animate-fadeInRight opacity-0 group" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <BaseImage src="/images/safe_breast_reduction.png" alt="Breast Reduction Surgery" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/20 to-transparent mix-blend-multiply"></div>
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-[#FE7623] px-4 py-3 sm:px-8 sm:py-5 rounded-lg sm:rounded-xl shadow-xl max-w-[200px] sm:max-w-xs animate-float">
                <p className="text-xs sm:text-sm font-bold text-white">Certified Plastic Surgeon</p>
                <p className="text-[10px] sm:text-xs text-white/90 mt-1 leading-snug">Dr. Soma focuses on balanced proportion, comfort, and safe surgical outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Definition & Reasons */}
        <section id="procedure" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* What is it */}
              <div data-animate="definition" className={`transition-all duration-700 text-center sm:text-left ${isVisible('definition') ? 'opacity-100 translate-x-0' : 'opacity-100 sm:opacity-0 sm:-translate-x-10'}`}>
                <h2 className="text-2xl sm:text-3xl font-semibold text-header-black mb-4 sm:mb-6">What Is Breast Reduction?</h2>
                <p className="text-sm sm:text-base text-para-black leading-relaxed mb-4 sm:mb-6">
                  Breast reduction, or <span className="text-[#FE7623] font-semibold">reduction mammaplasty</span>, is a surgical procedure that reduces breast size by removing excess breast tissue, fat, and stretched skin, while reshaping and lifting the breast for a natural appearance.
                </p>
                <p className="text-sm sm:text-base text-para-black leading-relaxed mb-6 sm:mb-8">
                  It is both a functional and aesthetic procedure. The goal is not simply to &quot;make breasts smaller&quot; but to achieve a balanced size, improved symmetry, and a healthier nipple position.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg border border-zinc-100 hover:border-[#FE7623]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group text-left">
                    <div className="mt-1 min-w-[24px] text-[#FE7623] group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-header-black">Relief from Pain</h4>
                      <p className="text-xs text-para-black mt-1">Alleviates chronic neck, shoulder, and back strain.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg border border-zinc-100 hover:border-[#FE7623]/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group text-left">
                    <div className="mt-1 min-w-[24px] text-[#FE7623] group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-header-black">Better Proportion</h4>
                      <p className="text-xs text-para-black mt-1">Creates a size that balances with your body frame.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Request & Causes */}
              <div data-animate="reasons" className={`transition-all duration-700 delay-200 text-center sm:text-left ${isVisible('reasons') ? 'opacity-100 translate-x-0' : 'opacity-100 sm:opacity-0 sm:translate-x-10'}`}>
                <h3 className="text-xl sm:text-2xl font-semibold text-header-black mb-4 sm:mb-6">Why Patients Choose Reduction</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {[
                    { icon: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Physical Pain", desc: "Heavy breasts causing daily discomfort." },
                    { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", title: "Skin Irritation", desc: "Rashes or infections under the breast fold." },
                    { icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", title: "Clothing Fit", desc: "Bra-strap grooving and difficulty finding clothes." },
                    { icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3", title: "Activity Limits", desc: "Difficulty exercising or running comfortably." }
                  ].map((item, i) => (
                    <div key={i} className="p-3 sm:p-4 bg-white rounded-lg border border-zinc-200 hover:border-[#FE7623] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group text-left">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#FE7623] mb-2 sm:mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                      <h4 className="text-xs sm:text-sm font-semibold text-header-black">{item.title}</h4>
                      <p className="text-[10px] sm:text-xs text-para-black mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h4 className="text-sm font-bold text-header-black uppercase mb-3">What Causes Large Breasts?</h4>
                <ul className="space-y-2 text-sm text-para-black text-left">
                  {["Genetics & natural development", "Hormonal changes", "Pregnancy and breastfeeding changes", "Weight gain or fat distribution"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 hover:text-[#FE7623] transition-colors cursor-pointer">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FE7623]"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-white border-b border-zinc-100">
          <div data-animate="how-it-works" className={`max-w-4xl mx-auto text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible('how-it-works') ? 'opacity-100 translate-y-0' : 'opacity-100 sm:opacity-0 sm:translate-y-10'}`}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-header-black mb-3 sm:mb-4">How Breast Reduction Works</h2>
            <p className="text-para-black text-xs sm:text-sm max-w-2xl mx-auto">
              Dr. Soma focuses on proportion, stability, and long-term contour, rather than an overly flat or unnatural reduction.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { num: "01", title: "Planning", desc: "Detailed measurements, symmetry planning, and marking the incision pattern." },
              { num: "02", title: "Removal", desc: "Removing excess heavy tissue, fat, and skin to reduce volume and weight." },
              { num: "03", title: "Reshaping", desc: "Lifting remaining tissue for firmness and repositioning the nipple naturally." },
              { num: "04", title: "Closure", desc: "Layered closure for support, followed by dressings and a surgical bra." }
            ].map((step, i) => (
              <div key={i} data-animate={`step-${i}`} className={`p-6 bg-zinc-50 rounded-xl hover:bg-[#FE7623] hover:shadow-xl transition-all duration-500 group cursor-pointer ${isVisible(`step-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="block text-2xl font-bold text-[#FE7623] mb-2 group-hover:text-white transition-colors">{step.num}</span>
                <h3 className="text-sm font-bold text-header-black mb-2 group-hover:text-white transition-colors">{step.title}</h3>
                <p className="text-xs text-para-black leading-relaxed group-hover:text-white/90 transition-colors">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Techniques Grid */}
        <section id="types" className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <h2 data-animate="types-title" className={`text-3xl font-semibold text-header-black mb-4 transition-all duration-700 ${isVisible('types-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Types of Breast Reduction</h2>
              <p className="text-para-black text-sm">Technique selection depends on breast size, degree of sagging, and desired final proportion.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "Standard Reduction", sub: "Reduction + Lift", desc: "Most common. Removes tissue and excess skin while lifting the breast. Repositions the nipple to a natural height for a lighter, balanced contour." },
                { num: "2", title: "Large-Volume Reduction", sub: "Functional Focus", desc: "For patients with significant heaviness and discomfort. Involves greater tissue removal and stronger internal support. Prioritizes daily comfort." },
                { num: "3", title: "With Areola Reshaping", sub: "Detail Refinement", desc: "For patients with stretched, enlarged areolas. Reduces areola diameter to match the new breast size, enhancing overall symmetry and aesthetic." }
              ].map((type, i) => (
                <div key={i} data-animate={`type-${i}`} className={`bg-white p-8 rounded-xl border border-zinc-100 shadow-sm hover:border-[#FE7623] hover:shadow-xl transition-all duration-500 group ${isVisible(`type-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-6 text-header-black font-bold group-hover:bg-[#FE7623] group-hover:text-white transition-colors">{type.num}</div>
                  <h3 className="text-base font-semibold text-header-black mb-2">{type.title}</h3>
                  <p className="text-xs text-[#FE7623] font-mono mb-4 uppercase">{type.sub}</p>
                  <p className="text-sm text-para-black leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h3 data-animate="compare-title" className={`text-xl font-semibold text-header-black mb-6 flex items-center gap-3 transition-all duration-700 ${isVisible('compare-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Procedure Comparison
              <span className="text-[10px] uppercase bg-orange-100 text-[#FE7623] px-2 py-1 rounded font-bold">Guide</span>
            </h3>
            <div className="border border-zinc-200 rounded-lg overflow-hidden overflow-x-auto hover:shadow-lg transition-shadow duration-300">
              <table className="w-full text-sm text-left min-w-[600px]">
                <thead className="bg-zinc-50 text-header-black font-semibold border-b border-zinc-200">
                  <tr>
                    <th className="p-4">Feature</th>
                    <th className="p-4">Breast Reduction</th>
                    <th className="p-4">Breast Lift</th>
                    <th className="p-4">Breast Augmentation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {[
                    { feature: "Reduces Size", reduction: "Yes", reductionHighlight: true, lift: "No", aug: "No" },
                    { feature: "Lifts Sagging", reduction: "Yes (Included)", reductionHighlight: true, lift: "Yes", aug: "Limited" },
                    { feature: "Adds Volume", reduction: "No", reductionHighlight: false, lift: "No", aug: "Yes", augHighlight: true },
                    { feature: "Pain Relief", reduction: "Yes (Physical)", reductionHighlight: true, lift: "Sometimes", aug: "No" },
                    { feature: "Best For", reduction: "Heavy breasts, pain, lifestyle limitation", lift: "Sagging without excess volume", aug: "Small breasts or volume loss" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-zinc-50 transition-colors">
                      <td className="p-4 font-medium text-header-black">{row.feature}</td>
                      <td className={`p-4 ${row.reductionHighlight ? 'font-semibold text-[#FE7623]' : 'text-para-black'}`}>{row.reduction}</td>
                      <td className="p-4 text-para-black">{row.lift}</td>
                      <td className={`p-4 ${row.augHighlight ? 'font-semibold text-[#FE7623]' : 'text-para-black'}`}>{row.aug}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-end">
              <Link href="/breast/breast-lift-malaysia" className="inline-flex items-center gap-2 text-sm font-medium text-para-black hover:text-[#FE7623] transition-colors group">
                View Breast Lift (Mastopexy)
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link href="/breast/breast-augmentation-malaysia" className="inline-flex items-center gap-2 text-sm font-medium text-para-black hover:text-[#FE7623] transition-colors group">
                View Breast Augmentation (Implants)
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Recovery & Timeline */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Recovery Timeline */}
              <div id="recovery" data-animate="recovery" className={`transition-all duration-700 ${isVisible('recovery') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-xl font-semibold text-header-black mb-8">Post-Operative Recovery</h3>
                <div className="relative pl-8 border-l-2 border-zinc-200 space-y-10">
                  {[
                    { title: "Immediate / Week 1", desc: "Support bra applied. Mild to moderate soreness. Walking encouraged immediately. Rest and avoid lifting.", active: true },
                    { title: "Week 2–3", desc: "Return to desk work for many. Bruising improves. Light walking continues. Support bra essential.", active: false },
                    { title: "Week 4–6", desc: "Resume light exercise with approval. Improved posture and comfort noticeable. Shape continues settling.", active: false },
                    { title: "Month 3–6", desc: "Final contour becomes natural. Scars soften and fade. Long-term comfort benefits clear.", active: false }
                  ].map((step, i) => (
                    <div key={i} className="relative group cursor-pointer">
                      <div className={`absolute -left-[39px] w-5 h-5 rounded-full border-4 transition-all duration-300 group-hover:scale-125 ${step.active ? 'bg-[#FE7623] border-white shadow-sm' : 'bg-white border-zinc-200 group-hover:bg-[#FE7623] group-hover:border-white'}`}></div>
                      <h4 className="text-sm font-bold text-header-black uppercase group-hover:text-[#FE7623] transition-colors">{step.title}</h4>
                      <p className="text-sm text-para-black mt-2">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div data-animate="expect" className={`bg-white rounded-2xl p-8 border border-zinc-100 shadow-sm h-fit hover:shadow-xl transition-all duration-500 ${isVisible('expect') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-xl font-semibold text-header-black mb-6">What to Expect</h3>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-header-black mb-4">Included in care:</h4>
                  <ul className="space-y-3">
                    {["Support bra instructions (typically 6 weeks)", "Pain relief medication & Antibiotics", "Wound & scar care guidance", "Scheduled surgeon follow-up"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-para-black hover:text-[#FE7623] transition-colors cursor-pointer group">
                        <svg className="w-4 h-4 text-[#FE7623] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 bg-orange-50 rounded-lg border border-orange-100">
                  <h4 className="text-sm font-bold text-orange-900 mb-2">Pain Description</h4>
                  <p className="text-sm text-orange-800 leading-relaxed italic">
                    &quot;Tightness and soreness similar to a deep chest workout.&quot; - Discomfort is manageable with medication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Candidates & Benefits */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div data-animate="candidates" className={`transition-all duration-700 ${isVisible('candidates') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-3xl font-semibold text-header-black mb-6">Who Is a Good Candidate?</h3>
                <ul className="space-y-4 mb-8">
                  {["Large or heavy breasts causing discomfort.", "Chronic back, neck, or shoulder strain.", "Skin irritation or rashes under breasts.", "Stable body weight.", "Non-smoker or willing to stop temporarily."].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group cursor-pointer">
                      <div className="mt-1 min-w-[24px] text-[#FE7623] group-hover:scale-110 transition-transform"><svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                      <span className="text-sm text-header-black font-medium group-hover:text-[#FE7623] transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-5 bg-red-50 rounded-lg border border-red-100 flex items-start gap-3">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div className="text-sm text-red-900/80 leading-relaxed">
                    <span className="font-bold">Not suitable if:</span> Pregnant/breastfeeding, uncontrolled medical conditions, planning major weight loss, or smoking without willingness to stop.
                  </div>
                </div>
              </div>

              <div data-animate="benefits" className={`transition-all duration-700 ${isVisible('benefits') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-3xl font-semibold text-header-black mb-6">Benefits of Breast Reduction</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z", text: "Reduces neck, shoulder, and back pain" },
                    { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", text: "Improves posture and daily comfort" },
                    { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "Reduces under-breast rashes and irritation" },
                    { icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3", text: "Creates a lighter, more proportionate size" },
                    { icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", text: "Reduces bra-strap grooving and improves fit" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center p-4 rounded-lg bg-zinc-50 hover:bg-[#FE7623] hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <div className="p-2 sm:p-2.5 bg-white rounded-md shadow-sm text-[#FE7623] group-hover:bg-white/20 group-hover:text-white transition-all"><svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg></div>
                      <span className="text-sm font-semibold text-header-black group-hover:text-white transition-colors">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section className="py-24 px-6 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 data-animate="usp-title" className={`text-3xl font-semibold mb-6 transition-all duration-700 ${isVisible('usp-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>What Makes Dr. Soma&apos;s Breast Reduction Different?</h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", title: "Certified Surgeon", desc: "Performed only by a certified plastic surgeon." },
              { icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z", title: "Symmetry Focused", desc: "Marking techniques to ensure balanced reduction." },
              { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "Safety First", desc: "Hospital-grade safety standards and monitoring." },
              { icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Comfort First", desc: "Outcomes prioritized for physical relief and ease." }
            ].map((item, i) => (
              <div key={i} data-animate={`usp-${i}`} className={`bg-zinc-800 p-6 rounded-xl border border-zinc-700 hover:border-[#FE7623] hover:bg-zinc-700 transition-all duration-300 group ${isVisible(`usp-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <svg className="w-10 h-10 text-[#FE7623] mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                <h4 className="font-bold text-white mb-2 text-sm group-hover:text-[#FE7623] transition-colors">{item.title}</h4>
                <p className="text-xs text-para-black group-hover:text-white/70 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="testimonials" className={`text-2xl font-semibold text-header-black mb-12 text-center transition-all duration-700 ${isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Patient Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: "My shoulder pain reduced so much and I can finally exercise comfortably. The shape looks natural and lifted.", name: "Aina, 29" },
                { text: "I didn't realize how much heavy breasts affected my posture until after surgery. Dr. Soma was extremely professional.", name: "Cheryl, 40" },
                { text: "The results are proportional and feminine, not flat. Recovery was well guided and the clinic was supportive.", name: "Nurul, 35" }
              ].map((review, i) => (
                <div key={i} data-animate={`review-${i}`} className={`bg-zinc-50 p-8 rounded-2xl border border-zinc-100 hover:shadow-xl hover:border-[#FE7623]/30 transition-all duration-500 group ${isVisible(`review-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flex gap-1 text-[#FE7623] mb-6">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-para-black leading-relaxed mb-6">&quot;{review.text}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-xs font-bold text-para-black group-hover:bg-[#FE7623] group-hover:text-white group-hover:border-[#FE7623] transition-all">{review.name[0]}</div>
                    <div>
                      <p className="text-sm font-bold text-header-black">{review.name}</p>
                      <p className="text-xs text-para-black">Patient</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Guide */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 data-animate="pricing" className={`text-2xl font-semibold mb-6 transition-all duration-700 ${isVisible('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Pricing Guide</h2>
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500">
              <p className="text-para-black text-sm mb-6">Breast reduction cost varies depending on:</p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["Tissue removal amount", "Reshaping complexity", "Incision pattern", "Operating time", "Hospital/Anaesthesia"].map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-100 rounded-full text-xs text-para-black hover:bg-[#FE7623] hover:text-white transition-all cursor-pointer">{item}</span>
                ))}
              </div>
              <p className="text-sm font-semibold text-header-black">A full quotation is provided after consultation.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-50 lg:py-100 bg-[#FAFAF9]">
          <div className="max-w-4xl mx-auto px-6">
            <div data-animate="faq-header" className={`text-center mb-16 transition-all duration-700 ${isVisible('faq-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block bg-white text-para-black font-normal px-4 py-1.5 mb-6 border border-[#E8E8E8] rounded-full text-sm hover:border-[#FE7623] hover:text-[#FE7623] transition-colors cursor-pointer">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-header-black mb-5">
                Frequently Asked Questions
              </h2>
              <p className="text-[17px] text-para-black">
                Clear answers to help you make informed decisions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border bg-white rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md ${
                    openFaq === index
                      ? 'border-[#FE7623] shadow-lg shadow-orange-100'
                      : 'border-[#E8E8E8] hover:border-[#FE7623]/50'
                  }`}
                >
                  <button
                    className={`w-full flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 text-left transition-colors gap-4 ${
                      openFaq === index ? 'bg-[#FAFAF9]' : 'hover:bg-[#FAFAF9]'
                    }`}
                    onClick={() => toggleFaq(index)}
                  >
                    <h5 className="text-sm sm:text-base text-primary font-medium flex-1">{faq.question}</h5>
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 min-w-[32px] sm:min-w-[40px] rounded-full flex items-center justify-center text-lg sm:text-xl font-bold transition-all duration-300 ${
                      openFaq === index
                        ? "bg-[#FE7623] text-white"
                        : "bg-orange-50 text-[#FE7623]"
                    }`}>
                      {openFaq === index ? "−" : "+"}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 pb-4 sm:px-6 sm:pb-5 lg:px-8 lg:pb-6 bg-[#FAFAF9] border-t border-[#E8E8E8]">
                      <p className="text-xs sm:text-sm lg:text-[16px] text-para-black leading-relaxed pt-3 sm:pt-4">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-24 px-6 bg-zinc-50">
          <div data-animate="cta" className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-semibold text-header-black mb-6">Relieve Heaviness & Restore Comfort</h2>
            <p className="text-lg text-para-black mb-10 max-w-xl mx-auto">
              Dr. Soma combines medical precision, aesthetic planning, and safety-first technique to deliver lighter, balanced, and long-lasting contour improvement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#FE7623] text-white px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-[#e56010] hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-200">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat on WhatsApp
              </a>
              <a href="#" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-header-black border border-zinc-200 px-8 py-3.5 rounded-md text-sm font-medium hover:bg-zinc-50 hover:border-[#FE7623] hover:text-[#FE7623] hover:scale-105 transition-all duration-300 group">
                Book a Consultation Today
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
            <p className="mt-8 text-xs text-para-black">Certified Plastic Surgeon - Kuala Lumpur, Malaysia</p>
          </div>
        </section>
      </main>
    </>
  )
}
