import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function TummyTuckMalaysia() {
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
    { question: "What is a tummy tuck?", answer: "A tummy tuck is a surgical procedure that removes excess abdominal skin and fat while tightening weakened abdominal muscles to create a flatter abdomen." },
    { question: "Is a tummy tuck the same as liposuction?", answer: "No. Liposuction removes fat only, while a tummy tuck also removes loose skin and tightens muscles." },
    { question: "Is tummy tuck surgery safe?", answer: "When performed by a certified plastic surgeon in a regulated facility, it is considered a safe and well-established procedure." },
    { question: "How long does recovery take?", answer: "Most patients return to daily activities within 2-4 weeks, with final results visible over 3-6 months." },
    { question: "Will there be a scar?", answer: "Yes, but it is placed low on the abdomen and typically hidden by underwear or swimwear." },
    { question: "Are tummy tuck results permanent?", answer: "Results are long-lasting if body weight remains stable." },
    { question: "Can pregnancy affect tummy tuck results?", answer: "Yes. Pregnancy can stretch the abdomen again, so surgery is best after completing childbearing." },
    { question: "Who should consider a tummy tuck?", answer: "Patients with loose abdominal skin, muscle laxity, stable weight, and realistic expectations." },
    { question: "Can a tummy tuck improve posture?", answer: "Yes. Muscle repair can enhance core support and posture." },
    { question: "Can it be combined with other procedures?", answer: "Yes. It is commonly combined with liposuction for enhanced contouring." }
  ]

  const coreIssues = [
    { icon: "skin", name: "Excess or sagging abdominal skin" },
    { icon: "fat", name: "Accumulated fat resistant to diet and exercise" },
    { icon: "muscle", name: "Weakened or separated abdominal muscles (diastasis recti)" }
  ]

  const surgicalSteps = [
    "Pre-operative markings to guide incision placement and symmetry",
    "Removal of excess abdominal skin and fat",
    "Repair and tightening of stretched abdominal muscles",
    "Repositioning of the belly button when required",
    "Layered closure to support healing",
    "Placement of surgical drains when indicated",
    "Application of compression garments"
  ]

  const tummyTypes = [
    {
      title: "Full Tummy Tuck",
      features: ["Removes excess skin above and below the navel", "Repairs muscle separation", "Repositions the belly button", "Most comprehensive correction"],
      highlight: true
    },
    {
      title: "Mini Tummy Tuck",
      features: ["Targets mild lower-abdominal skin laxity", "Smaller incision", "Limited or no muscle repair", "Suitable for selected patients"],
      highlight: false
    },
    {
      title: "Extended Tummy Tuck",
      features: ["Addresses excess skin extending to the flanks", "Often chosen after massive weight loss", "Improves waistline contour"],
      highlight: false
    }
  ]

  const candidateChecklist = [
    "Excess abdominal skin",
    "Muscle separation after pregnancy or weight loss",
    "Stable body weight",
    "Good general health",
    "Realistic expectations"
  ]

  const notRecommendedChecklist = [
    "Future pregnancy is planned",
    "Uncontrolled medical conditions",
    "Weight is unstable or severe obesity is present"
  ]

  const benefits = [
    "Removes loose, sagging abdominal skin",
    "Tightens weakened abdominal muscles",
    "Improves abdominal contour and firmness",
    "Enhances posture and core stability",
    "Produces long-lasting results with stable weight",
    "Can be combined with liposuction for refinement"
  ]

  const aftercareItems = [
    "Compression garment for 6-8 weeks",
    "Pain relief medication",
    "Drain care instructions",
    "Wound care guidance",
    "Scheduled follow-up visits"
  ]

  return (
    <>
      <Head>
        <title>Tummy Tuck Malaysia by Specialist Plastic Surgeon | Abdominoplasty - Dr. Soma</title>
        <meta name="description" content="Looking for tummy tuck in Malaysia? Dr. Soma offers comprehensive abdominoplasty to restore a flatter, firmer abdomen with surgical precision and structured postoperative care." />
      </Head>

      <style jsx global>{`
        .tummy-page ::selection {
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

      <main className="tummy-page bg-white text-zinc-900">
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
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Tummy Tuck in Malaysia.</span> <br />
                <span className="text-[#FE7623] text-[20px] md:text-[30px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">Restore a Flatter, Firmer Abdomen with Surgical Precision</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify space-y-3" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>A tummy tuck, medically known as abdominoplasty, is a surgical procedure designed to restore a flatter, firmer abdominal profile by removing excess skin and fat while tightening weakened abdominal muscles. It is most commonly sought after pregnancy, significant weight loss, or age-related skin laxity—situations where exercise and diet alone cannot correct the underlying structural changes.</p>
                <p style={{fontSize: '14px'}}>This procedure is intended for individuals who are already close to a stable weight but struggle with loose abdominal skin, muscle separation, or a protruding abdomen that affects comfort, posture, and confidence. When performed correctly, a tummy tuck improves abdominal contour, supports core stability, and delivers long-lasting results.</p>
                <p style={{fontSize: '14px'}}>In Malaysia, tummy tuck surgery is a regulated medical procedure by: Ministry of Health Malaysia under the Private Healthcare Services framework. This ensures that surgery is performed only by registered medical practitioners in licensed facilities, following established safety and postoperative standards.</p>
                <p style={{fontSize: '14px'}}>At Dr. Soma Plastic Surgery, tummy tuck procedures are performed personally by Dr. Soma, a certified plastic surgeon with experience in body contouring surgery and structured postoperative care. The approach focuses on safety, anatomical precision, and natural-looking results rather than aggressive overcorrection.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Tummy%20Tuck%20treatment" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
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
                <span className="text-sm text-zinc-600 font-medium">Trusted by <span className="text-[#FE7623] font-bold">1000+</span> happy patients</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-2 lg:order-2 relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom transition-all duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.1)'}}>
              <BaseImage
                src="/images/tummy_tuck.png"
                alt="Tummy Tuck in Malaysia"
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
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">Procedure</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">Full Abdominoplasty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is a Tummy Tuck Section */}
        <section className="py-8 md:py-12 px-6 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div data-animate="def-1" className={`md:col-span-5 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">What Is a Tummy Tuck (Abdominoplasty)?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  A tummy tuck is a surgical procedure that addresses three core issues of the abdomen. During the procedure, excess skin and fat are removed, and the abdominal muscles are tightened to restore a flatter, firmer abdominal wall. In many cases, the belly button is repositioned to maintain natural proportions.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  Major medical institutions, including leading surgical bodies and academic hospitals, describe abdominoplasty as a well-established and effective procedure when patient selection, surgical technique, and recovery planning are appropriately managed.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed text-justify font-medium">
                  A tummy tuck is <strong>not</strong> a weight-loss surgery. Instead, it is a contour-restoring procedure for patients who have already achieved weight stability but are left with skin laxity and muscle weakness.
                </p>
              </div>

              {/* Core Issues Grid */}
              <div data-animate="def-2" className={`md:col-span-7 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">A Tummy Tuck Addresses These Core Issues</h3>
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isVisible('def-2') ? 'stagger-animation' : ''}`}>
                  {coreIssues.map((issue, i) => (
                    <div key={i} className="p-4 rounded-xl border border-zinc-200 text-center hover:border-[#FE7623] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer card-shine ripple bg-white">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-3 text-zinc-400 group-hover:text-[#FE7623] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-semibold text-zinc-700 group-hover:text-[#FE7623] transition-colors duration-300">{issue.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why the Abdomen Changes Section */}
        <section className="py-8 md:py-16 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="changes-header" className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${isVisible('changes-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Why the Abdomen Changes After Pregnancy or Weight Loss</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                The abdomen undergoes significant structural stress during pregnancy and major weight fluctuations. Skin fibers stretch beyond their elastic limit, and the rectus abdominal muscles can separate along the midline—a condition known as diastasis recti.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { text: "Skin often does not retract fully", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
                { text: "Muscle separation does not resolve with exercise alone", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { text: "Fat distribution becomes uneven", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
                { text: "Core support weakens, affecting posture and back comfort", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }
              ].map((item, i) => (
                <div key={i} data-animate={`changes-${i}`} className={`p-6 bg-white rounded-2xl border border-zinc-100 shadow-lg card-3d card-shine hover:border-[#FE7623] ${isVisible(`changes-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 150}ms`}}>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-[#FE7623] transition-all duration-300">
                    <svg className="w-6 h-6 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-zinc-500 mt-8 max-w-2xl mx-auto">A tummy tuck directly addresses these anatomical changes rather than relying on surface-level fat reduction.</p>
          </div>
        </section>

        {/* How a Tummy Tuck Works Section */}
        <section id="process" className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div data-animate="works-header" className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible('works-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">How a Tummy Tuck Works</h2>
              <p className="text-zinc-500 text-sm">A tummy tuck is a carefully planned surgical procedure that follows a structured sequence to ensure symmetry, safety, and durable results.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-animate="works-image" className={`relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('works-image') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <BaseImage
                  src="/images/tummy_tuck_new.jpg"
                  alt="Tummy Tuck Procedure"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-zinc-900/10"></div>
              </div>

              <div data-animate="works-steps" className={`transition-all duration-700 ${isVisible('works-steps') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">Key Surgical Steps</h3>
                <div className="space-y-4">
                  {surgicalSteps.map((step, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 p-4 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 group cursor-pointer text-center md:text-left">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FE7623] to-orange-400 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {i + 1}
                      </div>
                      <span className="text-sm text-zinc-700 group-hover:text-[#FE7623] transition-colors duration-300">{step}</span>
                    </div>
                  ))}
                </div>
                <p className="text-zinc-500 text-sm mt-6">By addressing both skin laxity and muscle separation, abdominoplasty achieves results that liposuction alone cannot provide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Tummy Tuck Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div data-animate="types-header" className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible('types-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Types of Tummy Tuck Procedures</h2>
              <p className="text-zinc-500 text-sm">The appropriate tummy tuck technique depends on skin excess, muscle condition, and body proportions. A clinical assessment determines the most suitable approach.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tummyTypes.map((type, i) => (
                <div key={i} data-animate={`type-${i}`} className={`bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm card-3d card-shine ${type.highlight ? 'animate-border-glow' : ''} ${isVisible(`type-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${type.highlight ? 'bg-gradient-to-br from-[#FE7623] to-orange-400 text-white animate-pulse-slow' : 'bg-zinc-100 text-zinc-900'} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#FE7623] mb-3">{type.title}</h3>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    {type.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 hover:text-[#FE7623] hover:translate-x-2 transition-all duration-300">
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

            <p className="text-center text-sm text-zinc-500 mt-8">Each technique is selected based on anatomy rather than preference alone.</p>
          </div>
        </section>

        {/* Who Is a Good Candidate Section */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image Section */}
            <div data-animate="candidate-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl order-2 lg:order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('candidate-image') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <BaseImage
                src="/images/tumy.jpg"
                alt="Tummy Tuck Candidate"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 max-w-[260px] animate-float">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="text-sm font-bold text-zinc-900">Regulated & Safe</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  &ldquo;Performed in licensed facilities under Ministry of Health Malaysia standards.&rdquo;
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div data-animate="candidate-content" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('candidate-content') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Who Is a Good Candidate for a Tummy Tuck?</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                Ideal candidates typically share specific characteristics that support safe surgery and predictable outcomes.
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-zinc-900 mb-4">Suitable Candidates Usually Have</h4>
                <div className="grid grid-cols-1 gap-3">
                  {candidateChecklist.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                      <svg className="w-6 h-6 min-w-[24px] text-[#FE7623] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-zinc-100">
                <h4 className="text-sm font-bold text-zinc-900 mb-4">A Tummy Tuck May Not Be Recommended If</h4>
                <div className="grid grid-cols-1 gap-3">
                  {notRecommendedChecklist.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-zinc-600 p-3 bg-red-50/50 rounded-lg border border-red-100 group">
                      <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-zinc-500 text-sm mt-4">Final suitability is always determined during an in-person consultation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col w-full">
              <h2 data-animate="compare-header" className={`text-2xl font-semibold mb-4 text-center text-[#FE7623] transition-all duration-700 ${isVisible('compare-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Tummy Tuck vs Liposuction: Understanding the Difference</h2>
              <p className="text-zinc-500 text-sm text-center mb-10 max-w-2xl mx-auto">Many patients confuse tummy tuck surgery with liposuction, but they address different problems.</p>

              <div data-animate="compare-table" className={`w-full border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible('compare-table') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Header */}
                <div className="grid grid-cols-3 bg-gradient-to-r from-zinc-50 to-orange-50/30 px-4 py-4 md:px-8 md:py-6 border-b border-zinc-200 text-[11px] md:text-xs font-bold uppercase tracking-wider text-zinc-500 gap-4 md:gap-6">
                  <div>Feature</div>
                  <div className="text-[#FE7623] flex items-center gap-1 md:gap-2"><span className="hidden md:block w-2 h-2 rounded-full bg-[#FE7623] animate-pulse"></span><span>Tummy Tuck</span></div>
                  <div>Liposuction</div>
                </div>

                {/* Rows */}
                {[
                  { feat: "Removes Fat", tummy: "Yes", lipo: "Yes" },
                  { feat: "Removes Loose Skin", tummy: "Yes", lipo: "No" },
                  { feat: "Tightens Muscles", tummy: "Yes", lipo: "No" },
                  { feat: "Scarring", tummy: "Longer but hidden", lipo: "Minimal" },
                  { feat: "Downtime", tummy: "3-4 weeks", lipo: "1-2 weeks" },
                  { feat: "Best For", tummy: "Loose skin & muscles", lipo: "Fat pockets only" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 px-4 py-4 md:px-8 md:py-6 border-b border-zinc-100 items-center text-[12px] md:text-sm gap-4 md:gap-6 hover:bg-gradient-to-r hover:from-orange-50/30 hover:to-white transition-all duration-300 group cursor-pointer">
                    <div className="font-semibold text-zinc-900 group-hover:text-[#FE7623] transition-colors duration-300">{row.feat}</div>
                    <div className="text-[#FE7623] group-hover:font-semibold transition-all duration-300">{row.tummy}</div>
                    <div className="text-zinc-600 group-hover:text-zinc-900 transition-colors duration-300">{row.lipo}</div>
                  </div>
                ))}
              </div>

              <p className="text-center text-sm text-zinc-500 mt-8">In some cases, both procedures are combined to achieve optimal contouring.</p>
            </div>
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div data-animate="recovery-header" className={`text-center mb-16 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">What Results Can You Expect?</h2>
              <p className="text-zinc-500 text-sm">Results from a tummy tuck develop gradually as swelling resolves and tissues heal.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
              {[
                {
                  time: "Week 1-2",
                  title: "Early Recovery",
                  points: ["Swelling, tightness, limited mobility", "Compression garment worn", "Pain medication as needed"],
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: "Week 3-4",
                  title: "Improved Comfort",
                  points: ["Improved comfort and posture", "Return to light activities", "Wound care continues"],
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: "Week 6-8",
                  title: "Visible Flattening",
                  points: ["Visible abdominal flattening", "Resume moderate exercise", "Scar healing progresses"],
                  icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  time: "Month 3-6",
                  title: "Final Contour",
                  points: ["Final contour emerges", "Swelling fully resolves", "Long-lasting results"],
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
                        <svg className="w-6 h-6 min-w-[24px] text-[#FE7623] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <span>Week 1-2</span>
                <span>Week 3-4</span>
                <span>Week 6-8</span>
                <span>Month 3-6</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 data-animate="benefits-header" className={`text-2xl font-semibold text-center mb-4 text-[#FE7623] transition-all duration-700 ${isVisible('benefits-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Benefits of Tummy Tuck Surgery</h2>
            <p className="text-zinc-500 text-sm text-center mb-12 max-w-2xl mx-auto">A well-performed tummy tuck offers both aesthetic and functional benefits.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} data-animate={`benefit-${i}`} className={`p-6 bg-white rounded-2xl border border-zinc-100 shadow-lg card-3d card-shine hover:border-[#FE7623] ${isVisible(`benefit-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <p className="text-sm text-zinc-700">{benefit}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-zinc-500 mt-8">Patients often report improved confidence in clothing and daily comfort.</p>
          </div>
        </section>

        {/* Post-Operative Recovery Section */}
        <section className="py-8 md:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-animate="aftercare-content" className={`transition-all duration-700 ${isVisible('aftercare-content') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Post-Operative Recovery and Aftercare</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                Recovery is a structured process guided by surgical protocols. Early walking is encouraged to support circulation, while strenuous activity is restricted during healing. Discomfort is commonly described as tightness or muscle soreness rather than sharp pain.
              </p>

              <h4 className="text-sm font-bold text-zinc-900 mb-4">After Surgery, Patients Typically Receive</h4>
              <div className="space-y-3">
                {aftercareItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-700 p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-[#FE7623] hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group">
                    <svg className="w-6 h-6 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div data-animate="aftercare-image" className={`relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('aftercare-image') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <BaseImage
                src="/images/tummy_tuck_new.jpg"
                alt="Tummy Tuck Aftercare"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl border border-zinc-100 max-w-[280px] animate-float">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  &ldquo;Postoperative care and recovery protocols used in tummy tuck surgery align with internationally recognised surgical safety and postoperative standards.&rdquo;
                </p>
                <p className="text-xs text-[#FE7623] font-semibold mt-2">WHO - Safe Surgery & Postoperative Care</p>
              </div>
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
                  <h3 className="text-xl font-semibold group-hover:text-[#FE7623] transition-colors duration-300">Pricing Guide</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-6">Tummy tuck cost varies depending on several factors:</p>
                <ul className="space-y-4 mb-8">
                  {["Type of tummy tuck required", "Amount of skin and fat to remove", "Muscle repair extent", "Combination with liposuction", "Operating time and facility"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#FE7623] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Tummy%20Tuck%20treatment" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
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
                  <p className="text-sm text-zinc-500">Get answers to common concerns about tummy tuck surgery</p>
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
                { name: "Mayo Clinic", url: "https://www.mayoclinic.org/tests-procedures/tummy-tuck/about/pac-20384892", desc: "Clinical overview recognizing abdominoplasty as an effective and well-established procedure when patient selection, surgical technique, and recovery planning are appropriately managed.", color: "from-blue-500 to-blue-600" },
                { name: "Ministry of Health Malaysia", url: "https://www.moh.gov.my/", desc: "Regulates private healthcare services, surgical safety standards, facility licensing, and professional accountability in Malaysia.", color: "from-red-500 to-red-600" },
                { name: "World Health Organization", url: "https://www.who.int/", desc: "Guidelines on safe surgery and postoperative care standards used worldwide.", color: "from-green-500 to-green-600" }
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
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight text-[#FE7623] mb-6 transition-colors duration-300 cursor-default">Restore structure, comfort, and proportion.</h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">
              A tummy tuck is not about chasing perfection. It is about restoring structure, comfort, and proportion after life events that permanently change the abdomen. When performed with proper planning, surgical precision, and structured aftercare, it delivers predictable, confidence-restoring results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Tummy%20Tuck%20treatment" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-10 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
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
              {["tummy tuck Malaysia", "abdominoplasty", "excess skin removal", "muscle tightening", "body contouring", "Dr. Soma"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-zinc-50 rounded-full text-xs text-zinc-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-[#FE7623] hover:scale-110 transition-all duration-300 cursor-default border border-transparent hover:border-[#FE7623]/20" style={{animationDelay: `${i * 100}ms`}}>{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
