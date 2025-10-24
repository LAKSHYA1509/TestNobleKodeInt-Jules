"use client"
import React, { use } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import { TestimonialsSection } from '../homeContent';
interface GraphicProps {
    grapic?: {
        id?: any
        title?: string
        image?: string
        description?: string

    }[]
}

export default function Graphic({ grapic = [] }: GraphicProps) {
    return (
        <div>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 5000 }}
                loop
                className="mySwiper"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                }}
            >
                {grapic.map((post) => {
                    const { id, title, description, image } = post;
                    return (
                        <SwiperSlide key={id}>
                            <>
                                <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden p-4 md:p-6">
                                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                        <img
                                            src={image || "/placeholder.svg"}
                                            alt={title}
                                            className="w-full h-48 md:h-80 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2  md:pl-10">
                                        <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4">{title}</h2>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{description}</p>
                                    </div>
                                </div>
                            </>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
    )
}
