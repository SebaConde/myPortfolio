"use client";
import { TypingAnimation } from "@/components/ui/typing-animation";
import ExpandableStackCards from "./shared/stack-cards";

export function StackComponent() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center justify-center h-full text-center mt-8 mb-10">
        <TypingAnimation>Stack técnico</TypingAnimation>
        <h2>Tecnologías y herramientas que domino para crear soluciones eficientes.</h2>
      </div>
      <ExpandableStackCards />
    </div>
  );
 
}
