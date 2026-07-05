"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FaqItem = { q: string; a: string }

/**
 * Client-side FAQ accordion for feature pages. Data (plain strings) is passed
 * from the server component, keeping the content model free of client concerns.
 */
export function FeatureFaq({ faqs }: { faqs: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`faq-${i}`}>
          <AccordionTrigger className="text-base font-semibold hover:no-underline sm:text-lg">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
