import { useLanguage } from "@/hooks/use-language";

export default function SkillsSection() {
  const { content } = useLanguage();
  const groups = content.skills;
  return <section id="skills" className="border-y border-border bg-secondary/40"><div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24"><p className="eyebrow">{content.skillsLabel}</p><h2 className="section-title mt-4">{content.skillsTitle}</h2><div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">{groups.map((group) => <article key={group.title} className="bg-card p-6"><h3 className="text-lg font-bold">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="tech-chip">{item}</span>)}</div></article>)}</div></div></section>;
}
