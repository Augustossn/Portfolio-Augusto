import { useLanguage } from "@/hooks/use-language";
export default function Footer() {
  const { content } = useLanguage(); return <footer className="border-t border-border py-7"><div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-xs text-muted-foreground md:flex-row md:justify-between md:px-8"><p>© {new Date().getFullYear()} Augusto Soares de Souza</p><p>{content.footer}</p></div></footer>; }
