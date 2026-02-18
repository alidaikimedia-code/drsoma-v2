import React, { useEffect, useRef, useState } from "react";
import BaseImage from "@/components/BaseImage";
import Head from "next/head";
import { getFullUrl } from "@/utils/helper";
import { useTranslation } from "react-i18next";

// Example SVG icons (replace with your own or use a library)
const DegreeIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#EA622F" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3L2 8.5l10 5.5 10-5.5L12 3z"/><path d="M2 17.5l10 5.5 10-5.5"/><path d="M2 12.5l10 5.5 10-5.5"/></svg>
);
const SpecializationIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#EA622F" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
);
const ExperienceIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#EA622F" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
);
const ExpertiseIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#EA622F" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 7h10v10H7z"/></svg>
);

const About = () => {
  const { t } = useTranslation();

  const icons = [<DegreeIcon key="degree" />, <SpecializationIcon key="spec" />, <ExperienceIcon key="exp" />, <ExpertiseIcon key="expertise" />];
  const infoCards = Array.from({ length: 4 }, (_, i) => ({
    icon: icons[i],
    title: t(`about.card${i}Title`),
    desc: t(`about.card${i}Desc`),
  }));

  const statValues = ["1,000+", "30+", "500+", "4.9"];
  const stats = Array.from({ length: 4 }, (_, i) => ({
    label: t(`about.stat${i}Label`),
    value: statValues[i],
  }));
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  // Create refs for each section
  const mainRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const caProfileRef = useRef<HTMLDivElement>(null);

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
    const sections = [mainRef, profileRef, caProfileRef];
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
        <title>About Us - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia</title>
        <meta name="description" content="Learn about Dr. Somasundaram Sathappan, a leading plastic surgeon in Malaysia with over 30 years of experience in aesthetic and reconstructive surgery." />
        <meta property="og:title" content="About Us - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta property="og:description" content="Learn about Dr. Somasundaram Sathappan, a leading plastic surgeon in Malaysia with over 30 years of experience in aesthetic and reconstructive surgery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl('/about-dr-soma')} />
        <meta property="og:image" content={getFullUrl('/images/dr_soma_pic.webp')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Dr. Soma Clinical Aesthetics | Plastic Surgeon Malaysia" />
        <meta name="twitter:description" content="Learn about Dr. Somasundaram Sathappan, a leading plastic surgeon in Malaysia with over 30 years of experience in aesthetic and reconstructive surgery." />
        <meta name="twitter:image" content={getFullUrl('/images/dr_soma_pic.webp')} />
        <link rel="canonical" href={getFullUrl('/about-dr-soma')} />
      </Head>
      
      {/* Main About Section */}
      <section className="py-16 bg-white" ref={mainRef}>
        <div className="flex containers w-full">
          <div className={`flex flex-col lg:flex-row justify-between w-full gap-12 transition-all duration-700 ${
            isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-8 justify-center">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-3 py-1 bg-orange-50 text-[#EA622F] rounded-full font-semibold text-sm border border-orange-200 tracking-wide shadow-sm">
                  <svg width="18" height="18" fill="#EA622F" className="mr-1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 2"/></svg>
                  {t('about.badge')}
                </span>
              </div>
              {/* Heading */}
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {t('about.heading')}
              </h1>
              {/* Subheading */}
              <p className="text-lg text-gray-700 mt-2">
                {t('about.subheading')}
              </p>
              {/* Summary */}
              <p className="text-gray-600 mt-2">
                {t('about.summary')}
              </p>
            </div>
            {/* Right Column */}
            <div className="flex-1 flex flex-col items-center relative" ref={profileRef}>
              {/* Profile Card */}
              <div className={`bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl shadow-xl pt-24 pb-8 px-8 flex flex-col items-center w-full relative mt-8 transition-all duration-700 ${
                isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <BaseImage
                    src="/images/dr_soma_small_pic.webp"
                    width={140}
                    height={140}
                    alt="Dr. Soma"
                    className="rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                {/* Stats Card */}
                <div className="bg-white rounded-xl shadow-lg px-8 py-4 flex flex-wrap justify-between gap-6 w-full -mt-20 mb-6 z-10">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="text-[#EA622F] font-bold text-xl">{stat.value}</span>
                      <span className="text-gray-600 text-sm">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-4">{t('about.drName')}</h2>
                <div className="text-gray-700 mb-2">{t('about.drTitle')}</div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" fill="#FFD700" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36"/></svg>
                  ))}
                  <span className="ml-2 text-gray-700 font-semibold">4.9/5</span>
                </div>
                {/* Availability Card */}
                <div className="bg-white rounded-xl shadow-md px-6 py-4 flex items-center gap-3 w-full mt-4">
                  <svg width="24" height="24" fill="none" stroke="#EA622F" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <div>
                    <div className="font-semibold text-gray-800">{t('about.available')}</div>
                    <div className="text-gray-600 text-sm">{t('about.availableTime')}</div>
                  </div>
                </div>
              </div>
              {/* Quote Box Below Profile Card */}
              <blockquote className="bg-orange-50 border-l-4 border-[#EA622F] rounded-xl shadow-sm p-6 mt-6 w-full">
                <span className="italic text-gray-700 text-base block mb-2">{t('about.quote')}</span>
                <span className="block font-semibold text-[#EA622F] mt-2">{t('about.quoteAuthor')}</span>
              </blockquote>
            </div>
          </div>
        </div>
        
        {/* Info Cards Section - Full Width */}
        <div className="mt-16 w-full">
          <div className="containers">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {infoCards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full h-full"
              >
                <div className="flex-shrink-0 mb-4 p-3 bg-orange-50 rounded-full">{card.icon}</div>
                <div className="w-full">
                  <div className="font-bold text-gray-800 text-lg mb-2">{card.title}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{card.desc}</div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CA Profile Section */}
      <section className="py-16 bg-white" ref={caProfileRef}>
        <div className="flex containers w-full">
          <div className={`transition-all duration-700 ${
            isVisible('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl font-bold text-header-black text-center mb-4">
              <span className="text-primary">CA</span> {t('about.caProfileTitle')}
            </h2>
            <p className="text-justify text-gray-700 mb-10">
              {t('about.caDesc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="group bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden rounded-lg">
                  <BaseImage 
                    src="/images/highly_skilled_doctor.webp" 
                    width={180} 
                    height={180} 
                    alt="Highly Skilled Doctor" 
                    className="rounded-lg transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4 font-semibold text-gray-800 text-center group-hover:text-primary transition-colors duration-300">{t('about.ca0')}</div>
              </div>
              <div className="group bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden rounded-lg">
                  <BaseImage 
                    src="/images/aesthetic_services.webp" 
                    width={180} 
                    height={180} 
                    alt="Aesthetic Services" 
                    className="rounded-lg transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4 font-semibold text-gray-800 text-center group-hover:text-primary transition-colors duration-300">{t('about.ca1')}</div>
              </div>
              <div className="group bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden rounded-lg">
                  <BaseImage 
                    src="/images/trained_staffs.webp" 
                    width={180} 
                    height={180} 
                    alt="Trained Staff" 
                    className="rounded-lg transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4 font-semibold text-gray-800 text-center group-hover:text-primary transition-colors duration-300">{t('about.ca2')}</div>
              </div>
              <div className="group bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden rounded-lg">
                  <BaseImage 
                    src="/images/doctor_patient_relationship.webp" 
                    width={180} 
                    height={180} 
                    alt="Doctor Patient Relationship" 
                    className="rounded-lg transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4 font-semibold text-gray-800 text-center group-hover:text-primary transition-colors duration-300">{t('about.ca3')}</div>
              </div>
              <div className="group bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden rounded-lg">
                  <BaseImage 
                    src="/images/contactability.webp" 
                    width={180} 
                    height={180} 
                    alt="Contactability" 
                    className="rounded-lg transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4 font-semibold text-gray-800 text-center group-hover:text-primary transition-colors duration-300">{t('about.ca4')}</div>
              </div>
              <div className="group bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden rounded-lg">
                  <BaseImage 
                    src="/images/strategic_location.webp" 
                    width={180} 
                    height={180} 
                    alt="Strategic Location" 
                    className="rounded-lg transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4 font-semibold text-gray-800 text-center group-hover:text-primary transition-colors duration-300">{t('about.ca5')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
