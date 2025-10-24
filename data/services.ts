import {
  ShoppingCart, Layout, Smartphone, Code2, PenTool, ShieldCheck, MonitorCheck, Search,
  MousePointerClick,
  FileText,
  Boxes,
  Printer,
  Layers,
  Cpu,
  Apple,
  Shield,
  RefreshCcw, Share2,
  MessageCircle,
  Mail, Code,
  Palette,
  BadgeCent,
  Package,
  Images,
  Lightbulb,  Rocket, MessageSquare, Server
} from 'lucide-react'

export const appDevelopment = [
  {
    title: "Hybrid",
    description:
      "We develop high-performance native mobile applications for iOS and Android platforms that deliver exceptional user experiences.",
    url: "/services/app-development",
    features: [
      "Platform-specific Design",
      "Offline Functionality",
      "Push Notifications",
      "App Store Optimization",
    ],
    icon: Layers,
    iconColor: "#14b8a6", // Teal
  },
  {
    title: "Cross-Platform Development",
    description:
      "Reach users across multiple platforms with a single codebase, reducing development time and costs while maintaining quality.",
    url: "/services/app-development",
    features: [
      "React Native",
      "Flutter",
      "Consistent UI/UX",
      "Shared Codebase",
    ],
    icon: Smartphone,
    iconColor: "#6366f1", // Indigo
  },
  {
    title: "iOS App",
    description:
      "We build robust and scalable iOS applications tailored for Apple devices, ensuring smooth performance and seamless user experiences across all iOS versions.",
    url: "/services/ios-app-development",
    features: [
      "Swift",
      "App Store Deployment",
      "Seamless iOS Integration",
      "UI/UX Optimized for Apple Devices",
    ],
    icon: Apple,
    iconColor: "#000000", // Black (Apple style)
  },
  {
    title: "Android App",
    description:
      "We create fast, reliable, and feature-rich Android applications that run smoothly across a wide range of devices and Android versions.",
    url: "/services/android-app-development",
    features: [
      "Kotlin & Java Development",
      "Google Play Store Publishing",
      "Device & OS Compatibility",
      "Custom UI for Android",
    ],
    icon: Smartphone,
    iconColor: "#3DDC84", // Android Green
  },
  {
    title: "App Security",
    description:
      "Protect your users' data and your business with our comprehensive mobile app security solutions and best practices.",
    url: "/services/app-development",
    features: [
      "Secure Authentication",
      "Data Encryption",
      "Vulnerability Testing",
      "Compliance",
    ],
    icon: Shield,
    iconColor: "#ef4444", // Red
  },
  {
    title: "App Maintenance & Updates",
    description:
      "Keep your app running smoothly with regular updates, bug fixes, and feature enhancements to meet evolving user needs.",
    url: "/services/app-development",
    features: [
      "Regular Updates",
      "Bug Fixes",
      "Feature Enhancements",
      "OS Compatibility",
    ],
    icon: RefreshCcw,
    iconColor: "#0ea5e9", // Sky Blue
  },
]

export const webDevelopment = [
  {
    title: "Shopify | WooCommerce | CMS E-commerce",
    description:
      "Custom online store solutions using Shopify, WooCommerce, and popular CMS platforms tailored for your business growth.",
    url: "/services/web-development",
    features: [
      "Product Catalog Management",
      "Secure Payment Integration",
      "Custom Theme Development",
      "Scalable & SEO-friendly Structure",
    ],
    icon: ShoppingCart,
    iconColor: "#14b8a6",
  },
  {
    title: "WordPress | Magento | Wix",
    description:
      "Flexible and scalable website development using WordPress, Magento, and Wix to suit any business need.",
    url: "/services/web-development",
    features: [
      "Drag-and-Drop Builder",
      "SEO Optimized Templates",
      "Custom Plugins & Modules",
      "Multilingual & Responsive",
    ],
    icon: FileText,
    iconColor: "#6366f1",
  },
  {
    title: "Landing Page (Static Website)",
    description:
      "Fast-loading, visually appealing landing pages designed to convert visitors into customers.",
    url: "/services/web-development",
    features: [
      "Speed Optimized",
      "SEO Ready",
      "Custom UI/UX",
      "Conversion-focused Design",
    ],
    icon: Layout,
    iconColor: "#000000",
  },
  {
    title: "PWA (Progressive Web App)",
    description:
      "Build web apps that work offline, load instantly, and behave like native apps across devices.",
    url: "/services/web-development",
    features: [
      "Offline Functionality",
      "Push Notifications",
      "App-like Experience",
      "Cross-platform Support",
    ],
    icon: Smartphone,
    iconColor: "#3DDC84",
  },
  {
    title: "MERN Stack (Dynamic Website)",
    description:
      "Full-stack dynamic website development using MongoDB, Express.js, React.js, and Node.js.",
    url: "/services/web-development",
    features: [
      "End-to-End Development",
      "Fast & Scalable",
      "Modern JavaScript Stack",
      "REST API Integration",
    ],
    icon: Code2,
    iconColor: "#ef4444",
  },
  {
    title: "UI/UX Prototyping",
    description:
      "Interactive and intuitive frontend designs that shape the foundation of high-performing websites.",
    url: "/services/web-development",
    features: [
      "Wireframes & Mockups",
      "Interactive Prototypes",
      "Custom Animations",
      "User-centered Design",
    ],
    icon: PenTool,
    iconColor: "#0ea5e9",
  },
  {
    title: "Website Security Audit",
    description:
      "Comprehensive vulnerability assessment to secure your digital assets and protect user data.",
    url: "/services/web-development",
    features: [
      "Threat Identification",
      "Firewall Setup",
      "SSL Certification Review",
      "OWASP Compliance Checks",
    ],
    icon: ShieldCheck,
    iconColor: "#22c55e",
  },
  {
    title: "Website UX/UI Audit",
    description:
      "Evaluate your website’s usability, design flow, and user engagement to enhance overall performance.",
    url: "/services/web-development",
    features: [
      "Heuristic Analysis",
      "User Flow Testing",
      "Accessibility Checks",
      "Design Consistency Review",
    ],
    icon: MonitorCheck,
    iconColor: "#f59e0b",
  }
]

export const digitalMarketing = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility in search engine results to drive more organic traffic and reach potential customers.",
    features: [
      "Keyword Research",
      "On-page SEO",
      "Technical SEO",
      "Link Building"
    ],
    url: "/services/digital-marketing",
    icon: Search,
    iconColor: "#22c55e" // Green
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Drive targeted traffic to your website with strategic PPC campaigns that maximize your return on investment.",
    features: [
      "Google Ads",
      "Meta Ads",
      "Campaign Management",
      "Conversion Tracking"
    ],
    url: "/services/pay-per-click",
    icon: MousePointerClick,
    iconColor: "#f59e0b" // Amber
  },
  {
    title: "Social Media Marketing",
    description: "Build your brand presence and engage with your audience through strategic social media marketing campaigns.",
    features: [
      "Content Strategy",
      "Community Management",
      "Paid Campaigns",
      "Performance Analytics"
    ],
    url: "/services/digital-marketing",
    icon: Share2,
    iconColor: "#3b82f6" // Blue
  },
  {
    title: "WhatsApp Business API",
    description: "Engage users through automated, scalable, and secure WhatsApp Business API solutions for communication and marketing.",
    features: [
      "Automated Messaging",
      "Secure Customer Communication",
      "Real-time Notifications",
      "Integration with CRM"
    ],
    url: "/services/digital-marketing",
    icon: MessageCircle,
    iconColor: "#25D366" // WhatsApp Green
  },
  {
    title: "Bulk SMS & Email Marketing",
    description: "Send bulk promotional SMS and emails to reach thousands of customers and drive conversions.",
    features: [
      "Targeted Campaigns",
      "High Deliverability",
      "Real-time Analytics",
      "List Segmentation"
    ],
    url: "/services/digital-marketing",
    icon: Mail,
    iconColor: "#6366f1" // Indigo
  },
  {
    title: "Content Writing",
    description: "Create valuable content that attracts, engages, and converts your target audience while establishing your brand authority.",
    features: [
      "Blog Posts",
      "Website Copywriting",
      "Social Media Captions",
      "SEO-friendly Content"
    ],
    url: "/services/digital-marketing",
    icon: FileText,
    iconColor: "#8b5cf6" // Violet
  }
]
export const designBranding = [
  {
    title: "Logo Designing",
    description: "Create unique, memorable logos that visually represent your brand’s identity and values.",
    features: [
      "Custom Concepts",
      "Scalable Vector Format",
      "Brand-aligned Color Schemes",
      "Revisions & Final Files"
    ],
    url: "/services/graphic-designing",
    icon: Palette,
    iconColor: "#f97316" // Orange
  },
  {
    title: "Branding",
    description: "Build a consistent and recognizable brand identity that reflects your business vision and voice.",
    features: [
      "Visual Identity Systems",
      "Color Palette & Typography",
      "Brand Guidelines",
      "Stationery Design"
    ],
    url: "/services/graphic-designing",
    icon: BadgeCent,
    iconColor: "#0ea5e9" // Sky Blue
  },
  {
    title: "Product Packaging & Mockups",
    description: "Design attractive, functional product packaging and high-quality mockups for digital or physical products.",
    features: [
      "Label & Box Design",
      "3D Mockups",
      "Print-ready Files",
      "Eco-friendly Concepts"
    ],
    url: "/services/graphic-designing",
    icon: Package,
    iconColor: "#10b981" // Emerald Green
  },
  {
    title: "Social Media Content",
    description: "Design scroll-stopping social media graphics and templates to elevate your brand’s online presence.",
    features: [
      "Post & Story Designs",
      "Highlight Covers",
      "Engagement Templates",
      "Platform-specific Sizing"
    ],
    url: "/services/graphic-designing",
    icon: Images,
    iconColor: "#8b5cf6" // Violet
  }
]
export const productPrototyping = [
  {
    title: "3D Model Designing",
    description: "Transform ideas into precise digital 3D models ready for prototyping, manufacturing, or visualization.",
    features: [
      "CAD Modeling",
      "Photorealistic Renders",
      "Engineering-ready Files",
      "Design Revisions"
    ],
    url: "/services/product-prototyping",
    icon: Boxes,
    iconColor: "#facc15" // Yellow
  },
  {
    title: "3D Printed Prototype",
    description: "Bring your concepts to life with high-accuracy 3D-printed prototypes for design validation and user testing.",
    features: [
      "Rapid Prototyping",
      "High-Precision Prints",
      "Material Selection",
      "Functional Testing"
    ],
    url: "/services/product-prototyping",
    icon: Printer,
    iconColor: "#14b8a6" // Teal
  },
  {
    title: "Hardware Design & Development",
    description: "Engineer and prototype electronic hardware tailored for your product’s functionality and reliability.",
    features: [
      "PCB Design",
      "Component Sourcing",
      "Prototyping & Testing",
      "Compliance & Certification"
    ],
    url: "/services/product-prototyping",
    icon: Cpu,
    iconColor: "#6366f1" // Indigo
  },
  {
    title: "Product Software Development",
    description: "Develop robust software solutions that power your physical product and provide an integrated user experience.",
    features: [
      "Firmware Development",
      "IoT Integration",
      "Mobile & Web Interface",
      "Real-time Monitoring"
    ],
    url: "/services/product-prototyping",
    icon: Code,
    iconColor: "#ef4444" // Red
  },



]



export const projectManagement = [
  {
    title: "Project Ideation & Consultancy",
    description: "We help shape your ideas into practical digital solutions with a clear strategy, competitive analysis, and roadmap for execution.",
    features: [
      "Idea Validation",
      "Market Research",
      "Goal Definition",
      "Solution Planning"
    ],
    url: "/services/project-management",
    icon: Lightbulb,
    iconColor: "#facc15" // Yellow
  },
  {
    title: "Requirement Documents",
    description: "Translate your ideas into structured, actionable requirement documents for precise development and stakeholder alignment.",
    features: [
      "Business Requirement Docs",
      "User Stories",
      "Technical Specs",
      "Use Case Diagrams"
    ],
    url: "/services/project-management",
    icon: FileText,
    iconColor: "#3b82f6" // Blue
  },
  {
    title: "MVP & Prototype Development",
    description: "Launch faster with MVPs and interactive prototypes to test your idea in real-world scenarios and gain early feedback.",
    features: [
      "Low/High-Fidelity Prototypes",
      "Core Feature Set",
      "Iterative Testing",
      "Clickable UI/UX Flows"
    ],
    url: "/services/project-management",
    icon: Rocket,
    iconColor: "#a855f7" // Purple
  },
  {
    title: "User Survey & Feedback Implementation",
    description: "Gather real user feedback to guide product evolution and ensure you're building something users truly need and love.",
    features: [
      "User Surveys",
      "Usability Testing",
      "Data Analysis",
      "Feedback-driven Improvements"
    ],
    url: "/services/project-management",
    icon: MessageSquare,
    iconColor: "#10b981" // Green
  },
  {
    title: "Website Hosting & Management",
    description: "Keep your platform running smoothly with reliable hosting, routine updates, and performance monitoring.",
    features: [
      "Secure Hosting",
      "Uptime Monitoring",
      "Performance Optimization",
      "Ongoing Maintenance"
    ],
    url: "/services/project-management",
    icon: Server,
    iconColor: "#ef4444" // Red
  }
];