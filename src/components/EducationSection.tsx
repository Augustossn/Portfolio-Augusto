import { useLanguage } from "@/hooks/use-language";

export default function EducationSection() {
  const { content } = useLanguage();
  const education = content.education;
  return <section id="formacao" className="border-y border-border bg-secondary/40"><div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24"><p className="eyebrow">{content.educationLabel}</p><h2 className="section-title mt-4">{content.educationTitle}</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{education.map((item) => <article key={item.course} className="border border-border bg-card p-6"><p className="font-mono text-xs text-muted-foreground">{item.period}</p><h3 className="mt-5 text-xl font-bold tracking-[-.035em]">{item.course}</h3><p className="mt-2 text-sm font-semibold text-accent">{item.institution}</p><p className="mt-5 text-sm leading-6 text-muted-foreground">{item.detail}</p></article>)}</div></div></section>;
}
