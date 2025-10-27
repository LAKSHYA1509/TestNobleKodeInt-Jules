"use client"

import Image from "next/image"
import { title } from "process"

interface MainCompoProps {
  bgImg: string
  h1: string
}

export function MainCompo({ bgImg, h1 }: MainCompoProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={bgImg || "https://res.cloudinary.com/dlrmktbrg/image/upload/v1743666563/TBond/banners/4_hkm41n.jpg"} alt="Construction background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            Portfolio Case Study
          </div>    
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance">{h1}</h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover the impact of 
            Noble Kode in major Industries
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export function ImageSec() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-20 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Visual Showcase
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Tbond in <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how our tile adhesive solutions transform construction projects across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              src: "https://res.cloudinary.com/dajphu5rf/image/upload/v1759143916/Stepping_into_JIET_Hospital_feels_like_walking_into_a_Ghibli_world_where_healing_is_gentle_ca_uwxwe6_pdzorv.webp",
              alt: "Professional Installation",
              title: "TBond in Hospitals",
              description: "Healthcare facility constructed with premium T-Bond materials, ensuring durability and excellence in every aspect.",
            },
            {
              src: "https://res.cloudinary.com/dajphu5rf/image/upload/v1759144076/If_our_school_existed_in_a_Ghibli_universe_Soft_skies_quiet_corners_and_stories_waiting_to_unf_v4njvb_kfdohf.jpg",
              alt: "Residential Projects",
              title: "TBond in Schools",
              description: "Educational institution built with premium T-Bond materials, providing a safe environment for students.",
            },
            {
              src: "https://res.cloudinary.com/dajphu5rf/image/upload/v1759144083/Construction_ghibli_art_civilengineeringsimple_Thankyou_Hayao_Miyazaki_ghibli_studioghibli_coyvhu_qkz5qy.jpg",
              alt: "Commercial Spaces",
              title: "TBond in Construction",
              description: "Partner with T-Bond for premium construction materials, expert technical support, and comprehensive solutions.",
            },
          ].map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {image.title}
                </h3>
                <p className="text-muted-foreground mt-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
