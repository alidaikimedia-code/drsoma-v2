"use client"

import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  faqs: FAQItem[]
  title?: string
  subtitle?: string
  badgeText?: string
  bgColor?: "white" | "gray"
  className?: string
}

export default function FAQ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Clear answers to help you make informed decisions",
  badgeText = "FAQ",
  bgColor = "white",
  className = "",
}: FAQProps) {
  const bgClass = bgColor === "gray" ? "bg-[#FAFAF9]" : "bg-white"

  return (
    <section className={`py-8 sm:py-[50px] ${bgClass} ${className}`}>
      <div className="flex containers w-full justify-center">
        <div className="max-w-4xl w-full">
        <div className="text-center mb-8 sm:mb-16">
          <Badge variant="secondary" className="bg-white text-[#666666] hover:bg-white font-normal px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 border border-[#E8E8E8] text-xs sm:text-sm">
            {badgeText}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 sm:mb-5 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[14px] sm:text-[17px] text-[#666666]">
              {subtitle}
            </p>
          )}
        </div>

        {faqs && faqs.length > 0 ? (
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#E8E8E8] bg-white rounded-lg sm:rounded-xl overflow-hidden data-[state=open]:border-[#D4D4D4] data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="px-4 sm:px-8 py-4 sm:py-6 hover:bg-[#FAFAF9] transition-colors hover:no-underline [&[data-state=open]]:bg-[#FAFAF9] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-[#666666] [&>svg]:flex-shrink-0 [&>svg]:min-w-[16px] gap-4">
                  <span className="text-[14px] sm:text-[17px] text-[#1A1A1A] text-left tracking-normal font-medium flex-1">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-8 pt-[10px] pb-4 sm:pb-6 bg-[#FAFAF9] border-t border-[#E8E8E8]">
                  <p className="text-[13px] sm:text-[16px] text-[#444444] leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="text-center text-[#666666]">No FAQs available.</p>
        )}
        </div>
      </div>
    </section>
  )
}

