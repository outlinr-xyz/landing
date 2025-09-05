"use client"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

const faqs = [
  {
    question: "Is Outlinr available now?",
    answer:
      "Not yet. We're building it and inviting early users to join the waitlist. You'll get updates and early access as soon as we're live.",
  },
  {
    question: "How much will it cost?",
    answer:
      "Pricing hasn't been announced, but expect a free version for individuals and flexible paid plans for teams",
  },
  {
    question: "Does it integrate with other tools?",
    answer:
      "Yes. Outlinr is being built to work with Teams, Slack, and Google Meet so it fits into your workflow.",
  },
  {
    question:
      "Do I need design experience to use it?",
    answer:
      "No. Outlinr's AI builder and templates make it simple to create polished slides, even if design isn't your thing."
  },
  {
    question:
      "How does the audience join?",
    answer:
      "They just scan a QR code or use a link to connect instantly, no logins or downloads required.",
  },
  {
    question:
      "Is my data secure?",
    answer:
      "Yes. All audience input and presentation data is encrypted and handled with care. Your privacy is non-negotiable."
  }
]

export default function Faqs() {
  return (
    <section className="mx-auto mt-32 w-full max-w-6xl px-3" aria-labelledby="faq-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
        <div className="col-span-full sm:col-span-5">
          <h2
            id="faq-title"
            className="inline-block scroll-my-24 bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 pr-2 text-2xl font-bold tracking-tighter text-transparent lg:text-3xl font-space-grotesk"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Can&rsquo;t find the answer you&rsquo;re looking for? Don&rsquo;t
            hesitate to get in touch with our{" "}
            <Link
              href="mailto:bakaredavid007@gmail.com"
              className="font-medium text-[#1E4DFF]"
            >
              customer support
            </Link>
            {" "} team.
          </p>
        </div>
        <div className="col-span-full mt-6 lg:col-span-7 lg:mt-0">
          <Accordion type="multiple" className="mx-auto">
            {faqs.map((item) => (
              <AccordionItem
                value={item.question}
                key={item.question}
                className="py-3 first:pb-3 first:pt-0"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
