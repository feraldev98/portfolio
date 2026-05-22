"use client"
import { Language, LanguageContext } from "@/contexts/langContext"
import { useEffect, useState, useRef } from "react"

function LanguageProvider({ children }: { children: React.ReactNode }) {
  
  const [language, setLanguage] = useState<Language>("es")
  const isInitialized = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined" || isInitialized.current) return

    const storedLang = localStorage.getItem("language") as Language | null

    if (storedLang && ["es", "en"].includes(storedLang)) {
      // TODO: verificar porque funciona bien pero da error
      setLanguage(storedLang)
    }

    isInitialized.current = true
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageProvider }