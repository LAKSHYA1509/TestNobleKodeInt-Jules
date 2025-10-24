
import type { Metadata } from "next"
import ServicesPage from "@/components/services-page"
import CtaButton from "@/components/CtaPage/Cta"
import { Webpage, Breadcrumbs } from "@/components/schemacode"

export const metadata: Metadata = {
  title: "Our Services | NobleKode",
  description:
    "Explore our comprehensive range of digital services including web development, app development, digital marketing, SEO, and more.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "msvalidate.01": "2FA774516BED6957AC2007ADFDA920BA",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noblekode.com/services",
    siteName: "Noble Kode",
    title: "Our Services | NobleKode",
    description:
      "Explore our comprehensive range of digital services including web development, app development, digital marketing, SEO, and more.",
    images: [
      {
        url: "https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Noble Kode - Our Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | NobleKode",
    description:
      "Explore our comprehensive range of digital services including web development, app development, digital marketing, SEO, and more.",
    images: ["https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg"],
    creator: "@noblekode",
  },
  alternates: {
    canonical: "https://noblekode.com/services",
  },
}

export default function Services() {
  return (
    <>
      {/* Schema Code */}
      <Webpage pageName="Our Services" pageUrl="https://noblekode.com/services" />
      <Breadcrumbs
        breadcrumbs={[
          {
            pageName: "Home",
            pageUrl: "https://noblekode.com/"
          },
          {
            pageName: "Our Services",
            pageUrl: "https://noblekode.com/services"
          }
        ]} />

      <ServicesPage />
      <CtaButton
        ctaText="Explore Our Services to Accelerate Your Growth!"
        buttonText="See All Services"
      />
    </>
  );
}
