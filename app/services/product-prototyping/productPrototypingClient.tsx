import { BannerBeams } from "@/components/Banner/Bann"
import {
  LightBulbIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  ArrowPathIcon,
  CheckBadgeIcon,
  UserGroupIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

import { TestmonySlider } from "@/components/testimony";

export default function PrototypingPage() {
  const testimonialsList = [
    {
      text: "Noble Kode’s prototyping service exceeded our expectations. Their professionalism and attention to detail helped us secure investor buy-in with confidence.",
      icon: ChatBubbleLeftRightIcon,
      authorName: "— Priya S., Startup Founder"
    },
    {
      text: "The team’s technical expertise and collaborative approach made the entire process seamless. We highly recommend Noble Kode for rapid prototyping",
      icon: UserGroupIcon,
      authorName: "— Arjun M., Product Manager"
    }
  ];
  

const Process =[{
  icon :LightBulbIcon,
  headH3 :"LightBulbIcon",
  para :"We begin by understanding your vision, objectives, and requirements in detail.",
  color:"text-yellow-500",
},

{ icon: PencilSquareIcon,
  headH3 :"Conceptualization",
  para:"Our designers craft initial sketches, wireframes, and conceptual models for your review.",
  color:"text-blue-500"
} ,
{ icon: DevicePhoneMobileIcon,
  headH3 :"Prototyping",
  para:"We develop interactive, testable prototypes for real-world feedback.",
  color:"text-indigo-500"
} , {
  icon :ArrowPathIcon,
  headH3 :"Iteration",
  para:"Your input drives our refinements, ensuring the prototype aligns with your expectations",
  color:"text-pink-500"
},
{ icon : RocketLaunchIcon,
  headH3 :"Delivery",
  para:"Receive a polished, presentation-ready prototype, ideal for development or stakeholder buy-in.",
  color :"text-green-500"

}

]

  return (
    <div className="text-gray-800 dark:text-gray-200 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-transparent dark:from-gray-800 dark:via-gray-900 pointer-events-none" />
        <BannerBeams headingh2="From Ideas to 3D" span="Product Prototyping Services" />
        <section className="max-w-5xl mx-auto px-4 py-12 relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold mb-4 text-center md:text-left tracking-tight">
              Transform Your Ideas Into Reality
            </h1>
            <p className="mb-8 text-lg text-center md:text-left text-gray-600 dark:text-gray-300">
              From concept to creation, our expert team helps you visualize, test, and refine your product ideas with rapid, high-fidelity prototypes. Experience innovation, speed, and precisionevery step of the way.
            </p>
            <ul className="flex flex-wrap gap-6 justify-center md:justify-start">
              <li className="flex items-center gap-2">
                <CheckBadgeIcon className="w-6 h-6 text-green-600" />
                Quality Assurance
              </li>
              <li className="flex items-center gap-2">
                <UserGroupIcon className="w-6 h-6 text-purple-600" />
                Collaborative Approach
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://res.cloudinary.com/dlrmktbrg/image/upload/v1756187321/images_pjhbgb.jpg"
              alt="Product Prototyping Hero"
              className="rounded-xl shadow-lg w-full max-w-md border border-gray-200 dark:border-gray-700 object-cover"
            />
          </div>
        </section>
      </div>

      {/* Our Process */}
      <div className="bg-gray-900 dark:bg-gray-950">
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 text-blue-300 text-center">Our Prototyping Process</h2>
          <div className="grid md:grid-cols-5 gap-8 text-center">
            {Process.map((items) => {
              return (
                <div key={items.headH3}>
                  <items.icon className={`w-10 h-10 mx-auto ${items.color} mb-2`} />
                  <h3 className="font-semibold mb-1">{items.headH3}</h3>
                  <p className="text-sm text-gray-300">{items.para}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Benefits Section */}
      <div className="bg-white dark:bg-gray-900">
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 text-blue-700 dark:text-blue-300 text-center">Why Partner With Noble Kode?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <UserGroupIcon className="w-6 h-6 text-purple-600 mt-1" />
                <span>
                  <strong>Multidisciplinary team:</strong> Extensive industry experience across design, engineering, and business.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BoltIcon className="w-6 h-6 text-blue-600 mt-1" />
                <span>
                  <strong>Efficient turnaround:</strong> Rapid prototyping without compromising quality.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <DevicePhoneMobileIcon className="w-6 h-6 text-indigo-600 mt-1" />
                <span>
                  <strong>Latest technologies:</strong> We use cutting-edge tools for high-fidelity, interactive prototypes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-pink-600 mt-1" />
                <span>
                  <strong>Transparent communication:</strong> You’re always in the loop, every step of the way.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckBadgeIcon className="w-6 h-6 text-green-600 mt-1" />
                <span>
                  <strong>End-to-end support:</strong> From ideation to launch, we’re with you at every stage.
                </span>
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <img
                src="/images/prototype.png"
                alt="Prototyping process illustration"
                className="rounded-lg shadow-lg w-full max-w-xs h-full border border-gray-200 dark:border-gray-700 object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials */}
      {/* <div className="bg-gray-900 dark:bg-gray-950">
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 text-blue-300 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonialsList.map((item) => {
              const Icon = item.icon;
              return (
                <blockquote
                  key={item.authorName}
                  className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg shadow border-l-4 border-blue-400 flex flex-col gap-2"
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-2 self-center" />
                  <p className="italic mb-2">{item.text}</p>
                  <footer className="font-semibold text-sm text-gray-300 flex items-center gap-2 justify-center">
                    <UserGroupIcon className="w-5 h-5 text-purple-400" />
                    {item.authorName}
                  </footer>
                </blockquote>
              );
            })}
          </div>
        </section>
      </div> */}

      {/* Call to Action */}
      <TestimonialsSection />
      
    </div>
  )
}


function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 default:bg-gray-50  text-center px-4 sm:px-6">
      <h2 className="text-2xl md:text-3xl font-bold  mb-8 ">Testimonials</h2>
      <TestmonySlider />
    </section>
  );
}