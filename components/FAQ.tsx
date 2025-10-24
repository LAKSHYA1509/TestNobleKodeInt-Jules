import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

interface faqProps {
    faq: {
        q: string,
        a: string

    }[]

}


export default function FAQ({ faq }: faqProps) {
    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8">FAQs</h2>
            <Accordion className="flex flex-col justify-between pb-12" type="single" collapsible>
                {Array.isArray(faq) && faq.map((item, index) => {
                    const {q,a} = item
                    return  <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-[1.1rem] " >{q}</AccordionTrigger>
                            <AccordionContent className=" text-left " >
                                {a}
                            </AccordionContent>
                        </AccordionItem>
                    
                })}

            </Accordion>
        </section>
    )
}

