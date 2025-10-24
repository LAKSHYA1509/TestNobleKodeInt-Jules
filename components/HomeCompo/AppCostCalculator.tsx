// "use client"
// import { useState } from "react"

// interface AppCostCalculatorProps {
//   onShowCost: (cost: number) => void
// }

// const AppCostCalculator = ({ onShowCost }: AppCostCalculatorProps) => {
//   const basePrices = {
//     platform: {
//       ios: 5000,
//       android: 5000,
//       web: 4000,
//     },
//     complexity: {
//       simple: 3000,
//       medium: 7000,
//       complex: 12000,
//     },
//     features: {
//       login: 1000,
//       payment: 2000,
//       chat: 1500,
//       notifications: 1000,
//     },
//   }

//   const [platforms, setPlatforms] = useState<Platform[]>([])
//   const [complexity, setComplexity] = useState<Complexity>("simple")
//   const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([])

//   type Platform = "ios" | "android" | "web"
//   type Complexity = "simple" | "medium" | "complex"
//   type Feature = "login" | "payment" | "chat" | "notifications"

//   const togglePlatform = (platform: Platform) => {
//     setPlatforms((prev: Platform[]) =>
//       prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform],
//     )
//   }

//   const toggleFeature = (feature: Feature) => {
//     setSelectedFeatures((prev: Feature[]) =>
//       prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature],
//     )
//   }

//   const calculateCost = () => {
//     let cost = 0
//     platforms.forEach((p) => (cost += basePrices.platform[p] || 0))
//     cost += basePrices.complexity[complexity] || 0
//     selectedFeatures.forEach((f) => (cost += basePrices.features[f] || 0))
//     return cost
//   }

//   const handleShowCost = () => {
//     const cost = calculateCost()
//     onShowCost(cost)
//   }

//   return (
//     <section className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
//       <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">Estimate Your App Cost</h2>

//       {/* Platforms Selector */}
//       <div className="mb-6">
//         <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Select Platforms:</p>
//         <div className="flex gap-4 flex-wrap">
//           {["ios", "android", "web"].map((platform) => (
//             <button
//               key={platform}
//               type="button"
//               onClick={() => togglePlatform(platform as Platform)}
//               className={`px-5 py-2 rounded-lg font-medium transition ${
//                 platforms.includes(platform as Platform)
//                   ? "bg-blue-600 text-white shadow-md"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
//               }`}
//             >
//               {platform.toUpperCase()}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Complexity Selector */}
//       <div className="mb-6">
//         <label htmlFor="complexity" className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
//           Select Complexity:
//         </label>
//         <select
//           id="complexity"
//           value={complexity}
//           onChange={(e) => setComplexity(e.target.value as Complexity)}
//           className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="simple">Simple</option>
//           <option value="medium">Medium</option>
//           <option value="complex">Complex</option>
//         </select>
//       </div>

//       {/* Features Selector */}
//       <div className="mb-6">
//         <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Select Additional Features:</p>
//         <div className="flex gap-3 flex-wrap">
//           {["login", "payment", "chat", "notifications"].map((feature) => (
//             <button
//               key={feature}
//               type="button"
//               onClick={() => toggleFeature(feature as Feature)}
//               className={`px-4 py-2 rounded-lg font-medium transition ${
//                 selectedFeatures.includes(feature as Feature)
//                   ? "bg-green-600 text-white shadow-md"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
//               }`}
//             >
//               {feature.charAt(0).toUpperCase() + feature.slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="mt-8 text-center">
//         <button
//           type="button"
//           onClick={handleShowCost}
//           className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-cyan-600 transition text-lg"
//           disabled={platforms.length === 0}
//         >
//           Show Estimated Cost
//         </button>
//         {platforms.length === 0 && <p className="text-sm text-gray-500 mt-2">Please select at least one platform</p>}
//       </div>
//     </section>
//   )
// }

// export default AppCostCalculator
