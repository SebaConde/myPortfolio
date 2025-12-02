import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AboutMeComponent() {
  const testimonials = [
    {
      quote:
        "Desarrollador orientado a resultados, con enfoque en aprendizaje continuo y mejora constante. Destaco por mi comunicación efectiva y trabajo colaborativo en entornos ágiles.",
      name: "Sebastián Conde",
      designation: "Full stack developer",
      src: "./imgs/profile.webp",
    },
    
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
