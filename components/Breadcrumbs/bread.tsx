// components/PageBreadcrumb.tsx
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'; // Adjust based on your setup

interface BreadcrumbItemType {
  name: string;
  href: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItemType[];
}

const PageBreadcrumb = ({ items }: PageBreadcrumbProps) => {
  return (
    <Breadcrumb className="my-12">
      <BreadcrumbList className="flex justify-center">
        {items.map((item, index) => (
          <div className="flex items-center" key={item.href}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={item.href} className="text-sm sm:text-base">
                  {  item.name }
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {index < items.length - 1 && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageBreadcrumb;
