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

export default function EcommerceIndustry() {
  return (
    <div className="bg-background">
      <Banner />
      <Hero />
      <TransformationShowcase />
      <StatsSection />
      <OurServices />
      <TestimonialsSection />
      <EcommerceBenefits />
      <CtaButton 
        ctaText="Want E-commerce Success Like This?"
        buttonText="Start My E-commerce Project"
      />
    </div>
  )
}

function Banner() {
  return (
    <div>
      <MainCompo
        h1={"E-commerce Industry Transformation"}
        bgImg="https://res.cloudinary.com/dwht6936t/image/upload/v1759562158/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae_zrbjdn_kddgtt.jpg"
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
              E-commerce Transformation Solutions
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Revolutionizing Online Retail
              <span className="text-primary block">With Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Discover how our e-commerce solutions are driving seamless shopping experiences, operational efficiency, and business growth for online retailers worldwide.
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
        <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://res.cloudinary.com/dwht6936t/image/upload/v1759562182/The_Impact_of_Digital_Transformation_on_the_Retail_Industry_osfcvv.jpg"
              alt="E-commerce transformation"
              fill
              className="object-cover"
            />
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-secondary rounded-2xl flex flex-col items-center justify-center shadow-lg">
              {/* Add e-commerce-related stats here if desired */}
            </div>
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-card rounded-2xl p-4 shadow-lg">
              <div className="text-center">
                {/* Add e-commerce-related stats here if desired */}
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
      title: "Personalized Shopping Experience",
      before: "Generic product recommendations",
      after: "AI-driven personalization and targeted offers",
      improvement: "30% increase in conversion rate",
      icon: Users,
    },
    {
      title: "Order Fulfillment",
      before: "Manual processing, delayed shipments",
      after: "Automated order management and real-time tracking",
      improvement: "50% faster delivery",
      icon: Zap,
    },
    {
      title: "Customer Support",
      before: "Slow response, limited channels",
      after: "24/7 omnichannel support with chatbots",
      improvement: "90% customer satisfaction",
      icon: Award,
    },
  ]

  return (
    <section className="bg-gradient-to-br from-muted to-card py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            E-commerce Impact
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Real-World E-commerce Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See how technology is revolutionizing online retail, delivering convenience, automation, and growth for e-commerce businesses.
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
    { number: "15+", label: "Years E-commerce Experience", icon: Award },
    { number: "500+", label: "Online Stores Launched", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Calendar },
    { number: "1M+", label: "Orders Processed", icon: CheckCircle },
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
          Our E-commerce Solutions
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          End-to-End E-commerce Services
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          From custom online store development to seamless payment integration, we deliver secure, scalable, and innovative solutions for your e-commerce business.
        </p>
      </div>

      <ServiceCard />
    </section>
  )
}

function ServiceCard() {
  const cards = [
    {
      name: "Custom Store Development",
      text: "Build unique, high-converting online stores tailored to your brand and customers.",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562161/custom-shopify-development_jsikwm.jpg",
      icon: Users,
      results: "2x sales growth",
    },
    {
      name: "Payment Gateway Integration",
      text: "Seamless and secure payment solutions for a frictionless checkout experience.",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562169/payment-gateway_pboi6q_ze2i4u.jpg",
      icon: Award,
      results: "99.9% payment success",
    },
    {
      name: "E-commerce Automation",
      text: "Automate inventory, order management, and customer engagement to scale your business.",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562162/eCommerce_djyqis_ia30ez.jpg",
      icon: Calendar,
      results: "50% less manual work",
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
      name: "Sarah Lee",
      role: "E-commerce Manager",
      content:
        "Our online store's sales doubled after the redesign and automation. The team delivered a seamless experience for our customers.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Retail Business Owner",
      content:
        "Payment integration was smooth and secure. We saw a significant drop in abandoned carts and an increase in completed orders.",
      rating: 5,
    },
    {
      name: "Maria Gomez",
      role: "Operations Lead",
      content:
        "Automating our order and inventory management saved us hours every week and improved our customer satisfaction.",
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

function EcommerceBenefits() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-card text-card-foreground text-sm font-medium rounded-full mb-4">
          Why Choose Us
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Your E-commerce Growth Partner
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          We guide you through every step of your e-commerce journey, from strategy to implementation, ensuring measurable results and future-ready solutions.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        <VideoThumbnail />

        <div className="flex-1 space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-card-foreground mb-2">200+</div>
              <div className="text-sm text-muted-foreground">E-commerce Projects</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-card-foreground mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-card-foreground mb-2">5M+</div>
              <div className="text-sm text-muted-foreground">Products Sold</div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {[
              "Custom E-commerce Strategy",
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
            Start Your E-commerce Journey
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
              src="https://res.cloudinary.com/dwht6936t/image/upload/v1759562170/maxresdefault_t5s0ex_j85t4o.jpg"
              alt="E-commerce technology overview"
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
            src="https://youtu.be/tqqg1Bv5Ikg?si=5P92cpwz88nnzMTP"
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
          Ready to Transform Your E-commerce Business?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 text-pretty">
          Join leading online retailers leveraging technology for seamless shopping, automation, and growth. Schedule a consultation to unlock your e-commerce potential.
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
            View More E-commerce Cases
          </Link>
        </div>
      </div>
    </section>
  )
}
