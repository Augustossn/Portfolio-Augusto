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
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">Disponível para projetos</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-foreground">Augusto </span>
            <span className="gradient-text">Soares</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-12 md:h-16 flex items-center justify-center mb-8"
          >
            <span className="text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground">
              <TypeAnimation
                sequence={[
                  "Desenvolvedor Fullstack",
                  2000,
                  "Analista de Sistemas",
                  2000,
                  "Resolvedor de Problemas",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="neon-text"
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Transformando ideias em soluções digitais com código limpo, 
            design moderno e paixão por tecnologia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow px-8 py-6 text-lg w-full sm:w-auto font-semibold"
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
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/Augustossn", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/augusto-soares-de-souza-04a7482a6/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:augustos.souza@yahoo.com.br", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 hover:border-primary/50 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;