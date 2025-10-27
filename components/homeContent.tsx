"use client"

import { PartnerSectionAnimated } from "./Partner/PartnerSectionAnimated"
import { ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { blogPosts } from "@/data/blog-posts"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import {Carousel} from "@/components/ui/carousel";
import Draggable3DImageRing from "@/components/lightswind/3d-image-ring"
import Carousel3D, { Carousel3DItem } from "@/components/lightswind/3d-carousel";

import {
  FaMobile,
  FaCode,
  FaCogs as FaDigitalTransform,
  FaLightbulb,
  FaComments,
  FaInfinity,
  FaCloudUploadAlt,
  FaArrowRight,
} from "react-icons/fa"
import { FaChartLine, FaHandshake } from "react-icons/fa"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaCloud } from "react-icons/fa"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import {
  FaHeart,
  FaDollarSign,
  FaUtensils,
  FaShoppingCart,
  FaCar,
  FaPlane,
  FaMusic,
  FaTruck,
  FaShareAlt,
  FaTruck as FaLogistics,
  FaGraduationCap,
  FaHome,
  FaPlane as FaAviation,
  FaSeedling,
  FaPhone,
} from "react-icons/fa"
import { Calendar, User, ExternalLink } from "lucide-react"
import Image from "next/image"
import { FaUsers, FaSyncAlt, FaCodeBranch, FaExclamationCircle } from "react-icons/fa"
import { portfolioData } from "@/data/portfolio"
import { CaseStudyCard } from "@/components/ui/case-study-card"
// Import the ScrollPopup component
import ScrollPopup from "@/components/ScrollPopup"
import { BannerBeams } from "./Banner/Bann"
import { Alert } from "@/components/lightswind/alert"
import {AlertBanner}  from "@/components/alert/Alert"

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* <HeroSection /> */}

  < ScrollPopup name=""  email={""}  phone="" message="" />

  <AlertBanner  link="/contact">  🚀 Launch Offer: Get a Free Consultation on Your First Project – Start Today! </AlertBanner>
      <BannerBeams
        headingh2="Digital Transformation"
        span="with Noble Kode"
        uppertext=""
        description=""
      />
      <StatisticsSection />
      <ServicesSection />
      <PartnerSectionAnimated />
      {/* <WhyChoose /> */}
      <IndustriesSection />
      {/* <IndustriesSection /> */}
      {/* <PortfolioSection /> */}
      <div className="hidden sm:block">
      <TestimonialsSection  />
      </div>
      <BlogSection />
    {/* <CarouselDemo/> */}

    
</div>
  )
}



export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
            🚀 Transforming Ideas into Digital Reality
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build the Future with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Noblekode
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We create smart software to help your business grow. From AI apps to blockchain systems, we make your ideas real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
            >
              Start Your Project
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 hover:bg-gray-50 bg-transparent">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
 const services = [
    {
        icon: <FaMobile className="text-3xl text-blue-400" />,
        title: "Mobile App Development",
        description: "We build simple mobile apps that help your business and make users happy."
    },
    {
        icon: <FaCode className="text-3xl text-green-400" />,
        title: "Web Development",
        description: "We create websites and software to make your work easier and better."
    },
    {
        icon: <FaDigitalTransform className="text-3xl text-purple-400" />,
        title: "Digital Marketing",
        description: "We update old systems to new ones to help your business grow strong."
    },
    {
        icon: <FaLightbulb className="text-3xl text-yellow-400" />,
        title: "Graphic Designing",
        description: "We design digital products that work well and users like."
    },
    {
        icon: <FaComments className="text-3xl text-cyan-400" />,
        title: "Product Prototyping",
        description: "We give expert advice to make smart tech choices for your business."
    },
    {
        icon: <FaInfinity className="text-3xl text-orange-400" />,
        title: "DevOps",
        description: "We improve your work process to make projects faster and better."
    },
    {
        icon: <FaCloudUploadAlt className="text-3xl text-indigo-400" />,
        title: "Project Management",
        description: "We take care of your cloud systems to keep them safe, fast, and affordable."
    }
];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl from-blue-400 to-cyan-400 font-bold mb-6 leading-tight">
                Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:bg-gray-800/50 cursor-pointer"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}

          {/* CTA Card */}
          <Link href="/services" className="group bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer">
            <h3 className="text-2xl font-bold mb-4">Our Services</h3>
            <p className="text-blue-100 mb-6 text-sm">Discover our complete range of digital solutions and services</p>
            <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
              <div className="flex items-center text-sm gap-2">
                View All Services
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}


export function StatisticsSection() {
  const stats = [
    {
      number: "35+",
      title: "Industries Mastered",
      description:
        "With our agility & engineering expertise, we equip your critical business functions with customized tech, and expand digital capabilities.",
      color: "text-blue-400",
    },
    {
      number: "50+",
      title: "Tech Evangelists",
      description:
        "We are a dynamic team of technology enthusiasts and experts passionately driven to achieve the best results for our clients.",
      color: "text-blue-400",
    },
    {
      number: "200+",
      title: "Solutions Designed And Delivered",
      description:
        "We have empowered businesses with hundreds of successful futuristic solutions that have helped them grow and scale.",
      color: "text-blue-400",
    },
    {
      number: "150+",
      title: "Legacy Processes Transformed",
      description:
        "We help businesses achieve their digital transformation goals by seamlessly integrating cutting-edge technologies into their legacy systems.",
      color: "text-blue-400",
    },
    {
      number: "10+",
      title: "Strategic Partnerships",
      description:
        "We drive collaborative initiatives that address critical challenges and deliver impactful solutions.",
      color: "text-blue-400",
    },
  ]

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              What We Do
            </h2>
          </div>
          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              We have been helping companies redefine their digital possibilities for nearly a decade now. With our team
              of 50+ tech evangelists, we are building the digital infrastructure of our clients positioning them to be
              the market leaders of their respective industries.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group border-l-4 border-gray-700 pl-6 hover:border-blue-500 transition-all duration-300"
            >
              <div
                className={`text-4xl lg:text-5xl font-bold mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {stat.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 flex flex-col justify-center">
            <div className="mb-6">
              <FaChartLine className="text-4xl text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                Ready to innovate and drive an impact?
              </h3>
            </div>
            <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300 w-fit">
              <FaHandshake />
              <span>Partner with us</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}



export function TechnologySection() {
  const technologies = [
    {
      name: "Artificial Intelligence",
      description: "Machine learning, NLP, and AI-powered solutions",
      icon: "🤖",
      color: "bg-blue-50 border-blue-200",
    },
    {
      name: "Blockchain",
      description: "Decentralized applications and smart contracts",
      icon: "⛓️",
      color: "bg-purple-50 border-purple-200",
    },
    {
      name: "Internet of Things",
      description: "Connected devices and IoT ecosystems",
      icon: "🌐",
      color: "bg-green-50 border-green-200",
    },
    {
      name: "AR/VR",
      description: "Immersive experiences and virtual reality",
      icon: "🥽",
      color: "bg-orange-50 border-orange-200",
    },
  ]

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "Digital health solutions" },
    { name: "Fintech", icon: "💳", description: "Financial technology platforms" },
    { name: "Retail", icon: "🛍️", description: "E-commerce and retail tech" },
    { name: "Logistics", icon: "🚚", description: "Supply chain optimization" },
    { name: "Education", icon: "🎓", description: "EdTech and learning platforms" },
    { name: "Real Estate", icon: "🏢", description: "PropTech solutions" },
  ]

  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cutting-Edge Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We leverage the latest technologies to build scalable, secure, and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className={`${tech.color} border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h3>
          <p className="text-lg text-gray-600">Delivering specialized solutions across diverse sectors</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="text-3xl">{industry.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{industry.name}</h4>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


function WhyChoose() {
  const content = [
    {
      icon: <FaUsers className="text-3xl text-cyan-400 mb-4" />,
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="flex flex-col h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          <FaUsers className="text-4xl mb-2" />
          Collaborative Editing
        </div>
      ),
    },
    {
      icon: <FaSyncAlt className="text-3xl text-blue-400 mb-4" />,
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex flex-col h-full w-full items-center justify-center text-white">
          <FaSyncAlt className="text-4xl mb-2" />
          <img
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      icon: <FaCodeBranch className="text-3xl text-orange-400 mb-4" />,
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex flex-col h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          <FaCodeBranch className="text-4xl mb-2" />
          Version control
        </div>
      ),
    },
    {
      icon: <FaExclamationCircle className="text-3xl text-red-400 mb-4" />,
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex flex-col h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          <FaExclamationCircle className="text-4xl mb-2" />
          Running out of content
        </div>
      ),
    },
  ]

  return (
    <div className="w-full max-sm:hidden">
      <StickyScroll content={content} />
    </div>
  )
}


export function IndustriesSection() {
  const industries = [
    { name: "Healthcare", icon: <FaHeart />, color: "from-red-500 to-pink-500" },
   
    { name: "Finance", icon: <FaDollarSign />, color: "from-green-500 to-emerald-500" },
   
    { name: "Restaurant", icon: <FaUtensils />, color: "from-orange-500 to-red-500" },
    
    { name: "eCommerce", icon: <FaShoppingCart />, color: "from-blue-500 to-cyan-500" },
   
 
    { name: "Travel", icon: <FaPlane />, color: "from-sky-500 to-blue-500" },
    { name: "Entertainment", icon: <FaMusic />, color: "from-pink-500 to-purple-500" },

    { name: "Social Media", icon: <FaShareAlt />, color: "from-blue-500 to-purple-500" },
  
    { name: "Education", icon: <FaGraduationCap />, color: "from-indigo-500 to-purple-500" },
  ]

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Serving Diverse Industries{" "}
            </h2>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg hidden lg:block">
            <Link href="/industry">
              Explore More In Industries
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-gray-500 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className={` text-2xl p-4 rounded-full bg-gradient-to-r ${industry.color} text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-blue-300 transition-colors duration-300">
                  {industry.name}
                </h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg">
            Explore More In Industries
          </Button>
        </div>
      </div>
    </section>
  )
}



export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "David Butter",
      designation: "Product Manager at TechFlow",
      src: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562074/headshot-with-client-testimonial_fgayjr_cw5vf7.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Anuradha Sharma",
      designation: "CTO at InnovateSphere",
      src: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562068/istockphoto-1145045107-612x612_ske7dh_pgeyga.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://res.cloudinary.com/dwht6936t/image/upload/v1759562067/istockphoto-1135381120-612x612_vfazxx_lbmwkj.jpg",
    },
  ]
  return  <div  className="bg-[#070B1B]" >
    <h2  className="text-center pt-9 pb-5 font-bold text-4xl text-white" >  Client Testimonial </h2> 
  <AnimatedTestimonials testimonials={testimonials} />
  </div>  
  
}


export function BlogSection() {
  // Sort blogPosts by date descending and take the first 3
  const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3)

  return (
    <section id="blog" className="py-20 bg-gray-50 max-sm:px-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Blogs</h2>
          <p className="text-xl text-gray-600">Stay updated with the latest trends and insights in technology</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={"Blog"}
                    width={300}
                    height={200}
                    className="w-full h-56  object-fill hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title.slice(0, 50) + "..."} </h3>
                  <p className="text-gray-600 mb-4">{post.description.slice(0, 100) + "..."} </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={`/blog`} passHref>
            <Button variant="outline" size="lg" className="text-blue-600 hover:bg-blue-50 hover:border-blue-300 bg-transparent">
              View All Posts
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}


// export function CtaSection() {
//   return (
//     <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
//         <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//           Let's discuss your project and explore how we can help you achieve your goals with innovative technology
//           solutions.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
//             <Link href="/contact">
//               Get Free Consultation Today!
//             </Link>
//           </Button>
//           {/* <Button
//             size="lg"
//             variant="outline"
//             className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
//           >
//           <Link href="/contact">Contact us</Link>
//           </Button> */}
//         </div>
//       </div>
//     </section>
//   )
// }



export function PortfolioSection() {
  const preview = portfolioData.slice(0, 6);

  const carouselItems: Carousel3DItem[] = portfolioData.slice(0,6).map((item, index) => ({
    id: index,
    title: item.title,
    brand: item.client,
    description: item.description,
    tags: Array.isArray(item.tags)
  ? item.tags
  : (item.tags as string).split(",").map(tag => tag.trim()),
    imageUrl: item.image,
    link: `/portfolio/${item.id}`, // or item.link if dynamic routing is handled
  }));


  // Prepare slides for the Carousel with smaller card size
  const slides = preview.map((caseStudy, index) => ({
    key: caseStudy.id,
    content: (
      <div className="max-w-xs mx-auto"> {/* Make card small */}
        <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
      </div>
    ),
  }));

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 space-y-20  overflow-hidden ">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600">A glimpse of our recent work and success stories</p>
        </div>
        <div className="w-full justify-right items-center">

     <Carousel3D 
  items={carouselItems}
  autoRotate={true}
  rotateInterval={4000}
  cardHeight={500}
  
/>


        
        </div>
        <div className="text-center mt-16">
          <Link href="/portfolio" passHref>
            <Button variant="outline" size="lg"       className="hover:bg-blue-50 hover:border-blue-300 bg-transparent text-blue-600" // <-- Add your text color here
>
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


