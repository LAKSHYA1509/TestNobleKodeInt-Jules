const title = "Free Website Audit | Get Detailed Website Analysis | Noble Kode";
const description = "Get a comprehensive free website audit and analysis. Identify performance issues, SEO problems, and improvement opportunities for your website.";
const canonical = "https://noblekode.com/free-audit";

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
        alt: "Noble Kode - Free Website Audit",
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

export default function FreeAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}