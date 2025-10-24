import ProductPrototypingPage from "./productPrototypingClient";
import { Webpage, Breadcrumbs } from "@/components/schemacode";
import CtaButton from '@/components/CtaPage/Cta';
import PageBreadcrumb from '@/components/Breadcrumbs/bread';

const title = "Product Prototyping Services | Rapid 3D Prototyping Company India";
const description = "Transform your ideas into reality with our expert product prototyping services. From concept to creation, we deliver high-fidelity prototypes for testing and presentation.";
const canonical = "https://noblekode.com/services/product-prototyping";

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
        alt: "Noble Kode - Product Prototyping Services",
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

export default function ProductPrototypingDevelopment() {
  return (
    <div >
      <ProductPrototypingPage />
      {/* Schema */}
      <Webpage pageName="Product Prototyping" pageUrl={canonical} />
      <Breadcrumbs breadcrumbs={[{
        pageName: "Product Prototyping",
        pageUrl: canonical
      },
      {
        pageName: "Home",
        pageUrl: "https://noblekode.com/"
      },
    ]} />
    <CtaButton 
        ctaText="Turn Your Ideas Into Reality With Rapid Prototyping!"
        buttonText="Request a Prototype"
      />
      <PageBreadcrumb items={[{ name: "Home", href: "/" } , {name :"Product Prototyping", href:"/services/product-prototyping"}]} />
    </div>
  )
}