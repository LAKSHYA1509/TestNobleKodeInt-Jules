import GraphicDesignPage from "./graphicdesigningClient";
import { Webpage, Breadcrumbs } from "@/components/schemacode";
import CtaButton from '@/components/CtaPage/Cta';
import PageBreadcrumb from '@/components/Breadcrumbs/bread';

const title = "Graphic Design Services | Logo, Brochure & Brand Identity Design India";
const description = "Professional graphic design services including logo design, brochure creation, business cards, and complete brand identity solutions. Creative designs that make your brand stand out.";
const canonical = "https://noblekode.com/services/graphic-designing";

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
    url: canonical,
    siteName: "Noble Kode",
    title: title,
    description: description,
    images: [
      {
        url: "https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Noble Kode - Graphic Design Services",
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
    canonical: canonical,
  },
};

export default function GraphicDevelopment() {
  return (
    <div >
      <GraphicDesignPage />
      {/* Schema */}
      <Webpage pageName="Graphic Development" pageUrl={canonical} />
      <Breadcrumbs breadcrumbs={[{
        pageName: "Graphic Development",
        pageUrl: canonical
      },
      {
        pageName: "Home",
        pageUrl: "https://noblekode.com/"
      },
    ]} />
    <CtaButton 
          ctaText="Make Your Brand Stand Out With Stunning Design!"
          buttonText="Get Creative"
        />
      <PageBreadcrumb items={[{ name: "Home", href: "/" } , {name :"Graphic Designing", href:"/services/graphic-designing"}]} />
    </div>
  )
}