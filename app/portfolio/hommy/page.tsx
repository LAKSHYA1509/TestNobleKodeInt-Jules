import Link from "next/link"

const title = "Best Tiles Company | Hommy – Branded Tiles & Tile Chemicals"
const description =
  "Choose Hommy, the best tiles company for top brands like Somany, Orientbell, and Johnson. Discover quality tiles and tile chemicals with expert, friendly service.."

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
    url: "https://noblekode.com/portfolio/hommy",
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
    canonical: "https://noblekode.com/portfolio/hommy",
  },
}

interface BannerProps {
  img: string
}

import CtaButton from '@/components/CtaPage/Cta';

export default function Hommy() {
  return (
    <main className="overflow-hidden bg-[#030712]">
      <Top /> {/* dark blue */}
      <Banner img="https://res.cloudinary.com/dlrmktbrg/image/upload/v1743580025/Hommy/brandings/home_3_nepzgj.png" /> {/* overlay */}
      <AboutHommy /> {/* light blue */}
      <Banner img="https://res.cloudinary.com/dlrmktbrg/image/upload/v1740488778/Hommy/brandings/home_2_w9h2dg.png" /> {/* overlay */}
      <TransformingEducation /> {/* dark blue */}
      <WhyPartneringSection /> {/* light blue */}
      <OurProcess /> {/* dark blue */}
      <ProjectChallenges /> {/* light blue */}
      <ElearningCaseStudy /> {/* dark blue */}
      <TechStackUsed /> {/* light blue */}
      <div className="bg-blue-50">

      <CtaButton 
        ctaText="Inspired by Hommy's Success? Let's Build Yours!"
        buttonText="Start Your Project"
        />
        </div>
    </main>
  )
}

function Top() {
  return (
    <section className="bg-[#030712] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-foreground font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
         Design • Products • Execution All in One Place

          <span className="text-green-500 block mt-2">Hommy</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Hommy delivers end-to-end interior services, combining innovative design, curated products, and professional execution to bring your dream spaces to life.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
        >
          Consult Our Experts
        </Link>
      </div>
    </section>
  )
}

function Banner({ img }: BannerProps) {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <img
        src={img || "https://res.cloudinary.com/dlrmktbrg/image/upload/v1740488778/Hommy/brandings/home_2_w9h2dg.png"}
        alt="Premium tiles showcase"
        className="object-cover object-center w-full h-full"
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  )
}

function AboutHommy() {
  return (
    <section className="py-20 px-6 bg-blue-50"> {/* was bg-blue-50 */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-blue-900 text-3xl md:text-4xl font-bold mb-6">About Hommy</h2>
            <div className="space-y-4 text-blue-800 leading-relaxed">
              <p>
                Hommy.Design is a premium tile-focused design brand that brings beauty, style, and practicality into
                modern homes. We offer a wide range of high-quality bathroom and flooring tile solutions, carefully
                selected to match different tastes, trends, and interior styles.
              </p>
              <p>
                Whether you're renovating a small bathroom or designing an entire living space, Hommy.Design helps you
                choose the perfect tiles with ease and confidence.
              </p>
              <p>
                What sets us apart is our smart design tools and personalized support. Customers can explore a variety
                of tiles, order free samples, and even visualize how different tiles will look in their space using our
                unique tile visualizer tool.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-100 p-6 rounded-lg border border-blue-200">
              <h3 className="text-blue-700 font-semibold text-lg mb-2">Industry</h3>
              <p className="text-blue-900">Interior Design / Home Improvement</p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg border border-blue-200">
              <h3 className="text-blue-700 font-semibold text-lg mb-3">Services</h3>
              <ul className="text-blue-900 space-y-2">
                <li>• Curated Room Designs</li>
                <li>• Product Bundles</li>
                <li>• Individual Tile Selection</li>
                <li>• Free Samples & Design Consultation</li>
                <li>• 3D Visualization Tool</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyPartneringSection() {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-blue-100 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Trusted by homeowners and professionals for stunning tiles, CP fittings, and expert design services.
            </h2>
            <Link
              href="https://hommy.design/"
              className="inline-flex items-center justify-center bg-blue-700 text-blue-50 font-semibold px-6 py-3 rounded-lg border-2 border-blue-700 hover:bg-blue-800 transition-all duration-300"
            >
              Explore Hommy Design
            </Link>
          </div>

          <div className="flex justify-center">
            <img
              src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/dr-reddy-cta-banner.webp"
              alt="Professional tile installation"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TransformingEducation() {
  return (
    <section className="py-20 px-6 bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Transforming the Tile Shopping Experience with User-Friendly and Feature-Rich Platform
            </h2>
            <img src="https://res.cloudinary.com/dlrmktbrg/image/upload/v1748330561/WhatsApp_Image_2025-05-27_at_11.16.10_AM_a7wipf.jpg" alt="" className="rounded-lg mt-10"/>
          </div>

          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Hommy.Design, we set out to revolutionize how people shop for tiles—not just as building materials,
                but as expressions of personal style. Born from a passion for design and simplicity, our platform makes
                home improvement enjoyable and accessible.
              </p>
              <p>
                Traditionally, selecting tiles meant visiting multiple stores, carrying heavy samples, and struggling to
                visualize the final result. We saw an opportunity to change that with our tech-enabled, customer-first
                approach.
              </p>
            </div>

            <div className="space-y-6 mt-8">
              <h3 className="text-xl font-bold text-foreground">Our Innovation Translates Into:</h3>
              <div className="grid gap-4">
                {[
                  { title: "Curated Room Looks", desc: "Thoughtfully styled tile bundles for complete spaces" },
                  { title: "Free Sample Delivery", desc: "Touch and feel tiles before buying with doorstep delivery" },
                  { title: "Visualize Before You Buy", desc: "Interactive previews and design inspiration tools" },
                  { title: "Smart Product Pairing", desc: "Intelligent matching of floor and wall tiles" },
                  { title: "Simple Online Shopping", desc: "Clean navigation with design-first approach" },
                ].map((item, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-card-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OurProcess() {
  const steps = [
    {
      step: "STEP 01",
      title: "Conceptualization",
      points: ["Gap Analysis", "Project Plan & Roadmap"],
    },
    {
      step: "STEP 02",
      title: "Design",
      points: ["Wireframes", "User Stories & Test Cases"],
    },
    {
      step: "STEP 03",
      title: "Development",
      points: ["Mobile & Web Apps", "Admin Panel"],
    },
    {
      step: "STEP 04",
      title: "Testing",
      points: ["Quality Assurance", "Delivery in Milestones"],
    },
    {
      step: "STEP 05",
      title: "Deployment",
      points: ["App Store & Play Store", "Training & Support"],
    },
  ]

  return (
    <section className="bg-[#030712] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to deployment, we follow a structured approach to deliver exceptional results
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-sm font-semibold text-primary mb-2">{item.step}</p>
              <h3 className="text-lg font-bold text-card-foreground mb-3">{item.title}</h3>
              <hr className="my-3 border-border" />
              <ul className="text-sm text-muted-foreground space-y-1">
                {item.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectChallenges() {
  const challenges = [
    {
      title: "Resource Management",
      description:
        "Balancing limited resources while maintaining quality standards and meeting project deadlines requires strategic planning and efficient allocation.",
      icon: "👥",
    },
    {
      title: "Cross-Platform Compatibility",
      description:
        "Ensuring seamless functionality across different browsers, devices, and screen sizes while maintaining consistent user experience.",
      icon: "📱",
    },
    {
      title: "Evolving Requirements",
      description:
        "Adapting to changing client needs and market demands while maintaining project scope and timeline integrity.",
      icon: "🔄",
    },
    {
      title: "Performance Optimization",
      description:
        "Delivering fast-loading, responsive applications through image optimization, code minification, and efficient caching strategies.",
      icon: "⚡",
    },
    {
      title: "SEO & Accessibility",
      description:
        "Building discoverable and inclusive applications that meet modern web standards and accessibility guidelines.",
      icon: "🎯",
    },
    {
      title: "Security Implementation",
      description:
        "Protecting user data and preventing vulnerabilities through secure coding practices and robust authentication systems.",
      icon: "🔒",
    },
    // {
    //   title: "Deployment & Maintenance",
    //   description:
    //     "Ensuring reliable deployment processes and ongoing maintenance for optimal performance and user satisfaction.",
    //   icon: "🚀",
    // },
  ]

  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Project Challenges</h2>
          <p className="text-blue-800 text-lg max-w-3xl">
            Every project comes with unique challenges. Here's how we tackle the most common ones to deliver exceptional
            results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-100 p-6 rounded-lg border border-blue-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">{item.title}</h3>
              <p className="text-blue-800 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ElearningCaseStudy = () => {
  return (
    <section className="py-20 px-6 bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How Our Collaborative Design Process Helps Bring Your Dream Spaces to Life
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our team at Hommy.Design begins every project with a comprehensive discovery session, working closely
                with homeowners, architects, and interior designers to understand their vision, space requirements, and
                aesthetic goals.
              </p>
              <p>
                We then create detailed design roadmaps and digital mockups using curated tile selections from trusted
                brands like Somany, Johnson, and OrientBell, providing customized suggestions that enhance both beauty
                and durability.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-card-foreground mb-3">Our Services Include:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  High-quality tile recommendations for any space
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Custom layout planning with expert consultation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  3D visual previews to help clients finalize choices
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Integration of CP fittings and accessories
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground">
              Our process is fully collaborative, customer-centric, and driven by design innovation. From small
              makeovers to complete renovations, Hommy.Design brings your vision to life with precision, quality, and
              care.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dlrmktbrg/image/upload/v1748330561/The_Journey_of_your_dream_home_kdystw.png"
              alt="Design process visualization"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const TechStackUsed = () => {
  const techStack = [
    {
      name: "Next.js",
      logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      name: "React",
      logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    {
      name: "Cloudinary",
      logo: "https://cdn.worldvectorlogo.com/logos/cloudinary-1.svg",
    },
  ]

  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Tech Stack Used</h2>
          <p className="text-blue-800 text-lg">
            Powered by modern technologies for optimal performance and scalability
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {techStack.map((item, i) => (
            <div
              key={i}
              className="bg-blue-100 border border-blue-200 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300 group"
            >
              <img
                src={item.logo || "/placeholder.svg"}
                alt={`${item.name} logo`}
                className="h-12 mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-sm font-medium text-blue-900 text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
