
import Link from "next/link"
import { TbHealthRecognition } from "react-icons/tb";
import {FaMoneyBillTrendUp} from "react-icons/fa6";
import {FaShoppingCart, FaShippingFast } from "react-icons/fa";
import {MdCastForEducation, MdRealEstateAgent } from "react-icons/md"
import CtaButton from "@/components/CtaPage/Cta";
import { Webpage, Breadcrumbs } from "@/components/schemacode";

const title = "Industries We Serve | Healthcare, Fintech, E-commerce & More | Noble Kode";
const description = "Discover how Noble Kode transforms industries with custom digital solutions. From healthcare and fintech to e-commerce and logistics - we deliver innovative technology solutions.";
const canonical = "https://noblekode.com/industry";

export const metadata = {
  title: title,
  description: description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
    },
    other: {
      "msvalidate.01": "2FA774516BED6957AC2007ADFDA920BA",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonical,
    siteName: "Noble Kode",
    title: title,
    description: description,
    images: [
      {
        url: "https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Noble Kode - Industries We Serve",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg"],
    creator: "@noblekode",
  },
  alternates: {
    canonical: canonical,
  },
};


const industries = [
  {
    name: "Healthcare",
    href: "/case-study/health-care",
    description: "Transforming patient care with innovative digital solutions and telemedicine platforms by NobelKode",
    icon: <TbHealthRecognition className="text-4xl sm:text-5xl text-cyan-400" />,
    color: "text-cyan-400",
    bgColor: "bg-cyan-900/60",
  },
  {
    name: "Fintech",
    href: "/case-study/fintech",
    description: "Revolutionizing financial services through secure blockchain and payment technologies",
    icon: <FaMoneyBillTrendUp className="text-4xl sm:text-5xl text-red-400" />,
    color: "text-red-400",
    bgColor: "bg-red-900/60",
  },
  {
    name: "E-commerce",
    href: "/case-study/e-commerce",
    description: "Building seamless online shopping experiences with AI-powered recommendations",
    icon: <FaShoppingCart className="text-4xl sm:text-5xl text-red-400" />,
    color: "text-blue-400",
    bgColor: "bg-red-900/60",
  },
  {
    name: "Education",
    href: "/case-study/education",
    description: "Empowering learning through interactive digital platforms and virtual classrooms",
    icon: <MdCastForEducation className="text-4xl sm:text-5xl text-green-400" />,
    color: "text-green-400",
    bgColor: "bg-green-900/60",
  },
  {
    name: "Real Estate",
    href: "/case-study/real-estate",
    description: "Modernizing property management with virtual tours and smart analytics",
    icon: <MdRealEstateAgent className="text-4xl sm:text-5xl text-blue-400" />,
    color: "text-blue-400",
    bgColor: "bg-blue-900/60",
  },
  {
    name: "Logistics",
    href: "/case-study/logistics",
    description: "Optimizing supply chain operations with IoT tracking and route optimization",
    icon: <FaShippingFast className="text-4xl sm:text-5xl text-orange-400" />,
    color: "text-orange-400",
    bgColor: "bg-orange-900/60",
  },
]

export default function IndustryHomePage() {
  return (
    <main className="min-h-screen bg-[#070B1B]">
      {/* Schema Code */}
      <Webpage pageName="Industries" pageUrl={canonical} />
      <Breadcrumbs
        breadcrumbs={[
          {
            pageName: "Home",
            pageUrl: "https://noblekode.com/"
          },
          {
            pageName: "Industries",
            pageUrl: canonical
          }
        ]} />

      {/* Hero Section */}
      <section className="px-4 py-16 sm:py-24 bg-[#030712] backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Industries we transformed</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white leading-tight">
                
            <span className="text-cyan-400 block">Our Work Speaks for Itself</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Success stories that demonstrate our expertise to deliver technology-led business breakthroughs across
            fintech, global brands, and Fortune 500s.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/services"
              className="px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent text-cyan-400 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-400/25 transform hover:-translate-y-1"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="px-4 py-16 bg-slate-900/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From healthcare to logistics, we deliver tailored solutions that drive growth and innovation across
              diverse sectors.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link key={industry.name} href={industry.href} className="group block">
                <div className={`relative overflow-hidden ${industry.bgColor} bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 border border-white/10 hover:border-cyan-400/30 transform hover:-translate-y-3 hover:scale-105 h-full`}>
                  {/* Gradient overlay */}

                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 shadow-lg">
                      {industry.icon} <span className={industry.color}></span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-500 drop-shadow-lg">
                      {industry.name}
                    </h3>
                    <p className="text-slate-300/90 mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                      {industry.description}
                    </p>

                    {/* Enhanced CTA styling with glassmorphism */}
                    <div className="inline-flex items-center text-cyan-300 font-semibold group-hover:text-cyan-200 transition-colors duration-500 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-white/10">
                      View Case Studies
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* We Own Responsibilities Section for Industry */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dwht6936t/image/upload/v1759562170/Prioritize-Customer-Service_xtbed0_vy8cvg.png"
                alt="Industry Responsibility"
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
                Customer Satisfaction <span className="text-primary">Sole Priority</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Across every industry we serve, our commitment goes beyond delivering solutions—we take ownership of your business challenges. By leveraging deep sector expertise, robust processes, and a passion for innovation, we ensure every project is executed with accountability, transparency, and measurable impact. Your success is our responsibility.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Industries Transformed</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Understand Clarity Section for Industry */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform -rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dwht6936t/image/upload/v1759562164/hero__31__fhk3hy_dkcqvr.jpg"
                alt="Clarity in Industry"
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
                We Understand <span className="text-primary">Your Needs</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              We believe clarity is the foundation of every successful industry partnership. Our transparent processes, open communication, and clear objectives ensure that every solution is aligned with your business vision and delivers measurable results—no matter the sector.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Transparency</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-2">360°</div>
                <div className="text-sm text-muted-foreground">Business Alignment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaButton 
        ctaText="Transform Your Industry With Custom Digital Solutions!"
        buttonText="Talk to Our Experts"
      />
    </main>
  )
}
