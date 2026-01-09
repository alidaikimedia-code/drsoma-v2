import Certificates from "@/components/certificates";
import BaseImage from "@/components/BaseImage";

// Animation styles
const animationStyles = `
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  @keyframes slideInFromBottom {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-fadeInLeft {
    animation: fadeInLeft 0.8s ease-out forwards;
  }

  .animate-fadeInRight {
    animation: fadeInRight 0.8s ease-out forwards;
  }

  .animate-fadeIn {
    animation: fadeIn 0.8s ease-out forwards;
  }

  .animate-scaleIn {
    animation: scaleIn 0.8s ease-out forwards;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-pulse-slow {
    animation: pulse 2s ease-in-out infinite;
  }

  .animate-slideInFromBottom {
    animation: slideInFromBottom 0.8s ease-out forwards;
  }

  .animation-delay-100 { animation-delay: 0.1s; }
  .animation-delay-200 { animation-delay: 0.2s; }
  .animation-delay-300 { animation-delay: 0.3s; }
  .animation-delay-400 { animation-delay: 0.4s; }
  .animation-delay-500 { animation-delay: 0.5s; }
  .animation-delay-600 { animation-delay: 0.6s; }
  .animation-delay-700 { animation-delay: 0.7s; }
  .animation-delay-800 { animation-delay: 0.8s; }
`;
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
import { getFullUrl } from "@/utils/helper";
import {
  Award, Stethoscope, Users, ShieldCheck, Check, Smile, Heart,
  PersonStanding, Hammer, Sparkles, ArrowRight, ChevronRight,
  MessageCircle, MapPin, Phone, Clock, CheckCircle, Ear, Eye,
  BookOpen, UserCheck, HandHeart, Shield, Clipboard, Calendar,
  Activity, HeartPulse
} from 'lucide-react';

// FAQ Data - All 15 questions from the content
const faqData = [
  {
    question: "Is aesthetic consultation confidential?",
    answer: "Yes. All consultations and patient information are handled with strict privacy and discretion."
  },
  {
    question: "Do I need a referral to book an appointment?",
    answer: "No referral is required. You can book directly with the clinic."
  },
  {
    question: "Will I feel pressured to proceed?",
    answer: "No. Consultations are for guidance and information only. The decision is always yours."
  },
  {
    question: "Who will conduct my consultation?",
    answer: "All consultations and procedures are personally handled by Dr. Soma."
  },
  {
    question: "Are results guaranteed?",
    answer: "No medical procedure can guarantee results. The focus is on safe and realistic outcomes."
  },
  {
    question: "How do I know if I am suitable?",
    answer: "Suitability is determined during consultation based on health, anatomy, and goals."
  },
  {
    question: "Is parking available?",
    answer: "Yes. Convenient parking is available for patients."
  },
  {
    question: "Where is the clinic located?",
    answer: "The clinic is located in Subang Jaya, Malaysia."
  },
  {
    question: "Are walk ins accepted?",
    answer: "Consultations are by appointment to ensure privacy and adequate time."
  },
  {
    question: "Can I contact the clinic before deciding?",
    answer: "Yes. You may call or message the clinic with general questions before booking."
  },
  {
    question: "Is WhatsApp support available?",
    answer: "Yes. WhatsApp support is available during clinic hours."
  },
  {
    question: "How long does a consultation take?",
    answer: "Consultations are not rushed and typically allow enough time for discussion and questions."
  },
  {
    question: "Is safety prioritized over aesthetics?",
    answer: "Yes. Safety is always the top priority in planning and treatment."
  },
  {
    question: "Are treatments personalized?",
    answer: "Yes. Every plan is tailored to the individual patient."
  },
  {
    question: "What if I decide not to proceed after consultation?",
    answer: "That is completely fine. There is no obligation to continue."
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

const NewHome = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  // Create refs for each section
  const heroRef = useRef<HTMLElement>(null);
  const heardRef = useRef<HTMLElement>(null);
  const evidenceRef = useRef<HTMLElement>(null);
  const differenceRef = useRef<HTMLElement>(null);
  const personalizedRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const doctorRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const confidenceRef = useRef<HTMLElement>(null);
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

    const sections = [heroRef, heardRef, evidenceRef, differenceRef, personalizedRef, servicesRef, doctorRef, experienceRef, confidenceRef, certificatesRef, faqRef, contactRef];
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
        <title>Soma Plastic Surgery - Feel Comfortable In Your Own Skin Again</title>
        <meta name="description" content="At Soma Plastic Surgery (Clinical Aesthetics), everything begins with one simple belief. You deserve care that listens, respects, and protects you. Calm conversations, not pressure." />
        <meta property="og:title" content="Soma Plastic Surgery - Feel Comfortable In Your Own Skin Again" />
        <meta property="og:description" content="At Soma Plastic Surgery (Clinical Aesthetics), everything begins with one simple belief. You deserve care that listens, respects, and protects you." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl('/new-home')} />
        <meta property="og:image" content={getFullUrl('/images/home_page_banner_image.png')} />
        <link rel="canonical" href={getFullUrl('/new-home')} />
        <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      </Head>

      {/* Hero Section - Calm, Trust-Focused */}
      <section ref={heroRef} className="relative w-full min-h-screen bg-gradient-to-b from-stone-50 to-white overflow-hidden">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[50px] pb-[50px] md:pt-[60px] md:pb-[60px] transition-all duration-1000 ${isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

            {/* Text Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-stone-100 px-4 py-2 rounded-full animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></span>
                <span className="text-xs font-medium text-stone-600 tracking-wide">Clinical Aesthetics</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-stone-800 leading-tight tracking-tight animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Feel Comfortable In <br />
                <span className="font-normal text-stone-600">Your Own Skin Again</span>
              </h1>

              <div className="space-y-4 text-stone-600 leading-relaxed animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <p className="text-lg lg:text-xl font-light">
                  Feeling confident in your appearance is not about becoming someone else. It is about feeling at ease when you look in the mirror. Feeling like your outside reflects who you are inside.
                </p>
                <p className="text-base lg:text-lg">
                  At Soma Plastic Surgery (Clinical Aesthetics), everything begins with one simple belief. <strong className="text-stone-800 font-medium">You deserve care that listens, respects, and protects you.</strong>
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-100 rounded-2xl p-6 lg:p-8 animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                <p className="text-stone-700">
                  Many people arrive unsure. Some feel nervous. Some have waited years before taking this step. Others are only gathering information. <span className="text-stone-800 font-medium">All of that is okay.</span>
                </p>
              </div>

              <div className="flex flex-row gap-2 sm:gap-4 pt-4 animate-fadeInUp opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <button
                  className="inline-flex justify-center items-center px-2.5 sm:px-8 py-2 sm:py-3 bg-primary text-white text-[11px] sm:text-sm font-medium rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap"
                  onClick={() => router.push('/contact-us')}
                >
                  Book Consultation
                </button>
                <button
                  className="inline-flex justify-center items-center px-2.5 sm:px-8 py-2 sm:py-3 bg-white border border-primary text-primary text-[11px] sm:text-sm font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 whitespace-nowrap"
                  onClick={() => router.push('/servicespage')}
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 relative animate-fadeInRight opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-200/50 hover:shadow-3xl transition-shadow duration-500">
                <BaseImage
                  src="/images/home_page_banner_image.png"
                  alt="Feel comfortable in your own skin"
                  width={700}
                  height={900}
                  className="w-full h-[380px] sm:h-[420px] md:h-[480px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div>
                {/* Floating Quote Box */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 lg:bottom-6 lg:left-6 lg:right-6 bg-stone-900/90 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 shadow-xl border border-stone-700/50 animate-slideInFromBottom opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                  <p className="text-white text-[10px] sm:text-sm lg:text-base italic leading-relaxed">
                    &quot;This space is designed for calm conversations, not pressure. You are not here to be convinced. You are here to be understood.&quot;
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-stone-100 rounded-full -z-10 animate-float"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators - Full Width Boxes */}
      <div className="bg-stone-900 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 my-6 sm:my-[30px]">
            <div className="bg-stone-800 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 flex items-center gap-3 sm:gap-4 hover:bg-stone-700 hover:-translate-y-1 transition-all duration-300 group animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                <Shield className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-sm lg:text-base">Natural Outcomes</p>
                <p className="text-stone-400 text-xs sm:text-xs lg:text-sm">Results that look like you</p>
              </div>
            </div>
            <div className="bg-stone-800 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 flex items-center gap-3 sm:gap-4 hover:bg-stone-700 hover:-translate-y-1 transition-all duration-300 group animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                <BookOpen className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-sm lg:text-base">Medical Responsibility</p>
                <p className="text-stone-400 text-xs sm:text-xs lg:text-sm">Evidence-based approach</p>
              </div>
            </div>
            <div className="bg-stone-800 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 flex items-center gap-3 sm:gap-4 hover:bg-stone-700 hover:-translate-y-1 transition-all duration-300 group animate-fadeInUp opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                <HeartPulse className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-sm lg:text-base">Long Term Wellbeing</p>
                <p className="text-stone-400 text-xs sm:text-xs lg:text-sm">Your health comes first</p>
              </div>
            </div>
            <div className="bg-stone-800 rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 flex items-center gap-3 sm:gap-4 hover:bg-stone-700 hover:-translate-y-1 transition-all duration-300 group animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                <UserCheck className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-sm lg:text-base">Nothing Rushed</p>
                <p className="text-stone-400 text-xs sm:text-xs lg:text-sm">Take your time to decide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* A Place Where You Are Heard First */}
      <section ref={heardRef} className="py-12 sm:py-16 lg:py-32 bg-white">
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            {/* Image Side */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-4 animate-fadeInLeft opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <BaseImage
                      src="/images/breast_image.png"
                      alt="Caring environment"
                      width={350}
                      height={500}
                      className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[420px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
                <div className="sm:pt-10 animate-fadeInRight opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <BaseImage
                      src="/images/face_image.png"
                      alt="Professional care"
                      width={350}
                      height={500}
                      className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[420px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-stone-50 rounded-full -z-10 animate-float"></div>
            </div>

            {/* Content Side */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 leading-tight">
                A Place Where You Are <span className="font-normal text-stone-600">Heard First</span>
              </h2>

              <div className="space-y-3 sm:space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Every face has a story. Every body has been through changes. Life events, age, pregnancy, weight shifts, stress, illness, or injury can all leave marks. Some are visible. Some are felt quietly.
                </p>
                <p className="font-medium text-stone-700">
                  At our clinic, the first step is always listening.
                </p>
              </div>

              <div className="bg-stone-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                <p className="text-stone-700 font-medium text-sm sm:text-base">We take time to understand:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-stone-600 text-sm sm:text-base">
                    <div className="w-7 h-7 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                    </div>
                    What bothers you and why
                  </li>
                  <li className="flex items-start gap-3 text-stone-600 text-sm sm:text-base">
                    <div className="w-7 h-7 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                    </div>
                    What you want to keep exactly the same
                  </li>
                  <li className="flex items-start gap-3 text-stone-600 text-sm sm:text-base">
                    <div className="w-7 h-7 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                    </div>
                    What changes you are hoping for
                  </li>
                  <li className="flex items-start gap-3 text-stone-600 text-sm sm:text-base">
                    <div className="w-7 h-7 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                    </div>
                    What worries or fears you may have
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-stone-300 pl-4 sm:pl-6">
                <p className="text-stone-700 italic text-base sm:text-lg">
                  There is no single definition of beauty here. The goal is not perfection. The goal is balance, comfort, and confidence that feels real to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Aesthetics Guided by Evidence */}
      <section ref={evidenceRef} className="py-12 sm:py-16 lg:py-32 bg-stone-50">
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 leading-tight mb-4 sm:mb-6">
              Medical Aesthetics Guided by <span className="font-normal text-stone-600">Evidence, Not Trends</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Aesthetic medicine should never be driven by social media trends or pressure. Treatments and procedures affect real bodies and real lives. That is why our approach is grounded in medical evidence, anatomy, and safety.
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-sm border border-stone-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center sm:text-left">
                <div className="w-14 h-14 sm:w-14 sm:h-14 mx-auto sm:mx-0 mb-3 sm:mb-4 bg-stone-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 sm:w-6 sm:h-6 text-stone-600" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-stone-800 mb-2">Informed Decisions</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Trusted medical institutions emphasize understanding benefits, limitations, and recovery before proceeding with any aesthetic care.
                </p>
              </div>
              <div className="text-center sm:text-left">
                <div className="w-14 h-14 sm:w-14 sm:h-14 mx-auto sm:mx-0 mb-3 sm:mb-4 bg-stone-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Eye className="w-7 h-7 sm:w-6 sm:h-6 text-stone-600" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-stone-800 mb-2">Realistic Expectations</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  We discuss what is achievable based on your unique anatomy and circumstances, not idealized images.
                </p>
              </div>
              <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 sm:w-14 sm:h-14 mx-auto sm:mx-0 mb-3 sm:mb-4 bg-stone-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Shield className="w-7 h-7 sm:w-6 sm:h-6 text-stone-600" />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-stone-800 mb-2">Understanding Risks</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Every procedure has considerations. We believe you should understand them clearly before making any decision.
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-stone-100 text-center">
              <p className="text-stone-700 italic text-base sm:text-lg">
                We believe education builds confidence. When you understand your options clearly, you make better decisions for yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Soma Different */}
      <section ref={differenceRef} className="py-12 sm:py-16 lg:py-32 bg-white">
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            {/* Content */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 leading-tight">
                What Makes Soma Plastic Surgery <span className="font-normal text-stone-600">Different</span>
              </h2>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                There are many aesthetic clinics. What sets this clinic apart is how care is delivered.
              </p>

              <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                <p className="text-stone-700 font-medium text-sm sm:text-base">You can expect:</p>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl">
                    <div className="w-7 h-7 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-stone-700 text-sm sm:text-base">A private, calm consultation environment</span>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl">
                    <div className="w-7 h-7 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-stone-700 text-sm sm:text-base">Honest explanations in simple language</span>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl">
                    <div className="w-7 h-7 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-stone-700 text-sm sm:text-base">Clear discussion of options without pressure</span>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl">
                    <div className="w-7 h-7 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-stone-700 text-sm sm:text-base">Safety focused planning from start to finish</span>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl">
                    <div className="w-7 h-7 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-stone-700 text-sm sm:text-base">Respect for your boundaries and decisions</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-stone-300 pl-4 sm:pl-6 py-2">
                <p className="text-stone-700 font-medium text-sm sm:text-base">
                  You will never be rushed into a choice. You will never be promised unrealistic outcomes. Your wellbeing always comes first.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-first lg:order-last">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <BaseImage
                  src="/images/clinic-office.png"
                  alt="Calm clinic environment"
                  width={600}
                  height={500}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-stone-100 rounded-full -z-10 hidden sm:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Care */}
      <section ref={personalizedRef} className="py-12 sm:py-16 lg:py-32 bg-stone-50">
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible('section-4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 leading-tight mb-4 sm:mb-6">
              Personalized Care, <span className="font-normal text-stone-600">Not One Size Fits All</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              No two people should receive the same plan. Even if two patients ask for the same goal, their anatomy, health history, and expectations are different.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-stone-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <Smile className="w-6 h-6 sm:w-6 sm:h-6 text-stone-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-medium text-stone-800 mb-1 sm:mb-2 text-sm sm:text-base">Your Unique Features</h3>
              <p className="text-stone-600 text-xs sm:text-sm">Facial structure or body proportions considered</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-stone-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <Clipboard className="w-6 h-6 sm:w-6 sm:h-6 text-stone-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-medium text-stone-800 mb-1 sm:mb-2 text-sm sm:text-base">Medical Background</h3>
              <p className="text-stone-600 text-xs sm:text-sm">Your health history informs every decision</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-stone-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <Activity className="w-6 h-6 sm:w-6 sm:h-6 text-stone-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-medium text-stone-800 mb-1 sm:mb-2 text-sm sm:text-base">Lifestyle Needs</h3>
              <p className="text-stone-600 text-xs sm:text-sm">Recovery planned around your life</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-stone-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <HeartPulse className="w-6 h-6 sm:w-6 sm:h-6 text-stone-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-medium text-stone-800 mb-1 sm:mb-2 text-sm sm:text-base">Long Term Goals</h3>
              <p className="text-stone-600 text-xs sm:text-sm">Not short term trends</p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-stone-700 italic text-base sm:text-lg max-w-2xl mx-auto">
              This careful planning is what helps results look natural and feel right over time.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Care We Support */}
      <section ref={servicesRef} className="pt-[50px] pb-[50px] sm:py-16 lg:py-32 bg-white">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible('section-5') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 leading-tight mb-4 sm:mb-6">
              Areas of Care <span className="font-normal text-stone-600">We Support</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

            {/* Facial and Rejuvenation Care */}
            <div className="bg-stone-50 py-[26px] px-[10px] sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-fadeInUp opacity-0 text-center sm:text-left" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="w-14 h-14 sm:w-14 sm:h-14 mb-4 sm:mb-6 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors mx-auto sm:mx-0">
                <Smile className="w-7 h-7 sm:w-7 sm:h-7 text-stone-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-stone-800 mb-2 sm:mb-4">Facial and Rejuvenation Care</h3>
              <p className="text-stone-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                As we age, changes happen gradually. Skin texture shifts. Volume changes. Features may look tired even when you feel energetic.
              </p>
              <p className="text-stone-600 text-xs sm:text-sm italic">
                The aim is not to erase character. It is to soften signs that no longer reflect how you feel.
              </p>
              <button
                className="mt-4 sm:mt-6 text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base justify-center sm:justify-start w-full sm:w-auto"
                onClick={() => router.push('/face')}
              >
                View Face Options <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Breast Care and Balance */}
            <div className="bg-stone-50 py-[26px] px-[10px] sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-fadeInUp opacity-0 text-center sm:text-left" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="w-14 h-14 sm:w-14 sm:h-14 mb-4 sm:mb-6 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors mx-auto sm:mx-0">
                <Heart className="w-7 h-7 sm:w-7 sm:h-7 text-stone-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-stone-800 mb-2 sm:mb-4">Breast Care and Balance</h3>
              <p className="text-stone-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Breast shape and proportion can affect posture, comfort, and confidence. Changes may occur after pregnancy, weight changes, or with age.
              </p>
              <p className="text-stone-600 text-xs sm:text-sm italic">
                Care in this area focuses on harmony with your body frame, comfort, and safety.
              </p>
              <button
                className="mt-4 sm:mt-6 text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base justify-center sm:justify-start w-full sm:w-auto"
                onClick={() => router.push('/breast')}
              >
                View Breast Options <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Body Contouring Support */}
            <div className="bg-stone-50 py-[26px] px-[10px] sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-fadeInUp opacity-0 text-center sm:text-left" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="w-14 h-14 sm:w-14 sm:h-14 mb-4 sm:mb-6 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors mx-auto sm:mx-0">
                <PersonStanding className="w-7 h-7 sm:w-7 sm:h-7 text-stone-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-stone-800 mb-2 sm:mb-4">Body Contouring Support</h3>
              <p className="text-stone-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Body changes are part of life. Sometimes exercise and nutrition alone cannot address certain areas.
              </p>
              <p className="text-stone-600 text-xs sm:text-sm italic">
                Body contouring care is about supporting your efforts, not replacing them.
              </p>
              <button
                className="mt-4 sm:mt-6 text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base justify-center sm:justify-start w-full sm:w-auto"
                onClick={() => router.push('/body')}
              >
                View Body Options <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Reconstructive Support */}
            <div className="bg-stone-50 py-[26px] px-[10px] sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-fadeInUp opacity-0 text-center sm:text-left" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <div className="w-14 h-14 sm:w-14 sm:h-14 mb-4 sm:mb-6 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors mx-auto sm:mx-0">
                <Hammer className="w-7 h-7 sm:w-7 sm:h-7 text-stone-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-stone-800 mb-2 sm:mb-4">Reconstructive Support</h3>
              <p className="text-stone-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Reconstructive care goes beyond appearance. It restores form and function after injury, illness, or congenital conditions.
              </p>
              <p className="text-stone-600 text-xs sm:text-sm italic">
                This work requires sensitivity, skill, and respect for each individual&apos;s experience.
              </p>
              <button
                className="mt-4 sm:mt-6 text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base justify-center sm:justify-start w-full sm:w-auto"
                onClick={() => router.push('/servicespage')}
              >
                View Reconstructive Care <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Non Surgical Aesthetic Options */}
            <div className="bg-stone-50 py-[26px] px-[10px] sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-fadeInUp opacity-0 text-center sm:text-left" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <div className="w-14 h-14 sm:w-14 sm:h-14 mb-4 sm:mb-6 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors mx-auto sm:mx-0">
                <Sparkles className="w-7 h-7 sm:w-7 sm:h-7 text-stone-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-stone-800 mb-2 sm:mb-4">Non Surgical Aesthetic Options</h3>
              <p className="text-stone-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Not everyone wants surgery. Non surgical options can offer subtle improvements with minimal downtime.
              </p>
              <p className="text-stone-600 text-xs sm:text-sm italic">
                These are planned carefully to avoid over treatment and maintain natural expression.
              </p>
              <button
                className="mt-4 sm:mt-6 text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base justify-center sm:justify-start w-full sm:w-auto"
                onClick={() => router.push('/aesthetic-treatments')}
              >
                View Non Surgical Options <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Male Procedures */}
            <div className="bg-stone-50 py-[26px] px-[10px] sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group animate-fadeInUp opacity-0 text-center sm:text-left" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="w-14 h-14 sm:w-14 sm:h-14 mb-4 sm:mb-6 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors mx-auto sm:mx-0">
                <Users className="w-7 h-7 sm:w-7 sm:h-7 text-stone-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-stone-800 mb-2 sm:mb-4">Male Procedures</h3>
              <p className="text-stone-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                Men also seek aesthetic care for various concerns. Our approach remains the same: respectful, private, and safety-focused.
              </p>
              <p className="text-stone-600 text-xs sm:text-sm italic">
                Suitability always depends on personal assessment and health considerations.
              </p>
              <button
                className="mt-4 sm:mt-6 text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base justify-center sm:justify-start w-full sm:w-auto"
                onClick={() => router.push('/male')}
              >
                View Male Options <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-stone-500 text-xs sm:text-sm">
              Suitability always depends on personal assessment and health considerations.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Doctor Behind the Care */}
      <section ref={doctorRef} className="py-12 sm:py-16 lg:py-32 bg-stone-800 text-white">
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible('section-6') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            {/* Doctor Image */}
            <div className="relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden">
                <BaseImage
                  src="/images/dr_soma_pic.png"
                  alt="Dr. Somasundaram Sathappan"
                  width={600}
                  height={700}
                  className="w-full h-[300px] sm:h-[400px] lg:h-auto object-cover"
                />
              </div>
              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-stone-900/95 to-transparent">
                <blockquote className="text-white/90 italic text-base sm:text-lg lg:text-xl font-light">
                  &quot;The best choice a patient can make is one that leads to their own happiness.&quot;
                </blockquote>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <p className="text-stone-400 text-xs sm:text-sm uppercase tracking-widest mb-2">Meet the Doctor Behind the Care</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight">
                  Dr. Somasundaram Sathappan
                </h2>
                <p className="text-stone-400 text-base sm:text-lg mt-1">Known to many patients as Dr. Soma</p>
              </div>

              <div className="space-y-3 sm:space-y-4 text-stone-300 leading-relaxed text-sm sm:text-base">
                <p>
                  Dr. Soma is a Consultant Plastic and Reconstructive Surgeon with over three decades of experience. He has guided thousands of patients through aesthetic and reconstructive journeys with one consistent priority.
                </p>
                <p className="text-white font-medium text-base sm:text-lg">
                  Safety comes first.
                </p>
                <p>
                  Patients often describe feeling calm and reassured during consultations. This comes from clear explanations, honest advice, and a respectful approach that values patient choice.
                </p>
              </div>

              <div className="pt-2 sm:pt-4 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-stone-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-stone-300" />
                  </div>
                  <span className="text-stone-300 text-sm sm:text-base">30+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-stone-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 text-stone-300" />
                  </div>
                  <span className="text-stone-300 text-sm sm:text-base">Consultant Plastic & Reconstructive Surgeon</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-stone-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-stone-300" />
                  </div>
                  <span className="text-stone-300 text-sm sm:text-base">Subang Jaya, Malaysia</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 sm:gap-4 pt-4 sm:pt-6">
                <button
                  className="px-2.5 sm:px-8 py-2 sm:py-3.5 bg-white text-stone-800 font-medium rounded-full hover:bg-stone-100 transition-colors text-[11px] sm:text-base whitespace-nowrap"
                  onClick={() => router.push('/about-dr-soma')}
                >
                  Read Full Profile
                </button>
                <button
                  className="px-2.5 sm:px-8 py-2 sm:py-3.5 border border-stone-600 text-white font-medium rounded-full hover:bg-stone-700 transition-colors text-[11px] sm:text-base whitespace-nowrap"
                  onClick={() => {
                    const certSection = document.getElementById('certificates-section');
                    certSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Credentials
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Soma Patient Experience */}
      <section ref={experienceRef} className="py-12 sm:py-16 lg:py-32 bg-white">
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible('section-7') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 leading-tight mb-4 sm:mb-6">
              The Soma <span className="font-normal text-stone-600">Patient Experience</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

            {/* Step 1 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 bg-stone-100 rounded-full flex items-center justify-center relative">
                  <span className="text-xl sm:text-2xl font-light text-stone-800">1</span>
                  <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-6 sm:h-6 bg-stone-800 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-3 h-3 sm:w-3 sm:h-3 text-white" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-stone-800 mb-2 sm:mb-3">Consultation</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  This is a conversation. We listen carefully, examine thoughtfully, and answer your questions in plain language. There is no obligation to proceed.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 bg-stone-100 rounded-full flex items-center justify-center relative">
                  <span className="text-xl sm:text-2xl font-light text-stone-800">2</span>
                  <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-6 sm:h-6 bg-stone-800 rounded-full flex items-center justify-center">
                    <Clipboard className="w-3 h-3 sm:w-3 sm:h-3 text-white" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-stone-800 mb-2 sm:mb-3">Personal Planning</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  If you choose to move forward, a clear and individualized plan is created. This includes expectations, preparation, recovery, and follow up care.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 bg-stone-100 rounded-full flex items-center justify-center relative">
                  <span className="text-xl sm:text-2xl font-light text-stone-800">3</span>
                  <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-6 sm:h-6 bg-stone-800 rounded-full flex items-center justify-center">
                    <Calendar className="w-3 h-3 sm:w-3 sm:h-3 text-white" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-stone-800 mb-2 sm:mb-3">Procedure Day</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Care is delivered with attention to detail, hygiene, and comfort. Every step is handled professionally and calmly.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-14 h-14 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 bg-stone-100 rounded-full flex items-center justify-center relative">
                  <span className="text-xl sm:text-2xl font-light text-stone-800">4</span>
                  <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-6 sm:h-6 bg-stone-800 rounded-full flex items-center justify-center">
                    <HandHeart className="w-3 h-3 sm:w-3 sm:h-3 text-white" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-stone-800 mb-2 sm:mb-3">Aftercare and Follow Up</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Healing matters. Recovery is supported with guidance, monitoring, and follow up visits. You are not left alone after treatment.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
            <button
              className="px-2.5 sm:px-10 py-2 sm:py-4 bg-stone-800 text-white text-[11px] sm:text-base font-medium rounded-full hover:bg-stone-700 transition-colors whitespace-nowrap"
              onClick={() => router.push('/contact-us')}
            >
              Begin Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Real Confidence Comes From Feeling Like Yourself */}
      <section ref={confidenceRef} className="py-12 sm:py-16 lg:py-32 bg-stone-50">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${isVisible('section-8') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 leading-tight mb-6 sm:mb-8">
            Real Confidence Comes From <span className="font-normal text-stone-600">Feeling Like Yourself</span>
          </h2>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
            <p>
              Success is not measured by dramatic change. It is measured by how you feel day to day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-stone-100">
              <CheckCircle className="w-8 h-8 sm:w-8 sm:h-8 text-stone-500 mx-auto mb-3 sm:mb-4" />
              <p className="text-stone-700 text-sm sm:text-base">Being comfortable in photos</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-stone-100">
              <CheckCircle className="w-8 h-8 sm:w-8 sm:h-8 text-stone-500 mx-auto mb-3 sm:mb-4" />
              <p className="text-stone-700 text-sm sm:text-base">Dressing without hesitation</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-stone-100">
              <CheckCircle className="w-8 h-8 sm:w-8 sm:h-8 text-stone-500 mx-auto mb-3 sm:mb-4" />
              <p className="text-stone-700 text-sm sm:text-base">Looking in the mirror without self criticism</p>
            </div>
          </div>

          <p className="mt-8 sm:mt-10 text-stone-600 italic text-sm sm:text-base">
            Results vary from person to person. What matters is that outcomes are safe, realistic, and aligned with your goals.
          </p>
        </div>
      </section>

      {/* Certificates */}
      <section ref={certificatesRef} className="py-10 sm:py-16 lg:py-24 bg-stone-800 overflow-hidden" id="certificates-section">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible('section-9') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-2 sm:mb-3">Credentials and Qualifications</h3>
            <p className="text-stone-400 text-sm sm:text-base">We believe trust should be clear. View Dr. Soma&apos;s certificates and professional background.</p>
          </div>
          <div className="overflow-hidden w-full">
            <Certificates certificates={certificateData} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-12 sm:py-16 lg:py-24">
        <div className="flex w-full containers px-4 sm:px-6">
          <div className={`flex w-full flex-col gap-6 sm:gap-8 lg:gap-10 transition-all duration-700 ${isVisible('section-10') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-primary md:text-start text-center text-2xl sm:text-3xl lg:text-4xl">
              Frequently Asked <span className="text-header-black">Questions</span>
            </h2>
            <div className="flex w-full flex-col gap-2 sm:gap-[6px]">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-4 sm:gap-6 lg:gap-10 w-full border rounded-[10px] sm:rounded-[12px] py-3 sm:py-[14px] px-4 sm:px-[24px] transition-all duration-300 ${
                    openIndex === index
                      ? 'border-[#FE7623] shadow-lg shadow-orange-100 bg-white'
                      : 'border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md'
                  }`}
                >
                  <div
                    className={`flex justify-between !flex-nowrap w-full cursor-pointer items-center gap-3 ${
                      openIndex === index ? 'bg-gradient-to-r from-orange-50/50 to-white' : ''
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h5 className={`text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-300 ${
                      openIndex === index ? 'text-[#FE7623]' : 'text-primary'
                    }`}>{item.question}</h5>
                    <span className="flex-shrink-0 min-w-[32px] text-2xl sm:text-3xl font-light transition-all duration-300 text-[#FE7623]">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  {openIndex === index && (
                    <div className="flex">
                      <p className="text-para-black text-sm sm:text-base border-l-2 border-[#FE7623]/20 pl-4">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready When You Are - Contact CTA */}
      <section ref={contactRef} className="py-12 sm:py-16 lg:py-32 bg-stone-50">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${isVisible('section-11') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 leading-tight mb-4 sm:mb-6">
            Ready When <span className="font-normal text-stone-600">You Are</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-10">
            Deciding to explore aesthetic care is personal. There is no right time except when you feel ready. If you are thinking about change, start with a private conversation.
          </p>

          <div className="bg-white rounded-2xl sm:rounded-3xl py-[25px] px-[15px] sm:p-8 lg:p-12 shadow-lg border border-stone-100 max-w-3xl mx-auto">

            {/* Clinic Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10 pb-6 sm:pb-10 border-b border-stone-100">
              <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-stone-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-stone-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-stone-500 uppercase tracking-wider mb-1">Clinic Hours</p>
                  <p className="text-stone-800 font-medium text-sm sm:text-base">Mon-Fri: 9:00am - 5:00pm</p>
                  <p className="text-stone-800 font-medium text-sm sm:text-base">Saturday: 9:00am - 1:00pm</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-stone-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-stone-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-stone-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-stone-800 font-medium text-sm sm:text-base">Subang Jaya, Malaysia</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="inline-flex items-center gap-2 sm:gap-4 justify-center">
              <button
                className="px-2.5 sm:px-8 py-2 sm:py-4 bg-stone-800 text-white font-medium rounded-full hover:bg-stone-700 transition-colors text-[11px] sm:text-base whitespace-nowrap"
                onClick={() => router.push('/contact-us')}
              >
                Book Consultation
              </button>
              <a
                href="tel:+60378044646"
                className="px-2.5 sm:px-8 py-2 sm:py-4 bg-white border border-stone-200 text-stone-700 font-medium rounded-full hover:bg-stone-50 transition-colors inline-flex items-center justify-center gap-1 sm:gap-2 text-[11px] sm:text-base whitespace-nowrap"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/60142616007?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 sm:px-8 py-2 sm:py-4 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#20BD5A] transition-colors inline-flex items-center justify-center gap-1 sm:gap-2 text-[11px] sm:text-base whitespace-nowrap"
              >
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" /> WhatsApp
              </a>
            </div>

            <p className="mt-6 sm:mt-8 text-stone-500 text-xs sm:text-sm">
              You may also call or message the clinic with general questions before booking.
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default NewHome;
