import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Trajetória", href: "#sobre" }, { label: "Projetos", href: "#projetos" },
  { label: "Competências", href: "#skills" }, { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-border bg-background/95 text-foreground shadow-sm backdrop-blur" : "text-white"}`}>
    <nav className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 md:px-8"><a href="#inicio" className="flex items-center gap-3 font-bold tracking-[-0.04em]"><span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-300 text-sm text-slate-950">AS</span><span>Augusto Soares</span></a><div className="hidden items-center gap-7 md:flex">{navItems.map((item) => <a key={item.href} href={item.href} className={`text-sm font-medium transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-slate-300 hover:text-white"}`}>{item.label}</a>)}<a href="mailto:augustos.souza@yahoo.com.br" className="rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Vamos conversar</a></div><button className={`grid h-10 w-10 place-items-center rounded-lg border md:hidden ${scrolled ? "border-border" : "border-white/20"}`} onClick={() => setOpen(!open)} aria-label="Abrir menu">{open ? <X size={20} /> : <Menu size={20} />}</button></nav>
    {open && <div className="border-t border-border bg-background px-5 py-5 text-foreground md:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-4">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-base font-semibold">{item.label}</a>)}</div></div>}
  </header>;
}
