"use client"

import { useState } from "react"
import { MainCompo } from "@/app/portfolio/tbond/PortfolioTbondClient"
import Image from "next/image"
import {
  Play,
  ArrowRight,
  ArrowDown,
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
        ctaText="Ready to Revolutionize Learning?"
        buttonText="Start My Education Project"
      />
    </div>
  )
}

function Banner() {
  return (
    <div>
      <MainCompo
        h1={"Education: Transforming Learning"}
        bgImg="https://res.cloudinary.com/dwht6936t/image/upload/v1759562157/3-Ways-AI-and-Machine-Learning-are-Transforming-EdTech_xrjgw6_ainwej.webp"
      />
    </div>
  )
}

function Hero() {
  return (
    <section className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left - Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-4 py-2 bg-card text-card-foreground text-sm font-medium rounded-full">
              AI for Education
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Empowering Students & Educators
              <span className="text-primary block">With Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Discover how AI is personalizing learning, automating administration, and enhancing outcomes in schools, universities, and online platforms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/industry"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              View More Cases
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80"
              alt="AI in education"
              fill
              className="object-cover"
            />
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-secondary rounded-2xl flex flex-col items-center justify-center shadow-lg">
              {/* Add education-related stats here if desired */}
            </div>
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-card rounded-2xl p-4 shadow-lg">
              <div className="text-center">
                {/* Add education-related stats here if desired */}
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
      title: "Personalized Learning",
      before: "One-size-fits-all lessons, disengaged students",
      after: "Adaptive content tailored to each learner’s pace",
      improvement: "30% higher student engagement",
      icon: Users,
    },
    {
      title: "Automated Grading",
      before: "Manual grading, slow feedback",
      after: "Instant AI-powered assessments",
      improvement: "70% faster feedback",
      icon: Zap,
    },
    {
      title: "Smart Administration",
      before: "Paperwork overload, inefficient processes",
      after: "AI-driven scheduling & resource management",
      improvement: "50% time saved for staff",
      icon: Award,
    },
  ]

  return (
    <section className="bg-gradient-to-br from-muted to-card py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            AI Impact in Education
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Real-World AI Transformation in Schools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See how AI is revolutionizing classrooms, improving learning outcomes, and streamlining educational operations.
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
                  <ArrowRight className="h-6 w-6 text-primary hidden md:block" />
                  <ArrowDown className="h-6 w-6 text-primary md:hidden" />
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
    { number: "10K+", label: "Students Impacted", icon: Users },
    { number: "150+", label: "Schools & Colleges", icon: Award },
    { number: "98%", label: "Faster Grading", icon: Calendar },
    { number: "500+", label: "AI Lessons Delivered", icon: CheckCircle },
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
    <section className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-card text-card-foreground text-sm font-medium rounded-full mb-4">
          AI Services for Education
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Transforming Learning with AI
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          From adaptive learning platforms to AI-powered grading and smart campus solutions, we help educators and institutions unlock new possibilities.
        </p>
      </div>

      <ServiceCard />
    </section>
  )
}

function ServiceCard() {
  const cards = [
    {
      name: "Adaptive Learning Platforms",
      text: "Personalized content and assessments for every student, powered by AI.",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562159/Adaptive-Learning_bbcrn8_zakr0r.png",
      icon: Users,
      results: "30% higher engagement",
    },
    {
      name: "AI Grading & Feedback",
      text: "Automate grading and provide instant, actionable feedback to students and teachers.",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562159/1741317033346_wiigdm_cvsqyv.jpg",
      icon: Award,
      results: "98% faster grading",
    },
    {
      name: "Smart Campus Solutions",
      text: "AI-driven scheduling, resource management, and student support for efficient administration.",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562166/jh-18_pylss4_t7f6yj.webp",
      icon: Calendar,
      results: "50% admin time saved",
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
      name: "Dr. Ayesha Khan",
      role: "Principal, Green Valley School",
      content:
        "AI-powered adaptive learning has helped our students achieve better results and stay motivated. The platform is easy for teachers and students alike.",
      rating: 5,
    },
    {
      name: "James Lee",
      role: "EdTech Coordinator",
      content:
        "Automated grading has saved our teachers countless hours and improved feedback quality. Our staff and students love the instant results.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "University Administrator",
      content:
        "Smart campus solutions streamlined our scheduling and resource management. We’re now more efficient and responsive to student needs.",
      rating: 5,
    },
  ]

  return (
    <section className="bg-muted py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-background text-foreground text-sm font-medium rounded-full mb-4">
            Educator Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">What Educators Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary fill-yellow-400" />
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
    <section className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-card text-card-foreground text-sm font-medium rounded-full mb-4">
          Why AI in Education
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Your Partner in Educational Innovation
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          We help schools and universities harness AI for personalized learning, efficient administration, and measurable student success.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        <VideoThumbnail />

        <div className="flex-1 space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-card-foreground mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Institutions Served</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-card-foreground mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Faster Grading</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl">
              <div className="text-3xl font-bold text-card-foreground mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Students Impacted</div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {["Personalized Learning Paths", "Instant Feedback & Analytics", "Seamless Integration with LMS", "Data Privacy & Security"].map(
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
            Start Your AI Education Journey
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
              src="https://res.cloudinary.com/dwht6936t/image/upload/v1759562164/HndV87XpkWg-HD_irb566_xsx4zk.jpg"
              alt="AI in education overview"
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
            src="https://youtu.be/HndV87XpkWg?si=pnHm1JW7L9wdjT6j"
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
    <section className="bg-primary py-10">
      <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Ready to Transform Education with AI?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 text-pretty">
          Join leading schools and universities leveraging artificial intelligence for personalized learning, efficient administration, and student success. Schedule a consultation to unlock your AI potential.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-semibold rounded-lg hover:bg-background/90 transition-colors"
          >
            Schedule Education Consultation
            <Calendar className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/industry"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/20 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
          >
            View More Education Cases
          </Link>
        </div>
      </div>
    </section>
  )
}
