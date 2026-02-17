import React, { useState, useEffect } from "react";
import BaseImage from "@/components/BaseImage";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "react-i18next";
// getLocalizedPath removed - URL locale prefix is now handled centrally by _app.tsx
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  // lp() is now identity - URL locale prefix handled by _app.tsx after navigation
  const lp = (path: string) => path;
  const [sideNavOpened, setSideNavOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [aestheticsMenuOpen, setAestheticsMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [mobileAestheticsOpen, setMobileAestheticsOpen] = useState(false);

  // Check if we're on the new-home page for transparent header
  const isHomePage = router.pathname === '/new-home' || router.pathname === '/';
  const isBlogPage = router.pathname === '/blog' || router.pathname.startsWith('/blog/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if header should be transparent (only on home page when not scrolled)
  const isTransparent = isHomePage && !scrolled;

  const linkClasses = (path: string) =>
    `relative text-[15px] font-medium tracking-wide transition-all duration-300 hover:text-primary ${
      router.pathname === path ? "text-primary" : isTransparent ? "text-gray-800" : "text-black"
    }`;

  const mobileLinkClasses = (path: string) =>
    `text-[18px] font-medium tracking-wide transition-all duration-300 ${
      router.pathname === path ? "text-primary" : "text-black/80 hover:text-black"
    }`;

  const handleSideNav = () => {
    setSideNavOpened(!sideNavOpened);
    setMobileSubmenuOpen(false);
    setMobileAestheticsOpen(false);
  };

  useEffect(() => {
    setSideNavOpened(false);
    setMegaMenuOpen(false);
    setAestheticsMenuOpen(false);
    setMobileSubmenuOpen(false);
    setMobileAestheticsOpen(false);
  }, [router.pathname]);

  const bookingLink = "https://wa.me/60142616007?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation.";

  // Mega menu data for Plastic Surgery
  const megaMenuData = {
    body: {
      title: t('categories.body'),
      link: "/body",
      services: [
        { name: t('services.liposuction'), link: "/body/liposuction-malaysia" },
        { name: t('services.tummyTuck'), link: "/body/tummy-tuck-malaysia" },
        { name: t('services.bodyLift'), link: "/body/body-lift-malaysia" },
        { name: t('services.armLift'), link: "/body/arm-lift-malaysia" },
      ]
    },
    face: {
      title: t('categories.face'),
      link: "/face",
      services: [
        { name: t('services.faceLift'), link: "/face/face-lift-malaysia" },
        { name: t('services.rhinoplasty'), link: "/face/rhinoplasty-malaysia" },
        { name: t('services.eyelidSurgery'), link: "/face/eyelid-surgery-malaysia" },
        { name: t('services.browLift'), link: "/face/brow-lift-malaysia" },
      ]
    },
    breast: {
      title: t('categories.breast'),
      link: "/breast",
      services: [
        { name: t('services.breastAugmentation'), link: "/breast/breast-augmentation-malaysia" },
        { name: t('services.breastLift'), link: "/breast/breast-lift-malaysia" },
        { name: t('services.breastReduction'), link: "/breast/breast-reduction-malaysia" },
        { name: t('services.breastImplantRemoval'), link: "/breast/breast-implant-removal-malaysia" },
      ]
    },
    male: {
      title: t('categories.male'),
      link: "/male",
      services: [
        { name: t('services.gynecomastiaSurgery'), link: "/male/gynecomastia-surgery-malaysia" },
        { name: t('services.hairTransplant'), link: "/male/hair-transplant-malaysia" },
        { name: t('services.jawlineEnhancement'), link: "/male/jawline-enhancement-malaysia" },
        { name: t('services.maleRhinoplasty'), link: "/male/male-rhinoplasty-malaysia" },
      ]
    }
  };

  // Aesthetics menu data
  const aestheticsMenuData = {
    injectable: {
      title: t('aestheticCategories.injectable'),
      link: "/aesthetic-treatments",
      services: [
        { name: t('aestheticServices.botox'), link: "/aesthetic-treatments/botox-malaysia" },
        { name: t('aestheticServices.dermalFillers'), link: "/aesthetic-treatments/dermal-fillers-malaysia" },
        { name: t('aestheticServices.lipFiller'), link: "/aesthetic-treatments/lip-filler-malaysia" },
        { name: t('aestheticServices.profhilo'), link: "/aesthetic-treatments/profhilo-malaysia" },
      ]
    },
    thread: {
      title: t('aestheticCategories.thread'),
      link: "/aesthetic-treatments",
      services: [
        { name: t('aestheticServices.threadLift'), link: "/aesthetic-treatments/thread-lift-malaysia" },
        { name: t('aestheticServices.noseThreadLift'), link: "/aesthetic-treatments/nose-thread-lift-malaysia" },
      ]
    },
    skin: {
      title: t('aestheticCategories.skin'),
      link: "/aesthetic-treatments",
      services: [
        { name: t('aestheticServices.scarTreatment'), link: "/aesthetic-treatments/scar-treatment-malaysia" },
        { name: t('aestheticServices.laserScarRemoval'), link: "/aesthetic-treatments/laser-scar-removal-malaysia" },
        { name: t('aestheticServices.keloidTreatment'), link: "/aesthetic-treatments/keloid-treatment-malaysia" },
      ]
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-transparent"
            : "bg-white shadow-lg shadow-black/10"
        }`}
      >
        <div className="containers px-[30px]">
          <div className="flex flex-nowrap items-center justify-between h-[80px] lg:h-[90px]">
            <Link href={lp("/")} className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <BaseImage src="/images/dr_soma_logo.webp" alt="Dr. Soma Clinical Aesthetics Logo" width={80} height={80} className="w-[65px] h-[65px] lg:w-[75px] lg:h-[75px]" />
            </Link>
            <nav className="hidden lg:flex items-center justify-center flex-1 px-10">
              <div className="flex flex-nowrap items-center gap-[40px]">
                <Link href={lp("/about-dr-soma")}><span className={linkClasses("/about-dr-soma")}>{t('nav.drSoma')}</span></Link>

                {/* Plastic Surgery with Mega Menu */}
                <div
                  className="relative"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <Link href={lp("/treatments")} className={`flex items-center gap-1 cursor-pointer ${linkClasses("/treatments")}`}>
                    {t('nav.plasticSurgery')}
                    <svg className={`w-3 h-3 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-8 transition-all duration-300 ${megaMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-8 min-w-[750px]">
                      <div className="grid grid-cols-4 gap-10">
                        {Object.values(megaMenuData).map((category) => (
                          <div key={category.title} className="flex flex-col">
                            <span className="text-primary font-medium text-[15px] mb-3 pb-2 border-b border-primary/20 normal-case block">
                              {category.title}
                            </span>
                            <ul className="flex flex-col gap-2">
                              {category.services.map((service) => (
                                <li key={service.name}>
                                  <Link
                                    href={lp(service.link)}
                                    className="text-gray-600 text-[13px] hover:text-primary transition-colors duration-200 block py-1"
                                  >
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href={lp(category.link)}
                              className="mt-3 pt-2 border-t border-gray-100 text-primary text-[13px] font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
                            >
                              {t('nav.viewAllServices')}
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Aesthetics with Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setAestheticsMenuOpen(true)}
                  onMouseLeave={() => setAestheticsMenuOpen(false)}
                >
                  <span className={`flex items-center gap-1 cursor-pointer ${linkClasses("/aesthetic-treatments")}`}>
                    {t('nav.aesthetics')}
                    <svg className={`w-3 h-3 transition-transform duration-300 ${aestheticsMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>

                  {/* Aesthetics Dropdown */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-8 transition-all duration-300 ${aestheticsMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-8 w-[750px]">
                      <div className="grid grid-cols-3 gap-10">
                        {Object.values(aestheticsMenuData).map((category) => (
                          <div key={category.title} className="flex flex-col">
                            <span className="text-primary font-medium text-[15px] mb-3 pb-2 border-b border-primary/20 normal-case block">
                              {category.title}
                            </span>
                            <ul className="flex flex-col gap-2">
                              {category.services.map((service) => (
                                <li key={service.name}>
                                  <Link
                                    href={lp(service.link)}
                                    className="text-gray-600 text-[13px] hover:text-primary transition-colors duration-200 block py-1"
                                  >
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href={lp(category.link)}
                              className="mt-3 pt-2 border-t border-gray-100 text-primary text-[13px] font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
                            >
                              {t('nav.viewAllServices')}
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link href={lp("/contact")}><span className={linkClasses("/contact")}>{t('nav.contact')}</span></Link>
              </div>
            </nav>
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              {!isBlogPage && <LanguageSwitcher />}
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-[14px] font-bold uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30">
                <span className="relative z-10">{t('nav.bookConsultation')}</span>
                <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#ff7a4d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
            <div className="flex lg:hidden items-center gap-2">
              {!isBlogPage && <LanguageSwitcher />}
              <button className="flex items-center justify-center w-12 h-12 transition-transform duration-300 active:scale-95 text-black" onClick={handleSideNav} aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M2 11H22V13H2zM2 5H22V7H2zM2 17H22V19H2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {!isHomePage && <div className="h-[80px] lg:h-[90px]"></div>}

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${sideNavOpened ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={handleSideNav}></div>

      {/* Mobile Side Navigation */}
      <div className={`fixed top-0 left-0 z-[70] flex flex-col w-[300px] max-w-[85vw] h-screen bg-white lg:hidden transition-transform duration-500 ease-out ${sideNavOpened ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-nowrap items-center justify-between p-6 border-b border-black/10">
          <Link href={lp("/")} onClick={handleSideNav}><BaseImage src="/images/dr_soma_logo.webp" alt="Dr. Soma Clinical Aesthetics Logo" width={60} height={60} /></Link>
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-black/5 text-black transition-all duration-300 hover:bg-black/10 active:scale-95" onClick={handleSideNav} aria-label="Close menu">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col flex-1 p-6 pt-6 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <Link href={lp("/about-dr-soma")} onClick={handleSideNav}><span className={mobileLinkClasses("/about-dr-soma")}>{t('nav.drSoma')}</span></Link>

            {/* Mobile Plastic Surgery Submenu */}
            <div>
              <div className={`flex items-center justify-between w-full ${mobileLinkClasses("/treatments")}`}>
                <Link href={lp("/treatments")} onClick={handleSideNav}>{t('nav.plasticSurgery')}</Link>
                <button onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)} aria-label="Toggle plastic surgery submenu">
                  <svg className={`w-6 h-6 min-w-[24px] transition-transform duration-300 ${mobileSubmenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Mobile Submenu Content */}
              <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-4 pl-4 flex flex-col gap-4">
                  {Object.values(megaMenuData).map((category) => (
                    <div key={category.title} className="flex flex-col gap-2">
                      <span className="text-primary font-medium text-[14px] normal-case block">{category.title}</span>
                      <ul className="flex flex-col gap-1 pl-2">
                        {category.services.map((service) => (
                          <li key={service.name}>
                            <Link
                              href={lp(service.link)}
                              onClick={handleSideNav}
                              className="text-gray-600 text-[13px] hover:text-primary transition-colors duration-200 block py-1"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href={lp(category.link)}
                            onClick={handleSideNav}
                            className="text-primary text-[13px] font-medium hover:text-primary/80 transition-colors duration-200 flex items-center gap-1 py-1"
                          >
                            {t('nav.viewAll')}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Aesthetics Submenu */}
            <div>
              <button
                className={`flex items-center justify-between w-full ${mobileLinkClasses("/aesthetic-treatments")}`}
                onClick={() => setMobileAestheticsOpen(!mobileAestheticsOpen)}
              >
                <span>{t('nav.aesthetics')}</span>
                <svg className={`w-6 h-6 min-w-[24px] transition-transform duration-300 ${mobileAestheticsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile Aesthetics Submenu Content */}
              <div className={`overflow-hidden transition-all duration-300 ${mobileAestheticsOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-4 pl-4 flex flex-col gap-4">
                  {Object.values(aestheticsMenuData).map((category) => (
                    <div key={category.title} className="flex flex-col gap-2">
                      <span className="text-primary font-medium text-[14px] normal-case block">{category.title}</span>
                      <ul className="flex flex-col gap-1 pl-2">
                        {category.services.map((service) => (
                          <li key={service.name}>
                            <Link
                              href={lp(service.link)}
                              onClick={handleSideNav}
                              className="text-gray-600 text-[13px] hover:text-primary transition-colors duration-200 block py-1"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href={lp(category.link)}
                            onClick={handleSideNav}
                            className="text-primary text-[13px] font-medium hover:text-primary/80 transition-colors duration-200 flex items-center gap-1 py-1"
                          >
                            {t('nav.viewAll')}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href={lp("/contact")} onClick={handleSideNav}><span className={mobileLinkClasses("/contact")}>{t('nav.contact')}</span></Link>
          </div>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="flex flex-nowrap items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white text-[12px] font-bold uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-primary/90" onClick={handleSideNav}>
            <span>{t('nav.bookConsultation')}</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
        <div className="h-1 bg-gradient-to-r from-primary via-[#ff7a4d] to-primary"></div>
      </div>
    </>
  );
};

export default Header;
