"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import CldImage from "@/components/CldImage"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


interface ImgSrcType {
  id?:number,
  alt?: string
  src?:string 
}

interface InfinitySliderProps {
  images: ImgSrcType[]
  classs: string
  srcMap?: []
}

export default function InfinitySlider({ classs, images }: InfinitySliderProps) {
 
  return (
    <div className={`w-full relative mx-auto ${classs}`}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2000 }}
        loop
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <CldImage
              src={image.src || ''}
              alt={image.alt || ''}
              width={1920}
              height={408}
              className=" object-fit h-full w-full"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
