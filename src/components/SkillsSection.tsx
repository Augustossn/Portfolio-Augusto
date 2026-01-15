import { motion } from "framer-motion";

const techStack = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
];

const databaseStack = [
  { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const toolsStack = [
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
];

const SkillCard = ({ skill, index }: { skill: { name: string; icon: string }; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="skill-icon cursor-pointer flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
  >
    <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
    <span className="text-xs text-muted-foreground font-medium text-center">{skill.name}</span>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um conjunto completo de tecnologias para desenvolvimento backend, frontend e infraestrutura.
          </p>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6 text-center text-muted-foreground uppercase tracking-wider text-sm">
            Tech Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 max-w-4xl mx-auto justify-center">
            {techStack.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold mb-6 text-center text-muted-foreground uppercase tracking-wider text-sm">
              Banco de Dados
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
              {databaseStack.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-center text-muted-foreground uppercase tracking-wider text-sm">
              DevOps & Ferramentas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
              {toolsStack.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: "1.5+", label: "Anos de Experiência" },
            { value: "15+", label: "Projetos Entregues" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;