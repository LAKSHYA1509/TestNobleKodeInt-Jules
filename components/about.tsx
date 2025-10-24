"use client"
import Image from "next/image"
import clsx from "clsx"
import { useState } from "react"
import CtaButton from "./CtaPage/Cta"

import "swiper/css"

export default function AboutUs() {
  return (
    <div className="bg-background">
      <HeroSection />
      <TimelineComponent />
      <WeOwnResponsibilities
        className="flex flex-col lg:flex-row"
        title="We Own Responsibilities"
        content="Along with the latest infrastructure, tech stacks, management processes, and security measures gained from a diverse collective portfolio of seasoned strategists, designers, and developers in 35+ prominent industries. This helps us fulfil any client demand without compromising the output quality, quicker than the industry-best delivery timelines."
        image="https://res.cloudinary.com/dwht6936t/image/upload/v1759562067/How-To-Prepare-Effectively-For-A-Client-Sales-Meetings_kfckme_mvdrri.webp"
      />
      <WeOwnResponsibilities
        className="flex flex-col lg:flex-row-reverse"
        title="We Understand Clarity"
        content="We believe that clarity is the foundation of successful collaboration. Our transparent processes, open communication, and clear objectives ensure that every project is aligned with your vision and delivers measurable results."
        image="https://res.cloudinary.com/dwht6936t/image/upload/v1759562071/gettyimages-1469706271-612x612_symopy_np30wl.jpg"
      />
      <EmployeeTestimonials />
    </div>

  )
}

function HeroSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Our Work Speaks Volumes</span>
                <br />
                <span className="text-primary">Take Leap Forward</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Where creativity meets technology. We specialize in delivering cutting-edge content solutions tailored
                to amplify your brand's voice and engage your target audience effectively.
              </p>
            </div>

            <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              <h2 className="text-2xl font-semibold text-primary mb-4">We are NobleKode</h2>
              <p className="text-foreground leading-relaxed">
                Our team of experts is passionate about crafting compelling stories, innovative digital marketing
                strategies, and high-quality designs that drive results. Let us help you transform your ideas into
                impactful digital experiences that resonate and inspire.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="https://res.cloudinary.com/dwht6936t/image/upload/v1759562074/noblekoderecepai_qchgo6_nbl5kz.png"
                alt="NobleKode modern workspace"
                width={700}
                height={600}
                className="object-cover w-full h-[500px] lg:h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineComponent() {
  const timelineData = [
    {
      year: 2020,
      image: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562075/Coworkin-for-startup-480x640-small.png_jzkxpg_n8drbm.png",
      content:
        "Our efforts and their impact began bagging global industry recognition as tech experts and thought leaders. Our employee strength grew into a community of tech lovers building a powerful culture that was bound to see only growth ahead",
    },
    {
      year: 2022,
      image: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562069/priscilla-du-preez-XkKCui44iM0-unsplash-1_snvcdz_uqwubg.jpg",
      content:
        "Expanded our global footprint with cutting-edge solutions and strategic partnerships. We embraced remote-first culture while maintaining our commitment to innovation and client success across diverse industries.",
    },
    {
      year: 2023,
      image: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562066/images_yxap6i_zsmpts.jpg",
      content:
        "Pioneered AI-driven solutions and sustainable tech practices. Our team reached new milestones in delivering transformative digital experiences while fostering an inclusive, growth-oriented workplace culture.",
    },
  ]

  const [activeYear, setActiveYear] = useState(2020)
  const activeData = timelineData.find((item) => item.year === activeYear)

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">NobleKode</span> Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the milestones that shaped our innovative path
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          {activeData?.image && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Image
                src={activeData.image || "/placeholder.svg"}
                alt={`NobleKode in ${activeYear}`}
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover relative z-10"
              />
            </div>
          )}

          {/* Content */}
          <div className="space-y-8">
            <div className="text-8xl md:text-9xl font-black text-primary/20 leading-none">{activeYear}</div>
            <div className="relative">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-6 leading-none">{activeYear}</div>
              <p className="text-lg leading-relaxed text-foreground">{activeData?.content}</p>
            </div>
          </div>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-8">
            {timelineData.map((item, index) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={clsx("bg-cyan-600 relative w-4 h-4 rounded-full transition-all duration-300 hover:scale-125", {
                  "bg-primary shadow-lg shadow-primary/50": activeYear === item.year,
                  "bg-border hover:bg-primary/50": activeYear !== item.year,
                })}
                aria-label={`Select year ${item.year}`}
              >
                {index < timelineData.length - 1 && (
                  <div className="absolute top-1/2 left-4 w-8 h-0.5 bg-border -translate-y-1/2"></div>
                )}
              </button>
            ))}
          </div>

          <div className="flex gap-8 text-sm">
            {timelineData.map((item) => (
              <button
                key={item.year}
                className={clsx("font-medium transition-colors duration-200 hover:text-primary", {
                  "text-primary": activeYear === item.year,
                  "text-muted-foreground": activeYear !== item.year,
                })}
                onClick={() => setActiveYear(item.year)}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WeOwnResponsibilities({
  className,
  title,
  content,
  image,
}: {
  className?: string
  title: string
  content: string
  image: string
}) {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12">
      <div className={`max-w-7xl mx-auto items-center gap-16 ${className}`}>
        {/* Image */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt={title}
              width={600}
              height={500}
              className="object-cover w-full h-[500px] transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-primary">{title.split(" ").slice(-1)}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground">
            {content}
          </p>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-primary mb-2">35+</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmployeeTestimonials() {
  const testimonials = [
    {
      name: "Divyansh Gupta",
      role: "CEO and Founder",
      message:
        "I started my journey at NobleKode with a vision to create a collaborative and innovative work environment.",
      avatar: "https://res.cloudinary.com/dlrmktbrg/image/upload/v1743681050/TBond/leadership/divansh_dcobu8.jpg",
      emoji: "😉",
    },
    {
      name: "Chayan Gupta",
      role: "Operations Manager",
      message:
        "NobleKode has redefined my understanding of teamwork and collaboration. We as a team strive for excellence and support each other in achieving our goals.",
      avatar: "https://res.cloudinary.com/dlrmktbrg/image/upload/v1740484996/chayan_fqfu3i.png",
      emoji: "🤝",
    },
    { 
      name: "Lakshya Bhardwaj",
      role: "SWE Backend",
      message:
        "I love the culture of innovation and collaboration at NobleKode. We are encouraged to share ideas and work together to solve problems.",
      avatar: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562069/1725174545943_bdgt3m_ld7k8p.jpg",
      emoji: "🥳",
    },
  ]

  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-muted/20 to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Here are a few thoughts <br />
            shared by our{" "}
            <span className="text-primary relative">
              Employees
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 text-accent">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes NobleKode a great place to work and grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              {/* Emoji Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </div>

              {/* Quote */}
              <div className="mb-8">
                <div className="text-4xl text-primary/20 mb-4 font-serif">"</div>
                <p className="text-card-foreground leading-relaxed font-medium">{item.message}</p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={item.avatar || "/placeholder.svg"}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover w-14 h-14 ring-2 ring-primary/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground text-lg">{item.name}</h4>
                  <p className="text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
