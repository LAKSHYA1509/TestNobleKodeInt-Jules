"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { FilterTabs, FilterButtons } from "@/components/ui/filter-tabs"
import { CaseStudyCard } from "@/components/ui/case-study-card"
import { portfolioData, filterTabs, industryFilters, serviceFilters, regionFilters } from "@/data/portfolio"

export default function Portf() {
  const [activeTab, setActiveTab] = useState("industries")
  const [activeFilter, setActiveFilter] = useState("all")

  // Get current filter options based on active tab
  const currentFilters = useMemo(() => {
    switch (activeTab) {
      case "services":
        return serviceFilters
      case "regions":
        return regionFilters
      default:
        return industryFilters
    }
  }, [activeTab])

  // Filter portfolio data based on active filter
  const filteredPortfolio = useMemo(() => {
    if (activeFilter === "all") return portfolioData

    return portfolioData.filter((item) => {
      switch (activeTab) {
        case "industries":
          return item.category.toLowerCase().replace(/\s+/g, "").includes(activeFilter.replace(/\s+/g, ""))
        case "services":
          return item.tags.some((tag) =>
            tag.toLowerCase().replace(/\s+/g, "").includes(activeFilter.replace(/\s+/g, "")),
          )
        case "regions":
          // For demo purposes, we'll randomly assign regions
          return true
        default:
          return true
      }
    })
  }, [activeTab, activeFilter])

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setActiveFilter("all") // Reset filter when changing tabs
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Alert Banner */}
    
      {/* Filter Section */}
      <section className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main Filter Tabs */}
            <FilterTabs tabs={filterTabs} activeTab={activeTab} onTabChange={handleTabChange} className="mb-8" />

            {/* Sub Filter Buttons */}
            <FilterButtons filters={currentFilters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </motion.div>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            key={`${activeTab}-${activeFilter}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
          >
            {filteredPortfolio.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`${index === 0 ? "md:col-span-2 lg:col-span-2" : ""} ${index === 3 ? "lg:col-span-2" : ""}`}
              >
                <CaseStudyCard caseStudy={caseStudy} index={index} />
              </div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredPortfolio.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-gray-400 text-lg">No case studies found for the selected filter.</div>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Show all case studies
              </button>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  )
}
