"use client"


import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog-posts'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Webpage, Breadcrumbs } from '../../../components/schemacode'

import parse from 'html-react-parser';

import { CldImage } from 'next-cloudinary'
import Image from 'next/image'

interface BlogPageProps {
  params: {
  blogSlug : string
  }
}

export default function BlogPost({ params }: BlogPageProps) {


  const post = blogPosts.find((post) => post.slug === params.  blogSlug)

  
  if (!post) {
  notFound()
      
  }

  return (
    <>
      <article className="text-white-600 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* * Schema Code  */}
        <Webpage pageName={post.title} pageUrl={`https://noblekode.com/blog/${post.slug}`} />
        <Breadcrumbs
          breadcrumbs={[
            { pageName: "Blog", pageUrl: "https://noblekode.com/blog" },
            { pageName: post.title, pageUrl: `https://noblekode.com/blog/${post.slug}` }
          ]}
        />

        {/* Blog Header */}
        <header className="mb-8">
          <div className="relative w-full h-60 sm:h-60 md:h-80 mb-8 rounded-lg overflow-hidden">
            {post.image && post.image.includes('cloudinary.com') ? (
              <CldImage
                src={post.image}
                alt={post.title}
                fill
                className="object-contain"
                priority
              />
            ) : (
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-contain"
                priority
              />
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-muted-foreground text-sm">
            <span>{post.author}</span>
            <span className="hidden sm:inline">•</span>
            <time dateTime={post.date}>{post.date}</time>
            <span className="hidden sm:inline">•</span>
            <span>{post.readTime}</span>
          </div>
        </header>


        {/* Blog Content */}
        <div className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none ">
          { parse(post.content)}
        </div>

        {/* Blog Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold text-muted-foreground">Category</h2>
              <p className="mt-1">{post.category}</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Add social share buttons or other actions here */}
            </div>
          </div>
        </footer>
       {/* Breadcrumb Navigation */}
      <Breadcrumb className="mb-8 mt-12  ">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title.slice(0,24)+"..." }</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </article>
    </>
  )
}
