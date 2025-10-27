"use client";
import { useRef } from 'react';
import Image from 'next/image';
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BannerBeams } from '@/components/Banner/Bann';
import { FaChrome, FaJenkins, FaStackOverflow } from 'react-icons/fa';
import {  SiSaucelabs, SiApache } from 'react-icons/si';

import { PenTool, LayoutDashboard } from "lucide-react";

import { FaSketch } from "react-icons/fa";

import { SiInvision } from 'react-icons/si';
import { SiAfterpay } from "react-icons/si";


interface Accolade {
  year: string;
  title: string;
  image: string;
  description: string;
}
import { TestmonySlider } from '@/components/testimony';

import CtaButton from '@/components/CtaPage/Cta';

export default function GraphicDesignPage() {
  return (
    <>
      <main>
        <BannerBeams headingh2='Graphic Designing' span='Service' />
        <ThreeDCardDemo />
        <MeetOurDesigner />
        <TechnologyPlatforms/>
        <TestimonialsSection />
      </main>
    </>
  );
}

export function ThreeDCardDemo() {

  const items = [{

    h2: "Logo Designing",
    description: 'Hey there! Let’s craft a logo that’s uniquely yours—something that captures your brand’s vibe and sticks in people’s minds. We’ll work together to create a custom design that feels just right, whether it’s bold and modern or warm and classic.',
    img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562219/images_vam8ce_p3acnd.jpg",
    x: 20,
    z: 10
  }
    , {

    h2: "Brochure Creation",
    description: 'Need a brochure that tells your story? We’ll design something eye-catching and easy to read, perfect for sharing with your clients. From layout to colors, we’ll make sure it feels welcoming and reflects what makes your business special.',
    img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562225/brochure-design-services_zcv94z_jenkrr.jpg",
    x: -20,
    z: 10
  }
    , {

    h2: "Poster Making",
    description: 'Want to grab attention? We’ll create a poster that pops—vibrant, fun, and tailored to your event or message. Think of it as your loudest cheerleader, designed to draw eyes and spark interest wherever it goes.',
    img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562218/Flyer-Maker-Poster-Maker_gnr6jv_ajype3.jpg",
    x: -20,
    z: 10
  },
  ]

  return (
    <div className="mt-5" >
      <h2 className='text-center text-4xl sm:text-4xl font-semibold' >Services </h2>  

      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 lg:px-14 max-w-[84rem] mx-auto w-full">


        {Array.isArray(items) && items.map((item) => {
          const { h2, description, x, z, img } = item
          return <>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="100"
                  rotateX={x}
                  rotateZ={z}
                  className="w-full mt-4"
                >
                  <img
                    src={img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
                >
                  {h2}

                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {description}
                </CardItem>

              </CardBody>

            </CardContainer>
          </>
        })}
        {/* 2 */}



      </div>
    </div>
  );
}

export function MeetOurDesigner() {
  return <React.Fragment>
    <div className='bg-blue-900 py-20' >
      <h3 className='italic text-3xl text-center text-white mr-4 ml-4'>
        Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs
      </h3>

    </div>


  </React.Fragment >
}

const Accolades = () => {
  const accoladesData: Accolade[] = [
     {
      year: "Arushi Sharma",
      title: "Delhi, India",
      description: "The team was fantastic to work with. They really took the time to understand our brand and created a logo that perfectly captures our essence. Highly recommend!",
      image: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562218/happy-brunette-woman-confident-with-natural-hair-feeling-satisfied_482257-87906_hl1eis_mnptu2.avif",
    },
    {
      year: "Joe Glick",
      title: "San Francisco, USA",
      image: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562219/portrait-blonde-young-man-outside-64153394_qqz5mk_vqhoba.webp",
      description: "I needed a brochure for my new product launch, and they delivered beyond my expectations. The design was clean, modern, and exactly what I envisioned. Great job!"
    },
    {
      year: "Priya Nair",
      title: "Bangalore, India",
      image: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562223/at-yahoo_rtvzsz_g6qotw.jpg",
      description: "The services are top-notch. The cards they created for me are sleek and professional, and I've received numerous compliments on them. Very satisfied with the results!"
    },
    {
      year: "Lucas Müller",
      title: "Berlin, Germany",
      image: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562218/ebe9f0f81c330050b41e1bbbb86fe9d7_u3cjpz_yty6w5.jpg",
      description: "Their expertise in Android and chatbot development is unmatched. They delivered a product that not only met but exceeded our expectations."
    },
    // {
    //   year: "Ava Chen",
    //   title: "Singapore",
    //   image: "/clutch_2025_global.png",
    //   description: "The poster design was vibrant and creative. Communication was smooth and delivery was on time. Highly recommended!"
    // },
    // {
    //   year: "Kabir Patel",
    //   title: "Ahmedabad, India",
    //   image: "/clutch_2025_global.png",
    //   description: "Loved the social media graphics! They understood our requirements and delivered exactly what we needed."
    // },
    // {
    //   year: "Sofia Rossi",
    //   title: "Milan, Italy",
    //   image: "/clutch_2025_global.png",
    //   description: "Professional and creative team. The banner design helped us stand out at our event. Thank you!"
    // },
  ];

  const accoladeContainerRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the previous accolade
  const goToPrevious = () => {
    if (accoladeContainerRef.current) {
      accoladeContainerRef.current.scrollBy({
        left: -accoladeContainerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll to the next accolade
  const goToNext = () => {
    if (accoladeContainerRef.current) {
      accoladeContainerRef.current.scrollBy({
        left: accoladeContainerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold ">
          See What Our Clients Say About Us
        </h1>
      </div>
      <div className="relative">
        {/* Accolades container */}
        <div
          ref={accoladeContainerRef}
          className="flex gap-6 overflow-x-auto py-6 scroll-smooth"
        >
          {accoladesData.map((accolade, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center w-64 flex-shrink-0"
            >
              <div className="flex justify-center">
                <Image
                  src={accolade.image}
                  alt={accolade.title}
                  width={120}
                  height={120}
                  className="rounded-full object-cover h-[120px] w-[120px] mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-white">{accolade.year}</h3>
              <p className="text-sm text-gray-400">{accolade.title}</p>
              <p className="text-gray-300 mt-2 text-sm">{accolade.description}</p>
            </div>
          ))}
        </div>
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full cursor-pointer"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full cursor-pointer"
        >
          →
        </button>
      </div>
    </div>
  );
};


const TechnologyPlatforms = () => {

interface Tool {
  name: string;
  icon: JSX.Element;
}

const tools: Tool[] = [
  {
    name: "Illustrator",
    icon: <PenTool className="text-4xl text-orange-500" />,
  },
  {
    name: "Adobe XD",
    icon: <LayoutDashboard className="text-4xl text-pink-600" />,
  },
  {
    name: "After Effects",
    icon: <SiAfterpay className="text-4xl text-purple-600" />,
  },
  {
    name: "Sketch",
    icon: <FaSketch className="text-4xl text-green-500" />,
  },
  {
    name: "Invision",
    icon: <SiInvision className="text-4xl text-indigo-600" />,
  },
];



  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Design Development Platforms, Technologies & Languages
        </h2>
        <p className="text-xl text-gray-500 mb-8">
          Create exceptional customer experiences & drive meaningful insights guided by the best design development practices and technology trends in the digital world.
        </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12">
  {tools.map((tool, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center text-center space-y-2"
    >
      <div className="text-5xl">{tool.icon}</div>
      <span className="text-lg font-medium text-gray-800">{tool.name}</span>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 default:bg-gray-50  text-center px-4 sm:px-6">
      <h2 className="text-2xl md:text-3xl font-bold  mb-8 ">Testimonials</h2>
      <TestmonySlider />
    </section>
  );
}