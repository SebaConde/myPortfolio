import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AboutMeComponent() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sebastián Conde",
      designation: "Full stack developer",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur a, impedit nisi placeat ipsam odio fugiat, deserunt, veritatis illo provident quia sapiente? Accusantium reprehenderit tempora incidunt rerum neque delectus libero?",
        name: "About me",
        designation: "Product Manager at TechFlow",
        src: "https://assets.goal.com/images/v3/blt30b29a7a34b21cf2/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202025-09-22T070205.335.png?auto=webp&format=pjpg&width=3840&quality=60 ",
      },
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
