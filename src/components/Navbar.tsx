import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Experiência", href: "#experiencia" }, { label: "Formação", href: "#formacao" },
  { label: "Projetos", href: "#projetos" }, { label: "Tecnologias", href: "#skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 12); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${scrolled ? "border-border bg-background/95 shadow-sm backdrop-blur" : "border-transparent bg-card"}`}><nav className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 md:px-8"><a href="#inicio" className="font-bold tracking-[-.04em]">Augusto Soares</a><div className="hidden items-center gap-6 md:flex">{navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">{item.label}</a>)}<a href="mailto:augustos.souza@yahoo.com.br" className="border border-foreground px-3.5 py-2 text-sm font-semibold transition hover:bg-primary hover:text-primary-foreground">Contato</a></div><button className="grid h-9 w-9 place-items-center border border-border md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu">{open ? <X size={19} /> : <Menu size={19} />}</button></nav>{open && <div className="border-t border-border bg-background px-5 py-5 md:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-4">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-semibold">{item.label}</a>)}</div></div>}</header>;
}
