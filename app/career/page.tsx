import CareerPage from "./careerClient";
import { Webpage, Breadcrumbs } from "@/components/schemacode";
import CtaButton from '@/components/CtaPage/Cta';
import PageBreadcrumb from '@/components/Breadcrumbs/bread';

const title = "Careers | Join Our Team | Web & App Development Jobs | Noble Kode";
const description = "Join Noble Kode's talented team! We're hiring web developers, app developers, digital marketers, and designers. Explore exciting career opportunities and grow with us.";
const canonical = "https://noblekode.com/career";

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
        alt: "Noble Kode - Careers",
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

export default function careerPage() {
  return (
    <div >
      <CareerPage />
      {/* Schema */}
      <Webpage pageName="Careers Page" pageUrl={canonical} />
      <Breadcrumbs breadcrumbs={[{
        pageName: "Careers",
        pageUrl: canonical
      },
      {
        pageName: "Home",
        pageUrl: "https://noblekode.com/"
      },
    ]} />
        <CtaButton 
            ctaText="Streamline Your Projects With Our Expert Management!"
            buttonText="Start Managing"
          />
      <PageBreadcrumb items={[{ name: "Home", href: "/" } , {name :"Careers", href:"/career"}]} />
    </div>
  )
}