"use client"

import type React from "react"

import { useState, type DragEvent } from "react"
import { jobposts, type Job } from "@/data/jobposts"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    qualification: "",
    position: "", // changed from Position to position for consistency
    resume: null as File | null,
  })

  const [dragActive, setDragActive] = useState(false)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("development") // added state to track active tab

  const developmentJobs = jobposts.filter((job) => job.category === "Development")
  const designJobs = jobposts.filter((job) => job.category === "Design")
  const marketingJobs = jobposts.filter((job) => job.category === "Marketing")

  const getAvailablePositions = () => {
    switch (activeTab) {
      case "development":
        return developmentJobs
      case "design":
        return designJobs
      case "marketing":
        return marketingJobs
      default:
        return developmentJobs
    }
  }

  const JobCards = ({ jobs }: { jobs: Job[] }) => (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
      {jobs.map((job: Job, idx: number) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 transition-transform transform hover:-translate-y-2"
        >
          <h3 className={`text-2xl font-bold text-${job.color}-700 mb-3`}>{job.title}</h3>
          <p className="text-gray-600 mb-4">{job.description}</p>
          <h2 className="font-bold text-black text-xl">Tools and Technology we are looking for</h2>
            <p className="text-black gap-3">
                {job.ToolsTech.map((tool, index) => (
                  <span key={index}>{tool}{index < job.ToolsTech.length - 1 && ", "}</span>
                ))}
                </p>
          <ul className="list-disc text-gray-500 ml-6 mb-4">
            <h2 className="font-semibold">Responsibilities:</h2>
            {job.responsibilities.map((res: string, rIdx: number) => (
              <li key={rIdx}>{res}</li>
            ))}
          </ul>
          <button
            onClick={() => openModal(job)}
            className={`text-white bg-${job.color}-600 hover:bg-${job.color}-700 py-2 px-5 rounded-lg font-semibold transition-colors`}
          >
            Apply Now
          </button>
        </div>
      ))}
    </div>
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        resume: e.dataTransfer.files[0],
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = new FormData()
    data.append("name", formData.name)
    data.append("email", formData.email)
    data.append("qualification", formData.qualification)
    data.append("position", formData.position)
    if (formData.resume) {
      data.append("resume", formData.resume)
    }

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        body: data,
      })
      if (res.ok) {
        alert("Your application has been submitted!")
      } else {
        alert("Failed to submit application." + res.statusText)
      }
    } catch (err) {
      alert("Failed to submit application." + err)
    }
  }

  const openModal = (job: Job) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedJob(null)
  }

  return (
    <div className="w-full bg-gradient-to-br from-indigo-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-12 px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Join the NobleKode Family</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At NobleKode, we nurture talent with passion, creativity, and cutting-edge technology. Explore our exciting
          career opportunities and shape the digital future with us.
        </p>
      </section>

      {/* Current Openings with Tabs */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Current Openings</h2>

        <Tabs defaultValue="development" className="w-full max-w-6xl mx-auto px-6" onValueChange={setActiveTab}>
          <TabsList className="text-black rounded-3xl grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
          </TabsList>

          <TabsContent value="development" className="text-black mt-8">
            <JobCards jobs={developmentJobs} />
          </TabsContent>

          <TabsContent value="design" className="text-black mt-8">
            <JobCards jobs={designJobs} />
          </TabsContent>

          <TabsContent value="marketing" className="text-black mt-8">
            <JobCards jobs={marketingJobs} />
          </TabsContent>
        </Tabs>
      </section>

      {/* Application Form */}
      <section className="text-black bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Apply Now</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            className="text-black w-full bg-white border border-blue-300 p-3 rounded-lg text-gray-700"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            className="text-black w-full bg-white border border-blue-300 p-3 rounded-lg text-gray-700"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="qualification"
            placeholder="Highest Qualification*"
            className="text-black w-full bg-white border border-blue-300 p-3 rounded-lg text-gray-700"
            onChange={handleChange}
            required
          />

          <select
            name="position"
            className="text-black w-full bg-white border border-blue-300 p-3 rounded-lg text-gray-700"
            onChange={handleChange}
            value={formData.position}
            required
          >
            <option value="" disabled>
              Select Position*
            </option>
            {getAvailablePositions().map((job, idx) => (
              <option key={idx} value={job.title}>
                {job.title}
              </option>
            ))}
          </select>

          {/* Drag-and-drop resume */}
          <div
            className={`w-full p-6 border-2 rounded-lg cursor-pointer text-center ${
              dragActive ? "border-indigo-500 bg-indigo-50" : "border-gray-300"
            }`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            {formData.resume ? (
              <p className="text-gray-700 font-medium">✅ {formData.resume.name} uploaded</p>
            ) : (
              <p className="text-gray-500">📂 Drag & Drop your resume here or click to upload</p>
            )}
            <input type="file" name="resume" className="hidden" onChange={handleChange} id="resumeUpload" />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* Extra Info */}
      <p className="text-center text-gray-700 pb-12">
        Not sure of these job titles? Send your resume to{" "}
        <a href="mailto:contact@noblekode.com" className="text-indigo-600 font-semibold underline">
          contact@noblekode.com
        </a>
      </p>

      {/* Job Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              ×
            </button>
            <h2 className={`text-2xl font-bold mb-3 text-${selectedJob.color}-700`}>{selectedJob.title}</h2>
            <p className="text-gray-600 mb-4">{selectedJob.description}</p>
            <h3 className="font-semibold text-gray-800 mb-2">Key Skills:</h3>
            <ul className="list-disc ml-6 text-gray-600">
              {selectedJob.responsibilities.map((res, rIdx) => (
                <li key={rIdx}>{res}</li>
              ))}
            </ul>
            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className={`bg-${selectedJob.color}-600 hover:bg-${selectedJob.color}-700 text-white py-2 px-5 rounded-lg font-semibold`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
