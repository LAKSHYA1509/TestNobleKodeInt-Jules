"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { RefreshCcw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

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
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">Oops!</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Something went wrong
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-8">
          We apologize for the inconvenience. Please try again or contact our support team if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
          >
            <RefreshCcw className="mr-2 h-5 w-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">Error Reference: {error.digest || "Unknown Error"}</p>
      </div>
    </div>
  )
}
