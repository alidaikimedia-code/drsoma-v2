import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import BaseImage from "@/components/BaseImage";
import Link from "next/link";
import { getAssetPath } from "@/utils/helper";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  // Create refs for each section
  const bodyRef = useRef<HTMLDivElement>(null);
  const faceRef = useRef<HTMLDivElement>(null);
  const breastRef = useRef<HTMLDivElement>(null);
  const maleRef = useRef<HTMLDivElement>(null);
  const aestheticRef = useRef<HTMLDivElement>(null);

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
    const sections = [bodyRef, faceRef, breastRef, maleRef, aestheticRef];
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
        <link rel="canonical" href="https://drsomaplasticsurgery.com/treatments/" />
      </Head>
      <section className="flex bg-no-repeat bg-cover bg-center py-100 lg:py-[175px] relative" style={{ backgroundImage: `url(${getAssetPath('/images/service_page_banner_image.png')})` }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="flex containers w-full relative z-10">
          <div className="flex w-full flex-col gap-[10px] max-w-[406px]">
            <h1 className="text-white font-bold max-[768px]:!text-[54px] max-[512px]:!text-[42px] drop-shadow-lg">
              {t('svc.heroTitle')}
            </h1>
            <h5 className="text-white font-semibold drop-shadow-md">
              {t('svc.heroSubtitle')}
            </h5>
          </div>
        </div>
      </section>

      <section className="py-30 lg:py-60" ref={bodyRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-30 w-full">
            <div className={`flex w-full bg-no-repeat bg-cover py-[33px] px-40 rounded-[16px] transition-all duration-700 ${
              isVisible('section-0') ? 'animate-fadeIn opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ backgroundImage: `url(${getAssetPath('/images/body_background.png')})` }}>
              <div className="flex w-full flex-col gap-[10px] max-w-[668px]">
                <h2 className="text-header-black">{t('svc.bodyTitle')}</h2>
                <p className="text-header-black">
                  {t('svc.bodyDesc')}
                </p>
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full transition-all duration-700 ${
              isVisible('section-0') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                href={"/body/liposuction-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-0') ? '0.1s' : '0s' }}
              >
                <BaseImage
                  src="/images/liposuction.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Liposuction"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.bodyCard0')}
                </h4>
              </Link>
              <Link
                href={"/body/tummy-tuck-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-0') ? '0.2s' : '0s' }}
              >
                <BaseImage
                  src="/images/tummy_tuck.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Tummy Tuck"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.bodyCard1')}
                </h4>
              </Link>
              <Link
                href={"/aesthetic-treatments/keloid-treatment-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-0') ? '0.3s' : '0s' }}
              >
                <BaseImage
                  src="/images/keloid_treatment.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Keloid Treatment"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.bodyCard2')}
                </h4>
              </Link>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/body"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ea622f] hover:bg-[#d55526] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('svc.bodyBtn')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-30 lg:pb-60" ref={faceRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-30 w-full">
            <div className={`flex w-full bg-no-repeat bg-cover py-[33px] px-40 rounded-[16px] transition-all duration-700 ${
              isVisible('section-1') ? 'animate-fadeIn opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ backgroundImage: `url(${getAssetPath('/images/face_background.png')})` }}>
              <div className="flex w-full flex-col gap-[10px] max-w-[668px]">
                <h2 className="text-header-black">{t('svc.faceTitle')}</h2>
                <p className="text-header-black">
                  {t('svc.faceDesc')}
                </p>
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full transition-all duration-700 ${
              isVisible('section-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                href={"/face/face-lift-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-1') ? '0.1s' : '0s' }}
              >
                <BaseImage
                  src="/images/face_lift.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Face Lift"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.faceCard0')}
                </h4>
              </Link>
              <Link
                href={"/face/eyelid-surgery-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-1') ? '0.2s' : '0s' }}
              >
                <BaseImage
                  src="/images/eyelid_reduction.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Blepharoplasty"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.faceCard1')}
                </h4>
              </Link>
              <Link
                href={"/face/rhinoplasty-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-1') ? '0.3s' : '0s' }}
              >
                <BaseImage
                  src="/images/rhinoplasty_in_nose.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Rhinoplasty"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.faceCard2')}
                </h4>
              </Link>
              <Link
                href={"/face/neck-lift-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-1') ? '0.4s' : '0s' }}
              >
                <BaseImage
                  src="/images/Neck Lift.jpg"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Neck Lift"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.faceCard3')}
                </h4>
              </Link>
              <Link
                href={"/face/otoplasty-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-1') ? '0.5s' : '0s' }}
              >
                <BaseImage
                  src="/images/pinnaplasty_in_ear.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Otoplasty"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.faceCard4')}
                </h4>
              </Link>
              <Link
                href={"/face/buccal-fat-removal-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-1') ? '0.6s' : '0s' }}
              >
                <BaseImage
                  src="/images/Buccal Fat Removal.jpg"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Buccal Fat Removal"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.faceCard5')}
                </h4>
              </Link>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/face"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ea622f] hover:bg-[#d55526] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('svc.faceBtn')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-30 lg:pb-60" ref={breastRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-30 w-full">
            <div className={`flex w-full bg-no-repeat bg-cover py-[33px] px-40 rounded-[16px] transition-all duration-700 ${
              isVisible('section-2') ? 'animate-fadeIn opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ backgroundImage: `url(${getAssetPath('/images/breast_background.png')})` }}>
              <div className="flex w-full flex-col gap-[10px] max-w-[668px]">
                <h2 className="text-header-black">{t('svc.breastTitle')}</h2>
                <p className="text-header-black">
                  {t('svc.breastDesc')}
                </p>
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full transition-all duration-700 ${
              isVisible('section-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                href={"/breast/breast-lift-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-2') ? '0.1s' : '0s' }}
              >
                <BaseImage
                  src="/images/breast_lift.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Breast Lift"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.breastCard0')}
                </h4>
              </Link>
              <Link
                href={"/breast/breast-augmentation-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-2') ? '0.2s' : '0s' }}
              >
                <BaseImage
                  src="/images/breast_augmentation.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Breast Augmentation"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.breastCard1')}
                </h4>
              </Link>
              <Link
                href={"/breast/breast-reduction-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-2') ? '0.3s' : '0s' }}
              >
                <BaseImage
                  src="/images/safe_breast_reduction.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Safe Breast Reduction"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.breastCard2')}
                </h4>
              </Link>
              {/* <Link
                href={"/treatments/ariom-breast-implant"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-2') ? '0.4s' : '0s' }}
              >
                <BaseImage
                  src="/images/arion_breast_implant.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Arion Breast Implant"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  Arion Breast Implant
                </h4>
              </Link> */}
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/breast"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ea622f] hover:bg-[#d55526] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('svc.breastBtn')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-30 lg:py-60" ref={maleRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-30 w-full">
            <div className={`flex w-full bg-para-white rounded-[16px] overflow-hidden transition-all duration-700 ${
              isVisible('section-3') ? 'animate-fadeIn opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex w-full flex-col gap-[10px] py-[33px] px-40 max-w-[668px]">
                <h2 className="text-header-black">
                  {t('svc.maleTitle')}
                </h2>
                <p className="text-header-black">
                  {t('svc.maleDesc')}
                </p>
              </div>
              <div className="hidden md:flex flex-shrink-0 w-[250px] ml-auto self-stretch">
                <BaseImage
                  src="/images/natural.jpg"
                  width={250}
                  height={200}
                  alt="Male Cosmetic Surgery"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full transition-all duration-700 ${
              isVisible('section-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                href={"/body/six-pack-enhancement-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-3') ? '0.1s' : '0s' }}
              >
                <BaseImage
                  src="/images/pack_enhancement.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="6-Pack Enhancement"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.maleCard0')}
                </h4>
              </Link>
              <Link
                href={"/male/male-breast-reduction-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-3') ? '0.2s' : '0s' }}
              >
                <BaseImage
                  src="/images/male_breast_reduction.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Male Breast Reduction"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.maleCard1')}
                </h4>
              </Link>
              <Link
                href={"/male/penile-enhancement-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-3') ? '0.3s' : '0s' }}
              >
                <BaseImage
                  src="/images/Penile Enhancement men.jpg"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Penile Enhancement"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.maleCard2')}
                </h4>
              </Link>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/male"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ea622f] hover:bg-[#d55526] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('svc.maleBtn')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-30 lg:pb-60" ref={aestheticRef}>
        <div className="flex containers w-full">
          <div className="flex flex-col gap-30 w-full">
            <div className={`flex w-full bg-no-repeat bg-cover py-[33px] px-40 rounded-[16px] transition-all duration-700 ${
              isVisible('section-4') ? 'animate-fadeIn opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ backgroundImage: `url(${getAssetPath('/images/face_background.png')})` }}>
              <div className="flex w-full flex-col gap-[10px] max-w-[668px]">
                <h2 className="text-header-black">{t('svc.aestheticTitle')}</h2>
                <p className="text-header-black">
                  {t('svc.aestheticDesc')}
                </p>
              </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full transition-all duration-700 ${
              isVisible('section-4') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                href={"/aesthetic-treatments/thread-lift-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-4') ? '0.1s' : '0s' }}
              >
                <BaseImage
                  src="/images/Safe_thread_in_face.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Thread Lift"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.aestheticCard0')}
                </h4>
              </Link>
              <Link
                href={"/aesthetic-treatments/lip-filler-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-4') ? '0.2s' : '0s' }}
              >
                <BaseImage
                  src="/images/lip_filler.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Lip Filler"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.aestheticCard1')}
                </h4>
              </Link>
              <Link
                href={"/aesthetic-treatments/keloid-treatment-malaysia"}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                style={{ animationDelay: isVisible('section-4') ? '0.3s' : '0s' }}
              >
                <BaseImage
                  src="/images/keloid_treatment.png"
                  width={280}
                  height={320}
                  loading="lazy"
                  alt="Keloid Treatment"
                  className="w-full h-[320px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <h4 className="absolute bottom-6 left-4 right-4 text-white font-semibold text-lg text-center">
                  {t('svc.aestheticCard2')}
                </h4>
              </Link>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/aesthetic-treatments"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ea622f] hover:bg-[#d55526] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('svc.aestheticBtn')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
