import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const sections = ["#experiencia", "#formacao", "#projetos", "#skills"];

export default function Navbar() {
  const { language, setLanguage, content } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"fixed inset-x-0 top-0 z-50 border-b transition-all " + (scrolled ? "border-border bg-background/95 shadow-sm backdrop-blur" : "border-transparent bg-card")}>
      <nav aria-label={language === "pt" ? "Navegação principal" : "Main navigation"} className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-3 px-5 md:px-8">
        <a href="#inicio" onClick={() => setOpen(false)} className="shrink-0 font-bold tracking-[-.04em]">Augusto Soares</a>
        <div className="hidden items-center gap-5 md:flex">
          {sections.map((href, index) => <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">{content.nav[index]}</a>)}
          <a href="#contato" className="border border-foreground px-3.5 py-2 text-sm font-semibold transition hover:bg-primary hover:text-primary-foreground">{content.contactLabel}</a>
        </div>
        <div className="flex items-center gap-3">
          <div role="group" aria-label={content.languageLabel} className="flex border border-border p-0.5">
            {(["pt", "en"] as const).map(locale => (
              <button key={locale} type="button" lang={locale === "pt" ? "pt-BR" : "en"} aria-label={locale === "pt" ? "Português" : "English"} aria-pressed={language === locale}
                onClick={() => setLanguage(locale)} className={"px-2.5 py-2 text-xs font-semibold transition " + (language === locale ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground")}>
                {locale.toUpperCase()}
              </button>
            ))}
          </div>
          <button type="button" className="grid h-9 w-9 place-items-center border border-border md:hidden" onClick={() => setOpen(!open)} aria-label={open ? content.closeMenu : content.openMenu} aria-expanded={open} aria-controls="mobile-navigation">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      {open && <div id="mobile-navigation" className="border-t border-border bg-background px-5 py-5 md:hidden">
        <div className="mx-auto flex max-w-6xl flex-col gap-4">
          {sections.map((href, index) => <a key={href} href={href} onClick={() => setOpen(false)} className="font-semibold">{content.nav[index]}</a>)}
          <a href="#contato" onClick={() => setOpen(false)} className="font-semibold">{content.contactLabel}</a>
        </div>
      </div>}
    </header>
  );
}
