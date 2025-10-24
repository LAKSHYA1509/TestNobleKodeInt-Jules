"use client"

import React, { useState, useEffect } from "react"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ArrowRight, Code, Smartphone, Brain, Shield, Globe, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface MegaMenuProps {
  trigger: string
  children: React.ReactNode
  className?: string
}

export function MegaMenu({ trigger, children, className }: MegaMenuProps) {


  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const closeTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setIsOpen(true)
    if (!hasLoaded) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setHasLoaded(true)
      }, 100)
    }
  }

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current)
    }
  }, [])

  return (
    <div className={cn("relative", className)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="flex items-center gap-1 px-4 py-2 text-white hover:text-blue-200 transition-colors duration-300 relative group">
        {trigger}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </button>

      {/* Mega Menu Dropdown */}
      <div
  className={cn(
    "fixed top-16 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-225 ease-out rounded-2xl shadow-2xl w-[850px]",
    isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none",
    // "w-100 max-w-7xl mx-auto"
  )}
>
{/* 
  <div
  className={cn(
    "fixed top-16 left-1/2 transform -translate-x-1/2 w-screen z-50 transition-all duration-500 ease-out",
    isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none",
  )}
></div> */}
        <div className="flex justify-center px-4 pt-11 ">
          <div className=" bg-white rounded-2xl shadow-2xl border border-gray-400 w-auto max-w-5xl transform transition-all duration-300 ease-out ">
            <div className="relative">
              <div className="absolute inset-0 bg-gradzient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl"></div>
              <div className="relative px-16 py-8 " >{isLoading ? <MegaMenuSkeleton /> : children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MegaMenuSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">
      {/* Left Section Skeleton */}
      <div className="col-span-4">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 p-6 h-full min-h-[280px] animate-pulse">
          <div className="relative z-10 space-y-2">
            <Skeleton className="h-6 w-3/4 bg-white/40" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-white/30" />
              <Skeleton className="h-4 w-5/6 bg-white/30" />
              <Skeleton className="h-4 w-4/5 bg-white/30" />
            </div>
            <Skeleton className="h-10 w-32 bg-white/40 rounded-lg mt-6" />
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Middle Section Skeleton */}
      <div className="col-span-5">
        <Skeleton className="h-6 w-48 mb-6" />
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="p-4 rounded-xl border border-gray-200 animate-pulse">
              <div className="flex items-start gap-3">
                <Skeleton className="w-10 h-10 rounded-lg bg-blue-100" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section Skeleton */}
      <div className="col-span-3">
        <Skeleton className="h-6 w-36 mb-6" />
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 animate-pulse">
            <Skeleton className="h-5 w-32 mb-2" />
            <div className="space-y-2 mb-4">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-4/5" />
            </div>
            <Skeleton className="h-9 w-24 rounded-lg bg-blue-100" />
          </div>

          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 animate-pulse">
            <Skeleton className="h-5 w-28 mb-2" />
            <div className="space-y-2 mb-4">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
            </div>
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ServicesMegaMenu() {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      description: "Custom web applications and platforms",
      href: "/services/web-development",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Apps",
      description: "iOS and Android native applications",
      href: "/services/app-development",
    },

    {
      icon: <Globe className="h-6 w-6" />,
      title: "Graphic Designing",
      description: "Creative design solutions for your brand",
      href: "/services/graphic-designing",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "Grow your business with digital marketing",
      href: "/services/digital-marketing",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Product Prototyping",
      description: "Prototype your ideas into reality",
      href: "/services/product-prototyping",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Project Management",
      description: "Efficient management for your projects",
      href: "/services/project-management",
    }

  ]

  const serviceLeftdiv = [{
    description: "Hommy"
  }

  ]
  return (
    <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">



      {/* Middle Section - Services Grid */}

      <div className="col-span-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Core Services</h3>
        <div className="grid grid-cols-2 gap-4">
          {Array.isArray(services) && services.map((service, index) => {
            const { icon, href, title, description } = service

            return <Link
              key={index}
              href={href}
              className="group p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors duration-200">
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200 mb-1">
                    {title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
                </div>
              </div>
            </Link>
          }
          )}
        </div>
      </div>
      {/* Right Section - CTA */}
      <div className="col-span-3">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Get Started Today</h3>
        <div className="space-y-4">



          <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Our Core Services</h4>
            <p className="text-sm text-gray-600 mb-4">Explore recent projects and real success stories we’ve delivered.</p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              Explore <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function IndustriesMegaMenu() {
  const industries = [
    { name: "Healthcare", icon: "🏥", href: "/case-study/health-care" },
    { name: "BlockChain", icon: "🔗", href: "/case-study/blockchain" },
    { name: "E-commerce", icon: "🛍️", href: "/case-study/e-commerce" },
    { name: "AI", icon: "🤖", href: "/case-study/ai" },
    { name: "Education", icon: "🏫", href: "/case-study/education" },
    { name: "Teaching", icon: "👩‍🏫", href: "/case-study/teaching" }
  ]
  return (
    <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">
      {/* Left Section - Industries */}
      <div className="col-span-7">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Industries We Transform</h3>
        <div className="grid grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <Link
              key={index}
              href={industry.href}
              className="group rounded-xl h-30 w-30 p-4  border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
            >
              <div className="text-center ">
                <span className="text-3xl mb-3 block">{industry.icon}</span>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 text-sm mb-2">
                  {industry.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
        {/* <h3 className="text-xl font-semibold text-gray-900 mb-6">Get Started Today</h3> */}
        <div className="p-4 mt-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl h-40 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">See the Industries we Transform</h4>
          <p className="text-sm text-gray-600 mb-4">Explore recent projects and real success stories we’ve delivered. How we can help your industry thrive and achieve to go higher.</p>
          <Link
            href="/industry"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            Explore <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Right Section - Featured Case Study */}
      <div className="col-span-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-5">Success Stories</h3>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200 h-[28rem] w-auto mb-4">
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dajphu5rf/image/upload/v1759144087/8_ktksn2_h6kfvf.jpg"
              alt="Case Study"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 text-lg">In World of Manufacturing</h3>
          <p className="text-sm text-gray-600 mb-4">
            How we helped a leading manufacturing company optimize their production line, resulting in 30%
            increased efficiency and reduced operational costs. Tbond is a Chemical industry that makes manufacturing solutions.
          </p>
          <Link
            href="/portfolio/tbond"
            className="inline-flex mt-4 items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Read Case Study <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

// export function AboutMegaMenu() {
//   return (
//     <div className="w-fit max-w-4xl mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* About Section */}
//         <div className="md:col-span-2 bg-gradient-to-br from-white to-gray-50 rounded-xl p-6">
//           <h3 className="text-xl font-semibold mb-3 text-black">About Noblekode</h3>
//           <p className="text-sm leading-relaxed text-gray-700">
//             We believe in change driven by technology and innovation. Our mission is to transform businesses through
//             cutting-edge software solutions that make a real difference. With a dynamic team of individuals trained in
//             the latest technologies, we are committed to delivering exceptional results for our clients.
//           </p>
//         </div>

//         {/* Leadership Section */}
//         <div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Leadership</h3>

//           {/* Leader 1 */}
//           <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-3">
//             <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
//               <img src="https://res.cloudinary.com/dlrmktbrg/image/upload/v1743681050/TBond/leadership/divansh_dcobu8.jpg" alt="Divyansh Gupta" className="w-12 h-12 rounded-full" />
//             </div>
//             <div>
//               <p className="font-semibold text-gray-900">Divyansh Gupta</p>
//               <p className="text-sm text-gray-500">CEO & Founder</p>
//             </div>
//           </div>

//           {/* Leader 2 */}
//           <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
//             <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
//               <img src="https://res.cloudinary.com/dlrmktbrg/image/upload/v1740484996/chayan_fqfu3i.png" alt="Chayan Gupta" className="w-12 h-12 rounded-full" />
//             </div>
//             <div>
//               <p className="font-semibold text-gray-900">Chayan Gupta</p>
//               <p className="text-sm text-gray-500">HR & Operation Manager</p>
//             </div>
//           </div>

//           {/* Team Link */}
//           <Link
//             href="/about"
//             className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 mt-4"
//           >
//             Meet the Team <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

export function PortfolioMegaMenu() {
  // Example portfolio items (replace with your real data)
  const portfolioItems = [
    {
      logo: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562672/hommy_kh4qyd_l3g3hg.png",
      title: "Hommy",
      description: "A leading digital platform to offer engaging shopping experience to users",
      href: "/portfolio/hommy",
    },
    {
      logo: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562674/tbond_bclmtm_zuam7e.png",
      title: "TBond",
      description: "India's leading pioneer in Tile adhesive and construction.",
      href: "/portfolio/tbond",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">
      {/* Left Section */}
      <div className="col-span-4 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-semibold mb-4 text-black">Enabling <span className="text-black-600">Innovation</span></h3>
          <p className="mb-6 text-black">To steadfast success for top globally leading brands</p>
          {/* <Link
            href="/portfolio"
            className="inline-flex text-black items-center gap-2 text-lg font-semibold border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            View all <ArrowRight className="h-5 w-5" />
          </Link> */}
        </div>
        <div className="mt-8">
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="https://img.freepik.com/premium-vector/auditing-tax-process-accounting_108855-2.jpg"
              alt="Client process"
              width={320}
              height={120}
              className="object-cover w-full h-24"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center px-4">
              <span className="text-white text-lg font-medium">Get your Website Free Audit Done!! <br /> <button className="font-bold text-green-600 text-2xl"><Link href="/contact">Click NOW</Link></button></span>
            </div>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="col-span-8 grid grid-cols-2 gap-6 h-60">
        {portfolioItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="flex flex-col gap-2 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition w-fit h-50"
          >
            <div className="flex items-center gap-2 mb-2">
              <br />
              <Image src={item.logo} alt={item.title} width={120} height={120} className="mb-2 object-contain" />
              <br />
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
