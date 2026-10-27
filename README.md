# Portfólio – Augusto Soares de Souza

Um **portfólio pessoal moderno** desenvolvido como **Single Page Application (SPA)**, focado em demonstrar competências **Fullstack**, com **design contemporâneo** e **animações fluidas**.

---

## Idiomas

O seletor PT/EN no cabeçalho traduz todas as seções e mantém a preferência neste navegador.

- Português: https://portfolio-augusto-ruddy.vercel.app/?lang=pt
- English: https://portfolio-augusto-ruddy.vercel.app/?lang=en

O parâmetro lang do link tem prioridade sobre a preferência salva. Os textos ficam em src/lib/portfolio-content.ts; o download do currículo continua identificado como português.

---
## 🎨 Conceito Visual

O projeto segue uma estética **Glassmorphism em Dark Mode**, utilizando:

* **Cores**: tons de cinza chumbo / preto fosco com detalhes em neon (roxo e ciano)
* **Efeitos**: glassmorphism (vidro fosco) nos cards, trazendo profundidade e sofisticação
* **Animações**: transições suaves com *fade-in* conforme o scroll da página

---

## 🛠 Tecnologias Utilizadas

| Categoria               | Tecnologia           |
| ----------------------- | -------------------- |
| **Framework**           | React 18             |
| **Build Tool**          | Vite                 |
| **Linguagem**           | TypeScript           |
| **Estilização**         | Tailwind CSS         |
| **Componentes UI**      | shadcn/ui            |
| **Animações**           | Framer Motion        |
| **Efeito de Digitação** | react-type-animation |
| **Ícones**              | Lucide React         |
| **Roteamento**          | React Router DOM     |

---

## 📂 Estrutura do Projeto
```
.
├── public/
├── src/
│ ├── components/
│ │ ├── ui/ # Componentes shadcn/ui
│ │ ├── ContactSection.tsx # Seção de contato
│ │ ├── Footer.tsx # Rodapé com links sociais
│ │ ├── HeroSection.tsx # Seção inicial com efeito de digitação
│ │ ├── Navbar.tsx # Navegação responsiva
│ │ ├── NavLink.tsx # Links reutilizáveis da navbar
│ │ ├── ProjectsSection.tsx # Portfólio de projetos
│ │ ├── SkillsSection.tsx # Grid de tecnologias
│ │ └── TimelineSection.tsx # Linha do tempo profissional
│ ├── hooks/ # Custom hooks
│ ├── lib/ # Utilitários e helpers
│ ├── pages/ # Páginas da aplicação
│ ├── App.css # Estilos globais do App
│ ├── App.tsx # Componente raiz
│ ├── index.css # Variáveis CSS e estilos globais
│ ├── main.tsx # Entry point da aplicação
│ └── vite-env.d.ts # Tipagens do Vite
├── .gitignore
├── bun.lock
├── components.json # Configuração do shadcn/ui
├── eslint.config.js # Configuração do ESLint
├── index.html # HTML base
├── package.json
├── package-lock.json
├── postcss.config.js # Configuração do PostCSS
├── README.md
├── tailwind.config.ts # Configuração do Tailwind CSS
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts # Configuração do Vite
```
---

## 🕸 Seções do Site

### 🚀 Hero Section

* Nome com **gradiente animado**
* Subtítulo dinâmico com **efeito de digitação** (*TypeAnimation*)
* **CTAs** para projetos e download de CV

---

### 🕒 Timeline (Sobre)

* Linha do tempo visual da jornada profissional
* Marcos:

  * UCB
  * Projetos Acadêmicos
  * CAESB
  * GIS Tecnologia
* Animações de entrada com **Framer Motion**

---

### 📁 Projetos

* Cards com efeito **glassmorphism**
* Projeto em destaque (*featured*)
* Tags com tecnologias utilizadas
* Links para **GitHub** 
---

### 🧠 Skills

* Divisão entre **Core** e **Ferramentas**
* Ícones via **Devicon (CDN)**
* Estatísticas de experiência e projetos

---

### 📬 Contato

* Card com **borda em gradiente**
* CTA direto para email
* Links para redes sociais

---

## 📱 Responsividade

O site é totalmente responsivo, adaptando-se a:

* **Desktop** (1024px+)
* **Tablet** (768px – 1023px)
* **Mobile** (< 768px)

O menu de navegação transforma-se em **hamburger menu** no mobile, com animações suaves.

---

## ⚡ Performance

* Lazy loading de imagens
* Animações otimizadas com **Framer Motion**
* Bundle otimizado pelo **Vite**
* **CSS purge** com Tailwind

---

## 🎨 Sistema de Design

As cores e tokens visuais são definidos em:

* `src/index.css`
* `tailwind.config.ts`

Isso permite **customização fácil do tema** através de variáveis CSS em **HSL**.

---

## 📄 Licença

Este projeto é de **uso pessoal**, destinado como **portfólio profissional**.
