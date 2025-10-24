import PrivacyPolicy from "@/components/privacy-policy"
import { Webpage, Breadcrumbs } from "@/components/schemacode"

const title = "Privacy Policy | Noble Kode";
const description = "Privacy Policy for Noble Kode - Learn how we collect, use, and protect your personal information.";
const canonical = "https://noblekode.com/policies";

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
        alt: "Noble Kode - Privacy Policy",
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

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Schema Code */}
      <Webpage pageName="Privacy Policy" pageUrl={canonical} />
      <Breadcrumbs
        breadcrumbs={[
          {
            pageName: "Home",
            pageUrl: "https://noblekode.com/"
          },
          {
            pageName: "Privacy Policy",
            pageUrl: canonical
          }
        ]} />

      <PrivacyPolicy />
    </>
  );
}
