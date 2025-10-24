"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface PopupContextType {
  isPopupVisible: boolean
  showPopup: () => void
  hidePopup: () => void
  popupData: any
  setPopupData: (data: any) => void
}

const PopupContext = createContext<PopupContextType | undefined>(undefined)

export function PopupProvider({ children }: { children: ReactNode }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [popupData, setPopupData] = useState(null)

  const showPopup = () => setIsPopupVisible(true)
  const hidePopup = () => setIsPopupVisible(false)

  return (
    <PopupContext.Provider
      value={{
        isPopupVisible,
        showPopup,
        hidePopup,
        popupData,
        setPopupData,
      }}
    >
      {children}
    </PopupContext.Provider>
  )
}

export function usePopup() {
  const context = useContext(PopupContext)
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider")
  }
  return context
}
