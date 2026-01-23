import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function FatTransferMalaysia() {
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
    { question: "What is fat transfer surgery?", answer: "Fat transfer is a surgical procedure that removes fat from one area of the body and injects it into another area to restore volume and improve contour." },
    { question: "Is fat transfer permanent?", answer: "The fat that survives after the first few months is generally permanent, as long as body weight remains stable." },
    { question: "Is fat transfer safe?", answer: "When performed by a certified plastic surgeon in a licensed medical facility, fat transfer is considered a safe and established procedure." },
    { question: "How long does recovery take?", answer: "Most patients return to normal daily activities within 1–2 weeks, with final results visible after several months." },
    { question: "Will the transferred fat feel natural?", answer: "Yes. Because it is your own tissue, transferred fat feels soft and natural once healed." },
    { question: "Can fat transfer be combined with other procedures?", answer: "Yes. It is commonly combined with liposuction, body contouring, or facial rejuvenation procedures." },
    { question: "How much fat survives after transfer?", answer: "Typically, 60–80% of transferred fat survives long term, depending on technique and individual healing." },
    { question: "Who should not undergo fat transfer?", answer: "Patients with very low body fat, unstable weight, or uncontrolled medical conditions may not be suitable candidates." }
  ]

  const processSteps = [
    { title: "Harvested", desc: "Fat is removed using gentle liposuction from areas such as the abdomen, flanks, thighs, or hips" },
    { title: "Processed", desc: "The harvested fat is purified to remove excess fluid, oil, and damaged cells" },
    { title: "Injected", desc: "The purified fat is injected in small amounts using specialised cannulas" }
  ]

  const treatmentAreas = [
    {
      title: "Facial Fat Transfer",
      desc: "Restores youthful volume to cheeks, under-eye hollows, temples, nasolabial folds, jawline and chin. Improves facial softness and skin quality."
    },
    {
      title: "Breast Fat Transfer",
      desc: "Provides mild to moderate volume enhancement, correction of asymmetry, contour improvement after implant removal, and refinement after reconstruction."
    },
    {
      title: "Buttock Fat Transfer",
      desc: "Enhances buttock shape and projection, fills hip dips, and improves overall lower-body proportion."
    },
    {
      title: "Hand Rejuvenation",
      desc: "Restores volume to aging hands, reducing the appearance of veins and tendons while improving skin texture."
    },
    {
      title: "Body Contour Refinement",
      desc: "Corrects contour irregularities after liposuction, massive weight loss, trauma or surgery."
    }
  ]

  const benefits = [
    "Uses your own natural tissue",
    "No risk of allergic reaction",
    "Improves contour at donor site",
    "Soft, realistic appearance",
    "Long-lasting results",
    "Can improve skin quality over time"
  ]

  const candidateChecklist = [
    "Have adequate donor fat",
    "Are in good overall health",
    "Maintain a stable body weight",
    "Want natural-looking volume enhancement",
    "Understand that some fat resorption is normal"
  ]

  const notIdeal = [
    "Extremely low body fat",
    "Seeking dramatic size changes in a single procedure"
  ]

  const limitations = [
    "Results are not instant due to swelling and fat settling",
    "Some fat loss is unavoidable",
    "Large volume increases may require staged procedures",
    "Weight fluctuations can affect long-term outcomes"
  ]

  return (
    <>
      <Head>
        <title>Fat Transfer Malaysia | Natural Volume Restoration – Dr. Soma</title>
        <meta name="description" content="Fat transfer surgery in Malaysia by Dr. Soma. Natural volume restoration using your own body fat for face, breast, buttocks and body contouring. Certified plastic surgeon with hospital-grade safety. Book consultation today." />
      </Head>

      <style jsx global>{`
        .fattransfer-page ::selection {
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

      <main className="fattransfer-page bg-white text-zinc-900 overflow-x-hidden">
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
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Fat Transfer in Malaysia.</span> <br />
                <span className="text-[#FE7623] text-[18px] md:text-[28px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">Natural Volume Restoration Using Your Own Body Fat</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>Fat transfer, also called fat grafting or autologous fat transfer, is a surgical technique that uses your own body fat to restore volume, improve contour, and enhance proportions in targeted areas. Instead of synthetic fillers or implants, the procedure relies on living fat cells harvested from one part of the body and carefully transferred to another.</p>
                <p style={{fontSize: '14px', marginTop: '12px'}}>In Malaysia, fat transfer is a regulated surgical procedure. It must be performed by a registered medical practitioner in a licensed medical facility under standards governed by the Ministry of Health Malaysia, which oversees patient safety, facility licensing, and professional accountability.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Fat%20Transfer" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
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
                alt="Fat Transfer Malaysia"
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
                      <p className="text-sm md:text-base font-semibold text-zinc-900">Natural Volume Restoration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Fat Transfer Section */}
        <section id="learn-more" className="py-8 md:py-12 px-6 bg-white border-b border-zinc-100 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div data-animate="def-1" className={`md:col-span-6 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">What Is Fat Transfer?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  Fat transfer is a multi-step surgical process where fat is gently removed from areas with excess fat, purified, and reinjected into areas that need volume or contour improvement. Because the fat comes from your own body, the risk of allergic reaction or rejection is extremely low.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  Clinically, fat grafting is described as a reconstructive and aesthetic technique that improves contour, soft-tissue quality, and volume when patient selection and technique are appropriate. Major institutions such as the Mayo Clinic recognise fat grafting as a well-established option in both cosmetic and reconstructive surgery.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {processSteps.map((step, i) => (
                    <div key={i} className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-center">
                      <h4 className="text-sm font-bold text-zinc-900 mb-3">{step.title}</h4>
                      <p className="text-xs text-zinc-500">{step.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <p className="text-sm text-zinc-700"><strong>Note:</strong> Fat transfer is not a weight-loss procedure. Its purpose is reshaping and volume restoration, not fat reduction.</p>
                </div>
              </div>

              {/* Why Fat Transfer Is Preferred */}
              <div data-animate="def-2" className={`md:col-span-6 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">Why Fat Transfer Is Increasingly Preferred</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Many patients prefer fat transfer over artificial fillers or implants for one simple reason: it feels and looks natural. Transferred fat behaves like normal tissue once it establishes blood supply, integrating into the body rather than sitting as a foreign material.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Another reason is efficiency. One procedure can both remove unwanted fat and enhance another area. This dual benefit is especially appealing to patients seeking balanced, proportionate results rather than dramatic changes.
                </p>
                <div className="space-y-3">
                  {benefits.map((item, i) => (
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

        {/* Areas Commonly Treated */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="areas-header" className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible('areas-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Areas Commonly Treated With Fat Transfer</h2>
              <p className="text-zinc-500 text-sm">Fat transfer can be used in several parts of the body, depending on individual anatomy and goals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatmentAreas.map((area, i) => (
                <div key={i} data-animate={`area-${i}`} className={`p-6 bg-white rounded-2xl border border-zinc-200 hover:border-[#FE7623] transition-all duration-300 group card-3d ${isVisible(`area-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-[#FE7623] transition-all duration-300">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-[#FE7623] transition-colors duration-300">{area.title}</h3>
                  <p className="text-sm text-zinc-500">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Fat Transfer Is Performed */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="process-header" className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible('process-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">How Fat Transfer Surgery Is Performed</h2>
              <p className="text-zinc-500 text-sm">Fat transfer is a carefully staged procedure that focuses on cell survival and precision.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "Fat Harvesting", desc: "Fat is removed using gentle liposuction from areas such as the abdomen, flanks, thighs, or hips. Low-pressure techniques are used to preserve fat cell viability." },
                { num: "2", title: "Fat Processing", desc: "The harvested fat is purified to remove excess fluid, oil, and damaged cells. Only healthy fat cells are selected for transfer." },
                { num: "3", title: "Fat Injection", desc: "The purified fat is injected in small amounts using specialised cannulas. This layered placement improves blood supply and increases long-term fat survival." }
              ].map((step, i) => (
                <div key={i} data-animate={`step-${i}`} className={`relative bg-zinc-50 pt-14 pb-8 px-8 rounded-2xl border border-zinc-200 card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`step-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="absolute -top-4 left-6 px-7 py-2 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 z-10">
                    Step {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-4 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h3>
                  <p className="text-sm text-zinc-500">{step.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-zinc-500 mt-8 text-center max-w-2xl mx-auto">
              According to the American Society of Plastic Surgeons, careful harvesting, processing, and placement are the most important factors influencing fat graft survival and safety.
            </p>
          </div>
        </section>

        {/* Fat Survival Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,98,47,0.15),transparent_40%)]"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div data-animate="survival-header" className={`text-center mb-12 transition-all duration-700 ${isVisible('survival-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">How Much Fat Actually Survives?</h2>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto">Not all transferred fat survives. This is a normal and expected biological process.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 hover:border-[#FE7623]/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#FE7623] font-bold text-3xl">60–80%</span>
                </div>
                <p className="text-zinc-300 text-sm">Of transferred fat survives long term</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-800 hover:border-[#FE7623]/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-zinc-400 font-bold text-xl">Natural Process</span>
                </div>
                <p className="text-zinc-300 text-sm">The remaining fat is naturally absorbed by the body over a few months</p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 mt-8 text-center max-w-2xl mx-auto">
              Because of this, surgeons often slightly overfill the area to compensate for expected resorption. Final results are assessed after swelling resolves and fat stabilises, usually by 3–6 months.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col w-full">
              <h2 data-animate="compare-header" className={`text-2xl font-semibold mb-4 text-center text-[#FE7623] transition-all duration-700 ${isVisible('compare-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Fat Transfer vs Fillers vs Implants</h2>
              <p className="text-zinc-500 text-sm text-center mb-10 max-w-2xl mx-auto">Fat transfer sits between fillers and implants, offering a natural middle ground.</p>

              <div data-animate="compare-table" className={`w-full border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible('compare-table') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Header */}
                <div className="grid grid-cols-4 bg-gradient-to-r from-zinc-50 to-orange-50/30 px-3 py-4 md:px-8 md:py-6 border-b border-zinc-200 text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider text-zinc-500 gap-2">
                  <div>Feature</div>
                  <div className="text-[#FE7623]">Fat Transfer</div>
                  <div>Dermal Fillers</div>
                  <div>Implants</div>
                </div>

                {/* Rows */}
                {[
                  { feat: "Material", transfer: "Your own fat", fillers: "Synthetic", implants: "Medical-grade implant" },
                  { feat: "Longevity", transfer: "Long-term", fillers: "Temporary", implants: "Long-term" },
                  { feat: "Look & Feel", transfer: "Very natural", fillers: "Natural but limited", implants: "More structured" },
                  { feat: "Volume Increase", transfer: "Mild to moderate", fillers: "Small", implants: "Moderate to large" },
                  { feat: "Foreign Material", transfer: "No", fillers: "Yes", implants: "Yes" },
                  { feat: "Additional Benefit", transfer: "Body contouring", fillers: "None", implants: "None" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 px-3 py-4 md:px-8 md:py-6 border-b border-zinc-100 items-center text-[10px] sm:text-[11px] md:text-sm gap-2 hover:bg-gradient-to-r hover:from-orange-50/30 hover:to-white transition-all duration-300 group cursor-pointer">
                    <div className="font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{row.feat}</div>
                    <div className="text-zinc-600 group-hover:text-[#FE7623] group-hover:font-semibold transition-all duration-300">{row.transfer}</div>
                    <div className="text-zinc-600 group-hover:text-zinc-900 transition-colors duration-300">{row.fillers}</div>
                    <div className="text-zinc-600 group-hover:text-zinc-900 transition-colors duration-300">{row.implants}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="recovery-header" className={`text-center mb-16 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Recovery Timeline After Fat Transfer</h2>
              <p className="text-zinc-500 text-sm">Recovery depends on both the donor and recipient areas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
              {[
                { time: "3–5 Days", title: "Initial Phase", desc: "Swelling, mild bruising, soreness" },
                { time: "1–2 Weeks", title: "Early Recovery", desc: "Most patients return to desk work" },
                { time: "3–4 Weeks", title: "Healing", desc: "Swelling reduces significantly" },
                { time: "3 Months", title: "Stabilisation", desc: "Fat stabilisation begins" },
                { time: "6 Months", title: "Final Results", desc: "Final results visible" }
              ].map((step, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`relative bg-zinc-50 pt-14 pb-6 px-6 rounded-2xl border border-zinc-200 card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="absolute -top-4 left-4 px-4 py-2 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 z-10">
                    {step.time}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 mb-2 group-hover:text-[#FE7623] transition-colors duration-300">{step.title}</h3>
                  <p className="text-sm text-zinc-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Good Candidates Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div data-animate="candidate-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl order-2 lg:order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('candidate-image') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <BaseImage
                src="/images/fatgrafting32.jpg"
                alt="Fat Transfer Consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
            </div>

            {/* Content Section */}
            <div data-animate="candidate-content" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('candidate-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Who Is a Good Candidate for Fat Transfer?</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                You may be a suitable candidate if you meet the following criteria.
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
                <h4 className="text-sm font-bold text-red-700 mb-4">Fat Transfer May Not Be Ideal For</h4>
                <div className="space-y-2">
                  {notIdeal.map((item, i) => (
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

        {/* Limitations Section */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div data-animate="limits-header" className={`text-center mb-12 transition-all duration-700 ${isVisible('limits-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Limitations and Honest Trade-Offs</h2>
              <p className="text-zinc-500 text-sm">Fat transfer is powerful, but it has limitations. Understanding these realities leads to better satisfaction and realistic expectations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {limitations.map((item, i) => (
                <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                  <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & FAQ Section */}
        <section className="pt-8 pb-16 md:pt-24 md:pb-32 px-6 bg-zinc-50 overflow-hidden">
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
                <p className="text-zinc-400 text-sm mb-6">Fat transfer cost varies depending on:</p>
                <ul className="space-y-4 mb-8">
                  {["Treatment area(s)", "Volume of fat transferred", "Donor site locations", "Complexity of procedure", "Hospital stay duration"].map((item, i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Fat%20Transfer" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
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
                  <p className="text-sm text-zinc-500">Get answers to common concerns about fat transfer</p>
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
        <section className="pt-5 pb-8 md:pt-7 md:pb-20 px-6 bg-gradient-to-b from-white to-zinc-50 border-t border-zinc-200 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-row items-start gap-3 mb-7">
              <div className="p-2 bg-blue-50 rounded-lg animate-pulse-slow flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-widest">Safety and Regulation in Malaysia</h3>
                <p className="text-zinc-500 text-sm mt-1">In Malaysia, fat transfer procedures fall under regulated surgical services.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Practitioner Registration", desc: "All procedures must be performed by registered medical practitioners with appropriate credentials.", color: "from-blue-500 to-blue-600", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
                { name: "Facility Licensing", desc: "Surgical facilities must be licensed by the Ministry of Health Malaysia with proper safety protocols.", color: "from-green-500 to-green-600", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                { name: "Postoperative Care", desc: "Proper postoperative care standards following internationally accepted surgical safety and recovery principles.", color: "from-purple-500 to-purple-600", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl animate-float"></div>

          <div data-animate="cta" className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#FE7623] mb-6 transition-colors duration-300 cursor-default px-4">Final Thoughts</h2>
            <p className="text-base sm:text-lg text-zinc-500 mb-6 max-w-3xl mx-auto px-4">
              Fat transfer in Malaysia offers a refined, natural approach to volume restoration and body contouring using your own tissue.
            </p>
            <p className="text-sm text-zinc-600 mb-10 pb-[7px] max-w-3xl mx-auto px-4">
              When performed with proper technique, realistic planning, and strict medical standards, it delivers results that age with your body rather than fighting against it. The procedure rewards patience, thoughtful surgical planning, and respect for anatomy — qualities that separate good outcomes from exceptional ones.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Fat%20Transfer" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
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
              {["fat transfer Malaysia", "fat grafting", "autologous fat transfer", "natural volume restoration", "body contouring"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-50 rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20" style={{animationDelay: `${i * 100}ms`}}>{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
