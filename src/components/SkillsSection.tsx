const groups = [
  { title: "Back-end", items: ["Python", "Django", "Java", "Spring Boot", "C#/.NET", "Node.js", "APIs REST"] },
  { title: "Front-end", items: ["React", "TypeScript", "JavaScript", "Angular", "Vue 3", "HTML/CSS"] },
  { title: "Dados", items: ["PostgreSQL", "SQL Server", "MySQL", "H2", "Modelagem relacional", "Otimização SQL"] },
  { title: "Qualidade e entrega", items: ["Pytest", "Testes de integração", "Git/GitHub", "GitHub Actions", "Docker", "Swagger/OpenAPI"] },
];
export default function SkillsSection() { return <section id="skills" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"><div className="max-w-2xl"><p className="eyebrow">Competências</p><h2 className="section-title mt-4">Tecnologia é meio. Clareza e qualidade são padrão.</h2><p className="section-copy">Tenho perfil full stack, com maior atuação em back-end, integrações, automação e bancos de dados.</p></div><div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">{groups.map(group => <article key={group.title} className="bg-background p-7"><h3 className="text-lg font-extrabold">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="bg-secondary px-3 py-1.5 text-sm font-semibold text-foreground">{item}</span>)}</div></article>)}</div></section>; }
