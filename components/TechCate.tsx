"use client";

import React, { useState } from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiMongodb, SiGoogle, SiDribbble, SiNodedotjs, SiExpress, SiPython, SiDjango, SiFlutter, SiAndroid, SiApple, SiElectron, SiVuedotjs, SiAngular, SiTypescript, SiPhp, SiLaravel, SiPostgresql, SiMysql } from "react-icons/si";
import { FaBrain, FaMobileAlt, FaDesktop, FaServer, FaLaptopCode } from "react-icons/fa";

interface Category {
    id: string;
    name: string;
    icon: React.ReactNode;
    items: Item[];
}

interface Item {
    id: string;
    name: string;
    icon: React.ReactNode;
}

const categories: Category[] = [
    {
        id: "frontend",
        name: "Frontend",
        icon: <FaLaptopCode className="w-6 h-6 text-white" />,
        items: [
            { id: "html", name: "HTML", icon: <SiHtml5 className="w-8 h-8 text-orange-500" /> },
            { id: "css", name: "CSS", icon: <SiCss3 className="w-8 h-8 text-blue-500" /> },
            { id: "js", name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
            { id: "react", name: "React", icon: <SiReact className="w-8 h-8 text-cyan-400" /> },
            { id: "nextjs", name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-black" /> },
            { id: "vue", name: "Vue.js", icon: <SiVuedotjs className="w-8 h-8 text-green-500" /> },
            { id: "angular", name: "Angular", icon: <SiAngular className="w-8 h-8 text-red-600" /> },
            { id: "typescript", name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-blue-700" /> },
        ],
    },
    {
        id: "backend",
        name: "Backend",
        icon: <FaServer className="w-6 h-6 text-white" />,
        items: [
            { id: "node", name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 text-green-700" /> },
            { id: "express", name: "Express.js", icon: <SiExpress className="w-8 h-8 text-black" /> },
            { id: "python", name: "Python", icon: <SiPython className="w-8 h-8 text-yellow-400" /> },
            { id: "django", name: "Django", icon: <SiDjango className="w-8 h-8 text-green-800" /> },
            { id: "php", name: "PHP", icon: <SiPhp className="w-8 h-8 text-indigo-700" /> },
            { id: "laravel", name: "Laravel", icon: <SiLaravel className="w-8 h-8 text-red-600" /> },
        ],
    },
    {
        id: "fullstack",
        name: "Full Stack",
        icon: <FaLaptopCode className="w-6 h-6 text-white" />,
        items: [
            { id: "mern", name: "MERN Stack", icon: <SiReact className="w-8 h-8 text-cyan-400" /> },
            { id: "mean", name: "MEAN Stack", icon: <SiAngular className="w-8 h-8 text-red-600" /> },
            { id: "lamp", name: "LAMP Stack", icon: <SiPhp className="w-8 h-8 text-indigo-700" /> },
            { id: "jamstack", name: "JAMstack", icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
        ],
    },
    {
        id: "mobile",
        name: "Mobile Apps",
        icon: <FaMobileAlt className="w-6 h-6 text-white" />,
        items: [
            { id: "reactnative", name: "React Native", icon: <FaMobileAlt className="w-8 h-8 text-cyan-400" /> },
            { id: "flutter", name: "Flutter", icon: <SiFlutter className="w-8 h-8 text-blue-400" /> },
            { id: "android", name: "Android", icon: <SiAndroid className="w-8 h-8 text-green-600" /> },
            { id: "ios", name: "iOS", icon: <SiApple className="w-8 h-8 text-gray-800" /> },
        ],
    },
    {
        id: "native",
        name: "Native Apps",
        icon: <FaDesktop className="w-6 h-6 text-white" />,
        items: [
            { id: "electron", name: "Electron", icon: <SiElectron className="w-8 h-8 text-blue-500" /> },
            { id: "native-ios", name: "Native iOS", icon: <SiApple className="w-8 h-8 text-gray-800" /> },
            { id: "native-android", name: "Native Android", icon: <SiAndroid className="w-8 h-8 text-green-600" /> },
        ],
    },
    {
        id: "vectordb",
        name: " Databases",
        icon: (
            <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        items: [
            { id: "mongodb", name: "MongoDB Atlas", icon: <SiMongodb className="w-8 h-8 text-green-600" /> },
            { id: "postgresql", name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-blue-700" /> },
            { id: "mysql", name: "MySQL", icon: <SiMysql className="w-8 h-8 text-blue-500" /> },
            { id: "google", name: "Google", icon: <SiGoogle className="w-8 h-8 text-blue-400" /> },
            { id: "drant", name: "drant", icon: <SiDribbble className="w-8 h-8 text-pink-400" /> },
        ],
    },
];

export default function TechCategory() {
    const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0].id);

    const selectedCategory = categories.find((cat) => cat.id === selectedCategoryId) || categories[0];

    // console.log("Selected Category:", selectedCategoryId, selectedCategory);

    return (
        <div className="flex flex-col md:flex-row rounded-lg mt-10 md:mt-20 my-6 md:my-10 overflow-hidden shadow-lg h-auto md:h-[600px] max-w-full md:max-w-5xl mx-auto">
            {/* Left menu */}
            <nav className="bg-blue-600 w-full md:w-64 p-4 md:p-6 overflow-x-auto md:overflow-y-auto">
                <ul className="flex  gap-2 flex-wrap md:block space-x-2 md:space-x-0 md:space-y-6">
                    {categories.map((category) => (
                        <li
                            key={category.id}
                            className={`flex items-center space-x-2 md:space-x-3 cursor-pointer rounded-md p-2 md:p-3 ${
                                selectedCategoryId === category.id
                                    ? "bg-blue-800"
                                    : "hover:bg-blue-700"
                            }`}
                            onClick={() => setSelectedCategoryId(category.id)}
                        >
                            <div className="text-white">{category.icon}</div>
                            <span className="text-white font-semibold text-sm md:text-base">{category.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Right content */}
            <section className="flex-1 p-4 md:p-6 overflow-x-auto border border-t-0 md:border-t border-gray-200">
                <h2 className="text-base md:text-lg font-bold mb-3 md:mb-4">{selectedCategory?.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                    {selectedCategory?.items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center space-x-3 md:space-x-4 border border-transparent hover:border-gray-300 rounded-md p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        >
                            <span>{item.icon}</span>
                            <span className="font-medium text-sm md:text-base">{item.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
