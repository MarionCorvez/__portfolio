import { SVGProps } from "react";
//import { ArrowDownTray } from "@/ui/components/icons/arrow-down-tray";
import { Mail } from "@/app/lib/icons/mail";
import { Figma } from "@/app/lib/icons/figma";
import { Next } from "@/app/lib/icons/next";
import { React } from "@/app/lib/icons/react";
import { Linkedin } from "./linkedin";
import { Github } from "./github";

const ICONS = {
  //"arrow-down-tray": ArrowDownTray,
  Figma: Figma,
  GitHub: Github,
  "Next.js": Next,
  React: React,
  LinkedIn: Linkedin,

  /* "HTML",
   "CSS Modules",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux Toolkit",
  "Vite", 
  "Next.js",
  /*   "WordPress",
  "Squarespace", 
  "Figma",
  /*   "Adobe XD",
  "Axure",
  "Asana",
  "Slack",
  "Git", 
  "GitHub",
  /*   "Swagger",
  "Postman", */
};

type Props = {
  name: keyof typeof ICONS;
  size?: 16 | 24 | 32 | 48;
} & SVGProps<SVGSVGElement>;

export const Icon = ({ name, size = 48, ...rest }: Props) => {
  const Component = ICONS[name];
  return <Component height={size} width={size} {...rest} />;
};
