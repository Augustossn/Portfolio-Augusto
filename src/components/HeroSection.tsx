import { useLanguage } from "@/hooks/use-language";
import { ArrowDownRight, Download } from "lucide-react";

export default function HeroSection() {
  const { content } = useLanguage();
  const steps = content.hero.steps;
  return (
    <section id="inicio" className="border-b border-border bg-card pt-28 md:pt-36">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 md:grid-cols-[1.05fr_.95fr] md:px-8 md:pb-20">
        <div>
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1 className="mt-5 text-5xl font-bold leading-[.95] tracking-[-.07em] md:text-7xl">Augusto Soares de Souza</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            {content.hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projetos" className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90">
              {content.hero.projects} <ArrowDownRight size={18} />
            </a>
            <a href="/Currículo Augusto Soares.pdf" download className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 font-semibold transition hover:border-foreground/40">
              <Download size={17} /> {content.hero.resume}
            </a>
          </div>
        </div>
        <aside className="border-t border-border pt-5 md:self-end">
          <p className="text-sm font-bold">{content.hero.work}</p>
          <ol className="mt-4 divide-y divide-border">
            {steps.map(([number, title, description]) => (
              <li key={number} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 first:pt-0">
                <span className="font-mono text-xs text-accent">{number}</span>
                <div><p className="font-semibold">{title}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p></div>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
