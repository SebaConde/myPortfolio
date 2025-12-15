import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AboutMeComponent() {
  const testimonials = [
    {
      quote:
        "Soy un Full Stack Developer con experiencia práctica en desarrollo de aplicaciones web modernas. Combino habilidades técnicas con metodologías ágiles, colaboración efectiva y enfoque en calidad de código. Me apasiona resolver problemas complejos y construir productos que generen impacto.",
      name: "Sebastián Conde",
      designation: "Full stack developer",
      src: "./imgs/profile.webp",
    },
    
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
