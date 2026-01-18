import Certificates from "@/components/certificates";
import BaseImage from "@/components/BaseImage";
import CloseIcon from "../../public/icons/close_new_icon.svg";
import PlusIcon from "../../public/icons/plus_new_icon.svg";
import CertificateEightIcon from "../../public/icons/certificate_eight.svg";
import CertificateElevenIcon from "../../public/icons/certificate_eleven.svg";
import CertificateFiveIcon from "../../public/icons/certificate_five.svg";
import CertificateFourIcon from "../../public/icons/certificate_four.svg";
import CertificateNineIcon from "../../public/icons/certificate_nine.svg";
import CertificateOneIcon from "../../public/icons/certificate_one.svg";
import CertificateSevenIcon from "../../public/icons/certificate_seven.svg";
import CertificateSixIcon from "../../public/icons/certificate_six.svg";
import CertificateTenIcon from "../../public/icons/certificate_ten.svg";
import CertificateThirteenIcon from "../../public/icons/certificate_thirteen.svg";
import CertificateThreeIcon from "../../public/icons/certificate_three.svg";
import CertificateTwevelIcon from "../../public/icons/certificate_twevel.svg";
import CertificateTwoIcon from "../../public/icons/certificate_two.svg";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import { getFullUrl, getAssetPath } from "@/utils/helper";
import { Award, Stethoscope, Users, ShieldCheck, Check, Smile, Heart, PersonStanding, Hammer, Sparkles, ArrowRight, ChevronRight, MessageCircle, MapPin, Phone, Clock, CheckCircle } from 'lucide-react';

const faqData = [
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

const certificateData = [
  { id: 1, certificate: <CertificateOneIcon /> },
  { id: 2, certificate: <CertificateTwoIcon /> },
  { id: 3, certificate: <CertificateThreeIcon /> },
  { id: 4, certificate: <CertificateFourIcon /> },
  { id: 5, certificate: <CertificateFiveIcon /> },
  { id: 6, certificate: <CertificateSixIcon /> },
  { id: 7, certificate: <CertificateSevenIcon /> },
  { id: 8, certificate: <CertificateEightIcon /> },
  { id: 9, certificate: <CertificateNineIcon /> },
  { id: 10, certificate: <CertificateTenIcon /> },
  { id: 11, certificate: <CertificateElevenIcon /> },
  { id: 12, certificate: <CertificateTwevelIcon /> },
  { id: 13, certificate: <CertificateThirteenIcon /> },
];

const Index = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  // Create refs for each section
  const heroRef = useRef<HTMLElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const doctorRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const storiesRef = useRef<HTMLElement>(null);
  const certificatesRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementId = entry.target.getAttribute('data-section');
          if (elementId) {
            setVisibleElements(prev => new Set([...prev, elementId]));
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = [heroRef, trustRef, philosophyRef, servicesRef, doctorRef, experienceRef, storiesRef, certificatesRef, faqRef, contactRef];
    sections.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute('data-section', `section-${index}`);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (sectionId: string) => visibleElements.has(sectionId);

  return (
    <>
      <Head>
        <title>Soma Plastic Surgery - Clinical Aesthetics | Plastic Surgeon Malaysia</title>
        <meta name="description" content="Dr. Somasundaram Sathappan is a Plastic and Reconstructive Surgeon and heads the Soma Plastic Surgery (Clinical Aesthetics) Clinic in Subang Jaya, Malaysia. Discover advanced aesthetic treatments and surgical excellence at Soma Plastic Surgery." />
        <meta property="og:title" content="Soma Plastic Surgery - Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta property="og:description" content="Dr. Somasundaram Sathappan is a Plastic and Reconstructive Surgeon and heads the Soma Plastic Surgery (Clinical Aesthetics) Clinic in Subang Jaya, Malaysia. Discover advanced aesthetic treatments and surgical excellence at Soma Plastic Surgery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl('/')} />
        <meta property="og:image" content={getFullUrl('/images/home_page_banner_image.png')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soma Plastic Surgery - Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta name="twitter:description" content="Dr. Somasundaram Sathappan is a Plastic and Reconstructive Surgeon and heads the Soma Plastic Surgery (Clinical Aesthetics) Clinic in Subang Jaya, Malaysia. Discover advanced aesthetic treatments and surgical excellence at Soma Plastic Surgery." />
        <meta name="twitter:image" content={getFullUrl('/images/home_page_banner_image.png')} />
        <link rel="canonical" href={getFullUrl('/')} />
      </Head>

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full overflow-hidden bg-zinc-50 lg:bg-white">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-32 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Text Content */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Clinical Aesthetics</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-[1.1] tracking-tighter">
              Bring Out The <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-400 italic">Natural Beauty</span> In You
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-500 max-w-lg leading-relaxed font-light">
              You do not need to &quot;change&quot; who you are to feel confident. Sometimes you just need the right hands, the right plan, and the right care.
            </p>

            <p className="text-sm sm:text-base text-zinc-500 max-w-lg">
              At Soma Plastic Surgery (Clinical Aesthetics), we blend aesthetic art with real medical evidence so your results look natural, feel right, and stay safe.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-l-2 border-orange-100 pl-4 sm:pl-6">
              <h3 className="text-xs sm:text-sm font-semibold text-zinc-900 uppercase tracking-widest">What you can expect here:</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-600">
                  <Check className="text-primary mt-0.5 w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                  A calm, private consultation that listens first
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-600">
                  <Check className="text-primary mt-0.5 w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                  Honest guidance with clear options
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-600">
                  <Check className="text-primary mt-0.5 w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                  Safety-focused planning from start to finish
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-600">
                  <Check className="text-primary mt-0.5 w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                  Results designed to suit your face, your body, your life
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
              <button
                className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-primary/20"
                onClick={() => router.push('/contactus')}
              >
                Book a Consultation
              </button>
              <button
                className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-3.5 bg-white border border-zinc-200 text-zinc-700 text-sm font-semibold rounded-lg hover:bg-zinc-50 transition-all"
                onClick={() => router.push('/servicespage')}
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative h-full min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[700px]">
            <div className="absolute inset-0 bg-zinc-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <BaseImage
                src="/images/home_page_banner_image.png"
                alt="Natural beauty"
                width={800}
                height={700}
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div ref={trustRef} className="border-y border-zinc-100 bg-white">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-10 transition-all duration-700 ${isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 group">
              <Award className="text-primary w-6 h-6 sm:w-8 sm:h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="text-xs sm:text-sm font-medium text-zinc-800">30+ Years of Experience</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 group">
              <Stethoscope className="text-primary w-6 h-6 sm:w-8 sm:h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="text-xs sm:text-sm font-medium text-zinc-800">Consultant Plastic Surgeon</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 group">
              <Users className="text-primary w-6 h-6 sm:w-8 sm:h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="text-xs sm:text-sm font-medium text-zinc-800">Thousands of Procedures</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2 group">
              <ShieldCheck className="text-primary w-6 h-6 sm:w-8 sm:h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="text-xs sm:text-sm font-medium text-zinc-800">Patient Safety First</span>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section ref={philosophyRef} className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Image Grid */}
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-lg sm:rounded-xl overflow-hidden translate-y-4 sm:translate-y-8 shadow-md sm:shadow-lg">
                <BaseImage
                  src="/images/breast_image.png"
                  alt="Clinic Interior"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg">
                <BaseImage
                  src="/images/face_image.png"
                  alt="Confident Woman"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Decor */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Text */}
            <div className="space-y-5 sm:space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-primary tracking-widest uppercase mb-2">A Different Kind of Beauty Care</h2>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tight">Where details matter, <br />and you matter more</h3>
              </div>

              <div className="prose prose-zinc text-zinc-500 font-light text-sm sm:text-base">
                <p>
                  Every person walks in with a different story. Some want to look fresher. Some want to feel normal again after pregnancy, weight changes, or an accident. Some are simply tired of avoiding mirrors.
                </p>
              </div>

              <div className="bg-zinc-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-100">
                <p className="mb-3 sm:mb-4 text-zinc-800 font-medium text-sm sm:text-base">Here, we do not rush you. We take time to understand:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> what you see
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> what you feel
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> what you want to keep the same
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> what you want to improve
                  </div>
                </div>
              </div>

              <div className="pl-3 sm:pl-4 border-l-2 border-primary">
                <p className="text-zinc-800 italic text-base sm:text-lg">
                  Because the best result is not just a &quot;before and after.&quot; <br />
                  It is waking up and feeling like yourself again.
                </p>
              </div>

              <button
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm sm:text-base"
                onClick={() => router.push('/contactus')}
              >
                Talk to Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-12 sm:py-16 lg:py-24 bg-zinc-50">
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-6 transition-all duration-700 ${isVisible('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">Choose your focus. <br />We will personalize the plan.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Face */}
            <div className="bg-white p-6 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-zinc-100">
              <div className="w-14 h-14 sm:w-14 sm:h-14 lg:w-12 lg:h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-zinc-900">
                <Smile className="w-7 h-7 sm:w-7 sm:h-7 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-xl sm:text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Face and Rejuvenation</h3>
              <p className="text-sm sm:text-sm text-zinc-500 mb-5 sm:mb-6 leading-relaxed">Refresh tired features, soften signs of aging, and keep your natural expressions.</p>
              <button
                className="text-sm font-semibold text-primary hover:text-orange-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                onClick={() => router.push('/face')}
              >
                View Face Options <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Breast */}
            <div className="bg-white p-6 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-zinc-100">
              <div className="w-14 h-14 sm:w-14 sm:h-14 lg:w-12 lg:h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-zinc-900">
                <Heart className="w-7 h-7 sm:w-7 sm:h-7 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-xl sm:text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Breast Procedures</h3>
              <p className="text-sm sm:text-sm text-zinc-500 mb-5 sm:mb-6 leading-relaxed">Balanced shape, proportion, and confidence, with safety and comfort in mind.</p>
              <button
                className="text-sm font-semibold text-primary hover:text-orange-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                onClick={() => router.push('/breast')}
              >
                View Breast Options <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="bg-white p-6 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-zinc-100">
              <div className="w-14 h-14 sm:w-14 sm:h-14 lg:w-12 lg:h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-zinc-900">
                <PersonStanding className="w-7 h-7 sm:w-7 sm:h-7 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-xl sm:text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Body Contouring</h3>
              <p className="text-sm sm:text-sm text-zinc-500 mb-5 sm:mb-6 leading-relaxed">Support your goals after weight change or pregnancy with a plan that fits your body.</p>
              <button
                className="text-sm font-semibold text-primary hover:text-orange-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                onClick={() => router.push('/body')}
              >
                View Body Options <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Reconstructive */}
            <div className="bg-white p-6 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-zinc-100">
              <div className="w-14 h-14 sm:w-14 sm:h-14 lg:w-12 lg:h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-zinc-900">
                <Hammer className="w-7 h-7 sm:w-7 sm:h-7 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-xl sm:text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Reconstructive Surgery</h3>
              <p className="text-sm sm:text-sm text-zinc-500 mb-5 sm:mb-6 leading-relaxed">Care that restores form and function with respect, privacy, and skill.</p>
              <button
                className="text-sm font-semibold text-primary hover:text-orange-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                onClick={() => router.push('/servicespage')}
              >
                View Reconstructive Care <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Non-Surgical */}
            <div className="bg-white p-6 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-zinc-100">
              <div className="w-14 h-14 sm:w-14 sm:h-14 lg:w-12 lg:h-12 bg-zinc-50 rounded-lg flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-zinc-900">
                <Sparkles className="w-7 h-7 sm:w-7 sm:h-7 lg:w-6 lg:h-6" />
              </div>
              <h3 className="text-xl sm:text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Non-Surgical Aesthetics</h3>
              <p className="text-sm sm:text-sm text-zinc-500 mb-5 sm:mb-6 leading-relaxed">Subtle improvements with minimal downtime, guided by medical judgement.</p>
              <button
                className="text-sm font-semibold text-primary hover:text-orange-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                onClick={() => router.push('/servicespage')}
              >
                View Non-Surgical Options <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-xs text-zinc-400">Small note: Suitability depends on your health and assessment. A consultation is required.</p>
          </div>
        </div>
      </section>

      {/* Meet the Doctor */}
      <section ref={doctorRef} className="py-12 sm:py-16 lg:py-24 bg-white relative">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible('section-4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-zinc-50 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-100">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-2">Meet The Doctor</h2>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tight mb-4 sm:mb-6">Dr. Somasundaram Sathappan <br /><span className="text-lg sm:text-xl font-normal text-zinc-500">(Dr. Soma)</span></h3>

                <p className="text-sm sm:text-base text-zinc-600 mb-4 sm:mb-6 leading-relaxed">
                  Dr. Soma is a Consultant Plastic and Reconstructive Surgeon and the Head of Soma Plastic Surgery (Clinical Aesthetics) Clinic in Subang Jaya, Malaysia.
                </p>
                <p className="text-sm sm:text-base text-zinc-600 mb-6 sm:mb-8 leading-relaxed">
                  With over three decades of experience, he has helped thousands of patients through aesthetic and reconstructive procedures, always with one goal: safe care and natural-looking outcomes.
                </p>

                <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl border border-zinc-100 mb-6 sm:mb-8">
                  <p className="text-xs sm:text-sm font-semibold text-zinc-900 mb-2 sm:mb-3">Why patients feel comfortable here:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span> You are heard, not pushed
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span> Your safety is treated as the top priority
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span> Your results are planned to look like you, not like a trend
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <button
                    className="px-5 sm:px-6 py-2.5 bg-zinc-900 text-white text-sm font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
                    onClick={() => router.push('/aboutus')}
                  >
                    Read Full Profile
                  </button>
                  <button
                    className="px-5 sm:px-6 py-2.5 bg-white border border-zinc-300 text-zinc-700 text-sm font-semibold rounded-lg hover:bg-zinc-50 transition-colors"
                    onClick={() => {
                      const certSection = document.getElementById('certificates-section');
                      certSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    See Credentials
                  </button>
                </div>
              </div>
              <div className="relative bg-zinc-200 min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] order-1 lg:order-2">
                <BaseImage
                  src="/images/dr_soma_pic.png"
                  alt="Dr. Soma"
                  width={800}
                  height={600}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <blockquote className="text-white font-serif italic text-sm sm:text-lg lg:text-xl font-light">
                    &quot;The best choice a patient can make is one that leads to their own happiness.&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Experience */}
      <section ref={experienceRef} className="py-12 sm:py-16 lg:py-24 bg-zinc-900 text-white">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible('section-5') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-2 sm:mb-3">The Soma Patient Experience</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">Simple steps. Strong care. No confusion.</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">
            {/* Line connector for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-zinc-800 -z-10 w-[80%] mx-auto"></div>

            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-zinc-800 rounded-full border-4 border-zinc-900 flex items-center justify-center mb-4 sm:mb-6 group-hover:border-primary transition-colors z-10">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">01</span>
              </div>
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Consultation</h4>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed px-1 sm:px-4">We listen, assess, and answer your questions in simple words.</p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-zinc-800 rounded-full border-4 border-zinc-900 flex items-center justify-center mb-4 sm:mb-6 group-hover:border-primary transition-colors z-10">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">02</span>
              </div>
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Personal Plan</h4>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed px-1 sm:px-4">You get a clear plan based on your features, goals, and medical needs.</p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-zinc-800 rounded-full border-4 border-zinc-900 flex items-center justify-center mb-4 sm:mb-6 group-hover:border-primary transition-colors z-10">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">03</span>
              </div>
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Procedure Day</h4>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed px-1 sm:px-4">A careful approach with attention to every detail.</p>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-zinc-800 rounded-full border-4 border-zinc-900 flex items-center justify-center mb-4 sm:mb-6 group-hover:border-primary transition-colors z-10">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">04</span>
              </div>
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-1 sm:mb-2">Aftercare</h4>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed px-1 sm:px-4">Healing support matters. We stay with you through recovery.</p>
            </div>
          </div>

          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <button
              className="inline-flex justify-center items-center px-6 sm:px-10 py-3 sm:py-4 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-all"
              onClick={() => router.push('/contactus')}
            >
              Start with a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section ref={storiesRef} className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 ${isVisible('section-6') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-2 sm:mb-3">Success Stories Teaser</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tight mb-6 sm:mb-8">Real people. Real changes. Real confidence.</h3>

          <div className="bg-zinc-50 p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-zinc-100 mb-6 sm:mb-8 inline-block w-full">
            <p className="text-base sm:text-lg text-zinc-800 font-medium mb-4 sm:mb-6">You will find stories from patients who wanted:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left max-w-lg mx-auto">
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="text-primary w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-zinc-600">a softer, fresher look</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="text-primary w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-zinc-600">a more balanced shape</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="text-primary w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-zinc-600">repair after injury or change</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="text-primary w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-zinc-600">confidence without looking &quot;done&quot;</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white border border-zinc-200 text-zinc-900 text-sm font-semibold rounded-lg hover:bg-zinc-50 transition-colors shadow-sm"
              onClick={() => router.push('/gallery')}
            >
              View Success Stories
            </button>
            <button
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white border border-zinc-200 text-zinc-900 text-sm font-semibold rounded-lg hover:bg-zinc-50 transition-colors shadow-sm"
              onClick={() => router.push('/gallery')}
            >
              Before and After Gallery
            </button>
          </div>
          <p className="mt-4 sm:mt-6 text-xs text-zinc-400">Small note: Results vary from person to person.</p>
        </div>
      </section>

      {/* Certificates */}
      <section ref={certificatesRef} className="py-10 sm:py-12 lg:py-16 bg-zinc-900 border-y border-zinc-800 overflow-hidden" id="certificates-section">
        <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-6 transition-all duration-700 ${isVisible('section-7') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            <div className="text-center lg:text-left w-full">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 leading-tight">Credentials you can see, not just hear about</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">We believe trust should be clear. View Dr. Soma&apos;s certificates and professional background anytime.</p>
            </div>
          </div>
          <div className="overflow-hidden w-full">
            <Certificates certificates={certificateData} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-12 sm:py-16 lg:py-24">
        <div className="flex w-full containers px-4 sm:px-6">
          <div className={`flex w-full flex-col gap-6 sm:gap-8 lg:gap-10 transition-all duration-700 ${isVisible('section-8') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-primary md:text-start text-center text-2xl sm:text-3xl lg:text-4xl">
              Frequently Asked <span className="text-header-black">Questions</span>
            </h2>
            <div className="flex w-full flex-col gap-[6px]">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 sm:gap-6 lg:gap-10 w-full border border-stroke bg-para-white rounded-[10px] sm:rounded-[12px] py-3 sm:py-[14px] px-4 sm:px-[24px]"
                >
                  <div
                    className="flex justify-between !flex-nowrap w-full cursor-pointer items-center gap-3"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h5 className="text-primary text-sm sm:text-base lg:text-lg">{item.question}</h5>
                    <div className="flex flex-shrink-0">
                      {openIndex === index ? <CloseIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
                    </div>
                  </div>
                  {openIndex === index && (
                    <div className="flex">
                      <p className="text-para-black text-sm sm:text-base">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="relative bg-orange-50 py-12 sm:py-16 lg:py-24">
        <div className={`max-w-5xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 ${isVisible('section-9') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tight mb-4 sm:mb-6">Ready when you are</h2>
          <p className="text-base sm:text-lg text-zinc-600 font-light max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10">
            If you are thinking about a change, start with a private conversation. We are here to help you feel clear, calm, and confident in your decision.
          </p>

          <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl shadow-primary/5 border border-orange-100 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 lg:gap-8 mb-5 sm:mb-6 lg:mb-8 border-b border-zinc-100 pb-5 sm:pb-6 lg:pb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-50 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold uppercase text-zinc-400">Clinic Hours</span>
                  <span className="block text-xs sm:text-sm text-zinc-800 font-medium">9:00am - 5:00pm (Mon-Fri) <br className="sm:hidden" /> | 9:00am - 1:00pm (Sat)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-50 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold uppercase text-zinc-400">Location</span>
                  <span className="block text-xs sm:text-sm text-zinc-800 font-medium">Subang Jaya, Malaysia</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-all shadow-md"
                onClick={() => router.push('/contactus')}
              >
                Book Appointment
              </button>
              <a
                href="tel:+60378SEE WEBSITE"
                className="inline-flex justify-center items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white border border-zinc-200 text-zinc-700 text-sm font-semibold rounded-lg hover:bg-zinc-50 transition-all"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#25D366] text-white text-sm font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Index;
