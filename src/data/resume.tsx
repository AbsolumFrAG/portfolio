import { HomeIcon } from "lucide-react";
import { Icons } from "@/components/icons";

// calculate experience in years dynamically
const experience = new Date().getFullYear() - 2019;

export const DATA = {
  name: "Lou TIGROUDJA",
  initials: "LT",
  url: "https://lou-tigroudja.com",
  description: `Développeur full-stack avec +${experience} ans d'expérience, passionné par la technologie et l'innovation.`,
  summary:
    "Développeur passionné, je me spécialise dans la création d'expériences numériques exceptionnelles et innovantes. Mon expertise réside dans la création de produits robustes, accessibles et centrés sur l'humain qui ont un réel impact. Actuellement, je mets à profit mes compétences pour créer des solutions de pointe chez [DataIPA](https://dataipa.com), où je continue de repousser les limites de ce qui est possible en matière de technologie.",
  avatarUrl: "/me.jpeg",
  skills: [
    "HTML",
    "CSS",
    "SCSS",
    "LESS",
    "JavaScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Node.js",
    "C#/.NET",
    "PHP",
    "Laravel",
    "Symfony",
    "Flutter",
    "React Native",
    "Python",
    "Docker",
    "Git",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Accueil" }],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AbsolumFrAG",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lou-tigroudja-a02b011aa/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Zetsumei_FR",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Envoyez-moi un email",
        url: "mailto:lou.tigroudja07@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "DataIPA",
      badges: [],
      href: "https://dataipa.com",
      location: "Hybride",
      title: "Développeur full-stack",
      logoUrl: "/dataipa.png",
      start: "Avril 2023",
      end: "Présent",
      description:
        "J'ai eu l'occasion de travailler avec toute la stack Microsoft allant d'Azure à Microsoft Dynamics 365. Afin de réaliser les développements nécessaires, j'ai eu à utiliser C# pour des Azure Functions, TypeScript, JavaScript, React, Next.js, Node.js.",
    },
    {
      company: "IQar, la Vision Projet",
      href: "https://www.iqar.fr/",
      badges: [],
      location: "Hybride",
      title: "Développeur full-stack orienté support",
      logoUrl: "/iqar.png",
      start: "Septembre 2022",
      end: "Février 2023",
      description:
        "J'ai eu l'occasion de travailler avec la stack C#/.NET ainsi que JavaScript/jQuery afin de résoudre les tickets sur JIRA.",
    },
    {
      company: "XEFI",
      href: "https://xefi.com/",
      badges: [],
      location: "Présentiel",
      title: "Consultant CRM / Développeur",
      logoUrl: "/xefi.jpg",
      start: "Septembre 2020",
      end: "Septembre 2022",
      description:
        "J'ai eu l'occasion de réaliser et personnaliser des CRM pour différents types de clients ainsi que de créer des workflows personnalisés en C# avec le SDK de Microsoft Dynamics 365. De plus, j'ai eu l'occasion de réaliser des scripts JavaScript pour les Model Driven.",
    },
  ],
  education: [
    {
      school: "WebTech Institute",
      href: "https://webtech.institute/",
      degree:
        "Mastère Web & Technologies spécialisation développement full-stack",
      logoUrl: "/webtech.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Ecole ISITECH",
      href: "https://www.ecole-isitech.com/",
      degree: "Bachelor Responsable de Projets Informatiques",
      logoUrl: "/isitech.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "ExplorAI",
      href: "https://explorai.net",
      dates: "Oct 2023 - Présent",
      active: true,
      description:
        "ExplorAI vous permet de modifier de manière flexible votre agenda de voyage.",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vite",
        "OpenAI",
        "Firebase",
      ],
      links: [
        {
          id: 0,
          type: "Site Web",
          href: "https://explorai.net",
          icon: <Icons.globe className="size-3" />,
        },
        {
          id: 1,
          type: "Source",
          href: "https://github.com/AbsolumFrAG/explorai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/demo-explorai.png",
      video: "",
    },
    {
      title: "PDFMate",
      href: "https://pdfmate.xyz/",
      dates: "Juin 2024 - Juin 2024",
      active: true,
      description:
        "Téléchargez votre document et notre chatbot répondra à vos questions, résumera le contenu et répondra à toutes vos questions. Idéal pour tout le monde, PDFMate transforme les documents statiques en conversations dynamiques, améliorant ainsi la productivité de 10 fois sans effort.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Langchain",
        "OpenAI",
        "Pinecone DB",
        "Stripe",
        "Firebase",
        "Clerk Auth",
        "TailwindCSS",
      ],
      links: [
        {
          id: 0,
          type: "Site Web",
          href: "https://pdfmate.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          id: 1,
          type: "Source",
          href: "https://github.com/AbsolumFrAG/pdfmate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/demo-pdfmate.png",
      video: "",
    },
  ],
} as const;
