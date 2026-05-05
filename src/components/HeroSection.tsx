import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static grid background instead of animated circles for better performance */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Simplified, subtle decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">Disponível para projetos</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-foreground">Augusto </span>
            <span className="gradient-text">Soares</span>
          </h1>

          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <span className="text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground">
              <TypeAnimation
                sequence={[
                  "Desenvolvedor Full Stack",
                  2000,
                  "Especialista .NET & Python",
                  2000,
                  "No-Code & AI Architect",
                  2000,
                  "Analista de Sistemas",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="neon-text"
              />
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Especializado em APIs escaláveis, automação de processos e 
            interfaces de alta fidelidade. Transformando dados complexos em 
            decisões estratégicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg w-full sm:w-auto font-semibold"
            >
              Ver Projetos
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-muted-foreground/30 hover:border-primary hover:text-primary px-8 py-6 text-lg w-full sm:w-auto"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Baixar CV
                </Button>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-md bg-black/90 border-white/10 backdrop-blur-xl">
                <DialogHeader>
                  <DialogTitle className="text-xl text-center text-foreground">
                    Selecione o Idioma
                  </DialogTitle>
                  <DialogDescription className="text-center text-muted-foreground">
                    Escolha a versão do currículo que deseja baixar.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-2 gap-4 py-4">
                  <a href="/Currículo Augusto Soares.pdf" download="Augusto_Soares_CV_PT.pdf" className="w-full">
                    <Button variant="outline" className="w-full h-24 flex flex-col gap-2 hover:border-primary hover:bg-primary/10 transition-all group">
                      <span className="text-2xl">🇧🇷</span>
                      <span className="font-semibold group-hover:text-primary">Português</span>
                      <span className="text-xs text-muted-foreground">Versão PDF</span>
                    </Button>
                  </a>

                  <a href="/Augusto's CV.pdf" download="Augusto_Soares_CV_EN.pdf" className="w-full">
                    <Button variant="outline" className="w-full h-24 flex flex-col gap-2 hover:border-primary hover:bg-primary/10 transition-all group">
                      <span className="text-2xl">🇺🇸</span>
                      <span className="font-semibold group-hover:text-primary">English</span>
                      <span className="text-xs text-muted-foreground">PDF Version</span>
                    </Button>
                  </a>
                </div>
              </DialogContent>
            </Dialog>
            
          </div>

          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: "https://github.com/Augustossn", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/augusto-soares-de-souza-04a7482a6/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:augustos.souza@yahoo.com.br", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 hover:border-primary/50 transition-all duration-300 group"
              >
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
