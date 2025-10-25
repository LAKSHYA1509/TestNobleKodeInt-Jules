import WebClient from "./webClient"
import { Webpage, Breadcrumbs } from "@/components/schemacode"

const title = "Professional Web Design & Development Services India"
const description =
  "We design clean, mobile-friendly websites and eCommerce platforms in India. Services also include SEO, app development, and digital marketing support."
const canonical = "https://noblekode.com/services/web-development"

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
        alt: "Noble Kode - Web Development Services",
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
}

export default function WebDevelopment() {
  return (
    <div>
      {/* Schema Code */}
      <Webpage pageName="Web Development" pageUrl={canonical} />
      <Breadcrumbs
        breadcrumbs={[
          {
            pageName: "Home",
            pageUrl: "https://noblekode.com/",
          },
          {
            pageName: "Services",
            pageUrl: "https://noblekode.com/services",
          },
          {
            pageName: "Web Development",
            pageUrl: canonical,
          },
        ]}
      />

      <WebClient />
    </div>
  )
}
