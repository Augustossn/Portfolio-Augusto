import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Rocket, Laptop } from "lucide-react";

const timelineItems = [
  {
    year: "Mar 2026 - Atual",
    title: "Dali - Desenvolvedor Full Stack",
    description: "Desenvolvimento de plataforma No-Code (IDE visual) em Python e Vue 3 com IA Agents, VueFlow e SVG Animations. Construção de dashboards financeiros estratégicos integrados a ERPs.",
    icon: Rocket,
    type: "work"
  },
  {
    year: "Set 2025 - Mar 2026",
    title: "CAESB - Estagiário em Desenvolvimento",
    description: "Automação de rotinas com C# e Python, reduzindo processamento interno em 50%. Manipulação de grandes volumes de dados SQL Server.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "Mar 2025 - Atual",
    title: "GIS Tecnologia - Desenvolvedor Full Stack",
    description: "APIs RESTful com .NET Core e modelagem relacional para regras financeiras complexas. Otimização avançada de consultas SQL.",
    icon: Laptop,
    type: "work"
  },
  {
    year: "Nov 2024 - Jan 2025",
    title: "Bincom Global - Desenvolvedor Software",
    description: "Manutenção de sistemas legados .NET e evolução de consultas complexas seguindo ritos ágeis.",
    icon: Code,
    type: "work"
  },
  {
    year: "Jan 2024",
    title: "Início na UCB",
    description: "Análise e Desenvolvimento de Sistemas na Universidade Católica de Brasília.",
    icon: GraduationCap,
    type: "education"
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