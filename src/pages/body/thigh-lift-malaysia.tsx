import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function ThighLiftMalaysia() {
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
    { question: t('thighLift.faq1Q'), answer: t('thighLift.faq1A') },
    { question: t('thighLift.faq2Q'), answer: t('thighLift.faq2A') },
    { question: t('thighLift.faq3Q'), answer: t('thighLift.faq3A') },
    { question: t('thighLift.faq4Q'), answer: t('thighLift.faq4A') },
    { question: t('thighLift.faq5Q'), answer: t('thighLift.faq5A') },
    { question: t('thighLift.faq6Q'), answer: t('thighLift.faq6A') },
    { question: t('thighLift.faq7Q'), answer: t('thighLift.faq7A') },
    { question: t('thighLift.faq8Q'), answer: t('thighLift.faq8A') },
    { question: t('thighLift.faq9Q'), answer: t('thighLift.faq9A') },
    { question: t('thighLift.faq10Q'), answer: t('thighLift.faq10A') }
  ]

  const causesOfLaxity = [
    { icon: "scale", name: t('thighLift.cause1') },
    { icon: "clock", name: t('thighLift.cause2') },
    { icon: "dna", name: t('thighLift.cause3') },
    { icon: "hormone", name: t('thighLift.cause4') },
    { icon: "gravity", name: t('thighLift.cause5') },
    { icon: "friction", name: t('thighLift.cause6') }
  ]

  const thighLiftTypes = [
    {
      title: t('thighLift.type1Title'),
      desc: t('thighLift.type1Desc'),
      features: [t('thighLift.type1Feat1'), t('thighLift.type1Feat2'), t('thighLift.type1Feat3')],
      highlight: true
    },
    {
      title: t('thighLift.type2Title'),
      desc: t('thighLift.type2Desc'),
      features: [t('thighLift.type2Feat1'), t('thighLift.type2Feat2'), t('thighLift.type2Feat3')],
      highlight: false
    },
    {
      title: t('thighLift.type3Title'),
      desc: t('thighLift.type3Desc'),
      features: [t('thighLift.type3Feat1'), t('thighLift.type3Feat2'), t('thighLift.type3Feat3')],
      highlight: false
    },
    {
      title: t('thighLift.type4Title'),
      desc: t('thighLift.type4Desc'),
      features: [t('thighLift.type4Feat1'), t('thighLift.type4Feat2'), t('thighLift.type4Feat3')],
      highlight: false
    }
  ]

  const candidateChecklist = [
    t('thighLift.candidate1'),
    t('thighLift.candidate2'),
    t('thighLift.candidate3'),
    t('thighLift.candidate4'),
    t('thighLift.candidate5')
  ]

  const notRecommendedFor = [
    t('thighLift.notRec1'),
    t('thighLift.notRec2'),
    t('thighLift.notRec3'),
    t('thighLift.notRec4')
  ]

  return (
    <>
      <Head>
        <title>Thigh Lift Malaysia by Specialist Plastic Surgeon | Remove Loose Thigh Skin Safely – Dr. Soma</title>
        <meta name="description" content="Looking for safe, surgeon-performed thigh lift (thighplasty) in Malaysia? Dr. Soma offers advanced body contouring to remove excess thigh skin for firmer, smoother contours." />
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "@id": "https://drsomaplasticsurgery.com/body/thigh-lift-malaysia/#faq", "mainEntity": [{"@type": "Question", "name": "What is a thigh lift?", "acceptedAnswer": {"@type": "Answer", "text": "A thigh lift is a surgical procedure that removes excess skin and fat from the thighs to improve firmness and contour."}}, {"@type": "Question", "name": "Is a thigh lift the same as thigh liposuction?", "acceptedAnswer": {"@type": "Answer", "text": "No. Liposuction removes fat only, while a thigh lift removes loose skin and reshapes the thighs."}}, {"@type": "Question", "name": "Is thigh lift surgery safe?", "acceptedAnswer": {"@type": "Answer", "text": "When performed by a certified plastic surgeon in a regulated facility, it is considered a safe and established procedure."}}, {"@type": "Question", "name": "How long does recovery take after a thigh lift?", "acceptedAnswer": {"@type": "Answer", "text": "Most patients resume daily activities within 2–4 weeks, with full recovery over several months."}}, {"@type": "Question", "name": "Will there be visible scars?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, but scars are placed strategically and fade over time with proper care."}}, {"@type": "Question", "name": "Are thigh lift results permanent?", "acceptedAnswer": {"@type": "Answer", "text": "Results are long-lasting if body weight remains stable."}}, {"@type": "Question", "name": "Can a thigh lift be combined with other procedures?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. It is often combined with tummy tuck or body lift surgery after weight loss."}}, {"@type": "Question", "name": "Does exercise help after a thigh lift?", "acceptedAnswer": {"@type": "Answer", "text": "Exercise improves muscle tone but cannot replace surgical skin removal."}}, {"@type": "Question", "name": "Who should consider a thigh lift?", "acceptedAnswer": {"@type": "Answer", "text": "Patients with loose thigh skin after weight loss or ageing and stable weight."}}, {"@type": "Question", "name": "Is age a limiting factor?", "acceptedAnswer": {"@type": "Answer", "text": "Overall health and skin condition are more important than age alone."}}]})
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "@id": "https://drsomaplasticsurgery.com/body/thigh-lift-malaysia/#service", "name": "Thigh Lift Malaysia by Specialist Plastic Surgeon | Remove Loose Thigh Skin Safely – Dr. Soma", "url": "https://drsomaplasticsurgery.com/body/thigh-lift-malaysia/", "description": "Looking for safe, surgeon-performed thigh lift (thighplasty) in Malaysia? Dr. Soma offers advanced body contouring to remove excess thigh skin for firmer, smoother contours.", "aggregateRating": {"@type": "AggregateRating", "ratingValue": 4.9, "reviewCount": 127}})
          }}
        />
      </Head>

      <style jsx global>{`
        .thigh-lift-page ::selection {
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

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(254, 118, 35, 0.2); }
          50% { box-shadow: 0 0 20px rgba(254, 118, 35, 0.4); }
        }

        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
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

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
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

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(254, 118, 35, 0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        .animate-border-glow {
          animation: borderGlow 2s ease-in-out infinite;
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -15px rgba(254, 118, 35, 0.15);
          border-color: #FE7623;
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

        .text-gradient {
          background: linear-gradient(135deg, #FE7623 0%, #ff9a5a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stagger-animation > * {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-animation > *:nth-child(5) { animation-delay: 0.5s; }
        .stagger-animation > *:nth-child(6) { animation-delay: 0.6s; }

        .ripple {
          position: relative;
          overflow: hidden;
        }
        .ripple::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(254, 118, 35, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        .ripple:hover::after {
          width: 300%;
          height: 300%;
        }
      `}</style>

      <main className="thigh-lift-page bg-white text-zinc-900">
        {/* Hero Section */}
        <section className="relative pt-[50px] pb-[50px] md:pt-[60px] md:pb-[60px] px-6 overflow-hidden" style={{backgroundColor: '#F8FAFC'}}>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/50 via-[#F8FAFC] to-transparent -z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest mb-4 md:mb-8 animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                {t('thighLift.badge')}
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-3 md:mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">{t('thighLift.heroTitle')}</span> <br />
                <span className="text-[#FE7623] text-[18px] md:text-[28px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">{t('thighLift.heroSubtitle')}</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>{t('thighLift.heroDesc1')}</p>
                <p style={{fontSize: '14px', marginTop: '12px'}}>{t('thighLift.heroDesc2')}</p>
                <p style={{fontSize: '14px', marginTop: '12px'}}>{t('thighLift.heroDesc3')}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Thigh%20Lift%20treatment" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
                  {t('thighLift.bookConsultation')}
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </a>
                <a href="#process" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-white border-2 border-zinc-200 text-zinc-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] group">
                  {t('thighLift.howItWorks')}
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
                <span className="text-sm text-zinc-600 font-medium">{t('thighLift.trustedBy')} <span className="text-[#FE7623] font-bold">500+</span> {t('thighLift.happyPatients')}</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-2 lg:order-2 relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom transition-all duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.1)'}}>
              <BaseImage
                src="/images/thigh_lift.jpg"
                alt="Thigh Lift Surgery Malaysia"
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
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">{t('thighLift.regulatedBy')}</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">{t('thighLift.mohMalaysia')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definition & Causes Grid */}
        <section className="py-8 md:py-12 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div data-animate="def-1" className={`md:col-span-5 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">{t('thighLift.whatTitle')}</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify" dangerouslySetInnerHTML={{ __html: t('thighLift.whatDesc') }} />
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{t('thighLift.whatPoint1')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{t('thighLift.whatPoint2')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{t('thighLift.whatPoint3')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{t('thighLift.whatPoint4')}</span>
                  </div>
                </div>
              </div>

              {/* Causes Grid */}
              <div data-animate="def-2" className={`md:col-span-7 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">{t('thighLift.causesTitle')}</h3>
                <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${isVisible('def-2') ? 'stagger-animation' : ''}`}>
                  {causesOfLaxity.map((cause, i) => (
                    <div key={i} className="p-4 rounded-xl border border-zinc-200 text-center hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer card-shine ripple bg-white">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-3 text-zinc-400 group-hover:text-[#FE7623] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-sm font-semibold text-zinc-700 group-hover:text-[#FE7623] transition-colors duration-300">{cause.name}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
                  {t('thighLift.causesDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works & Types */}
        <section id="process" className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="tech-header" className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible('tech-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">{t('thighLift.typesTitle')}</h2>
              <p className="text-zinc-500 text-sm">{t('thighLift.typesDesc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {thighLiftTypes.map((type, i) => (
                <div key={i} data-animate={`tech-${i}`} className={`bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm card-3d card-shine ${type.highlight ? 'animate-border-glow' : ''} ${isVisible(`tech-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${type.highlight ? 'bg-gradient-to-br from-[#FE7623] to-orange-400 text-white animate-pulse-slow' : 'bg-zinc-100 text-zinc-900'} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#FE7623] mb-3">{type.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{type.desc}</p>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    {type.features.map((feature, j) => (
                      <li key={j} className="flex flex-row items-start gap-3 hover:text-[#FE7623] hover:translate-x-2 transition-all duration-300">
                        <svg className="w-6 h-6 flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="border-t border-zinc-200 pt-16">
              <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-10 text-center">{t('thighLift.processTitle')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center relative">
                <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-zinc-200 via-[#FE7623]/30 to-zinc-200 z-0 animate-shimmer"></div>

                {[
                  { num: "1", title: t('thighLift.processStep1'), desc: t('thighLift.processStep1Desc') },
                  { num: "2", title: t('thighLift.processStep2'), desc: t('thighLift.processStep2Desc') },
                  { num: "3", title: t('thighLift.processStep3'), desc: t('thighLift.processStep3Desc') },
                  { num: "4", title: t('thighLift.processStep4'), desc: t('thighLift.processStep4Desc') },
                  { num: "5", title: t('thighLift.processStep5'), desc: t('thighLift.processStep5Desc') },
                  { num: "6", title: t('thighLift.processStep6'), desc: t('thighLift.processStep6Desc') }
                ].map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center group cursor-pointer hover:-translate-y-3 transition-all duration-500" style={{animationDelay: `${i * 150}ms`}}>
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-zinc-200 text-sm font-bold flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#FE7623] group-hover:to-orange-400 group-hover:text-white group-hover:border-[#FE7623] group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-orange-500/30 transition-all duration-500 group-hover:rotate-[360deg]">{step.num}</div>
                    <h4 className="text-sm font-semibold text-zinc-900 mb-1 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h4>
                    <p className="text-xs text-zinc-500 group-hover:text-zinc-700 transition-colors duration-300">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image Section */}
            <div data-animate="why-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl order-2 lg:order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('why-image') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <BaseImage
                src="/images/lift2.jpg"
                alt="Thigh Lift Surgery Results"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 max-w-[260px] animate-float">
                <div className="mb-2">
                  <span className="text-sm font-bold text-zinc-900">{t('thighLift.floatingBadge')}</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  &ldquo;{t('thighLift.floatingBadgeDesc')}&rdquo;
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div data-animate="why-content" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('why-content') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">{t('thighLift.benefitsTitle')}</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                {t('thighLift.benefitsDesc')}
              </p>

              <div className="space-y-6">
                {[
                  { title: t('thighLift.benefit1Title'), desc: t('thighLift.benefit1Desc') },
                  { title: t('thighLift.benefit2Title'), desc: t('thighLift.benefit2Desc') },
                  { title: t('thighLift.benefit3Title'), desc: t('thighLift.benefit3Desc') },
                  { title: t('thighLift.benefit4Title'), desc: t('thighLift.benefit4Desc') },
                  { title: t('thighLift.benefit5Title'), desc: t('thighLift.benefit5Desc') },
                  { title: t('thighLift.benefit6Title'), desc: t('thighLift.benefit6Desc') }
                ].map((item, i) => (
                  <div key={i} className="flex flex-row items-start gap-3 md:gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#FE7623] group-hover:bg-[#FE7623] group-hover:text-white group-hover:border-[#FE7623] transition-all duration-300">
                      <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{item.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Candidates Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="cand-header" className={`text-3xl font-semibold tracking-tight text-center mb-12 text-[#FE7623] transition-all duration-700 ${isVisible('cand-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('thighLift.candidateTitle')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ideal Candidates */}
              <div data-animate="cand-ideal" className={`bg-zinc-800 p-8 rounded-2xl border border-zinc-700 hover:border-[#FE7623]/50 transition-all duration-500 ${isVisible('cand-ideal') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-xl font-bold text-[#FE7623] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {t('thighLift.idealTitle')}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {candidateChecklist.map((item, i) => (
                    <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not Recommended */}
              <div data-animate="cand-not" className={`bg-zinc-800 p-8 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition-all duration-500 ${isVisible('cand-not') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-xl font-bold text-zinc-400 mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  {t('thighLift.notRecommendedTitle')}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {notRecommendedFor.map((item, i) => (
                    <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-400 hover:text-zinc-200 transition-all duration-300">
                      <svg className="w-6 h-6 flex-shrink-0 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-zinc-500">{t('thighLift.notRecNote')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col w-full">
              <h2 data-animate="compare-header" className={`text-2xl font-semibold mb-10 text-center text-[#FE7623] transition-all duration-700 ${isVisible('compare-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('thighLift.compareTitle')}</h2>

              <div data-animate="compare-table" className={`w-full border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible('compare-table') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Header */}
                <div className="grid grid-cols-3 bg-gradient-to-r from-zinc-50 to-orange-50/30 px-2 py-3 md:px-8 md:py-6 border-b border-zinc-200 text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider text-zinc-500 gap-3 md:gap-4">
                  <div>{t('thighLift.feature')}</div>
                  <div className="text-[#FE7623] flex items-center gap-1 md:gap-2"><span className="hidden md:block w-2 h-2 rounded-full bg-[#FE7623] animate-pulse"></span><span>{t('thighLift.compThighLift')}</span></div>
                  <div>{t('thighLift.compLipo')}</div>
                </div>

                {/* Rows */}
                {[
                  { feat: t('thighLift.row1Feat'), thighlift: t('thighLift.row1ThighLift'), thighliftIcon: true, lipo: t('thighLift.row1Lipo'), lipoX: true },
                  { feat: t('thighLift.row2Feat'), thighlift: t('thighLift.row2ThighLift'), thighliftIcon: true, lipo: t('thighLift.row2Lipo'), lipoIcon: true },
                  { feat: t('thighLift.row3Feat'), thighlift: t('thighLift.row3ThighLift'), thighliftIcon: true, lipo: t('thighLift.row3Lipo'), lipoX: true },
                  { feat: t('thighLift.row4Feat'), thighlift: t('thighLift.row4ThighLift'), lipo: t('thighLift.row4Lipo') },
                  { feat: t('thighLift.row5Feat'), thighlift: t('thighLift.row5ThighLift'), lipo: t('thighLift.row5Lipo') }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 px-2 py-3 md:px-8 md:py-6 border-b border-zinc-100 items-center text-[10px] sm:text-[11px] md:text-sm gap-3 md:gap-4 hover:bg-gradient-to-r hover:from-orange-50/30 hover:to-white transition-all duration-300 group cursor-pointer">
                    <div className="font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{row.feat}</div>
                    <div className={`flex items-center gap-1 md:gap-2 ${row.thighliftIcon ? 'text-[#FE7623]' : 'text-zinc-600'}`}>
                      {row.thighliftIcon && <svg className="hidden md:block w-4 h-4 md:w-6 md:h-6 group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      <span className="group-hover:font-semibold transition-all duration-300">{row.thighlift}</span>
                    </div>
                    <div className="text-zinc-600 flex items-center gap-1 md:gap-2">
                      {row.lipoIcon && <svg className="hidden md:block w-4 h-4 md:w-6 md:h-6 text-green-500 group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      {row.lipoX && <svg className="hidden md:block w-4 h-4 md:w-6 md:h-6 text-zinc-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
                      <span className="group-hover:text-zinc-900 transition-colors duration-300">{row.lipo}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-zinc-500 mb-4">{t('thighLift.compareNote')}</p>
                <Link href="/body/liposuction-malaysia" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FE7623] hover:underline group">
                  {t('thighLift.viewLipoDetails')}
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div data-animate="recovery-header" className={`text-center mb-16 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">{t('thighLift.recoveryTitle')}</h2>
              <p className="text-zinc-500 text-sm">{t('thighLift.recoveryDesc')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
              {[
                {
                  time: t('thighLift.resTime1'),
                  title: t('thighLift.resTitle1'),
                  points: [t('thighLift.resPoint1a'), t('thighLift.resPoint1b'), t('thighLift.resPoint1c')],
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: t('thighLift.resTime2'),
                  title: t('thighLift.resTitle2'),
                  points: [t('thighLift.resPoint2a'), t('thighLift.resPoint2b')],
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: t('thighLift.resTime3'),
                  title: t('thighLift.resTitle3'),
                  points: [t('thighLift.resPoint3a'), t('thighLift.resPoint3b')],
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                },
                {
                  time: t('thighLift.resTime4'),
                  title: t('thighLift.resTitle4'),
                  points: [t('thighLift.resPoint4a'), t('thighLift.resPoint4b')],
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                }
              ].map((step, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`relative bg-white pt-14 pb-8 px-8 rounded-2xl border border-zinc-200 shadow-sm card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  {/* Time Badge */}
                  <div className="absolute -top-4 left-6 px-7 py-2 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-500/30 transition-all duration-300 z-10">
                    {step.time}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#FE7623] group-hover:to-orange-400 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-xl transition-all duration-500">
                    <svg className="w-7 h-7 text-[#FE7623] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-900 mb-4 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h3>

                  {/* Points */}
                  <ul className="space-y-3">
                    {step.points.map((point, j) => (
                      <li key={j} className="flex flex-row items-start gap-3 text-sm text-zinc-600 group-hover:text-zinc-800 hover:translate-x-2 transition-all duration-300">
                        <svg className="w-6 h-6 flex-shrink-0 text-[#FE7623] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div data-animate="recovery-progress" className={`mt-16 transition-all duration-700 ${isVisible('recovery-progress') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-zinc-100 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#FE7623] to-orange-400 rounded-full w-0 animate-progress" style={{animation: 'progressBar 2s ease-out forwards', animationDelay: '0.5s'}}></div>
              </div>
              <div className="flex justify-between mt-4 text-xs text-zinc-500">
                <span>{t('thighLift.progressWeek1')}</span>
                <span>{t('thighLift.progressWeek2')}</span>
                <span>{t('thighLift.progressWeek4')}</span>
                <span>{t('thighLift.progressWeek8')}</span>
                <span>{t('thighLift.progressMonth36')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Scarring Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="scar-header" className={`text-2xl font-semibold text-center mb-12 text-[#FE7623] transition-all duration-700 ${isVisible('scar-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('thighLift.scarTitle')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div data-animate="scar-content" className={`transition-all duration-700 ${isVisible('scar-content') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  {t('thighLift.scarDesc')}
                </p>
                <div className="space-y-4">
                  <div className="flex flex-row items-start gap-3 p-4 bg-white rounded-xl border border-zinc-200 hover:border-[#FE7623] transition-all duration-300">
                    <svg className="w-6 h-6 min-w-[24px] text-[#FE7623] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-zinc-900">{t('thighLift.scarItem1Title')}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{t('thighLift.scarItem1Desc')}</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-start gap-3 p-4 bg-white rounded-xl border border-zinc-200 hover:border-[#FE7623] transition-all duration-300">
                    <svg className="w-6 h-6 min-w-[24px] text-[#FE7623] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-zinc-900">{t('thighLift.scarItem2Title')}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{t('thighLift.scarItem2Desc')}</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-start gap-3 p-4 bg-white rounded-xl border border-zinc-200 hover:border-[#FE7623] transition-all duration-300">
                    <svg className="w-6 h-6 min-w-[24px] text-[#FE7623] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-zinc-900">{t('thighLift.scarItem3Title')}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{t('thighLift.scarItem3Desc')}</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-start gap-3 p-4 bg-white rounded-xl border border-zinc-200 hover:border-[#FE7623] transition-all duration-300">
                    <svg className="w-6 h-6 min-w-[24px] text-[#FE7623] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-zinc-900">{t('thighLift.scarItem4Title')}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{t('thighLift.scarItem4Desc')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-animate="scar-image" className={`bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 transition-all duration-700 ${isVisible('scar-image') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{t('thighLift.scarFadeTitle')}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {t('thighLift.scarFadeDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Post-Operative Aftercare */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="aftercare-header" className={`text-2xl font-semibold text-center mb-12 text-[#FE7623] transition-all duration-700 ${isVisible('aftercare-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{t('thighLift.aftercareTitle')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: t('thighLift.aftercare1Title'), desc: t('thighLift.aftercare1Desc'), icon: "M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" },
                { title: t('thighLift.aftercare2Title'), desc: t('thighLift.aftercare2Desc'), icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { title: t('thighLift.aftercare3Title'), desc: t('thighLift.aftercare3Desc'), icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                { title: t('thighLift.aftercare4Title'), desc: t('thighLift.aftercare4Desc'), icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                { title: t('thighLift.aftercare5Title'), desc: t('thighLift.aftercare5Desc'), icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                { title: t('thighLift.aftercare6Title'), desc: t('thighLift.aftercare6Desc'), icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-[#FE7623] hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 group-hover:bg-[#FE7623] group-hover:border-[#FE7623] transition-all duration-300">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 mb-2 group-hover:text-[#FE7623] transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & FAQ Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

            {/* Left: Pricing Sticky */}
            <div className="lg:col-span-1">
              <div data-animate="pricing" className={`bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-8 rounded-2xl lg:sticky lg:top-24 shadow-2xl transition-all duration-700 hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] group card-shine ${isVisible('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE7623]/10 rounded-full blur-3xl"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#FE7623]/20 rounded-lg">
                    <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-[#FE7623] transition-colors duration-300">{t('thighLift.pricingTitle')}</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-6">{t('thighLift.pricingDesc')}</p>
                <ul className="space-y-4 mb-8">
                  {[t('thighLift.priceFactor1'), t('thighLift.priceFactor2'), t('thighLift.priceFactor3'), t('thighLift.priceFactor4'), t('thighLift.priceFactor5')].map((item, i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 flex-shrink-0 text-[#FE7623] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Thigh%20Lift%20treatment" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
                  {t('thighLift.getQuote')}
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
                  <h2 className="text-2xl font-semibold text-[#FE7623]">{t('thighLift.faqTitle')}</h2>
                  <p className="text-sm text-zinc-500">{t('thighLift.faqDesc')}</p>
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

        {/* Safety & Regulation */}
        <section className="py-8 md:py-20 px-6 bg-gradient-to-b from-white to-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-row items-start gap-3 mb-10">
              <div className="p-2 bg-blue-50 rounded-lg animate-pulse-slow flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-widest flex-1">{t('thighLift.safetyTitle')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: t('thighLift.safety1Name'), desc: t('thighLift.safety1Desc'), color: "from-blue-500 to-blue-600" },
                { name: t('thighLift.safety2Name'), desc: t('thighLift.safety2Desc'), color: "from-green-500 to-green-600" },
                { name: t('thighLift.safety3Name'), desc: t('thighLift.safety3Desc'), color: "from-purple-500 to-purple-600" }
              ].map((source, i) => (
                <div key={i} className="block px-8 py-8 rounded-2xl border border-zinc-200 bg-white card-3d card-shine hover:border-[#FE7623] group" style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${source.color} animate-pulse`}></div>
                      <span className="text-base font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{source.name}</span>
                    </div>
                    <svg className="w-6 h-6 text-zinc-400 group-hover:text-[#FE7623] transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">{source.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 md:py-24 px-6 bg-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl animate-float"></div>

          <div data-animate="cta" className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-[#FE7623] mb-6 transition-colors duration-300 cursor-default">{t('thighLift.ctaTitle')}</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              {t('thighLift.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Thigh%20Lift%20treatment" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                {t('thighLift.chatWhatsApp')}
              </a>
              <Link href="/contact" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-10 py-5 rounded-full text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {t('thighLift.bookConsultation')}
              </Link>
            </div>

            {/* SEO Tags */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {[t('thighLift.seoTag1'), t('thighLift.seoTag2'), t('thighLift.seoTag3'), t('thighLift.seoTag4'), t('thighLift.seoTag5')].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-50 rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20" style={{animationDelay: `${i * 100}ms`}}>{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
