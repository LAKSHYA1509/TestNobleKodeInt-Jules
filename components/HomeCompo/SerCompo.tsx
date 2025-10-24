"use client";
import React from "react";
import { IconAppWindow } from "@tabler/icons-react";
import { FiArrowRight, FiSmartphone, FiMonitor, FiRefreshCw, FiZap, FiSettings, FiTool, FiCloud } from 'react-icons/fi';
import Link from 'next/link';
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
const services = [
    {
        title: 'Mobile App Development',
        description: 'We make easy-to-use mobile apps that help your business and keep users happy',
        icon: <FiSmartphone color="#4F46E5" />,
    },
    {
        title: 'Software Development',
        description: 'We create software to make your work faster, better, and more creative.',
        icon: <FiMonitor color="#0EA5E9" />,
    },
    {
        title: 'Digital Transformation',
        description: 'We update old systems to modern ones to help your business grow and stay strong.',
        icon: <FiRefreshCw color="#F59E42" />,
    },
    {
        title: 'Ideation And Design Strategy',
        description: 'We plan and design digital products that work well and users love.',
        icon: <FiZap color="#FACC15" />,
    },
    {
        title: 'IT Consulting',
        description: 'We give expert advice to make smart tech choices for your business.',
        icon: <FiSettings color="#22D3EE" />,
    },
    {
        title: 'DevOps',
        description: 'We improve your work process to make projects faster and better.',
        icon: <FiTool color="#A3E635" />,
    },
    {
        title: 'Cloud Managed Services',
        description: 'We take care of your cloud systems to keep them safe, fast, and affordable.',
        icon: <FiCloud color="#38BDF8" />,
    },
];

const ServicesGrid = () => {
    return (
        <div className="  dark:text-white py-16 px-4 sm:px-8 lg:px-20">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
               Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="dark:bg-zinc-900 rounded-xl dark:text-white  text-black p-6 border hover:border-black  border-gray-200  dark:border-transparent cursor-pointer dark:hover:border-gray-100 transition duration-300 shadow-md"
                    >
                        <div className="text-3xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                        <p className="text-sm text-black dark:text-white leading-relaxed">{service.description}</p>
                    </div>
                ))}
                <div>
                    <LinkPreview url="/services" className="cursor-pointer">
                        <BackgroundGradient className="bg-blue-400 flex items-center justify-center max-w-sm rounded-3xl h-52 ">
                            <p
                                className=" cursor-pointer text-white flex items-center justify-center transition  text-lg font-medium w-full"
                            >
                                Our Services <FiArrowRight size={20} />
                            </p>
                        </BackgroundGradient>
                    </LinkPreview>
                </div>
            </div>
        </div>
    );
};

export default ServicesGrid;



