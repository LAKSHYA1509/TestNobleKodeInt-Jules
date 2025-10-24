import Link from "next/link"
import Image from "next/image"



const img = [
  {
    src: "https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/facebook_cleyba.svg",
    alt: "facebook Logo",
    link: "https://www.facebook.com/profile.php?id=61573202552281",
  },
  {
    src: "https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/instagram_u8stdr.svg",
    alt: "Instagram Logo",
    link: "https://instagram.com/noblekode",
  },
  {
    src: "https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320432/linkedin-svgrepo-com_jaflhh.svg",
    alt: "Linkdin Logo",
    link: "https://www.linkedin.com/in/noble-kode/",
  },
]

export function Logo() {
  return (
    <section>
      <Link href="/" className="flex items-center gap-2 flex-col">
        <Image
          src="https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg"
          alt="Noble Kode Logo"
          width={100}
          height={100}
          className="w-40 h-40"
        />
      </Link>
    </section>
  )
}

export default function Quicklinks() {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <h3 className="text-lg font-semibold mb-3 text-secondary">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link> 
        </li>
        <li>
          <Link href="/services" className="hover:text-primary transition-colors">
            Service
          </Link>
        </li>
        
        <li>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export function ResourcesFooter() {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <h3 className="text-lg font-semibold mb-3 text-secondary">Resources</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/industry" className="hover:text-primary transition-colors">
            Industry
          </Link>
        </li>
        <li>
          <Link href="/policies" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </li>
          <li>
          <Link href="/career " className="hover:text-primary transition-colors">
            Career
          </Link>
        </li>
      </ul>
    </div>
  )
}

export function Contact() {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <h3 className="text-lg font-semibold mb-3 text-secondary">Contact Us</h3>
      <ul className="space-y-2 text-sm">
        <li>
          Email:{" "}
          <a href="mailto:noblekode@gmail.com" className="hover:text-primary transition-colors">
            noblekode@gmail.com
          </a>
        </li>
        <li>
          Phone:{" "}
          <a
            href="https://wa.me/919717434098?text=Hello%2C%20how%20can%20we%20help%20you%3F"
            className="hover:text-primary transition-colors"
          >
            +91-9717434098
          </a>
        </li>
      </ul>
    </div>
  )
}

export function SocialIcons() {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <h3 className="text-lg font-semibold mb-3 text-secondary">Follow Us</h3>
      <div className="flex mt-2 flex-wrap justify-center sm:justify-start gap-2">
        {img.map(({ src, alt, link }) => (
          <div key={src} className="p-2">
            {link ? (
              <Link href={link} target="" rel="noopener noreferrer">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={alt}
                  width={32}
                  height={32}
                  className="w-8 h-8 hover:scale-110 transition-transform"
                />
              </Link>
            ) : (
              <Image src={src || "/placeholder.svg"} alt={alt} width={32} height={32} className="w-8 h-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
