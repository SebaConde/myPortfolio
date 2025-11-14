"use client";
import { ArrowRight } from "lucide-react";
import { TypingAnimation } from "./ui/typing-animation";


const Certificaciones = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center justify-center h-full text-center mt-6 mb-10">
            <div className="flex flex-col items-center justify-center h-full text-center mt-6 mb-10">
                <TypingAnimation>Certificaciones</TypingAnimation>
                <h2>
                    Algunos de mis proyectos destacados.
                </h2>
            </div>
        <button
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none "
          onClick={() => (window.location.href = "/projects")}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Más proyectos <ArrowRight height={15} width={15} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Certificaciones;
