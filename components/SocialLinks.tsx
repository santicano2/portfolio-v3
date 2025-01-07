import { FileUser, Github, Linkedin } from "lucide-react";

import { MotionDiv } from "@/lib/motion";

export const socialData = [
  { link: "https://github.com/santicano2", icon: <Github />, title: "GitHub" },
  {
    link: "https://www.linkedin.com/in/santicano2/",
    icon: <Linkedin />,
    title: "Linkedin",
  },
  {
    link: "/assets/cvSantiagoCano2025.pdf",
    icon: <FileUser />,
    title: "CV",
  },
];

export const SocialLinks = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-10 flex flex-col items-center gap-y-4 md:hidden"
    >
      {socialData.map((social, index) => (
        <a
          key={index}
          className="transition hover:-translate-y-1 hover:text-target"
          target="_blank"
          href={social.link}
          rel="noreferrer"
        >
          {social.icon}
        </a>
      ))}
      <div className="mt-4 h-32 w-[2px] origin-bottom bg-target"></div>
    </MotionDiv>
  );
};
