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
