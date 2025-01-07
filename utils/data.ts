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
    tags: ["Next.js", "TailwindCSS", "Stripe", "Primsa", "Neon.db", "ShadCn"],
  },
  {
    name: "Patient Management",
    repo: "https://github.com/santicano2/patient-management",
    url: "https://patient-management-seven.vercel.app/",
    image: "https://i.ibb.co/sy8mX7f/patient.webp",
    description:
      "Sistema de turnos para pacientes de obra social/hospital. Con opciones para pacientes y administrador.",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "ShadCn", "Appwrite"],
  },
  {
    name: "Movie Matrix",
    repo: "https://github.com/santicano2/movie-matrix",
    url: "https://movie-matrix-tv.vercel.app/",
    image:
      "https://i.ibb.co/C9F4nSZ/316098613-f08f0d9b-338e-4c52-b829-2e196a71c1c0.png",
    description: "App web para buscar peliculas y ver informacion de ellas.",
    tags: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "ShadCn",
      "FramerMotion",
      "TMDB API",
    ],
  },
  {
    name: "Roam Rental",
    repo: "https://github.com/santicano2/roam-rental",
    url: "https://roam-rental.vercel.app/",
    image: "https://i.ibb.co/SfmySPt/roamrental.webp",
    description:
      "Proyecto FullStack clon de la página Airbnb Con opciones para buscar propiedades para reservar, añadir favoritas, y añadir nuevas.",
    tags: [
      "Next.js",
      "Next-Auth",
      "TypeScript",
      "Prisma",
      "MongoDB",
      "Cloudinary",
    ],
  },
  {
    name: "Sorting Visualizer",
    repo: "https://github.com/santicano2/sorting-visualizer",
    url: "https://sorting-visualizer-xi-drab.vercel.app/",
    image: "https://i.ibb.co/XzLYKbk/thumbnail-sorting.webp",
    description:
      "App para mostrar el proceso de los algoritmos de ordenamiento visualmente. Con opción de elegir algoritmo y su velocidad.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
  },
  {
    name: "Pathfinding Visualizer",
    repo: "https://github.com/santicano2/pathfinding-visualizer",
    url: "https://pathfinding-visualizer-rose.vercel.app/",
    image: "https://i.ibb.co/QQ9jZQ2/thumbnail-pathfinding.webp",
    description:
      "App para mostrar el proceso de pathfinding de los algoritmos seleccionados. Con opción de elegir algoritmo, laberinto y su velocidad.",
    tags: ["Vite.js", "TailwindCSS", "TypeScript"],
  },
  {
    name: "Task Track",
    repo: "https://github.com/santicano2/task-track",
    url: "https://task-track-beta.vercel.app/",
    image: "https://i.ibb.co/tb0ZMkb/thumbnail-tasktrack.webp",
    description:
      "Proyecto FullStack imitando a la página Trello. Con opciones de crear organizaciones, tableros, listas y tarjetas. Todas con función de editar, copiar y borrar. Para crear más de 5 tableros se debe pagar el plan pro.",
    tags: ["Next.js", "Prisma", "Stripe", "TailwindCSS", "MySQL", "Clerk"],
  },
  {
    name: "Ricochet",
    repo: "https://github.com/santicano2/ricochet",
    url: "https://ricochetgame.netlify.app/",
    image: "https://i.ibb.co/SNYtg0c/image-1-1.png",
    description:
      "Juego estilo Ricochet / Breakout / Arkanoid. Recuerdo de la infancia. Funciona en Desktop y Mobile. Incluye efectos de sonido",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "FormatFlow",
    repo: "https://github.com/santicano2/format-flow",
    url: "",
    image: "https://i.ibb.co/3WCNg7k/thumbnail-formatflow.webp",
    description:
      "FormatFlow es una aplicación para tomar notas sencillas usando Markdown",
    tags: ["Electron", "React", "TailwindCSS", "MDXEditor", "Jotai"],
  },
  {
    name: "Mini Linkio",
    repo: "https://github.com/santicano2/mini-linkio",
    url: "",
    image: "https://i.ibb.co/QmJcbgc/thumbnail-minilinkio.webp",
    description: "Recortador de links",
    tags: ["Node.js", "Express", "MongoDB", "Nanoid", "Bootstrap"],
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
