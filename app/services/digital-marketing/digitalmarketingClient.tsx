"use client";
import * as React from "react";
import { useState } from "react";
import { BannerBeams } from "@/components/Banner/Bann";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaGoogle, FaMailchimp, FaWordpressSimple } from "react-icons/fa";
import { SiSemrush, SiGoogleads, SiMeta } from "react-icons/si";
import { FaChartLine, FaUserTie, FaClipboardCheck, FaSearch, FaChartBar, FaTshirt, FaTools, FaTooth, FaGraduationCap } from "react-icons/fa";
import { TestmonySlider } from "@/components/testimony";

import CtaButton from '@/components/CtaPage/Cta';

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <BannerBeams headingh2={"Digital Marketing"} span={"Service"} />
      <div className="bg-white dark:bg-gray-900 py-16">
        <ThreeDCardDemo />
      </div>
      <div className="bg-gray-900 dark:bg-gray-950 py-16">
        <WhyChooseUs />
      </div>
      <div className="bg-white dark:bg-gray-900 py-16">
        <HowWorkSection />
      </div>
      <div className="bg-gray-900 dark:bg-gray-950 py-16">
        <CaseStudiesSection />
      </div>
      <div className="bg-white dark:bg-gray-900 py-16">
        <ToolsTechnologiesSection />
      </div>
      <div className="bg-gray-900 dark:bg-gray-950 py-16">
        <IndustriesSection />
      </div>
      <div className="bg-white dark:bg-gray-900 py-16">
        <TestimonialsSection />
      
      </div>
    </div>
  );
}
export function ThreeDCardDemo() {
  const threeDItems = [
    {
      id: 1,
      text: "SEO Optimization",
      text2: "Improve your website’s ranking and visibility on search engines with our proven SEO strategies.",
      cardBtn: "Learn More →",
      signBtn: "Get Started",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      text: "Social Media Marketing",
      text2: "Grow your brand and engage your audience across all major social platforms with creative campaigns.",
      cardBtn: "See Plans →",
      signBtn: "Join Now",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562217/Earn-these-qualifications-For-a-Digital-Marketing-Job6_jtckep_crqrxl.webp"
    },
    {
      id: 3,
      text: "Pay-Per-Click Advertising",
      text2: "Drive instant traffic and conversions with targeted PPC campaigns managed by certified experts.",
      cardBtn: "Start Campaign →",
      signBtn: "Contact Us",
      img: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      text: "Content Marketing",
      text2: "Attract and retain customers by creating and distributing valuable, relevant, and consistency.",
      cardBtn: "Explore Content →",
      signBtn: "Request Demo",
      img: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562223/1_zAJBNPH4PfaAvTTfteFOeg_xuiup4_wkws1n.png"
    },]

  return (
    <div>
      <h3 className='text-3xl text-center my-5 font-semibold'>Our Digital Marketing Services</h3>
      <div className="flex flex-wrap gap-x-10 my-5 ml-4 mr-4 justify-center">
        {
          threeDItems.map((items) => (
            <CardContainer className="inter-var" key={items.id}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {items.text}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {items.text2}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={items.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="#"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    {items.cardBtn}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                  <a href="/contact" target="_blank" rel="noopener noreferrer">
                    {items.signBtn}
                  </a>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))
        }
      </div>
    </div>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: <FaChartLine className="text-blue-600 text-3xl mb-3" />,
      title: "Proven Results",
      description:
        "We have a track record of delivering measurable growth for our clients across various industries.",
    },
    {
      icon: <FaUserTie className="text-green-600 text-3xl mb-3" />,
      title: "Certified Experts",
      description:
        "Our team consists of certified professionals in SEO, PPC, social media, and more.",
    },
    {
      icon: <FaClipboardCheck className="text-purple-600 text-3xl mb-3" />,
      title: "Transparent Reporting",
      description:
        "We provide clear, detailed reports so you always know how your campaigns are performing.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto my-20 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-white dark:text-white">
        Why Choose Our Digital Marketing Agency?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow group"
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="font-semibold text-xl mb-2 mt-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowWorkSection() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Process</h2>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
        Our structured approach ensures your business receives tailored, results-driven digital marketing solutions at every stage.
      </p>
      <ol className="relative border-l ml-5 border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <span className="text-blue-600 font-bold">1</span>
          </span>
          <h3 className="font-semibold text-lg">Discovery & Strategic Planning</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We conduct a comprehensive analysis of your business objectives, target audience, and competitive landscape to develop a bespoke digital marketing strategy.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <span className="text-blue-600 font-bold">2</span>
          </span>
          <h3 className="font-semibold text-lg">Implementation</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Our certified specialists execute the strategy using industry-leading tools and best practices, ensuring seamless campaign deployment across all channels.
          </p>
        </li>
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <span className="text-blue-600 font-bold">3</span>
          </span>
          <h3 className="font-semibold text-lg">Optimization & Transparent Reporting</h3>
          <p className="text-gray-600 dark:text-gray-300">
            We continuously monitor performance, optimize campaigns for maximum ROI, and provide transparent, data-driven reports to keep you informed every step of the way.
          </p>
        </li>
      </ol>
    </section>
  );
}

function CaseStudiesSection() {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const caseStudies = [
    {
      icon: <FaTshirt className="text-blue-600 text-2xl" />,
      title: "E-commerce Brand: 200% Revenue Growth",
      client: "Trendify, a mid-sized online fashion retailer",
      challenge: "Stagnant online sales and low organic visibility.",
      solution:
        "We implemented a comprehensive SEO overhaul, launched targeted Google Ads campaigns, and optimized product listings.",
      results:
        "Achieved a 200% increase in online revenue and a 120% boost in organic traffic within 6 months. The brand now ranks on the first page for 15+ high-intent keywords.",
      color: "blue",
      expandable: true,
    },
    {
      icon: <FaTools className="text-green-600 text-2xl" />,
      title: "Local Service Provider: 3x Lead Generation",
      client: "FreshFlow Plumbing, Delhi NCR",
      challenge: "Low visibility in local search and minimal inbound inquiries.",
      solution:
        "Enhanced Google My Business profile, executed a local SEO strategy, and ran hyper-localized ad campaigns.",
      results:
        "Tripled monthly leads and secured the #1 spot in Google Maps for key service queries. Customer calls increased by 250% in just 4 months.",
      color: "green",
      expandable: false,
    },
    {
      icon: <FaTooth className="text-purple-600 text-2xl" />,
      title: "Healthcare Clinic: 5x Website Engagement",
      client: "Harmony Dental Care, Mumbai",
      challenge: "Low patient bookings and poor online reputation.",
      solution:
        "Developed a content-rich website, managed online reviews, and launched educational content marketing.",
      results:
        "5x increase in website engagement and a 60% rise in appointment requests within 3 months.",
      color: "purple",
      expandable: false,
    },
    {
      icon: <FaGraduationCap className="text-pink-600 text-2xl" />,
      title: "EdTech Startup: Brand Awareness Surge",
      client: "LearnLeap, Online Learning Platform",
      challenge: "New market entrant with limited brand recognition.",
      solution:
        "Executed a multi-channel digital campaign—social media, influencer partnerships, and PPC.",
      results:
        "Doubled user sign-ups and grew social media followers by 400% in the first quarter post-launch.",
      color: "pink",
      expandable: false,
    },
  ];


  return (
    <section className="max-w-5xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Success Stories</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {caseStudies.map((item, index) => {
          const isExpanded = expandedIndexes.includes(index);
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-semibold">Client:</span> {item.client}
              </p>

              {isExpanded && (
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Challenge:</span>{" "}
                  {item.challenge}
                  <br />
                  <span className="font-semibold">Solution:</span>{" "}
                  {item.solution}
                  <br />
                  <span className="font-semibold">Results:</span>{" "}
                  <span className={`text-${item.color}-600 font-bold`}>
                    {item.results}
                  </span>
                </p>
              )}

              <button
                onClick={() => toggleExpand(index)}
                className="text-sm text-blue-500 mt-2"
              >
                {isExpanded ? "less..." : "See More..."}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ToolsTechnologiesSection() {
  const tools = [
    {
      name: "Google Analytics",
      icon: <FaGoogle className="text-[#4285F4]" size={28} />,
      description: "Tracks and reports website traffic for data-driven decisions."
    },
    {
      name: "Google Ads",
      icon: <SiGoogleads className="text-[#34A853]" size={28} />,
      description: "Online advertising platform for paid search and display campaigns."
    },
    {
      name: "SEMrush",
      icon: <SiSemrush className="text-[#FF6D00]" size={28} />,
      description: "Comprehensive SEO tool for keyword research and competitor analysis."
    },
    {
      name: "Meta Ads",
      icon: <SiMeta className="text-blue-400" size={28}/>,
      description:"Comprehensive Tool for Meta Ads for a very wide User Base under network."
    },
    {
      name: "Ahrefs",
      icon: (
        <span className="bg-[#1A73E8] text-white font-bold text-lg rounded-full w-7 h-7 flex items-center justify-center">
          A
        </span>
      ),
      description: "SEO toolset for backlink analysis and site audits."
    },
    {
      name: "Moz",
      icon: (
        <span className="bg-[#2D8CFF] text-white font-bold text-lg rounded-full w-7 h-7 flex items-center justify-center">
          M
        </span>
      ),
      description: "SEO software for site audits, rank tracking, and keyword research."
    },
    {
      name: "Mailchimp",
      icon: <FaMailchimp className="text-[#FFE01B]" size={28} />,
      description: "Email marketing platform for creating and managing campaigns."
    },
    {
      name: "WordPress",
      icon: <FaWordpressSimple className="text-[#21759B]" size={28} />,
      description: "Popular CMS for building and managing websites and blogs."
    },
  ];

  return (
    <section className="max-w-7xl mx-auto my-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Our Tools & Technologies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition-all p-6 flex flex-col items-center h-full"
          >
            <div className="mb-4 flex items-center justify-center">
              <span className="bg-gray-100 dark:bg-gray-700 rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow">
                {tool.icon}
              </span>
            </div>
            <div className="text-center">
              <div className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">{tool.name}</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{tool.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function IndustriesSection() {
  const industries = [
    {
      name: "E-commerce",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21a2 2 0 104 0" />
        </svg>
      ),
      description: "Boosting online retail growth with tailored digital strategies."
    },
    {
      name: "Healthcare",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M12 8v8m-4-4h8M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "Enhancing patient engagement and trust for healthcare providers."
    },
    {
      name: "Education",
      icon: (
        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6" />
        </svg>
      ),
      description: "Empowering institutions to reach and inspire more learners."
    },
    {
      name: "Real Estate",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M3 9.75L12 4l9 5.75M4.5 10.5v7.25A2.25 2.25 0 006.75 20h10.5A2.25 2.25 0 0020 17.75V10.5" />
        </svg>
      ),
      description: "Driving qualified leads for realtors and property managers."
    },
    {
      name: "Startups",
      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" />
        </svg>
      ),
      description: "Accelerating growth and visibility for innovative startups."
    },
    {
      name: "Local Businesses",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      description: "Helping local brands connect with their communities."
    },
  ];

  return (
    <section className="max-w-7xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-white dark:text-white">
        Industries We Serve
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <div
            key={industry.name}
            className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <div className="mb-3">{industry.icon}</div>
            <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">{industry.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// function TestimonialsSection() {
//   const testimonials = [
//     {
//       text: "Partnering with this digital marketing team was a game-changer for our business. Their SEO expertise propelled our website from obscurity to the first page of Google, resulting in a 3x increase in organic traffic. Their strategic insights, transparent communication, and unwavering professionalism set them apart in the industry.",
//       img: "https://randomuser.me/api/portraits/women/68.jpg",
//       alt: "Priya S.",
//       name: "Priya S.",
//       title: "Founder, ShopEase E-commerce",
//       borderColor: "border-blue-500",
//     },
//     {
//       text: "Their Google Ads specialists delivered outstanding results, driving a significant boost in qualified leads for our firm. The team’s data-driven approach, detailed reporting, and commitment to our success have made them a trusted partner in our growth journey.",
//       img: "https://randomuser.me/api/portraits/men/32.jpg",
//       alt: "Rahul M.",
//       name: "Rahul M.",
//       title: "Managing Director, ProServe Solutions",
//       borderColor: "border-green-500",
//     },
//     {
//       text: "The content marketing strategies implemented by this team have elevated our brand’s online presence. We’ve seen a remarkable increase in engagement and customer loyalty. Their creativity and attention to detail are unmatched.",
//       img: "https://randomuser.me/api/portraits/women/44.jpg",
//       alt: "Anita D.",
//       name: "Anita D.",
//       title: "Marketing Head, EduPrime Academy",
//       borderColor: "border-pink-500",
//     },
//     {
//       text: "From local SEO to social media campaigns, their holistic approach has helped our clinic attract more patients and build a strong reputation in the community. We appreciate their responsiveness and expertise.",
//       img: "https://randomuser.me/api/portraits/men/85.jpg",
//       alt: "Dr. Sameer K.",
//       name: "Dr. Sameer K.",
//       title: "Director, CarePlus Clinic",
//       borderColor: "border-yellow-500",
//     },
//   ];

//   const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

//   const toggleText = (index: number) => {
//     setExpandedIndexes((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index]
//     );
//   };

//   const getDisplayText = (text: string, isExpanded: boolean) => {
//     const words = text.split(" ");
//     if (isExpanded || words.length <= 20) {
//       return text;
//     }
//     return words.slice(0, 20).join(" ") + "...";
//   };

//   return (
//     <div className="flex gap-3">
//       <section className="max-w-4xl mx-auto my-20 px-4">
//         <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">
//           What Our Clients Say
//         </h2>
//         <div className="grid md:grid-cols-2 gap-10">
//           {testimonials.map((testimonial, idx) => {
//             const isExpanded = expandedIndexes.includes(idx);
//             return (
//               <div
//                 key={idx}
//                 className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
//               >
//                 <p className="italic text-lg text-gray-700 dark:text-gray-300 mb-4">
//                   {getDisplayText(testimonial.text, isExpanded)}
//                 </p>
//                 {testimonial.text.split(" ").length > 10 && (
//                   <button
//                     onClick={() => toggleText(idx)}
//                     className="text-sm text-left text-blue-600 underline"
//                   >
//                     {isExpanded ? "See less" : "See more"}
//                   </button>
//                 )}
//                 <div className="flex items-center gap-4 mt-6">
//                   <img
//                     src={testimonial.img}
//                     alt={testimonial.alt}
//                     className={`w-12 h-12 rounded-full border-2 ${testimonial.borderColor}`}
//                   />
//                   <div>
//                     <span className="block font-semibold text-gray-900 dark:text-white">
//                       {testimonial.name}
//                     </span>
//                     <span className="block text-sm text-gray-500 dark:text-gray-400">
//                       {testimonial.title}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );


function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 default:bg-gray-50  text-center px-4 sm:px-6">
      <h2 className="text-2xl md:text-3xl font-bold  mb-8 ">Testimonials</h2>
      <TestmonySlider />
    </section>
  );
}