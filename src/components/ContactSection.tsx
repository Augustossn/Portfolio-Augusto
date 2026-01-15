import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sempre aberto para novos projetos, parcerias e oportunidades
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <motion.a
                    href="mailto:augustos.souza@yahoo.com.br"
                    className="flex items-center gap-4 group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="glass-card p-3 group-hover:border-primary/50 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        augustos.souza@yahoo.com.br
                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="glass-card p-3">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Localização</p>
                      <p className="text-foreground">Brasília, DF - Brasil</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-muted-foreground mb-4">Me encontre também em:</p>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/Augustossn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-3 hover:border-primary/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/augusto-soares-de-souza-04a7482a6/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-3 hover:border-primary/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center text-center">
                <div className="glass-card p-8 w-full gradient-border">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Send className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Pronto para começar?</h4>
                  <p className="text-muted-foreground mb-6">
                    Envie um email e vamos transformar sua ideia em realidade
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
                  >
                    <a href="mailto:augustos.souza@yahoo.com.br">
                      <Mail className="mr-2 h-5 w-5" />
                      Enviar Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
