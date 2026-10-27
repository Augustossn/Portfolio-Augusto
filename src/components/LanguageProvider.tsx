import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext, type Language } from "@/hooks/use-language";
import { en, pt } from "@/lib/portfolio-content";

function initialLanguage(): Language {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (requested === "en" || requested === "pt") return requested;
  try { return localStorage.getItem("portfolio-language") === "en" ? "en" : "pt"; }
  catch { return "pt"; }
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const content = language === "en" ? en : pt;

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";
    document.title = content.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", content.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", content.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", content.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", content.title);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState(window.history.state, "", url);
    try { localStorage.setItem("portfolio-language", language); } catch { /* Language switching still works when storage is unavailable. */ }
  }, [language, content]);

  return <LanguageContext.Provider value={{ language, setLanguage, content }}>{children}</LanguageContext.Provider>;
}
