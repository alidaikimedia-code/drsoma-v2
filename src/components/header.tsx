import React, { useState, useEffect } from "react";
import BaseImage from "@/components/BaseImage";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [sideNavOpened, setSideNavOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [aestheticsMenuOpen, setAestheticsMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [mobileAestheticsOpen, setMobileAestheticsOpen] = useState(false);

  // Check if we're on the new-home page for transparent header
  const isHomePage = router.pathname === '/new-home' || router.pathname === '/';

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
      title: "Body",
      link: "/body",
      services: [
        { name: "Liposuction", link: "/body/liposuction-malaysia" },
        { name: "Tummy tuck", link: "/body/tummy-tuck-malaysia" },
        { name: "Body lift", link: "/body/body-lift-malaysia" },
        { name: "Arm lift", link: "/body/arm-lift-malaysia" },
      ]
    },
    face: {
      title: "Face",
      link: "/face",
      services: [
        { name: "Face lift", link: "/face/face-lift-malaysia" },
        { name: "Rhinoplasty", link: "/face/rhinoplasty-malaysia" },
        { name: "Eyelid surgery", link: "/face/eyelid-surgery-malaysia" },
        { name: "Brow lift", link: "/face/brow-lift-malaysia" },
      ]
    },
    breast: {
      title: "Breast",
      link: "/breast",
      services: [
        { name: "Breast augmentation", link: "/breast/breast-augmentation-malaysia" },
        { name: "Breast lift", link: "/breast/breast-lift-malaysia" },
        { name: "Breast reduction", link: "/breast/breast-reduction-malaysia" },
        { name: "Breast implant removal", link: "/breast/breast-implant-removal-malaysia" },
      ]
    },
    male: {
      title: "Male",
      link: "/male",
      services: [
        { name: "Gynecomastia surgery", link: "/male/gynecomastia-surgery-malaysia" },
        { name: "Hair transplant", link: "/male/hair-transplant-malaysia" },
        { name: "Jawline enhancement", link: "/male/jawline-enhancement-malaysia" },
        { name: "Male rhinoplasty", link: "/male/male-rhinoplasty-malaysia" },
      ]
    }
  };

  // Aesthetics menu data
  const aestheticsMenuData = {
    injectable: {
      title: "Injectable treatments",
      link: "/aesthetic-treatments",
      services: [
        { name: "Botox", link: "/aesthetic-treatments/botox-malaysia" },
        { name: "Dermal fillers", link: "/aesthetic-treatments/dermal-fillers-malaysia" },
        { name: "Lip filler", link: "/aesthetic-treatments/lip-filler-malaysia" },
        { name: "Profhilo", link: "/aesthetic-treatments/profhilo-malaysia" },
      ]
    },
    thread: {
      title: "Thread treatments",
      link: "/aesthetic-treatments",
      services: [
        { name: "Thread lift", link: "/aesthetic-treatments/thread-lift-malaysia" },
        { name: "Nose thread lift", link: "/aesthetic-treatments/nose-thread-lift-malaysia" },
      ]
    },
    skin: {
      title: "Skin treatments",
      link: "/aesthetic-treatments",
      services: [
        { name: "Scar treatment", link: "/aesthetic-treatments/scar-treatment-malaysia" },
        { name: "Laser scar removal", link: "/aesthetic-treatments/laser-scar-removal-malaysia" },
        { name: "Keloid treatment", link: "/aesthetic-treatments/keloid-treatment-malaysia" },
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
            <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <BaseImage src="/images/dr_soma_logo.png" alt="Dr. Soma Clinical Aesthetics Logo" width={80} height={80} className="w-[65px] h-[65px] lg:w-[75px] lg:h-[75px]" />
            </Link>
            <nav className="hidden lg:flex items-center justify-center flex-1 px-10">
              <div className="flex flex-nowrap items-center gap-[40px]">
                <Link href="/about-dr-soma"><span className={linkClasses("/about-dr-soma")}>Dr Soma</span></Link>

                {/* Plastic Surgery with Mega Menu */}
                <div
                  className="relative"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <span className={`flex items-center gap-1 cursor-pointer ${linkClasses("/treatments")}`}>
                    Plastic surgery
                    <svg className={`w-3 h-3 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>

                  {/* Mega Menu Dropdown */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-8 transition-all duration-300 ${megaMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-8 min-w-[750px]">
                      <div className="grid grid-cols-4 gap-10">
                        {Object.values(megaMenuData).map((category) => (
                          <div key={category.title} className="flex flex-col">
                            <h3 className="text-primary font-medium text-[15px] mb-3 pb-2 border-b border-primary/20 normal-case">
                              {category.title}
                            </h3>
                            <ul className="flex flex-col gap-2">
                              {category.services.map((service) => (
                                <li key={service.name}>
                                  <Link
                                    href={service.link}
                                    className="text-gray-600 text-[13px] hover:text-primary transition-colors duration-200 block py-1"
                                  >
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href={category.link}
                              className="mt-3 pt-2 border-t border-gray-100 text-primary text-[13px] font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
                            >
                              View All Services
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
                    Aesthetics
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
                            <h3 className="text-primary font-medium text-[15px] mb-3 pb-2 border-b border-primary/20 normal-case">
                              {category.title}
                            </h3>
                            <ul className="flex flex-col gap-2">
                              {category.services.map((service) => (
                                <li key={service.name}>
                                  <Link
                                    href={service.link}
                                    className="text-gray-600 text-[13px] hover:text-primary transition-colors duration-200 block py-1"
                                  >
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href={category.link}
                              className="mt-3 pt-2 border-t border-gray-100 text-primary text-[13px] font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
                            >
                              View All Services
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

                <Link href="/blog"><span className={linkClasses("/blog")}>Blogs</span></Link>
                <Link href="/contact"><span className={linkClasses("/contact")}>Contact</span></Link>
              </div>
            </nav>
            <div className="hidden lg:flex items-center flex-shrink-0">
              <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-[14px] font-bold uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30">
                <span className="relative z-10">Book Consultation</span>
                <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#ff7a4d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
            <button className="flex lg:hidden items-center justify-center w-12 h-12 transition-transform duration-300 active:scale-95 text-black" onClick={handleSideNav} aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M2 11H22V13H2zM2 5H22V7H2zM2 17H22V19H2z"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {!isHomePage && <div className="h-[80px] lg:h-[90px]"></div>}

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${sideNavOpened ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={handleSideNav}></div>

      {/* Mobile Side Navigation */}
      <div className={`fixed top-0 left-0 z-[70] flex flex-col w-[300px] max-w-[85vw] h-screen bg-white lg:hidden transition-transform duration-500 ease-out ${sideNavOpened ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-nowrap items-center justify-between p-6 border-b border-black/10">
          <Link href="/" onClick={handleSideNav}><BaseImage src="/images/dr_soma_logo.png" alt="Dr. Soma Clinical Aesthetics Logo" width={60} height={60} /></Link>
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-black/5 text-black transition-all duration-300 hover:bg-black/10 active:scale-95" onClick={handleSideNav} aria-label="Close menu">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col flex-1 p-6 pt-6 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <Link href="/about-dr-soma" onClick={handleSideNav}><span className={mobileLinkClasses("/about-dr-soma")}>Dr Soma</span></Link>

            {/* Mobile Plastic Surgery Submenu */}
            <div>
              <button
                className={`flex items-center justify-between w-full ${mobileLinkClasses("/treatments")}`}
                onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
              >
                <span>Plastic surgery</span>
                <svg className={`w-6 h-6 min-w-[24px] transition-transform duration-300 ${mobileSubmenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile Submenu Content */}
              <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-4 pl-4 flex flex-col gap-4">
                  {Object.values(megaMenuData).map((category) => (
                    <div key={category.title} className="flex flex-col gap-2">
                      <h4 className="text-primary font-medium text-[14px] normal-case">{category.title}</h4>
                      <ul className="flex flex-col gap-1 pl-2">
                        {category.services.map((service) => (
                          <li key={service.name}>
                            <Link
                              href={service.link}
                              onClick={handleSideNav}
                              className="text-gray-600 text-[13px] hover:text-primary transition-colors duration-200 block py-1"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href={category.link}
                            onClick={handleSideNav}
                            className="text-primary text-[13px] font-medium hover:text-primary/80 transition-colors duration-200 flex items-center gap-1 py-1"
                          >
                            View All
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
                <span>Aesthetics</span>
                <svg className={`w-6 h-6 min-w-[24px] transition-transform duration-300 ${mobileAestheticsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile Aesthetics Submenu Content */}
              <div className={`overflow-hidden transition-all duration-300 ${mobileAestheticsOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pt-4 pl-4 flex flex-col gap-4">
                  {Object.values(aestheticsMenuData).map((category) => (
                    <div key={category.title} className="flex flex-col gap-2">
                      <h4 className="text-primary font-medium text-[14px] normal-case">{category.title}</h4>
                      <ul className="flex flex-col gap-1 pl-2">
                        {category.services.map((service) => (
                          <li key={service.name}>
                            <Link
                              href={service.link}
                              onClick={handleSideNav}
                              className="text-gray-600 text-[13px] hover:text-primary transition-colors duration-200 block py-1"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href={category.link}
                            onClick={handleSideNav}
                            className="text-primary text-[13px] font-medium hover:text-primary/80 transition-colors duration-200 flex items-center gap-1 py-1"
                          >
                            View All
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

            <Link href="/blog" onClick={handleSideNav}><span className={mobileLinkClasses("/blog")}>Blogs</span></Link>
            <Link href="/contact" onClick={handleSideNav}><span className={mobileLinkClasses("/contact")}>Contact</span></Link>
          </div>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <a href={bookingLink} target="_blank" rel="noopener noreferrer" className="flex flex-nowrap items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white text-[12px] font-bold uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-primary/90" onClick={handleSideNav}>
            <span>Book Consultation</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
        <div className="h-1 bg-gradient-to-r from-primary via-[#ff7a4d] to-primary"></div>
      </div>
    </>
  );
};

export default Header;
