"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { usePathname } from "next/navigation"
import { clsx } from "clsx"




const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathName = usePathname()




  const isActiveServices =
    pathName && pathName.startsWith("/services/") && pathName !== "/services/web-calculation"




  const StaticLinks = [
    ["Home", "/"],
    ["Portfolio", "/portfolio"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
    ["Web Calculation", "/services/web-calculation"],
  ]




  const ServiceLinks = [
    ["App Development", "/services/app-development"],
    ["Web Development", "/services/web-development"],
    ["Digital Marketing", "/services/digital-marketing-services-in-delhi"],
    ["Graphic Designing", "/services/graphic-designing"],
    ["Product Prototyping", "/services/product-prototyping"],
    ["Project Management", "/services/project-management"],
  ]




  return (
    <nav className="sticky py-4 top-0 z-50 dark:bg-black bg-slate-50 border-b border-border">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center lg:px-12">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg"
                alt="Noble Kode Logo"
                width={100}
                height={100}
                className="w-32 h-32"
              />
            </Link>
          </div>




          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Static Links */}
            {StaticLinks.map(([name, path]) => (
              <Link
                key={path}
                href={path}
                className={clsx(
                  "relative px-3 py-2 text-[1rem] font-medium text-foreground/60 hover:text-foreground group dark:text-white transition-all duration-300 ease-out",
                  pathName === path && "text-primary font-semibold"
                )}
              >
                {name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            ))}




            {/* Services with Dropdown */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={clsx(
                  "relative px-3 py-2 text-[1rem] font-medium text-foreground/60 hover:text-foreground transition-colors group dark:text-white",
                  isActiveServices && "text-primary font-semibold"
                )}
              >
                Services
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
              </button>




              {servicesOpen && (
                <div className="absolute left-0 top-full mt-0 w-56 bg-background shadow-lg rounded-md z-50 transition-all duration-200">
                  <ul className="py-2 bg-slate-50 dark:bg-gray-800 dark:text-white rounded-md">
                    {ServiceLinks.map(([label, href]) => (
                      <li key={href} className="border-b border-grey-300 last:border-b-0">
                        <Link
                          href={href}
                          className={clsx(
                            "block px-4 py-2 text-sm hover:bg-accent hover:text-primary transition-colors",
                            pathName === href &&
                              "text-primary font-semibold bg-gray-100 dark:bg-gray-700 dark:text-white"
                          )}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>




            <div className="flex pl-24">
              {/* Free Audit Button */}
              <Link
                href="/free-audit"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300"
              >
                Free site audit
              </Link>
              <div className="md:block pl-12">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}




export default Navbar