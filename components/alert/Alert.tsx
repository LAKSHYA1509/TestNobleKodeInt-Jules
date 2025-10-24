import Link from "next/link";

interface Alertprop {
  children : React.ReactNode,
  link? : string
}

export function AlertBanner({ children, link }:Alertprop ) {
  return (
    <div className="bg-blue-600 text-white px-4 py-3 text-center">
    
    { link ? 
      <Link href={link}  className="hover:underline p-2">
      <span className="text-sm text-center mx-auto max-w-7xl">{children}</span>
      </Link>
      :  <span className="text-sm text-center mx-auto max-w-7xl">{children}</span> }
    </div>
  );
}

