"use client"

import React from "react";
import Image from "next/image"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState, useEffect } from "react"
import PageBreadcrumb from '@/components/Breadcrumbs/bread';
import { ToggleSwitch } from "@/components/planservices"
import { CldImage } from "next-cloudinary";
import PricingPlans from "@/components/Pricing/Pricingtoggle";
import CtaButton from "@/components/CtaPage/Cta";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconBoxAlignRightFilled,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
    IconWorldWww, IconSettings, IconDeviceMobile, IconSearch,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { motion as framerMotion } from "framer-motion";
import {
    Code2, // Frontend
    Server, // Backend
    LayoutDashboard, // User Interface
    Library, // Libraries
    Database, // Database
    MoreHorizontal,
} from "lucide-react";
import { FaReact, FaAngular, FaVuejs, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiSvelte, SiExpress, SiGraphql, SiDjango, SiFlask, SiTailwindcss, SiChakraui, SiRedux, SiJest, SiReactquery, SiMongodb, SiPostgresql, SiMysql, SiPwa, SiCypress, SiLighthouse } from "react-icons/si";
import { FaChartLine, FaUserTie, FaClipboardCheck, FaSearch, FaChartBar, FaTshirt, FaTools, FaTooth, FaGraduationCap } from "react-icons/fa";

// import {SoftwareCostEstimator} from "../app-development/appDevelopmentClient"
import { Span } from "next/dist/trace";
type WebCardProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
};

const CARD_DATA = [
  {
    imageSrc: "/images/web-development.png",
    imageAlt: "Web Development",
    title: "Dynamic Website Development",
    description: "Create responsive, interactive websites that update content in real-time and adapt to user behavior.",
  },
  {
    imageSrc: "/images/seo.png",
    imageAlt: "Static Websites",
    title: "Static Websites",
    description: "Simple, fast-loading web pages ideal for showcasing services, portfolios, or small business info.",
  },
  {
    imageSrc: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562126/Reasons-to-make-your-e-commerce-accessible_dytf2q_havykd.jpg",
    imageAlt: "E-commerce Websites",
    title: "E-commerce Websites",
    description: "Build secure, scalable online stores with shopping carts, payment gateways, and real-time inventory.",
  },
  {
    imageSrc: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562127/images_tkfef3_ave1ow.jpg",
    imageAlt: "Blog Websites",
    title: "Blog Websites",
    description: "Share insights and updates with SEO-friendly, easy-to-manage blog platforms tailored to your style.",
  },
  {
    imageSrc: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562127/a1614500-e03f-11eb-986a-30f6f0d4f1cc_cazkce_wgw4le.png",
    imageAlt: "Portfolio Websites",
    title: "Portfolio Websites",
    description: "Showcase your work professionally with clean layouts, image galleries, and smooth navigation.",
  },
  {
    imageSrc: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562126/buson-1_noy3it_axvduj.jpg",
    imageAlt: "Business Websites",
    title: "Business Websites",
    description: "Present your company online with a professional site that communicates your brand and services clearly.",
  },
];
export default function WebClient() {

    return (
        <>
            {/* Banner */}
            <Banner />
            <BentoGridThirdDemo />
            <WebCards />
            <WebsiteProcess />
            <TechTabs />
            {/* <SoftwareCostEstimator h2={"Estimated Custom Web Development Cost"} /> */}
                        <CtaButton 
                            ctaText="Build a Powerful Website for Your Business!"
                            buttonText="Start Web Project"
                        />
            <PageBreadcrumb items={[{ name: "Home", href: "/" }, { name: "Web Development", href: "PageBreadcrumb/web-development" }]} />
        </>
    )
}

function Banner() {
    return <React.Fragment>
        <section className="relative w-full h-[50vh] md:h-[80vh] flex items-center text-white">
            <CldImage
                src="https://res.cloudinary.com/dlrmktbrg/image/upload/v1745926518/web-development_vqboam.webp"
                alt="Web Development"
                fill
                className="object-cover h-full w-full"
            />
            <div className="relative z-10 px-4 md:px-6 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-[3.4rem]">
                    Web Development Services
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 opacity-90">
                    Responsive, custom-built websites tailored to your business goals.
                </p>
            </div>
        </section>

    </React.Fragment>
}


function BentoGridThirdDemo() {
    const SkeletonOne = () => {
        const variants = {
            initial: {
                x: 0,
            },
            animate: {
                x: 10,
                rotate: 5,
                transition: {
                    duration: 0.2,
                },
            },
        };
        const variantsSecond = {
            initial: {
                x: 0,
            },
            animate: {
                x: -10,
                rotate: -5,
                transition: {
                    duration: 0.2,
                },
            },
        };

        return (
            <motion.div
                initial="initial"
                whileHover="animate"
                className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
            >
                <motion.div
                    variants={variants}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
                >
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
                    <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                </motion.div>
                <motion.div
                    variants={variantsSecond}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
                >
                    <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
                </motion.div>
                <motion.div
                    variants={variants}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
                >
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
                    <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                </motion.div>
            </motion.div>
        );
    };
    const SkeletonTwo = () => {
        const variants = {
            initial: {
                width: 0,
            },
            animate: {
                width: "100%",
                transition: {
                    duration: 0.2,
                },
            },
            hover: {
                width: ["0%", "100%"],
                transition: {
                    duration: 2,
                },
            },
        };
        const arr = new Array(6).fill(0);
        return (
            <motion.div
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
            >
                {arr.map((_, i) => (
                    <motion.div
                        key={"skelenton-two" + i}
                        variants={variants}
                        style={{
                            maxWidth: Math.random() * (100 - 40) + 40 + "%",
                        }}
                        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
                    ></motion.div>
                ))}
            </motion.div>
        );
    };
    const SkeletonThree = () => {
        const variants = {
            initial: {
                backgroundPosition: "0 50%",
            },
            animate: {
                backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
            },
        };
        return (
            <motion.div
                initial="initial"
                animate="animate"
                variants={variants}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
                style={{
                    background:
                        "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                    backgroundSize: "400% 400%",
                }}
            >
                <motion.div className="h-full w-full rounded-lg"></motion.div>
            </motion.div>
        );
    };
    const SkeletonFour = () => {
        const first = {
            initial: {
                x: 20,
                rotate: -5,
            },
            hover: {
                x: 0,
                rotate: 0,
            },
        };
        const second = {
            initial: {
                x: -20,
                rotate: 5,
            },
            hover: {
                x: 0,
                rotate: 0,
            },
        };
        return (
            <motion.div
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
            >
                <motion.div
                    variants={first}
                    className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
                >
                    <img
                        src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                        alt="avatar"
                        height="100"
                        width="100"
                        className="rounded-full h-10 w-10"
                    />
                    <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                        Just code in Vanilla Javascript
                    </p>
                    <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
                        Delusional
                    </p>
                </motion.div>
                <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
                    <img
                        src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                        alt="avatar"
                        height="100"
                        width="100"
                        className="rounded-full h-10 w-10"
                    />
                    <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                        Tailwind CSS is cool, you know
                    </p>
                    <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
                        Sensible
                    </p>
                </motion.div>
                <motion.div
                    variants={second}
                    className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
                >
                    <img
                        src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                        alt="avatar"
                        height="100"
                        width="100"
                        className="rounded-full h-10 w-10"
                    />
                    <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                        I love angular, RSC, and Redux.
                    </p>
                    <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
                        Helpless
                    </p>
                </motion.div>
            </motion.div>
        );
    };
    const SkeletonFive = () => {
        const variants = {
            initial: {
                x: 0,
            },
            animate: {
                x: 10,
                rotate: 5,
                transition: {
                    duration: 0.2,
                },
            },
        };
        const variantsSecond = {
            initial: {
                x: 0,
            },
            animate: {
                x: -10,
                rotate: -5,
                transition: {
                    duration: 0.2,
                },
            },
        };

        return (
            <motion.div
                initial="initial"
                whileHover="animate"
                className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
            >
                <motion.div
                    variants={variants}
                    className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
                >
                    <img
                        src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                        alt="avatar"
                        height="100"
                        width="100"
                        className="rounded-full h-10 w-10"
                    />
                    <p className="text-xs text-neutral-500">
                        There are a lot of cool framerworks out there like React, Angular,
                        Vue, Svelte that can make your life ....
                    </p>
                </motion.div>
                <motion.div
                    variants={variantsSecond}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
                >
                    <p className="text-xs text-neutral-500">Use PHP.</p>
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
                </motion.div>
            </motion.div>
        );
    };
    const items = [
        {
            title: (
                <span className="text-white">"Dynamic Website Development"</span>
            ),
            description: (
                <span className="text-sm">
                    Build interactive, database-driven websites tailored to your business needs.
                </span>
            ),
            header: <SkeletonOne />,
            className: "md:col-span-1",
            icon: <IconWorldWww className="h-4 w-4 text-blue-500" />,
        },
        {
            title: "Custom Website Solutions",
            description: (
                <span className="text-sm">
                    Get a unique website designed and developed specifically for your brand.
                </span>
            ),
            header: <SkeletonTwo />,
            className: "md:col-span-1",
            icon: <IconSettings className="h-4 w-4 text-green-500" />,
        },
        {
            title: "Responsive Design",
            description: (
                <span className="text-sm">
                    Ensure your website looks great and works perfectly on all devices.
                </span>
            ),
            header: <SkeletonThree />,
            className: "md:col-span-1",
            icon: <IconDeviceMobile className="h-4 w-4 text-purple-500" />,
        },
        {
            title: "E-commerce Development",
            description: (
                <span className="text-sm">
                    Launch your online store with secure, scalable e-commerce solutions.
                </span>
            ),
            header: <SkeletonFour />,
            className: "md:col-span-2",
            icon: <IconTableColumn className="h-4 w-4 text-yellow-500" />,
        },
        {
            title: "SEO Optimization",
            description: (
                <span className="text-sm">
                    Improve your website's visibility and ranking on search engines.
                </span>
            ),
            header: <SkeletonFive />,
            className: "md:col-span-1",
            icon: <IconSearch className="h-4 w-4 text-pink-500" />,
        },
    ];



    return (
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={cn("[&>p:text-lg]", item.className)}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    );
}

// A reusable WebCard component


function WebCard({ imageSrc, imageAlt, title, description }: WebCardProps) {
    return <>



        <Card className="max-w-sm mx-auto">
            <div className="w-full h-40 relative">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover rounded-t-lg"
                />
            </div>
            <CardContent>
                <CardTitle className="mt-4 text-white">{title}</CardTitle>
                <CardDescription className="mt-2">{description}</CardDescription>
            </CardContent>
        </Card>

    </>
}

// Example usage of WebCard
export function WebCards() {
  return (
    <div className="flex flex-col my-16 gap-8">
      <h1 className="text-center text-4xl font-bold mb-8 text-white drop-shadow-lg">Web Development Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 w-[84rem] mx-auto justify-center">
        {CARD_DATA.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.045,
              boxShadow: "0 8px 24px rgba(99,102,241,0.25)",
              y: -6,
            }}
            className="bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-900 rounded-2xl shadow-xl overflow-hidden border border-transparent hover:border-indigo-500 transition-all cursor-pointer"
          >
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              width={400}
              height={180}
              className="w-full h-44 object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg sm:text-xl font-bold text-indigo-100 mb-2">{card.title}</h2>
              <p className="text-slate-300 text-sm">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProcessStep({ icon, title, id }: { icon: string; title: string; id: string }) {
    return (
        <div className="flex flex-col items-center">
            {/* Rotating Dotted SVG Border */}
            <motion.div
                className="relative flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                style={{ width: 200, height: 200 }}
            >
                {/* Dotted SVG */}
                <svg
                    width={200}
                    height={200}
                    viewBox="0 0 200 200"
                    className="absolute"
                    style={{ left: 0, top: 0 }}
                >
                    <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="#60a5fa"
                        strokeWidth="4"
                        strokeDasharray="6 10"
                        strokeLinecap="round"
                        opacity="0.5"
                    />
                    {/* Decorative dots */}
                    <circle cx="40" cy="40" r="6" fill="#3b82f6" />
                    <circle cx="170" cy="60" r="4" fill="#3b82f6" />
                    <circle cx="60" cy="170" r="3" fill="#3b82f6" />
                </svg>
                {/* Solid Blue Circle with Image */}
                <div className="w-[160px] h-[160px] rounded-full bg-blue-400 flex items-center justify-center z-10 shadow-lg border-4 border-white overflow-hidden">
                    <Image
                        src={icon}
                        alt={title}
                        width={160}
                        height={160}
                        className="rounded-full object-cover w-full h-full"
                        style={{ border: "4px solid #3b82f6" }}
                    />
                </div>
            </motion.div>
            {/* Title and Step Number */}
            <div className="flex flex-col items-center mt-6">
                <div className="text-xl md:text-2xl font-semibold text-black mb-2">{title}</div>
                <div className="w-1 h-10 bg-blue-400" />
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 font-bold text-gray-800 text-lg mt-2 shadow">
                    {id}
                </div>
            </div>
        </div>
    );
}

function WebsiteProcess() {
    const steps = [
        {
            id: "01",
            title: "Making a plan",
            icon: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562126/images_gkf2p2_m5usev.jpg",
        },
        {
            id: "02",
            title: "Designing & Development",
            icon: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562129/Web-design-development-and-its-importance_fsbhkn_sgem5z.png",
        },
        {
            id: "03",
            title: "Quality Control",
            icon: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562125/quality-control-approved-seal-stamp-green-flat-vector_yv3zvp_capclx.jpg",
        },
        {
            id: "04",
            title: "Launch",
            icon: "https://res.cloudinary.com/dlrmktbrg/image/upload/v1756191620/Blog-Cover-Product-Launch-strategy-1024x768_o4io36.webp",
        },
    ];

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="bg-white py-16 px-4 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-black text-3xl md:text-4xl font-bold mb-2">
                    Our Process of Website Designing & Development
                </h2>
                <p className="text-gray-500 mb-12 text-lg">
                    Success is a Process not an Event
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
                    {steps.map((step, i) => (
                        <ProcessStep
                            key={step.id}
                            icon={step.icon}
                            title={step.title}
                            id={step.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Tab data type for clarity
type Tab = {
    label: string;
    icon: React.ReactNode;
    content: React.ReactNode;
    filled?: boolean; // For "Others" tab style
};





function TechTabs() {
    // Define all tabs in a single array for scalability
    const tabs: Tab[] = [
        {
            label: "Frontend",
            icon: <Code2 className="w-6 h-6" />,
            content: (
                <div className="space-y-10" >
                    <h3 className="text-white font-semibold mb-2 text-center text-3xl">Frontend Technologies</h3>
                    <ul className="list-disc  space-y-2 flex justify-center gap-8 text-3xl  flex-wrap ">
                        <li className="text-white flex items-center gap-2"><FaReact className="text-blue-500" /> React.js</li>
                        <li className="text-white flex items-center gap-2"><FaVuejs className="text-green-500" /> Vue.js</li>
                        <li className="text-white flex items-center gap-2"><FaAngular className="text-red-600" /> Angular</li>
                        <li className="text-white flex items-center gap-2"><SiSvelte className="text-orange-500" /> Svelte</li>
                    </ul>
                </div>
            ),
        },
        {
            label: "Backend",
            icon: <Server className="w-6 h-6" />,
            content: (
                <div className="space-y-10">
                    <h3 className="text-white font-semibold mb-2 text-center text-3xl">Backend Technologies</h3>
                    <ul className="list-disc  space-y-2 flex justify-center  flex-wrap gap-8 text-3xl">
                        <li className="text-white flex items-center gap-2"><FaNodeJs className="text-green-700" /> Node.js</li>
                        <li className="text-white flex items-center gap-2"><SiExpress className="text-gray-800" /> Express.js</li>
                        <li className="text-white flex items-center gap-2"><SiGraphql className="text-pink-500" /> GraphQL</li>
                        <li className="text-white flex items-center gap-2"><FaPython className="text-blue-400" /> Python</li>
                        <li className="text-white flex items-center gap-2"><SiDjango className="text-green-800" /> Django</li>
                        <li className="text-white flex items-center gap-2"><SiFlask className="text-black" /> Flask</li>
                    </ul>
                </div>
            ),
        },
        {
            label: "User Interface",
            icon: <LayoutDashboard className="w-6 h-6" />,
            content: (
                <div className="space-y-10" >
                    <h3 className="text-white font-semibold mb-2 text-center text-3xl ">UI Libraries</h3>
                    <ul className="list-disc  space-y-2 flex justify-center gap-8 text-3xl flex-wrap">
                        <li className="text-white flex items-center gap-2"><SiTailwindcss className="text-cyan-500" /> Tailwind CSS</li>
                        <li className="text-white flex items-center gap-2"><SiChakraui className="text-teal-400" /> Chakra UI</li>
                    </ul>
                </div>
            ),
        },
        {
            label: "Libraries",
            icon: <Library className="w-6 h-6" />,
            content: (
                <div className="space-y-10" >
                    <h3 className="text-white font-semibold mb-2 text-center text-3xl">Popular Libraries</h3>
                    <ul className="list-disc  space-y-2 flex justify-center gap-8 text-3xl flex-wrap">
                        <li className="text-white flex items-center gap-2"><SiRedux className="text-purple-600" /> Redux</li>
                        <li className="text-white flex items-center gap-2"><SiJest className="text-pink-600" /> Jest</li>
                        <li className="text-white flex items-center gap-2"><SiReactquery className="text-red-500" /> React Query</li>
                    </ul>
                </div>
            ),
        },
        {
            label: "Database",
            icon: <Database className="w-6 h-6" />,
            content: (
                <div className="space-y-10" >
                    <h3 className="text-white font-semibold mb-2 text-center text-3xl">Databases</h3>
                    <ul className="list-disc  space-y-2 flex flex-wrap justify-center gap-8 text-3xl">
                        <li className="text-white flex items-center gap-2"><SiMongodb className="text-green-600" /> MongoDB</li>
                        <li className="text-white flex items-center gap-2"><SiPostgresql className="text-blue-700" /> PostgreSQL</li>
                        <li className="text-white flex items-center gap-2"><SiMysql className="text-yellow-600" /> MySQL</li>
                    </ul>
                </div>
            ),
        },
        {
            label: "Others",
            icon: <MoreHorizontal className="w-6 h-6" />,
            filled: true, // Special style for "Others"
            content: (
                <div className="space-y-10" >
                    <h3 className="text-white font-semibold mb-2 text-center text-3xl">Other Tools</h3>
                    <ul className="list-disc  space-y-2  flex justify-center gap-8 text-3xl  flex-wrap">
                        <li className="text-white flex items-center gap-2"><SiPwa className="text-blue-500" /> PWA Builder</li>
                        <li className="text-white flex items-center gap-2"><SiLighthouse className="text-green-500" /> Lighthouse</li>
                        <li className="text-white flex items-center gap-2"><SiJest className="text-pink-600" /> Jest</li>
                        <li className="text-white flex items-center gap-2"><SiCypress className="text-green-700" /> Cypress</li>
                    </ul>
                </div>
            ),
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="w-full max-w-5xl mx-auto my-16">
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {tabs.map((tab, idx) => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveTab(idx)}
                        className={`flex items-center gap-2 px-8 py-4 rounded-lg border text-lg font-medium transition-all
                    ${activeTab === idx
                                ? tab.filled
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "border-blue-600 text-blue-600 bg-white"
                                : tab.filled
                                    ? "bg-blue-500/80 text-white border-blue-500"
                                    : "border-black text-black bg-white hover:bg-gray-100"
                            }
                        `}
                        aria-selected={activeTab === idx}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>
            {/* Tab Content */}
            <div className=" rounded-x   shadow p-8 min-h-[180px] border-t-gray-200">
                {tabs[activeTab].content}
            </div>
        </section>
    );
}
