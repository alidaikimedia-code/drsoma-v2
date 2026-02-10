import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next'
import { getLocaleFromPath } from '@/i18n/config'

export default function BreastImplantRemovalMalaysia() {
  const { t, i18n } = useTranslation()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Intersection Observer for scroll animations
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

  useEffect(() => {
    const detected = getLocaleFromPath(window.location.pathname)
    if (detected && detected !== i18n.language) {
      i18n.changeLanguage(detected)
    }
  }, [i18n])

  const isVisible = (id: string) => visibleSections.has(id)

  const faqs = [0, 1, 2, 3, 4, 5, 6, 7].map(i => ({
    question: t(`bir.faq${i}Q`),
    answer: t(`bir.faq${i}A`)
  }))

  const removalOptions = [
    { num: "01", title: t('bir.option0Title'), desc: t('bir.option0Desc'), tag: t('bir.option0Tag') },
    { num: "02", title: t('bir.option1Title'), desc: t('bir.option1Desc'), tag: t('bir.option1Tag') },
    { num: "03", title: t('bir.option2Title'), desc: t('bir.option2Desc'), tag: t('bir.option2Tag') },
    { num: "05", title: t('bir.option3Title'), desc: t('bir.option3Desc'), tag: t('bir.option3Tag'), dark: true }
  ]

  const removalReasons = [0, 1, 2, 3, 4, 5].map(i => t(`bir.reason${i}`))

  return (
    <>
      <Head>
        <title>Breast Implant Removal Malaysia (Explant Surgery) | Dr. Soma Plastic Surgery</title>
        <meta name="description" content="Safe breast implant removal (explant) and capsulectomy in Malaysia. Performed by certified plastic surgeon Dr. Soma. Restoration of natural proportions." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://drsoma-v2.vercel.app/breast/breast-implant-removal-malaysia/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Do I need a capsulectomy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not always. Capsulectomy is recommended when the capsule is thick, tight, painful, or abnormal. If the tissue is healthy and thin, simple removal may suffice. Dr. Soma will advise you based on safety."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will my breasts sag after removal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sagging depends on your skin elasticity and how large the implants were. If significant sagging is expected, a breast lift (mastopexy) can be performed simultaneously to reshape the breast."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the surgery painful?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most patients describe the pain as mild to moderate, often less than the original augmentation. Tightness is common in the first week. Oral medication is usually sufficient."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I replace them with smaller implants?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. This is called an Implant Exchange. It allows you to downsize while maintaining some fullness. Pocket repair may be needed to ensure the smaller implant sits correctly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long before I can return to work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Desk work is often possible within 1-2 weeks. Full physical activity typically resumes after 4-6 weeks with guidance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will I need drains?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Drains are used only in selected cases, depending on the complexity of the capsulectomy and individual factors."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can implants be removed and replaced in one surgery?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, implant exchange is an option if desired. This can be discussed during your consultation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is implant removal permanent?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Once removed, implants are gone unless you choose to have new ones placed in a future procedure."
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
              "@id": "https://drsoma-v2.vercel.app/breast/breast-implant-removal-malaysia/#service",
              "name": "Breast Implant Removal Malaysia (Explant Surgery) | Dr. Soma Plastic Surgery",
              "url": "https://drsoma-v2.vercel.app/breast/breast-implant-removal-malaysia/",
              "description": "Safe breast implant removal (explant) and capsulectomy in Malaysia. Performed by certified plastic surgeon Dr. Soma. Restoration of natural proportions.",
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
        .implant-removal-page ::selection {
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

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
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

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
          border-color: #FE7623;
        }

        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(254, 118, 35, 0.3);
        }

        .hover-scale {
          transition: all 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.02);
        }

        .hover-border-orange {
          transition: all 0.3s ease;
        }
        .hover-border-orange:hover {
          border-color: #FE7623;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(#FE7623 0.5px, transparent 0.5px);
          background-size: 24px 24px;
          opacity: 0.03;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
      `}</style>

      <main className="implant-removal-page bg-white text-header-black">
        {/* Hero Section */}
        <section className="relative pt-[50px] pb-[50px] md:pt-[60px] md:pb-[60px] px-6 overflow-hidden" style={{backgroundColor: '#F8FAFC'}}>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/50 via-[#F8FAFC] to-transparent -z-10"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">

            <div className="order-1 lg:order-1 z-10">
              <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest mb-4 md:mb-8 animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                {t('bir.badge')}
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] mb-3 md:mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">{t('bir.title1')}</span> <br />
                <span className="text-[#FE7623] text-[16px] md:text-[22px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">{t('bir.subtitle')}</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>{t('bir.heroDesc')}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group">
                  {t('bir.bookBtn')}
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </a>
                <a href="#options" className="inline-flex justify-center items-center gap-2 bg-white border-2 border-zinc-200 text-zinc-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] group">
                  {t('bir.viewOptionsBtn')}
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </a>
              </div>

              {/* Trusted by patients */}
              <div className="flex items-center gap-4 mt-8 animate-fadeInUp opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                <div className="flex -space-x-2">
                  {[
                    'https://randomuser.me/api/portraits/women/44.jpg',
                    'https://randomuser.me/api/portraits/men/32.jpg',
                    'https://randomuser.me/api/portraits/women/68.jpg',
                    'https://randomuser.me/api/portraits/men/75.jpg',
                    'https://randomuser.me/api/portraits/women/89.jpg'
                  ].map((img, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                      <img src={img} alt={`Patient ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-zinc-600 font-medium">{t('bir.trustedBy')} <span className="text-[#FE7623] font-bold">500+</span> {t('bir.happyPatients')}</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-2 lg:order-2 relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/3] group animate-fadeInRight opacity-0 transition-all duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.1)'}}>
              <BaseImage
                src="/breast/breast-implant-removal.png"
                alt="Breast Implant Removal Malaysia"
                fill
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
              <div className="hidden md:block absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="bg-white backdrop-blur-md p-3 md:p-5 rounded-xl border border-zinc-100 shadow-xl group-hover:translate-y-[-5px] transition-transform duration-500">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="p-2 md:p-3 bg-white border border-zinc-200 text-[#FE7623] rounded-xl shadow-sm">
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">{t('bir.certifiedSurgeon')}</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">{t('bir.performedBy')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definition & Context */}
        <section className="pt-4 pb-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: What Is It */}
              <div data-animate="def-1" className={`transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">{t('bir.whatIsTitle')}</h2>
                <div className="text-para-black leading-relaxed space-y-4">
                  <p>
                    {t('bir.whatIsDesc1').split(/<highlight>|<\/highlight>/).map((part: string, i: number) =>
                      i === 1 ? <span key={i} className="text-[#FE7623] font-medium">{part}</span> : <span key={i}>{part}</span>
                    )}
                  </p>
                  <p>
                    {t('bir.whatIsDesc2')}
                  </p>
                  <ul className="space-y-3 mt-4">
                    {[0, 1, 2, 3].map(i => t(`bir.assessItem${i}`)).map((item, i) => (
                      <li key={i} className="flex flex-row items-start gap-3 group cursor-pointer hover:translate-x-2 transition-all duration-300">
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="flex-1 text-sm group-hover:text-[#FE7623] transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Reasons */}
              <div data-animate="def-2" className={`bg-zinc-50 rounded-2xl p-8 border border-zinc-100 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">
                  {t('bir.reasonsTitle')}
                </h3>
                <div className="space-y-3">
                  {removalReasons.map((reason, i) => (
                    <div key={i} className="flex flex-row items-start gap-3 group cursor-pointer p-2 rounded-lg hover:bg-white hover:shadow-md hover:translate-x-1 transition-all duration-300">
                      <div className="flex-shrink-0 w-6 h-6">
                        <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="flex-1 text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors duration-300">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Capsule Section (Educational) */}
        <section className="py-8 md:py-16 px-6 bg-zinc-900 text-white">
          <div data-animate="capsule" className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible('capsule') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-[#FE7623] mb-6">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t('bir.capsuleTitle')}</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
              {t('bir.capsuleDesc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {[
                { title: t('bir.capsuleCard0Title'), desc: t('bir.capsuleCard0Desc') },
                { title: t('bir.capsuleCard1Title'), desc: t('bir.capsuleCard1Desc') },
                { title: t('bir.capsuleCard2Title'), desc: t('bir.capsuleCard2Desc') }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#FE7623] hover:bg-white/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#FE7623]/10 transition-all duration-500 cursor-pointer group">
                  <span className="block text-[#FE7623] text-sm font-bold uppercase mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">{item.title}</span>
                  <p className="text-sm text-zinc-400 group-hover:text-white transition-colors duration-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Options Section (Bento Grid) */}
        <section id="options" className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="options-header" className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible('options-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">{t('bir.optionsTitle')}</h2>
              <p className="text-zinc-500 text-sm">{t('bir.optionsDesc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {removalOptions.map((option, i) => (
                <div key={i} data-animate={`option-${i}`} className={`${option.dark ? 'bg-zinc-900 text-white' : 'bg-white'} p-8 rounded-2xl border ${option.dark ? 'border-zinc-800 hover:border-[#FE7623]' : 'border-zinc-200 hover:border-[#FE7623]'} group cursor-pointer hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 ${isVisible(`option-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="flex justify-between items-start mb-6">
                    <span className={`text-3xl font-light ${option.dark ? 'text-zinc-700 group-hover:text-[#FE7623]' : 'text-zinc-200 group-hover:text-[#FE7623]'} transition-colors duration-300`}>{option.num}</span>
                    <div className={`p-2 ${option.dark ? 'bg-zinc-800' : 'bg-zinc-50'} rounded-lg ${option.dark ? 'text-zinc-400' : 'text-para-black'} group-hover:text-[#FE7623] group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300`}>
                      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold ${option.dark ? 'text-white' : 'text-header-black'} mb-3 group-hover:text-[#FE7623] transition-colors duration-300`}>{option.title}</h3>
                  <p className={`text-sm ${option.dark ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-para-black'} leading-relaxed mb-4 transition-colors duration-300`}>{option.desc}</p>
                  <span className={`text-xs font-semibold ${option.dark ? 'text-[#FE7623]' : 'text-para-black group-hover:text-[#FE7623]'} uppercase tracking-wider transition-colors duration-300`}>{option.tag}</span>
                </div>
              ))}

              {/* Option 4 (Featured) */}
              <div data-animate="option-featured" className={`md:col-span-2 lg:col-span-2 bg-white p-8 rounded-2xl border border-zinc-200 hover:border-[#FE7623] cursor-pointer hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden group transition-all duration-500 ${isVisible('option-featured') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 p-8 opacity-5 md:opacity-10 pointer-events-none group-hover:opacity-20 group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-48 h-48 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" /></svg>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl font-light text-zinc-200 group-hover:text-[#FE7623] transition-colors duration-300">{t('bir.featuredNum')}</span>
                      <span className="px-2 py-1 bg-orange-50 text-[#FE7623] text-[10px] font-bold uppercase rounded group-hover:bg-[#FE7623] group-hover:text-white transition-all duration-300">{t('bir.featuredTag')}</span>
                    </div>
                    <h3 className="text-lg font-bold text-header-black mb-3 group-hover:text-[#FE7623] transition-colors duration-300">{t('bir.featuredTitle')}</h3>
                    <p className="text-sm text-para-black leading-relaxed mb-6 max-w-md">
                      {t('bir.featuredDesc')}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 text-xs text-para-black">
                      <li className="flex gap-2 items-center group/item hover:translate-x-1 transition-transform duration-300"><svg className="w-4 h-4 text-[#FE7623] group-hover/item:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> {t('bir.featuredItem0')}</li>
                      <li className="flex gap-2 items-center group/item hover:translate-x-1 transition-transform duration-300"><svg className="w-4 h-4 text-[#FE7623] group-hover/item:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> {t('bir.featuredItem1')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-8 md:py-24 px-6 bg-white border-t border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div data-animate="comparison" className={`w-full transition-all duration-700 ${isVisible('comparison') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl font-semibold mb-10 text-center text-[#FE7623]">{t('bir.compTitle')}</h2>

              {/* Desktop Table - Full Width */}
              <div className="hidden md:block w-full border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-x-auto">
                {/* Header */}
                <div className="grid grid-cols-4 bg-gradient-to-r from-zinc-50 to-orange-50/30 px-8 py-6 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-500">
                  <div>{t('bir.compFeature')}</div>
                  <div className="text-[#FE7623] flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FE7623] animate-pulse"></span>{t('bir.compRemoval')}</div>
                  <div>{t('bir.compExchange')}</div>
                  <div>{t('bir.compLift')}</div>
                </div>

                {/* Rows */}
                {[
                  { feat: t('bir.compRow0Feat'), removal: t('bir.compRow0Removal'), exchange: t('bir.compRow0Exchange'), lift: t('bir.compRow0Lift'), removalHighlight: true, liftHighlight: false },
                  { feat: t('bir.compRow1Feat'), removal: t('bir.compRow1Removal'), exchange: t('bir.compRow1Exchange'), lift: t('bir.compRow1Lift'), removalHighlight: false, liftHighlight: false },
                  { feat: t('bir.compRow2Feat'), removal: t('bir.compRow2Removal'), exchange: t('bir.compRow2Exchange'), lift: t('bir.compRow2Lift'), removalHighlight: false, liftHighlight: true },
                  { feat: t('bir.compRow3Feat'), removal: t('bir.compRow3Removal'), exchange: t('bir.compRow3Exchange'), lift: t('bir.compRow3Lift'), removalHighlight: true, liftHighlight: false }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 px-8 py-7 border-b border-zinc-100 items-center text-sm hover:bg-gradient-to-r hover:from-orange-50/30 hover:to-white transition-all duration-300 group cursor-pointer">
                    <div className="font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors">{row.feat}</div>
                    <div className={`${row.removalHighlight ? 'text-[#FE7623]' : 'text-zinc-600'}`}>{row.removal}</div>
                    <div className="text-zinc-600">{row.exchange}</div>
                    <div className="text-zinc-600">{row.lift}</div>
                  </div>
                ))}
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {[
                  { feat: t('bir.compRow0Feat'), removal: t('bir.compRow0Removal'), exchange: t('bir.compRow0Exchange'), lift: t('bir.compRow0Lift') },
                  { feat: t('bir.compRow1Feat'), removal: t('bir.compRow1Removal'), exchange: t('bir.compRow1Exchange'), lift: t('bir.compRow1Lift') },
                  { feat: t('bir.compRow2Feat'), removal: t('bir.compRow2Removal'), exchange: t('bir.compRow2Exchange'), lift: t('bir.compRow2LiftMobile') },
                  { feat: t('bir.compRow3Feat'), removal: t('bir.compRow3Removal'), exchange: t('bir.compRow3Exchange'), lift: t('bir.compRow3Lift') }
                ].map((row, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 border border-zinc-200 shadow-sm">
                    <h4 className="font-semibold text-zinc-900 mb-3 text-sm">{row.feat}</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-start">
                        <span className="text-[#FE7623] font-medium">{t('bir.mobileRemoval')}</span>
                        <span className="text-zinc-700 text-right">{row.removal}</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-zinc-500 font-medium">{t('bir.mobileExchange')}</span>
                        <span className="text-zinc-600 text-right">{row.exchange}</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-zinc-500 font-medium">{t('bir.mobileLift')}</span>
                        <span className="text-zinc-600 text-right">{row.lift}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="recovery-header" className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div>
                <h2 className="text-3xl font-semibold text-[#FE7623] mb-2">{t('bir.recoveryTitle')}</h2>
                <p className="text-zinc-500 text-sm">{t('bir.recoveryDesc')}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#FE7623] bg-orange-50 px-3 py-1.5 rounded-full">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {t('bir.recoveryNote')}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                { num: "0", title: t('bir.step0Title'), items: [t('bir.step0Item0'), t('bir.step0Item1'), t('bir.step0Item2')], active: true },
                { num: "1", title: t('bir.step1Title'), items: [t('bir.step1Item0'), t('bir.step1Item1'), t('bir.step1Item2')], active: false },
                { num: "4", title: t('bir.step2Title'), items: [t('bir.step2Item0'), t('bir.step2Item1'), t('bir.step2Item2')], active: false },
                { num: "M3", title: t('bir.step3Title'), items: [t('bir.step3Item0'), t('bir.step3Item1'), t('bir.step3Item2')], active: false }
              ].map((step, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`bg-white p-8 rounded-2xl border border-zinc-200 relative shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#FE7623] transition-all duration-300 ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className={`w-14 h-14 ${step.active ? 'bg-gradient-to-r from-[#FE7623] to-orange-400 text-white' : 'bg-white text-zinc-900 border border-zinc-200'} rounded-xl flex items-center justify-center font-bold text-lg mb-5 shadow-lg`}>{step.num}</div>
                  <h4 className="font-bold text-zinc-900 mb-3 text-lg">{step.title}</h4>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    {step.items.map((item, j) => (
                      <li key={j} className="flex flex-row items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6">
                          <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authority & Science */}
        <section className="py-8 md:py-24 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <h3 data-animate="science-header" className={`text-sm font-bold text-[#FE7623] uppercase tracking-widest mb-8 transition-all duration-700 ${isVisible('science-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('bir.scienceTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: t('bir.source0Name'), url: "https://www.mayoclinic.org/", desc: t('bir.source0Desc') },
                { name: t('bir.source1Name'), url: "https://www.health.harvard.edu/", desc: t('bir.source1Desc') },
                { name: t('bir.source2Name'), url: "https://pubmed.ncbi.nlm.nih.gov/", desc: t('bir.source2Desc') }
              ].map((source, i) => (
                <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="block p-6 bg-zinc-50 rounded-xl hover:bg-white hover:-translate-y-2 hover:shadow-2xl hover:border-[#FE7623] transition-all duration-500 group border border-zinc-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-header-black group-hover:text-[#FE7623] transition-colors duration-300">{source.name}</span>
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-para-black group-hover:text-[#FE7623] group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <p className="text-sm text-para-black leading-relaxed group-hover:text-header-black transition-colors duration-300">{source.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ & Pricing */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* FAQ Column */}
            <div className="lg:col-span-2">
              <h2 data-animate="faq-header" className={`text-2xl font-semibold text-[#FE7623] mb-8 transition-all duration-700 ${isVisible('faq-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('bir.faqTitle')}</h2>
              <div className="space-y-3">
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
                      className={`w-full flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:py-5 text-left transition-colors gap-4 ${
                        openFaq === index ? 'bg-[#FAFAF9]' : 'hover:bg-[#FAFAF9]'
                      }`}
                      onClick={() => toggleFaq(index)}
                    >
                      <h4 className="text-sm sm:text-base text-primary font-medium flex-1">{faq.question}</h4>
                      <span className={`flex-shrink-0 text-2xl sm:text-3xl font-light transition-all duration-300 ${
                        openFaq === index
                          ? "text-[#FE7623]"
                          : "text-[#FE7623]"
                      }`}>
                        {openFaq === index ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 pb-4 sm:px-6 sm:pb-5 bg-[#FAFAF9] border-t border-[#E8E8E8]">
                        <p className="text-xs sm:text-sm text-para-black leading-relaxed pt-3 sm:pt-4">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & Testimonials */}
            <div className="lg:col-span-1 space-y-6">
              {/* Pricing */}
              <div data-animate="pricing" className={`bg-zinc-900 rounded-2xl p-8 text-white transition-all duration-700 ${isVisible('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-xl font-semibold mb-6">{t('bir.pricingTitle')}</h3>
                <p className="text-zinc-400 text-sm mb-6">{t('bir.pricingDesc')}</p>
                <ul className="space-y-3 mb-8">
                  {[0, 1, 2, 3].map(i => t(`bir.pricingItem${i}`)).map((item, i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-300 group/item cursor-pointer hover:text-white transition-colors duration-300">
                      <div className="flex-shrink-0 w-6 h-6">
                        <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/60142616007" className="block w-full text-center bg-[#FE7623] text-white py-4 rounded-full text-sm font-semibold hover:bg-[#e56010] hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300">
                  {t('bir.pricingBtn')}
                </a>
              </div>

              {/* Mini Testimonial */}
              <div className="p-6 bg-white rounded-2xl border border-zinc-100 hover:border-[#FE7623] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer text-center sm:text-left">
                <div className="flex justify-center sm:justify-start gap-1 text-[#FE7623] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-7 h-7 fill-current group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <p className="text-sm text-zinc-600 italic mb-4 group-hover:text-zinc-900 transition-colors duration-300">&ldquo;{t('bir.testimonialText')}&rdquo;</p>
                <p className="text-xs font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{t('bir.testimonialAuthor')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Procedures */}
        <section className="py-8 md:py-12 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-6 justify-center text-center items-center">
              <Link href="/breast/breast-lift-malaysia" className="text-sm text-para-black hover:text-[#FE7623] transition-all duration-300 hover:scale-105 relative group">
                {t('bir.relatedLift')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7623] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-zinc-300">|</span>
              <Link href="/breast/breast-augmentation-malaysia" className="text-sm text-para-black hover:text-[#FE7623] transition-all duration-300 hover:scale-105 relative group">
                {t('bir.relatedAug')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7623] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-zinc-300">|</span>
              <Link href="/breast/fat-transfer-breast-augmentation-malaysia" className="text-sm text-para-black hover:text-[#FE7623] transition-all duration-300 hover:scale-105 relative group">
                {t('bir.relatedFat')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7623] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 md:py-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white -z-10"></div>
          <div data-animate="cta" className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#FE7623] mb-6">{t('bir.ctaTitle')}</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              {t('bir.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/60142616007" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#FE7623] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#e56010] hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/30 group">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                {t('bir.ctaWhatsApp')}
              </a>
              <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-header-black border-2 border-zinc-200 px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                <svg className="w-6 h-6 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {t('bir.ctaBookBtn')}
              </Link>
            </div>

            {/* SEO Entity Tags */}
            <div className="mt-12 flex flex-wrap justify-center gap-2">
              {[0, 1, 2, 3, 4, 5].map(i => (
                <span key={i} className="px-3 py-1.5 bg-zinc-100 rounded-full text-[11px] text-para-black hover:bg-[#FE7623] hover:text-white cursor-pointer transition-all duration-300 hover:scale-105">{t(`bir.seoTag${i}`)}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
