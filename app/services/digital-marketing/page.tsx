import DigitalMarketingPage from "./digitalmarketingClient";
import { Webpage, Breadcrumbs } from "@/components/schemacode";
import CtaButton from '@/components/CtaPage/Cta';
import PageBreadcrumb from '@/components/Breadcrumbs/bread';

const title = "Digital Marketing Services | SEO, PPC & Social Media Marketing India";
const description = "Professional digital marketing services including SEO, PPC, social media marketing, and content marketing. Drive traffic and grow your brand online.";
const canonical = "https://noblekode.com/services/digital-marketing";

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
      <DigitalMarketingPage />
      {/* Schema */}
      <Webpage pageName="Digital Marketing" pageUrl={canonical} />
      <Breadcrumbs breadcrumbs={[{
        pageName: "Digital Marketing",
        pageUrl: canonical
      },
      {
        pageName: "Home",
        pageUrl: "https://noblekode.com/"
      },
    ]} />
    <CtaButton 
        ctaText="Boost Your Brand With Proven Digital Marketing!"
        buttonText="Grow My Brand"
      />
      <PageBreadcrumb items={[{ name: "Home", href: "/" } , {name :"Digital Marketing", href:"/services/digital-marketing"}]} />
    </div>
  )
}
