import BaseImage from "@/components/BaseImage";
import React, { useState } from "react";
import Head from "next/head";
import CloseIcon from "../../../public/icons/close_new_icon.svg";
import PlusIcon from "../../../public/icons/plus_new_icon.svg";
import RelatedTopicsGrid from "@/components/related-topics-grid";

const PRPTreatmentMalaysia = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is PRP treatment?",
      answer:
        "PRP (Platelet-Rich Plasma) treatment is a regenerative therapy that uses your own blood platelets to stimulate healing and rejuvenation. Blood is drawn, processed to concentrate the platelets, and then injected into the treatment area to promote natural healing and tissue regeneration.",
    },
    {
      question: "How long do PRP treatment results last?",
      answer:
        "Results typically last 12-18 months depending on the treatment area and individual factors. For optimal results, a series of 3-4 treatments spaced 4-6 weeks apart is usually recommended, with maintenance sessions every 12-18 months.",
    },
    {
      question: "Is PRP treatment safe?",
      answer:
        "PRP treatment is very safe as it uses your own blood, eliminating the risk of allergic reactions or rejection. The procedure is minimally invasive with minimal downtime. Side effects are typically limited to mild swelling or bruising at injection sites.",
    },
    {
      question: "Who is a good candidate for PRP treatment?",
      answer:
        "Good candidates include individuals seeking skin rejuvenation, hair restoration, scar improvement, or enhanced healing. PRP is suitable for most healthy adults. A consultation will determine if PRP therapy is appropriate for your specific concerns and goals.",
    },
    {
      question: "What areas can be treated with PRP?",
      answer:
        "PRP can be used for facial rejuvenation, hair loss treatment, scar reduction, joint pain relief, sexual wellness treatments, and wound healing. It is versatile and can address multiple aesthetic and therapeutic concerns.",
    },
    {
      question: "Is there any downtime after PRP treatment?",
      answer:
        "Downtime is minimal. You may experience mild redness, swelling, or bruising for 1-3 days. Most patients return to normal activities immediately. Avoid strenuous exercise and sun exposure for 24-48 hours after treatment.",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleAccordion = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Head>
        <title>PRP Treatment Malaysia | Platelet-Rich Plasma Therapy by Specialist</title>
        <meta name="description" content="PRP treatment in Malaysia for skin rejuvenation, hair restoration, and healing. Learn about platelet-rich plasma therapy benefits, procedure, and FAQs." />
        <link rel="canonical" href="https://drsomaplasticsurgery.com/regenerative-treatments/prp-treatment-malaysia" />
      </Head>

      <section className="py-50 lg:py-100">
        <div className="flex w-full containers">
          <div className="flex w-full flex-col gap-45">
            {/* Page Title - Top Single Row */}
            <div className="text-center mb-12">
              <h1 className="text-header-black max-[512px]:!text-[34px] lg:!text-[48px] leading-tight font-bold">
                <span className="text-primary">PRP</span> <span className="text-header-black">Treatment Malaysia</span>
              </h1>
            </div>

            {/* Service Card with Image and Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Service Image Card - Left Side */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <BaseImage
                  src="/images/cellular_rejuvenation.png"
                  width={500}
                  height={350}
                  loading="lazy"
                  alt="PRP Treatment Malaysia"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Service Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-primary text-white rounded-full font-semibold text-sm shadow-lg">
                    <svg width="16" height="16" fill="currentColor" className="mr-1" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    Regenerative Therapy
                  </span>
                </div>
              </div>

              {/* Service Briefing - Right Side */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-3 py-1 bg-orange-50 text-primary rounded-full font-semibold text-sm border border-orange-200">
                    <svg width="16" height="16" fill="currentColor" className="mr-1" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    Natural Healing
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-para-black text-lg leading-relaxed">
                    PRP (Platelet-Rich Plasma) treatment is an advanced regenerative therapy that harnesses your body&apos;s natural healing power. By concentrating the growth factors in your own blood platelets, PRP stimulates tissue repair, collagen production, and cellular regeneration for rejuvenation and healing.
                  </p>

                  {/* Key Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">100% Natural</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Minimal Downtime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Long-lasting Results</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="20" height="20" fill="#EA622F" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Safe & Effective</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-20">
              <h3 className="text-header-black">
                Harness Your Body&apos;s Natural Healing Power with PRP
              </h3>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">What is PRP Treatment?</h5>
                <p className="text-para-black">
                  PRP (Platelet-Rich Plasma) treatment is a cutting-edge regenerative therapy that uses concentrated platelets from your own blood to stimulate natural healing and rejuvenation. The platelets contain growth factors that promote tissue repair, collagen synthesis, and cellular regeneration. This safe, natural treatment has gained popularity for both aesthetic and therapeutic applications.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  How Does PRP Work?
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Blood Collection</span> –
                    A small amount of blood is drawn from your arm, similar to a routine blood test.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Centrifugation</span> –
                    The blood is placed in a centrifuge to separate and concentrate the platelets from other blood components.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">Injection/Application</span> –
                    The concentrated PRP is injected or applied to the treatment area to stimulate healing and regeneration.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">PRP Treatment Applications</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-semibold text-primary mb-3">PRP for Facial Rejuvenation</h6>
                    <p className="text-sm text-gray-700">Also known as the &quot;Vampire Facial,&quot; PRP improves skin texture, reduces fine lines, and promotes a youthful glow.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-semibold text-primary mb-3">PRP for Hair Loss</h6>
                    <p className="text-sm text-gray-700">Stimulates hair follicles, promotes hair growth, and reduces hair thinning for both men and women.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-semibold text-primary mb-3">PRP for Scars</h6>
                    <p className="text-sm text-gray-700">Improves the appearance of acne scars, surgical scars, and stretch marks through collagen remodeling.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-semibold text-primary mb-3">PRP for Joint Pain</h6>
                    <p className="text-sm text-gray-700">Reduces inflammation and promotes healing in joints affected by arthritis or injuries.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-semibold text-primary mb-3">PRP for Sexual Wellness</h6>
                    <p className="text-sm text-gray-700">Enhances sexual function and sensation through tissue regeneration (O-Shot for women, P-Shot for men).</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h6 className="font-semibold text-primary mb-3">PRP for Wound Healing</h6>
                    <p className="text-sm text-gray-700">Accelerates healing of chronic wounds and post-surgical recovery.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">Benefits of PRP Treatment</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      100% Natural
                    </span>{" "}
                    – Uses your own blood, eliminating risk of allergic reactions or rejection.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Minimal Downtime
                    </span>{" "}
                    – Most patients return to normal activities immediately after treatment.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Long-lasting Results
                    </span>{" "}
                    – Results can last 12-18 months with proper maintenance.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Versatile Treatment
                    </span>{" "}
                    – Can address multiple concerns from skin rejuvenation to hair loss.
                  </p>
                  <p className="text-para-black">
                    {" "}
                    <span className="text-black !font-bold">
                      Safe & Effective
                    </span>{" "}
                    – Proven results with an excellent safety profile when performed by qualified professionals.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">The PRP Treatment Process</h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Our PRP treatment process is straightforward and comfortable. Here&apos;s what to expect:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-primary mb-2">1. Consultation</h6>
                      <p className="text-sm text-gray-700">Assessment of your concerns and treatment goals.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-primary mb-2">2. Blood Draw</h6>
                      <p className="text-sm text-gray-700">Small blood sample collected (similar to blood test).</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-primary mb-2">3. Processing</h6>
                      <p className="text-sm text-gray-700">Blood centrifuged to concentrate platelets.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-primary mb-2">4. Treatment</h6>
                      <p className="text-sm text-gray-700">PRP injected or applied to target areas.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <h5 className="text-primary">
                  Book Your PRP Consultation Today!{" "}
                </h5>
                <div className="flex flex-col gap-5">
                  <p className="text-para-black">
                    Experience the natural rejuvenating power of PRP treatment at Soma Plastic Surgery. Contact us today to schedule a consultation and discover how PRP can help you achieve your aesthetic and wellness goals.
                  </p>
                  <p className="text-para-black">
                    Let your body&apos;s own healing power work for you with PRP therapy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-50 lg:pb-100">
        <div className="flex w-full containers">
          <div className="flex w-full flex-col gap-10">
            <h2 className="text-primary md:text-start text-center max-[512px]:!text-[34px]">
              Frequently Asked <span className="text-header-black">Questions</span>
            </h2>
            <div className="flex w-full flex-col gap-[6px]">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-10 w-full border border-stroke bg-para-white rounded-[12px] py-[14px] px-[24px]"
                >
                  <div
                    className="flex justify-between !flex-nowrap w-full cursor-pointer items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h4 className="text-primary">{item.question}</h4>
                    <div className="hidden lg:flex">
                      {openIndex === index ? <CloseIcon /> : <PlusIcon />}
                    </div>
                  </div>
                  {openIndex === index && (
                    <div className="flex">
                      <p className="text-para-black">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedTopicsGrid
        topics={[
          {
            title: "Cellular Rejuvenation",
            description: "Advanced therapies for cellular regeneration and rejuvenation",
            image: "/images/cellular_rejuvenation.png",
            href: "/regenerative-treatments/cellular-rejuvenation-malaysia",
            badge: "Related",
            badgeColor: "primary"
          },
          {
            title: "Advanced Skin Care",
            description: "Comprehensive skin care treatments for optimal skin health",
            image: "/images/skin_care_image.png",
            href: "/treatments/skin-care",
            badge: "Popular",
            badgeColor: "blue"
          },
          {
            title: "EXION Treatment",
            description: "The future of non-invasive aesthetic enhancement",
            image: "/images/skin_healing_image.png",
            href: "/regenerative-treatments/exion-treatment-malaysia",
            badge: "Non-Surgical",
            badgeColor: "green"
          },
          {
            title: "Hair Transplant",
            description: "Permanent hair restoration solutions for men",
            image: "/images/Hair Transplant men.jpg",
            href: "/male/hair-transplant-malaysia",
            badge: "Popular",
            badgeColor: "blue"
          }
        ]}
        title="Related topics"
      />
    </>
  );
};

export default PRPTreatmentMalaysia;
