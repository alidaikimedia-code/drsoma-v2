import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function StomachLiposuctionMalaysia() {
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
    { question: "What is stomach liposuction?", answer: "A surgical fat-removal procedure that contours the abdomen by removing excess subcutaneous fat." },
    { question: "When will I see results?", answer: "Visible changes usually appear at 4–6 weeks, with final results at 3–6 months." },
    { question: "How long do results last?", answer: "Long-lasting, because removed fat cells do not regenerate. Stable weight maintains contour." },
    { question: "Does stomach liposuction remove loose skin?", answer: "No. It removes fat. If loose skin is significant, a tummy tuck may be more suitable." },
    { question: "Is it painful?", answer: "Discomfort is usually mild to moderate and feels like muscle soreness. Medication helps." },
    { question: "Is stomach liposuction safe?", answer: "When performed by a certified plastic surgeon in a proper medical facility, it is generally safe. Risks are explained during consultation." }
  ]

  const treatmentAreas = [
    { name: "Upper Abdomen", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
    { name: "Lower Abdomen", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
    { name: "Central Belly Fullness", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
    { name: "Flank Blending", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" }
  ]

  const benefits = [
    { title: "Removes Stubborn Fat", desc: "Eliminates diet-resistant belly fat pockets effectively.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Improved Waistline", desc: "Enhances definition and creates a better abdominal contour.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { title: "Precision Sculpting", desc: "Surgeon-controlled technique for smooth results.", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
    { title: "Minimal Scarring", desc: "Uses tiny incisions that heal discreetly.", icon: "M20 12H4" },
    { title: "Long-lasting Results", desc: "Permanent fat cell removal (with stable weight).", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { title: "Silhouette Blending", desc: "Can be combined with flank liposuction for optimal shape.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }
  ]

  const processSteps = [
    { num: "1", title: "Marking", desc: "Symmetry and contour mapping." },
    { num: "2", title: "Tumescent Infiltration", desc: "Local anaesthetic + adrenaline solution." },
    { num: "3", title: "Hidden Incisions", desc: "Tiny incisions (3–4mm) hidden in natural creases." },
    { num: "4", title: "MicroAire PAL", desc: "Cannula-based fat removal with controlled sculpting for smoother contour." },
    { num: "5", title: "Compression", desc: "Garment application to support shaping." }
  ]

  return (
    <>
      <Head>
        <title>Stomach Liposuction Malaysia | Belly Fat Removal – Dr. Soma</title>
        <meta name="description" content="Stomach Liposuction in Malaysia by Certified Plastic Surgeon. Remove stubborn belly fat and refine waistline using MicroAire PAL." />
      </Head>

      <style jsx global>{`
        .stomach-lipo-page ::selection {
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
      `}</style>

      <main className="stomach-lipo-page bg-white text-zinc-900">
        {/* Hero Section */}
        <section className="relative pt-[50px] pb-[50px] md:pt-[60px] md:pb-[60px] px-6 overflow-hidden border-b border-zinc-100">
          <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50/60 via-zinc-50/20 to-transparent -z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest mb-8 shadow-sm animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                Certified Plastic Surgeon
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Stomach Liposuction in Malaysia.</span> <br />
                <span className="text-zinc-400 hover:text-[#FE7623] transition-colors duration-300 cursor-default">Flatter Abdomen. Cleaner Waistline.</span>
              </h1>
              <p className="text-lg text-zinc-500 leading-relaxed mb-6 max-w-lg animate-fadeInUp opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                Some belly fat remains stubborn even with consistent diet and exercise. Stomach liposuction is a surgeon-performed body contouring procedure designed to remove localized subcutaneous fat from the abdomen and refine the waistline with precise sculpting.
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-lg border-l-2 border-[#FE7623] pl-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.35s', animationFillMode: 'forwards'}}>
                At Dr. Soma Plastic Surgery, every stomach liposuction procedure is performed by Dr. Soma, utilizing advanced <strong className="text-zinc-700">MicroAire Power-Assisted Liposuction (PAL)</strong> for smoother results and more uniform contouring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-8 py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  Book Consultation (WhatsApp)
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-shadow duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <BaseImage
                src="/images/Stomach Liposuction.jpg"
                alt="Stomach Liposuction Malaysia"
                fill
                className="object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex items-center gap-4 group-hover:translate-y-[-5px] transition-transform duration-500">
                  <div className="p-2.5 bg-orange-50 text-[#FE7623] rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-zinc-900">Goal</p>
                    <p className="text-sm font-semibold text-zinc-900">Natural Contour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definition & Areas */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div data-animate="def-1" className={`md:col-span-5 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">What Is Stomach Liposuction?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Stomach liposuction removes excess subcutaneous fat from the abdominal area to improve shape and contour. It is not a weight-loss procedure and does not treat visceral fat (fat around internal organs).
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  It is ideal for patients with stubborn belly fat pockets and reasonable skin elasticity.
                </p>
              </div>

              {/* Areas Grid */}
              <div data-animate="def-2" className={`md:col-span-7 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Common Areas Treated</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatmentAreas.map((area, i) => (
                    <div key={i} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer card-shine">
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-400 group-hover:text-[#FE7623] group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{area.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works & Results */}
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Process */}
            <div data-animate="process" className={`transition-all duration-700 ${isVisible('process') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-8">How Stomach Liposuction Works</h2>
              <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-xs font-bold text-zinc-900 group-hover:bg-[#FE7623] group-hover:text-white group-hover:border-[#FE7623] transition-all duration-300">{step.num}</div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-orange-50/50 border border-orange-100 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                <p className="text-xs text-[#FE7623] font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Removed fat cells do not regenerate, giving long-lasting contour improvement.
                </p>
              </div>
            </div>

            {/* Timeline Card */}
            <div data-animate="timeline" className={`bg-zinc-900 text-white p-8 rounded-2xl shadow-xl h-fit card-3d transition-all duration-700 ${isVisible('timeline') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                When Will I See Results?
              </h3>
              <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute top-2 bottom-2 left-[7px] w-px bg-zinc-700"></div>

                {[
                  { time: "Week 1–2", desc: "Swelling, bruising, firmness.", active: true },
                  { time: "Week 4–6", desc: "Visible reduction in belly volume.", active: false },
                  { time: "Month 3–6", desc: "Final abdominal contour settles as swelling resolves.", active: false }
                ].map((item, i) => (
                  <div key={i} className="relative pl-8 group cursor-pointer hover:translate-x-2 transition-all duration-300">
                    <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-zinc-900 transition-all duration-300 ${item.active ? 'bg-[#FE7623]' : 'bg-zinc-700 group-hover:bg-[#FE7623]'}`}></div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#FE7623] transition-colors duration-300">{item.time}</h4>
                    <p className="text-xs text-zinc-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="benefits-header" className={`text-3xl font-semibold tracking-tight text-center text-zinc-900 mb-12 transition-all duration-700 ${isVisible('benefits-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Benefits of Stomach Liposuction</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} data-animate={`benefit-${i}`} className={`p-6 rounded-xl border border-zinc-200 bg-white shadow-sm card-3d card-shine hover:border-[#FE7623] transition-all duration-700 ${isVisible(`benefit-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-[#FE7623] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} /></svg>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-2">{benefit.title}</h3>
                  <p className="text-xs text-zinc-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Candidates Section */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-5xl mx-auto">
            <h2 data-animate="candidate-header" className={`text-3xl font-semibold tracking-tight text-center text-zinc-900 mb-12 transition-all duration-700 ${isVisible('candidate-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Who Is a Good Candidate?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Good Candidate */}
              <div data-animate="candidate-good" className={`bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm card-3d transition-all duration-700 ${isVisible('candidate-good') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2 bg-green-50 text-green-600 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900">Ideal Candidate</h3>
                </div>
                <ul className="space-y-4">
                  {["Stable weight", "Localised belly fat pockets", "Good skin elasticity", "Non-smoker or willing to stop temporarily", "Realistic expectations"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors duration-300">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Suitable */}
              <div data-animate="candidate-bad" className={`bg-zinc-50 p-8 rounded-2xl border border-zinc-200/60 opacity-90 card-3d transition-all duration-700 ${isVisible('candidate-bad') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2 bg-red-50 text-red-500 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900">Not Suitable If</h3>
                </div>
                <ul className="space-y-4">
                  {["Significant loose skin or muscle separation is the main issue", "Severe obesity", "Poor skin elasticity"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-500 hover:text-zinc-700 transition-colors duration-300">
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tummy Tuck Link */}
            <Link href="/body/tummy-tuck-malaysia" className="group block bg-white border border-zinc-200 rounded-2xl p-6 hover:border-[#FE7623] hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-100 rounded-xl text-zinc-500 group-hover:text-[#FE7623] group-hover:bg-orange-50 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors">Have loose skin or muscle laxity?</h4>
                    <p className="text-sm text-zinc-500 mt-1">If loose skin or abdominal muscle laxity is present, a Tummy Tuck may be recommended instead.</p>
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors">
                  View Tummy Tuck (Abdominoplasty)
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="recovery-header" className={`text-3xl font-semibold tracking-tight text-center text-zinc-900 mb-16 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Recovery Timeline</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center relative">
              {/* Line */}
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-zinc-100 via-[#FE7623]/30 to-zinc-100 z-0"></div>

              {[
                { time: "Immediately", title: "Day 1", desc: "Compression garment, mild soreness, walking encouraged.", icon: true },
                { time: "Wk 1", title: "Back to Work", desc: "Return to desk work for many patients." },
                { time: "Wk 2-3", title: "Swelling Drops", desc: "Swelling reduces, light walking encouraged." },
                { time: "Wk 4-6", title: "Resume Exercise", desc: "Resume exercise with surgeon approval." },
                { time: "Mo 3-6", title: "Final Result", desc: "Final shape revealed." }
              ].map((step, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`relative z-10 group cursor-pointer hover:-translate-y-2 transition-all duration-500 ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-zinc-100 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:border-[#FE7623] group-hover:shadow-xl group-hover:shadow-orange-500/10 transition-all duration-300">
                    {step.icon ? (
                      <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    ) : (
                      <span className="text-sm font-bold text-zinc-400 group-hover:text-[#FE7623] transition-colors duration-300">{step.time}</span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-1 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h3>
                  <p className="text-xs text-zinc-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scientific Evidence */}
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-blue-50 rounded-lg animate-pulse-slow">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Scientific Evidence & References</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Harvard Medical School", url: "https://www.health.harvard.edu/", desc: "Describes liposuction as a safe method to remove subcutaneous fat when performed by qualified surgeons.", color: "from-red-500 to-red-600" },
                { name: "Mayo Clinic", url: "https://www.mayoclinic.org/", desc: "Confirms liposuction permanently removes fat cells from targeted areas and results are best maintained with stable weight.", color: "from-blue-500 to-blue-600" },
                { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/", desc: "Literature supports that Power-Assisted Liposuction can improve efficiency and contour uniformity with controlled technique.", color: "from-green-500 to-green-600" }
              ].map((source, i) => (
                <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl border border-zinc-200 bg-white card-3d card-shine hover:border-[#FE7623] group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${source.color} animate-pulse`}></div>
                      <span className="text-sm font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{source.name}</span>
                    </div>
                    <svg className="w-3 h-3 text-zinc-400 group-hover:text-[#FE7623] group-hover:rotate-45 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">{source.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg animate-float">
                <svg className="w-8 h-8 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-zinc-900">Frequently Asked Questions</h2>
                <p className="text-sm text-zinc-500">Get answers to common concerns about stomach liposuction</p>
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
                    <h5 className="text-sm sm:text-base text-zinc-800 font-medium flex-1">{faq.question}</h5>
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
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl animate-float"></div>

          <div data-animate="cta" className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6 hover:text-[#FE7623] transition-colors duration-300 cursor-default">Get a flatter abdomen with surgeon-performed stomach liposuction.</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              Dr. Soma combines medical precision, MicroAire PAL technology, and safety-first technique to deliver natural, long-lasting waistline refinement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/60142616007" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat with Us on WhatsApp
              </a>
              <Link href="/contact-us" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-10 py-5 rounded-full text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                Book a Consultation Today
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* SEO Tags */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {["stomach liposuction", "abdominal liposuction", "subcutaneous fat", "tumescent anesthesia", "MicroAire PAL", "compression garment", "body contouring surgery"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-50 rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20">{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
