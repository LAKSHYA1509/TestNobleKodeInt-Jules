"use client"

import { useRouter, useSearchParams } from "next/navigation"

import PageBreadcrumb from "@/components/Breadcrumbs/bread"
import FAQ from "@/components/FAQ"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumbs, Webpage } from "../../components/schemacode"


// Import the data
import { AlertBanner } from "@/components/alert/Alert"
import { BlogCard } from "@/components/blog/BlogCard"
import { blogPosts } from "@/data/blog-posts"
import { blogFaq } from "@/data/faq"
import { useEffect, useState } from "react"
import CtaButton from "@/components/CtaPage/Cta"

interface BlogPost {
  title: string;
  description?: string;
  category: string;
  slug: string;
  image: string;
  date: string;
  readTime: string;
}

export default function BlogPage() {

  const latestPosts = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5)

  const searchParams = useSearchParams()

  const query = searchParams.get("query")?.toLowerCase() || ""

  // Modified filterPosts to include only "Web Development" posts when no search query is active
  const filterPosts = blogPosts.filter((post: BlogPost) => post.title.toLocaleLowerCase().includes(query) || post.category.toLowerCase().includes(query))



  // console.log(filterPosts)

  // Get featured post (first post)
  const featuredPost = latestPosts[0]

  // Get recent posts for featured grid
  const featuredPosts = blogPosts.slice(1, 5)

  // Get latest posts for sidebar
  // const latestPosts = blogPosts.slice(0, 4)
  // const filterPosts = blogPosts.slice(0, 8)


  // Get categories
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  // Group posts by category
  const postsByCategory = categories.reduce(
    (acc, category) => {
      acc[category] = blogPosts.filter((post) => post.category === category)
      return acc
    },
    {} as Record<string, typeof blogPosts>,
  )

  return (
    <>
      {/* Schema Code */}
      <Webpage pageName="Blog" pageUrl="https://noblekode.com/blog" />
      <Breadcrumbs
        breadcrumbs={[
          { pageName: "Home", pageUrl: "https://noblekode.com" },
          { pageName: "Blog", pageUrl: "https://noblekode.com/blog" },
        ]}
      />

      <main className="min-h-screen bg-gray-50">

        {/* Alert */}

      <AlertBanner link="/portfolio">
        <span>💼 </span>
   See How We’ve Transformed Ideas into Digital Solutions
</AlertBanner>
        {/* Search */}
        <Search />



        {/* Hero Section: Only show when no search query is active */}
        {query === "" && (
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                    <Tag className="w-4 text-black h-4 mr-2" />
                    {featuredPost.category}
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">{featuredPost.title}</h1>
                  <p className=" text-base text-gray-600 leading-relaxed">{featuredPost.description ?? ""}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button size="lg" className=" mt-5 bg-blue-600 hover:bg-blue-700 text-white">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br  rounded-2xl p-8 shadow-2xl">
                    <Image
                      src={featuredPost.image}
                      alt="Mobile App Development Illustration"
                      width={500}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Featured Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterPosts.length === 0 ? (
                <p className="text-center text-gray-500 col-span-full text-lg">
                  No blog found for your query.
                </p>
              ) : (
                filterPosts.slice(0,3).map((post, i) => (
                  <Card key={i} className="group hover:shadow-lg transition-shadow  duration-300">
                    <CardHeader className="p-0">
                      <div className="h-fit rounded-t-lg p-3 flex items-center justify-center">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={120}
                          height={120}
                          className="w-full object-cover h-64"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3 text-black">
                        {post.category}
                      </Badge>
                      <CardTitle className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600 mb-4">
                        {(post.description || "").substring(0, 100)}...
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </section>


        {/* Latest Posts with Sidebar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12  max-md:grod-cols-2 ">
              {/* Latest Posts */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl text-black font-bold mb-8">Latest</h2>
                <div className="space-y-6">
                  {latestPosts.map((post, index) => (
                    <Card key={index} className="group text-black hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex gap-6 text-black max-sm:flex-col ">
                          <div
                            className={`  w-40 h-40 text-black  max-sm:w-fit  max-sm:h-fit rounded-lg flex-shrink-0 flex items-center justify-center`}
                          >
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={40}
                              height={40}
                              className="w-full  object-cover max-h-fit"
                            />
                          </div>
                          <div className="flex-1 py-4 max-sm:px-3 ">
                            <Badge variant="outline" className="mb-2 text-black text-xs">
                              {post.category}
                            </Badge>
                            <h3 className="font-semibold text-black text-lg mb-2 group-hover:text-blue-600 transition-colors">
                              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">{post.description?.substring(0, 120) || "No excerpt available"}...</p>

                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8  mt-16 max-md:hidden ">
                {/* Categories */}
                <Card className="max-md:hidden" >
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                        >
                          <Link
                            href={`/blog#${category.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                          >
                            {category}
                          </Link>
                          <span className="text-sm text-gray-500">({postsByCategory[category]?.length || 0})</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card className="max-md:hidden" >
                  <CardHeader>
                    <CardTitle className="text-lg">Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex text-black flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "Mobile App",
                        "Web Development",
                        "UI/UX",
                        "JavaScript",
                        "TypeScript",
                        "Node.js",
                      ].map((tag, i) => (

                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs text-black hover:bg-blue-50 hover:border-blue-200 cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>



              </div>
            </div>
          </div>
        </section>

        {/* Category Sections */}
        {Object.entries(postsByCategory)
        
          .map(([category, posts,]) => {

            return <section id={`${category.toLowerCase().replace(/\s+/g, "-")}`}   key={category} className={`py-16 bg-gray-50`}   >
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8 max-md:flex-col max-sm:gap-5 ">
                  <h2    className="text-3xl text-black font-bold">{category}</h2>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post, index) => (
                    <BlogCard key={index} post={post} />
                  ))}
                </div>
              </div>
            </section>
          }
          )}

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container text-black mx-auto px-4">
            <FAQ faq={blogFaq} />
          </div>
        </section>

        <CtaButton />
      </main>

      <PageBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
    </>
  )
}



function Search() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Set initial state from URL query param
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const query = searchParams.get("query") || ""
    setSearchTerm(query)
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmed = searchTerm.trim()
    if (trimmed) {
      router.push(`/blog?query=${encodeURIComponent(trimmed)}`)
    } else {
      router.push("/blog")
    }
  }

  const handleClear = () => {
    setSearchTerm("")
    router.push("/blog")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 pt-10 max-w-xl mx-auto px-4 mb-10"
    >
      <input
        type="text"
        placeholder="Search blog..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 p-3 border rounded-md"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
      {searchTerm && (
        <button
          type="button"
          onClick={handleClear}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
        >
          Clear
        </button>
      )}
    </form>
  )
}


