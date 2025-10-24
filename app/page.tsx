
import Link from "next/link";
import CldImage from "@/components/CldImage";
import Organization, { Webpage, Website } from "../components/schemacode";
import HomeContent from "@/components/homeContent";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import CtaButton from "@/components/CtaPage/Cta";

const title = "Noble Kode – #1 Digital Marketing, App & Web Development company";
const description ="India’s top result-driven app, web & digital marketing company—empowering 100+ global clients with our expert solutions that deliver";


export const metadata = {
  title: title,
  description: description,
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
    url: "https://noblekode.com",
    siteName: "Noble Kode",
    title: title,
    description:description,
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
    title: title,
    description: description,
    images: ["https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg"],
    creator: "@noblekode",
  },
  alternates: {
    canonical: "https://noblekode.com",
  },
};

export default function Home() {
  return (
    <>
      <HomeContent />
      <div className="bg-white">
      <CtaButton 
        ctaText="Ready to grow your business with Noble Kode?"
        buttonText="Get Started"
        />
        </div>
      {/* ---------------- Schema code -- Start ---------------- */}
      
      <Organization />
      <Webpage pageName={"Home"} pageUrl="https://noblekode.com/" />
      <Website />

      {/* ---------------- Schema code -- End  ---------------- */}
    </>
  );
}
