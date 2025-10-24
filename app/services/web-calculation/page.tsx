import React from 'react'
import Calculator from '@/components/Service/Webcalculation'
import CtaButton from '@/components/CtaPage/Cta';

const title = "Website Cost Calculator | Get Instant Web Development Price Quote";
const description = "Calculate your custom website development cost with our free interactive calculator. Get instant quotes for web design, development, and e-commerce solutions.";
const canonical = "https://noblekode.com/services/web-calculation";

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
        alt: "Noble Kode - Website Cost Calculator",
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

export default function Calculation() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        <main className="min-h-screen text-white py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Website Cost Calculator
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Fill in the features below and calculate custom web design price with our free website
                cost calculator.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                "*" indicates required fields
              </p>
            </div>
            <Calculator />
          </div>
          <CtaButton 
            ctaText="Need a Custom Web Calculator for Your Business?"
            buttonText="Request a Calculator"
          />
        </main>
      </div>
    )
}


