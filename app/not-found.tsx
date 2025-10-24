import Link from "next/link"
import Image from "next/image"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-48 h-48 mb-8">
          <Image
            src="https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg"
            alt="Noble Kode Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 dark:text-gray-200 mb-6">YOIZAAAA</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">This is the Road not Taken</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-8">
          The page you are looking for might have been removed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
        >
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
      {/* <div className="mt-16 w-full max-w-lg">
        <h3 className="text-xl font-semibold mb-4 text-center">Looking for something else?</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Services", href: "/services" },
            { name: "About Us", href: "/about" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Blog", href: "/blog" },
            { name: "Contact", href: "/contact" },
            { name: "Free Audit", href: "/free-audit" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  )
}
