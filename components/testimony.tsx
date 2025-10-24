"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"
import { Autoplay } from "swiper/modules"

const Testimonies = [
  {
    name: "Priyanka M Mehra",
    Testimoney:
      "Putting together a website is a task... they truly have the best team to design and guide you through the process.",
    designation: "Founder, PS Design",
  },
  {
    name: "Anushka Gupta",
    Testimoney:
      "NobleKode is an exceptional partner for any business to enhance its online presence. The expertise of team sets them apart.",
    designation: "Founder, PS Design",
  },
  {
    name: "Priyanka M Mehra",
    Testimoney:
      "Putting together a website is a task... they truly have the best team to design and guide you through the process.",
    designation: "Founder, PS Design",
  },
  {
    name: "Priyanka M Mehra",
    Testimoney:
      "Putting together a website is a task... they truly have the best team to design and guide you through the process.",
    designation: "Founder, PS Design",
  },
  {
    name: "Priyanka M Mehra",
    Testimoney:
      "Putting together a website is a task... they truly have the best team to design and guide you through the process.",
    designation: "Founder, PS Design",
  },
  {
    name: "Priyanka M Mehra",
    Testimoney:
      "Putting together a website is a task... they truly have the best team to design and guide you through the process.",
    designation: "Founder, PS Design",
  },
  {
    name: "Priyanka M Mehra",
    Testimoney:
      "Putting together a website is a task... they truly have the best team to design and guide you through the process.",
    designation: "Founder, PS Design",
  },
]

export function TestmonySlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        grabCursor={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        className="w-full"
      >
        {Testimonies.map(({ name, Testimoney, designation }, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-gray-200 dark:bg-gray-700 p-6 rounded-xl shadow-md h-full">
              <p className="text-gray-700 dark:text-gray-300 mb-4">{Testimoney}</p>
              <p className="font-bold text-gray-900 dark:text-gray-100">{name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
