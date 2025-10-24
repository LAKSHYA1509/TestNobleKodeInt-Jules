import Image from "next/image";
import CtaButton from "../CtaPage/Cta";
import BannerImg from "./BannerImg";

interface ServiceProps {
    serviceDes?: string;
    busiName?: string;
    work?: string;
    img?: string;
    alt?: string;
  
}

interface solu  {
  solution?: {
    title: string;
    description: string;
    icon: any;
    color: string;
  }[];
  }

interface stats {
stat? : { 
number: string;
icon: any;
label: string;
}[]
}

interface SEOSectionProps { 
h2?: string;
h21?: string;
img? : string
  bottom?:{ title: string }[]
}


export default function Service({serviceDes , busiName, work, img, alt}: ServiceProps)  {
  return <>
    <section className="relative text-white w-full h-[85vh] max-sm:h-[360px] max-md:h-[460px] border-none 
      flex items-center justify-center bg-gradient-to-r from-blue-900/90 to-cyan-900/90 
      dark:from-gray-900/95 dark:to-blue-950/95">
      {/* Background Image with Parallax Effect */}
      <Image
        src={img || "/default-image.jpg"}
        alt={alt || "Background Image"}
        fill
        className="object-cover text-white brightness-[0.4] dark:brightness-[0.3] transform 
          hover:scale-105 transition-transform duration-700"
        priority
      />

      {/* Content with Enhanced Typography and Animation */}
      <div className="relative z-10 px-4 text-center animate-fadeIn">
        <h1 className="service-banner text-5xl md:text-7xl font-bold 
          leading-[1.2] mb-8 max-sm:text-[2.5rem] max-sm:!leading-[1.3] 
          text-white bg-clip-text text-transparent bg-gradient-to-r 
          from-white to-cyan-200 dark:from-blue-100 dark:to-cyan-200"> 
          {serviceDes} <br/>{busiName} <br/> {work}
        </h1>
  
      </div>
    </section>
  </>
}

export function SolutionsGrid({solution}: solu) {
  return (
    <section className="py-24 max-sm:py-16 bg-gradient-to-b from-gray-50 to-white 
      dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-600 
          to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">
          Key Business Solutions
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          We provide innovative digital marketing solutions to help your business grow
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Array.isArray(solution) && solution.map((solution, index) => {
            const { icon: Icon, title, description, color } = solution;
            return (
              <div key={index} 
                className="group text-center p-8 rounded-2xl bg-white dark:bg-gray-800 
                border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl 
                transition-all duration-300 hover:-translate-y-2 hover:border-cyan-100 
                dark:hover:border-cyan-800">
                <div className={`w-20 h-20 mx-auto flex items-center justify-center rounded-2xl 
                  bg-gradient-to-br ${color} mb-6 transform group-hover:rotate-6 transition-transform`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StatsSection({stat}: stats) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 
      dark:from-blue-800 dark:to-cyan-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-4">
        {stat?.map((st, index) => {
          const { icon, number, label } = st;
          return (
            <div key={index} className="flex flex-col items-center transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl 
                bg-white/10 backdrop-blur-sm text-white text-4xl border border-white/20">
                {icon}
              </div>
              <h3 className="mt-6 text-4xl font-bold text-white">{number}</h3>
              <p className="mt-3 text-lg text-white/90 font-medium">{label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function SEOSection({bottom, h2, h21, img}: SEOSectionProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 
      py-24 max-sm:py-16 bg-gradient-to-b from-white to-gray-50 
      dark:from-gray-800 dark:to-gray-900">
      {/* Left Image with Animation */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 transform hover:scale-105 transition-all duration-500">
        <Image 
          src={img || "/images/seo.png"}
          alt="SEO Services Illustration"
          width={600}
          height={400}
          className="rounded-2xl shadow-2xl hover:shadow-cyan-200/50 dark:hover:shadow-cyan-900/50"
        />
      </div>

      {/* Right Content with Enhanced Typography */}
      <div className="w-full md:w-1/2 md:pl-16">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 
          to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent 
          mb-8 leading-tight">
          {h2} <br /> 
          <span>{h21}</span>
        </h2>
        <div className="space-y-6">
          {bottom?.map((ti, index) => {
            const {title} = ti;
            return <p key={index} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {title}
            </p>
          })}
        </div>
      </div>
    </section>
  );
}

