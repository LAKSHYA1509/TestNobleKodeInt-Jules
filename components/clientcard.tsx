"use client"
import CldImage from "./CldImage"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

const images = [
  "https://res.cloudinary.com/dwht6936t/image/upload/v1759562673/mountalia_unr5pt_icqzvm.png",
  "https://res.cloudinary.com/dwht6936t/image/upload/v1759562670/city_bglm7l_lcqmg8.png",
  "https://res.cloudinary.com/dwht6936t/image/upload/v1759562672/hommy_kh4qyd_l3g3hg.png",
  "https://res.cloudinary.com/dwht6936t/image/upload/v1759562674/tbond_bclmtm_zuam7e.png",
  "https://res.cloudinary.com/dwht6936t/image/upload/v1759562671/hablo-logo-final-logo_kuk9nq_qr1ftr.png",
]

interface ClientLogoCardProps {
  logoSrc: string
  altText: string
  link?: string
}

export default function ClientLogoCard({ logoSrc, altText, link }: ClientLogoCardProps) {
  const content = (
    <div className="w-full h-28 p-3 bg-white shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center rounded-lg hover:border-2 hover:border-gray-200">
      <CldImage
        src={logoSrc}
        alt={altText}
        width={120}
        height={60}
        className="w-auto h-auto max-w-full max-h-full object-contain"
      />
    </div>
  )

  return link ? (
    <a href={link} target="" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  )
}

export function ImageSlider() {
  return (
    <div className="w-full overflow-hidden py-4 flex justify-center items-center">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full max-w-6xl"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center border border-gray-200 rounded-sm">
            <ClientLogoCard logoSrc={src} altText={`Client ${index + 1}`} link={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
