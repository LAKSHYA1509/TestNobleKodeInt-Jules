import Image from "next/image"
import Link from "next/link"
import { ImageSlider } from "./clientcard"

const images = [
  // SEO
  "https://res.cloudinary.com/dwht6936t/image/upload/v1759562070/6_bzd7af_kxujhi.jpg",
  // Web Development
  "https://res.cloudinary.com/dwht6936t/image/upload/v1759562067/7_peol02_xjb7qr.jpg",
  "https://res.cloudinary.com/dwht6936t/image/upload/v1759562071/2_cwnuo3_ffst2p.jpg",
]

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-12 md:py-20"
        style={{ backgroundImage: `url('/images/hero-bg.webp')` }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            We Possess The Technical Skills & Processes To Deliver High-performing{" "}
            <span className="text-primary">Websites.</span>
          </h1>
          <p className="text-lg mb-6">
            If you have some query for apps, come to the best web development agency in Delhi.
          </p>
          <Link href="/contact" className="btn-primary">
            Book Your Free Consultation
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">
              Best Website Designing Company in Delhi
            </h2>
            <p className="mb-4">
              Innovatia is one of the premium Website Designing Companies in Delhi with 10 years of experience in
              website designing.
            </p>
            <p className="mb-6">
              Innovatia offers full-range services in website designing. Our skilled and experienced team of
              professionals work forward using perfection to achieve the best for our clients.
            </p>
            <Link href="/contact" className="text-primary font-semibold underline">
              Let's Have A Chat
            </Link>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src={images[1] || "/placeholder.svg"}
              alt="About us"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 md:py-16">
        <div className="container mx-auto px-4 space-y-12 md:space-y-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 flex justify-center md:justify-start">
              <Image
                src={images[0] || "/placeholder.svg"}
                alt="Service"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
                Want a website for your business that converts your audience to clients?
              </h3>
              <p className="mb-4">
                Website Designing is all about understanding your customers' needs and transforming it into an ideal
                website. We provide functional, clean, and user-friendly websites that focus on business goals and user
                experience.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Custom-built sites</li>
                <li>Responsive designs</li>
                <li>SEO-optimized structure</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4">
                Does your website reflect the motive you have for your business?
              </h3>
              <p className="mb-4">
                We aim to understand your needs and provide the best web design and development services that represent
                your business's core values.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Creative layout matching brand identity</li>
                <li>Conversion-focused interfaces</li>
                <li>Ongoing design support</li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src={images[2] || "/placeholder.svg"}
                alt="Motive"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-white dark:bg-gray-900 text-center">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="p-4 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-2xl md:text-3xl font-bold text-primary">300+</h4>
            <p>Project Completed</p>
          </div>
          <div className="p-4 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-2xl md:text-3xl font-bold text-primary">12+</h4>
            <p>Years Of Experience</p>
          </div>
          <div className="p-4 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-2xl md:text-3xl font-bold text-primary">50+</h4>
            <p>Team Workforce</p>
          </div>
          <div className="p-4 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-2xl md:text-3xl font-bold text-primary">200+</h4>
            <p>Clients World Wide</p>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8 md:mb-12">Our Workflow</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            {[
              "Re-Design",
              "Website Design",
              "Maintenance",
              "Static Website",
              "Dynamic Website",
              "E-commerce Website",
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg md:text-xl font-bold text-secondary mb-2">{service}</h4>
                <p className="text-sm md:text-base">Detailed description about {service.toLowerCase()} goes here...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8 md:mb-12">Testimonials</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 px-4">
          <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-4 italic">
              "Their team works with Innovatia for the last 2 years and their web designs and development services are
              top class."
            </p>
            <p className="font-bold">- Sanjay Yadav</p>
          </div>
          <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-4 italic">
              "Innovatia helped us boost our business with a professional site redesign and smooth UX."
            </p>
            <p className="font-bold">- Arun</p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 md:mb-8">Our Clients</h2>
        <div className="px-4">
          <ImageSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary text-white py-10 md:py-12 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Want To Create Something Beautiful?</h2>
        <Link
          href="/contact"
          className="bg-white text-secondary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Let's Book A Discussion
        </Link>
      </section>
    </main>
  )
}
