import BaseImage from "@/components/BaseImage";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import { getFullUrl, getAssetPath } from "@/utils/helper";
import { Award, BadgeCheck, Users, ShieldCheck, Star, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Andrews",
    title: "Breast Augmentation Patient",
    rating: 5,
    text: "Dr. Soma is incredibly professional and kind. He took the time to explain everything and the results are exactly what I wanted. Highly recommended!"
  },
  {
    name: "Michelle Tan",
    title: "Rhinoplasty Patient",
    rating: 5,
    text: "The best decision I ever made. The team was supportive throughout the entire process, and my recovery was faster than expected. Thank you Dr. Soma!"
  },
  {
    name: "Jessica Lee",
    title: "Facelift Patient",
    rating: 5,
    text: "I look 10 years younger but still like myself. Dr. Soma's work is truly artistic. The staff are also wonderful and made me feel very safe."
  }
];

const faqs = [
  {
    question: "Do you offer WhatsApp support?",
    answer: "Yes. Our team is available on WhatsApp for appointment enquiries, basic questions, and follow-up support during clinic hours."
  },
  {
    question: "Where is the clinic located?",
    answer: "Soma Plastic Surgery (Clinical Aesthetics) is located in Subang Jaya, Malaysia. Full directions and location details are available on our contact page."
  },
  {
    question: "Is parking available at the clinic?",
    answer: "Yes. Convenient parking is available for patients visiting the clinic."
  },
  {
    question: "Do I need a referral to book an appointment?",
    answer: "No referral is needed. You can book a consultation directly with our clinic."
  },
  {
    question: "Do you accept walk-in visits?",
    answer: "Consultations are by appointment to ensure privacy and adequate time for each patient. We recommend booking in advance."
  },
  {
    question: "Does the clinic guarantee results?",
    answer: "Every treatment is planned carefully, but results can vary between individuals. We focus on safe, realistic, and natural outcomes rather than promises."
  },
  {
    question: "Will I feel pressured to proceed with treatment?",
    answer: "No. Consultations are for guidance and information. You decide if and when you wish to proceed."
  },
  {
    question: "Is my consultation private and confidential?",
    answer: "Yes. All consultations and patient information are handled with strict confidentiality and discretion."
  },
  {
    question: "Who will I be consulting with?",
    answer: "All consultations and procedures are personally handled by Dr Soma, a Consultant Plastic and Reconstructive Surgeon."
  },
  {
    question: "Can I contact the clinic before deciding?",
    answer: "Absolutely. You are welcome to contact us by phone or WhatsApp to ask general questions before booking a consultation."
  }
];

const specialties = [
  {
    title: "Face & Rejuvenation",
    description: "Facelifts, Rhinoplasty, Eyelid Surgery & more.",
    image: "/images/face_image.png",
    link: "/face",
    colSpan: "md:col-span-2"
  },
  {
    title: "Breast Procedures",
    description: "Augmentation, Lift, Reduction & Reconstruction.",
    image: "/images/breast_image.png",
    link: "/breast",
    colSpan: "md:col-span-1"
  },
  {
    title: "Body Contouring",
    description: "Liposuction, Tummy Tucks & Mommy Makeovers.",
    image: "/images/body_image.png",
    link: "/body",
    colSpan: "md:col-span-1"
  },
  {
    title: "Reconstructive Surgery",
    description: "Restoring form and function with precision.",
    image: "/images/scar_care_image.png",
    link: "/face",
    colSpan: "md:col-span-1"
  },
  {
    title: "Non-Surgical Aesthetics",
    description: "Fillers, Botox, and Skin Treatments.",
    image: "/images/aesthetic_services.png",
    link: "/aesthetic-treatments",
    colSpan: "md:col-span-1"
  }
];

const Home = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Soma Plastic Surgery - Clinical Aesthetics | Plastic Surgeon Malaysia</title>
        <meta name="description" content="Dr. Somasundaram Sathappan is a Plastic and Reconstructive Surgeon and heads the Soma Plastic Surgery (Clinical Aesthetics) Clinic in Subang Jaya, Malaysia." />
        <meta property="og:title" content="Soma Plastic Surgery - Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta property="og:description" content="Dr. Somasundaram Sathappan is a Plastic and Reconstructive Surgeon and heads the Soma Plastic Surgery (Clinical Aesthetics) Clinic in Subang Jaya, Malaysia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl('/')} />
        <meta property="og:image" content={getFullUrl('/images/dr_soma_hero.png')} />
        <link rel="canonical" href={getFullUrl('/')} />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-[#F9FAFB] overflow-hidden pt-32 lg:pt-36 pb-20 lg:pb-24">
        {/* Background Image - CSS background-image on right side */}
        <div
          className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-cover bg-center md:bg-left-top z-0 opacity-5 md:opacity-100"
          style={{ backgroundImage: `url('${getAssetPath('/images/Dr%20Soma%20Hero%20Image.png')}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9FAFB] via-[#F9FAFB]/80 to-transparent md:via-[#F9FAFB]/10"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-[#EA622F] text-xs font-bold tracking-widest uppercase mb-6">
              Premier Plastic Surgery Clinic
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#101010] leading-[1.1] mb-6">
              Bring Out The <span className="text-[#EA622F]">Natural Beauty</span> <br /> In You
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Experience world-class cosmetic and reconstructive surgery with a focus on safety, artistry, and personalized care.
            </p>

            {/* Checkmarks - 2x2 grid */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-[52px]">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Honest &amp; Ethical Guidance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Board Certified Surgeon</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Safety First Protocols</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">Natural Looking Results</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none active:scale-95 bg-[#EA622F] text-white hover:bg-[#d55627] hover:shadow-md h-14 rounded-full px-8 text-base shadow-lg shadow-orange-500/20 min-w-[200px] group"
                onClick={() => router.push('/contact-us')}
              >
                Book A Consultation
                <svg className="w-7 h-7 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none active:scale-95 border bg-background shadow-sm hover:text-accent-foreground border-[#EA622F] text-[#EA622F] hover:bg-[#EA622F]/10 h-14 rounded-full px-8 text-base min-w-[200px] group"
                onClick={() => router.push('/servicespage')}
              >
                Explore Procedures
                <svg className="w-7 h-7 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Empty right column - image is in background */}
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 md:py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border-x border-gray-100">
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center group hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#EA622F] mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 leading-tight">30+ Years Experience</h3>
              <p className="text-sm text-gray-500 mt-1">In Plastic Surgery</p>
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center group hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#EA622F] mb-4 group-hover:scale-110 transition-transform duration-300">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 leading-tight">Board Certified</h3>
              <p className="text-sm text-gray-500 mt-1">Consultant Surgeon</p>
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center group hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#EA622F] mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 leading-tight">Thousands of</h3>
              <p className="text-sm text-gray-500 mt-1">Happy Patients</p>
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center group hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-[#EA622F] mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 leading-tight">Patient Safety</h3>
              <p className="text-sm text-gray-500 mt-1">Our Top Priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Details Matter Section */}
      <section id="about" className="py-[50px] bg-white text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#101010] mb-6">Where Details Matter, And You Matter More</h2>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">
            Plastic surgery is a journey of self-discovery and enhancement. We are here to guide you with honesty, expertise, and a commitment to natural-looking results.
          </p>
        </div>
      </section>

      {/* Our Specialties Section */}
      <section id="services" className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-3 mb-12 items-center text-center">
            <span className="text-[#EA622F] font-semibold tracking-wider text-sm uppercase">Procedures</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101010] leading-[1.15]">Our Specialties</h2>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mt-2">
              Comprehensive aesthetic and reconstructive solutions tailored to your unique needs.
            </p>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {specialties.map((specialty, index) => (
              <Link
                key={index}
                href={specialty.link}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 ${specialty.colSpan}`}
              >
                <div className="absolute inset-0 w-full h-full">
                  <BaseImage
                    src={specialty.image}
                    alt={specialty.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2">{specialty.title}</h3>
                    <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {specialty.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#EA622F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      View Options <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Surgeon Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Doctor Image */}
            <div className="relative max-w-sm mx-auto">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 relative z-10">
                <BaseImage
                  src="/images/dr-soma-surgeon.jpg"
                  alt="Dr. Somasundaram Sathappan"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-50 rounded-full -z-0 hidden md:block"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-orange-100 rounded-full -z-0 hidden md:block"></div>
            </div>

            {/* Doctor Info */}
            <div>
              <div className="flex flex-col gap-3 items-start text-left mb-8">
                <span className="text-[#EA622F] font-semibold tracking-wider text-sm uppercase">Meet The Surgeon</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101010] leading-[1.15]">
                  Dr. Somasundaram Sathappan
                </h2>
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-4">
                Consultant Plastic, Reconstructive &amp; Aesthetic Surgeon
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Dr. Soma is a Consultant Plastic and Reconstructive Surgeon and the Head of Soma Plastic Surgery (Clinical Aesthetics) Clinic in Subang Jaya, Malaysia.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                With over three decades of experience, he has helped thousands of patients through aesthetic and reconstructive procedures, always with one goal: safe care and natural-looking outcomes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-gray-700 flex-1">You are heard, not pushed</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-gray-700 flex-1">Your safety is treated as the top priority</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-gray-700 flex-1">Your results are planned to look like you, not like a trend</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none active:scale-95 bg-[#EA622F] text-white hover:bg-[#d55627] shadow-sm hover:shadow-md h-14 px-8 min-w-[200px]"
                  onClick={() => router.push('/about-dr-soma')}
                >
                  Read Full Profile
                </button>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none active:scale-95 border bg-background shadow-sm hover:text-accent-foreground border-[#EA622F] text-[#EA622F] hover:bg-[#EA622F]/10 h-14 px-8 min-w-[200px]"
                  onClick={() => router.push('/about-dr-soma')}
                >
                  View Credentials
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Experience Section */}
      <section className="py-24 bg-white text-[#101010]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-3 items-center text-center mb-20">
            <span className="text-[#EA622F] font-semibold tracking-wider text-sm uppercase">Your Journey</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101010] leading-[1.15]">The Patient Experience</h2>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mt-2">
              A seamless, supportive journey from your first call to your final reveal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative isolate">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[48px] left-[50px] right-[50px] h-[2px] bg-gray-200 -z-10"></div>

            {/* Step 1 */}
            <div className="relative z-10 group flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 group-hover:border-[#EA622F] rounded-full flex items-center justify-center text-3xl font-bold mb-8 transition-colors duration-300 mx-auto md:mx-0 shadow-sm text-[#101010]">
                01
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#101010]">Consultation</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
                We listen to your goals and assess your needs in a private, comfortable setting.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 group flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 group-hover:border-[#EA622F] rounded-full flex items-center justify-center text-3xl font-bold mb-8 transition-colors duration-300 mx-auto md:mx-0 shadow-sm text-[#101010]">
                02
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#101010]">Personal Plan</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
                Dr. Soma creates a bespoke surgical plan tailored specifically to your anatomy.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 group flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 group-hover:border-[#EA622F] rounded-full flex items-center justify-center text-3xl font-bold mb-8 transition-colors duration-300 mx-auto md:mx-0 shadow-sm text-[#101010]">
                03
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#101010]">Procedure</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
                Your surgery is performed with the highest safety standards and care.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 group flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 group-hover:border-[#EA622F] rounded-full flex items-center justify-center text-3xl font-bold mb-8 transition-colors duration-300 mx-auto md:mx-0 shadow-sm text-[#101010]">
                04
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#101010]">Aftercare</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs md:max-w-none mx-auto md:mx-0">
                We support your recovery journey with regular follow-ups and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Stories Section */}
      <section id="reviews" className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-3 mb-12 items-center text-center">
            <span className="text-[#EA622F] font-semibold tracking-wider text-sm uppercase">Reviews</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101010] leading-[1.15]">Patient Stories</h2>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mt-2">
              Read what our happy patients have to say about their experience with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4 text-[#EA622F]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <span className="text-xs text-gray-400 uppercase tracking-wide">{testimonial.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-gray-900 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <span className="text-[#EA622F] font-bold tracking-widest uppercase text-sm mb-2 block">Common Questions</span>
                <h2 className="text-3xl font-bold mb-6">Need Answers?</h2>
                <p className="text-gray-600 mb-8">Can&apos;t find what you&apos;re looking for? Get in touch with our friendly team.</p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none active:scale-95 bg-[#EA622F] text-white hover:bg-[#d55627] shadow-sm hover:shadow-md h-14 px-8 min-w-[200px]"
                    onClick={() => router.push('/contact-us')}
                  >
                    Contact Us
                  </button>
                  <a
                    href="https://wa.me/60142616007?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none active:scale-95 bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm h-14 px-8 min-w-[200px]"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div>
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      className="w-full py-6 flex items-start justify-between text-left hover:text-[#EA622F] transition-colors gap-4"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-medium text-lg text-[#101010] flex-1">{faq.question}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EA622F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pb-8">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
