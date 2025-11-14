'use client'
import { ArrowRight } from "lucide-react";
import { TypingAnimation } from "./ui/typing-animation";

const Contacto = () => {
    return ( 
    <div className="relative w-full">
      <div className="flex flex-col items-center justify-center h-full text-center mt-6 mb-10">
        <div className="flex flex-col items-center justify-center h-full text-center mt-6 mb-10">
            <TypingAnimation>Contacto</TypingAnimation>
              <h2>
                Algunos de mis proyectos destacados.
              </h2>
            </div>
        </div>
    </div>    
);
}
 
export default Contacto;