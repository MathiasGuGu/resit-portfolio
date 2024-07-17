import Link from "next/link";
import { ReactElement } from "react";
import artgal from "@/public/artgal.png";
import biddify from "@/public/biddify.png";
import holidaze from "@/public/holidaze.png";
import Image, { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const RoleHeading = () => {
  return (
    <section className="w-full h-auto flex flex-col items-end justify-end">
      <div className=" flex flex-col gap-1">
        <div className="pl-1 pr-3 border border-black w-fit rounded-full flex gap-2 items-center justify-center">
          <svg className="size-6" viewBox="0 0 256 256">
            <path d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m78.36 64h-35.65a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm9.64 40a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-88-85a115.3 115.3 0 0 1 26 45h-52a115.1 115.1 0 0 1 26-45m-26 125h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48Zm50.35 61.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-58 45.6Z" />
          </svg>
          <div className="h-[1px] w-12 bg-black"></div>
        </div>
        <div className="relative">
          <div className="flex -space-x-6 absolute top-1/2 -left-20 -translate-y-1/2">
            <svg className=" size-10" viewBox="0 0 32 32">
              <path
                fill="currentColor"
                d="m12.25 2.594l-.719.687l-3.594 3.625l-.687.688l.688.718L15.625 16l-7.688 7.688l-.687.718l.688.688l3.593 3.625l.719.687l.719-.687l12-12l.687-.719l-.687-.719l-12-12zm0 2.844L22.813 16L12.25 26.563l-2.188-2.188l7.688-7.656l.719-.719l-.719-.719l-7.688-7.656z"
              />
            </svg>
            <svg className=" size-10" viewBox="0 0 32 32">
              <path
                fill="currentColor"
                d="m12.25 2.594l-.719.687l-3.594 3.625l-.687.688l.688.718L15.625 16l-7.688 7.688l-.687.718l.688.688l3.593 3.625l.719.687l.719-.687l12-12l.687-.719l-.687-.719l-12-12zm0 2.844L22.813 16L12.25 26.563l-2.188-2.188l7.688-7.656l.719-.719l-.719-.719l-7.688-7.656z"
              />
            </svg>
            <svg className=" size-10" viewBox="0 0 32 32">
              <path
                fill="currentColor"
                d="m12.25 2.594l-.719.687l-3.594 3.625l-.687.688l.688.718L15.625 16l-7.688 7.688l-.687.718l.688.688l3.593 3.625l.719.687l.719-.687l12-12l.687-.719l-.687-.719l-12-12zm0 2.844L22.813 16L12.25 26.563l-2.188-2.188l7.688-7.656l.719-.719l-.719-.719l-7.688-7.656z"
              />
            </svg>
          </div>
          <h1 className="text-7xl">Systemutvikler</h1>
        </div>
        <div className="max-w-[600px] text-balance font-light text-sm">
          Mitt navn er mathias. jeg er en 22 år gammel system utvikler fra
          kristiansand. med over 4 års erfaring med programvare utvikling innen
          web står jeg med stor kompetanse for å arbeide innen programvare
          utvikling.
        </div>
      </div>
    </section>
  );
};

const tech = [
  "React",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
];

const TechButton = ({ children }: { children: ReactElement }) => {
  return (
    <div className=" text-xs font-light px-12 w-auto  h-12  flex items-center justify-center relative">
      <svg className="size-6 absolute top-0 left-0">
        <path fill="none" stroke="currentColor" d="M16 4H4v12" />
      </svg>
      <svg className="size-6 absolute top-0 right-0 rotate-90">
        <path fill="none" stroke="currentColor" d="M16 4H4v12" />
      </svg>
      <svg className="size-6 absolute bottom-0 right-0 ">
        <path fill="none" stroke="currentColor" d="M8 20h12V8" />
      </svg>
      <svg className="size-6 absolute bottom-0 left-0 rotate-90 ">
        <path fill="none" stroke="currentColor" d="M8 20h12V8" />
      </svg>
      {children}
    </div>
  );
};

const TechStack = () => {
  return (
    <div className="w-screen h-24 pl-8 bg-yellow-50 flex overflow-hidden gap-4 items-center">
      {tech.map((item) => (
        <TechButton key={item}>
          <p>{item}</p>
        </TechButton>
      ))}
    </div>
  );
};

const AboutHeading = () => {
  return (
    <section className="w-full h-auto flex flex-col gap-2 items-start justify-start relative">
      <p className="text-xs font-light">Mitt navn er</p>
      <h1 className="text-5xl flex items-center justify-center gap-1">
        <svg className=" size-12" viewBox="0 0 256 256">
          <path d="M214 48v40a6 6 0 0 1-12 0V54h-34a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6M88 202H54v-34a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6h40a6 6 0 0 0 0-12m120-40a6 6 0 0 0-6 6v34h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6M88 42H48a6 6 0 0 0-6 6v40a6 6 0 0 0 12 0V54h34a6 6 0 0 0 0-12" />
        </svg>
        Mathias Gumpen
      </h1>
      <p className="text-base font-light max-w-[700px] text-balance">
        Mitt navn er mathias. jeg er en 22 år gammel system utvikler fra
        kristiansand. med over 4 års erfaring med programvare utvikling innen
        web står jeg med stor kompetanse for å arbeide innen programvare
        utvikling.
      </p>
      <div className="flex gap-2">
        <TechButton>
          <p>Prosjekter</p>
        </TechButton>
        <TechButton>
          <p>CV</p>
        </TechButton>
      </div>

      <div className="text-xs flex flex-col gap-2 absolute right-12 top-1/2 -translate-y-1/2">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={"https://github.com"}
          className="pl-3 pr-1 border border-black w-fit h-12 rounded-full flex gap-2 items-center justify-center"
        >
          <p>Github</p>
          <div className="h-[1px] w-12 bg-black"></div>
          <svg viewBox="0 0 24 24" className="size-10">
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg>
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={"https://linkedin.com"}
          className="pl-3 pr-1 border border-black w-fit h-12 rounded-full flex gap-2 items-center justify-center"
        >
          <p>LinkedIn</p>
          <div className="h-[1px] w-12 bg-black"></div>
          <svg className="size-10" viewBox="0 0 20 20">
            <path
              fill="currentColor"
              d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="w-[100%] relative aspect-[16/10] overflow-hidden group  shadow-xl border isolate bg-zinc-50 rounded-lg ">
      <Image
        fill
        src={project.image!}
        alt={project.title}
        className="object-cover rounded-lg absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="w-1/3 absolute top-0 right-0 h-full bg-white/50 backdrop-blur-md space-y-2 translate-x-[200%] group-hover:translate-x-0 transition-all duration-300 py-6 px-4">
        <h3 className="text-3xl">{project.title}</h3>
        <p className="text-sm font-light">{project.description}</p>
        <div className="flex gap-2">
          {project.tech.map((item) => (
            <p className="text-xs">{item}</p>
          ))}
        </div>

        <div className="flex gap-2">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={project.github}
            className="pl-3 pr-1 border border-black w-fit h-12 rounded-full flex gap-2 items-center justify-center"
          >
            <p className="text-sm">Github</p>
            <div className="h-[1px] w-12 bg-black"></div>
            <svg viewBox="0 0 24 24" className="size-10">
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c."
              />
            </svg>
          </Link>
        </div>
        <div className="flex gap-2">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={project.demo}
            className="pl-3 pr-1 border border-black w-fit h-12 rounded-full flex gap-2 items-center justify-center"
          >
            <p className="text-sm">Demo</p>
            <div className="h-[1px] w-12 bg-black"></div>
            <svg
              className="size-10"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image?: StaticImport;
};

const projects: Project[] = [
  {
    title: "Holidaze",
    description:
      "Holidaze is the final exam project for the frontend developer education at Noroff. It is a fully functional venue booking website. featuring, search, filter, and booking functionality.",
    tech: ["React", "TailwindCSS", "zustand", "react-router-dom"],
    github: "https://github.com/MathiasGuGu/Holidaze",
    demo: "https://bookatholidaze.netlify.app",
    image: holidaze,
  },
  {
    title: "Biddify",
    description:
      "Biddify is a fictional bidding website made as the exam project for the frontend developer education at Noroff.",
    tech: ["React", "TailwindCSS"],
    github: "https://github.com/MathiasGuGu/exam-winter-2024",
    demo: "https://funny-hotteok-1ffc10.netlify.app",
    image: biddify,
  },
  {
    title: "Artgal",
    description:
      "Artgal was the semester project for the first semester at Noroff, and is a fictional blog about art!",
    tech: ["Javascript", "HTML", "CSS"],
    github:
      "https://github.com/Noroff-FEU-Assignments/project-exam-1-MathiasGuGu",
    demo: "https://papaya-brioche-8403d8.netlify.app",
    image: artgal,
  },
];
const ProjectsList = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full">
      {projects.map((project) => {
        return <ProjectCard key={project.title} project={project} />;
      })}
    </div>
  );
};

export default function Home() {
  return (
    <main className=" w-screen h-auto flex flex-col gap-12 pt-24 px-12 mb-12 items-center justify-center uppercase font-heading font-bold">
      <RoleHeading />
      <TechStack />
      <AboutHeading />
      <ProjectsList />
    </main>
  );
}
