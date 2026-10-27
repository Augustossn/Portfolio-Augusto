import { useLanguage } from "@/hooks/use-language";

export default function TimelineSection() {
  const { content } = useLanguage();
  const experience = content.experience;
  return <section id="experiencia" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">{content.experienceLabel}</p><h2 className="section-title mt-4">{content.experienceTitle}</h2><p className="section-copy">{content.experienceCopy}</p></div><div className="border-t border-border">{experience.map((item) => <article key={item.company} className="grid gap-4 border-b border-border py-7 md:grid-cols-[10rem_1fr]"><p className="font-mono text-xs leading-5 text-muted-foreground">{item.period}</p><div><h3 className="text-lg font-bold">{item.company}</h3><p className="mt-1 text-sm font-semibold text-accent">{item.role}</p><p className="mt-4 leading-7 text-muted-foreground">{item.text}</p><p className="mt-3 text-sm leading-6 text-foreground">{item.practices}</p><div className="mt-4 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="tech-chip">{tag}</span>)}</div></div></article>)}</div></div></section>;
}
