import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Rocket, Laptop } from "lucide-react";

const timelineItems = [
  {
    year: "2023",
    title: "Projetos Acadêmicos",
    description: "Desenvolvimento de projetos práticos utilizando C#, Java e tecnologias web modernas, construindo a base técnica.",
    icon: Code,
    type: "project"
  },
  {
    year: "Jan 2024",
    title: "Início na UCB",
    description: "Ingresso no curso de Análise e Desenvolvimento de Sistemas na Universidade Católica de Brasília (UCB).",
    icon: GraduationCap,
    type: "education"
  },
  {
    year: "Nov 2024",
    title: "Bincom Global",
    description: "Desenvolvedor de Software focado em backend .NET, manutenção de banco de dados SQL e resolução de bugs (Scrum).",
    icon: Laptop,
    type: "work"
  },
  {
    year: "Mar 2025",
    title: "Freelancer - GIS Tecnologia",
    description: "Desenvolvedor Fullstack .NET. Criação de aplicações web completas com ASP.NET Core, SQL Server e integrações de API.",
    icon: Rocket,
    type: "work"
  },
  {
    year: "Set 2025",
    title: "Estágio na CAESB",
    description: "Atuação em Análise e Desenvolvimento. Implementação de automações de dados que reduziram drasticamente o tempo de processos manuais.",
    icon: Briefcase,
    type: "work"
  },
];

const TimelineSection = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Minha <span className="gradient-text">Jornada</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma trajetória marcada por aprendizado contínuo e evolução técnica
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="timeline-line" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              <div className="absolute left-[18px] top-1">
                <div className="timeline-dot" />
              </div>

              <motion.div
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-3"
                whileHover={{ scale: 1.05 }}
              >
                {item.year}
              </motion.div>

              <motion.div
                className="glass-card-hover p-6"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="glass-card p-3 shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;