"use client"
import { motion, AnimatePresence } from "framer-motion"
import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MegaMenu, ServicesMegaMenu, IndustriesMegaMenu, PortfolioMegaMenu } from "@/components/Megamenu/mega-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navServicename = [
        {
            name: "Blog",
            link: "/blog"
        },
        {
            name: "About",
            link: "/about"
        },
    ]

    return (
        <header className="sticky top-0 z-50 bg-black backdrop-blur-sm p-5  ">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">

                        <div className="w-20 h-20  rounded-lg flex items-center justify-center">
                            <span className=" font-bold text-sm">  <img src="/android-chrome-512x512.png" alt="Noblekode" /> </span>
                        </div>

                    </Link>
                    {/* Desktop Navigation with Mega Menus */}
                    <nav className="hidden lg:flex items-center gap-2">
                        <MegaMenu trigger="Services">
                            <ServicesMegaMenu />
                        </MegaMenu>
                        <MegaMenu trigger="Industries">
                            <IndustriesMegaMenu />
                        </MegaMenu>
                        <MegaMenu trigger="Portfolio">
                            <PortfolioMegaMenu />
                        </MegaMenu>
                        {Array.isArray(navServicename) && (
                            navServicename
                                .filter((serviceName) => typeof serviceName.link === "string")
                                .map((serviceName, i) => {
                                    return <div key={i}>
                                        <Link
                                            href={serviceName.link as string}
                                            className="px-4 py-2 text-white hover:text-blue-200 transition-colors duration-200 relative group"
                                        >
                                            {serviceName.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
                                        </Link>
                                    </div>
                                })
                        )}
                        
                    </nav>
                    {/* Desktop Action Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            variant="outline"
                            onClick={() => {
                                window.open("/contact")
                            }}
                            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-200"
                        >
                            Start Project
                        </Button>

                    </div>

                    {/* Mobile Menu */}
                    <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                </div>
            </div>
        </header>
    )
}

export function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }: any) {
    const [openSection, setOpenSection] = useState<string | null>(null)
    const toggleSection = (section: string) => {
        setOpenSection(prev => (prev === section ? null : section))
    }
    const mobileMenuText = [
        {
            navName: { label: "Service", href: "/services" },
            subItems: [
                { label: "Web Development", href: "/services/web-development" },
                { label: "Mobile Apps", href: "/services/app-development" },
                { label: "Graphic Designing", href: "/services/graphic-designing" },
                { label: "Digital Marketing", href: "/services/digital-marketing" },
                { label: "Project Management", href: "/services/project-management" },
                { label: "Product Prototyping", href: "/services/product-prototyping" },    
            ],
        },
        {
            navName: { label: "About", href: "/about" },
            subItems: [
                { label: "Company Overview", href: "/about" },
                { label: "Our Team", href: "/about" },
                { label: "Careers", href: "/career" },
            ],
        },
        {
            navName: { label: "Industries", href: "/industries" },
            subItems: [
                { label: "Healthcare", href: "/case-study/health-care" },
                { label: "E-commerce", href: "/case-study/e-commerce" },
                { label: "Blockchain", href: "/case-study/blockchain" },
                { label: "Education", href: "/case-study/education" },
                { label: "Teaching", href: "/case-study/teaching" },
            ],
        },
        {
            navName: { label: "Portfolio", href: "/portfolio" },
            subItems: [
                { label: "Hommy", href: "/portfolio/hommy" },
                { label: "Tbond", href: "/portfolio/tbond" },
            ],
        },
        {
            navName: { label: "Blog", href: "/blog" },
            subItems: [],
        },
    ];
    return (
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                    <Menu className="h-10 w-10" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0 bg-black">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b">
                        <div className="flex items-center gap-2">
                            <img src="/android-chrome-512x512.png" alt="tbondlogo" className="w-10" />
                            <p className="text-xl text-white">Noble Kode</p>
                        </div>
                    </div>
                    {/* Navigation Content */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                        {/* Accordion Section: Services */}
                        <div>
                            {mobileMenuText.map((item, i) => (
                                <React.Fragment key={i}>
                                    <div
                                        className="w-full flex justify-between items-center text-lg font-medium text-white py-2 cursor-pointer"
                                        onClick={() => {
                                            if (item.subItems.length > 0) {
                                                toggleSection(item.navName.label);
                                            } else {
                                                window.location.href = item.navName.href;
                                            }
                                        }}
                                    >
                                        <span>{item.navName.label}</span>
                                        {item.subItems.length > 0 && (
                                            <span className="text-2xl">
                                                {openSection === item.navName.label ? (
                                                    <span className="text-blue-600 text-xl"> - </span>
                                                ) : (
                                                    "+"
                                                )}
                                            </span>
                                        )}
                                    </div>
                                    <AnimatePresence initial={false}>
                                        {openSection === item.navName.label && (
                                            <motion.div
                                                key={item.navName.label}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden my-2 pl-3 flex-col flex space-y-3 text-sm text-white"
                                            >
                                                {item.subItems.map((sub, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={sub.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    {/* Footer Actions */}
                    <div className="p-6 border-t border-gray-200 space-y-3">
                        <Link href="/contact">
                        <Button variant="outline" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                            Get Quote
                        </Button>
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}