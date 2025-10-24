// Alternative version with actual logo styling
export function PartnerSectionWithLogos() {
    const partners = [
        // Row 1
        { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120&text=Microsoft" },
        { name: "Google", logo: "/placeholder.svg?height=60&width=120&text=Google" },
        { name: "Amazon", logo: "/placeholder.svg?height=60&width=120&text=Amazon" },
        { name: "Github", logo: "/placeholder.svg?height=60&width=120&text=Github" },
        { name: "DigitalOcean", logo: "/placeholder.svg?height=60&width=120&text=DigitalOcean" },

        // Row 2
        { name: "Sentry", logo: "/placeholder.svg?height=60&width=120&text=Sentry" },
        { name: "Atlassian", logo: "/placeholder.svg?height=60&width=120&text=Atlassian" },
        { name: "DataDog", logo: "/placeholder.svg?height=60&width=120&text=DataDog" },
        { name: "NVIDIA", logo: "/placeholder.svg?height=60&width=120&text=NVIDIA" },
        { name: "PostMan", logo: "/placeholder.svg?height=60&width=120&text=PostMan" },

        // Row 3 // Only developer tools name
        { name: "SUPERSHE", logo: "/placeholder.svg?height=60&width=120&text=SUPERSHE" },
        { name: "VS Code", logo: "/placeholder.svg?height=60&width=120&text=VS+Code" },
        { name: "OpenAI", logo: "/placeholder.svg?height=60&width=120&text=OpenAI" },
        { name: "AWS", logo: "/placeholder.svg?height=60&width=120&text=AWS" },
        { name: "AZURE", logo: "/placeholder.svg?height=60&width=120&text=AZURE" },
    ]

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-6xl mx-auto">
                      Our Partner
                    </h2>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group flex items-center justify-center h-20 w-full max-w-[200px] transition-all duration-300 hover:scale-110"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div
                                    className="text-gray-400 group-hover:text-white transition-colors duration-300 text-center"
                                >
                                    {partner.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional: Add a subtle animation */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-lg">Trusted by industry leaders worldwide</p>
                </div>
            </div>
        </section>
    )
}
