const groups = [
  { title: "Back-end", items: ["Java", "Spring Boot", "C#/.NET", "ASP.NET Core", "Python", "Django", "Node.js", "APIs REST"] },
  { title: "Front-end", items: ["React", "TypeScript", "JavaScript", "Angular", "Vue 3", "HTML/CSS", "SASS"] },
  { title: "Dados", items: ["PostgreSQL", "SQL Server", "MySQL", "H2", "SQL", "Flyway", "Modelagem relacional"] },
  { title: "Qualidade e entrega", items: ["JUnit", "xUnit", "Pytest", "Testcontainers", "Docker", "GitHub Actions", "CI/CD", "Swagger/OpenAPI"] },
];

export default function SkillsSection() {
  return <section id="skills" className="border-y border-border bg-secondary/40"><div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24"><p className="eyebrow">04 · Tecnologias</p><h2 className="section-title mt-4">Tecnologias com que trabalho</h2><div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">{groups.map((group) => <article key={group.title} className="bg-card p-6"><h3 className="text-lg font-bold">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="tech-chip">{item}</span>)}</div></article>)}</div></div></section>;
}
