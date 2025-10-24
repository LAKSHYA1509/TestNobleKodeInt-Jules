"use client"

import { useEffect, useState } from "react"
import { SiGoogle, SiIkea, SiKfc } from "react-icons/si"
import { FaHotel, FaBan as FaBank, FaHamburger, FaUserTie, FaMicrosoft, FaAmazon, FaGithub, FaDigitalOcean, FaAtlassian, FaAws  } from "react-icons/fa"
import { MdFastfood } from "react-icons/md"
import { GiMoebiusStar } from "react-icons/gi"
import { SiSentry, SiDatadog, SiNvidia, SiPostman    } from "react-icons/si";
import { VscVscode, VscAzure } from "react-icons/vsc";
import { AiFillOpenAI } from "react-icons/ai";

export function PartnerSectionAnimated() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const partners = [
    // Row 1
    "Microsoft",
    "Google",
    "Amazon",
    "Github",
    "DigitalOcean",
    // Row 2
    "Sentry",
    "Atlassian",
    "DataDog",
    "NVIDIA",
    "PostMan",
    // Row 3
    "SUPERSHE",
    "VS Code",
    "OpenAI",
    "AWS",
    "AZURE",
  ]

  const partnerIcons: Record<string, React.ReactNode> = {
    Microsoft: <FaMicrosoft className="inline-block mr-2" size={28} />,
    Google: <SiGoogle className="inline-block mr-2" size={28} />,
    Amazon: <FaAmazon className="inline-block mr-2" size={28} />,
    Github: <FaGithub className="inline-block mr-2" size={28} />,
    DigitalOcean: <FaDigitalOcean className="inline-block mr-2" size={28} />,
    Sentry: <SiSentry className="inline-block mr-2" size={28} />,
    Atlassian: <FaAtlassian  className="inline-block mr-2" size={28} />,
    DataDog: <SiDatadog  className="inline-block mr-2" size={28} />,
    NVIDIA: <SiNvidia  className="inline-block mr-2" size={28} />,
    PostMan: <SiPostman  className="inline-block mr-2" size={28} />,
    SUPERSHE: <FaUserTie className="inline-block mr-2" size={28} />,
    "VS Code": <VscVscode  className="inline-block mr-2" size={28} />,
    OpenAI: <AiFillOpenAI  className="inline-block mr-2" size={28} />,
    AWS: <FaAws className="inline-block mr-2" size={28} />,
    AZURE: <VscAzure className="inline-block mr-2" size={28} />,
  }

  const getLogoStyle = (name: string) => {
    const styles: Record<string, string> = {
      IKEA: "font-bold text-2xl tracking-wider",
      Google: "font-normal text-xl",
      BCG: "font-bold text-lg tracking-wide",
      KFC: "font-bold text-xl tracking-wide",
      "TGI FRIDAYS": "font-bold text-sm tracking-wider",
      moo: "font-light text-2xl lowercase",
      "Krispy Kreme": "font-script text-xl italic",
      Hardees: "font-script text-xl italic",
      "BAJAJ Allianz": "font-normal text-lg",
      "Domino's": "font-bold text-lg",
      SUPERSHE: "font-bold text-lg tracking-wide underline",
      WIMPY: "font-bold text-xl tracking-wider",
      "EMPIRE HOTELS": "font-light text-sm tracking-widest",
      JobGet: "font-normal text-lg",
      "ASIAN BANK": "font-light text-sm tracking-widest",
    }
    return styles[name] || "font-normal text-lg"
  }

  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-6xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our Partner
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group flex items-center justify-center h-20 w-full max-w-[200px] transition-all duration-500 hover:scale-110 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <div
                  className={`text-gray-400 group-hover:text-white transition-colors duration-300 text-center ${getLogoStyle(partner)}`}
                >
                  {partnerIcons[partner] || null}
                  {partner}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle bottom text */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-gray-500 text-lg">Trusted by industry leaders worldwide</p>
        </div>
      </div>
    </section>
  )
}
