import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function KeloidTreatmentMalaysia() {
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
    { question: "What causes keloids?", answer: "Keloids result from excessive collagen production during wound healing." },
    { question: "Are keloids dangerous?", answer: "No. Keloids are benign, but they can cause discomfort and cosmetic concerns." },
    { question: "Can keloids go away on their own?", answer: "No. Keloids typically persist and may grow without medical treatment." },
    { question: "What is the most effective keloid treatment?", answer: "Steroid injections are commonly first-line, often combined with other therapies." },
    { question: "How many sessions are needed?", answer: "Most patients require multiple sessions over several months." },
    { question: "Do keloids come back after treatment?", answer: "Recurrence is possible, which is why combination therapy and follow-up are important." },
    { question: "Is keloid treatment painful?", answer: "Discomfort is usually mild and well tolerated." },
    { question: "Who should avoid keloid treatment?", answer: "Patients with active infections or certain medical conditions may need to delay treatment." }
  ]

  const keloidCharacteristics = [
    { name: "Extend beyond the original injury" },
    { name: "Do not regress on their own" },
    { name: "May continue to grow over time" }
  ]

  const commonAreas = [
    "Chest",
    "Shoulders",
    "Upper back",
    "Earlobes (after piercing)",
    "Jawline",
    "Surgical scars",
    "Acne scars"
  ]

  const treatmentOptions = [
    {
      title: "Intralesional Steroid Injections",
      features: ["Reduce inflammation", "Suppress collagen overproduction", "Flatten and soften the scar"],
      highlight: true
    },
    {
      title: "Silicone-Based Therapy",
      features: ["Reduces scar thickness", "Improves texture over time", "Often used as adjunct therapy"],
      highlight: false
    },
    {
      title: "Laser Treatment",
      features: ["Reduces redness and thickness", "Improves scar appearance", "Often combined with injections"],
      highlight: false
    },
    {
      title: "Surgical Excision",
      features: ["Reserved for resistant keloids", "Always combined with adjuvant therapy", "Reduces recurrence risk"],
      highlight: false
    }
  ]

  const candidateChecklist = [
    "Have raised or expanding scars",
    "Experience itching, pain, or tightness",
    "Have cosmetic or functional concerns",
    "Understand the possibility of recurrence",
    "Are willing to follow a long-term treatment plan"
  ]

  const safetyRisks = [
    "Local tenderness",
    "Skin thinning (with steroid injections)",
    "Temporary pigment changes"
  ]

  return (
    <>
      <Head>
        <title>Keloid Treatment in Malaysia | Medical & Aesthetic Scar Management - Dr. Soma</title>
        <meta name="description" content="Keloid treatment in Malaysia for raised, overgrown scars. Learn causes, medical treatment options, safety, recurrence risk, and FAQs." />
        <link rel="canonical" href="https://drsomaplasticsurgery.com/aesthetic-treatments/keloid-treatment-malaysia" />
      </Head>

      <style jsx global>{`
        .keloid-page ::selection {
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

        .animate-border-glow {
          animation: borderGlow 2s ease-in-out infinite;
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
        .stagger-animation > *:nth-child(7) { animation-delay: 0.7s; }

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

      <main className="keloid-page bg-white text-zinc-900">
        {/* Hero Section */}
        <section className="relative pt-[50px] pb-[50px] md:pt-[60px] md:pb-[60px] px-6 overflow-hidden" style={{backgroundColor: '#F8FAFC'}}>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/50 via-[#F8FAFC] to-transparent -z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest mb-4 md:mb-8 animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                Medical Scar Treatment
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-3 md:mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Keloid Treatment in Malaysia.</span> <br />
                <span className="text-[#FE7623] text-[20px] md:text-[30px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">Medical Management of Raised & Overgrown Scars</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify space-y-3" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>Keloids are abnormal scars that grow beyond the original wound boundary and may continue to enlarge over time. They can cause cosmetic concern, itching, pain, or tightness and often require medical treatment rather than home remedies.</p>
                <p style={{fontSize: '14px'}}>In Malaysia, keloid treatment must be performed by licensed medical practitioners in regulated medical facilities. Treatments involve prescription medications and medical procedures governed by international regulatory standards, including guidance from the U.S. Food and Drug Administration (FDA) on injectable medications used in scar management.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Keloid%20Treatment" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
                  Book Consultation
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </a>
                <a href="#treatment" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-white border-2 border-zinc-200 text-zinc-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] group">
                  Treatment Options
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
                <span className="text-sm text-zinc-600 font-medium">Trusted by <span className="text-[#FE7623] font-bold">500+</span> patients</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-2 lg:order-2 relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom transition-all duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.1)'}}>
              <BaseImage
                src="/images/keloid_treatment.png"
                alt="Keloid Treatment in Malaysia"
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
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">Treatment</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">Medical Scar Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is a Keloid Section */}
        <section className="py-8 md:py-12 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div data-animate="def-1" className={`md:col-span-5 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">What Is a Keloid?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  A keloid is a type of abnormal scar caused by excessive collagen production during wound healing. Major clinical institutions such as the Mayo Clinic describe keloids as benign but persistent scars that often require professional treatment to control symptoms and appearance.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed text-justify">
                  Unlike normal scars, keloids have distinct characteristics that make them challenging to manage without medical intervention.
                </p>
              </div>

              {/* Keloid Characteristics */}
              <div data-animate="def-2" className={`md:col-span-7 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">Unlike Normal Scars, Keloids:</h3>
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isVisible('def-2') ? 'stagger-animation' : ''}`}>
                  {keloidCharacteristics.map((item, i) => (
                    <div key={i} className="p-4 rounded-xl border border-zinc-200 text-center hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer card-shine ripple bg-white">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-3 text-zinc-400 group-hover:text-[#FE7623] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-sm font-semibold text-zinc-700 group-hover:text-[#FE7623] transition-colors duration-300">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Areas Section */}
        <section className="py-8 md:py-16 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="areas-header" className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${isVisible('areas-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Common Areas Affected by Keloids</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Keloids commonly develop on specific body areas. They are more common in individuals with darker skin types and may have a genetic predisposition.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {commonAreas.map((area, i) => (
                <div key={i} data-animate={`area-${i}`} className={`p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:border-[#FE7623] hover:shadow-lg transition-all duration-300 text-center group ${isVisible(`area-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 50}ms`}}>
                  <p className="text-sm font-medium text-zinc-700 group-hover:text-[#FE7623] transition-colors duration-300">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Keloids Need Medical Treatment */}
        <section className="py-8 md:py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-animate="why-content" className={`transition-all duration-700 ${isVisible('why-content') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Why Keloids Need Medical Treatment</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                Keloids do not respond well to topical creams or massage alone. Evidence-based reviews indexed by NCBI / PubMed show that keloids have a high recurrence rate and often require combination therapy for optimal control.
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">Without medical intervention, keloids may:</p>
              <div className="space-y-3">
                {["Continue enlarging", "Become symptomatic (itchy or painful)", "Recur after trauma or surgery"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 group">
                    <svg className="w-6 h-6 min-w-[24px] text-[#FE7623] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span className="flex-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-animate="why-image" className={`relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('why-image') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <BaseImage
                src="/images/keloid_treatment.png"
                alt="Keloid Treatment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section id="treatment" className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="treatment-header" className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible('treatment-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Keloid Treatment Options</h2>
              <p className="text-zinc-500 text-sm">Treatment is individualised and may include one or more of the following approaches. According to clinical guidance summarised by MedlinePlus (NIH), combination approaches are often necessary due to the recurrent nature of keloids.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentOptions.map((option, i) => (
                <div key={i} data-animate={`treatment-${i}`} className={`bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm card-3d card-shine ${option.highlight ? 'animate-border-glow' : ''} ${isVisible(`treatment-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${option.highlight ? 'bg-gradient-to-br from-[#FE7623] to-orange-400 text-white animate-pulse-slow' : 'bg-zinc-100 text-zinc-900'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-base font-bold text-[#FE7623] mb-3">{option.title}</h3>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    {option.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 hover:text-[#FE7623] transition-colors duration-300">
                        <svg className="w-5 h-5 min-w-[20px] text-[#FE7623] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Expectations Section */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-animate="safety-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl order-2 lg:order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('safety-image') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <BaseImage
                src="/images/keloid_treatment.png"
                alt="Keloid Treatment Safety"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 max-w-[260px] animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-sm font-bold text-zinc-900">Important Note</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  No treatment guarantees zero recurrence. Long-term monitoring is often required.
                </p>
              </div>
            </div>

            <div data-animate="safety-content" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('safety-content') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Safety, Risks, and Expectations</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                Keloid treatment is generally safe when performed by trained medical professionals. Possible temporary effects depend on the method used.
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-zinc-900 mb-4">Possible Temporary Effects</h4>
                <div className="grid grid-cols-1 gap-3">
                  {safetyRisks.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 group">
                      <svg className="w-6 h-6 min-w-[24px] text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-orange-50/50 rounded-xl border border-orange-100">
                <h4 className="text-sm font-bold text-zinc-900 mb-3">Treatment Timeline & Results</h4>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 min-w-[20px] text-[#FE7623] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Improvement is gradual, not immediate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 min-w-[20px] text-[#FE7623] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Multiple treatment sessions are usually required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 min-w-[20px] text-[#FE7623] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Flattening and symptom relief often occur over weeks to months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 min-w-[20px] text-[#FE7623] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Maintenance or repeat treatments may be necessary</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is a Suitable Candidate */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="candidate-header" className={`max-w-2xl mx-auto text-center mb-12 transition-all duration-700 ${isVisible('candidate-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Who Is a Suitable Candidate?</h2>
              <p className="text-zinc-500 text-sm">Keloid treatment may be suitable for individuals who meet the following criteria. A medical assessment is essential to confirm diagnosis and choose the appropriate approach.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {candidateChecklist.map((item, i) => (
                  <div key={i} data-animate={`candidate-${i}`} className={`flex items-start gap-3 text-sm text-zinc-700 p-4 bg-white rounded-xl border border-zinc-100 hover:border-[#FE7623] hover:shadow-lg transition-all duration-300 group ${isVisible(`candidate-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                    <svg className="w-6 h-6 min-w-[24px] text-[#FE7623] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="flex-1">{item}</span>
                  </div>
                ))}
              </div>
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
                  <h3 className="text-xl font-semibold group-hover:text-[#FE7623] transition-colors duration-300">Pricing Guide</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-6">Keloid treatment cost varies depending on:</p>
                <ul className="space-y-4 mb-8">
                  {["Size and location of keloid", "Number of keloids", "Treatment method chosen", "Number of sessions required"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 text-[#FE7623] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Keloid%20Treatment" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
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
                  <p className="text-sm text-zinc-500">Get answers to common concerns about keloid treatment</p>
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

        {/* Scientific References */}
        <section className="pt-12 md:pt-16 pb-8 md:pb-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-row items-start gap-3 mb-10">
              <div className="p-2 bg-blue-50 rounded-lg animate-pulse-slow flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-widest flex-1">Scientific Evidence & References</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "U.S. FDA", url: "https://www.fda.gov/", desc: "FDA guidance on injectable corticosteroids used in scar management treatments.", color: "from-blue-500 to-blue-600" },
                { name: "Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/keloid-scar/symptoms-causes/syc-20520901", desc: "Clinical overview describing keloids as benign but persistent scars requiring professional treatment.", color: "from-red-500 to-red-600" },
                { name: "NCBI / PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/", desc: "Evidence-based reviews showing high recurrence rates and need for combination therapy.", color: "from-green-500 to-green-600" }
              ].map((source, i) => (
                <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="block px-8 py-8 rounded-2xl border border-zinc-200 bg-white card-3d card-shine hover:border-[#FE7623] group" style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${source.color} animate-pulse`}></div>
                      <span className="text-base font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{source.name}</span>
                    </div>
                    <svg className="w-6 h-6 text-zinc-400 group-hover:text-[#FE7623] group-hover:rotate-45 group-hover:scale-125 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">{source.desc}</p>
                </a>
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

            <h2 className="text-4xl font-semibold tracking-tight text-[#FE7623] mb-6 transition-colors duration-300 cursor-default">Take control of your keloid treatment.</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              Keloids require medical strategy, patience, and long-term planning. With evidence-based treatment and proper follow-up, symptoms can be controlled and scar appearance significantly improved—while respecting the biology of scar formation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Keloid%20Treatment" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat with Us on WhatsApp
              </a>
              <Link href="/contact-us" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-10 py-5 rounded-full text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Book Consultation
              </Link>
            </div>

            {/* SEO Tags */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {["keloid treatment Malaysia", "scar management", "steroid injections", "raised scars", "overgrown scars", "Dr. Soma"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20" style={{animationDelay: `${i * 100}ms`}}>{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
