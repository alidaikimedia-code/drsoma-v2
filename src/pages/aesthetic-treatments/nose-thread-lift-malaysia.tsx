import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function NoseThreadLiftMalaysia() {
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
    { question: "What does a nose thread lift do?", answer: "It enhances the nasal bridge and tip using absorbable threads to improve contour without surgery." },
    { question: "Is a nose thread lift safe?", answer: "Yes, when performed by a qualified medical practitioner using regulated medical threads." },
    { question: "How long do nose thread lift results last?", answer: "Results usually last between 12 and 18 months." },
    { question: "Is the procedure painful?", answer: "Discomfort is minimal, as local anaesthesia is used." },
    { question: "Is there downtime after a nose thread lift?", answer: "Most patients return to daily activities within 1–2 days." },
    { question: "Can a nose thread lift replace rhinoplasty?", answer: "No. It offers subtle enhancement and cannot correct major structural issues." },
    { question: "Can the threads be felt or seen?", answer: "Temporary tightness may be felt initially but usually resolves as tissues settle." },
    { question: "Who should avoid nose thread lift treatment?", answer: "Patients with severe nasal deformities, active infections, or unrealistic expectations may not be suitable." }
  ]

  const howItWorks = [
    { title: "Nasal Assessment", desc: "Detailed nasal and facial assessment to plan thread placement" },
    { title: "Local Anaesthesia", desc: "Application of local anaesthesia for patient comfort" },
    { title: "Thread Placement", desc: "Strategic placement of PDO threads along the nasal framework" },
    { title: "Immediate Lifting", desc: "Immediate lifting effect with gradual collagen stimulation" }
  ]

  const improvements = [
    "Increase nasal bridge height",
    "Improve nose definition",
    "Support and refine the nasal tip",
    "Create a straighter-appearing profile",
    "Enhance facial balance"
  ]

  const benefits = [
    { title: "Non-Surgical", desc: "No implants or bone alteration required" },
    { title: "Immediate Results", desc: "Visible improvement right after treatment" },
    { title: "Minimal Downtime", desc: "Return to normal activities within 1-2 days" },
    { title: "Natural Look", desc: "Gradual collagen support for natural refinement" }
  ]

  const candidateCriteria = [
    "Want non-surgical nose enhancement",
    "Have a low to moderate nasal bridge",
    "Prefer minimal downtime",
    "Have realistic expectations",
    "Are in good general health"
  ]

  const recoveryTimeline = [
    { time: "Day 1", desc: "Same-day outpatient procedure, immediate improvement visible" },
    { time: "Day 2-3", desc: "Mild swelling, return to normal activities" },
    { time: "Week 4-6", desc: "Continued refinement as collagen develops" },
    { time: "12-18 Months", desc: "Results typically last, depending on thread type" }
  ]

  return (
    <>
      <Head>
        <title>Nose Thread Lift in Malaysia | Non-Surgical Nose Enhancement</title>
        <meta name="description" content="Nose thread lift in Malaysia for non-surgical nose height and contour enhancement. Learn how PDO threads work, safety, results, recovery, and FAQs." />
        <link rel="canonical" href="https://drsomaplasticsurgery.com/aesthetic-treatments/nose-thread-lift-malaysia" />
      </Head>

      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        .nose-thread-page ::selection {
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
      <main className="nose-thread-page bg-white text-zinc-900 w-full max-w-full">
        {/* Hero Section */}
        <section className="relative pt-[50px] pb-[50px] md:pt-[60px] md:pb-[60px] px-6 overflow-hidden" style={{backgroundColor: '#F8FAFC'}}>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/50 via-[#F8FAFC] to-transparent -z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest mb-4 md:mb-8 animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                Non-Surgical Treatment
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-3 md:mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Nose Thread Lift in Malaysia.</span> <br />
                <span className="text-[#FE7623] text-[18px] md:text-[28px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">Non-Surgical Nose Enhancement with Minimal Downtime</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>A nose thread lift is a minimally invasive aesthetic procedure designed to enhance the nasal bridge and tip without surgery. It is commonly chosen by patients who want subtle nose height, improved definition, and a more balanced side profile — without implants or long recovery time.</p>
                <p style={{fontSize: '14px', marginTop: '12px'}}>In Malaysia, aesthetic procedures using medical devices must be performed by licensed medical practitioners in regulated facilities. The absorbable threads used in nose thread lifts are classified as regulated medical devices, as outlined by the U.S. Food and Drug Administration (FDA).</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Nose%20Thread%20Lift" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
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
                    'https://randomuser.me/api/portraits/women/32.jpg',
                    'https://randomuser.me/api/portraits/women/44.jpg',
                    'https://randomuser.me/api/portraits/men/68.jpg',
                    'https://randomuser.me/api/portraits/women/75.jpg',
                    'https://randomuser.me/api/portraits/men/89.jpg'
                  ].map((img, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                      <img src={img} alt={`Patient ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-zinc-600 font-medium text-center sm:text-left">Trusted by <span className="text-[#FE7623] font-bold">800+</span> happy patients</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-2 lg:order-2 relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom transition-all duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.1)'}}>
              <BaseImage
                src="/images/rhinoplasty_in_nose.png"
                alt="Nose Thread Lift Malaysia"
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
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">Treatment Focus</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">Nose Enhancement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Nose Thread Lift Section */}
        <section id="learn-more" className="py-8 md:py-12 px-6 bg-white border-b border-zinc-100 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-4 md:px-8">
              <div data-animate="def-1" className={`md:col-span-6 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">What Is a Nose Thread Lift?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  A nose thread lift uses absorbable polydioxanone (PDO) threads inserted along the nasal bridge and tip to provide structural support and mild lifting. These threads create immediate mechanical elevation while also stimulating collagen formation as they dissolve.
                </p>
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <p className="text-sm text-zinc-700"><strong>PDO sutures</strong> have a long history of use in medical procedures and are designed to be safely absorbed by the body over time under regulated standards.</p>
                </div>
              </div>

              {/* What Can It Improve */}
              <div data-animate="def-2" className={`md:col-span-6 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">What Can a Nose Thread Lift Improve?</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Major clinical institutions such as the Mayo Clinic explain that thread-based lifting procedures are intended for subtle contour improvement:
                </p>
                <div className="space-y-3">
                  {improvements.map((item, i) => (
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

        {/* How It Works Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="howit-header" className={`max-w-3xl mb-12 px-4 md:px-8 transition-all duration-700 ${isVisible('howit-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">How Nose Thread Lift Works</h2>
              <p className="text-zinc-500 text-sm">The treatment is usually completed within 30–45 minutes and does not require hospital admission:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
              {howItWorks.map((item, i) => (
                <div key={i} data-animate={`howit-${i}`} className={`relative bg-white p-6 rounded-2xl border border-zinc-200 card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`howit-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FE7623] to-orange-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="benefits-header" className={`max-w-3xl mb-12 px-4 md:px-8 transition-all duration-700 ${isVisible('benefits-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Benefits of Nose Thread Lift</h2>
              <p className="text-zinc-500 text-sm">Clinical reviews indexed by NCBI / PubMed indicate that absorbable thread techniques can provide predictable aesthetic improvement with an acceptable safety profile when performed by trained practitioners:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
              {benefits.map((item, i) => (
                <div key={i} data-animate={`benefit-${i}`} className={`relative bg-zinc-50 p-6 rounded-2xl border border-zinc-200 card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`benefit-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FE7623] to-orange-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety and Expectations */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 md:px-8">
            {/* Image Section */}
            <div data-animate="safety-image" className={`relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl order-2 lg:order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('safety-image') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <BaseImage
                src="/images/rhinoplasty_in_nose.png"
                alt="Nose Thread Lift Safety"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
            </div>

            {/* Content Section */}
            <div data-animate="safety-content" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('safety-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Safety, Risks, and Expectations</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                When performed by experienced medical professionals, a nose thread lift is generally safe. Temporary effects may include:
              </p>
              <div className="space-y-3 mb-6">
                {["Mild swelling", "Bruising", "Tenderness", "Temporary asymmetry during early healing"].map((item, i) => (
                  <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 p-3 bg-white rounded-lg border border-zinc-200">
                    <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="flex-1">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                <p className="text-sm text-green-800"><strong>Note:</strong> A nose thread lift does not replace surgical rhinoplasty and is best suited for patients seeking modest enhancement rather than major reshaping.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Timeline Section */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="recovery-header" className={`max-w-2xl mb-12 px-4 md:px-8 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Recovery and Results Timeline</h2>
              <p className="text-zinc-500 text-sm">Same-day outpatient procedure with minimal downtime. Here&apos;s what to expect:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
              {recoveryTimeline.map((item, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`relative bg-zinc-50 pt-14 pb-8 px-6 rounded-2xl border border-zinc-200 card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="absolute -top-4 left-6 px-4 py-3 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 z-10">
                    {item.time}
                  </div>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Is a Suitable Candidate */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 md:px-8">
              <div data-animate="candidate-content" className={`transition-all duration-700 ${isVisible('candidate-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Who Is a Suitable Candidate?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Nose thread lift may be suitable for individuals who:
                </p>
                <div className="space-y-3">
                  {candidateCriteria.map((item, i) => (
                    <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 p-3 bg-white rounded-lg border border-zinc-200">
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
                    A nose thread lift is about refinement, not reconstruction. When used appropriately, it offers a safe, non-surgical option for enhancing nasal definition with minimal interruption to daily life.
                  </p>
                  <p className="text-zinc-400 text-sm">
                    A medical consultation is essential to determine anatomical suitability and set realistic expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & FAQ Section */}
        <section className="pt-8 pb-16 md:pt-24 md:pb-32 px-6 bg-white overflow-hidden">
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
                <p className="text-zinc-400 text-sm mb-6">Nose thread lift cost varies depending on:</p>
                <ul className="space-y-4 mb-8">
                  {["Number of threads required", "Thread type and quality (PDO)", "Complexity of enhancement", "Practitioner expertise", "Clinic location and facilities"].map((item, i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Nose%20Thread%20Lift" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
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
                  <p className="text-sm text-zinc-500">Get answers to common questions about nose thread lift</p>
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
        <section className="py-8 md:py-24 px-6 bg-zinc-50 relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-zinc-50 to-zinc-50 -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl animate-float"></div>

          <div data-animate="cta" className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#FE7623] mb-6 transition-colors duration-300 cursor-default px-4">Enhance Your Nose Without Surgery</h2>
            <p className="text-base sm:text-lg text-zinc-500 mb-6 max-w-3xl mx-auto px-4">
              Discover the benefits of nose thread lift for subtle, natural-looking nose enhancement with minimal downtime.
            </p>
            <p className="text-sm text-zinc-600 mb-10 pb-[7px] max-w-3xl mx-auto px-4">
              Schedule a consultation to learn if nose thread lift is the right choice for your aesthetic goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6 md:px-10">
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Nose%20Thread%20Lift" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-12 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
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
              {["Nose thread lift Malaysia", "non-surgical rhinoplasty", "PDO nose threads", "nose enhancement", "nose contouring"].map((tag, i) => (
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
