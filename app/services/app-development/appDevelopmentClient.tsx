"use client"
import React, { useState } from "react";
import { FaBuilding, FaPizzaSlice, FaGoogle, FaApple, FaAmazon, FaMobileAlt, FaRocket, FaShieldAlt } from "react-icons/fa";
import { ChevronLeft, ChevronRight, ChevronDown, Link } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BannerBeams } from "@/components/Banner/Bann";

<BannerBeams headingh2='Graphic Designing' span='Service' />

const caseStudies = [
  {
    company: "Ility",
    description:
      "Learn how we developed a white-label SaaS platform for Ility that unlocks new growth opportunities for the real estate sector.",
    results: [
      { label: "higher occupancy", value: "40%" },
      { label: "increase in landlord ROI", value: "20%" },
    ],
    image: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562223/download_dh3xrt_uxhtxw.png",
    buttonText: "Read Case Study",
  },
  {
    company: "IKEA",
    description:
      "We streamlined supply chain workflows and improved customer satisfaction for IKEA across regions.",
    results: [
      { label: "delivery accuracy", value: "98%" },
      { label: "reduction in returns", value: "25%" },
    ],
    image: "https://res.cloudinary.com/dwht6936t/image/upload/v1761303500/news7391_mztwjo.jpg",
    buttonText: "Read Case Study",
  },
];

const brandIcons = [
  { icon: <FaBuilding className="text-4xl sm:text-5xl text-white" />, name: "KPMG" },
  { icon: <FaPizzaSlice className="text-4xl sm:text-5xl text-white" />, name: "Domino's" },
  { icon: <FaGoogle className="text-4xl sm:text-5xl text-white" />, name: "Google" },
  { icon: <FaApple className="text-4xl sm:text-5xl text-white" />, name: "BCG" },
  { icon: <FaAmazon className="text-4xl sm:text-5xl text-white" />, name: "Americana" },
];

const industries = [
  {
    icon: "\u{1F4B3}",
    title: "FinTech",
    content: "We create custom financial tools and solutions for modern FinTech businesses.",
  },
  {
    icon: "\u{1F3E6}",
    title: "Banking",
    content: "Our banking software solutions help modernize core systems and improve customer experience.",
  },
  {
    icon: "\u{1F6E1}\uFE0F",
    title: "Insurance",
    content: "We develop secure, scalable applications for insurance companies to streamline claims and operations.",
  },
  {
    icon: "\u{1F4B8}",
    title: "Lending",
    content: "Our lending platforms are optimized for speed, compliance, and customer satisfaction.",
  },
  {
    icon: "\u{1F4B0}",
    title: "Payment",
    content: "Secure and reliable payment processing applications tailored for any business.",
  },
  {
    icon: "\u{26A1}\uFE0F",
    title: "Energy",
    content: "Smart solutions for energy companies to manage operations, reporting, and analytics.",
  },
];

const cardsCompo = [
  {
    title: "Mobile App Development",
    description: "Build high-performance, cross-platform mobile applications tailored to your business needs.",
    icon: <FaMobileAlt className="text-3xl text-blue-500" />,
  },
  {
    title: "Fast Deployment",
    description: "Accelerate your time-to-market with our agile development process and rapid prototyping.",
    icon: <FaRocket className="text-3xl text-green-500" />,
  },
  {
    title: "Secure Solutions",
    description: "Ensure your app and user data are protected with industry-leading security practices.",
    icon: <FaShieldAlt className="text-3xl text-purple-500" />,
  },
];

export default function AppDevelopmentClient() {
  return (
    <>
      <BannerBeams headingh2= "App Development" span="Services" />
      <IndustrySlider />
      <ThreeDCardDemo />
      <StatsWithCTA />
      <CredibilityFactors />
      <GlowingEffectDemo />
      <CaseStudyCarousel />
      {/* <SoftwareCostEstimator h2="Estimated Custom Software Development Cost" /> */}
    </>
  );
}

function CaseStudyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = caseStudies[activeIndex];

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-center gap-4 mb-4">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-gray-200 transition"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1 max-w-6xl mx-auto rounded-2xl overflow-hidden bg-neutral-900 flex flex-col md:flex-row relative">
          <div className="md:w-1/2 p-6 sm:p-8 md:p-12 space-y-6 relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">{active.company}</h2>
            <p className="text-gray-300 text-sm sm:text-base h-16 sm:h-20">{active.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4">
              {active.results.map((res, idx) => (
                <div key={idx}>
                  <p className="text-xl sm:text-2xl font-bold">{res.value}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{res.label}</p>
                </div>
              ))}
            </div>
            <button className="mt-6 border border-white rounded-lg px-4 py-2 text-sm sm:text-base hover:bg-white hover:text-black transition">
              {active.buttonText}
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              src={active.image}
              alt={active.company}
              width={500}
              height={500}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-gray-200 transition"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="mt-6 sm:mt-8 flex justify-center gap-4 sm:gap-6 flex-wrap">
        {caseStudies.map((cs, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`text-sm sm:text-base font-medium transition border-b-2 px-2 py-1 ${
              activeIndex === i ? "text-white border-white" : "text-gray-400 border-transparent hover:text-white"
            }`}
          >
            {cs.company}
          </button>
        ))}
      </div>
    </section>
  );
}

function IndustrySlider() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-black text-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="lg:w-1/2 mb-8 lg:mb-0 lg:ml-36 mx-auto space-y-6 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight max-w-[34rem] mx-auto lg:mx-0">
            Proven Capabilities to Build<br />Diverse Industry-Based Software</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-[34rem] mx-auto lg:mx-0 text-center lg:text-justify">
            As an industry leader in software application development services, our dedicated team works
            around the clock to build custom technology solutions tailored to your industry and business
            needs. We focus on delivering high-quality, scalable, and secure applications that drive
            efficiency and innovation. Our expertise spans various industries, ensuring that we can meet
            the unique challenges and requirements of your sector.
          </p>
        </div>

      <div className="lg:w-1/2 space-y-4 max-w-[34rem] max-h-[20rem] sm:max-h-[25rem] overflow-y-auto">
        {industries.map((item, index) => (
          <div key={index} className="bg-[#111] border border-gray-700 rounded-md overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 sm:p-5 text-left hover:bg-[#1a1a1a]"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl">{item.icon}</span>
                <span className="text-base sm:text-lg font-semibold">{item.title}</span>
              </div>
              <ChevronDown
                className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 px-4 sm:px-5 pb-5 text-gray-300 text-sm sm:text-base"
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-2 lg:gap-3 px-4 sm:px-2 lg:px-8">
      {cardsCompo.map((card, idx) => (
        <CardContainer className="inter-var" key={idx}>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[24rem] lg:w-[26rem] h-auto rounded-xl p-4 sm:p-6 border">
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.icon}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm sm:text-base max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.title}
            </CardItem>
            <CardItem translateZ="50" className="w-full mt-4 text-sm sm:text-base">
              {card.description}
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

function StatsWithCTA() {
  const stats = [
    { value: "9+", label: "Years in Custom Software Development" },
    { value: "3000+", label: "Software Projects Delivered" },
    { value: "1600+", label: "Certified Technology Professionals" },
    { value: "98%", label: "Client Retention Rate" },
  ];

  return (
    <section className="bg-[#1a1a1a] text-white py-12 px-4 sm:px-6 lg:px-8 rounded-xl max-w-7xl mx-auto text-center mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 mb-8">
        {stats.map((item, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-3xl sm:text-4xl font-bold">{item.value}</h3>
            <hr className="border-t border-gray-600 w-3/4 mx-auto" />
            <p className="text-sm sm:text-base text-gray-300 leading-snug">{item.label}</p>
          </div>
        ))}
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition duration-200">
        <a href="/contact">
          Schedule Consultation Call
        </a>
      </button>
    </section>
  );
}

const CredibilityFactors = () => {
  const credibilityData = [
    {
      id: "001",
      title: "Quality Product",
      content:
        "As the best custom software development company in USA, we first build an MVP to test the efficiency of your product. We ensure the implementation of rigorous testing techniques, obtain continuous feedback to meet user requirements and deliver a user-friendly and intuitive software solution.",
    },
    {
      id: "002",
      title: "Agile Software Services",
      content:
        "As an esteemed software solution company, our team, with its rich expertise and diverse experience, optimizes all processes and employs the best agile practices for offering mobile software development services, leading to a reduction in custom software application development time by approximately 50%.",
    },
    {
      id: "003",
      title: "Security and Compliance",
      content:
        "As a trusted custom software development company, we adhere to relevant regulatory compliance and data security measures. We continually update our security protocols to counter emerging threats and maintain a secure, compliant environment tailored to your needs.",
    },
    {
      id: "004",
      title: "Latest Technology Stack",
      content:
        "As a remarkable software development services company, we utilize a range of advanced technologies and programming languages for your project that guarantees seamless integration of processes. This allows a seamless way to frontend and backend",
    },
    {
      id: "005",
      title: "Complete Transparency",
      content:
        "Transparency is the key to effective business relationships. As a software development company, we always keep our clients up to date with the status of their projects and provide a clear view of every technological decision.",
    },
  ];

  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
          Factors that Cement Our Credibility as a Custom Software Development Company
        </h2>
        <p className="mb-8 sm:mb-12 text-sm sm:text-base text-gray-300 max-w-3xl">
          With almost a decade of experience in the industry, we have the expertise to handle software development projects
          of diverse complexity levels, making Appinventiv's custom software development services the right fit for your
          IT consulting needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-12 gap-x-6 sm:gap-x-8">
          {credibilityData.map((item) => (
            <div key={item.id} className="relative">
              <p className="text-xs sm:text-sm italic text-gray-400 mb-2">{item.id}</p>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-300">{item.content}</p>
              <hr className="border-t border-gray-700 mt-4 sm:mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// export const SoftwareCostEstimator = ({ h2 }: { h2: string }) => {
//   const inputDetails = [
//     { name: "fullName", type: "text", placeholder: "Full name", require: false, value: "fullName" },
//     { name: "email", type: "email", placeholder: "E-mail ID", require: true, value: "email" },
//     { name: "contact", type: "tel", placeholder: "Contact", require: true, value: "contact" },
//   ];

//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     contact: "",
//     budget: "",
//     description: "",
//     nda: false,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
//     if (type === "checkbox" && e.target instanceof HTMLInputElement) {
//       setForm({ ...form, [name]: e.target.checked });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Add actual submission logic here (e.g., API call) if required
//     console.log("Form submitted:", form);
//   };

//   return (
//     <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-200 flex flex-col lg:flex-row justify-around items-start lg:items-center">
//       <div className="max-w-xl mb-8 lg:mb-0">
//         <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{h2}</h2>
//         <p className="text-black mb-6 text-sm sm:text-base">
//           We take a comprehensive approach to providing accurate and transparent quotes for software development projects.
//           Our team considers multiple factors when giving you the quotation for software development.
//         </p>
//         <ul className="text-black list-disc list-inside space-y-2 text-sm sm:text-base">
//           <li>The complexity of features and functionalities</li>
//           <li>The intricacy of third-party integrations</li>
//           <li>The project scope and size</li>
//         </ul>
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className="bg-[#111119] py-8 sm:py-12 px-4 sm:px-6 rounded-xl w-full max-w-md sm:max-w-lg lg:max-w-xl space-y-4 shadow-xl"
//       >
//         {inputDetails.map((detail) => {
//           const { name, type, placeholder, require } = detail;
//           const inputValue = form[name as keyof typeof form];
//           const safeValue = typeof inputValue === "string" || typeof inputValue === "number" ? inputValue : "";
//           return (
//             <div key={name} className="relative">
//               <input
//                 name={name}
//                 type={type}
//                 required={require}
//                 placeholder={placeholder}
//                 onChange={handleChange}
//                 value={safeValue}
//                 className="w-full bg-transparent border-b text-white border-gray-600 focus:outline-none py-2 placeholder:text-gray-400 text-sm sm:text-base"
//               />
//               {require && !safeValue && (
//                 <p className="text-red-400 text-xs mt-1">This field is required</p>
//               )}
//             </div>
//           );
//         })}
//         <select
//           name="budget"
//           required
//           value={form.budget}
//           onChange={handleChange}
//           className="w-full text-black bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white text-sm sm:text-base"
//         >
//           <option  className="text-black"  value="">Select a Budget Range</option>
//           <option  className="text-black" value="below10k">Below $10,000</option>
//           <option className="text-black" value="10k-25k">$10,000 - $25,000</option>
//           <option className="text-black" value="25k-50k">$25,000 - $50,000</option>
//           <option className="text-black" value="50k+">Above $50,000</option>
//         </select>
//         <textarea
//           name="description"
//           required
//           placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)*"
//           onChange={handleChange}
//           value={form.description}
//           className="w-full bg-transparent text-white border-b border-gray-600 focus:outline-none py-2 placeholder:text-gray-400 text-sm sm:text-base"
//         ></textarea>
//         <div className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             name="nda"
//             checked={form.nda}
//             onChange={handleChange}
//             className="h-4 w-4 text-blue-600 border-gray-600 bg-transparent"
//           />
//           <label className="text-sm sm:text-base text-gray-300">Request NDA</label>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 rounded text-sm sm:text-base font-semibold"
//         >
//           Request Proposal
//         </button>
//       </form>
//     </section>
//   );
// };

export function GlowingEffectDemo() {
  return (
    <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 mt-16 sm:mt-24 max-w-[84rem] w-full justify-center mx-auto">
      <GridItem
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="End-to-End App Development"
        description="From ideation to deployment, we handle every stage of your mobile or web app project, ensuring seamless delivery and support."
      />
      <GridItem
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Cutting-Edge Technology"
        description="We leverage the latest frameworks and tools to build scalable, high-performance applications tailored to your business needs."
      />
      <GridItem
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Security & Compliance"
        description="Our solutions are built with robust security protocols and comply with industry standards to protect your data and users."
      />
      <GridItem
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="User-Centric Design"
        description="We prioritize intuitive UI/UX, ensuring your app is not only functional but also delightful and easy to use."
      />
      <GridItem
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Transparent Process"
        description="Stay informed at every step with clear communication, regular updates, and full project visibility."
      />
    </ul>
  );
}


interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}


const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-[9rem] sm:min-w-[7rem] sm:min-h-[9rem] list-none">
      <div className="relative h-full rounded-2xl border p-2 sm:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-8 sm:gap-6 overflow-hidden rounded-xl p-4 sm:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
            <div className="space-y-3">
              <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-semibold text-black dark:text-white">{title}</h3>
              <p className="font-sans text-sm sm:text-base text-black dark:text-neutral-400">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
