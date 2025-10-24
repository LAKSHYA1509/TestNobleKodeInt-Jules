"use client"

import { TestmonySlider } from "./testimony"
import { appDevelopment, webDevelopment, digitalMarketing, designBranding, productPrototyping, projectManagement } from "@/data/services"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Code,
  Smartphone,
  BarChart2,
  ChevronRight,
  Palette,
  Settings2,
  ClipboardList,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
import CtaButton from "./CtaPage/Cta"
import CldImage from "./CldImage"



const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },  
}


export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("web")


  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transforming Ideas into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Digital Reality
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We offer comprehensive digital solutions to help your business thrive in the digital landscape. From web
              development to digital marketing, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/industry" tabIndex={-1} className="inline-block">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  View Our Industries
                </Button>
              </a>

            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 "></div>
      </section>

      {/* Main Services Section */}

      <section className="py-20 max-md:pt-0  max-md:pb-10   ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">Our Core Services</h2>
            <p className=" max-w-2xl mx-auto">
              We provide end-to-end solutions to help businesses grow online. Our team is driven by results—not just
              running services.
            </p>
          </div>


          <Tabs defaultValue="web" className="w-full mx-auto" onValueChange={setActiveTab}>
            <div className="mb-10 w-full overflow-x-auto max-sm:overflow-x-scroll scrollbar-hide">
          <TabsList className="
            /* Desktop styles */
            flex 
            sm:flex-row 
            flex-wrap 
            w-full 
            rounded-lg 
            p-1 
            gap-20
            sm:justify-center
            
            /* Mobile override */
            max-sm:overflow-x-auto 
            max-sm:flex-nowrap 
            max-sm:gap-2
            max-sm:justify-start
            max-sm:w-auto
            max-sm:inline-flex
            max-sm:scroll-smooth
            max-sm:snap-x 
            max-sm:snap-mandatory
            max-sm:[-webkit-overflow-scrolling:touch]
            
            /* Hide scrollbar on mobile */
            max-sm:[&::-webkit-scrollbar]:hidden
            max-sm:[-ms-overflow-style:none]
            max-sm:[scrollbar-width:none]
          ">
          <TabsTrigger value="web" className="default:bg-slate-300 data-[state=active]:bg-cyan-500 data-[state=active]:text-white  justify-start
                
                /* Mobile only: prevent shrinking & wrapping */
                max-sm:flex-shrink-0
                max-sm:snap-start
                max-sm:whitespace-nowrap
              "
            >
              <Code className="mr-2 h-4 w-4" />
              Web Development
            </TabsTrigger>
            
            <TabsTrigger 
              value="app" 
            className="default:bg-slate-300 data-[state=active]:bg-cyan-500 data-[state=active]:text-white  justify-start
                max-sm:flex-shrink-0
                max-sm:snap-start
                max-sm:whitespace-nowrap
              "
            >
              <Smartphone className="mr-2 h-4 w-4" />
              App Development
            </TabsTrigger>
            
            <TabsTrigger 
              value="marketing" 
              className="default:bg-slate-300 data-[state=active]:bg-cyan-500 data-[state=active]:text-white  justify-start
                max-sm:flex-shrink-0
                max-sm:snap-start
                max-sm:whitespace-nowrap
              "
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              Digital Marketing
            </TabsTrigger>
            
            <TabsTrigger 
              value="graphic" 
              className="default:bg-slate-300 data-[state=active]:bg-cyan-500 data-[state=active]:text-white  justify-start
                max-sm:flex-shrink-0
                max-sm:snap-start
                max-sm:whitespace-nowrap
              "
            >
              <Palette className="mr-2 h-4 w-4" />
              Graphic Designing
            </TabsTrigger>
            
            <TabsTrigger 
              value="prototype" 
            className="default:bg-slate-300 data-[state=active]:bg-cyan-500 data-[state=active]:text-white  justify-start
                max-sm:flex-shrink-0
                max-sm:snap-start
                max-sm:whitespace-nowrap
              "
            >
              <Settings2 className="mr-2 h-4 w-4" />
              Product Prototyping
            </TabsTrigger>
            
            <TabsTrigger 
              value="management" 
              className="default:bg-slate-300 data-[state=active]:bg-cyan-500 data-[state=active]:text-white  justify-start
                max-sm:flex-shrink-0
                max-sm:snap-start
                max-sm:whitespace-nowrap
              "
            >
              <ClipboardList className="mr-2 h-4 w-4" />
              Project Management
            </TabsTrigger>
          </TabsList>
        </div>

            {/* Web */}
            <TabsContent value="web" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >

                {webDevelopment.map((item, index) => {
                  const { title, description, url, features } = item

                  return <ServiceCard link={url}
                    key={index}
                    icon={<item.icon className="text-indigo-600 h-10 w-10" style={{ color: item.iconColor }} />}
                    title={<span className="text-white">{item.title}</span>}
                    description={<span className="text-white">{item.description}</span>}
                    features={item.features}
                  />

                })}

              </motion.div>
            </TabsContent>


            {/* App  */}
            <TabsContent value="app" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >

                {appDevelopment.map((item, index) => {
                  const { title, description, url, features } = item

                  return <ServiceCard link={url}
                    key={index}
                    icon={<item.icon className="text-indigo-600 h-10 w-10" style={{ color: item.iconColor }} />}
                    title={<span className="text-white">{item.title}</span>}
                    description={<span className="text-white">{item.description}</span>}
                    features={item.features}
                  />

                })}
              </motion.div>
            </TabsContent>

            {/* Digitak Marketing  */}

            <TabsContent value="marketing" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {digitalMarketing.map((item, index) => {


                  const { title, description, url, features, iconColor } = item
                  return <ServiceCard
                    link={url}
                    key={index}
                    icon={<item.icon className="text-indigo-600 h-10 w-10" style={{ color: item.iconColor }} />}
                    title={<span className="text-white">{item.title}</span>}
                    description={<span className="text-white">{item.description}</span>}
                    features={item.features}
                  />
                })}

              </motion.div>
            </TabsContent>

            {/* Graphic Designing */}

            <TabsContent value="graphic" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >

                {designBranding.map((item, index) => {
                  const { title, description, url, features } = item

                  return <ServiceCard link={url}
                    key={index}
                    icon={<item.icon className="text-indigo-600 h-10 w-10" style={{ color: item.iconColor }} />}
                    title={<span className="text-white">{item.title}</span>}
                    description={<span className="text-white">{item.description}</span>}
                    features={item.features}
                  />

                })}
              </motion.div>
            </TabsContent>


            {/* Product Prototype */}
            <TabsContent value="prototype" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >

                {productPrototyping.map((item, index) => {
                  const { title, description, url, features } = item

                  return <ServiceCard link={url}
                    key={index}
                    icon={<item.icon className="text-indigo-600 h-10 w-10" style={{ color: item.iconColor }} />}
                    title={<span className="text-white">{item.title}</span>}
                    description={<span className="text-white">{item.description}</span>}
                    features={item.features}
                  />

                })}
              </motion.div>
            </TabsContent>


            {/* Project Magement */}
            <TabsContent value="management" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >

                {projectManagement.map((item, index) => {
                  const { title, description, url, features } = item

                  return <ServiceCard link={url}
                    key={index}
                    icon={<item.icon className="text-indigo-600 h-10 w-10" style={{ color: item.iconColor }} />}
                    title={<span className="text-white">{item.title}</span>}
                    description={<span className="text-white">{item.description}</span>}
                    features={item.features}
                  />

                })}
              </motion.div>
            </TabsContent>

          </Tabs>
        </div>

      </section>

      {/* Process Section */} 
      <section className="py-20 max-md:py-10 ">
        <div className="container mx-auto px-4 max-sm:px-[30px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">Our Process</h2>
            <p className=" max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds
              your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessCard
              number="01"
              title="Discovery"
              description="We start by understanding your business goals, target audience, and project requirements to create a solid foundation."
            />
            <ProcessCard
              number="02"
              title="Strategy"
              description="Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives."
            />
            <ProcessCard
              number="03"
              title="Implementation"
              description="Our team of experts brings your project to life with attention to detail and a focus on quality."
            />
            <ProcessCard
              number="04"
              title="Launch & Support"
              description="We ensure a smooth launch and provide ongoing support to help your business grow and evolve."
            />
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 max-md:py-10 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>

              <h2 className="text-3xl md:text-4xl font-bold  mb-4">See Our Work in Action</h2>
              <p className=" mb-6">
                Discover how we helped our clients achieve their business goals through our comprehensive digital
                solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="">
                    Increased organic traffic by 150% through strategic SEO implementation
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="">Boosted conversion rates by 75% with optimized user experience design</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="">Reduced page load time by 60% through performance optimization</p>
                </div>
              </div>

            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-lg transform rotate-3 scale-105 opacity-30 blur-lg"></div>
              <div className="relative   backdrop-blur-sm p-1 rounded-lg border border-white/10">
                <Image
                  src="https://res.cloudinary.com/dwht6936t/image/upload/v1759562074/noblekoderecepai_qchgo6_nbl5kz.png"
                  alt="Case Study Preview"
                  width={600}
                  height={600}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <TestimonialsSection />
    </div>
  )
}

type ServiceCardProps = {
  icon: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  link?: string,
  features: string[]
}

function ServiceCard({ icon, title, description, features, link, }: ServiceCardProps) {


  return (
    <motion.div variants={fadeIn} className="group">
      <Card className="h-full border-blue-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
        <CardHeader>
          <div className="mb-4">{icon}</div>
          <CardTitle className=" text-xl">{title}</CardTitle>
          <CardDescription className="">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center ">
                <CheckCircle className="h-4 w-4 text-cyan-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => {
              if (link) window.open(link, "blank");
            }}
            variant="ghost"
            className="text-white default:text-cyan-400  hover:bg-cyan-500/5 p-2 group-hover:translate-x-1 transition-transform duration-300"
          >
            Learn more <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

type ProcessCardProps = {
  number: string
  title: string
  description: string
}

function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <div className="relative">
      <div className="absolute -top-10 -left-6 text-7xl font-bold text-cyan-500/20">{number}</div>
      <Card className="h-full  border-blue-800/50 backdrop-blur-sm relative z-10">
        <CardHeader>
          <CardTitle className="text-white text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}

type TestimonialCardProps = {
  quote: string
  author: string
  company: string
}


function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 default:bg-gray-50  text-center px-4 sm:px-6">
      <h2 className="text-2xl md:text-3xl font-bold  mb-8 ">Testimonials</h2>
      <TestmonySlider />
    </section>
  );
}