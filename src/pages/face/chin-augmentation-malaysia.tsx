import Head from "next/head"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ChinAugmentationMalaysia() {
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
    { question: "What is chin augmentation?", answer: "Chin augmentation is surgery that enhances chin projection to improve facial balance." },
    { question: "Will chin augmentation look natural?", answer: "Yes, when planned according to facial proportions and anatomy." },
    { question: "How long do chin augmentation results last?", answer: "Results are long-lasting and often permanent." },
    { question: "Is chin augmentation painful?", answer: "Discomfort is usually mild to moderate and well controlled with medication." },
    { question: "Will there be visible scars?", answer: "Incisions are typically made inside the mouth or under the chin, making scars minimal or hidden." },
    { question: "Can chin augmentation be combined with other procedures?", answer: "Yes, it is commonly combined with rhinoplasty or neck lift for comprehensive facial enhancement." },
    { question: "Is chin augmentation safe in Malaysia?", answer: "Yes, when performed by a certified plastic surgeon in a licensed facility." },
    { question: "What is the difference between implant and genioplasty?", answer: "Implants add projection using biocompatible material, while genioplasty repositions the actual chin bone for structural correction." }
  ]

  const surgicalApproaches = [
    { title: "Chin Implant Augmentation", desc: "A biocompatible implant is placed over the chin bone to enhance projection and shape." },
    { title: "Sliding Genioplasty", desc: "The chin bone itself is repositioned and secured for structural correction." }
  ]

  const procedureSteps = [
    "Small incision inside the mouth or under the chin",
    "Precise placement or repositioning",
    "Secure fixation",
    "Layered closure to minimise scarring"
  ]

  const benefits = [
    "Improves facial balance and proportions",
    "Enhances jawline definition",
    "Strengthens side-profile aesthetics",
    "Long-lasting structural correction",
    "Natural results when properly planned",
    "Can complement rhinoplasty or neck lift"
  ]

  const candidateCriteria = [
    "Have a weak or recessed chin",
    "Desire improved facial harmony",
    "Are in good overall health",
    "Maintain stable body weight",
    "Have realistic expectations"
  ]

  const comparisonData = [
    { aspect: "Longevity", chinAug: "Permanent / Long-term", fillers: "Temporary" },
    { aspect: "Structural correction", chinAug: "Yes", fillers: "No" },
    { aspect: "Precision", chinAug: "High", fillers: "Moderate" },
    { aspect: "Downtime", chinAug: "Short", fillers: "Minimal" },
    { aspect: "Best for", chinAug: "True chin deficiency", fillers: "Mild enhancement" }
  ]

  return (
    <>
      <Head>
        <title>Chin Augmentation Malaysia | Genioplasty Surgery – Dr. Soma</title>
        <meta name="description" content="Chin augmentation (genioplasty) surgery in Malaysia by Dr. Soma. Enhance facial balance and jawline definition. Expert chin enhancement surgery. Book consultation today." />
      </Head>

      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        .chin-aug-page ::selection {
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
      <main className="chin-aug-page bg-white text-zinc-900 w-full max-w-full">
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
                <span className="hover:text-[#FE7623] transition-colors duration-300 cursor-default">Chin Augmentation in Malaysia.</span> <br />
                <span className="text-[#FE7623] text-[18px] md:text-[28px] tracking-[1px] transition-colors duration-300 cursor-default mt-[10px] block">Enhancing Facial Balance and Jawline Definition</span>
              </h1>
              <div className="text-zinc-600 leading-relaxed mb-4 md:mb-8 max-w-xl animate-fadeInUp opacity-0 text-justify" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p style={{fontSize: '14px'}}>Facial harmony depends on proportion. When the chin is under-projected or recessed, the entire face can appear unbalanced — making the nose look larger, the jawline softer, and the neck less defined. Chin augmentation, also known as genioplasty or chin enhancement, is a surgical procedure designed to strengthen the chin profile and improve overall facial balance.</p>
                <p style={{fontSize: '14px', marginTop: '12px'}}>In Malaysia, chin augmentation is a regulated surgical procedure and must be performed by a registered medical practitioner in a licensed medical facility under standards enforced by the Ministry of Health Malaysia. When performed by a certified plastic surgeon, chin augmentation delivers subtle but powerful improvements to facial structure without changing identity.</p>
                <p style={{fontSize: '14px', marginTop: '12px'}}>Globally, institutions such as the Mayo Clinic and professional bodies like the American Society of Plastic Surgeons recognise chin augmentation as an effective solution for correcting chin deficiency and enhancing lower-face aesthetics.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Chin%20Augmentation" className="btn-magnetic inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 group animate-glow">
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
                <span className="text-sm text-zinc-600 font-medium text-center sm:text-left">Trusted by <span className="text-[#FE7623] font-bold">500+</span> happy patients</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-2 lg:order-2 relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/3] group animate-fadeInRight opacity-0 img-zoom transition-all duration-500" style={{animationDelay: '0.3s', animationFillMode: 'forwards', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.1)'}}>
              <BaseImage
                src="/images/Chin Augmentation.jpg"
                alt="Chin Augmentation Surgery Malaysia"
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
                      <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide text-zinc-400">Procedure Focus</p>
                      <p className="text-sm md:text-base font-semibold text-zinc-900">Facial Balance & Profile Enhancement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Chin Augmentation Section */}
        <section id="learn-more" className="py-8 md:py-12 px-6 bg-white border-b border-zinc-100 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 px-4 md:px-8">
              <div data-animate="def-1" className={`md:col-span-6 transition-all duration-700 ${isVisible('def-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">What Is Chin Augmentation?</h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  Chin augmentation is a surgical procedure that increases chin projection, width, or height to improve facial proportions. Clinical literature indexed on PubMed highlights the importance of precise sizing and placement to achieve natural, long-term results.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 text-justify">
                  Chin augmentation is not purely cosmetic; in some patients, it also improves functional balance between facial structures.
                </p>
                <div className="space-y-3">
                  {[
                    "Balance facial profile",
                    "Enhance jawline definition",
                    "Improve chin–neck angle",
                    "Support overall facial symmetry"
                  ].map((item, i) => (
                    <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 p-3 bg-zinc-50 rounded-lg border border-zinc-200">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How Chin Augmentation Works */}
              <div data-animate="def-2" className={`md:col-span-6 transition-all duration-700 ${isVisible('def-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-sm font-bold text-[#FE7623] uppercase tracking-wide mb-6">How Chin Augmentation Works</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Surgery is performed under general anaesthesia in a hospital setting. The procedure typically involves:
                </p>
                <div className="space-y-3">
                  {procedureSteps.map((item, i) => (
                    <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 p-3 bg-orange-50 rounded-lg border border-orange-100">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Surgical Approaches Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="approaches-header" className={`max-w-2xl mb-12 px-4 md:px-8 transition-all duration-700 ${isVisible('approaches-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Surgical Approaches</h2>
              <p className="text-zinc-500 text-sm">There are two primary surgical approaches for chin augmentation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8">
              {surgicalApproaches.map((approach, i) => (
                <div key={i} data-animate={`approach-${i}`} className={`relative bg-white pt-14 pb-8 px-6 rounded-2xl border border-zinc-200 card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`approach-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="absolute -top-4 left-6 px-4 py-3 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 z-10">
                    {i + 1}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 mb-3 group-hover:text-[#FE7623] transition-colors duration-300">{approach.title}</h3>
                  <p className="text-sm text-zinc-500">{approach.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results and Recovery Section */}
        <section className="py-8 md:py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div data-animate="recovery-header" className={`max-w-2xl mb-12 px-4 md:px-8 transition-all duration-700 ${isVisible('recovery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Results and Recovery Timeline</h2>
              <p className="text-zinc-500 text-sm">Recovery follows a structured timeline. Postoperative recovery principles align with international surgical safety standards outlined by the World Health Organization.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
              {[
                { time: "Week 1", desc: "Swelling, mild tightness, soft diet" },
                { time: "Week 2", desc: "Improved comfort and facial movement" },
                { time: "Week 4–6", desc: "Chin shape becomes more defined" },
                { time: "Month 3", desc: "Final contour as swelling resolves" }
              ].map((item, i) => (
                <div key={i} data-animate={`recovery-${i}`} className={`relative bg-zinc-50 pt-14 pb-8 px-6 rounded-2xl border border-zinc-200 card-3d overflow-visible hover:border-[#FE7623] group ${isVisible(`recovery-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <div className="absolute -top-4 left-6 px-4 py-3 bg-gradient-to-r from-[#FE7623] to-orange-400 text-white text-xs font-bold rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 z-10">
                    {item.time}
                  </div>
                  <p className="text-sm text-zinc-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-8 md:py-24 px-6 bg-zinc-50 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 md:px-8">
            {/* Image Section */}
            <div data-animate="benefits-image" className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl order-2 lg:order-1 img-zoom hover:shadow-[0_25px_60px_-15px_rgba(254,118,35,0.3)] transition-all duration-700 ${isVisible('benefits-image') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <BaseImage
                src="/images/Chin Augmentation.jpg"
                alt="Chin Augmentation Benefits"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-zinc-900/10"></div>
            </div>

            {/* Content Section */}
            <div data-animate="benefits-content" className={`order-1 lg:order-2 transition-all duration-700 ${isVisible('benefits-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-6">Benefits of Chin Augmentation</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                A well-planned chin augmentation often improves the appearance of the entire face, not just the chin.
              </p>

              <div className="grid grid-cols-1 gap-3 mb-6">
                {benefits.map((item, i) => (
                  <div key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-600 group cursor-pointer hover:text-[#FE7623] transition-colors duration-300 p-3 bg-white rounded-lg border border-zinc-200 hover:border-[#FE7623]">
                    <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="flex-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Is Ideal Candidate */}
        <section className="py-8 md:py-24 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
          <div className="w-full max-w-[1400px] mx-auto">
            <div data-animate="candidate-content" className={`text-center mb-12 transition-all duration-700 ${isVisible('candidate-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Who Is a Good Candidate?</h2>
              <p className="text-zinc-500 text-sm max-w-2xl mx-auto">Patients with jaw misalignment may require additional evaluation before surgery. Ideal candidates typically:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {candidateCriteria.map((item, i) => (
                <div key={i} data-animate={`candidate-${i}`} className={`flex flex-row items-start gap-3 text-sm text-zinc-600 p-4 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-[#FE7623] transition-all duration-300 ${isVisible(`candidate-${i}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${i * 100}ms`}}>
                  <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-8 md:py-24 px-4 md:px-8 lg:px-16 bg-zinc-50 overflow-hidden">
          <div className="w-full max-w-[1400px] mx-auto">
            <div data-animate="comparison-header" className={`text-center mb-12 transition-all duration-700 ${isVisible('comparison-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-semibold tracking-tight text-[#FE7623] mb-4">Chin Augmentation vs Non-Surgical Fillers</h2>
              <p className="text-zinc-500 text-sm max-w-2xl mx-auto">Fillers may be useful for temporary assessment but cannot replace structural augmentation.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-100">
                    <th className="text-left py-4 px-4 text-zinc-600 font-semibold">Feature</th>
                    <th className="text-left py-4 px-4 text-[#FE7623] font-semibold">Chin Augmentation</th>
                    <th className="text-left py-4 px-4 text-zinc-600 font-semibold">Dermal Fillers</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-100 bg-white hover:bg-zinc-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-zinc-700 font-medium">{row.aspect}</td>
                      <td className="py-4 px-4 text-zinc-900">{row.chinAug}</td>
                      <td className="py-4 px-4 text-zinc-500">{row.fillers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <p className="text-zinc-400 text-sm mb-6">Chin augmentation cost varies depending on:</p>
                <ul className="space-y-4 mb-8">
                  {["Type of procedure (implant vs genioplasty)", "Implant type and size", "Combination with other procedures", "Anaesthesia and facility fees", "Surgeon's expertise and experience"].map((item, i) => (
                    <li key={i} className="flex flex-row items-start gap-3 text-sm text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300">
                      <svg className="w-6 h-6 min-w-[24px] flex-shrink-0 text-[#FE7623]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Chin%20Augmentation" className="btn-magnetic block w-full text-center bg-gradient-to-r from-[#FE7623] to-orange-500 text-white py-4 rounded-full text-sm font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/30 animate-glow">
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
                  <p className="text-sm text-zinc-500">Get answers to common concerns about chin augmentation</p>
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
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#FE7623] mb-6 transition-colors duration-300 cursor-default px-4">Final Thoughts</h2>
            <p className="text-base sm:text-lg text-zinc-500 mb-6 max-w-3xl mx-auto px-4">
              Achieve facial balance and a stronger profile with surgeon-performed chin augmentation in Malaysia.
            </p>
            <p className="text-sm text-zinc-600 mb-10 pb-[7px] max-w-3xl mx-auto px-4">
              When performed by a certified plastic surgeon, chin augmentation delivers subtle but powerful improvements to facial structure — enhancing harmony without changing who you are.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6 md:px-10">
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Chin%20Augmentation" className="btn-magnetic w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-gradient-to-r from-[#FE7623] to-orange-500 text-white px-12 py-5 rounded-full text-base font-semibold hover:from-[#e56010] hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/50 group animate-glow">
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
              {["Chin augmentation Malaysia", "genioplasty surgery", "chin implant", "facial balance", "jawline enhancement"].map((tag, i) => (
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
