
import { Card, CardDescription, CardContent, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import CtaButton from "@/components/CtaPage/Cta";
import Image from 'next/image';
import { Webpage, Breadcrumbs } from "@/components/schemacode";

const title = "Case Studies | Success Stories | Web & App Development Projects | Noble Kode";
const description = "Explore our successful case studies and client success stories. See how we've helped businesses achieve their goals through web development, app development, and digital marketing.";
const canonical = "https://noblekode.com/case-study";

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
        alt: "Noble Kode - Case Studies",
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

export default function CaseStudy() {
    return (
        <>
            {/* Schema Code */}
            <Webpage pageName="Case Studies" pageUrl={canonical} />
            <Breadcrumbs
                breadcrumbs={[
                    {
                        pageName: "Home",
                        pageUrl: "https://noblekode.com/"
                    },
                    {
                        pageName: "Case Studies",
                        pageUrl: canonical
                    }
                ]} />

            <Banner />
            <Cards />
            <IndutryGrid />
            <Numbers />
            <CtaButton
                ctaText="Ready to Start Your Own Success Story?"
                buttonText="Share My Challenge"
            />
        </>
    )
}






function Banner() {
    return <div className=" relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-700 bg-clip-text text-centertext-7xl font-bold leading-none tracking-tighter text-transparent text-7xl">
            Retro Grid
        </span>

        {/* <RetroGrid /> */}
    </div>
}


function Cards() {


    const cardData = [{
        description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores doloremque modi fugiat corrupti. Animi saepe deserunt iste in optio quaerat qui cupiditate laborum. Ab, in amet veniam exercitationem corporis dolor.",
        title: " Project One",

        img: "https://plus.unsplash.com/premium_photo-1661614203934-aa0ab269e4f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    }, {
        description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores doloremque modi fugiat corrupti. Animi saepe deserunt iste in optio quaerat qui cupiditate laborum. Ab, in amet veniam exercitationem corporis dolor.",
        title: " Project One",

        img: "https://plus.unsplash.com/premium_photo-1661614203934-aa0ab269e4f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    }, {
        description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores doloremque modi fugiat corrupti. Animi saepe deserunt iste in optio quaerat qui cupiditate laborum. Ab, in amet veniam exercitationem corporis dolor.",
        title: " Project One",

        img: "https://plus.unsplash.com/premium_photo-1661614203934-aa0ab269e4f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    }

    ]



    return <div className="mx-auto my-16 px-4 sm:px-6 lg:px-24">
        <div className="z-10 mt-6 flex flex-wrap justify-center gap-8">
            {cardData.map((items, idx) => (
                <Card
                    key={idx}
                    className="w-full sm:w-80 lg:w-96"
                >
                    <Image
                        src={items.img}
                        alt="Hello"
                        width={256}
                        height={160}
                        className="w-full h-auto object-cover rounded-t-lg"
                    />

                    <CardContent className="mt-5 flex flex-col gap-3">
                        <CardTitle>{items.title}</CardTitle>
                        <CardDescription>{items.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>


}


function IndutryGrid() {
    const images = [
        {
            src: "https://plus.unsplash.com/premium_photo-1661614203934-aa0ab269e4f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
            alt: "Factory interior",
            big: true,
            text: "Factory Interior",
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1661614203934-aa0ab269e4f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
            alt: "Workshop tools",
            text: "Workshop Tools",
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1661614203934-aa0ab269e4f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
            alt: "Textile machinery",
            text: "Textile Machinery",
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1661614203934-aa0ab269e4f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
            alt: "Pipes and valves",
            text: "Pipes and Valves",
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1661614203934-aa0ab269e4f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
            alt: "Extra machinery",
            text: "Extra Machinery",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 max-w-7xl mx-auto">
            {images.map((img, i) => (
                <div
                    key={i}
                    className={`${img.big ? "md:col-span-2" : ""} relative group overflow-hidden rounded-lg`}
                >
                    <Image
                        src={img.src}
                        alt={img.alt}
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <Link href={"#"}>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"  >
                            <p className="text-white text-lg font-semibold">{img.text}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}



function Numbers() {

    const boxText = [
        { number: "2K+", label: "Projects Completed" },
        { number: "500+", label: "Happy Clients" },
        { number: "500+", label: "Happy Clients" },
        { number: "500+", label: "Happy Clients" },
    ];

    return <>
        <div className="mt-16">
            <div className="h-96 relative w-full">
                {/* Background image */}
                <Image
                    src="https://plus.unsplash.com/premium_photo-1661614203934-aa0ab269e4f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="android"
                    fill
                    className="w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50 z-10"></div>

                <div className="absolute inset-0 z-20 flex justify-around items-center text-white">
                    {boxText.map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            {/* Outer border circle */}
                            <div className="border-2 border-yellow-400 flex items-center justify-center w-32 h-32 rounded-full">
                                {/* Inner filled circle */}
                                <div className="bg-yellow-400 w-20 h-20 flex items-center justify-center rounded-full text-white font-bold text-xl">
                                    {item.number}
                                </div>
                            </div>

                            {/* Label */}
                            <p className="mt-3 text-lg">{item.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    </>
}