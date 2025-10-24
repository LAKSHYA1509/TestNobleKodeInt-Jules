"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Step = "service" | "industry" | "features" | "contact" | "results"

interface CalculatorData {
  services: string[]
  industry: string
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

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState<Step>("service")
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    services: [],
    industry: "",
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

  const handleNext = () => {
    if (currentStep === "service" && calculatorData.services.length > 0) {
      setCurrentStep("industry")
    } else if (currentStep === "industry" && calculatorData.industry) {
      setCurrentStep("features")
    } else if (currentStep === "features") {
      setCurrentStep("contact")
    }
  }

  const handlePrevious = () => {
    if (currentStep === "industry") {
      setCurrentStep("service")
    } else if (currentStep === "features") {
      setCurrentStep("industry")
    } else if (currentStep === "contact") {
      setCurrentStep("features")
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (contactData.name && contactData.email && contactData.phone) {
      setCurrentStep("results")
    }
  }

  const calculateEstimate = () => {
    const basePrice = 8000

    // Service-based pricing
    const serviceMultiplier = calculatorData.services.length
    let servicePricing = 0

    calculatorData.services.forEach((service) => {
      if (service === "Web Development") servicePricing += 12000
      if (service === "Mobile App (iOS)") servicePricing += 18000
      if (service === "Mobile App (Android)") servicePricing += 18000
      if (service === "UI/UX Design") servicePricing += 8000
      if (service === "E-commerce") servicePricing += 15000
      if (service === "Custom Software") servicePricing += 25000
    })

    // Industry complexity multiplier
    let industryMultiplier = 1
    if (calculatorData.industry === "Healthcare" || calculatorData.industry === "Finance") industryMultiplier = 1.5
    if (calculatorData.industry === "Education" || calculatorData.industry === "Real Estate") industryMultiplier = 1.3

    const featurePrice = calculatorData.features.length * 3000

    return Math.round(servicePricing * industryMultiplier + featurePrice)
  }

  const getStepProgress = () => {
    const steps = ["service", "industry", "features", "contact", "results"]
    const currentIndex = steps.indexOf(currentStep)
    return ((currentIndex + 1) / steps.length) * 100
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Floating background elements */}
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
            <span className={currentStep === "contact" ? "text-cyan-400" : ""}>Contact</span>
            <span className={currentStep === "results" ? "text-cyan-400" : ""}>Results</span>
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
                    What Service Do You Need?
                  </CardTitle>
                  <p className="text-xl text-slate-300/90">Select all services that apply to your project</p>
                </CardHeader>
                <CardContent className="space-y-8 relative z-10 px-12 pb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: "Web Development", desc: "Responsive websites & web apps", icon: "🌐" },
                      { name: "Mobile App (iOS)", desc: "Native iOS applications", icon: "📱" },
                      { name: "Mobile App (Android)", desc: "Native Android applications", icon: "🤖" },
                      { name: "UI/UX Design", desc: "User interface & experience design", icon: "🎨" },
                      { name: "E-commerce", desc: "Online stores & marketplaces", icon: "🛒" },
                      { name: "Custom Software", desc: "Tailored business solutions", icon: "⚙️" },
                    ].map((service) => (
                      <div
                        key={service.name}
                        onClick={() => handleServiceToggle(service.name)}
                        className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                          calculatorData.services.includes(service.name)
                            ? "border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-lg shadow-cyan-500/25"
                            : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
                        }`}
                      >
                        <div className="text-4xl mb-4">{service.icon}</div>
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
          <div className="max-w-4xl mx-auto">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { name: "Technology", icon: "💻" },
                      { name: "Healthcare", icon: "🏥" },
                      { name: "Finance", icon: "💰" },
                      { name: "Education", icon: "🎓" },
                      { name: "E-commerce", icon: "🛍️" },
                      { name: "Real Estate", icon: "🏠" },
                      { name: "Food & Beverage", icon: "🍽️" },
                      { name: "Other", icon: "🌟" },
                    ].map((industry) => (
                      <div
                        key={industry.name}
                        onClick={() => setCalculatorData((prev) => ({ ...prev, industry: industry.name }))}
                        className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 text-center ${
                          calculatorData.industry === industry.name
                            ? "border-purple-500 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 shadow-lg shadow-purple-500/25"
                            : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
                        }`}
                      >
                        <div className="text-4xl mb-4">{industry.icon}</div>
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
                      disabled={!calculatorData.industry}
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
          <div className="max-w-4xl mx-auto">
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
                    {[
                      { name: "User Authentication", desc: "Login, signup, password reset", icon: "🔐" },
                      { name: "Payment Integration", desc: "Stripe, PayPal, credit cards", icon: "💳" },
                      { name: "Real-time Chat", desc: "Live messaging & notifications", icon: "💬" },
                      { name: "Push Notifications", desc: "Mobile & web notifications", icon: "🔔" },
                      { name: "Analytics Dashboard", desc: "User behavior & insights", icon: "📊" },
                      { name: "Admin Panel", desc: "Content & user management", icon: "⚡" },
                      { name: "API Integration", desc: "Third-party service connections", icon: "🔗" },
                      { name: "Multi-language", desc: "Internationalization support", icon: "🌍" },
                      { name: "Social Media Login", desc: "Google, Facebook, Twitter", icon: "📱" },
                    ].map((feature) => (
                      <div
                        key={feature.name}
                        onClick={() => handleFeatureToggle(feature.name)}
                        className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                          calculatorData.features.includes(feature.name)
                            ? "border-green-500 bg-gradient-to-br from-green-500/20 to-blue-500/20 shadow-lg shadow-green-500/25"
                            : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
                        }`}
                      >
                        <div className="text-3xl mb-3">{feature.icon}</div>
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
                      Next Step <ChevronRight className="ml-2 h-5 w-5" />
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
                    Complete this form to see your estimated cost and get a free website analysis
                  </p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white/90">Name *</label>
                        {/* Glassmorphism styling to input fields */}
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white/90">Company/Organization</label>
                        <Input
                          value={contactData.company}
                          onChange={(e) => setContactData((prev) => ({ ...prev, company: e.target.value }))}
                          className="backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder:text-slate-400 hover:bg-white/15 focus:bg-white/15 transition-all duration-300"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white/90">Website URL</label>
                        <Input
                          value={contactData.website}
                          onChange={(e) => setContactData((prev) => ({ ...prev, website: e.target.value }))}
                          className="backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder:text-slate-400 hover:bg-white/15 focus:bg-white/15 transition-all duration-300"
                          placeholder="https://yourwebsite.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white/90">Target Market</label>
                        <Input
                          value={contactData.targetMarket}
                          onChange={(e) => setContactData((prev) => ({ ...prev, targetMarket: e.target.value }))}
                          className="backdrop-blur-sm bg-white/10 border border-white/20 text-white placeholder:text-slate-400 hover:bg-white/15 focus:bg-white/15 transition-all duration-300"
                          placeholder="Your target market"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/90">Service Interested In</label>
                      <Select
                        value={contactData.service}
                        onValueChange={(value) => setContactData((prev) => ({ ...prev, service: value }))}
                      >
                        <SelectTrigger className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all duration-300">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent className="backdrop-blur-xl bg-slate-800/90 border border-white/20">
                          <SelectItem value="web-development" className="text-white hover:bg-white/10">
                            Web Development
                          </SelectItem>
                          <SelectItem value="mobile-app" className="text-white hover:bg-white/10">
                            Mobile App Development
                          </SelectItem>
                          <SelectItem value="ui-ux-design" className="text-white hover:bg-white/10">
                            UI/UX Design
                          </SelectItem>
                          <SelectItem value="digital-marketing" className="text-white hover:bg-white/10">
                            Digital Marketing
                          </SelectItem>
                        </SelectContent>
                      </Select>
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
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold shadow-2xl shadow-cyan-500/25 border-0 transition-all duration-300 hover:shadow-cyan-500/40"
                      >
                        Get My Estimate
                      </Button>
                    </div>
                  </form>

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
                  <p className="text-slate-300/90">Thank you {contactData.name}! Here's your personalized estimate</p>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="text-center">
                    {/* Glowing effect to price */}
                    <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2 drop-shadow-2xl">
                      ${calculateEstimate().toLocaleString()}
                    </div>
                    <p className="text-slate-300/90">Estimated Project Cost</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-slate-300/90">Services:</span>
                      <div className="flex gap-2 flex-wrap">
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
                      <Badge className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-sm">
                        {calculatorData.industry}
                      </Badge>
                    </div>
                    {calculatorData.features.length > 0 && (
                      <div className="flex justify-between items-start py-3 border-b border-white/10">
                        <span className="text-slate-300/90">Features:</span>
                        <div className="flex flex-wrap gap-2 max-w-xs">
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

                  {/* Glassmorphism styling to next steps card */}
                  <div className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20">
                    <h3 className="font-semibold text-white mb-2">What's Next?</h3>
                    <p className="text-slate-300/90 text-sm mb-4">
                      Our team will analyze your requirements and send you a detailed proposal within 24 hours.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white shadow-lg shadow-green-500/25 border-0 transition-all duration-300">
                      Schedule a Free Consultation
                    </Button>
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
