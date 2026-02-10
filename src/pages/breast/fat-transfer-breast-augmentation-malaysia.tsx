import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next'
import { getLocaleFromPath } from '@/i18n/config'

export default function FatTransferBreastAugmentation() {
  const { t, i18n } = useTranslation()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  useEffect(() => {
    const detected = getLocaleFromPath(window.location.pathname)
    if (detected && detected !== i18n.language) {
      i18n.changeLanguage(detected)
    }
  }, [i18n])

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

  const faqs = Array.from({ length: 10 }, (_, i) => ({
    question: t(`ftba.faq${i}Q`),
    answer: t(`ftba.faq${i}A`)
  }))

  return (
    <>
      <Head>
        <title>Fat Transfer Breast Augmentation Malaysia | Natural Enhancement – Dr. Soma</title>
        <meta name="description" content="Fat Transfer Breast Augmentation in Malaysia by certified plastic surgeon Dr. Soma. No implants, natural softness, subtle enhancement using your own body fat." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://drsoma-v2.vercel.app/breast/fat-transfer-breast-augmentation-malaysia/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is fat transfer breast augmentation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is a surgical procedure that enhances breast volume using your own body fat, harvested by liposuction, purified, and transferred into the breasts."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is fat transfer to the breast done?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fat is removed from donor areas, processed to keep only healthy fat cells, and injected into the breast in small layers to improve survival and create a smooth contour."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much bigger will my breasts get with fat transfer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most patients achieve a subtle increase. The exact change depends on your donor fat, breast tissue capacity, and how much fat survives long-term."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long do fat transfer breast results last?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The fat that successfully integrates becomes long-lasting. Some fat is reabsorbed during the first 1–3 months, after which results stabilize."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will all the transferred fat survive?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. A portion is naturally reabsorbed. Surgical technique, patient biology, and aftercare influence retention."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can fat transfer replace breast implants?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For patients wanting a modest, natural enhancement, yes. For larger size goals, implants may be more suitable."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is fat transfer breast augmentation safe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When performed by a certified plastic surgeon using careful harvesting and injection techniques, it is generally safe. Risks and limitations are discussed during consultation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does fat transfer cause lumps?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Small lumps or firmness can occur if fat healing is uneven. Proper technique and layered injection reduce this risk, and most minor firmness improves with time."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will it affect mammograms?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your radiology team should be informed about prior fat transfer. Imaging can still be performed, and medical documentation helps interpretation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is recovery easier than implants?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Many patients find breast discomfort mild, but donor site soreness from liposuction can be more noticeable. Overall recovery is usually manageable."
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
              "@id": "https://drsoma-v2.vercel.app/breast/fat-transfer-breast-augmentation-malaysia/#service",
              "name": "Fat Transfer Breast Augmentation Malaysia | Natural Enhancement – Dr. Soma",
              "url": "https://drsoma-v2.vercel.app/breast/fat-transfer-breast-augmentation-malaysia/",
              "description": "Fat Transfer Breast Augmentation in Malaysia by certified plastic surgeon Dr. Soma. No implants, natural softness, subtle enhancement using your own body fat.",
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
        .fat-transfer-page ::selection {
          background-color: #FE7623;
          color: white;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(254, 118, 35, 0.2); }
          50% { box-shadow: 0 0 20px rgba(254, 118, 35, 0.4); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(254, 118, 35, 0.3); }
          50% { border-color: rgba(254, 118, 35, 0.8); }
        }

        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 2s ease-in-out infinite; }
        .animate-shimmer { background: linear-gradient(90deg, transparent, rgba(254, 118, 35, 0.1), transparent); background-size: 200% 100%; animation: shimmer 3s infinite; }
        .animate-border-glow { animation: borderGlow 2s ease-in-out infinite; }

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
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(to bottom right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0) 100%);
          transform: rotate(45deg) translateX(-100%);
          transition: transform 0.6s;
        }
        .card-shine:hover::before { transform: rotate(45deg) translateX(100%); }

        .img-zoom { overflow: hidden; }
        .img-zoom img { transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1); }
        .img-zoom:hover img { transform: scale(1.1); }

        .btn-magnetic { transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
        .btn-magnetic:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 10px 30px -10px rgba(254, 118, 35, 0.5); }

        .stagger-animation > * { opacity: 0; animation: fadeInUp 0.5s ease-out forwards; }
        .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-animation > *:nth-child(5) { animation-delay: 0.5s; }
        .stagger-animation > *:nth-child(6) { animation-delay: 0.6s; }
        .stagger-animation > *:nth-child(7) { animation-delay: 0.7s; }
        .stagger-animation > *:nth-child(8) { animation-delay: 0.8s; }

        .ripple { position: relative; overflow: hidden; }
        .ripple::after {
          content: ''; position: absolute; top: 50%; left: 50%;
          width: 0; height: 0; background: rgba(254, 118, 35, 0.2);
          border-radius: 50%; transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        .ripple:hover::after { width: 300%; height: 300%; }
      `}</style>

      <main className="fat-transfer-page bg-white text-zinc-900">
        {/* Hero Section */}
        <section className="relative pt-[50px] pb-[50px] md:pt-[60px] md:pb-[60px] px-6 overflow-hidden" style={{backgroundColor: '#F8FAFC'}}>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/50 via-[#F8FAFC] to-transparent -z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest mb-4 md:mb-8 animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                {t('ftba.badge')}
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900 leading-[1.1] mb-3 md:mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">{t('ftba.heroTitle')}</span> <br />
                <span className="text-[#FE7623] text-[16px] md:text-[22px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">{t('ftba.heroSubtitle')}</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}} className="mb-4">{t('ftba.heroDesc1')}</p>
                <p style={{fontSize: '14px'}}>{t('ftba.heroDesc2')}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60126919919?text=Hi%20Dr.%20Soma%2C%20I%27m%20interested%20in%20Fat%20Transfer%20Breast%20Augmentation.%20Can%20I%20get%20more%20information%3F" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
                  {t('ftba.bookConsultation')}
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </a>
                <a href="#what-is" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-white border-2 border-zinc-200 text-zinc-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] group">
                  {t('ftba.howItWorks')}
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
                <span className="text-sm text-zinc-600 font-medium">{t('ftba.trustedBy')} <span className="text-[#FE7623] font-bold">500+</span> {t('ftba.happyPatients')}</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-2 lg:order-2 relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom transition-all duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.1)'}}>
              <BaseImage
                src="/images/fat-transfer-breast-augmentation.jpg"
                alt="Fat Transfer Breast Augmentation Malaysia"
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
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">{t('ftba.certifiedSurgeon')}</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">{t('ftba.performedBy')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Fat Transfer Section */}
        <section id="what-is" className="pt-4 pb-8 md:py-24 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div data-animate="def-1" className={`transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">{t('ftba.whatIsTitle')}</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  {t('ftba.whatIsDesc').split(/<highlight>|<\/highlight>/).map((part: string, i: number) => {
                    if (i === 1) return <strong key={i} className="text-[#FE7623]">{part}</strong>
                    return <span key={i}>{part}</span>
                  })}
                </p>
                <ul className="space-y-3 mb-6">
                  {[0, 1, 2, 3].map((i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 group cursor-pointer hover:text-[#FE7623] transition-colors">
                      <div className="flex-shrink-0 w-6 h-6">
                        <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="flex-1">{t(`ftba.whatIsItem${i}`)}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-500 text-sm leading-relaxed text-justify">
                  {t('ftba.whatIsResult')}
                </p>
              </div>

              {/* Who Chooses Fat Transfer */}
              <div data-animate="def-2" className={`transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-xl font-semibold text-[#FE7623] mb-6">{t('ftba.whoTitle')}</h3>
                <p className="text-zinc-500 text-sm mb-4">{t('ftba.whoIntro')}</p>
                <ul className="space-y-3 mb-6">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                      <svg className="w-6 h-6 min-w-[24px] text-[#FE7623] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{t(`ftba.who${i}`)}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-500 text-sm italic">{t('ftba.whoNote')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How Fat Transfer Works */}
        <section id="process" className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="tech-header" className={`max-w-3xl mb-12 transition-all duration-700 ${isVisible('tech-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">{t('ftba.processTitle')}</h2>
              <p className="text-zinc-500 text-sm">{t('ftba.processDesc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { num: "1", stageIdx: 0, featCount: 4, highlight: true },
                { num: "2", stageIdx: 1, featCount: 3, highlight: false },
                { num: "3", stageIdx: 2, featCount: 4, highlight: false }
              ].map((tech, i) => (
                <div key={i} data-animate={`tech-${i}`} className={`bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm card-3d card-shine ${tech.highlight ? 'animate-border-glow' : ''} ${isVisible(`tech-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${tech.highlight ? 'bg-gradient-to-br from-[#FE7623] to-orange-400 text-white animate-pulse-slow' : 'bg-zinc-100 text-zinc-900'}`}>
                    <span className="text-xl font-bold">{tech.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#FE7623] mb-3">{t(`ftba.stage${tech.stageIdx}Title`)}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{t(`ftba.stage${tech.stageIdx}Desc`)}</p>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    {Array.from({ length: tech.featCount }, (_, j) => (
                      <li key={j} className="flex items-start gap-3 hover:text-[#FE7623] hover:translate-x-2 transition-all duration-300">
                        <svg className="w-6 h-6 min-w-[24px] text-[#FE7623] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>{t(`ftba.stage${tech.stageIdx}Feat${j}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
              <p className="text-sm text-zinc-600 text-center italic">{t('ftba.processNote')}</p>
            </div>
          </div>
        </section>

        {/* Where Does Fat Go + When Results */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Where Does Fat Go */}
            <div data-animate="fat-placement" className={`transition-all duration-700 ${isVisible('fat-placement') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-2xl font-semibold tracking-tight text-[#FE7623] mb-6">{t('ftba.placementTitle')}</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                {t('ftba.placementDesc')}
              </p>
              <ul className="space-y-4">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 p-4 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] transition-all duration-300 group cursor-pointer">
                    <div className="flex-shrink-0 w-6 h-6">
                      <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="flex-1">{t(`ftba.placement${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When Will I See Results */}
            <div data-animate="results-timeline" className={`transition-all duration-700 ${isVisible('results-timeline') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-2xl font-semibold tracking-tight text-[#FE7623] mb-6">{t('ftba.resultsTitle')}</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                {t('ftba.resultsDesc')}
              </p>
              <div className="space-y-4">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] transition-all duration-300 group cursor-pointer">
                    <div className="px-4 py-2 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full group-hover:scale-105 transition-transform">
                      {t(`ftba.result${i}Time`)}
                    </div>
                    <span className="text-sm text-zinc-600">{t(`ftba.result${i}Desc`)}</span>
                  </div>
                ))}
              </div>
              <p className="text-zinc-500 text-sm mt-6 italic">{t('ftba.resultsNote')}</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="benefits-header" className={`text-2xl font-semibold text-center text-[#FE7623] mb-12 transition-all duration-700 ${isVisible('benefits-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('ftba.benefitsTitle')}</h2>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ${isVisible('benefits-header') ? 'stagger-animation' : ''}`}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div key={i} className="p-5 rounded-xl border border-zinc-200 bg-white text-center hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer card-shine ripple">
                  <svg className="w-8 h-8 mx-auto mb-3 text-[#FE7623] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-zinc-700 group-hover:text-[#FE7623] transition-colors duration-300">{t(`ftba.ben${i}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Candidate Section */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="candidate-header" className={`text-2xl font-semibold text-center text-[#FE7623] mb-12 transition-all duration-700 ${isVisible('candidate-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('ftba.candidateTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Good Candidate */}
              <div data-animate="good-candidate" className={`p-8 rounded-2xl border border-emerald-200 bg-emerald-50/30 hover:shadow-xl transition-all duration-300 ${isVisible('good-candidate') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-4 py-2 rounded-full mb-6 inline-block">{t('ftba.goodLabel')}</span>
                <ul className="space-y-3">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex flex-row items-center gap-3 text-sm text-zinc-600">
                      <div className="flex-shrink-0 w-6 h-6">
                        <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <span className="flex-1">{t(`ftba.good${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Suitable */}
              <div data-animate="not-suitable" className={`p-8 rounded-2xl border border-red-200 bg-red-50/30 hover:shadow-xl transition-all duration-300 ${isVisible('not-suitable') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <span className="text-xs font-bold text-red-700 bg-red-100 px-4 py-2 rounded-full mb-6 inline-block">{t('ftba.notSuitableLabel')}</span>
                <ul className="space-y-3">
                  {[0, 1, 2, 3].map((i) => (
                    <li key={i} className="flex flex-row items-center gap-3 text-sm text-zinc-600">
                      <div className="flex-shrink-0 w-6 h-6">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <span className="flex-1">{t(`ftba.notSuitable${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="compare-header" className={`text-2xl font-semibold mb-10 text-center text-[#FE7623] transition-all duration-700 ${isVisible('compare-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('ftba.compTitle')}</h2>

            {/* Desktop Table */}
            <div data-animate="compare-table" className={`hidden md:block border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible('compare-table') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="grid grid-cols-3 bg-gradient-to-r from-zinc-50 to-orange-50/30 px-8 py-6 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-500">
                <div>{t('ftba.compFeature')}</div>
                <div className="text-[#FE7623] flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FE7623] animate-pulse"></span>{t('ftba.compTransfer')}</div>
                <div>{t('ftba.compImplant')}</div>
              </div>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="grid grid-cols-3 px-8 py-7 border-b border-zinc-100 items-center text-sm hover:bg-gradient-to-r hover:from-orange-50/30 hover:to-white transition-all duration-300 group cursor-pointer">
                  <div className="font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors">{t(`ftba.comp${i}Feat`)}</div>
                  <div className="text-[#FE7623]">{t(`ftba.comp${i}Transfer`)}</div>
                  <div className="text-zinc-600">{t(`ftba.comp${i}Implant`)}</div>
                </div>
              ))}
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-zinc-200 shadow-sm">
                  <h4 className="font-semibold text-zinc-900 mb-3 text-sm">{t(`ftba.comp${i}Feat`)}</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-start">
                      <span className="text-[#FE7623] font-medium">{t('ftba.compTransfer')}:</span>
                      <span className="text-zinc-700 text-right">{t(`ftba.comp${i}Transfer`)}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-zinc-400 font-medium">{t('ftba.compImplant')}:</span>
                      <span className="text-zinc-500 text-right">{t(`ftba.comp${i}Implant`)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/breast/breast-augmentation-malaysia" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FE7623] hover:underline group">
                {t('ftba.viewImplants')}
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Donor Sites */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="donor-header" className={`text-2xl font-semibold text-center text-[#FE7623] mb-4 transition-all duration-700 ${isVisible('donor-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('ftba.donorTitle')}</h2>
            <p className="text-zinc-500 text-sm text-center mb-12">{t('ftba.donorDesc')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} data-animate={`donor-${i}`} className={`p-6 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-[#FE7623] hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer ${isVisible(`donor-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-4 group-hover:bg-[#FE7623] group-hover:border-[#FE7623] transition-all duration-300">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900 mb-2 group-hover:text-[#FE7623] transition-colors">{t(`ftba.donor${i}Area`)}</h4>
                  <p className="text-xs text-zinc-500">{t(`ftba.donor${i}Reason`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="recovery-header" className={`text-center mb-16 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">{t('ftba.recoveryTitle')}</h2>
              <p className="text-zinc-500 text-sm">{t('ftba.recoverySubtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
              {[
                { recIdx: 0, pointCount: 4 },
                { recIdx: 1, pointCount: 4 },
                { recIdx: 2, pointCount: 3 },
                { recIdx: 3, pointCount: 3 },
                { recIdx: 4, pointCount: 3 }
              ].map((step, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`relative bg-white pt-14 pb-8 px-8 rounded-2xl border border-zinc-200 shadow-sm card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="absolute -top-4 left-6 px-6 py-2 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 z-10">
                    {t(`ftba.rec${step.recIdx}Time`)}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-4 group-hover:text-[#FE7623] transition-colors">{t(`ftba.rec${step.recIdx}Title`)}</h3>
                  <ul className="space-y-3">
                    {Array.from({ length: step.pointCount }, (_, j) => (
                      <li key={j} className="flex flex-row items-start gap-3 text-sm text-zinc-600 hover:translate-x-2 transition-all duration-300">
                        <div className="flex-shrink-0 w-6 h-6">
                          <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="flex-1">{t(`ftba.rec${step.recIdx}P${j}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Pain Info */}
            <div className="mt-12 p-6 bg-orange-50 rounded-xl border border-orange-100 flex flex-col sm:flex-row gap-6 items-center hover:shadow-lg transition-all duration-300">
              <div className="shrink-0 p-3 bg-white rounded-full text-[#FE7623] shadow-sm animate-bounce-slow">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 text-sm">{t('ftba.painTitle')}</h4>
                <p className="text-sm text-zinc-600 mt-1">{t('ftba.painDesc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 data-animate="expect-header" className={`text-2xl font-semibold text-center text-[#FE7623] mb-8 transition-all duration-700 ${isVisible('expect-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('ftba.expectTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                <h4 className="font-bold text-zinc-900 mb-4">{t('ftba.receiveLabel')}</h4>
                <ul className="space-y-3">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600">
                      <div className="flex-shrink-0 w-6 h-6">
                        <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="flex-1">{t(`ftba.receive${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
                <h4 className="font-bold text-zinc-900 mb-4">{t('ftba.aftercareLabel')}</h4>
                <ul className="space-y-3">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600">
                      <div className="flex-shrink-0 w-6 h-6">
                        <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      </div>
                      <span className="flex-1">{t(`ftba.aftercare${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Dr. Soma Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-animate="why-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('why-image') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <BaseImage src="/images/fat-transfer-breast-augmentation.jpg" alt="Dr. Soma" fill className="object-cover" />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 max-w-[260px] animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-sm font-bold text-zinc-900">{t('ftba.naturalResults')}</span>
                </div>
                <p className="text-xs text-zinc-500">{t('ftba.naturalResultsDesc')}</p>
              </div>
            </div>

            <div data-animate="why-content" className={`transition-all duration-700 ${isVisible('why-content') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">{t('ftba.uspTitle')}</h2>
              <ul className="space-y-4">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="hidden md:flex flex-shrink-0 w-12 h-12 min-w-[48px] rounded-full bg-white border border-zinc-200 items-center justify-center text-[#FE7623] group-hover:bg-[#FE7623] group-hover:text-white group-hover:border-[#FE7623] transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm text-zinc-600 md:pt-3 group-hover:text-[#FE7623] transition-colors">{t(`ftba.usp${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="testimonial-header" className={`text-2xl font-semibold text-center mb-12 text-[#FE7623] transition-all duration-700 ${isVisible('testimonial-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('ftba.testimonialsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[0, 1, 2].map((i) => (
                <div key={i} data-animate={`testimonial-${i}`} className={`p-8 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm card-3d card-shine hover:border-[#FE7623] text-center sm:text-left ${isVisible(`testimonial-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 150}ms`}}>
                  <div className="flex justify-center sm:justify-start gap-1 text-[#FE7623] mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 italic mb-6 leading-relaxed">&ldquo;{t(`ftba.test${i}Text`)}&rdquo;</p>
                  <p className="text-sm font-bold text-zinc-900">— {t(`ftba.test${i}Name`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & FAQ Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Pricing */}
            <div className="lg:col-span-1">
              <div data-animate="pricing" className={`bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-8 rounded-2xl lg:sticky lg:top-24 shadow-2xl card-shine ${isVisible('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#FE7623]/20 rounded-lg">
                    <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold">{t('ftba.pricingTitle')}</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-6">{t('ftba.pricingDesc')}</p>
                <ul className="space-y-3 mb-8">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <div className="flex-shrink-0 w-6 h-6">
                        <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="flex-1">{t(`ftba.price${i}`)}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-zinc-400 text-xs mb-6 italic">{t('ftba.pricingNote')}</p>
                <a href="https://wa.me/60126919919?text=Hi%20Dr.%20Soma%2C%20I%27d%20like%20to%20get%20a%20pricing%20quote%20for%20Fat%20Transfer%20Breast%20Augmentation." className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
                  {t('ftba.getQuote')}
                </a>
              </div>
            </div>

            {/* FAQs */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg animate-float">
                  <svg className="w-8 h-8 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#FE7623]">{t('ftba.faqTitle')}</h2>
                  <p className="text-sm text-zinc-500">{t('ftba.faqSubtitle')}</p>
                </div>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-[#FE7623] shadow-lg shadow-orange-100 bg-white' : 'border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md'}`}>
                    <button className={`w-full flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 text-left transition-colors gap-4 ${openFaq === index ? 'bg-gradient-to-r from-orange-50/50 to-white' : 'hover:bg-zinc-50/50'}`} onClick={() => toggleFaq(index)}>
                      <h4 className="text-sm sm:text-base text-zinc-800 font-medium flex-1">{faq.question}</h4>
                      <span className="flex-shrink-0 min-w-[32px] text-2xl sm:text-3xl font-light text-[#FE7623]">
                        {openFaq === index ? "−" : "+"}
                      </span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-2">
                        <div className="text-sm text-zinc-600 leading-relaxed">{faq.answer}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Evidence */}
        <section className="py-8 md:py-20 px-6 bg-white border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-row items-start gap-3 mb-10">
              <div className="p-2 bg-blue-50 rounded-lg animate-pulse-slow flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-widest flex-1">{t('ftba.evidenceTitle')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                { idx: 0, url: "https://www.mayoclinic.org/", color: "from-blue-500 to-blue-600" },
                { idx: 1, url: "https://www.health.harvard.edu/", color: "from-red-500 to-red-600" },
                { idx: 2, url: "https://pubmed.ncbi.nlm.nih.gov/", color: "from-green-500 to-green-600" }
              ].map((source) => (
                <a key={source.idx} href={source.url} target="_blank" rel="noopener noreferrer" className="block px-8 py-8 rounded-2xl border border-zinc-200 bg-zinc-50 card-3d card-shine hover:border-[#FE7623] hover:bg-white group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${source.color} animate-pulse`}></div>
                      <span className="text-base font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors">{t(`ftba.evidence${source.idx}Name`)}</span>
                    </div>
                    <svg className="w-6 h-6 text-zinc-400 group-hover:text-[#FE7623] group-hover:rotate-45 group-hover:scale-125 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors">{t(`ftba.evidence${source.idx}Desc`)}</p>
                </a>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["autologous fat grafting", "fat transfer breast augmentation", "adipose-derived stem cells", "liposuction harvesting", "fat purification", "microdroplet injection", "graft survival", "volume retention", "postoperative swelling", "compression garments", "contour refinement"].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-zinc-100 rounded-full text-xs text-zinc-500 hover:bg-orange-50 hover:text-[#FE7623] transition-all duration-300 cursor-default">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-zinc-50 to-zinc-50 -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl animate-float"></div>

          <div data-animate="cta" className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#FE7623] mb-6">{t('ftba.ctaTitle')}</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              {t('ftba.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/60126919919?text=Hi%20Dr.%20Soma%2C%20I%27m%20interested%20in%20Fat%20Transfer%20Breast%20Augmentation.%20Can%20I%20get%20more%20information%3F" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 group animate-glow">
                <svg className="w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                {t('ftba.chatWhatsApp')}
              </a>
              <Link href="/contact" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-10 py-5 rounded-full text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                <svg className="w-6 h-6 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {t('ftba.bookConsultationCta')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
