import Head from "next/head"
import Link from "next/link"
import BaseImage from "@/components/BaseImage"
import { useState, useEffect } from "react"

export default function ChinLiposuctionMalaysia() {
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
    { question: "What is chin liposuction?", answer: "A surgical procedure that removes excess subcutaneous fat under the chin to reduce double chin and improve jawline definition." },
    { question: "How is chin liposuction done?", answer: "Small hidden incisions (2-3mm) are made, tumescent solution is infiltrated, and fat is gently removed with a fine cannula using controlled sculpting for smooth, natural contour." },
    { question: "When will I see results?", answer: "Many patients see visible improvement by 3–4 weeks, with final refinement around 2–3 months as swelling fully resolves." },
    { question: "How long do results last?", answer: "Results are long-lasting because removed fat cells do not regenerate. Jawline definition is permanent provided weight remains stable." },
    { question: "Does chin liposuction tighten loose skin?", answer: "It can help skin retract if elasticity is good. If loose skin is significant, tightening procedures may be recommended." },
    { question: "Is it painful?", answer: "Discomfort is usually mild to moderate and manageable with medication. Tightness and soreness are common early on rather than severe pain." },
    { question: "How long is downtime?", answer: "Most patients return to desk work in 1–3 days. A compression strap is worn as instructed. Full recovery takes about 2–3 months." },
    { question: "Will there be scars?", answer: "Incisions are tiny (2-3mm) and placed discreetly under the chin or near the ears. Scars typically fade significantly over time." },
    { question: "Can chin liposuction be combined with other procedures?", answer: "Yes. It is often combined with neck liposuction or face procedures for comprehensive facial contouring. This is discussed during consultation." },
    { question: "Is chin liposuction safe?", answer: "When performed by a certified plastic surgeon in a proper medical facility, chin liposuction is generally safe. Risks exist like any surgery and are explained during consultation." }
  ]

  const treatmentAreas = [
    { name: "Submental Area", desc: "Directly under the chin (double chin)." },
    { name: "Upper Neck Contour", desc: "Smoothing the transition to the neck." },
    { name: "Jawline Border", desc: "Blending for a sharper profile (selected patients)." }
  ]

  const benefits = [
    { title: "Effective Fat Reduction", desc: "Directly removes stubborn submental fat that creates the \"double chin\" look.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Defined Neck Angle", desc: "Improves the side profile by creating a sharper angle between the neck and chin.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { title: "Minimal Downtime", desc: "Quick recovery compared to larger body areas, with most returning to desk work in days.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
  ]

  const uspPoints = [
    { title: "Performed Only by a Certified Plastic Surgeon", desc: "Ensuring anatomical expertise and safety." },
    { title: "Symmetry-Focused Technique", desc: "Careful marking and feathering to ensure the jawline looks balanced." },
    { title: "Conservative Sculpting", desc: "Avoiding over-reduction to prevent a skeletal or unnatural look." },
    { title: "Minimal & Discreet Scarring", desc: "Incisions are placed in hidden shadows under the chin or behind ears." }
  ]

  const processSteps = [
    { num: "1", title: "Assessment & Marking", desc: "Checking fat thickness and skin elasticity to ensure smooth retraction." },
    { num: "2", title: "Feathering Technique", desc: "Critical blending at the edges for a smooth, natural jawline transition." }
  ]

  const resultsTimeline = [
    { time: "Week 1–2", desc: "Swelling and mild bruising. Area feels firm." },
    { time: "Week 3–4", desc: "Noticeable jawline improvement as swelling subsides." },
    { time: "Week 6–8", desc: "Sharper contour. Tissues settle into new shape." },
    { time: "Month 3", desc: "Final refinement. Skin elasticity determines final tightness." }
  ]

  const testimonials = [
    { text: "My double chin is gone and my jawline looks sharper in photos. The result looks natural, not obvious.", name: "Alya, 28" },
    { text: "Professional and safe. The swelling settled gradually and my side profile looks so much better now.", name: "Denise, 42" },
    { text: "I was slim but had a stubborn double chin. This finally fixed it without changing my natural face.", name: "Amir, 35" }
  ]

  return (
    <>
      <Head>
        <title>Chin Liposuction Malaysia | Double Chin Removal & Jawline – Dr. Soma</title>
        <meta name="description" content="Chin Liposuction in Malaysia by Certified Plastic Surgeon. Remove double chin fat and define the jawline for a sharper neck angle and natural profile." />
      </Head>

      <style jsx global>{`
        .chin-lipo-page ::selection {
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

        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce 2s ease-in-out infinite; }

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

      <main className="chin-lipo-page bg-white text-zinc-900">
        {/* Hero Section */}
        <section className="relative pt-[50px] pb-[50px] md:pt-[60px] md:pb-[60px] px-6 overflow-hidden border-b border-zinc-100" style={{backgroundColor: '#F8FAFC'}}>
          <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50/60 via-[#F8FAFC] to-transparent -z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-[10px] font-semibold uppercase tracking-widest mb-4 md:mb-8 shadow-sm animate-fadeInUp opacity-0 hover:border-[#FE7623] hover:bg-orange-50 transition-all duration-300" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE7623] animate-pulse"></span>
                Certified Plastic Surgeon
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-3 md:mb-6 animate-fadeInUp opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Chin Liposuction in Malaysia.</span> <br />
                <span className="text-[#FE7623] text-[20px] md:text-[30px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">Sharper Jawline. Cleaner Neck Angle.</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>A double chin can appear even in slim patients. Genetics and facial structure can soften the neck angle, making the face look heavier. We refine the jawline using controlled sculpting with subtle precision, symmetry, and natural definition.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Chin%20Liposuction%20treatment" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
                  Book Consultation
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </a>
                <a href="#process" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-white border-2 border-zinc-200 text-zinc-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] group">
                  How It Works
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
                <span className="text-sm text-zinc-600 font-medium">Trusted by <span className="text-[#FE7623] font-bold">500+</span> happy patients</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-2 lg:order-2 relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom transition-all duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.1)'}}>
              <BaseImage
                src="/images/Chin Liposuction.jpg"
                alt="Chin Liposuction Malaysia"
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
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">Goal</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">Natural Jawline Definition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definition & Areas */}
        <section className="pt-4 pb-8 md:py-12 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
              <div data-animate="def-1" className={`md:col-span-5 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-2xl font-semibold tracking-tight text-[#FE7623] mb-3 md:mb-6">What Is Chin Liposuction?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-2 md:mb-3 text-justify">
                  Chin liposuction (submental liposuction) is a surgical procedure that removes excess subcutaneous fat under the chin and along the upper neck. It improves the neck-chin angle and lower face contour balance.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium text-justify">
                  It is not a weight-loss procedure. It is a precision sculpting technique for localized fat pockets that do not respond to diet or exercise.
                </p>
              </div>

              <div data-animate="def-2" className={`md:col-span-7 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">Common Treatment Zones</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatmentAreas.map((area, i) => (
                    <div key={i} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer card-shine">
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-zinc-400 group-hover:text-[#FE7623] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        <span className="text-sm font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{area.name}</span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-2 pl-9">{area.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Method & Results Timeline with Image 1 */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div data-animate="method" className={`transition-all duration-700 ${isVisible('method') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-2xl font-semibold tracking-tight text-[#FE7623] mb-6">How Chin Liposuction Works</h2>
              <p className="text-sm text-zinc-600 leading-relaxed mb-8">
                The procedure begins with precise marking of treatment zones. After tumescent infiltration (anaesthetic solution), tiny hidden incisions (2–3mm) are used to gently remove fat with a fine cannula.
              </p>

              <div className="space-y-5 mb-12">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex flex-row items-start gap-4 group cursor-pointer hover:translate-x-2 transition-all duration-300">
                    <div className="w-8 h-8 min-w-[32px] rounded-full bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0 text-xs font-bold text-zinc-900 group-hover:bg-[#FE7623] group-hover:text-white group-hover:border-[#FE7623] transition-all duration-300">{step.num}</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-[#FE7623] mb-6">When Will I See Results?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resultsTimeline.map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-zinc-200 hover:border-[#FE7623] hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <span className="text-xs font-bold text-[#FE7623] uppercase tracking-wider">{item.time}</span>
                    <p className="text-xs text-zinc-600 mt-2 group-hover:text-zinc-900 transition-colors duration-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image 1 */}
            <div data-animate="img-1" className={`relative rounded-2xl overflow-hidden shadow-2xl h-[600px] lg:sticky lg:top-8 transition-all duration-700 group ${isVisible('img-1') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <BaseImage
                src="/images/Chin Liposuction 1.jpg"
                alt="Side Profile Aesthetic"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-zinc-900/20"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-xl border border-zinc-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-50 text-[#FE7623] rounded-lg mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black">Long-Lasting Results</h4>
                    <p className="text-xs text-black mt-1 leading-relaxed">
                      Removed fat cells do not regenerate. Jawline definition is permanent provided weight remains stable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="benefits-header" className={`text-2xl font-semibold tracking-tight text-center text-[#FE7623] mb-12 transition-all duration-700 ${isVisible('benefits-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Benefits of Chin Liposuction</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} data-animate={`benefit-${i}`} className={`p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm card-3d card-shine hover:border-[#FE7623] transition-all duration-700 ${isVisible(`benefit-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-[#FE7623] mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} /></svg>
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-900 mb-3">{benefit.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USP Section with Image 2 */}
        <section className="py-8 md:py-24 px-6 bg-zinc-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image 2 */}
            <div data-animate="img-2" className={`order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl h-[500px] border border-zinc-800 transition-all duration-700 ${isVisible('img-2') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <BaseImage
                src="/images/Chin Liposuction 2.jpg"
                alt="Medical Consultation Aesthetic"
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FE7623]/20 border border-[#FE7623]/50 text-[#FE7623] text-[10px] font-medium uppercase tracking-widest mb-2">
                  Safety First
                </div>
                <h3 className="text-lg font-medium">Hospital-Grade Standards</h3>
                <p className="text-sm text-white mt-2 max-w-xs">Performed in a proper medical facility with comprehensive monitoring.</p>
              </div>
            </div>

            {/* Content */}
            <div data-animate="usp" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('usp') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-2xl font-semibold tracking-tight text-white mb-8">What Makes Dr. Soma&apos;s Chin Liposuction Different?</h2>

              <div className="space-y-6">
                {uspPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#FE7623] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-[#FE7623] transition-colors duration-300">{point.title}</h3>
                      <p className="text-xs text-zinc-400 mt-1">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-zinc-800">
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Chin%20Liposuction%20treatment" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FE7623] hover:text-white transition-colors group">
                  Consult Dr. Soma about your goals
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-8 md:py-24 bg-white border-t border-zinc-100">
          <div className="flex containers w-full">
            <div className="flex flex-col w-full">
              <div data-animate="comparison" className={`w-full transition-all duration-700 ${isVisible('comparison') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-2xl font-semibold mb-10 text-center text-[#FE7623]">Chin Liposuction vs Non-Surgical</h2>

                <div className="w-full border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Header */}
                  <div className="grid grid-cols-3 bg-zinc-50 px-6 py-6 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-para-black">
                    <div>Feature</div>
                    <div className="text-[#FE7623]">Chin Liposuction</div>
                    <div>Non-Surgical</div>
                  </div>

                  {/* Rows */}
                  {[
                    { feat: "Fat Removal", lipo: "Direct & Immediate", nonsurg: "Variable & Gradual", lipoHighlight: false },
                    { feat: "Results", lipo: "Predictable Contour", nonsurg: "Depends on response", lipoHighlight: false },
                    { feat: "Best For", lipo: "Moderate fat & good skin", nonsurg: "Small pockets, mild concerns", lipoHighlight: false }
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-3 px-6 py-6 border-b border-zinc-100 items-center text-sm hover:bg-zinc-50 transition-colors">
                      <div className="font-medium text-header-black">{row.feat}</div>
                      <div className={`flex items-center gap-2 ${row.lipoHighlight ? 'text-[#FE7623]' : 'text-para-black'}`}>
                        {row.lipoHighlight && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                        {row.lipo}
                      </div>
                      <div className="text-para-black">{row.nonsurg}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-center text-zinc-400 mt-6 max-w-2xl mx-auto">For patients wanting a more defined, reliable jawline change, surgeon-performed chin liposuction is often the most direct option.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Candidates & Recovery */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Candidates */}
            <div data-animate="candidates" className={`transition-all duration-700 ${isVisible('candidates') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-2xl font-semibold tracking-tight text-[#FE7623] mb-8">Who Is a Good Candidate?</h2>
              <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-6">Ideal Candidate</h3>
                <ul className="space-y-4 mb-8">
                  {["Localised fat under the chin", "Good skin elasticity (helps skin tighten smoothly)", "Stable weight & realistic expectations", "Non-smoker or willing to stop temporarily"].map((item, i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-700 hover:text-zinc-900 transition-colors duration-300">
                      <svg className="w-6 h-6 min-w-[24px] text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-zinc-200 pt-6">
                  <h4 className="text-lg font-bold text-zinc-900 mb-4">Not Suitable If</h4>
                  <ul className="space-y-3">
                    {["Main issue is loose skin rather than fat", "Significant neck banding or muscle laxity"].map((item, i) => (
                      <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-500 hover:text-zinc-700 transition-colors duration-300">
                        <svg className="w-6 h-6 min-w-[24px] text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Recovery Timeline */}
            <div data-animate="recovery" className={`transition-all duration-700 ${isVisible('recovery') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-2xl font-semibold tracking-tight text-[#FE7623] mb-8">Post-Operative Recovery</h2>
              <div className="relative space-y-8 pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-zinc-200">
                {[
                  { time: "Immediately", desc: "Chin compression strap applied. Mild soreness. Walking encouraged same day.", active: true },
                  { time: "Week 1", desc: "Most swelling noticeable. Compression strap worn as instructed. Desk work possible in 1–3 days.", active: false },
                  { time: "Week 2", desc: "Bruising improves significantly. Jawline begins to look defined. Light walking encouraged.", active: false },
                  { time: "Month 2–3", desc: "Final refinement. Skin settles into final contour and stable result.", active: false }
                ].map((step, i) => (
                  <div key={i} className="relative group cursor-pointer hover:translate-x-2 transition-all duration-300">
                    <div className={`absolute -left-[29px] top-1 w-6 h-6 rounded-full bg-white border-2 z-10 transition-colors duration-300 ${step.active ? 'border-[#FE7623]' : 'border-zinc-200 group-hover:border-[#FE7623]'}`}></div>
                    <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{step.time}</h4>
                    <p className="text-xs text-zinc-500 mt-1">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8 md:py-24 px-6 bg-white border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="testimonial-header" className={`text-2xl font-semibold text-[#FE7623] text-center mb-12 transition-all duration-700 ${isVisible('testimonial-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Patient Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => (
                <div key={i} data-animate={`testimonial-${i}`} className={`p-8 rounded-2xl bg-white shadow-sm border border-zinc-100 card-3d card-shine transition-all duration-700 ${isVisible(`testimonial-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="flex text-[#FE7623] mb-4 gap-1.5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Guide */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 data-animate="pricing-header" className={`text-2xl font-semibold text-[#FE7623] mb-6 transition-all duration-700 ${isVisible('pricing-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Pricing Guide</h2>
            <p className="text-sm text-zinc-500 mb-8">Cost varies depending on complexity and time required.</p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 text-left">
              <h4 className="text-sm font-semibold text-zinc-900 mb-4">Cost Factors Include:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Amount of submental fat", "Requirement for jawline blending", "Operating time", "Facility & anaesthesia fees"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-600 hover:text-[#FE7623] transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-200 text-center">
                <p className="text-sm font-medium text-zinc-900">A full quotation is provided after consultation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Evidence */}
        <section className="py-12 md:py-24 px-6 bg-gradient-to-b from-zinc-50 to-white border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-row items-start gap-3 mb-10">
              <div className="p-2 bg-blue-50 rounded-lg animate-pulse-slow flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-widest flex-1">Scientific Evidence & References</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Harvard Medical School", url: "https://www.health.harvard.edu/", desc: "Describes liposuction as a safe method to remove localized subcutaneous fat when performed by qualified surgeons.", color: "from-red-500 to-red-600" },
                { name: "Mayo Clinic", url: "https://www.mayoclinic.org/", desc: "Confirms liposuction removes fat cells from targeted areas and results are best maintained with stable weight.", color: "from-blue-500 to-blue-600" },
                { name: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/", desc: "Literature on submental liposuction focusing on safe fat removal, contour refinement, and patient satisfaction.", color: "from-green-500 to-green-600" }
              ].map((source, i) => (
                <a key={i} href={source.url} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl border border-zinc-200 bg-white card-3d card-shine hover:border-[#FE7623] group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${source.color} animate-pulse`}></div>
                      <span className="text-sm font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{source.name}</span>
                    </div>
                    <svg className="w-4 h-4 text-zinc-400 group-hover:text-[#FE7623] group-hover:rotate-45 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-700 transition-colors duration-300">{source.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pt-0 pb-8 md:pt-0 md:pb-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg animate-float">
                <svg className="w-8 h-8 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#FE7623]">Frequently Asked Questions</h2>
                <p className="text-sm text-zinc-500">Get answers to common concerns about chin liposuction</p>
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
                    className={`w-full flex items-start md:items-center justify-between py-3 px-4 text-left group transition-all duration-300 ${
                      openFaq === index ? 'bg-gradient-to-r from-orange-50/50 to-white' : 'hover:bg-zinc-50/50'
                    }`}
                    onClick={() => toggleFaq(index)}
                  >
                    <h4 className={`text-sm font-semibold transition-colors duration-300 pr-4 flex-1 ${
                      openFaq === index ? 'text-[#FE7623]' : 'text-zinc-800 group-hover:text-[#FE7623]'
                    }`}>{faq.question}</h4>
                    <span className="flex-shrink-0 min-w-[24px] text-xl sm:text-2xl font-light transition-all duration-300 text-[#FE7623]">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 pb-4 pt-1">
                      <div className="text-sm text-zinc-600 leading-relaxed border-l-2 border-[#FE7623]/20 pl-4">
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
        <section className="pt-0 pb-8 md:pt-0 md:pb-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl animate-float"></div>

          <div data-animate="cta" className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-[#FE7623] mb-6 transition-colors duration-300 cursor-default">Refine your jawline with surgeon-performed liposuction.</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              Dr. Soma combines medical precision, careful sculpting, and safety-first technique to deliver a sharper, natural-looking neck and jawline contour.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 md:px-0">
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Chin%20Liposuction%20treatment" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-12 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Chat with Us on WhatsApp
              </a>
              <Link href="/contact-us" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white text-zinc-900 border-2 border-zinc-200 px-12 py-5 rounded-full text-base font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] hover:shadow-xl group">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Book Consultation
              </Link>
            </div>

            {/* SEO Tags */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {["chin liposuction", "submental liposuction", "double chin removal", "jawline contouring", "subcutaneous fat", "tumescent anesthesia", "compression strap", "neck contour"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-50 rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20">{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
