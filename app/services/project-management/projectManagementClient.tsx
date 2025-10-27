import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { BannerBeams } from "@/components/Banner/Bann";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn, IconLock,  IconPlugConnected
} from "@tabler/icons-react";

import CtaButton from '@/components/CtaPage/Cta';


export default function projectManagement() {
    return (
        <div className="min-h-screen">
          <BannerBeams headingh2="For Every Team" span={"Project Management"}  />
          <FeaturesSectionDemo/>

          {/* Move the sections here */}
          <section className="py-20 px-4 md:px-8 lg:px-12">
            {/* ...Customer Satisfaction section code... */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dwht6936t/image/upload/v1759562069/task-management-workflow_jcad5q_obaltq.webp"
                alt="Industry Responsibility"
                width={600}
                height={500}
                className="object-cover w-full h-[500px] transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Centralized Task & <span className="text-primary">Workflow Management</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
             Keep all projects, tasks, and deadlines in one place. A centralized system ensures your team always knows who is responsible for what, reducing confusion and keeping projects on track. With features like task assignments, priority levels, and progress tracking, you can ensure smooth collaboration and faster delivery.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Industries Transformed</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Understand Clarity Section for Industry */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform -rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dwht6936t/image/upload/v1759562070/Collaboration-Project-1_ivb7ti_xadxsd.webp"
                alt="Clarity in Industry"
                width={600}
                height={500}
                className="object-cover w-full h-[500px] transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Real-Time Collaboration & <span className="text-primary">Communication</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Eliminate endless email chains and missed updates. With real-time communication tools, file sharing, and discussion boards built into the platform, your team can collaborate seamlessly—no matter where they are. This ensures transparency, faster decision-making, and improved productivity.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Transparency</div>
              </div>
              <div className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-primary mb-2">360°</div>
                <div className="text-sm text-muted-foreground">Business Alignment</div>
              </div>
            </div>
          </div>
        </div>
      </section>
          <ProjectsSection/>
        </div>
    )
}

export function FeaturesSectionDemo() {
 const features = [
  {
    title: "Task & Milestone Tracking",
    description:
      "Assign, prioritize, and track tasks and milestones to keep your projects on time and within scope.",
    icon: <IconRouteAltLeft />,
  },
  {
    title: "Centralized Collaboration",
    description:
      "All team together in one platform for seamless communication and document sharing.",
    icon: <IconCloud />,
  },
  {
    title: "Real-Time Updates",
    description:
      "Monitor project status with live updates and intuitive dashboards, reducing delays by up to 30%.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Resource Management",
    description:
      "Efficiently allocate team members, time, and budget to maximize project outcomes.",
    icon: <IconAdjustmentsBolt />,
  },
  {
    title: "Customizable Workflows",
    description:
      "Tailor workflows to match your team’s unique processes, boosting productivity.",
    icon: <IconEaseInOut />,
  },
  {
    title: "Secure File Sharing",
    description:
      "Store and share files securely with advanced encryption and role-based access controls.",
    icon: <IconLock />, // Changed from IconHeart for clarity
  },
  {
    title: "Budget & Cost Control",
    description:
      "Track expenses and manage budgets to keep your projects financially on track.",
    icon: <IconCurrencyDollar />,
  },
  {
    title: "Tool Integrations",
    description:
      "Connect with tools like Slack, Jira, and Google Workspace for a unified workflow.",
    icon: <IconPlugConnected />,
  },
];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto sm:items-center sm:px-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center sm:items-start py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};


function ProjectsSection() {
  const projects = [
    {
      title: 'Effortless Team Collaboration',
      description: 'Centralize communication and file sharing so your team always knows what’s next—no more scattered updates or missed messages.',
      image: 'https://res.cloudinary.com/dwht6936t/image/upload/v1759562068/People_Ops_Fun_1_s7u2tr_rft3ha.svg',
      tech: ['/images/slack.webp', '/images/drive.webp', '/images/teams.webp'],
    },
    {
      title: 'Transparent Progress Tracking',
      description: 'Monitor every milestone with real-time dashboards and reports, making it easy to keep projects on track and stakeholders in the loop.',
      image: 'https://res.cloudinary.com/dwht6936t/image/upload/v1759562068/204-2046490_progress-tracking-vector-business-analytics_mgrrda_nspsqz.jpg',
      tech: ['/images/chart.webp', '/images/dashboard.webp', '/images/report.webp'],
    },
    {
      title: 'Flexible & Secure Workflows',
      description: 'Adapt workflows to your needs and ensure your data is protected with enterprise-grade security and access controls.',
      image: 'https://res.cloudinary.com/dwht6936t/image/upload/v1759562068/667e669d0a06f50131cefb2b_Cover_image_How_To_Safeguard_Your_Business_With_Security_Workflow_Automation_yrqan7_czt9em.png',
      tech: ['/images/lock.webp', '/images/settings.webp', '/images/shield.webp'],
    },
  ]
  
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto  ">
      <h2 className="text-3xl font-medium mb-10 text-center">We Understand Your Needs</h2>
      <div className="grid md:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group text-left transition-all duration-300 shadow-xl p-6 rounded-md border-t border-t-gray-100"
          >
            <div className="overflow-hidden shadow-lg mb-4 ">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="object-cover w-full h-64 transition-transform duration-300 "
              />
            </div>
            <h3 className="text-lg text-left font-semibold mb-1 transition-all duration-300 group-hover:pl-4">
              {project.title}
            </h3>
            <p className="text-cyan-100 text-sm mb-3 max-w-sm mx-aut text-left transition-all duration-300 group-hover:pl-4">
              {project.description}
            </p>
            <div className="flex justify-center space-x-2">
              {/* {project.tech.map((icon, i) => (
                // <Image
                //   key={i}
                //   src={icon}
                //   alt="Tech Icon"
                //   width={24}
                //   height={24}
                //   className="opacity-90 hover:opacity-100"
                // />

              ))} */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}




// export function BentoGridDemo() {
//   return (
//     <BentoGrid className="max-w-7xl mx-auto border my-5 rounded-xl p-6">
//       {items.map((item, i) => (
//         <BentoGridItem
//           key={i}
//           title={item.title}
//           description={item.description}
//           header={item.header}
//           icon={item.icon}
//           className={i === 3 || i === 6 ? "md:col-span-2" : ""}
//         />
//       ))}
//     </BentoGrid>
//   );
// }


// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: (
//       <img
//         src="https://plus.unsplash.com/premium_photo-1753362738451-5c27dc72165d?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Innovation"
//         className="w-full h-full object-cover rounded-xl"
//       />
//     ),
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: (
//       <img
//         src="https://plus.unsplash.com/premium_photo-1753362738451-5c27dc72165d?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Technology"
//         className="w-full h-full object-cover rounded-xl"
//       />
//     ),
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: (
//       <img
//         src="https://plus.unsplash.com/premium_photo-1753362738451-5c27dc72165d?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Design"
//         className="w-full h-full object-cover rounded-xl"
//       />
//     ),
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description: "Understand the impact of effective communication in our lives.",
//     header: (
//       <img
//         src="https://plus.unsplash.com/premium_photo-1753362738451-5c27dc72165d?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Communication"
//         className="w-full h-full object-cover rounded-xl"
//       />
//     ),
//     icon: <IconTableColumn className="h-4 w-4 " />,
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     header: (
//       <img
//         src="https://plus.unsplash.com/premium_photo-1753362738451-5c27dc72165d?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Knowledge"
//         className="w-full h-full object-cover rounded-xl"
//       />
//     ),
//     icon: <IconArrowWaveRightUp className="h-4 w-4 " />,
//   },
//   {
//     title: "The Joy of Creation",
//     description: "Experience the thrill of bringing ideas to life.",
//     header: (
//       <img
//         src="https://plus.unsplash.com/premium_photo-1753362738451-5c27dc72165d?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Creation"
//         className="w-full h-full object-cover rounded-xl"
//       />
//     ),
//     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Spirit of Adventure",
//     description: "Embark on exciting journeys and thrilling discoveries.",
//     header: (
//       <img
//         src="https://plus.unsplash.com/premium_photo-1753362738451-5c27dc72165d?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt="Adventure"
//         className="w-full h-full object-cover rounded-xl"
//       />
//     ),
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
// ];
