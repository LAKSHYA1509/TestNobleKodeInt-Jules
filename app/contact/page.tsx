"use client"

import type React from "react"
import axios from "axios"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  FaApple, FaAndroid, FaMobileAlt, FaHeartbeat, FaMusic,
  FaBolt, FaHome, FaUsers, FaFutbol, FaHeart, FaShoppingCart,
  FaGlassCheers, FaVideo, FaLanguage, FaBell, FaDumbbell, FaComments,
  FaWatchmanMonitoring, FaShoppingBag, FaCommentDots, FaBullseye, FaCalculator,
  FaGlobe, FaBullhorn, FaPaintBrush, FaCube,
} from "react-icons/fa"
import { MdRestaurant, MdTravelExplore, MdFastfood } from "react-icons/md"
type Step = "service" | "industry" | "features" | "results" | "contact"

interface CalculatorData {
  services: string[]
  industry: string[]
  features: string[]
}

interface ContactData {
  name: string
  email: string
  phone: string
  company: string
  website: string
  targetMarket: string
  service: string
  requirements: string
}

// Service price ranges in INR (min, max)
const servicePriceMap: Record<string, [number, number]> = {
  "Web development": [5000, 1000000],
  "iOS": [100000, 500000],
  "Android": [100000, 500000],
  "Both (Android + iOS)": [200000, 1000000],
  "Digital Marketing": [5000, 20000],
  "3D Product Prototyping": [5000, 50000],
}

const getServiceMidRange = (services: string[]): number => {
  let total = 0
  services.forEach((service) => {
    if (servicePriceMap[service]) {
      const [min, max] = servicePriceMap[service]
      total += (min + max) / 2
    }
  })
  return total
}

const services = [
  { name: "iOS", desc: "Native iOS applications", icon: <FaApple size={32} /> },
  { name: "Android", desc: "Native Android applications", icon: <FaAndroid size={32} /> },
  { name: "Both (Android + iOS)", desc: "Cross-platform mobile apps", icon: <FaMobileAlt size={32} /> },
  { name: "Web development", desc: "Responsive websites & web apps", icon: <FaGlobe size={32} /> },
  { name: "Digital Marketing", desc: "SEO, SMO, Google & Meta Ads", icon: <FaBullhorn size={32} /> },
  { name: "3D Product Prototyping", desc: "3D models and prototypes", icon: <FaCube size={32} /> },
]

const industries = [
  { name: "Health and Fitness", icon: <FaHeartbeat size={24} /> },
  { name: "Music", icon: <FaMusic size={24} /> },
  { name: "On-demand", icon: <FaBolt size={24} /> },
  { name: "Real Estate", icon: <FaHome size={24} /> },
  { name: "Restaurant Booking", icon: <MdRestaurant size={24} /> },
  { name: "Social Media", icon: <FaUsers size={24} /> },
  { name: "Sports", icon: <FaFutbol size={24} /> },
  { name: "Travel", icon: <MdTravelExplore size={24} /> },
  { name: "Dating App", icon: <FaHeart size={24} /> },
  { name: "E-Commerce", icon: <FaShoppingCart size={24} /> },
  { name: "Food and Drink", icon: <MdFastfood size={24} /> },
  { name: "Meta Ads", icon: <FaBullhorn size={24} /> },
  { name: "Google Ads", icon: <FaBullhorn size={24} /> },
  { name: "Social Media Optimization (SMO)", icon: <FaComments size={24} /> },
  { name: "Search Engine Optimization (SEO)", icon: <FaGlobe size={24} /> },
  { name: "Graphic Designing", icon: <FaPaintBrush size={24} /> },
]

const features = [
  { name: "Video and Audio Content", desc: "Rich media integration", icon: <FaVideo size={20} /> },
  { name: "Multiple Language Support", desc: "Internationalization", icon: <FaLanguage size={20} /> },
  { name: "Tracking of Food and Water Intake", desc: "Health monitoring", icon: <FaGlassCheers size={20} /> },
  { name: "Reminders and Notifications", desc: "Push notifications", icon: <FaBell size={20} /> },
  { name: "Personalized Workout Programs", desc: "Custom fitness plans", icon: <FaDumbbell size={20} /> },
  { name: "Online Consultation & Chat", desc: "Real-time communication", icon: <FaComments size={20} /> },
  { name: "Integration with Wearables", desc: "IoT device connectivity", icon: <FaWatchmanMonitoring size={20} /> },
  { name: "In-app Purchases", desc: "Payment integration", icon: <FaShoppingBag size={20} /> },
  { name: "In-app Chat", desc: "Messaging system", icon: <FaCommentDots size={20} /> },
  { name: "Goal Setting", desc: "Target management", icon: <FaBullseye size={20} /> },
  { name: "Calculation of Nutrient Intake", desc: "Health calculations", icon: <FaCalculator size={20} /> },
]

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState<Step>("service")
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    services: [],
    industry: [],
    features: [],
  })
  const [contactData, setContactData] = useState<ContactData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    targetMarket: "",
    service: "",
    requirements: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [currency, setCurrency] = useState<"INR" | "USD">("INR")

  const handleServiceToggle = (service: string) => {
    setCalculatorData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleFeatureToggle = (feature: string) => {
    setCalculatorData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }))
  }

  const handleIndustryToggle = (industry: string) => {
    setCalculatorData((prev) => ({
      ...prev,
      industry: prev.industry.includes(industry)
        ? prev.industry.filter((i) => i !== industry)
        : [...prev.industry, industry],
    }))
  }

  const handleNext = () => {
    if (currentStep === "service" && calculatorData.services.length > 0) {
      setCurrentStep("industry")
    } else if (currentStep === "industry" && calculatorData.industry.length > 0) {
      setCurrentStep("features")
    } else if (currentStep === "features") {
      setCurrentStep("results")
    } else if (currentStep === "results") {
      setCurrentStep("contact")
    }
  }

  const handlePrevious = () => {
    if (currentStep === "industry") {
      setCurrentStep("service")
    } else if (currentStep === "features") {
      setCurrentStep("industry")
    } else if (currentStep === "results") {
      setCurrentStep("features")
    } else if (currentStep === "contact") {
      setCurrentStep("results")
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(null)
    try {
      await axios.post("/api/contact", {
        ...contactData,
        calculatorData,
      })
      setSubmitSuccess(true)
    } catch (err: any) {
      setSubmitError("Failed to send. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const midEstimateINR = getServiceMidRange(calculatorData.services)
  const midEstimateUSD = Math.round((midEstimateINR * 2.75) / 83)

  const getStepProgress = () => {
    const steps = ["service", "industry", "features", "results", "contact"]
    const currentIndex = steps.indexOf(currentStep)
    return ((currentIndex + 1) / steps.length) * 100
  }

  const [showCalendly, setShowCalendly] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="backdrop-blur-sm bg-white/5 rounded-full h-2 border border-white/10">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${getStepProgress()}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-slate-400">
            <span className={currentStep === "service" ? "text-cyan-400" : ""}>Service</span>
            <span className={currentStep === "industry" ? "text-cyan-400" : ""}>Industry</span>
            <span className={currentStep === "features" ? "text-cyan-400" : ""}>Features</span>
            <span className={currentStep === "results" ? "text-cyan-400" : ""}>Results</span>
            <span className={currentStep === "contact" ? "text-cyan-400" : ""}>Contact</span>
          </div>
        </div>

        {currentStep === "service" && (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
              <Card className="relative backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl shadow-cyan-500/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <CardHeader className="text-center relative z-10 py-12">
                  <CardTitle className="text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-6">
                    What Platform Are you based on?
                  </CardTitle>
                  <p className="text-xl text-slate-300/90">Select all services that apply to your project</p>
                </CardHeader>
                <CardContent className="space-y-8 relative z-10 px-12 pb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                      <div
                        key={service.name}
                        onClick={() => handleServiceToggle(service.name)}
                        className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                          calculatorData.services.includes(service.name)
                            ? "border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/25"
                            : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
                        }`}
                      >
                        <div className="mb-4 text-cyan-400">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                        <p className="text-slate-300/80 text-sm">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end pt-8">
                    <Button
                      onClick={handleNext}
                      disabled={calculatorData.services.length === 0}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl shadow-cyan-500/25 border-0 transition-all duration-300 hover:shadow-cyan-500/40"
                    >
                      Next Step <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentStep === "industry" && (
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
              <Card className="relative backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl shadow-purple-500/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <CardHeader className="text-center relative z-10 py-12">
                  <CardTitle className="text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-6">
                    What Industry Are You In?
                  </CardTitle>
                  <p className="text-xl text-slate-300/90">This helps us understand your specific requirements</p>
                </CardHeader>
                <CardContent className="space-y-8 relative z-10 px-12 pb-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {industries.map((industry) => (
                      <div
                        key={industry.name}
                        onClick={() => handleIndustryToggle(industry.name)}
                        className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 text-center ${
                          calculatorData.industry.includes(industry.name)
                            ? "border-purple-500 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 shadow-lg shadow-purple-500/25"
                            : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
                        }`}
                      >
                        <div className="mb-4 text-purple-400 flex justify-center">{industry.icon}</div>
                        <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between pt-8">
                    <Button
                      onClick={handlePrevious}
                      variant="outline"
                      className="border border-white/20 text-slate-300 hover:bg-white/10 backdrop-blur-sm bg-white/5 px-8 py-4 text-lg"
                    >
                      <ChevronLeft className="mr-2 h-5 w-5" /> Previous
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={calculatorData.industry.length === 0}
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl shadow-purple-500/25 border-0 transition-all duration-300"
                    >
                      Next Step <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentStep === "features" && (
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
              <Card className="relative backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl shadow-green-500/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <CardHeader className="text-center relative z-10 py-12">
                  <CardTitle className="text-5xl font-bold bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent mb-6">
                    What Features Do You Want?
                  </CardTitle>
                  <p className="text-xl text-slate-300/90">Select all features that your project needs</p>
                </CardHeader>
                <CardContent className="space-y-8 relative z-10 px-12 pb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => (
                      <div
                        key={feature.name}
                        onClick={() => handleFeatureToggle(feature.name)}
                        className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                          calculatorData.features.includes(feature.name)
                            ? "border-green-500 bg-gradient-to-br from-green-500/20 to-blue-500/20 shadow-lg shadow-green-500/25"
                            : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
                        }`}
                      >
                        <div className="mb-3 text-green-400">{feature.icon}</div>
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                        <p className="text-slate-300/80 text-sm">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between pt-8">
                    <Button
                      onClick={handlePrevious}
                      variant="outline"
                      className="border border-white/20 text-slate-300 hover:bg-white/10 backdrop-blur-sm bg-white/5 px-8 py-4 text-lg"
                    >
                      <ChevronLeft className="mr-2 h-5 w-5" /> Previous
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-green-500/25 border-0 transition-all duration-300"
                    >
                      See My Estimate <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentStep === "results" && (
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
              <Card className="relative backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl shadow-green-500/10 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <CardHeader className="text-center relative z-10">
                  <CardTitle className="text-4xl font-bold bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent mb-4">
                    Your Estimated Cost
                  </CardTitle>
                  <p className="text-slate-300/90">Here's your personalized estimate</p>
                  <Button
                    onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}
                    className="my-6 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold px-8 py-3 rounded-md"
                  >
                    Switch to {currency === "INR" ? "USD" : "INR"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="text-center mb-6">
                    {currency === "INR" ? (
                      <div className="text-5xl font-bold text-green-400">
                        ₹{Math.round(midEstimateINR).toLocaleString()} INR
                      </div>
                    ) : (
                      <div className="text-5xl font-bold text-cyan-400">
                        ${midEstimateUSD.toLocaleString()} USD
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-slate-300/90">Services:</span>
                      <div className="flex gap-2 flex-wrap justify-end">
                        {calculatorData.services.map((service) => (
                          <Badge
                            key={service}
                            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm"
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-slate-300/90">Industry:</span>
                      <div className="flex gap-2 ml-4 flex-wrap justify-end">
                        {calculatorData.industry.map((industry) => (
                          <Badge
                            key={industry}
                            className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-sm"
                          >
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {calculatorData.features.length > 0 && (
                      <div className="flex justify-between items-start py-3 border-b border-white/10">
                        <span className="text-slate-300/90">Features:</span>
                        <div className="flex flex-wrap gap-2 max-w-xs justify-end">
                          {calculatorData.features.map((feature) => (
                            <Badge
                              key={feature}
                              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border border-green-500/30 backdrop-blur-sm"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20">
                    <h3 className="font-semibold text-white mb-2">What's Next?</h3>
                    <p className="text-slate-300/90 text-sm mb-4">
                      Our team will analyze your requirements and send you a detailed proposal within 24 hours.
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white shadow-lg shadow-green-500/25 border-0 transition-all duration-300"
                      onClick={() => setCurrentStep("contact")}
                    >
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        {currentStep === "contact" && (
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <Card className="relative backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl shadow-cyan-500/10 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <CardHeader className="text-center relative z-10">
                  <CardTitle className="text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-4">
                    Free Website Analysis
                  </CardTitle>
                  <p className="text-slate-300/90">
                    Complete this form and schedule your free consultation
                  </p>
                </CardHeader>
                <CardContent className="relative z-10">
                  {submitSuccess ? (
                    <div className="text-center py-12">
                      <h2 className="text-2xl font-bold text-green-400 mb-4">Thank you!</h2>
                      <p className="text-slate-200 mb-2">Your details have been submitted. We'll get in touch soon.</p>
                      <Button variant="outline" className="mt-4 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white" onClick={() => setShowCalendly(true)}>
                        Schedule Your Consultation
                      </Button>
                      {showCalendly && (
              <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-6 max-w-lg w-full relative">
                  <button
                    className="absolute top-2 right-2 text-black text-xl"
                    onClick={() => setShowCalendly(false)}
                  >
                    ×
                  </button>
                  <iframe
                    src="https://calendly.com/lakshyanoblekode/30min"
                    width="500"
                    height="500"
                    frameBorder="0"
                    title="Schedule Consultation"
                  ></iframe>
                </div>
              </div>
            )}
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-white/90">Name *</label>
                          <Input
                            required
                            value={contactData.name}
                            onChange={(e) => setContactData((prev) => ({ ...prev, name: e.target.value }))}
                            className="backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder:text-slate-400 hover:bg-white/15 focus:bg-white/15 transition-all duration-300"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-white/90">Email *</label>
                          <Input
                            type="email"
                            required
                            value={contactData.email}
                            onChange={(e) => setContactData((prev) => ({ ...prev, email: e.target.value }))}
                            className="backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder:text-slate-400 hover:bg-white/15 focus:bg-white/15 transition-all duration-300"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-white/90">Phone *</label>
                          <Input
                            required
                            value={contactData.phone}
                            onChange={(e) => setContactData((prev) => ({ ...prev, phone: e.target.value }))}
                            className="backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder:text-slate-400 hover:bg-white/15 focus:bg-white/15 transition-all duration-300"
                            placeholder="Your phone"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-white/90">Share Your Requirements</label>
                        <Textarea
                          value={contactData.requirements}
                          onChange={(e) => setContactData((prev) => ({ ...prev, requirements: e.target.value }))}
                          className="backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder:text-slate-400 min-h-[120px] hover:bg-white/15 focus:bg-white/15 transition-all duration-300"
                          placeholder="Tell us about your project requirements..."
                        />
                      </div>

                      <div className="flex justify-between pt-6">
                        <Button
                          type="button"
                          onClick={handlePrevious}
                          variant="outline"
                          className="border border-white/20 text-slate-300 hover:bg-white/10 backdrop-blur-sm bg-white/5 px-6 py-3"
                        >
                          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                        </Button>
                        <Button
                          type="submit"
                          disabled={submitting}
                          className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold shadow-2xl shadow-cyan-500/25 border-0 transition-all duration-300 hover:shadow-cyan-500/40"
                        >
                          {submitting ? "Submitting..." : "Submit"}
                        </Button>
                      </div>
                      {submitError && (
                        <div className="text-red-400 text-center mt-2">{submitError}</div>
                      )}
                    </form>
                  )}

                  <div className="mt-6 text-center text-slate-300/80">
                    <p>
                      Need immediate assistance? Call us at <span className="text-cyan-400">+91-9717434098</span>
                    </p>
                    <p>
                      or drop an email at <span className="text-cyan-400">noblekode@gmail.com</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
