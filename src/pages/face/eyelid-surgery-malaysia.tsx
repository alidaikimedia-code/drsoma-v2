import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function EyelidSurgeryMalaysia() {
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
    { question: "What is eyelid surgery?", answer: "Eyelid surgery is a procedure that removes or repositions excess skin and fat from the eyelids to improve appearance and function." },
    { question: "Is blepharoplasty safe?", answer: "Yes, when performed by a certified plastic surgeon in a regulated medical facility." },
    { question: "Will eyelid surgery change my eye shape?", answer: "The goal is to restore natural contours, not alter ethnic or personal eye shape." },
    { question: "Is eyelid surgery painful?", answer: "Discomfort is usually mild and well controlled with medication." },
    { question: "How long do results last?", answer: "Results are long-lasting, often for many years, especially with healthy aging." },
    { question: "Will there be visible scars?", answer: "Scars are placed in natural creases and usually fade significantly over time." },
    { question: "When can I return to work?", answer: "Most patients return to work within 1-2 weeks after the procedure." }
  ]

  const surgeryTypes = [
    { title: "Upper Eyelid Surgery", desc: "Focused on removing excess skin and fat that cause drooping or heaviness. In some patients, this improves peripheral vision in addition to appearance." },
    { title: "Lower Eyelid Surgery", desc: "Addresses under-eye bags, puffiness, and loose skin. Fat may be removed, repositioned, or combined with tightening techniques to avoid a hollowed look." },
    { title: "Combined Upper and Lower Blepharoplasty", desc: "Performed when both eyelids show aging changes. This provides balanced rejuvenation in a single surgical plan." },
    { title: "Functional Blepharoplasty", desc: "Indicated when eyelid droop interferes with vision. In selected cases, this may have medical justification rather than being purely cosmetic." }
  ]

  const procedureSteps = [
    "Precise preoperative marking with the patient seated",
    "Incisions placed along natural eyelid creases or inside the lower lid",
    "Conservative removal or repositioning of fat",
    "Skin tightening without excessive tension",
    "Fine suturing to minimise scarring"
  ]

  const benefits = [
    "A more rested, alert appearance",
    "Reduction of eyelid heaviness or hooding",
    "Smoother under-eye contours",
    "Improved facial balance and symmetry",
    "Long-lasting results with natural expression"
  ]

  const candidateCriteria = [
    "Have drooping eyelids or under-eye bags affecting appearance or comfort",
    "Are in good overall health",
    "Do not have uncontrolled eye conditions (such as severe dry eye or glaucoma)",
    "Understand scarring, healing, and realistic outcomes"
  ]

  const comparisonData = [
    { aspect: "Skin removal", surgery: "Yes", nonSurgical: "No" },
    { aspect: "Fat repositioning", surgery: "Yes", nonSurgical: "Limited" },
    { aspect: "Longevity", surgery: "Long-term", nonSurgical: "Temporary" },
    { aspect: "Recovery", surgery: "Days to weeks", nonSurgical: "Minimal" },
    { aspect: "Best for", surgery: "Moderate–severe aging", nonSurgical: "Early or mild changes" }
  ]

  return (
    <>
      <Head>
        <title>Eyelid Surgery Malaysia | Blepharoplasty – Dr. Soma</title>
        <meta name="description" content="Eyelid surgery (blepharoplasty) in Malaysia by Dr. Soma. Brighter, refreshed, and youthful eyes. Expert eye rejuvenation in licensed facility. Book consultation today." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://drsoma-v2.vercel.app/face/eyelid-surgery-malaysia/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is eyelid surgery?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Eyelid surgery is a procedure that removes or repositions excess skin and fat from the eyelids to improve appearance and function."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is blepharoplasty safe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, when performed by a certified plastic surgeon in a regulated medical facility."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will eyelid surgery change my eye shape?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The goal is to restore natural contours, not alter ethnic or personal eye shape."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is eyelid surgery painful?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Discomfort is usually mild and well controlled with medication."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long do results last?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Results are long-lasting, often for many years, especially with healthy aging."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will there be visible scars?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Scars are placed in natural creases and usually fade significantly over time."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When can I return to work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most patients return to work within 1-2 weeks after the procedure."
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
              "@id": "https://drsoma-v2.vercel.app/face/eyelid-surgery-malaysia/#service",
              "name": "Eyelid Surgery Malaysia | Blepharoplasty – Dr. Soma",
              "url": "https://drsoma-v2.vercel.app/face/eyelid-surgery-malaysia/",
              "description": "Eyelid surgery (blepharoplasty) in Malaysia by Dr. Soma. Brighter, refreshed, and youthful eyes. Expert eye rejuvenation in licensed facility. Book consultation today.",
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

        .eyelid-surgery-page ::selection {
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
      <main className="eyelid-surgery-page bg-white text-zinc-900 w-full max-w-full">
        {/* Hero Section */}
        <section className="relative pt-[50px] pb-[50px] md:pt-[60px] md:pb-[60px] px-6 overflow-hidden" style={{backgroundColor: '#F8FAFC'}}>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/50 via-[#F8FAFC] to-transparent -z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest mb-4 md:mb-8 animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                Board Certified Plastic Surgeon
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-3 md:mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Eyelid Surgery in Malaysia.</span> <br />
                <span className="text-[#FE7623] text-[18px] md:text-[28px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">Blepharoplasty for Brighter, Refreshed, and Youthful Eyes</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>Eyes age faster than almost any other facial feature. Skin here is thin, constantly moving, and unforgiving to gravity, sun exposure, and genetics. Droopy upper eyelids, puffy lower lids, and under-eye bags can make the face look tired, angry, or older than it actually is.</p>
                <p style={{fontSize: '14px', marginTop: '12px'}}>Eyelid surgery, medically known as blepharoplasty, is designed to correct these changes with precision rather than exaggeration. When done correctly, it does not change who you are; it restores clarity, openness, and balance to the eyes while respecting natural anatomy and ethnicity.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Eyelid%20Surgery" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
                  Book Consultation
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </a>
                <a href="#learn-more" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-white border-2 border-zinc-200 text-zinc-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] group">
                  Learn More
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </a>
              </div>

              {/* Trust Badge */}
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
                <span className="text-sm text-zinc-600 font-medium">Trusted by <span className="text-[#FE7623] font-bold">500+</span> happy patients</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-2 lg:order-2 relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom transition-all duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.1)'}}>
              <BaseImage
                src="/images/eyelid_reduction.png"
                alt="Eyelid Surgery Malaysia"
                fill
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
              <div className="hidden md:block absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="bg-white backdrop-blur-md p-3 md:p-5 rounded-xl border border-zinc-100 shadow-xl group-hover:translate-y-[-5px] transition-transform duration-500">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="p-2 md:p-3 bg-white border border-zinc-200 text-[#FE7623] rounded-xl shadow-sm">
                      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">Procedure Focus</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">Eye Rejuvenation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Eyelid Surgery Section */}
        <section id="learn-more" className="py-8 md:py-12 px-6 bg-white border-b border-zinc-100 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-4 md:px-8">
              <div data-animate="def-1" className={`md:col-span-6 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">What Is Eyelid Surgery (Blepharoplasty)?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  Blepharoplasty is a surgical procedure that removes or repositions excess skin, fat, and sometimes muscle from the upper eyelids, lower eyelids, or both. The goal is to improve eyelid contour, eye openness, and facial harmony while preserving normal blinking and eye function.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  It is important to understand that eyelid surgery is not about making eyes bigger or different, but about correcting structural changes caused by aging, genetics, or weight fluctuation.
                </p>
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <p className="text-sm text-zinc-700"><strong>Clinical Note:</strong> International clinical bodies such as the Mayo Clinic and the American Society of Plastic Surgeons describe blepharoplasty as both a cosmetic and functional procedure, particularly when excess upper-lid skin interferes with vision.</p>
                </div>
              </div>

              {/* Benefits Preview */}
              <div data-animate="def-2" className={`md:col-span-6 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">Benefits of Eyelid Surgery</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Eyelid surgery offers both aesthetic and functional benefits. When performed conservatively, results age gracefully rather than appearing &quot;done.&quot;
                </p>
                <div className="space-y-3">
                  {benefits.map((item, i) => (
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

        {/* Types of Eyelid Surgery */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="types-header" className={`max-w-2xl mb-12 px-4 md:px-8 transition-all duration-700 ${isVisible('types-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Types of Eyelid Surgery</h2>
              <p className="text-zinc-500 text-sm">Each type addresses specific concerns and can be tailored to individual anatomy and goals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8">
              {surgeryTypes.map((type, i) => (
                <div key={i} data-animate={`type-${i}`} className={`relative bg-white pt-14 pb-8 px-6 rounded-2xl border border-zinc-200 card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`type-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="absolute -top-4 left-6 px-4 py-3 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 z-10">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 mb-3 group-hover:text-[#FE7623] transition-colors duration-300">{type.title}</h3>
                  <p className="text-sm text-zinc-500">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Surgery Is Performed */}
        <section className="py-8 md:py-24 px-6 bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,98,47,0.15),transparent_40%)]"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div data-animate="procedure-header" className={`text-center mb-12 px-4 md:px-8 transition-all duration-700 ${isVisible('procedure-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">How Eyelid Surgery Is Performed</h2>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto">Eyelid surgery is usually performed as a day-care procedure under local anaesthesia with sedation or general anaesthesia, depending on the extent of surgery and patient comfort.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4 md:px-8">
              {procedureSteps.map((step, i) => (
                <div key={i} data-animate={`proc-${i}`} className={`p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 hover:border-[#FE7623]/50 transition-all duration-300 group ${isVisible(`proc-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="text-[#FE7623] font-bold text-lg mb-3">{i + 1}</div>
                  <p className="text-zinc-300 text-sm">{step}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-zinc-400 mt-8 text-center max-w-2xl mx-auto px-4 md:px-8">
              Incisions are designed to heal inconspicuously and usually become difficult to detect once fully healed.
            </p>
          </div>
        </section>

        {/* Who Is a Good Candidate */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 md:px-8">
            {/* Image Section */}
            <div data-animate="candidate-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl order-2 lg:order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('candidate-image') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <BaseImage
                src="/images/eyelid_reduction.png"
                alt="Eyelid Surgery Candidate"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
            </div>

            {/* Content Section */}
            <div data-animate="candidate-content" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('candidate-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Who Is a Good Candidate?</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                A detailed consultation is essential to evaluate eyelid anatomy, eye health, and facial proportions before surgery. Ideal candidates for blepharoplasty generally:
              </p>

              <div className="grid grid-cols-1 gap-3 mb-6">
                {candidateCriteria.map((item, i) => (
                  <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 group cursor-pointer hover:text-[#FE7623] transition-colors duration-300 p-3 bg-zinc-50 rounded-lg border border-zinc-200 hover:border-[#FE7623]">
                    <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="flex-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="comparison-header" className={`text-center mb-12 px-4 md:px-8 transition-all duration-700 ${isVisible('comparison-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Eyelid Surgery vs Non-Surgical Eye Treatments</h2>
              <p className="text-zinc-500 text-sm max-w-2xl mx-auto">Non-surgical treatments can complement surgery but cannot replace it when true excess skin is present.</p>
            </div>

            <div className="overflow-x-auto px-4 md:px-8">
              <table className="w-full text-sm bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-100">
                    <th className="text-left py-4 px-4 text-zinc-600 font-semibold">Aspect</th>
                    <th className="text-left py-4 px-4 text-[#FE7623] font-semibold">Eyelid Surgery</th>
                    <th className="text-left py-4 px-4 text-zinc-600 font-semibold">Non-Surgical Treatments</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-zinc-700 font-medium">{row.aspect}</td>
                      <td className="py-4 px-4 text-zinc-900">{row.surgery}</td>
                      <td className="py-4 px-4 text-zinc-500">{row.nonSurgical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="recovery-header" className={`text-center mb-12 px-4 md:px-8 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Recovery Timeline and Healing</h2>
              <p className="text-zinc-500 text-sm">Recovery after blepharoplasty is gradual and predictable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
              {[
                { time: "Days 1–5", desc: "Swelling, bruising, mild tightness; cold compresses advised" },
                { time: "Week 1", desc: "Sutures removed (if external), bruising begins to fade" },
                { time: "Week 2–3", desc: "Most patients return to work and social activities" },
                { time: "Week 6–12", desc: "Final contour refinement as residual swelling resolves" }
              ].map((item, i) => (
                <div key={i} data-animate={`timeline-${i}`} className={`relative bg-zinc-50 pt-14 pb-6 px-6 rounded-2xl border border-zinc-200 card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`timeline-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="absolute -top-4 left-4 px-4 py-3 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 z-10">
                    {item.time}
                  </div>
                  <p className="text-sm text-zinc-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-zinc-500 mt-8 text-center max-w-2xl mx-auto px-4 md:px-8">
              Postoperative care protocols follow internationally accepted surgical safety principles aligned with guidance from the World Health Organization on surgical care and recovery.
            </p>
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
                <p className="text-zinc-400 text-sm mb-6">Eyelid surgery cost varies depending on:</p>
                <ul className="space-y-4 mb-8">
                  {["Upper, lower, or combined procedure", "Complexity of correction", "Functional vs cosmetic indication", "Anaesthesia requirements", "Facility fees"].map((item, i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Eyelid%20Surgery" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
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
                  <p className="text-sm text-zinc-500">Get answers to common concerns about eyelid surgery</p>
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

        {/* Safety & Regulation Section */}
        <section className="pt-12 pb-8 md:pt-7 md:pb-20 px-6 bg-white border-t border-zinc-200 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-row items-start gap-3 mb-7 px-4 md:px-8">
              <div className="p-2 bg-blue-50 rounded-lg animate-pulse-slow flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-widest">Safety and Regulation in Malaysia</h3>
                <p className="text-zinc-500 text-sm mt-1">Blepharoplasty in Malaysia must be performed by a registered medical practitioner in a licensed facility regulated by the Ministry of Health Malaysia.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-8">
              {[
                { name: "Licensed Facilities", desc: "All procedures in MOH-regulated medical facilities", color: "from-blue-500 to-blue-600", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                { name: "Certified Surgeons", desc: "Plastic surgeons with hospital privileges", color: "from-green-500 to-green-600", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
                { name: "Eye Safety Priority", desc: "Special protocols for delicate eye anatomy", color: "from-purple-500 to-purple-600", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
                { name: "Postoperative Care", desc: "Comprehensive follow-up and monitoring", color: "from-orange-500 to-orange-600", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }
              ].map((source, i) => (
                <div key={i} className="block px-6 py-6 rounded-2xl border border-zinc-200 bg-zinc-50 card-3d card-shine hover:border-[#FE7623] group" style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${source.color} flex items-center justify-center`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={source.icon} /></svg>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300 block mb-1">{source.name}</span>
                  <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">{source.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Procedures Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="related-header" className={`text-center mb-12 px-4 md:px-8 transition-all duration-700 ${isVisible('related-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Related Procedures</h2>
              <p className="text-zinc-500 text-sm max-w-2xl mx-auto">Explore other facial procedures that complement eyelid surgery for comprehensive rejuvenation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
              {[
                { title: "Asian Eyelid Surgery", desc: "Double eyelid surgery for natural crease creation", href: "/face/asian-eyelid-surgery-malaysia", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
                { title: "Brow Lift", desc: "Elevate sagging brows for a refreshed look", href: "/face/brow-lift-malaysia", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" },
                { title: "Face Lift", desc: "Comprehensive facial rejuvenation surgery", href: "/face/face-lift-malaysia", icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: "Neck Lift", desc: "Restore definition to the jawline and neck", href: "/face/neck-lift-malaysia", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }
              ].map((procedure, i) => (
                <Link key={i} href={procedure.href} className="block p-6 rounded-2xl border border-zinc-200 bg-white card-3d card-shine hover:border-[#FE7623] group transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FE7623] to-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={procedure.icon} /></svg>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 mb-2 group-hover:text-[#FE7623] transition-colors duration-300">{procedure.title}</h3>
                  <p className="text-sm text-zinc-500 mb-4">{procedure.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#FE7623] group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              ))}
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
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#FE7623] mb-6 transition-colors duration-300 cursor-default px-4">Restore Clarity and Balance to Your Eyes</h2>
            <p className="text-base sm:text-lg text-zinc-500 mb-6 max-w-3xl mx-auto px-4">
              Eyelid surgery offers a way to refresh your appearance without changing who you are.
            </p>
            <p className="text-sm text-zinc-600 mb-10 pb-[7px] max-w-3xl mx-auto px-4">
              When performed by a qualified surgeon with proper planning and realistic expectations, blepharoplasty delivers natural, long-lasting results that help you look as rested and alert as you feel.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6 md:px-10">
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Eyelid%20Surgery" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-12 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat with Us on WhatsApp
              </a>
              <Link href="/contact" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-12 py-5 rounded-full text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Book Consultation
              </Link>
            </div>

            {/* Related Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 px-4">
              <Link href="/face" className="px-4 py-2 bg-white rounded-full text-xs text-zinc-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 border border-zinc-200 hover:border-[#FE7623]/20">
                All Face Procedures
              </Link>
              <Link href="/face/asian-eyelid-surgery-malaysia" className="px-4 py-2 bg-white rounded-full text-xs text-zinc-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 border border-zinc-200 hover:border-[#FE7623]/20">
                Asian Eyelid Surgery
              </Link>
              <Link href="/face/brow-lift-malaysia" className="px-4 py-2 bg-white rounded-full text-xs text-zinc-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 border border-zinc-200 hover:border-[#FE7623]/20">
                Brow Lift
              </Link>
              <Link href="/face/face-lift-malaysia" className="px-4 py-2 bg-white rounded-full text-xs text-zinc-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 border border-zinc-200 hover:border-[#FE7623]/20">
                Face Lift
              </Link>
              <Link href="/face/rhinoplasty-malaysia" className="px-4 py-2 bg-white rounded-full text-xs text-zinc-500 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 border border-zinc-200 hover:border-[#FE7623]/20">
                Rhinoplasty
              </Link>
            </div>
          </div>
        </section>
      </main>
      </div>
    </>
  )
}
