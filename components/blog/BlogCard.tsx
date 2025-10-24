import { BlogPost } from '@/types/blog';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: {
    default: "Best App & Web Development Companies | Marketing Tips",
    template: "%s | Noble Kode"
  },
  description: "Discover the best app and top web development companies. Learn how to explain digital marketing in simple terms for real business growth.",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        href: "/images/logo.png",
      },
    ],
    apple: [
      {
        url: "/images/logo.png",
        href: "/images/logo.png",
      },
    ],
  },
  keywords: [
    "software development",
    "web development", 
    "digital marketing",
    "management consulting",
    "IT solutions",
    "mobile app development",
    "technology consulting",
    "best app development companies",
    "explain digital marketing", 
    "top web development companies"
  ],
  authors: [{ name: "Noble Kode" }],
  creator: "Noble Kode",
  publisher: "Noble Kode",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {

    type: 'website',
    locale: 'en_US',
    url: 'https://noblekode.com/blog',
    siteName: 'Noble Kode',
    title: 'Best App & Web Development Companies | Marketing Tips',
    description: 'Discover the best app and top web development companies. Learn how to explain digital marketing in simple terms for real business growth.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 627,
        alt: 'Noble Kode - Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Management Services & Hybrid App Frontend Experts',
    description: 'Discover reliable management services, hybrid mobile apps, and front end developers ready to build smart, user-friendly solutions for your business.',
    images: ['/images/logo.png'],
    creator: '@noblekode',
  },
  alternates:{
  canonical : "https://noblekode.com/about"
}

};



interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return ( <>


    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full text-black overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-48 w-full">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover fit"
            priority={false}
          />
        </div>
        <CardHeader className="p-4 md:p-6">
          <div className="flex text-black flex-wrap items-center gap-2">
            <Badge variant="secondary" className="text-black bg-primary/10 text-primary hover:bg-primary/20">
              {post.category}
            </Badge>
            <span className="text-xs text-black sm:text-sm text-muted-foreground">{post.readTime}</span>
          </div>
          <h3 className="text-lg md:text-xl text-black font-semibold line-clamp-2 mt-2">{post.title}</h3>
        </CardHeader>
        <CardContent className="p-4 md:p-6 pt-0">
          <p className="text-black text-muted-foreground text-sm line-clamp-3">{post.description}</p>
        </CardContent>
        <CardFooter className="p-4 md:p-6 flex items-center justify-between border-t">
          <span className="text-xs text-black sm:text-sm font-medium">{post.author}</span>
          <span className="text-xs text-black sm:text-sm text-muted-foreground">{post.date}</span>
        </CardFooter>
      </Card>
    </Link>

</>  )
}