"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { TypingAnimation } from "./ui/typing-animation";
import ProjectsCards from "./shared/projects-cards";

export function ProjectsComponent() {
  return (
    <div className="relative w-full" id="proyectos">
      <div className="flex flex-col items-center justify-center h-full text-center mt-6 mb-10">
        <TypingAnimation>Proyectos</TypingAnimation>
        <h2>
          Estos son algunos proyectos en los que trabajé, participando en
          el diseño e implementación de interfaces, lógica de negocio e
          integración con APIs, las tecnologías que utilizo y cómo pienso las
          soluciones desde el desarrollo hasta la experiencia del usuario.
        </h2>
      </div>
      <ProjectsCards />
      <div className="relative w-full flex flex-col items-center justify-center h-full text-center mt-8 mb-10">
        {/* <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none"
          onClick={() => (window.location.href = '/projects')}>
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Más proyectos <ArrowRight height={15} width={15}/>
          </span>
        </button> */}
      </div>
    </div>
  );
}
