import React from 'react'
import AppDevelopmentClient from './appDevelopmentClient'
import { Webpage, Breadcrumbs } from "@/components/schemacode"
import PageBreadcrumb from '@/components/Breadcrumbs/bread';
  
const title = "Mobile App Development Services in India"
const description = "Get reliable mobile app development services in India. Our skilled team builds smooth, on-time mobile apps to help your business grow and reach more users.";
const canonical = "https://noblekode.com/services/app-development";

export const metadata = {
  title: title,
  description: description
  ,
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
    description: description,
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
    canonical: canonical,
  },
};


import CtaButton from '@/components/CtaPage/Cta';

export default function AppDevelopment() {
  return (
    <div >
      <AppDevelopmentClient />
      {/* Schema */}
      <Webpage pageName="App develoment " pageUrl={canonical} />
      <Breadcrumbs breadcrumbs={[{
        pageName: "App Development",
        pageUrl: canonical
      },
      {
        pageName: "Home",
        pageUrl: "https://noblekode.com/"
      },
    ]} />
    <CtaButton 
      ctaText="Ready to Launch Your Next App?"
      buttonText="Build My App"
    />
      <PageBreadcrumb items={[{ name: "Home", href: "/" } , {name :"App Development", href:"/services/app-development"}]} />
    </div>
  )
}
