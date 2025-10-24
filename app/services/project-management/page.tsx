import ProjectManagementPage from "./projectManagementClient";
import { Webpage, Breadcrumbs } from "@/components/schemacode";
import CtaButton from '@/components/CtaPage/Cta';
import PageBreadcrumb from '@/components/Breadcrumbs/bread';

const title = "Project Management Services | Team Collaboration & Workflow Solutions";
const description = "Streamline your projects with our expert project management services. Centralized task tracking, real-time collaboration, and efficient workflow management for teams.";
const canonical = "https://noblekode.com/services/project-management";

export const metadata = {
  title: title,
  description: description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
    },
    other: {
      "msvalidate.01": "2FA774516BED6957AC2007ADFDA920BA",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonical,
    siteName: "Noble Kode",
    title: title,
    description: description,
    images: [
      {
        url: "https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Noble Kode - Project Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["https://res.cloudinary.com/dlrmktbrg/image/upload/v1745320433/Logo.svg"],
    creator: "@noblekode",
  },
  alternates: {
    canonical: canonical,
  },
};

export default function ProjectManagement() {
  return (
    <div >
      <ProjectManagementPage />
      {/* Schema */}
      <Webpage pageName="Project Management" pageUrl={canonical} />
      <Breadcrumbs breadcrumbs={[{
        pageName: "Project Management",
        pageUrl: canonical
      },
      {
        pageName: "Home",
        pageUrl: "https://noblekode.com/"
      },
    ]} />
        <CtaButton 
            ctaText="Streamline Your Projects With Our Expert Management!"
            buttonText="Start Managing"
          />
      <PageBreadcrumb items={[{ name: "Home", href: "/" } , {name :"Project Management", href:"/services/project-management"}]} />
    </div>
  )
}