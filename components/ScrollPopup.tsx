"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Testimonial {
    id: number
    name: string
    title: string
    company: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Rohit Jesudian",
        title: "CEO/Founder",
        company: "KODA",
        image: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562074/headshot-with-client-testimonial_fgayjr_cw5vf7.jpg",
        quote:
            "I just want to take a moment to thank the entire Appinventiv team for your incredible support. We truly appreciate everything you've done, and we're excited to continue working together as we grow here at KODA",
    },
    {
        id: 2,
        name: "Sarah Johnson",
        title: "CTO",
        company: "TechFlow",
        image: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562068/istockphoto-1145045107-612x612_ske7dh_pgeyga.jpg",
        quote:
            "The team's expertise and dedication transformed our digital presence completely. Their innovative solutions exceeded our expectations and delivered results beyond what we imagined possible.",
    },
    {
        id: 3,
        name: "Michael Chen",
        title: "Product Manager",
        company: "InnovateLab",
        image: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562067/istockphoto-1135381120-612x612_vfazxx_lbmwkj.jpg",
        quote:
            "Working with this team has been a game-changer for our startup. Their technical skills combined with business acumen helped us scale rapidly and efficiently.",
    },
]

export default function ScrollPopup() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasShown, setHasShown] = useState(false)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    // Scroll detection
     useEffect(() => {
        const alreadyShown = sessionStorage.getItem("popupShown")
        if (alreadyShown === "true") {
            setHasShown(true)
            return
        }

        const handleScroll = () => {
            const scrollY = window.pageYOffset
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent = scrollY / docHeight

            if (scrollPercent >= 0.1) {
                setIsVisible(true)
                setHasShown(true)
                sessionStorage.setItem("popupShown", "true")
                window.removeEventListener("scroll", handleScroll)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Auto-rotate testimonials
    useEffect(() => {
        if (!isVisible) return

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isVisible])

    const handleClose = () => {
        setIsVisible(false)
    }

    const handlePrevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const handleNextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }


if (!hasShown || !isVisible) return null

    const currentTestimonialData = testimonials[currentTestimonial]

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in-0 duration-500">
            <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in-0 zoom-in-95 duration-700 border border-white/20">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-20 p-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                    <X className="w-6 h-6 text-gray-700" />
                </button>

                <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left Side - Testimonials */}
                    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 lg:p-12 relative overflow-hidden">
                        {/* Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100 rounded-full translate-y-24 -translate-x-24 opacity-20"></div>

                        <div className="relative z-10 mb-8">
                            <h2 className="text-2xl lg:text-3xl font-bold text-blue-700 mb-2">What Our Clients Say</h2>
                            <p className="text-gray-600">Join 3000+ businesses that trust Appinventiv for their digital transformation</p>
                        </div>

                        {/* Testimonial Navigation Dots */}
                        <div className="flex justify-center gap-3 mb-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentTestimonial
                                            ? "bg-blue-600 scale-125 shadow-lg"
                                            : "bg-blue-300 hover:bg-blue-400"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Testimonial Content */}
                        <div className="text-center mb-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
                            <div className="relative w-24 h-24 mx-auto mb-6">
                                <Image
                                    src={currentTestimonialData.image || "/placeholder.svg"}
                                    alt={currentTestimonialData.name}
                                    fill
                                    className="rounded-full object-cover shadow-lg ring-4 ring-white/50"
                                />
                                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs">✓</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{currentTestimonialData.name}</h3>
                            <p className="text-gray-600 text-sm bg-white/70 rounded-full px-4 py-2 inline-block shadow-sm">
                                {currentTestimonialData.title}, {currentTestimonialData.company}
                            </p>
                        </div>

                        {/* Quote */}
                        <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                            <div className="text-4xl text-blue-500 mb-4 text-center opacity-50">"</div>
                            <p className="text-gray-800 text-center leading-relaxed mb-6 italic">
                                {currentTestimonialData.quote}
                            </p>

                            {/* Navigation Arrows */}
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={handlePrevTestimonial}
                                    className="p-3 bg-white/80 hover:bg-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                                </button>
                                <button
                                    onClick={handleNextTestimonial}
                                    className="p-3 bg-white/80 hover:bg-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-700" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Call to Action */}
                    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 lg:p-12 text-white relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
                            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full -translate-x-12 -translate-y-12"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="w-6 h-6 text-yellow-300" />
                                <span className="text-sm font-medium text-blue-100 uppercase tracking-wide">Ready to Start?</span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                                Let's Build Something Amazing Together
                            </h2>

                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                Share your vision with us. Our team of experts is ready to turn your ideas into reality with innovative solutions tailored just for you.
                                <br />
                                <br />
                                We have been helping companies redefine their digital possibilities for nearly a decade now. With our team of 50+ tech evangelists, we are building the digital infrastructure of our clients positioning them to be the market leaders of their respective industries.
                                <br />
                                <br />
                                We offer comprehensive digital solutions to help your business thrive in the digital landscape. From web development to digital marketing, we've got you covered.
                            </p>

                            <div className="space-y-4">
                                <Link href="/contact" onClick={handleClose}>
                                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                                        <span className="flex items-center justify-center gap-2">
                                            Get In Touch
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Button>
                                </Link>

                                <p className="text-center text-blue-200 text-sm">
                                    No commitment • Free consultation • Quick response
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
