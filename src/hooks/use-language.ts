import { createContext, useContext } from "react";
import { pt } from "@/lib/portfolio-content";

export type Language = "pt" | "en";
export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  content: typeof pt;
} | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
