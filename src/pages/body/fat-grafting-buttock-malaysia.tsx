import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function FatGraftingButtockMalaysia() {
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
    { question: "What is fat grafting to the buttocks?", answer: "A procedure that uses a patient's own fat to enhance buttock shape and volume." },
    { question: "Is it safe?", answer: "When performed by a trained plastic surgeon following established safety guidelines, it is considered safe." },
    { question: "How long do results last?", answer: "Surviving fat is permanent if body weight remains stable." },
    { question: "Will I lose volume over time?", answer: "Some early fat loss is expected; final results stabilise by 3–4 months." },
    { question: "Is the procedure painful?", answer: "Discomfort is usually mild to moderate and managed with medication." },
    { question: "Can it be combined with other procedures?", answer: "Yes, commonly with liposuction or body contouring surgeries." }
  ]

  const processSteps = [
    { title: "Harvested", desc: "From donor areas such as the abdomen, flanks, or thighs" },
    { title: "Purified", desc: "Prepared under sterile conditions" },
    { title: "Injected", desc: "Carefully into specific layers of the buttocks" }
  ]

  const advantages = [
    "Uses the patient's own tissue",
    "Produces a softer, more natural look and feel",
    "Avoids foreign implants",
    "Allows simultaneous body contouring through liposuction",
    "Can be customised for subtle or moderate enhancement"
  ]

  const procedureSteps = [
    { num: "1", title: "Assessment", desc: "Preoperative assessment and marking" },
    { num: "2", title: "Liposuction", desc: "Liposuction from selected donor areas" },
    { num: "3", title: "Purification", desc: "Fat purification to remove fluid and damaged cells" },
    { num: "4", title: "Injection", desc: "Controlled, layered fat injection into the buttocks" },
    { num: "5", title: "Safety", desc: "Avoidance of deep intramuscular injection for safety" },
    { num: "6", title: "Compression", desc: "Application of compression garments" }
  ]

  const safetyPrinciples = [
    "Subcutaneous-only fat placement",
    "Avoidance of major blood vessels",
    "Controlled injection pressure",
    "Surgeon training and experience"
  ]

  const candidateChecklist = [
    "Have adequate fat for harvesting",
    "Desire moderate, natural enhancement",
    "Are in good general health",
    "Have stable body weight",
    "Understand that some fat resorption is normal"
  ]

  const notRecommended = [
    "Seeking dramatic enlargement",
    "Lacking sufficient donor fat",
    "Unstable body weight"
  ]

  return (
    <>
      <Head>
        <title>Fat Grafting to Buttocks Malaysia | Natural Buttock Enhancement – Dr. Soma</title>
        <meta name="description" content="Fat grafting to buttocks (gluteal fat transfer) in Malaysia by Dr. Soma. Natural buttock enhancement using your own fat. Certified plastic surgeon with hospital-grade safety. Book consultation today." />
      </Head>

      <style jsx global>{`
        .fatgrafting-page ::selection {
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

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(254, 118, 35, 0.3); }
          50% { border-color: rgba(254, 118, 35, 0.8); }
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

      <main className="fatgrafting-page bg-white text-zinc-900 overflow-x-hidden">
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
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Fat Grafting to Buttocks in Malaysia.</span> <br />
                <span className="text-[#FE7623] text-[18px] md:text-[28px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">Autologous Gluteal Fat Transfer for Natural Buttock Enhancement</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>Buttock shape is governed by anatomy, fat distribution, muscle tone, and skin quality. Weight loss, ageing, or genetic structure can leave the buttocks appearing flat, deflated, or disproportionate to the hips and thighs. Fat grafting to the buttocks, also known as gluteal fat transfer, uses a patient&apos;s own fat to restore volume, projection, and contour in a natural, biologically compatible way.</p>
                <p style={{fontSize: '14px', marginTop: '12px'}}>In Malaysia, fat grafting to the buttocks is classified as a regulated surgical procedure and must be performed by a registered medical practitioner in a licensed medical facility under standards governed by the Ministry of Health Malaysia. Because the procedure involves liposuction, fat processing, and reinjection, it requires advanced anatomical knowledge and strict safety protocols.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Fat%20Grafting%20to%20Buttocks" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
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
                src="/images/fatgrafting.jpg"
                alt="Fat Grafting to Buttocks Malaysia"
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
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">Procedure Focus</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">Natural Buttock Enhancement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Fat Grafting Section */}
        <section id="learn-more" className="py-8 md:py-12 px-6 bg-white border-b border-zinc-100 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div data-animate="def-1" className={`md:col-span-6 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">What Is Fat Grafting to the Buttocks?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  Fat grafting to the buttocks is a surgical technique in which fat is harvested, purified, and carefully injected into specific layers of the buttocks to enhance shape and volume.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {processSteps.map((step, i) => (
                    <div key={i} className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-center hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 group">
                      <div className="w-10 h-10 mx-auto bg-white rounded-lg flex items-center justify-center text-[#FE7623] mb-3 group-hover:bg-[#FE7623] group-hover:text-white transition-all duration-300">
                        <span className="text-lg font-bold">{i + 1}</span>
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 mb-1">{step.title}</h4>
                      <p className="text-xs text-zinc-500">{step.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                    <svg className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    <span><strong>Not</strong> a substitute for weight gain and does not create muscle</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 p-3 bg-orange-50 rounded-lg border border-orange-100 hover:border-[#FE7623] transition-all duration-300 cursor-pointer group">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><strong>Yes</strong> – it reshapes existing contours naturally</span>
                  </div>
                </div>
              </div>

              {/* Why Patients Choose Fat Grafting */}
              <div data-animate="def-2" className={`md:col-span-6 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">Why Patients Choose Fat Grafting Over Implants</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Fat grafting offers several anatomical and practical advantages over implants. Because fat integrates with surrounding tissues, results evolve gradually as healing occurs.
                </p>
                <div className="space-y-3">
                  {advantages.map((item, i) => (
                    <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 group cursor-pointer hover:text-[#FE7623] transition-colors duration-300 p-3 bg-white rounded-lg border border-zinc-100 hover:border-[#FE7623]">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Fat Grafting Is Performed */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="process-header" className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible('process-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">How Fat Grafting to the Buttocks Is Performed</h2>
              <p className="text-zinc-500 text-sm">The procedure is performed under general anaesthesia in a hospital setting. International safety standards emphasise precise injection planes to reduce complications.</p>
            </div>

            <div className="border-t border-zinc-200 pt-12">
              <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-10 text-center">Surgical Process Steps</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center relative">
                <div className="hidden lg:block absolute top-6 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-zinc-200 via-[#FE7623]/30 to-zinc-200 z-0"></div>

                {procedureSteps.map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center group cursor-pointer hover:-translate-y-3 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-zinc-200 text-sm font-bold flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#FE7623] group-hover:to-orange-400 group-hover:text-white group-hover:border-[#FE7623] group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-orange-500/30 transition-all duration-500">{step.num}</div>
                    <h4 className="text-sm font-semibold text-zinc-900 mb-1 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h4>
                    <p className="text-xs text-zinc-500 group-hover:text-zinc-700 transition-colors duration-300">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Safety Considerations Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,98,47,0.15),transparent_40%)]"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div data-animate="safety-header" className={`text-center mb-12 transition-all duration-700 ${isVisible('safety-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">Safety Considerations in Gluteal Fat Transfer</h2>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto">Buttock fat grafting requires strict adherence to safety principles. When performed correctly in a regulated facility, fat grafting is considered safe and predictable.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {safetyPrinciples.map((principle, i) => (
                <div key={i} data-animate={`safety-${i}`} className={`p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 hover:border-[#FE7623]/50 transition-all duration-300 group ${isVisible(`safety-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-12 h-12 rounded-xl bg-zinc-700/50 flex items-center justify-center mb-4 group-hover:bg-[#FE7623] transition-all duration-300">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <p className="text-base font-medium text-white group-hover:text-[#FE7623] transition-colors duration-300">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results and Fat Survival Section */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-animate="results-content" className={`transition-all duration-700 ${isVisible('results-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Results and Fat Survival</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                Not all transferred fat survives. Understanding the typical outcomes helps set realistic expectations for your procedure.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="flex flex-row items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#FE7623] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">60-80%</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 mb-1">Fat Survival Rate</h4>
                      <p className="text-xs text-zinc-600">Of grafted fat establishes long-term blood supply</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                  <div className="flex flex-row items-start gap-3">
                    <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 mb-1">Initial Overcorrection</h4>
                      <p className="text-xs text-zinc-600">Common to compensate for resorption</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                  <div className="flex flex-row items-start gap-3">
                    <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 mb-1">Final Shape</h4>
                      <p className="text-xs text-zinc-600">Becomes evident by 3–4 months</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-zinc-500 mt-4 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
                  <strong>Note:</strong> Stable weight helps preserve results. Significant weight loss after surgery may reduce volume.
                </p>
              </div>
            </div>

            {/* Image */}
            <div data-animate="results-image" className={`relative rounded-2xl overflow-hidden aspect-square shadow-2xl img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('results-image') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <BaseImage
                src="/images/fatgrafting32.jpg"
                alt="Fat Grafting Results"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="recovery-header" className={`text-center mb-16 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Recovery Timeline</h2>
              <p className="text-zinc-500 text-sm">Patients are advised to avoid prolonged pressure on the buttocks during early healing.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
              {[
                {
                  time: "Week 1–2",
                  title: "Initial Recovery",
                  points: ["Swelling expected", "Restricted sitting", "Use of special cushions"],
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: "Week 3–4",
                  title: "Gradual Return",
                  points: ["Return to normal activities", "Reduced swelling", "Continued care"],
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: "Week 6–8",
                  title: "Stabilisation",
                  points: ["Fat stabilisation phase", "Improved comfort", "Better contour visible"],
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                },
                {
                  time: "Month 3+",
                  title: "Final Results",
                  points: ["Final contour visible", "Long-term results", "Normal activities resume"],
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
          </div>
        </section>

        {/* Good Candidates Section */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div data-animate="candidate-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl order-2 lg:order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('candidate-image') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <BaseImage
                src="/images/fatgrafting.jpg"
                alt="Fat Grafting Consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 max-w-[260px] animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-sm font-bold text-zinc-900">Expert Care</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Every fat grafting procedure is personally performed by Dr. Soma with hospital-grade safety protocols.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div data-animate="candidate-content" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('candidate-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Who Is a Good Candidate?</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                Ideal candidates generally meet the following criteria to ensure safe and effective results.
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-zinc-900 mb-4">Ideal Candidates</h4>
                <div className="grid grid-cols-1 gap-3">
                  {candidateChecklist.map((item, i) => (
                    <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 group cursor-pointer hover:text-[#FE7623] transition-colors duration-300">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                <h4 className="text-sm font-bold text-red-700 mb-4">May Require Alternative Options</h4>
                <div className="space-y-2">
                  {notRecommended.map((item, i) => (
                    <div key={i} className="flex flex-row items-start gap-3 text-sm text-red-600">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table - Fat Grafting vs Buttock Implants */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col w-full">
              <h2 data-animate="compare-header" className={`text-2xl font-semibold mb-4 text-center text-[#FE7623] transition-all duration-700 ${isVisible('compare-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Fat Grafting vs Buttock Implants</h2>
              <p className="text-zinc-500 text-sm text-center mb-10 max-w-2xl mx-auto">The choice depends on anatomy, goals, and safety considerations discussed during consultation.</p>

              <div data-animate="compare-table" className={`w-full border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible('compare-table') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Header */}
                <div className="grid grid-cols-3 bg-gradient-to-r from-zinc-50 to-orange-50/30 px-3 py-4 md:px-8 md:py-6 border-b border-zinc-200 text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider text-zinc-500 gap-2">
                  <div>Feature</div>
                  <div className="text-[#FE7623]">Fat Grafting</div>
                  <div>Buttock Implants</div>
                </div>

                {/* Rows */}
                {[
                  { feat: "Material Used", grafting: "Patient's own fat", implants: "Silicone implant" },
                  { feat: "Look & Feel", grafting: "Natural, soft", implants: "Firm, structured" },
                  { feat: "Scar Size", grafting: "Small liposuction scars", implants: "Larger incisions" },
                  { feat: "Body Contouring", grafting: "Dual benefit with liposuction", implants: "Single area only" },
                  { feat: "Long-term Maintenance", grafting: "Minimal", implants: "Higher maintenance" },
                  { feat: "Best For", grafting: "Natural contour enhancement", implants: "Structural augmentation" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 px-3 py-4 md:px-8 md:py-6 border-b border-zinc-100 items-center text-[10px] sm:text-[11px] md:text-sm gap-2 hover:bg-gradient-to-r hover:from-orange-50/30 hover:to-white transition-all duration-300 group cursor-pointer">
                    <div className="font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{row.feat}</div>
                    <div className="text-zinc-600 group-hover:text-[#FE7623] group-hover:font-semibold transition-all duration-300">{row.grafting}</div>
                    <div className="text-zinc-600 group-hover:text-zinc-900 transition-colors duration-300">{row.implants}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & FAQ Section */}
        <section className="pt-8 pb-16 md:pt-24 md:pb-32 px-6 bg-white overflow-hidden">
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
                <p className="text-zinc-400 text-sm mb-6">Fat grafting cost varies depending on several factors:</p>
                <ul className="space-y-4 mb-8">
                  {["Volume of fat to be transferred", "Donor site locations", "Complexity of contouring", "Operating time", "Hospital stay duration"].map((item, i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Fat%20Grafting%20to%20Buttocks" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
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
                  <p className="text-sm text-zinc-500">Get answers to common concerns about fat grafting</p>
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
        <section className="pt-5 pb-8 md:pt-7 md:pb-20 px-6 bg-gradient-to-b from-zinc-50 to-white border-t border-zinc-200 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-row items-start gap-3 mb-7">
              <div className="p-2 bg-blue-50 rounded-lg animate-pulse-slow flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-widest">Safety, Regulation & Standards in Malaysia</h3>
                <p className="text-zinc-500 text-sm mt-1">In Malaysia, fat grafting procedures are regulated by the Ministry of Health Malaysia.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Ministry of Health Malaysia", desc: "Surgical facilities must be licensed, and surgeons must be fully registered and credentialed.", color: "from-blue-500 to-blue-600", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                { name: "Trained Plastic Surgeons", desc: "Gluteal fat transfer should be performed by trained specialists due to its complexity.", color: "from-green-500 to-green-600", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
                { name: "Accredited Facilities", desc: "All procedures performed in licensed hospital settings with full monitoring and sterile environments.", color: "from-purple-500 to-purple-600", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }
              ].map((source, i) => (
                <div key={i} className="block px-8 py-8 rounded-2xl border border-zinc-200 bg-white card-3d card-shine hover:border-[#FE7623] group" style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${source.color} flex items-center justify-center`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={source.icon} /></svg>
                      </div>
                      <span className="text-base font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{source.name}</span>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">{source.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 md:py-24 px-6 bg-white relative overflow-hidden w-full">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl animate-float"></div>

          <div data-animate="cta" className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#FE7623] mb-6 transition-colors duration-300 cursor-default px-4">Final Perspective</h2>
            <p className="text-base sm:text-lg text-zinc-500 mb-6 max-w-3xl mx-auto px-4">
              Fat grafting to the buttocks is a refined balance of science and artistry. It reshapes the body using the patient&apos;s own tissue while respecting anatomy and safety.
            </p>
            <p className="text-sm text-zinc-600 mb-10 pb-[7px] max-w-3xl mx-auto px-4">
              When performed under Malaysia&apos;s regulated medical framework by an experienced surgeon, it offers natural-looking, proportionate enhancement without foreign implants. The success of the procedure lies not in volume alone, but in precision, restraint, and biological understanding — the quiet mechanics behind a confident silhouette.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Fat%20Grafting%20to%20Buttocks" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat with Us on WhatsApp
              </a>
              <Link href="/contact-us" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-10 py-5 rounded-full text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Book Consultation
              </Link>
            </div>

            {/* SEO Tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 px-4">
              {["fat grafting buttocks", "gluteal fat transfer", "BBL Malaysia", "natural buttock enhancement", "autologous fat transfer"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-50 rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20" style={{animationDelay: `${i * 100}ms`}}>{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
