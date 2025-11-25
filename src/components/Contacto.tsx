'use client'
import { TypingAnimation } from "./ui/typing-animation";
import ContactForm from "./shared/contact-form";

const Contacto = () => {
    return ( 
    <div className="relative w-full" id="contacto">
      <div className="flex flex-col items-center justify-center h-full text-center mt-6 mb-10">
        <div className="flex flex-col items-center justify-center h-full text-center mt-6 mb-10">
            <TypingAnimation>Contacto</TypingAnimation>
            <h1>¿Tienes un proyecto en mente? Contáctame y hagámoslo realidad</h1>
              <ContactForm />
            </div>
        </div>
    </div>    
);
}
 
export default Contacto;