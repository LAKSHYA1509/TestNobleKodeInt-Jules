import Quicklinks from "./footercompo"
import { ResourcesFooter, Logo, Contact, SocialIcons } from "./footercompo"

export default function Footer() {
  return (
    <footer className="px-6 py-5  bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="flex justify-center sm:justify-start">
          <Logo />
        </div>

        <Quicklinks />

        <ResourcesFooter />

        <Contact />

        <SocialIcons />
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
