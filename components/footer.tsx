import Quicklinks from "./footercompo"
import { ResourcesFooter, Logo, Contact } from "./footercompo"

export default function Footer() {
  return (
    <footer className="px-6 py-5  bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-16">
        <div className="col-span-2 md:col-span-1 mb-6">
          <Logo/>
        </div>

        <Quicklinks />

        <ResourcesFooter />

        <div className="col-span-2 md:col-span-1">
          <Contact />
        </div>

      </div>

      <AllRightReserved />
    </footer>
  )
}

function AllRightReserved() {
  return (
    <div className="text-center text-sm mt-10">&copy; {new Date().getFullYear()} Noblekode. All rights reserved.</div>
  )
}
