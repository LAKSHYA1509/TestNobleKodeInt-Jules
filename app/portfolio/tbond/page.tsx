import Image from "next/image"
import { FaArrowUp, FaCheckCircle, FaCog, FaUsers, FaRocket } from "react-icons/fa"
import Link from "next/link"
import { SiNodedotjs, SiMongodb, SiNextdotjs } from "react-icons/si"

import { ImageSec } from "./PortfolioTbondClient"
import { MainCompo } from "./PortfolioTbondClient"
import CtaButton from '@/components/CtaPage/Cta';

const title = "Top Tile Adhesive Brands in India | Tbond – Quality & Trust"
const description =
  "Tbond is one of the leading tile adhesive brands in India. Premium adhesives, epoxy, grout, and tools designed for durability and expert performance."

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
    url: "https://noblekode.com/portfolio/tbond",
    siteName: "Noble Kode",
    title: title,
    description: description,
    images: [
      {
        url: "https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Noble Kode ",
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
    canonical: "https://noblekode.com/portfolio/tbond",
  },
}

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <MainCompo
        bgImg="https://res.cloudinary.com/dajphu5rf/image/upload/v1759207737/check_x8swye.png"
        h1="Tbond"
      />
      <AboutComo />
      <ImageSec />
      <ProjectChallenges />
      <TechnologiesUsed />
      <KfcResults />
      <ResultsStats />
      <CtaButton 
        ctaText="Want Results Like TBond? Let's Collaborate!"
        buttonText="Start Your Project"
      />
    </main>
  )
}


function AboutComo() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
        <div className="w-full lg:w-2/3">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FaCheckCircle className="w-4 h-4" />
              Construction Chemicals Leader
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance leading-tight">
              About <span className="text-primary">Tbond</span>
            </h1>
          </div>
          <p className="mb-8 leading-relaxed text-lg text-muted-foreground">
            Tbond is a trusted name in the world of tile chemicals. We specialize in making high-quality products that
            help tiles stick better, last longer, and look perfect. Whether you're building a new home or working on a
            big construction project, Tbond provides the right solutions for every tiling need.
          </p>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">We manufacture:</h3>
            <div className="grid gap-4">
              {[
                {
                  title: "Tile Adhesive",
                  description: "Strong bonding glue that keeps tiles firmly in place on walls and floors.",
                  icon: <FaCog className="w-5 h-5 text-primary" />,
                },
                {
                  title: "Epoxy",
                  description:
                    "A durable and waterproof solution for tile joints, giving a smooth and long-lasting finish.",
                  icon: <FaCheckCircle className="w-5 h-5 text-primary" />,
                },
                {
                  title: "Grout",
                  description: "Fills the gaps between tiles and adds strength and style to your tile work.",
                  icon: <FaRocket className="w-5 h-5 text-primary" />,
                },
                {
                  title: "Grout Admix",
                  description:
                    "A special liquid mixed with grout to improve its bonding, flexibility, and water resistance.",
                  icon: <FaUsers className="w-5 h-5 text-primary" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
              <p className="text-foreground leading-relaxed">
                At <span className="font-semibold text-primary">Tbond</span>, we focus on quality, durability, and
                customer satisfaction. Our products are designed to make tiling easier and stronger, whether for homes,
                offices, or commercial spaces.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">       
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Industry</h4>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Construction Chemicals / Building Materials
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Core Focus</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Tile Adhesive Manufacturing, Grout and Epoxy Solutions and Tile Cleaning and Installation Tools
                </p>
              </div>
            </div>
          </div>
            <Image src="https://res.cloudinary.com/dajphu5rf/image/upload/v1759144087/8_ktksn2_h6kfvf.jpg" alt="Tbond" width={300} height={300} className="w-full h-[30rem] mt-16 object-cover rounded-md mb-4" />
        </div>
      </div>
    </section>
  )
}

function ProjectChallenges() {
  const challenges = [
    {
      id: 1,
      title: "Finding the Right Experts",
      description:
        "We needed people with the right skills in tile chemical manufacturing. Our goal was to hire professionals who understood adhesives, grouts, and epoxy products and could also meet industry standards with precision and care.",
      icon: <FaUsers className="w-8 h-8 text-primary" />,
    },
    {
      id: 2,
      title: "Speeding Up Production",
      description:
        "To stay ahead of competitors, we had to reduce the time it took to launch new products. We worked closely with our R&D and factory teams to improve processes and get quality products to market faster.",
      icon: <FaRocket className="w-8 h-8 text-primary" />,
    },
    {
      id: 3,
      title: "Custom Solutions for Every Customer",
      description:
        "Contractors, homeowners, and tiling professionals all need different things. We focused on creating personalized product lines (like waterproof grout or quick-dry adhesive) and gave clear guides to make product use easier for everyone.",
      icon: <FaCog className="w-8 h-8 text-primary" />,
    },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-16 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaCheckCircle className="w-4 h-4" />
            Challenges & Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Project <span className="text-primary">Challenges</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every great solution starts with understanding the challenges. Here's how we tackled the key obstacles in
            transforming Tbond's operations.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-12">
          {challenges.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row lg:items-start gap-6 p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="text-6xl lg:text-8xl font-bold text-primary/20 select-none">{id}</div>
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">{icon}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechnologiesUsed() {
  const technologies = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
  ]

  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaCog className="w-4 h-4" />
            Technology Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Built with <span className="text-primary">Modern Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The proposed solution for Tbond was developed using{" "}
            <span className="font-semibold text-primary">cutting-edge and open-source technologies</span> to ensure
            scalability, performance, and reliability.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}
              <div className="text-4xl font-semibold text-foreground">{tech.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function KfcResults() {
  const ProductRange = [
    {
      title: "🧱 Multiple Product Ranges",
      description:
        "We developed a strong line of tile chemical products to meet different customer needs. From Tile Adhesive for strong bonding to Epoxy for smooth finishes, and Grout and Grout Admix for filling and sealing — Tbond now offers complete solutions for any tiling project.",
    },
    {
      title: "📦 Easy Packaging & Application",
      description:
        "We helped Tbond improve their packaging to make products easier to use and store. Clear labeling, step-by-step instructions, and size variety made it simple for professionals and DIY users alike.",
    },
    {
      title: "📊 Real-Time Inventory & Dealer Access",
      description:
        "We implemented a system where dealers and distributors can check real-time stock, place bulk orders, and track deliveries easily. This improved supply chain speed and efficiency.",
    },
    {
      title: "📈 Customer Feedback & Quality Check",
      description:
        "Tbond's new feedback process helped them understand customer needs better. We added easy ways to collect reviews, get product suggestions, and ensure only high-quality batches reach the market.",
    },
  ]

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaRocket className="w-4 h-4" />
            Project Results
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground mb-4 text-balance">
            Helping Tbond Build Stronger <span className="text-primary">Tile Solutions</span>
          </h2>
          <h3 className="text-2xl font-semibold text-muted-foreground mb-6">
            Smart Development & Continuous Improvement
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            We managed the entire project using the BOOT model (Build, Operate, Optimize, Transfer). Once our team fully
            understood Tbond's vision and the technical needs of their tile chemical products, we built a solid base for
            their digital presence and product management tools.
          </p>
        </div>
        <div className="mb-16">
          <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Key improvements we brought to Tbond's digital transformation:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Streamlined product listing and categorization for adhesives, epoxy, grout, and admix",
                "Real-time inventory and order management integration",
                "A clean, easy-to-use website for customers and dealers",
                "Mobile-friendly design for both B2B and B2C users",
                "Secure admin panel to manage product details and track sales performance",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {ProductRange.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl"></div>
              <Image
                src="https://res.cloudinary.com/dajphu5rf/image/upload/v1759143968/3_1_wz0ofs_yio7cb.jpg"
                alt="Tbond Construction Solutions"
                width={600}
                height={600}
                className="relative rounded-xl shadow-xl w-full h-130 max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResultsStats() {
  const stats = [
    {
      value: "4.5",
      label: "Average Rating on the Play and App Store",
      highlight: false,
    },
    {
      value: "22%",
      label: "Conversion Rate",
      highlight: true,
    },
    {
      value: "50%",
      label: "Total Orders Coming Through App",
      highlight: true,
    },
    {
      value: "60%",
      label: "Repeat Purchases Across Channels",
      highlight: true,
    },
    {
      value: "30,000+",
      label: "Orders Fulfilled Through App Per Day",
      highlight: false,
    },
    {
      value: "100%",
      label: "Revenue Upliftment During Peak Holiday Seasons",
      highlight: false,
    },
  ]

  return (
    <section className="relative bg-background py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* <h2 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-muted/10 select-none">Results</h2> */}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaCheckCircle className="w-4 h-4" />
            Impact & Results
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            The <span className="text-primary">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach delivered measurable improvements across all key performance indicators.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((item, i) => (
            <div
              key={i}
              className="group p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-4xl sm:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {item.value}
                  </span>
                  {item.highlight && (
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FaArrowUp className="text-primary text-lg" />
                    </div>
                  )}
                </div>
                <div className="h-px bg-border mb-4"></div>
                <p className="text-muted-foreground leading-tight font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
