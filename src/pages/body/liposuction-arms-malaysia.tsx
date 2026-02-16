import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next'

export default function ArmLiposuctionMalaysia() {
  const { t } = useTranslation()
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

  const isVisible = (id: string) => visibleSections.has(id)

  const faqs = [
    { question: t('armLipo.faq1Q'), answer: t('armLipo.faq1A') },
    { question: t('armLipo.faq2Q'), answer: t('armLipo.faq2A') },
    { question: t('armLipo.faq3Q'), answer: t('armLipo.faq3A') },
    { question: t('armLipo.faq4Q'), answer: t('armLipo.faq4A') },
    { question: t('armLipo.faq5Q'), answer: t('armLipo.faq5A') },
    { question: t('armLipo.faq6Q'), answer: t('armLipo.faq6A') },
    { question: t('armLipo.faq7Q'), answer: t('armLipo.faq7A') },
    { question: t('armLipo.faq8Q'), answer: t('armLipo.faq8A') },
    { question: t('armLipo.faq9Q'), answer: t('armLipo.faq9A') },
    { question: t('armLipo.faq10Q'), answer: t('armLipo.faq10A') }
  ]

  const treatmentAreas = [
    { name: t('armLipo.area1Name'), desc: t('armLipo.area1Desc') },
    { name: t('armLipo.area2Name'), desc: t('armLipo.area2Desc') },
    { name: t('armLipo.area3Name'), desc: t('armLipo.area3Desc') },
    { name: t('armLipo.area4Name'), desc: t('armLipo.area4Desc') }
  ]

  const techniques = [
    {
      title: t('armLipo.palTitle'),
      desc: t('armLipo.palDesc'),
      features: [t('armLipo.palFeat1'), t('armLipo.palFeat2'), t('armLipo.palFeat3')],
      highlight: true
    },
    {
      title: t('armLipo.miniTitle'),
      desc: t('armLipo.miniDesc'),
      features: [t('armLipo.miniFeat1'), t('armLipo.miniFeat2'), t('armLipo.miniFeat3')],
      highlight: false
    },
    {
      title: t('armLipo.adjTitle'),
      desc: t('armLipo.adjDesc'),
      features: [t('armLipo.adjFeat1'), t('armLipo.adjFeat2'), t('armLipo.adjFeat3')],
      highlight: false
    }
  ]

  return (
    <>
      <Head>
        <title>Arm Liposuction Malaysia | Slimmer Arms & Definition – Dr. Soma</title>
        <meta name="description" content="Arm Liposuction in Malaysia by Certified Plastic Surgeon. Remove stubborn tricep and underarm fat using MicroAire PAL for natural, defined results." />
        <link rel="canonical" href="https://drsomaplasticsurgery.com/body/liposuction-arms-malaysia/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "@id": "https://drsomaplasticsurgery.com/body/liposuction-arms-malaysia/#faq", "mainEntity": [{"@type": "Question", "name": "What is arm liposuction?", "acceptedAnswer": {"@type": "Answer", "text": "Arm liposuction is a surgical procedure that removes excess subcutaneous fat from the upper arms to improve contour and definition."}}, {"@type": "Question", "name": "How is arm liposuction done?", "acceptedAnswer": {"@type": "Answer", "text": "Small incisions are made, a fine cannula is inserted, and fat is removed using tumescent technique and MicroAire Power-Assisted Liposuction to support smoother results."}}, {"@type": "Question", "name": "When will I see results after arm liposuction?", "acceptedAnswer": {"@type": "Answer", "text": "You will notice gradual improvement as swelling reduces. Many patients see visible changes at 4–6 weeks, with final results around 3–6 months."}}, {"@type": "Question", "name": "How long do arm liposuction results last?", "acceptedAnswer": {"@type": "Answer", "text": "Results are long-lasting because removed fat cells do not regenerate. Maintaining stable weight preserves contour."}}, {"@type": "Question", "name": "Does arm liposuction tighten loose skin?", "acceptedAnswer": {"@type": "Answer", "text": "It can provide mild tightening if your skin elasticity is good. If loose hanging skin is significant, an arm lift may be recommended."}}, {"@type": "Question", "name": "How painful is arm liposuction?", "acceptedAnswer": {"@type": "Answer", "text": "Discomfort is usually mild to moderate and is well managed with medication. Most patients describe soreness rather than sharp pain."}}, {"@type": "Question", "name": "How long is downtime after arm liposuction?", "acceptedAnswer": {"@type": "Answer", "text": "Most patients return to desk work within 5–7 days. Exercise is typically resumed around 4–6 weeks with surgeon approval."}}, {"@type": "Question", "name": "Will arm liposuction leave scars?", "acceptedAnswer": {"@type": "Answer", "text": "Scars are minimal because incisions are small and placed discreetly. They fade significantly over time."}}, {"@type": "Question", "name": "Is arm liposuction safe?", "acceptedAnswer": {"@type": "Answer", "text": "When performed by a certified plastic surgeon in a proper medical facility, arm liposuction is generally safe. Risks exist like any surgery and are discussed during consultation."}}, {"@type": "Question", "name": "How many areas can be treated in one session?", "acceptedAnswer": {"@type": "Answer", "text": "Many patients treat both arms in a single procedure. Adjacent contouring areas may be added depending on safety and surgical planning."}}]})
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "@id": "https://drsomaplasticsurgery.com/body/liposuction-arms-malaysia/#service", "name": "Arm Liposuction Malaysia | Slimmer Arms & Definition – Dr. Soma", "url": "https://drsomaplasticsurgery.com/body/liposuction-arms-malaysia/", "description": "Arm Liposuction in Malaysia by Certified Plastic Surgeon. Remove stubborn tricep and underarm fat using MicroAire PAL for natural, defined results.", "aggregateRating": {"@type": "AggregateRating", "ratingValue": 4.9, "reviewCount": 127}})
          }}
        />
      </Head>

      <style jsx global>{`
        .arm-lipo-page ::selection {
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

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
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
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(to bottom right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0) 100%);
          transform: rotate(45deg) translateX(-100%);
          transition: transform 0.6s;
        }
        .card-shine:hover::before {
          transform: rotate(45deg) translateX(100%);
        }

        .img-zoom { overflow: hidden; }
        .img-zoom img { transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1); }
        .img-zoom:hover img { transform: scale(1.1); }

        .btn-magnetic { transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
        .btn-magnetic:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 30px -10px rgba(254, 118, 35, 0.5);
        }

        .accordion-content {
          transition: grid-template-rows 0.3s ease-out;
          display: grid;
          grid-template-rows: 0fr;
        }
        .accordion-content > div { overflow: hidden; }
        .accordion-content.active { grid-template-rows: 1fr; }
      `}</style>

      <main className="arm-lipo-page bg-white text-zinc-900">
        {/* Hero Section */}
        <section className="relative pt-[50px] pb-[50px] md:pt-[60px] md:pb-[60px] px-6 overflow-hidden" style={{backgroundColor: '#F8FAFC'}}>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/50 via-[#F8FAFC] to-transparent -z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest mb-4 md:mb-8 animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                {t('armLipo.badge')}
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-3 md:mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">{t('armLipo.heroTitle')}</span> <br />
                <span className="text-[#FE7623] text-[20px] md:text-[30px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">{t('armLipo.heroSubtitle')}</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>{t('armLipo.heroDesc')}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Arm%20Liposuction%20treatment" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
                  {t('armLipo.bookConsultation')}
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </a>
                <a href="#process" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-white border-2 border-zinc-200 text-zinc-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] group">
                  {t('armLipo.howItWorks')}
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
                <span className="text-sm text-zinc-600 font-medium">{t('armLipo.trustedBy')} <span className="text-[#FE7623] font-bold">500+</span> {t('armLipo.happyPatients')}</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-2 lg:order-2 relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom transition-all duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.1)'}}>
              <BaseImage
                src="/images/Arm Liposuction.jpg"
                alt="Arm Liposuction Malaysia"
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
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">{t('armLipo.technique')}</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">{t('armLipo.techName')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definition & Areas Grid */}
        <section className="pt-4 pb-8 md:py-12 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div data-animate="def-1" className={`md:col-span-5 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-3 md:mb-6">{t('armLipo.whatTitle')}</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-2 md:mb-6 text-justify">
                  {t('armLipo.whatDesc')}
                </p>
              </div>

              {/* Areas Grid */}
              <div data-animate="def-2" className={`md:col-span-7 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">{t('armLipo.areasTitle')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {treatmentAreas.map((area, i) => (
                    <div key={i} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer card-shine">
                      <div className="flex flex-row items-start gap-3">
                        <div className="flex-shrink-0">
                          <svg className="w-6 h-6 text-zinc-400 group-hover:text-[#FE7623] group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{area.name}</span>
                          <p className="text-xs text-zinc-500 mt-1">{area.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Techniques & Process */}
        <section id="process" className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="tech-header" className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible('tech-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">{t('armLipo.techTitle')}</h2>
              <p className="text-zinc-500 text-sm">{t('armLipo.techDesc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {techniques.map((tech, i) => (
                <div key={i} data-animate={`tech-${i}`} className={`bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm card-3d card-shine ${tech.highlight ? 'animate-border-glow' : ''} ${isVisible(`tech-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${tech.highlight ? 'bg-gradient-to-br from-[#FE7623] to-orange-400 text-white animate-pulse-slow' : 'bg-zinc-100 text-zinc-900'} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#FE7623] mb-3">{tech.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{tech.desc}</p>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    {tech.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 hover:text-[#FE7623] hover:translate-x-2 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#FE7623] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="border-t border-zinc-200 pt-16">
              <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-10 text-center">{t('armLipo.processTitle')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
                <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-zinc-200 via-[#FE7623]/30 to-zinc-200 z-0"></div>

                {[
                  { num: "1", title: t('armLipo.step1'), desc: t('armLipo.step1Desc') },
                  { num: "2", title: t('armLipo.step2'), desc: t('armLipo.step2Desc') },
                  { num: "3", title: t('armLipo.step3'), desc: t('armLipo.step3Desc') },
                  { num: "4", title: t('armLipo.step4'), desc: t('armLipo.step4Desc') }
                ].map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center group cursor-pointer hover:-translate-y-3 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-zinc-200 text-sm font-bold flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#FE7623] group-hover:to-orange-400 group-hover:text-white group-hover:border-[#FE7623] group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-orange-500/30 transition-all duration-500 group-hover:rotate-[360deg]">{step.num}</div>
                    <h4 className="text-sm font-semibold text-zinc-900 mb-1 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h4>
                    <p className="text-xs text-zinc-500">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div data-animate="compare-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[4/4] shadow-2xl order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('compare-image') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <BaseImage
                src="/images/Arm Liposuction 1.jpg"
                alt="Arm Liposuction Consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:max-w-[280px] bg-white p-4 md:p-6 rounded-xl shadow-xl border border-zinc-100 animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm font-bold text-zinc-900">{t('armLipo.drNote')}</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  &quot;{t('armLipo.drNoteText')}&quot;
                </p>
              </div>
            </div>

            {/* Table Content */}
            <div data-animate="compare-content" className={`order-2 transition-all duration-700 ${isVisible('compare-content') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">{t('armLipo.compareTitle')}</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                {t('armLipo.compareDesc')}
              </p>

              <div className="rounded-3xl overflow-hidden bg-white shadow-2xl border border-zinc-100 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500">
                {/* Table Header */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 p-3 md:p-6 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
                  <div className="text-white/70 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    {t('armLipo.feature')}
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-4 md:py-2 bg-gradient-to-r from-[#FE7623] to-orange-500 rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-wide shadow-lg shadow-orange-500/30">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white animate-pulse"></span>
                      {t('armLipo.compLipo')}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-4 md:py-2 bg-white/10 rounded-full text-white/90 text-[10px] md:text-xs font-bold uppercase tracking-wide">
                      {t('armLipo.compArmLift')}
                    </div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-zinc-100">
                  {[
                    { feat: t('armLipo.removesFat'), featIcon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16", lipo: t('armLipo.yes'), lipoIcon: true, lift: t('armLipo.yes'), liftIcon: true },
                    { feat: t('armLipo.removesLooseSkin'), featIcon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", lipo: t('armLipo.no'), lipoX: true, lift: t('armLipo.yes'), liftIcon: true },
                    { feat: t('armLipo.scarring'), featIcon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", lipo: t('armLipo.minimal'), lipoSubtext: t('armLipo.hiddenIncisions'), lift: t('armLipo.visible'), liftSubtext: t('armLipo.alongInnerArm') },
                    { feat: t('armLipo.downtime'), featIcon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", lipo: t('armLipo.lipoDowntime'), lipoHighlight: true, lift: t('armLipo.liftDowntime') },
                    { feat: t('armLipo.anesthesia'), featIcon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", lipo: t('armLipo.localTwilight'), lipoHighlight: true, lift: t('armLipo.general') }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 md:gap-4 px-3 md:px-6 py-3 md:py-5 items-center hover:bg-gradient-to-r hover:from-orange-50/50 hover:via-white hover:to-orange-50/30 transition-all duration-300 group cursor-pointer">
                      <div className="flex items-center">
                        <span className="font-semibold text-zinc-900 text-[11px] md:text-sm group-hover:text-[#FE7623] transition-colors duration-300 leading-tight">{row.feat}</span>
                      </div>
                      <div className="text-center">
                        <div className={`inline-flex flex-col items-center gap-0.5 md:gap-1 px-2 py-1 md:px-4 md:py-2 rounded-xl ${row.lipoHighlight ? 'bg-green-50 border border-green-200' : row.lipoIcon ? 'bg-green-50' : row.lipoX ? 'bg-zinc-50' : 'bg-orange-50'}`}>
                          <div className="flex items-center gap-1 md:gap-2">
                            {row.lipoIcon && <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                            {row.lipoX && <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
                            <span className={`text-[10px] md:text-sm font-semibold ${row.lipoHighlight ? 'text-green-700' : row.lipoIcon ? 'text-green-600' : row.lipoX ? 'text-zinc-500' : 'text-[#FE7623]'}`}>{row.lipo}</span>
                          </div>
                          {row.lipoSubtext && <span className="text-[8px] md:text-xs text-zinc-400 hidden md:block">{row.lipoSubtext}</span>}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className={`inline-flex flex-col items-center gap-0.5 md:gap-1 px-2 py-1 md:px-4 md:py-2 rounded-xl ${row.liftIcon ? 'bg-green-50' : 'bg-zinc-50'}`}>
                          <div className="flex items-center gap-1 md:gap-2">
                            {row.liftIcon && <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                            <span className={`text-[10px] md:text-sm font-medium ${row.liftIcon ? 'text-green-600' : 'text-zinc-600'}`}>{row.lift}</span>
                          </div>
                          {row.liftSubtext && <span className="text-[8px] md:text-xs text-zinc-400 hidden md:block">{row.liftSubtext}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table Footer */}
                <div className="px-3 md:px-6 py-3 md:py-4 bg-gradient-to-r from-orange-50 to-white border-t border-zinc-100">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                    <p className="text-[10px] md:text-xs text-zinc-500">
                      {t('armLipo.tableFooter')}
                    </p>
                    <span className="text-[10px] md:text-xs font-medium text-zinc-600">{t('armLipo.lipoPreferred')}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center md:text-left">
                <Link href="/body/arm-lift-malaysia" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FE7623] hover:underline group">
                  {t('armLipo.viewArmLift')}
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Candidates Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-4xl mx-auto">
            <h2 data-animate="candidate-header" className={`text-2xl font-semibold text-center mb-12 text-[#FE7623] transition-all duration-700 ${isVisible('candidate-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('armLipo.candidateTitle')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Good Candidate */}
              <div data-animate="candidate-good" className={`bg-white p-8 rounded-2xl border border-zinc-200 card-3d transition-all duration-700 ${isVisible('candidate-good') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#FE7623]">{t('armLipo.idealTitle')}</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { bold: t('armLipo.ideal1Bold'), text: t('armLipo.ideal1Text') },
                    { bold: t('armLipo.ideal2Bold'), text: t('armLipo.ideal2Text') },
                    { bold: t('armLipo.ideal3Bold'), text: t('armLipo.ideal3Text') },
                    { bold: "", text: t('armLipo.ideal4Text') }
                  ].map((item, i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="flex-1"><strong>{item.bold}</strong>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Suitable */}
              <div data-animate="candidate-bad" className={`bg-white p-8 rounded-2xl border border-zinc-200 opacity-90 card-3d transition-all duration-700 ${isVisible('candidate-bad') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#FE7623]">{t('armLipo.notSuitableTitle')}</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    t('armLipo.notSuitable1'),
                    t('armLipo.notSuitable2'),
                    t('armLipo.notSuitable3')
                  ].map((item, i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </div>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="recovery-header" className={`text-3xl font-semibold tracking-tight text-[#FE7623] mb-12 text-center transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('armLipo.recoveryTitle')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-zinc-200 via-[#FE7623]/30 to-zinc-200 z-0"></div>

              {[
                { time: t('armLipo.recTime1'), title: t('armLipo.recTitle1'), desc: t('armLipo.recDesc1') },
                { time: t('armLipo.recTime2'), title: t('armLipo.recTitle2'), desc: t('armLipo.recDesc2') },
                { time: t('armLipo.recTime3'), title: t('armLipo.recTitle3'), desc: t('armLipo.recDesc3') },
                { time: t('armLipo.recTime4'), title: t('armLipo.recTitle4'), desc: t('armLipo.recDesc4') },
                { time: t('armLipo.recTime5'), title: t('armLipo.recTitle5'), desc: t('armLipo.recDesc5') }
              ].map((step, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`relative z-10 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-2 transition-all duration-500 ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-24 md:w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-[#FE7623] group-hover:shadow-xl group-hover:shadow-orange-500/10 group-hover:bg-[#FE7623] group-hover:scale-110 transition-all duration-300">
                    <span className="text-sm font-bold text-zinc-900 group-hover:text-white transition-colors duration-300">{step.time}</span>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-2 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed px-2 group-hover:text-zinc-700 transition-colors duration-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="testimonial-header" className={`text-2xl font-semibold text-center mb-12 text-[#FE7623] transition-all duration-700 ${isVisible('testimonial-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('armLipo.storiesTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: t('armLipo.test1Text'), name: t('armLipo.test1Name') },
                { text: t('armLipo.test2Text'), name: t('armLipo.test2Name') },
                { text: t('armLipo.test3Text'), name: t('armLipo.test3Name') }
              ].map((testimonial, i) => (
                <div key={i} data-animate={`testimonial-${i}`} className={`p-8 bg-white rounded-2xl border border-zinc-100 shadow-lg card-3d card-shine hover:border-[#FE7623] ${isVisible(`testimonial-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 150}ms`}}>
                  <div className="flex gap-1 text-[#FE7623] mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 italic mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="text-sm font-bold text-zinc-900">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & FAQ Section */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

            {/* Left: Pricing Sticky */}
            <div className="lg:col-span-1">
              <div data-animate="pricing" className={`bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-8 rounded-2xl lg:sticky lg:top-24 shadow-2xl transition-all duration-700 hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] group card-shine ${isVisible('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE7623]/10 rounded-full blur-3xl"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#FE7623]/20 rounded-lg">
                    <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-[#FE7623] transition-colors duration-300">{t('armLipo.pricingTitle')}</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-6">{t('armLipo.pricingDesc')}</p>
                <ul className="space-y-4 mb-8">
                  {[t('armLipo.priceFactor1'), t('armLipo.priceFactor2'), t('armLipo.priceFactor3'), t('armLipo.priceFactor4')].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#FE7623] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Arm%20Liposuction%20treatment" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
                  {t('armLipo.getQuote')}
                </a>
              </div>
            </div>

            {/* Right: FAQs */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg animate-float">
                  <svg className="w-8 h-8 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#FE7623]">{t('armLipo.faqTitle')}</h2>
                  <p className="text-sm text-zinc-500">{t('armLipo.faqDesc')}</p>
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

        {/* Authority & Science Links */}
        <section className="py-8 md:py-20 px-6 bg-gradient-to-b from-zinc-50 to-white border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-row items-start gap-3 mb-10">
              <div className="p-2 bg-blue-50 rounded-lg animate-pulse-slow flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-widest flex-1">{t('armLipo.refTitle')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: t('armLipo.harvardName'), url: "https://www.health.harvard.edu/", desc: t('armLipo.harvardDesc'), color: "from-red-500 to-red-600" },
                { name: t('armLipo.mayoName'), url: "https://www.mayoclinic.org/", desc: t('armLipo.mayoDesc'), color: "from-blue-500 to-blue-600" },
                { name: t('armLipo.pubmedName'), url: "https://pubmed.ncbi.nlm.nih.gov/", desc: t('armLipo.pubmedDesc'), color: "from-green-500 to-green-600" }
              ].map((source, i) => (
                <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="block px-8 py-8 rounded-2xl border border-zinc-200 bg-white card-3d card-shine hover:border-[#FE7623] group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${source.color} animate-pulse`}></div>
                      <span className="text-base font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{source.name}</span>
                    </div>
                    <svg className="w-5 h-5 text-zinc-400 group-hover:text-[#FE7623] group-hover:rotate-45 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">{source.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 md:py-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl animate-float"></div>

          <div data-animate="cta" className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-[#FE7623] mb-6 transition-colors duration-300 cursor-default">{t('armLipo.ctaTitle')}</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              {t('armLipo.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Arm%20Liposuction%20treatment" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                {t('armLipo.chatWhatsApp')}
              </a>
              <Link href="/contact" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-10 py-5 rounded-full text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {t('armLipo.bookConsultation')}
              </Link>
            </div>

            {/* SEO Tags */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {["upper arm liposuction", "bat wing fat", "MicroAire PAL", "tumescent anesthesia", "body contouring"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-50 rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20">{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
