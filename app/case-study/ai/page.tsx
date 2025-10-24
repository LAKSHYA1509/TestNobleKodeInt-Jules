"use client"

import { useState } from "react"
import { MainCompo } from "@/app/portfolio/tbond/PortfolioTbondClient"
import Image from "next/image"
import {
  Play,
  ArrowRight,
  Users,
  Award,
  Calendar,
  CheckCircle,
  Star,
  Quote,
  Zap,
} from "lucide-react"
import ReactPlayer from "react-player"
import Link from "next/link"
import CtaButton from "@/components/CtaPage/Cta"

export default function AIIndustry() {
  return (
    <div className="bg-background">
      <Banner />
      <Hero />
      <TransformationShowcase />
      <StatsSection />
      <OurServices />
      <TestimonialsSection />
      <AIBenefits />
      <CtaButton 
        ctaText="Want AI Solutions Like This? Let's Innovate Together!"
        buttonText="Start My AI Project"
      />
    </div>
  )
}

function Banner() {
  return (
    <div>
      <MainCompo
        h1={"AI Industry Transformation"}
        bgImg="https://res.cloudinary.com/dwht6936t/image/upload/v1759562169/pngtree-humans-and-robots-collaborating-at-a-high-tech-conference-showcasing-the-image_17625214_fzpk8f_ekwcmb.webp"
      />
    </div>
  )
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left - Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-4 py-2 bg-card text-card-foreground text-sm font-medium rounded-full">
              AI Transformation Solutions
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Revolutionizing Industries
              <span className="text-primary block">With Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Discover how our AI solutions are driving automation, insights, and efficiency across finance, retail, healthcare, and more.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/industry"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              View More Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Right - Image */}
        <div className="flex-1 relative">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
              alt="AI transformation"
              fill
              className="object-cover"
            />
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-secondary rounded-2xl flex flex-col items-center justify-center shadow-lg">
              {/* Add AI-related stats here if desired */}
            </div>
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-card rounded-2xl p-4 shadow-lg">
              <div className="text-center">
                {/* Add AI-related stats here if desired */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TransformationShowcase() {
  const transformations = [
    {
      title: "Predictive Analytics",
      before: "Manual data analysis, slow insights",
      after: "Real-time predictions and automated reporting",
      improvement: "60% faster decision-making",
      icon: Users,
    },
    {
      title: "Customer Service Automation",
      before: "Long wait times, limited support",
      after: "24/7 AI chatbots and virtual assistants",
      improvement: "80% reduction in response time",
      icon: Zap,
    },
    {
      title: "Process Optimization",
      before: "Inefficient workflows, human error",
      after: "AI-driven automation and optimization",
      improvement: "40% cost savings",
      icon: Award,
    },
  ]

  return (
    <section className="bg-gradient-to-br from-muted to-card py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            AI Impact
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Real-World AI Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See how artificial intelligence is revolutionizing business operations, delivering automation, insights, and growth across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <item.icon className="h-8 w-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-6">{item.title}</h3>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-destructive/10 rounded-lg border-l-4 border-destructive/30">
                  <span className="text-sm font-medium text-muted-foreground block mb-1">Before</span>
                  <span className="text-foreground">{item.before}</span>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                  <span className="text-sm font-medium text-muted-foreground block mb-1">After</span>
                  <span className="text-foreground">{item.after}</span>
                </div>
              </div>

              <div className="text-center p-4 bg-secondary/10 rounded-lg">
                <span className="text-2xl font-bold text-secondary">{item.improvement}</span>
                <span className="block text-sm text-muted-foreground mt-1">Improvement</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { number: "12+", label: "Years AI Experience", icon: Award },
    { number: "200+", label: "AI Projects Delivered", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Calendar },
    { number: "500K+", label: "Automations Deployed", icon: CheckCircle },
  ]

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OurServices() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-card text-card-foreground text-sm font-medium rounded-full mb-4">
          Our AI Solutions
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          End-to-End AI Services
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          From machine learning development to AI-powered automation, we deliver secure, scalable, and innovative solutions for your business.
        </p>
      </div>

      <ServiceCard />
    </section>
  )
}

function ServiceCard() {
  const cards = [
    {
      name: "Machine Learning Solutions",
      text: "Custom ML models for prediction, classification, and optimization tailored to your business needs.",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562164/images_l49l0o_qmnkoa.jpg",
      icon: Users,
      results: "Up to 95% accuracy",
    },
    {
      name: "AI Chatbots & Virtual Assistants",
      text: "Enhance customer engagement and automate support with intelligent conversational AI.",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562160/chatbot-vs-virtual-assistant_sortug_kjhgwx.png",
      icon: Award,
      results: "24/7 support",
    },
    {
      name: "Process Automation",
      text: "Automate repetitive tasks and workflows to boost productivity and reduce costs.",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562175/Why-Business-Process-Automation-Is-Important_omnnjz_oratj3.jpg",
      icon: Calendar,
      results: "40% cost savings",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((item, index) => (
        <div
          key={index}
          className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={item.img || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute top-4 left-4 px-3 py-1 bg-secondary/90 backdrop-blur-sm rounded-full">
              <span className="text-xs font-semibold text-secondary-foreground">{item.results}</span>
            </div>

            {/* Floating icon */}
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
              <item.icon className="h-6 w-6 text-secondary-foreground" />
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">{item.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Emily Zhang",
      role: "Data Science Lead",
      content:
        "The AI models delivered actionable insights that transformed our business strategy. Highly recommended for any data-driven organization.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Customer Experience Manager",
      content:
        "AI chatbots improved our customer support and satisfaction rates dramatically. The automation was seamless and effective.",
      rating: 5,
    },
    {
      name: "Sophia Garcia",
      role: "Operations Director",
      content:
        "Process automation with AI saved us countless hours and reduced operational costs. The results exceeded our expectations.",
      rating: 5,
    },
  ]

  return (
    <section className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-background text-foreground text-sm font-medium rounded-full mb-4">
            Client Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-primary mb-4" />

              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">"{testimonial.content}"</p>

              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AIBenefits() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-card text-card-foreground text-sm font-medium rounded-full mb-4">
          Why Choose AI
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Your AI Transformation Partner
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          We guide you through every step of your AI journey, from strategy to implementation, ensuring measurable results and future-ready solutions.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        <VideoThumbnail />

        <div className="flex-1 space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-card-foreground mb-2">100+</div>
              <div className="text-sm text-muted-foreground">AI Projects</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-card-foreground mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-card-foreground mb-2">2M+</div>
              <div className="text-sm text-muted-foreground">Tasks Automated</div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {["Custom AI Strategy", "24/7 Technical Support", "Proven ROI & Business Value", "Enterprise-Grade Security"].map(
              (feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              )
            )}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Start Your AI Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function VideoThumbnail() {
  const [play, setPlay] = useState(false)

  return (
    <div className="relative w-full max-w-lg">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
        {!play ? (
          <>
            <Image
              src="https://img.youtube.com/vi/2ePf9rue1Ao/maxresdefault.jpg"
              alt="AI technology overview"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => setPlay(true)}
                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors hover:scale-110 transform"
              >
                <Play className="h-8 w-8 text-primary-foreground ml-1" />
              </button>
            </div>
          </>
        ) : (
          <ReactPlayer
            src="https://www.youtube.com/watch?v=2ePf9rue1Ao"
            playing={true}
            controls={true}
            width="100%"
            height="100%"
          />
        )}
      </div>

      <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full"></div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full opacity-80"></div>
    </div>
  )
}

function CTASection() {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 text-pretty">
          Join leading organizations leveraging artificial intelligence for automation, insights, and growth. Schedule a consultation to unlock your AI potential.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-semibold rounded-lg hover:bg-background/90 transition-colors"
          >
            Schedule Consultation
            <Calendar className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/industry"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/20 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
          >
            View More AI Cases
          </Link>
        </div>
      </div>
    </section>
  )
}
