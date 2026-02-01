import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function MaleBreastReductionMalaysia() {
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
    { question: "What is male breast reduction surgery?", answer: "It is a surgical procedure to remove excess fat and glandular tissue from the male chest." },
    { question: "Is male breast reduction the same as gynecomastia surgery?", answer: "Yes. Male breast reduction is the surgical treatment for gynecomastia." },
    { question: "Is the surgery permanent?", answer: "Yes. Removed glandular tissue does not grow back." },
    { question: "Will there be scars?", answer: "Scars are minimal and usually hidden around the areola." },
    { question: "How long does recovery take?", answer: "Most patients return to work within 7–10 days." },
    { question: "Can exercise fix gynecomastia?", answer: "Exercise may reduce fat but cannot remove glandular tissue." },
    { question: "Is the procedure painful?", answer: "Pain is typically mild to moderate and well controlled with medication." },
    { question: "Is male breast reduction safe?", answer: "Yes, when performed by a qualified plastic surgeon in a regulated facility." }
  ]

  const surgicalTechniques = [
    { title: "Liposuction", desc: "For fatty enlargement." },
    { title: "Excision", desc: "For firm glandular tissue." },
    { title: "Combined Technique", desc: "For mixed cases." }
  ]

  const causesOfEnlargement = [
    "Hormonal imbalance (estrogen–testosterone ratio)",
    "Puberty-related changes",
    "Medications or anabolic steroids",
    "Weight gain and fat accumulation",
    "Certain medical conditions"
  ]

  const candidateCriteria = [
    "Have persistent male breast enlargement",
    "Are in good general health",
    "Have stable body weight",
    "Do not respond to exercise or diet alone",
    "Have realistic expectations"
  ]

  return (
    <>
      <Head>
        <title>Male Breast Reduction Malaysia | Gynecomastia Surgery by Plastic Surgeon</title>
        <meta name="description" content="Male breast reduction surgery in Malaysia treats enlarged male chest caused by gynecomastia or fat. Learn procedure, safety, recovery, and FAQs." />
        <link rel="canonical" href="https://drsomaplasticsurgery.com/male/male-breast-reduction-malaysia" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://drsomaplasticsurgery.com/male/male-breast-reduction-malaysia#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is male breast reduction surgery?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is a surgical procedure to remove excess fat and glandular tissue from the male chest."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is male breast reduction the same as gynecomastia surgery?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Male breast reduction is the surgical treatment for gynecomastia."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the surgery permanent?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Removed glandular tissue does not grow back."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will there be scars?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Scars are minimal and usually hidden around the areola."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does recovery take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most patients return to work within 7–10 days."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can exercise fix gynecomastia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Exercise may reduce fat but cannot remove glandular tissue."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the procedure painful?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pain is typically mild to moderate and well controlled with medication."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is male breast reduction safe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, when performed by a qualified plastic surgeon in a regulated facility."
                  }
                }
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
              "@id": "https://drsomaplasticsurgery.com/male/male-breast-reduction-malaysia#service",
              "name": "Male Breast Reduction Malaysia | Gynecomastia Surgery by Plastic Surgeon",
              "url": "https://drsomaplasticsurgery.com/male/male-breast-reduction-malaysia",
              "description": "Male breast reduction surgery in Malaysia treats enlarged male chest caused by gynecomastia or fat. Learn procedure, safety, recovery, and FAQs.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.9,
                "reviewCount": 127
              }
            })
          }}
        />
      </Head>

      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        .male-breast-page ::selection {
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

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(254, 118, 35, 0.2); }
          50% { box-shadow: 0 0 20px rgba(254, 118, 35, 0.4); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }

        .card-3d {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          transform-style: preserve-3d;
        }
        .card-3d:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(-5deg);
          box-shadow: 0 25px 50px -12px rgba(254, 118, 35, 0.25);
        }

        .card-shine {
          position: relative;
          overflow: hidden;
        }
        .card-shine::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 60%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(45deg) translateX(-100%);
          transition: transform 0.6s;
        }
        .card-shine:hover::before {
          transform: rotate(45deg) translateX(100%);
        }

        .img-zoom {
          overflow: hidden;
        }
        .img-zoom img {
          transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .img-zoom:hover img {
          transform: scale(1.1);
        }

        .btn-magnetic {
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .btn-magnetic:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 30px -10px rgba(254, 118, 35, 0.5);
        }
      `}</style>

      <div className="w-full max-w-full overflow-x-hidden">
      <main className="male-breast-page bg-white text-zinc-900 w-full max-w-full">
        {/* Hero Section */}
        <section className="relative pt-[50px] pb-[50px] md:pt-[60px] md:pb-[60px] px-6 overflow-hidden" style={{backgroundColor: '#F8FAFC'}}>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/50 via-[#F8FAFC] to-transparent -z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest mb-4 md:mb-8 animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                Regulated by Ministry of Health Malaysia
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-3 md:mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Male Breast Reduction in Malaysia.</span> <br />
                <span className="text-[#FE7623] text-[18px] md:text-[28px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">Surgical Correction of Enlarged Male Chest (Gynecomastia)</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>Male breast reduction is a surgical procedure designed to treat enlarged male breasts caused by glandular tissue, excess fat, or a combination of both. The goal is to create a flatter, firmer, and more masculine chest contour.</p>
                <p style={{fontSize: '14px', marginTop: '12px'}}>In Malaysia, male breast reduction surgery must be performed in licensed medical facilities under the oversight of the Ministry of Health Malaysia, ensuring patient safety and regulated surgical standards.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Male%20Breast%20Reduction%20Surgery" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
                  Book Consultation
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </a>
                <a href="#learn-more" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-white border-2 border-zinc-200 text-zinc-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] group">
                  Learn More
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </a>
              </div>

              {/* Trust Badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 mt-8 animate-fadeInUp opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                <div className="flex -space-x-2">
                  {[
                    'https://randomuser.me/api/portraits/men/32.jpg',
                    'https://randomuser.me/api/portraits/men/44.jpg',
                    'https://randomuser.me/api/portraits/men/68.jpg',
                    'https://randomuser.me/api/portraits/men/75.jpg',
                    'https://randomuser.me/api/portraits/men/89.jpg'
                  ].map((img, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                      <img src={img} alt={`Patient ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-zinc-600 font-medium text-center sm:text-left">Trusted by <span className="text-[#FE7623] font-bold">500+</span> happy patients</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-2 lg:order-2 relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom transition-all duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.1)'}}>
              <BaseImage
                src="/images/male_breast_reduction.png"
                alt="Male Breast Reduction Surgery Malaysia"
                fill
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
              <div className="hidden md:block absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="bg-white backdrop-blur-md p-3 md:p-5 rounded-xl border border-zinc-100 shadow-xl group-hover:translate-y-[-5px] transition-transform duration-500">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="p-2 md:p-3 bg-white border border-zinc-200 text-[#FE7623] rounded-xl shadow-sm">
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">Procedure Focus</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">Male Chest Contouring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Male Breast Reduction Section */}
        <section id="learn-more" className="py-8 md:py-12 px-6 bg-white border-b border-zinc-100 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-4 md:px-8">
              <div data-animate="def-1" className={`md:col-span-6 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">What Is Male Breast Reduction?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  Male breast reduction is a surgical treatment for gynecomastia, a condition involving abnormal enlargement of male breast tissue. The procedure removes excess glandular tissue, fat, and sometimes loose skin to restore normal chest proportions.
                </p>
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <p className="text-sm text-zinc-700">According to the <strong>Mayo Clinic</strong>, gynecomastia often does not resolve without surgery when firm glandular tissue is present.</p>
                </div>
              </div>

              {/* Causes of Male Breast Enlargement */}
              <div data-animate="def-2" className={`md:col-span-6 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">Causes of Male Breast Enlargement</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Male breast enlargement may result from:
                </p>
                <div className="space-y-3">
                  {causesOfEnlargement.map((item, i) => (
                    <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 p-3 bg-zinc-50 rounded-lg border border-zinc-200">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Surgery Is Performed Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="surgery-header" className={`max-w-2xl mb-12 px-4 md:px-8 transition-all duration-700 ${isVisible('surgery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">How Male Breast Reduction Surgery Is Performed</h2>
              <p className="text-zinc-500 text-sm">The surgical approach depends on chest composition:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
              {surgicalTechniques.map((item, i) => (
                <div key={i} data-animate={`technique-${i}`} className={`relative bg-white pt-14 pb-8 px-6 rounded-2xl border border-zinc-200 card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`technique-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="absolute -top-4 left-6 px-4 py-3 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 z-10">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-[#FE7623] transition-colors">{item.title}</h3>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="px-4 md:px-8 mt-8">
              <div className="p-4 bg-white rounded-xl border border-zinc-200">
                <p className="text-sm text-zinc-600 text-center">Small incisions are typically placed along the areola or natural chest folds to reduce visible scarring.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety and Clinical Standards */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 md:px-8">
            {/* Image Section */}
            <div data-animate="safety-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl order-2 lg:order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('safety-image') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <BaseImage
                src="/images/male_breast_reduction.png"
                alt="Male Breast Reduction Safety"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
            </div>

            {/* Content Section */}
            <div data-animate="safety-content" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('safety-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Safety and Clinical Standards</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Male breast reduction surgery is considered safe when performed by trained plastic surgeons following established surgical safety protocols.
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                General principles of surgical safety align with global recommendations from the <strong>World Health Organization (WHO)</strong> for safe operative care.
              </p>
              <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                <p className="text-sm text-green-800"><strong>Important:</strong> Preoperative assessment ensures suitability and minimizes complications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="recovery-header" className={`max-w-2xl mb-12 px-4 md:px-8 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Recovery After Male Breast Reduction</h2>
              <p className="text-zinc-500 text-sm">Post-operative recovery follows timelines consistent with guidance from the NHS for cosmetic and reconstructive procedures.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
              {[
                { time: "First 5–7 days", desc: "Swelling, mild discomfort" },
                { time: "7–10 days", desc: "Return to desk work" },
                { time: "3–4 weeks", desc: "Resume light exercise" },
                { time: "6 weeks", desc: "Full activity allowed" },
                { time: "3 months", desc: "Final chest contour visible" }
              ].map((item, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`relative bg-white pt-14 pb-8 px-6 rounded-2xl border border-zinc-200 card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="absolute -top-4 left-6 px-4 py-3 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 z-10">
                    {item.time}
                  </div>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="px-4 md:px-8 mt-8">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-700 text-center"><strong>Note:</strong> Compression garments are worn to support healing and contour.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is a Suitable Candidate */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 md:px-8">
              <div data-animate="candidate-content" className={`transition-all duration-700 ${isVisible('candidate-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Who Is a Suitable Candidate?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  You may be a good candidate if you:
                </p>
                <div className="space-y-3">
                  {candidateCriteria.map((item, i) => (
                    <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 p-3 bg-zinc-50 rounded-lg border border-zinc-200">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div data-animate="additional-content" className={`transition-all duration-700 ${isVisible('additional-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-8 rounded-2xl shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-[#FE7623]/20 rounded-lg">
                      <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-semibold">Important Note</h3>
                  </div>
                  <p className="text-zinc-300 text-sm mb-4">
                    Exercise may reduce fat but cannot remove glandular tissue. Surgical treatment is required for definitive correction of true gynecomastia.
                  </p>
                  <p className="text-zinc-400 text-sm">
                    A consultation will determine the best approach based on your individual anatomy and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & FAQ Section */}
        <section className="pt-8 pb-16 md:pt-24 md:pb-32 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 px-4 md:px-8">

            {/* Left: Pricing Sticky */}
            <div className="lg:col-span-1">
              <div data-animate="pricing" className={`bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-8 rounded-2xl lg:sticky lg:top-24 shadow-2xl transition-all duration-700 hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] group card-shine ${isVisible('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE7623]/10 rounded-full blur-3xl"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#FE7623]/20 rounded-lg">
                    <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-[#FE7623] transition-colors duration-300">Pricing Guide</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-6">Male breast reduction cost varies depending on:</p>
                <ul className="space-y-4 mb-8">
                  {["Type of surgical technique selected", "Extent of tissue removal required", "Combination with liposuction", "Anaesthesia and facility fees", "Surgeon's expertise and experience"].map((item, i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Male%20Breast%20Reduction%20Surgery" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
                  Get Quote via WhatsApp
                </a>
              </div>
            </div>

            {/* Right: FAQs */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg group hover:scale-110 hover:rotate-6 transition-all duration-300 animate-float">
                  <svg className="w-8 h-8 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#FE7623]">Frequently Asked Questions</h2>
                  <p className="text-sm text-zinc-500">Get answers to common concerns about male breast reduction</p>
                </div>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      openFaq === index
                        ? 'border-[#FE7623] shadow-lg shadow-orange-100 bg-white'
                        : 'border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md'
                    }`}
                  >
                    <button
                      className={`w-full flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:py-5 text-left transition-colors gap-4 ${
                        openFaq === index ? 'bg-gradient-to-r from-orange-50/50 to-white' : 'hover:bg-zinc-50/50'
                      }`}
                      onClick={() => toggleFaq(index)}
                    >
                      <h4 className="text-sm sm:text-base text-zinc-800 font-medium flex-1">{faq.question}</h4>
                      <span className="flex-shrink-0 min-w-[32px] text-2xl sm:text-3xl font-light transition-all duration-300 text-[#FE7623]">
                        {openFaq === index ? "−" : "+"}
                      </span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-2">
                        <div className="text-sm text-zinc-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 md:py-24 px-6 bg-white relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl animate-float"></div>

          <div data-animate="cta" className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#FE7623] mb-6 transition-colors duration-300 cursor-default px-4">Achieve a Flatter, More Confident Chest</h2>
            <p className="text-base sm:text-lg text-zinc-500 mb-6 max-w-3xl mx-auto px-4">
              Take the first step towards a masculine chest contour with male breast reduction surgery.
            </p>
            <p className="text-sm text-zinc-600 mb-10 pb-[7px] max-w-3xl mx-auto px-4">
              Schedule your consultation with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6 md:px-10">
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Male%20Breast%20Reduction%20Surgery" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-12 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat with Us on WhatsApp
              </a>
              <Link href="/contact-us" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-12 py-5 rounded-full text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Book Consultation
              </Link>
            </div>

            {/* SEO Tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 px-4">
              {["Male breast reduction Malaysia", "gynecomastia surgery", "chest contouring", "male plastic surgery", "enlarged male chest"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-zinc-200 hover:border-[#FE7623]/20" style={{animationDelay: `${i * 100}ms`}}>{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
      </div>
    </>
  )
}
