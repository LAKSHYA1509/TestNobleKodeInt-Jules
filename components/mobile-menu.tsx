'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { X, Menu, ChevronDown, ChevronUp } from 'lucide-react'

interface LinkDetail {
    name: string
    description?: string
    href?: string
}

interface MenuItem {
    name: string
    href?: string
    expandable?: boolean
    links?: LinkDetail[]
}

const menuData: MenuItem[] = [
    {
        name: "Let's Talk AI",
        href: "#"
    },
    {
        name: 'About',
        expandable: true,
        links: [
            {
                name: 'ABOUT APPINVENTIV',
                description: 'We believe in change driven by technology and innovation.',
            },
            {
                name: 'START YOUR CAREER WITH US',
                description: 'Join our team of experts to make a difference in the real world.',
            },
            {
                name: 'HOW WE WORK AND FUNCTION',
                description: "Learn about Appinventiv's product lifecycle development process.",
            },
            {
                name: 'CORE TEAM OF APPINVENTIV',
                description: 'Meet the brains behind our smooth running and powerful machine.',
            },
        ],
    },
    {
        name: 'Industries',
        expandable: true,
        links: [
            { name: 'Startup' },
            { name: 'Public Entities' },
            { name: 'Enterprises' },
        ],
    },
    {
        name: 'Services',
        expandable: true,
        links: [
            { name: 'Web Development' },
            { name: 'Mobile Apps' },
        ],
    },
    {
        name: 'Portfolio',
        href: '#portfolio'
    },
    {
        name: 'Resources',
        href: '#resources'
    }
]

export function MobileMenu({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: (open: boolean) => void }) {
    const [expanded, setExpanded] = useState<string | null>(null)

    const toggleExpand = (name: string) => {
        setExpanded(expanded === name ? null : name)
    }

    const closeMenu = () => {
        onOpenChange(false)
        setExpanded(null)
    }

    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent
                side="right"
                className="w-[350px] p-0 flex flex-col h-full"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <div className="flex items-center gap-2">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6 17L16 3h2l-10 14h10" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-xl font-semibold">appinventiv</span>
                    </div>
                    <Button size="icon" variant="ghost" onClick={closeMenu}>
                        <X className="h-6 w-6" />
                    </Button>
                </div>

                {/* Menu Content */}
                <div className="flex-grow overflow-y-auto">
                    {menuData.map((item) => (
                        <div key={item.name} className="border-b">
                            <div
                                className="flex items-center justify-between px-6 py-4 cursor-pointer"
                                onClick={() => item.expandable ? toggleExpand(item.name) : closeMenu()}
                            >
                                <span className={`text-lg font-medium ${expanded === item.name ? 'text-blue-600' : ''}`}>
                                    {item.name}
                                </span>
                                {item.expandable ? (
                                    expanded === item.name ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-500" />
                                ) : (
                                    item.href && <Link href={item.href} className="absolute inset-0" />
                                )}
                            </div>

                            {item.expandable && expanded === item.name && (
                                <div className="px-6 pb-4 space-y-4 transition-all duration-300">
                                    {item.links?.map((link, index) => (
                                        <div key={index} className="border-b pb-3">
                                            <h4 className="text-sm font-semibold uppercase text-black">
                                                {link.name}
                                            </h4>
                                            {link.description && (
                                                <p className="text-sm text-gray-600 mt-1">
                                                    {link.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="p-6 border-t">
                    <Button className="w-full bg-blue-600 text-white text-base py-3 rounded-md">
                        CONTACT US
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}

// Trigger Button
export function MobileMenuTrigger({ onOpenChange }: { onOpenChange: (open: boolean) => void }) {
    return (
        <Button
            onClick={() => onOpenChange(true)}
            variant="ghost"
            size="icon"
            className="lg:hidden text-black"
        >
            <Menu className="h-6 w-6" />
        </Button>
    )
}
