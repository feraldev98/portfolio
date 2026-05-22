import { LanguageContext } from "@/contexts/langContext";
import { useContext } from "react";

function useLanguage(){
  const context = useContext(LanguageContext)
  if(!context){
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export { useLanguage }
