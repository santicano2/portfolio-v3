export const navigationLinks = [
  { label: "Inicio", path: "#home" },
  { label: "Sobre mi", path: "#about" },
  { label: "Proyectos", path: "#projects" },
  { label: "Habilidades", path: "#skills" },
  { label: "Contacto", path: "#contact" },
];

export type projectType = {
  name: string;
  repo: string;
  url: string | false;
  image: string;
  description: string;
  tags: string[];
};

export const projectsData: projectType[] = [
  {
    name: "AutoExpress",
    repo: "https://github.com/santicano2/rental-cars",
    url: "https://autoexpress-rental.vercel.app/",
    image: "https://i.ibb.co/C7wLjk7/thumbnail-rentalcars.webp",
    description:
      "Sistema de alquier de autos, con opciones para administrador y clientes.",
    tags: ["Next.js", "TailwindCSS", "Stripe", "Primsa", "Neon.db"],
  },
];

export const skillsData = [
  {
    img: "html5/html5-original.svg",
    name: "HTML",
  },
  {
    img: "css3/css3-original.svg",
    name: "CSS",
  },
  {
    img: "javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    img: "typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    img: "java/java-original.svg",
    name: "Java",
  },
  {
    img: "c/c-original.svg",
    name: "C",
  },
  {
    img: "react/react-original.svg",
    name: "React",
  },
  {
    img: "nextjs/nextjs-original.svg",
    name: "Next.js",
  },
  {
    img: "tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS",
  },
  {
    img: "nodejs/nodejs-original.svg",
    name: "Node.js",
  },
  {
    img: "express/express-original.svg",
    name: "Express",
  },
  {
    img: "mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    img: "mysql/mysql-original.svg",
    name: "MySQL",
  },
  {
    img: "postgresql/postgresql-original.svg",
    name: "PostgreSQL",
  },
  {
    img: "prisma/prisma-original.svg",
    name: "Prisma",
  },
  {
    img: "git/git-original.svg",
    name: "Git",
  },
];
