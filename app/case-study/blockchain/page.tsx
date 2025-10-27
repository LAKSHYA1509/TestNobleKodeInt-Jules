
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
  TrendingUp,
  Target,
  Zap,
} from "lucide-react"
import ReactPlayer from "react-player"
import Link from "next/link"
import CtaButton from "@/components/CtaPage/Cta"

export default function BlockchainIndustry() {
  return (
    <div className="bg-background">
      <Banner />
      <Hero />
      <TransformationShowcase />
      <StatsSection />
      <OurServices />
      <TestimonialsSection />
      <BlockchainBenefits />
      <CtaButton 
        ctaText="Ready to Build the Next Blockchain Success?"
        buttonText="Start My Blockchain Project"
      />
    </div>
  )
}

function Banner() {
  return (
    <div>
      <MainCompo
        h1={"Blockchain Industry Transformation"}
        bgImg="https://res.cloudinary.com/dwht6936t/image/upload/v1759562159/70dc28d8-8c1d-48c4-986d-9a0aa49e9161_IoT_In_Blockchain__Benefits__Uses_Cases_Challenges_ip659m_ujte7d.avif"
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
              Blockchain Transformation Solutions
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Revolutionizing Industries
              <span className="text-primary block">With Blockchain</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Discover how our blockchain solutions are driving transparency, security, and efficiency across finance, supply chain, healthcare, and more.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/industry"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              View more Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            {/* <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
            >
              Our Blockchain Solutions
            </Link> */}
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://res.cloudinary.com/dwht6936t/image/upload/v1759562159/10-Ways-Blockchain-is-Transforming-Industries-Beyond-Cryptocurrency_grhtpj_lhpwsy.jpg"
              alt="Blockchain transformation"
              fill
              className="object-cover"
            />
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-secondary rounded-2xl flex flex-col items-center justify-center shadow-lg">
              {/* Add blockchain-related stats here if desired */}
            </div>
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-card rounded-2xl p-4 shadow-lg">
              <div className="text-center">
                {/* Add blockchain-related stats here if desired */}
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
      title: "Supply Chain Transparency",
      before: "Manual tracking, data silos",
      after: "Immutable records, real-time visibility",
      improvement: "80% faster audits",
      icon: Users,
    },
    {
      title: "Financial Settlement",
      before: "Lengthy reconciliation, high costs",
      after: "Instant, automated smart contracts",
      improvement: "70% cost reduction",
      icon: Zap,
    },
    {
      title: "Data Security",
      before: "Centralized risk, breaches",
      after: "Decentralized, tamper-proof storage",
      improvement: "99% breach reduction",
      icon: Award,
    },
  ]

  return (
    <section className="bg-gradient-to-br from-muted to-card py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Blockchain Impact
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Real-World Blockchain Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See how blockchain is revolutionizing business operations, delivering transparency, automation, and trust across industries.
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
    { number: "10+", label: "Years Blockchain Experience", icon: Award },
    { number: "100+", label: "Enterprise Deployments", icon: Users },
    { number: "24/7", label: "Network Uptime", icon: Calendar },
    { number: "99.99%", label: "Data Integrity", icon: CheckCircle },
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
          Our Blockchain Solutions
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          End-to-End Blockchain Services
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          From smart contract development to enterprise blockchain integration, we deliver secure, scalable, and innovative solutions for your business.
        </p>
      </div>

      <ServiceCard />
    </section>
  )
}

function ServiceCard() {
  const cards = [
    {
      name: "Smart Contract Development",
      text: "Custom smart contracts for automation, compliance, and trustless transactions across industries.",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562170/Smart-contract-development-company_isohx4.png",
      icon: Users,
      results: "100% automation",
    },
    {
      name: "Enterprise Blockchain Integration",
      text: "Seamless integration of blockchain with your existing systems for supply chain, finance, and identity management.",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562164/images_o6c7ot.jpg",
      icon: Award,
      results: "80% faster reconciliation",
    },
    {
      name: "Decentralized Applications (dApps)",
      text: "Design and deployment of secure, user-friendly decentralized applications for business and consumer use.",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562161/download_rgmatt_nw5ouw.jpg",
      icon: Calendar,
      results: "99.99% uptime",
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

            {/* <Link
              href="/solutions"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
            >
              View Solution
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link> */}
          </div>
        </div>
      ))}
    </div>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Kim",
      role: "Supply Chain Director",
      content:
        "Blockchain integration gave us real-time visibility and eliminated manual reconciliation. Our operations are now faster and more secure.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Fintech Product Manager",
      content:
        "The smart contract solutions automated our settlements and reduced costs dramatically. Highly recommended for any enterprise.",
      rating: 5,
    },
    {
      name: "Liam Smith",
      role: "CTO, Logistics Firm",
      content:
        "Their blockchain expertise helped us launch a decentralized app that improved customer trust and data integrity.",
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

function BlockchainBenefits() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-card text-card-foreground text-sm font-medium rounded-full mb-4">
          Why Choose Blockchain
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Your Blockchain Transformation Partner
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          We guide you through every step of your blockchain journey, from strategy to implementation, ensuring measurable results and future-ready solutions.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        <VideoThumbnail />

        <div className="flex-1 space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-card-foreground mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Blockchain Projects</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-card-foreground mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-card-foreground mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Transactions Secured</div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {[
              "Custom Blockchain Strategy",
              "24/7 Technical Support",
              "Proven ROI & Business Value",
              "Enterprise-Grade Security",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Start Your Blockchain Journey
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
              src="https://img.youtube.com/vi/SSo_EIwHSd4/maxresdefault.jpg"
              alt="Blockchain technology overview"
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
            src="https://www.youtube.com/watch?v=SSo_EIwHSd4"
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
          Ready to Transform Your Business with Blockchain?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 text-pretty">
          Join leading organizations leveraging blockchain for transparency, automation, and growth. Schedule a consultation to unlock your blockchain potential.
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
            View More Blockchain Cases
          </Link>
        </div>
      </div>
    </section>
  )
}
