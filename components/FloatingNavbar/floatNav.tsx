import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconExchange,
    IconHome,
    IconUser,
    IconMail,
    IconNewSection,
    IconTerminal2,
    // Add these if you want more relevant icons:
    // IconGift,
    // IconCalculator,
} from "@tabler/icons-react";

export default function FloatNav() {
    const links = [
        { title: "Home", icon: <IconHome />, href: "/" },
        { title: "About", icon: <IconUser />, href: "/about" },
        { title: "Blog", icon: <IconNewSection />, href: "/blog" },
        { title: "Offer", icon: <IconExchange />, href: "/contact" }, // or use <IconGift /> if imported
        { title: "Web Calculation", icon: <IconTerminal2 />, href: "/services/web-calculation" }, // or use <IconCalculator /> if imported
        { title: "Services", icon: <IconExchange />, href: "/services" },
        { title: "Contact", icon: <IconMail />, href: "/contact" },
    ];
    return (
        <div className="flex items-center justify-center placeholder:w-full">
            <FloatingDock
                mobileClassName="translate-x-20"
                items={links}
            />
        </div>
    )

}
