"use client";

import Link from "next/link";

import { navigationLinks } from "@/utils/data";

export const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.substring(1));

    if (section) {
      const header = document.querySelector("header");

      if (header) {
        const headerHeight = window.getComputedStyle(header).height;
        const headerHeightValue = parseFloat(headerHeight);

        window.scrollTo({
          top: section.offsetTop - headerHeightValue,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav>
      <ul className="flex items-center gap-8 md:gap-5 sm:flex-col sm:gap-3">
        {navigationLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link
                className="relative flex items-center text-lg transition before:absolute before:text-[#5D0E41] before:opacity-0 before:transition before:content-['{'] after:absolute after:right-0 after:text-[#5D0E41] after:opacity-0 after:transition after:content-['}'] hover:text-target before:hover:-translate-x-4 before:hover:opacity-100 after:hover:translate-x-4 after:hover:opacity-100"
                href={link.path}
                scroll={false}
                onClick={() => scrollToSection(link.path)}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
