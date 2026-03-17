import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AboutMeComponent() {
  const testimonials = [
    {
      quote:
        "Full Stack Developer con experiencia en desarrollo de aplicaciones web utilizando JavaScript, React, Next.js y Node.js. He trabajado en proyectos frontend y backend, implementando interfaces reutilizables, integrando APIs REST y aplicando buenas prácticas de desarrollo. Busco seguir creciendo en entornos colaborativos y orientados a producto.",
      name: "Sebastián Conde",
      designation: "Full stack developer",
      src: "./imgs/profile.webp",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
