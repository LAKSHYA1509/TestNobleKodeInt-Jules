"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        icon?: React.ReactNode;
        action?: React.ReactNode;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0,
        );
        setActiveCard(closestBreakpointIndex);
    });

    return (
        <motion.div
            className="relative flex h-[40rem] justify-around overflow-y-auto rounded-md p-10 bg-black hide-scrollbar"
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-6xl h-32">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-kg mt-10 max-w-sm text-slate-300"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
        
            <div
                className={cn(
                    "sticky top-10  h-fit w-96 overflow-hidden rounded-md bg-zinc-900/80 lg:block p-6 flex flex-col justify-center",
                    contentClassName,
                )}
            >
                <div className="flex items-center mb-4">
                    <span className="mr-3 text-3xl">{content[activeCard].icon ?? "🧠"}</span>
                    <span className="text-xl font-semibold text-white">{content[activeCard].title}</span>
                </div>
                <div className="text-slate-300 mb-4">{content[activeCard].description}</div>
                <div className="ml-auto">{content[activeCard].action ?? <span>→</span>}</div>
            </div>
        </motion.div>
    );
};
