"use client"
import { cn } from "@/lib/utils"

interface FilterTab {
    id: string
    label: string
    count?: number
}

interface FilterTabsProps {
    tabs: FilterTab[]
    activeTab: string
    onTabChange: (tabId: string) => void
    className?: string
}

export function FilterTabs({ tabs, activeTab, onTabChange, className }: FilterTabsProps) {
    return (
        <div className={cn("flex items-center gap-8 border-b border-gray-700", className)}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={cn(
                        "pb-4 text-lg font-medium transition-all duration-200 relative",
                        activeTab === tab.id ? "text-white border-b-2 border-cyan-400" : "text-gray-400 hover:text-gray-300",
                    )}
                >
                    {tab.label}
                    {tab.count && <span className="ml-2 text-sm bg-gray-700 px-2 py-1 rounded-full">{tab.count}</span>}
                </button>
            ))}
        </div>
    )
}

interface FilterButton {
    id: string
    label: string
    active?: boolean
}

interface FilterButtonsProps {
    filters: FilterButton[]
    activeFilter: string
    onFilterChange: (filterId: string) => void
    className?: string
}

export function FilterButtons({ filters, activeFilter, onFilterChange, className }: FilterButtonsProps) {
    return (
        <div className={cn("flex flex-wrap gap-3 mt-8", className)}>
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    onClick={() => onFilterChange(filter.id)}
                    className={cn(
                        "px-4 py-2 rounded-full border transition-all duration-200 text-sm font-medium",
                        activeFilter === filter.id
                            ? "bg-cyan-400 text-black border-cyan-400"
                            : "bg-transparent text-gray-300 border-gray-600 hover:border-gray-500 hover:text-white",
                    )}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    )
}
