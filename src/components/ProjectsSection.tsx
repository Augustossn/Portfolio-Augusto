import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Study Planner",
    description: "Aplicação fullstack para gerenciamento de estudos com foco em produtividade. Permite criar planos de estudo personalizados, acompanhar progresso e definir metas.",
    tech: ["Spring Boot", "React", "PostgreSQL", "Docker", "JUnit"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    github: "https://github.com/Augustossn/StudyPlanner",
    //demo: "*",
    featured: true,
  },
  {
    title: "DatingApp (Em criação)",
    description: "Rede social de encontros com sistema de matching baseado em preferências e localização. Inclui chat em tempo real e perfis detalhados.",
    tech: [".NET", "Angular", "TypeScript"],
    image: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?w=800&h=500&fit=crop",
    github: "https://github.com/Augustossn/DatingApp",
    //demo: "#",
    featured: false,
  },
  {
    title: "Classificador de Emails",
    description: "Classificador inteligente de emails utilizando Machine Learning. Categoriza automaticamente mensagens por prioridade e tipo.",
    tech: ["Python", "Flask", "OpenAI", "React", "Render"],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop",
    github: "https://github.com/Augustossn/Classificador-de-Email",
    //demo: "#",
    featured: false,
  },
  {
    title: "Controle de Gastos Residenciais",
    description: "Sistema de controle financeiro familiar para monitorar despesas e receitas domésticas.",
    tech: [".NET", "React", "TypeScript", "xUnit", "Node.js"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=500&fit=crop",
    github: "https://github.com/Augustossn/Controle-de-Gastos-Residenciais",
    //demo: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções construídas com dedicação e as melhores práticas de desenvolvimento
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Featured project */}
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card-hover overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm">
                    <Sparkles className="h-4 w-4" />
                    Destaque
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                    {/*<Button asChild variant="outline" className="border-muted-foreground/30 hover:border-primary">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>*/}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Other projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card-hover overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button asChild size="sm" variant="ghost" className="hover:text-primary">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    {/*<Button asChild size="sm" variant="ghost" className="hover:text-primary">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>*/}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary"
          >
            <a href="https://github.com/Augustossn" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Ver todos no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
