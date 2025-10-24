"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function WhatsAppPopup() {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappUrl = "https://wa.me/919717434098?text=Hello%2C%20how%20can%20we%20help%20you%3F"

  return (
    <div
      className="fixed  bottom-28 right-4 sm:bottom-10 sm:right-12 z-50 flex flex-col items-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popup Box */}
      {isHovered && (
        <div className="mb-2 w-64 sm:w-72 rounded-xl shadow-lg border">
          <div className="bg-green-600 text-white font-semibold px-4 py-2 rounded-t-xl flex justify-between items-center">
            <span>Chat with us on WhatsApp!</span>
            <button onClick={() => setIsHovered(false)} className="text-white text-xl">
              &times;
            </button>
          </div>
          <div className="px-4 py-3">
            <p className="bg-gray-100 p-2 text-black rounded-md text-sm">Hello, how can we help you?</p>
          </div>
          <div className="px-4 pb-4">
            <Link
              href={whatsappUrl}
              target=""
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md text-center hover:bg-green-600 block text-sm"
            >
              Send Message
            </Link>
          </div>
        </div>
      )}

      {/* WhatsApp Icon */}
      <Image
        src="/icons/whatsapp.svg"
        alt="WhatsApp"
        width={60}
        height={60}
        className="rounded-full scale-75 sm:scale-100 shadow-lg hover:scale-110 transition-transform cursor-pointer"
      />
    </div>
  )
}
