"use client"
import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const TopHeader = () => {
  const [phone] = useState("+91-9717434098")
  const [email] = useState("noblekode@gmail.com")

  const socialIcons = [
    { icon: <Facebook size={16} />, href: "https://www.facebook.com/profile.php?id=61573202552281" },
    { icon: <Instagram size={16} />, href: "https://instagram.com/noblekode" },
    { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/noble-kode/" },
    { icon: <Twitter size={16} />, href: "#" },
    { icon: <Youtube size={16} />, href: "#" },
  ]

  return (
    <div className="relative bg-gradient-to-r from-accent to-primary py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-white text-sm">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-2 sm:mb-0">
            <Link className="hover:text-gray-200 transition-colors" href={`tel:${phone}`}>
              <strong>India:</strong> {phone}
            </Link>

            <Link className="hover:text-gray-200 transition-colors" href={`mailto:${email}`}>
              <strong>Email:</strong> {email}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Follow:</span>
            <div className="flex gap-3">
              {socialIcons.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target=""
                  rel="noopener noreferrer"
                  className="hover:text-gray-200 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
