import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function BreastAugmentationMalaysia() {
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
    { question: "Is breast augmentation surgery painful?", answer: "Most patients experience moderate discomfort for the first 3–5 days, managed with prescribed medication. Dr. Soma uses muscle-sparing techniques that reduce post-operative pain." },
    { question: "How do I choose the right implant size?", answer: "During your consultation, Dr. Soma uses 3D imaging and sizers to help visualise outcomes. The goal is to match your body frame, lifestyle, and personal preference for a natural result." },
    { question: "Will my breast implants look natural?", answer: "Yes — when placed correctly by a certified plastic surgeon, implants look and feel natural. Dr. Soma selects the appropriate implant profile and placement for your anatomy." },
    { question: "Can I still breastfeed after augmentation?", answer: "Yes. Most techniques preserve milk ducts and nerves, so breastfeeding remains possible. Incisions placed around the areola may carry a slightly higher risk, but it's generally safe." },
    { question: "How long do breast implants last?", answer: "Modern implants are durable and can last 10–20 years or longer. Routine monitoring (ultrasound or MRI) is recommended every few years to ensure implant integrity." },
    { question: "What's the difference between saline and silicone implants?", answer: "Silicone implants feel softer and more like natural breast tissue. Saline implants are filled after insertion and may feel firmer. Dr. Soma primarily uses high-quality silicone gel implants for optimal results." },
    { question: "What is capsular contracture?", answer: "It's when scar tissue around the implant tightens, causing firmness or discomfort. Dr. Soma uses advanced surgical techniques and textured implants to minimise this risk." },
    { question: "Will I have visible scars?", answer: "Incisions are placed in discreet locations — under the breast fold, around the areola, or in the armpit. Scars typically fade significantly within 6–12 months." },
    { question: "When can I return to work after surgery?", answer: "Most patients return to desk jobs within 5–7 days. Physical or strenuous work may require 3–4 weeks off." },
    { question: "Can breast augmentation fix sagging breasts?", answer: "Implants add volume but don't lift. If you have significant sagging, Dr. Soma may recommend combining augmentation with a breast lift (mastopexy) for the best outcome." }
  ]

  const implantTypes = [
    {
      title: "Round Implants",
      desc: "Provides fullness in the upper breast for a fuller, more lifted appearance.",
      features: ["Enhanced cleavage", "Symmetrical look", "Popular choice"],
      highlight: true
    },
    {
      title: "Teardrop (Anatomical)",
      desc: "Mimics the natural breast slope — fuller at the bottom, tapered at the top.",
      features: ["Natural shape", "Subtle enhancement", "Ideal for slim frames"],
      highlight: false
    },
    {
      title: "Smooth vs Textured",
      desc: "Smooth implants move naturally; textured implants stay in position.",
      features: ["Personal preference", "Surgeon recommendation", "Based on anatomy"],
      highlight: false
    }
  ]

  const incisionTypes = [
    { icon: "M12 14l9-5-9-5-9 5 9 5z", name: "Inframammary", desc: "Under the breast fold" },
    { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", name: "Periareolar", desc: "Around the areola" },
    { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", name: "Transaxillary", desc: "Through the armpit" }
  ]

  const placementOptions = [
    { title: "Submuscular (Under the Muscle)", points: ["More natural slope", "Better for mammograms", "Ideal for thin patients"] },
    { title: "Subglandular (Over the Muscle)", points: ["Shorter recovery", "Better for athletes", "Enhanced cleavage"] }
  ]

  const candidateChecklist = [
    "Desire larger or fuller breasts",
    "Good overall health",
    "Realistic expectations",
    "Non-smoker or willing to quit"
  ]

  return (
    <>
      <Head>
        <title>Breast Augmentation Malaysia | Implants by Specialist Plastic Surgeon – Dr. Soma</title>
        <meta name="description" content="Looking for breast augmentation in Malaysia? Dr. Soma offers safe, natural-looking breast implants using premium silicone gel. Personalised consultation, hospital-grade safety." />
      </Head>

      <style jsx global>{`
        .breast-aug-page ::selection {
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

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes slideInFromLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInFromRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
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

        .btn-press {
          transition: transform 0.1s ease;
        }
        .btn-press:active {
          transform: scale(0.97);
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

        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
        }

        .hover-grow {
          transition: all 0.3s ease;
        }
        .hover-grow:hover {
          transform: scale(1.05);
        }

        .hover-rotate {
          transition: all 0.3s ease;
        }
        .hover-rotate:hover {
          transform: rotate(5deg);
        }

        .icon-bounce:hover svg {
          animation: bounce 0.5s ease-in-out;
        }

        .icon-spin:hover svg {
          animation: rotate 0.5s ease-in-out;
        }

        .underline-animation {
          position: relative;
        }
        .underline-animation::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #FE7623;
          transition: width 0.3s ease;
        }
        .underline-animation:hover::after {
          width: 100%;
        }

        .parallax-card {
          transition: transform 0.5s ease;
        }
        .parallax-card:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) translateZ(20px);
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
        .stagger-animation > *:nth-child(8) { animation-delay: 0.8s; }

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

        .accordion-content {
          transition: grid-template-rows 0.3s ease-out;
          display: grid;
          grid-template-rows: 0fr;
        }
        .accordion-content > div { overflow: hidden; }
        .accordion-content.active { grid-template-rows: 1fr; }
      `}</style>

      <main className="breast-aug-page bg-white text-zinc-900">
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
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Breast Augmentation in Malaysia.</span> <br />
                <span className="text-[#FE7623] text-[20px] md:text-[30px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">Safe. Natural. Personalised.</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify space-y-4" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>Breast size and shape play a major role in body balance and self-confidence. Some women feel their breasts are naturally small, uneven, or have lost volume after pregnancy, weight loss, or aging.</p>
                <p style={{fontSize: '14px'}}>Breast augmentation is a surgeon-performed procedure designed to enhance breast size, improve shape, restore volume, and create better overall body proportion.</p>
                <p style={{fontSize: '14px'}}>At Dr. Soma Plastic Surgery, every breast augmentation procedure is performed personally by Dr. Soma, a board-certified plastic surgeon with extensive experience in aesthetic breast surgery. Implant selection, pocket placement, and symmetry planning are tailored precisely to each patient for natural, balanced results.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Breast%20Augmentation%20treatment" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
                  Book Consultation
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                </a>
                <a href="#process" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-white border-2 border-zinc-200 text-zinc-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all duration-300 hover:border-[#FE7623] hover:text-[#FE7623] group">
                  How It Works
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </a>
              </div>

              {/* Trusted by patients */}
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 mt-8 animate-fadeInUp opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                <div className="flex -space-x-2">
                  {[
                    'https://randomuser.me/api/portraits/women/44.jpg',
                    'https://randomuser.me/api/portraits/women/68.jpg',
                    'https://randomuser.me/api/portraits/women/89.jpg',
                    'https://randomuser.me/api/portraits/women/32.jpg',
                    'https://randomuser.me/api/portraits/women/55.jpg'
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
                src="/images/breast_augmentation.png"
                alt="Breast Augmentation in Malaysia"
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
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">Implant Quality</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">Premium Silicone Gel Implants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Definition & Incision Grid */}
        <section className="py-8 md:py-12 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div data-animate="def-1" className={`md:col-span-5 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">What Is Breast Augmentation?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  Breast augmentation (augmentation mammoplasty) is a surgical procedure that uses implants to increase breast size, restore volume lost after pregnancy or weight loss, or improve breast symmetry. It is one of the most popular cosmetic procedures worldwide.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Enhances Breast Size & Shape</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Restores Volume After Pregnancy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Improves Breast Symmetry</span>
                  </div>
                </div>
              </div>

              {/* Incision Types Grid */}
              <div data-animate="def-2" className={`md:col-span-7 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">Incision Options</h3>
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 ${isVisible('def-2') ? 'stagger-animation' : ''}`}>
                  {incisionTypes.map((incision, i) => (
                    <div key={i} className="p-6 rounded-xl border border-zinc-200 text-center hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer card-shine ripple bg-white">
                      <svg className="w-8 h-8 mx-auto mb-3 text-zinc-400 group-hover:text-[#FE7623] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={incision.icon} />
                      </svg>
                      <span className="text-sm font-semibold text-zinc-700 group-hover:text-[#FE7623] transition-colors duration-300 block mb-1">{incision.name}</span>
                      <span className="text-xs text-zinc-500">{incision.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implant Types & Process */}
        <section id="process" className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="tech-header" className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible('tech-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Implant Types</h2>
              <p className="text-zinc-500 text-sm">Dr. Soma selects the ideal implant type based on your anatomy, lifestyle, and aesthetic goals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {implantTypes.map((implant, i) => (
                <div key={i} data-animate={`tech-${i}`} className={`bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm card-3d card-shine ${implant.highlight ? 'animate-border-glow' : ''} ${isVisible(`tech-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${implant.highlight ? 'bg-gradient-to-br from-[#FE7623] to-orange-400 text-white animate-pulse-slow' : 'bg-zinc-100 text-zinc-900'} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#FE7623] mb-3">{implant.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{implant.desc}</p>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    {implant.features.map((feature, j) => (
                      <li key={j} className="flex gap-3 hover:text-[#FE7623] hover:translate-x-2 transition-all duration-300">
                        <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                          <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Placement Options */}
            <div className="border-t border-zinc-200 pt-16">
              <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-10 text-center">Implant Placement Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {placementOptions.map((option, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:border-[#FE7623] hover:shadow-xl transition-all duration-300 group">
                    <h4 className="text-lg font-bold text-zinc-900 mb-4 group-hover:text-[#FE7623] transition-colors duration-300">{option.title}</h4>
                    <ul className="space-y-3">
                      {option.points.map((point, j) => (
                        <li key={j} className="flex gap-3 text-sm text-zinc-600 hover:text-[#FE7623] hover:translate-x-2 transition-all duration-300">
                          <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                            <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <span className="flex-1">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="border-t border-zinc-200 pt-16 mt-16">
              <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-10 text-center">The Procedure</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
                <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-zinc-200 via-[#FE7623]/30 to-zinc-200 z-0 animate-shimmer"></div>

                {[
                  { num: "1", title: "Consultation", desc: "3D imaging & planning" },
                  { num: "2", title: "Anaesthesia", desc: "General anaesthesia" },
                  { num: "3", title: "Implant Insertion", desc: "Precise placement" },
                  { num: "4", title: "Recovery", desc: "Compression & support" }
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

        {/* Why Dr. Soma Section */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image Section */}
            <div data-animate="why-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl order-2 lg:order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('why-image') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <BaseImage
                src="/breast/breast-augmentation.jpg"
                alt="Dr. Soma Consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 max-w-[260px] animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-sm font-bold text-zinc-900">Natural Results</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  &ldquo;We focus on achieving natural-looking results that complement your body proportions.&rdquo;
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div data-animate="why-content" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('why-content') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Why Dr. Soma?</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                Breast augmentation requires precision, experience, and an artistic eye. Dr. Soma combines surgical expertise with a personalised approach to deliver results that look and feel natural.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "user-check", title: "Board-Certified Plastic Surgeon", desc: "Performed by a fully qualified specialist with extensive breast surgery experience." },
                  { icon: "sliders", title: "Personalised Approach", desc: "Every patient receives a customised plan based on their anatomy, goals, and lifestyle." },
                  { icon: "hospital", title: "Hospital-Grade Safety", desc: "All procedures are performed in accredited facilities with full monitoring." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#FE7623] group-hover:bg-[#FE7623] group-hover:text-white group-hover:border-[#FE7623] transition-all duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{item.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-zinc-100">
                <h4 className="text-sm font-bold text-zinc-900 mb-4">Good Candidates Checklist</h4>
                <div className="grid grid-cols-2 gap-3">
                  {candidateChecklist.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-zinc-600 group cursor-pointer hover:text-[#FE7623] transition-colors duration-300">
                      <svg className="w-6 h-6 min-w-[24px] text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col w-full">
              <h2 data-animate="compare-header" className={`text-2xl font-semibold mb-10 text-center text-[#FE7623] transition-all duration-700 ${isVisible('compare-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Breast Augmentation vs. Breast Lift</h2>

              <div data-animate="compare-table" className={`w-full border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible('compare-table') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Header */}
                <div className="grid grid-cols-3 bg-gradient-to-r from-zinc-50 to-orange-50/30 px-4 py-4 md:px-8 md:py-6 border-b border-zinc-200 text-[11px] md:text-xs font-bold uppercase tracking-wider text-zinc-500 gap-4 md:gap-6">
                  <div>Feature</div>
                  <div className="text-[#FE7623] flex items-center gap-2"><span className="hidden md:block w-2 h-2 rounded-full bg-[#FE7623] animate-pulse"></span>Augmentation</div>
                  <div>Breast Lift</div>
                </div>

                {/* Rows */}
                {[
                  { feat: "Adds Volume", aug: "Yes", lift: "No" },
                  { feat: "Lifts Sagging Breasts", aug: "No", lift: "Yes" },
                  { feat: "Reshapes Breast", aug: "Partially", lift: "Yes" },
                  { feat: "Ideal For", aug: "Small breasts, loss of volume", lift: "Sagging or drooping" },
                  { feat: "Can Be Combined", aug: "Yes", lift: "Yes" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 px-4 py-4 md:px-8 md:py-6 border-b border-zinc-100 items-center text-[12px] md:text-sm gap-4 md:gap-6 hover:bg-gradient-to-r hover:from-orange-50/30 hover:to-white transition-all duration-300 group cursor-pointer">
                    <div className="font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{row.feat}</div>
                    <div className="text-[#FE7623] group-hover:font-semibold transition-all duration-300">{row.aug}</div>
                    <div className="text-zinc-600 group-hover:text-zinc-900 transition-colors duration-300">{row.lift}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/breast/breast-lift-malaysia" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FE7623] hover:underline group">
                  View Breast Lift Details
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
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Post-Operative Recovery</h2>
              <p className="text-zinc-500 text-sm">Clear Timeline for Your Healing Journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
              {[
                {
                  time: "Day 1–3",
                  title: "Initial Recovery",
                  points: ["Rest at home", "Mild to moderate discomfort", "Surgical bra worn 24/7"],
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: "Week 1",
                  title: "Early Healing",
                  points: ["Swelling and bruising subside", "Return to light activities", "First follow-up visit"],
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: "Week 2–3",
                  title: "Progress Phase",
                  points: ["Most patients return to work", "Swelling continues to reduce", "Avoid lifting heavy objects"],
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                },
                {
                  time: "Week 4–6",
                  title: "Active Recovery",
                  points: ["Resume exercise (gradual)", "Breast shape settles", "Final bra fitting"],
                  icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: "Month 3–6",
                  title: "Final Results",
                  points: ["Implants fully settle", "Natural look and feel", "Scars continue to fade"],
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
                      <li key={j} className="flex items-start gap-3 text-sm text-zinc-600 group-hover:text-zinc-800 hover:translate-x-2 transition-all duration-300">
                        <svg className="w-6 h-6 min-w-[24px] text-[#FE7623] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{point}</span>
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
                <span>Day 1-3</span>
                <span>Week 1</span>
                <span>Week 2-3</span>
                <span>Week 4-6</span>
                <span>Month 3-6</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="testimonial-header" className={`text-2xl font-semibold text-center mb-12 text-[#FE7623] transition-all duration-700 ${isVisible('testimonial-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Patient Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { text: "I finally feel confident in my clothes. Dr. Soma listened to exactly what I wanted and delivered beyond expectations.", name: "Mei Ling, 32" },
                { text: "The results look so natural. Even my close friends couldn't tell I had surgery — they just said I looked great!", name: "Sarah, 28" },
                { text: "Professional, caring, and the results are amazing. I wish I had done this years ago.", name: "Anita, 41" }
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
                  <h3 className="text-xl font-semibold group-hover:text-[#FE7623] transition-colors duration-300">Pricing Guide</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-6">Breast augmentation cost varies depending on several factors:</p>
                <ul className="space-y-4 mb-8">
                  {["Implant type & brand", "Surgical technique", "Hospital & anaesthesia fees", "Post-op care & garments"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#FE7623] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Breast%20Augmentation%20treatment" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
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
                  <p className="text-sm text-zinc-500">Get answers to common concerns about breast augmentation</p>
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
              <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-widest flex-1">Scientific Evidence & References</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "American Society of Plastic Surgeons", url: "https://www.plasticsurgery.org/", desc: "Breast augmentation is one of the most commonly performed cosmetic procedures with high patient satisfaction rates.", color: "from-red-500 to-red-600" },
                { name: "Mayo Clinic", url: "https://www.mayoclinic.org/", desc: "Modern breast implants are safe and effective when performed by qualified plastic surgeons.", color: "from-blue-500 to-blue-600" },
                { name: "PubMed Studies", url: "https://pubmed.ncbi.nlm.nih.gov/", desc: "Research shows high satisfaction rates and improved quality of life following breast augmentation surgery.", color: "from-green-500 to-green-600" }
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
        <section className="py-8 md:py-24 px-6 bg-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50/40 rounded-full blur-3xl animate-float"></div>

          <div data-animate="cta" className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FE7623] to-orange-400 rounded-2xl mb-8 shadow-xl shadow-orange-500/30 animate-bounce-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-[#FE7623] mb-6 transition-colors duration-300 cursor-default">Enhance your confidence with natural-looking results.</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              Dr. Soma combines surgical precision with an artistic eye to deliver breast augmentation results that look and feel natural.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Breast%20Augmentation%20treatment" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
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
              {["breast implants", "augmentation mammoplasty", "silicone implants", "breast enhancement", "cosmetic surgery"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-50 rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20" style={{animationDelay: `${i * 100}ms`}}>{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
