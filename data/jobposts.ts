export interface Job {
  title: string
  description: string
  responsibilities: string[]
  ToolsTech: string[]
  color: string
  category: "Development" | "Design" | "Marketing"
}

export const jobposts: Job[] = [
  {
    title: "Frontend Developer",
    description: "Build amazing user interfaces with React and modern web technologies.",
    responsibilities: [
      "Develop responsive web applications",
      "Collaborate with design team",
      "Optimize for performance",
      "Write clean, maintainable code",
    ],
    ToolsTech: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Figma"
    ],
    color: "blue",
    category: "Development",
  },
  {
    title: "Backend Developer",
    description: "Create robust server-side applications and APIs.",
    responsibilities: [
      "Design and implement APIs",
      "Database optimization",
      "Server architecture",
      "Security implementation",
    ],
    ToolsTech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "AWS"
    ],
    color: "green",
    category: "Development",
  },
  {
    title: "UI/UX Designer",
    description: "Design intuitive and beautiful user experiences.",
    responsibilities: [
      "Create user-centered designs",
      "Conduct user research",
      "Design prototypes",
      "Collaborate with developers",
    ],
    ToolsTech: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Miro"
    ],
    color: "blue",
    category: "Design",
  },
  {
    title: "Graphic Designer",
    description: "Create stunning visual content and brand materials.",
    responsibilities: [
      "Design marketing materials",
      "Brand identity development",
      "Print and digital design",
      "Creative concept development",
    ],
    ToolsTech: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Canva",
      "CorelDRAW"
    ],
    color: "green",
    category: "Design",
  },
  {
    title: "Digital Marketing Specialist",
    description: "Drive growth through strategic digital marketing campaigns.",
    responsibilities: [
      "SEO and SEM campaigns",
      "Social media strategy",
      "Content marketing",
      "Analytics and reporting",
    ],
    ToolsTech: [
      "Google Analytics",
      "Google Ads",
      "Facebook Ads Manager",
      "SEMrush",
      "Mailchimp"
    ],
    color: "blue",
    category: "Marketing",
  },
  {
    title: "Content Marketing Manager",
    description: "Create compelling content that engages and converts.",
    responsibilities: [
      "Content strategy development",
      "Blog and article writing",
      "Email marketing campaigns",
      "Brand storytelling",
    ],
    ToolsTech: [
      "WordPress",
      "HubSpot",
      "Grammarly",
      "Hootsuite",
      "Google Docs"
    ],
    color: "green",
    category: "Marketing",
  },
]