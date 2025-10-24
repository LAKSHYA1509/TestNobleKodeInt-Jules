import { Webpage, Breadcrumbs, FAQSchema } from "../../components/schemacode"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import AboutUs from "./../../components/about"
import CldImage from "@/components/CldImage"
import { aboutFaq } from "@/data/faq"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion"
import FAQ from "@/components/FAQ"
import { BannerBeams } from "@/components/Banner/Bann"
import CtaButton from "@/components/CtaPage/Cta"

export const metadata = {
  title: {
    default: "Noble Kode | India's Best App,Web & Digital Marketing Company",
  },
  description:
    "Noble Kode is a digital marketing, app, and web development company with a user-focused design approach to create real value and drive customer success.",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        href: "/images/logo.png",
      },
    ],
    apple: [
      {
        url: "/images/logo.png",
        href: "/images/logo.png",
      },
    ],
  },
  keywords: [
    "software development",
    "web development",
    "digital marketing",
    "management consulting",
    "IT solutions",
    "mobile app development",
    "custom software",
    "technology consulting",
    "front end developer",
    "hybrid mobile application",
    "management services",
    "Noble Kode",
  ],
  authors: [{ name: "Noble Kode" }],
  creator: "Noble Kode",
  publisher: "Noble Kode",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noblekode.com/about",
    siteName: "Noble Kode",
    title: "Top Management Services & Hybrid App Frontend Experts",
    description:
      "Discover reliable management services, hybrid mobile apps, and front end developers ready to build smart, user-friendly solutions for your business.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 627,
        alt: "Noble Kode - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Management Services & Hybrid App Frontend Experts",
    description:
      "Discover reliable management services, hybrid mobile apps, and front end developers ready to build smart, user-friendly solutions for your business.",
    images: ["/images/logo.png"],
    creator: "@noblekode",
  },
  alternates: {
    canonical: "https://noblekode.com/about",
  },
}



const AboutPage = () => {
  return (
    <>
      {/* Schema Code */}
      <Webpage pageUrl="https://noblekode.com/about" />
      <Breadcrumbs
        breadcrumbs={[
          {
            pageName: "Home",
            pageUrl: "https://noblekode.com/"
          },
          {
            pageName: "About",
            pageUrl: "https://noblekode.com/about"
          }
        ]} />
      <FAQSchema faqs={aboutFaq} />

      {/* Hero Banner */}
      {/* <section className="w-full relative">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <CldImage
            src="https://res.cloudinary.com/dlrmktbrg/image/upload/v1745404084/Purple_Minimalist_Develop_Your_Mobile_App_With_Us_Medium_Banner_czudxc.png"
            fill
            alt="Noble Kode - About Us"
            className="object-cover"
            priority
          />
        </div>
      </section> */}

      <BannerBeams headingh2={"Beyond the Code"} span={"We Craft Innovation"} />

      {/* About Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AboutUs />


        <section className="pt-24  bg-background relative overflow-hidden">
  <div className="container mx-auto px-4 ">
    <h2 className="text-4xl font-bold mb-12 text-center text-primary font-serif">
      Frequently Asked Questions
    </h2>

    <FAQ  faq={aboutFaq}/>
        
  </div>
          <CtaButton />

  <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 translate-x-1/2"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
</section>




        {/* Breadcrumb Navigation */}
        <Breadcrumb>
          <BreadcrumbList className="flex justify-center">
            <BreadcrumbItem>
              <BreadcrumbLink className="text-sm sm:text-base" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-sm sm:text-base" href="/about">About</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </>
  )
}

export default AboutPage
