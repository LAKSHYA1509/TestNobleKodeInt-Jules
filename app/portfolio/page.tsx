import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects } from "@/data/projects"
import { Webpage, Breadcrumbs } from "../../components/schemacode"
import InfinitySlider from "@/components/slider"
import PageBreadcrumb from "@/components/Breadcrumbs/bread"
import { BannerBeams } from "@/components/Banner/Bann"
import Portf from "@/components/Portfolio/Portf"
import CtaButton from "@/components/CtaPage/Cta"
export const metadata = {
  title: "Web & App Development, SMO, PPC, Prototyping Portfolio",
  description:
    "Take a look at our recent work in social media, PPC, product design, web & app development . Real projects, real results, built with care.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
    },

    other: {
      "msvalidate.01": "2FA774516BED6957AC2007ADFDA920BA",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noblekode.com/portfolio",
    siteName: "Noble Kode",
    title: "Web & App Development SMO PPC Prototyping Portfolio",
    description:
      "Take a look at our recent work in social media, PPC, product design, web & app development . Real projects, real results, built with care",
    images: [
      {
        url: "https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Noble Kode - Software Development and Digital Marketing Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & App Development SMO PPC Prototyping Portfolio",
    description:
      "Take a look at our recent work in social media, PPC, product design, web & app development . Real projects, real results, built with care.",
    images: ["https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg"],
    creator: "@noblekode",
  },
  alternates: {
    canonical: "https://noblekode.com/portfolio",
  },
};


const PortfolioPage = () => {
  return (
    <div>
      {/* Schema Code */}
      <Webpage pageName="Portfolio" pageUrl="https://noblekode.com/portfolio" />
      <Breadcrumbs
        breadcrumbs={[
          {
            pageName: "Home",
            pageUrl: "https://noblekode.com/"
          },
          {
            pageName: "Portfolio",
            pageUrl: "https://noblekode.com/portfolio"
          }
        ]} />

      <BannerBeams uppertext={"Case studies"} description={"Success stories that demonstrate our expertise to deliver technology-led business breakthroughs across startups, global brands, and Fortune 500s"} headingh2={"Welcome to our "} span={"Porfolio  Section"} />
      <Portf />
      <CtaButton
        ctaText="Inspired by Our Work? Let's Build Your Success Story!"
        buttonText="Start Your Project"
      />
    </div>
  );
}

export default PortfolioPage
