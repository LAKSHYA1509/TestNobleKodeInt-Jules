
import { Metadata } from "next";



interface MetaProps {
  title: string;
  description: string;

  // OpenGraph fields
  openGraphTitle: string;
  openGraphDescription: string;
  openGraphUrl?: string;

  // Image(s)
  images ?: {
    imgSrc?: string;
  }[];

  // Twitter metadata
  twitterTitle: string;
  twitterDescription: string;
  twitterImgSrc?: string;

  // Canonical link
  canonical: string;
}


export default function Meta(
{  title,
  description,
  openGraphTitle,
  openGraphDescription,
  openGraphUrl,
  images,
  twitterTitle,
  twitterDescription,
  twitterImgSrc,
  canonical} : MetaProps
) {
  const metadata: Metadata = {
    title: title,
    description: description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: openGraphUrl|| "https://noblekode.com/services/digital-marketing",
      siteName: "Noble Kode",
      title:   openGraphTitle,
      description: openGraphDescription,
  
      images: [
        {
          url:   "https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg",
          width: 1200,
          height: 630,
          alt: "Noble Kode - Software Development and Digital Marketing Company",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description:  twitterDescription,
      images: twitterImgSrc|| "https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg",
      creator: "@noblekode",
    },
    alternates: {
      canonical:  canonical || "https://noblekode.com/",
    },
  };

  return metadata;
}

