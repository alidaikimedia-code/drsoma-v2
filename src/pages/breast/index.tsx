"use client"

import React, { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FAQ from "@/components/common/faq"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Sparkles, RefreshCw, Minus, Droplets, XCircle, Settings, AlertCircle, Phone, MessageCircle } from "lucide-react"
import BaseImage from "@/components/BaseImage"
import Link from "next/link"
import Head from "next/head"
import { useTranslation } from 'react-i18next'
import { getLocaleFromPath } from '@/i18n/config'

// bestFor counts per treatment
const bestForCounts = [4, 3, 3, 2, 3, 3, 4]

// Static treatment metadata (non-translatable)
const treatmentMeta = [
  { icon: Sparkles, category: "enhancement", image: "/breast/breast-augmentation.jpg", href: "/breast/breast-augmentation-malaysia" },
  { icon: RefreshCw, category: "enhancement", image: "/breast/breast-lift.png", href: "/breast/breast-lift-malaysia" },
  { icon: Minus, category: "enhancement", image: "/breast/breast-reduction.png", href: "/breast/breast-reduction-malaysia" },
  { icon: Droplets, category: "enhancement", image: "/breast/fat-transfer-breast-augmentation-malaysia", href: "/breast/fat-transfer-breast-augmentation-malaysia" },
  { icon: XCircle, category: "revision", image: "/breast/breast-implant-removal.png", href: "/breast/breast-implant-removal-malaysia" },
  { icon: Settings, category: "revision", image: "/breast/breast-revision.avif", href: "/breast/breast-revision-surgery-malaysia" },
  { icon: AlertCircle, category: "revision", image: "/breast/capsular-contracture.jpeg", href: "/breast/capsular-contracture-correction-malaysia" },
]

const guideHrefs = [
  "/breast/breast-augmentation-malaysia",
  "/breast/breast-lift-malaysia",
  "/breast/breast-reduction-malaysia",
  "/breast/fat-transfer-breast-augmentation-malaysia",
  "/breast/breast-implant-removal-malaysia",
  "/breast/breast-revision-surgery-malaysia",
  "/breast/capsular-contracture-correction-malaysia",
]

// Components
function HeroSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="relative bg-gradient-to-b from-[#FAFAF9] to-white py-8 sm:py-[50px]">
      <div className="flex containers w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-3">
          <Badge variant="secondary" className="bg-[#F5F5F5] text-[#666666] hover:bg-[#F5F5F5] font-normal px-3 sm:px-4 py-1.5 text-xs sm:text-sm">
            {t('breastHub.heroBadge')}
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
            {t('breastHub.heroTitle')}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#555555] max-w-2xl mx-auto lg:mx-0 font-light">
            {t('breastHub.heroSubtitle')}
          </p>

          <Separator className="max-w-24 mx-auto lg:mx-0 bg-[#E8E8E8]" />

          <p className="text-[14px] sm:text-[16px] text-[#666666] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {t('breastHub.heroDesc1')}
          </p>
          <p className="text-[14px] sm:text-[16px] text-[#666666] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {t('breastHub.heroDesc2')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#E65A27] hover:bg-[#D14E1E] text-white rounded-full font-medium h-12 px-6 sm:px-8 text-sm sm:text-base">
                <Phone className="w-4 h-4 mr-2" />
                {t('breastHub.bookConsultation')}
              </Button>
            </Link>
            <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Breast%20Surgery">
              <Button size="lg" variant="outline" className="border-[#D4D4D4] text-[#2B2B2B] hover:bg-[#FAFAF9] rounded-full font-medium h-12 px-6 sm:px-8 text-sm sm:text-base">
                <MessageCircle className="w-4 h-4 mr-2" />
                {t('breastHub.whatsAppUs')}
              </Button>
            </a>
          </div>

          <p className="text-[12px] sm:text-[13px] text-[#999999] italic pt-2">
            {t('breastHub.disclaimer')}
          </p>
        </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <BaseImage
                src="/breast/breast-hero.png"
                alt="Breast surgery consultation"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Optional decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E65A27]/10 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#E65A27]/5 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TreatmentsSection({ t }: { t: (key: string) => string }) {
  const [selectedCategory, setSelectedCategory] = React.useState("enhancement")

  const breastTreatments = treatmentMeta.map((meta, i) => ({
    title: t(`breastHub.t${i}Title`),
    location: "Malaysia",
    description: t(`breastHub.t${i}Desc`),
    bestFor: Array.from({ length: bestForCounts[i] }, (_, j) => t(`breastHub.t${i}Best${j}`)),
    href: meta.href,
    cta: t(`breastHub.t${i}Cta`),
    icon: meta.icon,
    category: meta.category,
    image: meta.image,
  }))

  const enhancementTreatments = breastTreatments.filter(item => item.category === "enhancement")
  const revisionTreatments = breastTreatments.filter(item => item.category === "revision")

  return (
    <section className="py-8 sm:py-[50px] bg-gradient-to-b from-[#FAFAF9] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="flex containers w-full relative z-10">
        <div className="flex flex-col w-full">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-14 w-full">
            <span className="inline-block text-primary text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase mb-3 sm:mb-4">
              {t('breastHub.treatmentsLabel')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 tracking-tight">
              {t('breastHub.treatmentsTitle')} <span className="text-primary">{t('breastHub.treatmentsTitleHighlight')}</span>
            </h2>
            <p className="text-[14px] sm:text-[17px] text-[#666666] max-w-2xl mx-auto leading-relaxed">
              {t('breastHub.treatmentsDesc')}
            </p>
          </div>

          {/* Mobile Dropdown */}
          <div className="sm:hidden mb-8">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-14 px-6 bg-white border border-gray-200 rounded-full text-[14px] font-semibold text-[#1A1A1A] shadow-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
            >
              <option value="enhancement">{t('breastHub.enhancementTab')}</option>
              <option value="revision">{t('breastHub.revisionTab')}</option>
            </select>
          </div>

          {/* Mobile Content */}
          <div className="sm:hidden">
            {selectedCategory === "enhancement" && (
              <div className="grid grid-cols-1 gap-4">
                {enhancementTreatments.map((treatment, idx) => (
                  <TreatmentCard key={idx} treatment={treatment} t={t} />
                ))}
              </div>
            )}
            {selectedCategory === "revision" && (
              <div className="grid grid-cols-1 gap-4">
                {revisionTreatments.map((treatment, idx) => (
                  <TreatmentCard key={idx} treatment={treatment} t={t} />
                ))}
              </div>
            )}
          </div>

          {/* Desktop/Tablet Tabs */}
          <Tabs defaultValue="enhancement" className="w-full hidden sm:block">
            <TabsList className="flex w-full max-w-lg mx-auto mb-14 h-16 bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
              <TabsTrigger
                value="enhancement"
                className="flex-1 text-[15px] font-semibold rounded-xl h-full transition-all duration-300 px-4 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                {t('breastHub.enhancementTab')}
              </TabsTrigger>
              <TabsTrigger
                value="revision"
                className="flex-1 text-[15px] font-semibold rounded-xl h-full transition-all duration-300 px-4 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                {t('breastHub.revisionTab')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="enhancement" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                {enhancementTreatments.map((treatment, idx) => (
                  <TreatmentCard key={idx} treatment={treatment} t={t} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="revision" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {revisionTreatments.map((treatment, idx) => (
                  <TreatmentCard key={idx} treatment={treatment} t={t} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function TreatmentCard({ treatment, t }: { treatment: { image: string; title: string; location: string; description: string; bestFor: string[]; href: string }; t: (key: string) => string }) {
  return (
    <Card className="group bg-white border-0 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col">
      {/* Treatment Image */}
      <div className="relative h-44 sm:h-56 w-full overflow-hidden flex-shrink-0">
        <BaseImage
          src={treatment.image}
          alt={treatment.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[10px] sm:text-[12px] text-white border-0 bg-primary font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg">
          {treatment.location}
        </Badge>
      </div>

      <CardHeader className="pb-2 sm:pb-3 pt-4 sm:pt-5 px-4 sm:px-6 flex-shrink-0">
        <CardTitle className="text-base sm:text-lg font-bold text-[#1A1A1A] mb-2">
          {treatment.title}
        </CardTitle>
        <CardDescription className="text-[13px] sm:text-[15px] text-[#555555] leading-relaxed">
          {treatment.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-3 sm:pb-4 px-4 sm:px-6 flex-grow">
        <p className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wider mb-2 sm:mb-3">{t('breastHub.bestFor')}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {treatment.bestFor.map((tag, i) => (
            <Badge key={i} variant="secondary" className="bg-gradient-to-r from-primary/10 to-orange-100 text-primary hover:from-primary/20 hover:to-orange-200 text-[10px] sm:text-[12px] font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border-0 transition-colors">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-4 sm:pb-6 px-4 sm:px-6 mt-auto flex-shrink-0">
        <Link href={treatment.href} className="w-full">
          <Button className="w-full bg-primary hover:bg-[#d14e1e] text-white rounded-full font-semibold text-[12px] sm:text-[13px] h-auto py-3 sm:py-4 px-6 sm:px-8 transition-all duration-300 shadow-md hover:shadow-lg group-hover:scale-[1.02] whitespace-normal text-center leading-tight">
            {t('breastHub.viewDetails')}
            <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function QuickGuideSection({ t }: { t: (key: string) => string }) {
  const quickGuide = Array.from({ length: 7 }, (_, i) => ({
    goal: t(`breastHub.guide${i}Goal`),
    procedure: t(`breastHub.guide${i}Procedure`),
    href: guideHrefs[i],
  }))

  return (
    <section className="py-8 sm:py-[50px] bg-[#FAFAF9] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E8E8E8_1px,transparent_1px),linear-gradient(to_bottom,#E8E8E8_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="flex containers w-full relative">
        <div className="flex flex-col w-full">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-16 w-full">
            <p className="text-[11px] sm:text-[13px] uppercase tracking-[0.2em] text-[#E65A27] font-medium mb-3 sm:mb-4">
              {t('breastHub.guideLabel')}
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 tracking-tight">
              {t('breastHub.guideTitle')}
            </h2>
            <p className="text-[14px] sm:text-[18px] text-[#666666] max-w-lg mx-auto">
              {t('breastHub.guideDesc')}
            </p>
          </div>

          {/* Guide Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {quickGuide.map((item, idx) => (
              <Link key={idx} href={item.href} className="block group">
                <Card className="h-full bg-white border-0 transition-all rounded-xl sm:rounded-2xl overflow-hidden flex flex-col">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Top accent bar */}

                    <div className="p-6 sm:p-7 flex flex-col h-full text-center sm:text-left">
                      {/* Number badge */}
                      <div className="flex items-center justify-center sm:justify-between mb-4 sm:mb-5">
                        <span className="text-[10px] sm:text-[12px] font-semibold text-[#E65A27] bg-[#FEF3EE] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                          {t('breastHub.optionLabel')} {idx + 1}
                        </span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#CCCCCC] group-hover:text-[#E65A27] group-hover:translate-x-1 transition-all duration-300 hidden sm:block" />
                      </div>

                      {/* Content */}
                      <div className="space-y-2 sm:space-y-3 flex-grow">
                        <p className="text-[13px] sm:text-[15px] text-[#777777] leading-relaxed">
                          {item.goal}
                        </p>
                        <h3 className="text-[16px] sm:text-[20px] font-bold text-[#1A1A1A] group-hover:text-[#E65A27] transition-colors tracking-normal">
                          {item.procedure}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 sm:mt-16 text-center">
            <Card className="inline-block bg-[#1A1A1A] border-0 rounded-xl sm:rounded-2xl overflow-hidden w-full sm:w-auto">
              <CardContent className="px-6 sm:px-[80px] py-6 sm:py-[30px] flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-white text-[12px] sm:text-[14px] mb-1">{t('breastHub.stillNotSure')}</p>
                  <p className="text-white text-[16px] sm:text-[18px] font-semibold">{t('breastHub.letUsHelp')}</p>
                </div>
                <Link href="/contact">
                  <Button size="lg" className="bg-[#E65A27] hover:bg-[#D14E1E] text-white rounded-full font-medium h-12 sm:h-14 px-6 sm:px-8 text-[13px] sm:text-[15px] whitespace-nowrap w-full sm:w-auto">
                    {t('breastHub.bookConsultation')}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function DifferentiatorsSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="py-8 sm:py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="flex flex-col w-full">
          <div className="text-center mb-8 sm:mb-14 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3 sm:mb-4 tracking-tight">
              {t('breastHub.diffTitle')}
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#666666] max-w-2xl mx-auto">
              {t('breastHub.diffDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {Array.from({ length: 5 }, (_, idx) => (
              <Card key={idx} className="border-[#E8E8E8] shadow-none rounded-lg sm:rounded-xl hover:border-[#D4D4D4] hover:shadow-sm transition-all">
                <CardContent className="p-5 sm:p-8 text-center">
                  <CardTitle className="text-[16px] sm:text-[18px] font-semibold text-[#1A1A1A] mb-2 sm:mb-3">
                    {t(`breastHub.diff${idx}Title`)}
                  </CardTitle>
                  <p className="text-[13px] sm:text-[15px] text-[#666666] leading-relaxed">
                    {t(`breastHub.diff${idx}Desc`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection({ t }: { t: (key: string) => string }) {
  return (
    <section className="py-8 sm:py-[50px] bg-white">
      <div className="flex containers w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* CTA Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <BaseImage
                src="/breast/breast-cta.jpeg"
                alt="Book a consultation"
                fill
                className="object-cover "
              />
            </div>
          </div>

          {/* CTA Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-5 sm:mb-8 tracking-tight">
              {t('breastHub.ctaTitle')}
            </h2>
            <p className="text-[14px] sm:text-[17px] text-[#666666] mb-6 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t('breastHub.ctaDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <Button size="lg" className="bg-[#E65A27] hover:bg-[#D14E1E] text-white rounded-full font-medium h-12 sm:h-14 px-6 sm:px-8 py-4 text-[14px] sm:text-[16px]">
                  {t('breastHub.bookConsultation')}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/60142616007?text=Hi%2C%20I%27m%20interested%20in%20Breast%20Surgery">
                <Button size="lg" variant="outline" className="border-[#D4D4D4] text-[#2B2B2B] hover:bg-[#FAFAF9] rounded-full font-medium h-12 sm:h-14 px-6 sm:px-8 py-4 text-[14px] sm:text-[16px]">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {t('breastHub.whatsAppUs')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Page
export default function BreastHubPage() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const detected = getLocaleFromPath(window.location.pathname)
    if (detected !== i18n.language) {
      i18n.changeLanguage(detected)
    }
  }, [i18n])

  const faqs = Array.from({ length: 11 }, (_, i) => ({
    question: t(`breastHub.faq${i}Q`),
    answer: t(`breastHub.faq${i}A`),
  }))

  return (
    <>
      <Head>
        <title>Breast Surgery in Malaysia | Breast Procedures and Treatments</title>
        <meta name="description" content="Explore breast surgery options in Malaysia including breast augmentation, breast lift, breast reduction, fat transfer, implant removal, revision surgery, and capsular contracture correction. View each treatment page and book a private consultation." />
        <link rel="canonical" href="https://drsomaplasticsurgery.com/breast/" />
        {/* Alternative Meta Title: Breast Treatments Malaysia | Augmentation, Lift, Reduction and Revision */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://drsoma-v2.vercel.app/breast/#service",
              "name": "Breast Surgery in Malaysia | Breast Procedures and Treatments",
              "url": "https://drsoma-v2.vercel.app/breast/",
              "description": "Explore breast surgery options in Malaysia including breast augmentation, breast lift, breast reduction, fat transfer, implant removal, revision surgery, and capsular contracture correction. View each treatment page and book a private consultation.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.9,
                "reviewCount": 127
              }
            })
          }}
        />
      </Head>
      
      <main className="min-h-screen bg-white">
        <HeroSection t={t} />
        <TreatmentsSection t={t} />
        <QuickGuideSection t={t} />
        <DifferentiatorsSection t={t} />
        <FAQ
          faqs={faqs}
          title={t('breastHub.faqTitle')}
          subtitle={t('breastHub.faqSubtitle')}
          bgColor="gray"
        />
        <CTASection t={t} />
      </main>
    </>
  )
}
