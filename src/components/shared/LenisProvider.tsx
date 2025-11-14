"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => t,
      lerp: 0.1,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // no renderiza nada, solo activa el scroll suave
}
