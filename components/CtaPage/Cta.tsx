"use client"


import { Button } from "../ui/button"

interface CtaButtonProps {
    ctaText?: string;
    buttonText?: string;
}

export default function CtaButton({
    ctaText = "Ready to Transform Your Digital Presence?",
    buttonText = "Contact Us",
}: CtaButtonProps) {
    return (
        <section className="py-20  max-lg:py-2 ">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-12">
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white rounded-full opacity-10"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-white rounded-full opacity-10"></div>

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {ctaText}
                        </h2>
                        <p className="text-white/90 text-lg mb-8">
                            Let's work together to create digital solutions that drive results for your business. Contact us today
                            to get started on your project.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                <a href="/contact">
                                    {buttonText}
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
