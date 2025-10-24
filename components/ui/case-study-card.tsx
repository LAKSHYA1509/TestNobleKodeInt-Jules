"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface CaseStudy {
    id: string
    title: string
    client: string
    description: string
    image: string
    logo: string
    category: string
    industry: string
    tags: string[]
}

interface CaseStudyCardProps {
    caseStudy: CaseStudy
    index: number
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
        >
            <Link href={`/portfolio/${caseStudy.id}`} className="block">
                {/* Main Image */}
                <div className="relative h-80 lg:h-96 overflow-hidden">
                    <Image
                        src={caseStudy.image || "/placeholder.svg"}
                        alt={caseStudy.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                    {/* Brand Logo - Bottom Left */}
                    <div className="absolute bottom-6 left-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <Image
                                src={caseStudy.logo || "/placeholder.svg"}
                                alt={`${caseStudy.client} logo`}
                                width={80}
                                height={40}
                                className="object-contain "
                            />
                        </div>
                    </div>

                    {/* Category Badge - Top Right */}
                    <div className="absolute top-6 right-6">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                            {caseStudy.client}
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
