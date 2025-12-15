/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

import { BackgroundGradient } from "../ui/background-gradient";
import { ExternalLink, Calendar1 } from "lucide-react";

export default function CertificationsCards() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActive(null)
  );
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-100">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base text-left"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base text-left"
                    >
                      {active.description}
                    </motion.p>
                    <motion.p
                      layoutId={`fecha-${active.fecha}-${id}`}
                      className="text-neutral-500 dark:text-neutral-500 text-xs text-left mt-1 flex items-center gap-1"
                    >
                      <Calendar1 height={12} width={12} /> {active.fecha}
                    </motion.p>
                  </div>

                  <div className="flex flex-col items-end gap-2 ml-4">
                    <img
                      src={active.academyLogo}
                      alt="Logo de la academia"
                      height={60}
                      width={60}
                    />
                    <button
                      className="relative inline-flex h-6 overflow-hidden rounded-full p-px focus:outline-none "
                      onClick={() =>
                        window.open(
                          active.credencial,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Credencial <ExternalLink height={15} width={15} />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 text-left [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="flex flex-col items-center justify-center h-full text-center mt-6 mb-10 ">
        <ul className="grid grid-cols-1 md:grid-cols-4 items-start gap-4">
          {cards.map((card, index) => (
            <BackgroundGradient
              key={`card-${card.title}-${id}`}
              className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900"
            >
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={card.title}
                onClick={() => setActive(card)}
                className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-zinc-900 rounded-xl cursor-pointer"
              >
                <div className="flex gap-4 flex-col w-full font-bold">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <img
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-60 w-full  rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col text-left flex-1">
                      <motion.h2
                        layoutId={`title-${card.title}-${id}`}
                        className="text-neutral-800 dark:text-neutral-200 text-base font-bold"
                      >
                        {card.title}
                      </motion.h2>

                      <motion.p
                        layoutId={`description-${
                          card.description + card.title
                        }-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-base"
                      >
                        {card.description}
                      </motion.p>
                    </div>

                    <img
                      src={card.academyLogo}
                      alt="Acedemy logo"
                      height={60}
                      width={60}
                      className="self-center ml-2"
                    />
                  </div>
                </div>
              </motion.div>
            </BackgroundGradient>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Curso de Automatizaciones con n8n",
    description: "n8n",
    src: "./certificados/Automatizaciones con 8n8.webp",
    academyLogo: "./icons/academy/platzi.svg",
    credencial:
      "https://platzi.com/p/sebaconde7/curso/12245-n8n-lowcode/diploma/detalle/",
    fecha: "13 de Diciembre 2025",
    estado: "finalizado",
    content: () => {
      return (
        <div>
          <p>
            En este curso aprendí a identificar, diseñar y ejecutar workflows en
            n8n Cloud usando un enfoque low-code, optimizando procesos y
            reduciendo tareas repetitivas en entornos profesionales.
          </p>
        </div>
      );
    },
  },
  {
    title: "Curso de Visual Studio Code y GitHub Copilot",
    description: "desarrollo web",
    src: "./certificados/Visual studio code y github copilot.webp",
    academyLogo: "./icons/academy/codigofacilito.png",
    credencial:
      "https://codigofacilito.com/certificates/d2e4201a-3201-4c4d-8e11-4e7c9acb37fb",
    fecha: "12 de Diciembre 2025",
    estado: "finalizado",
    content: () => {
      return (
        <div>
          <p>
            Curso enfocado en el uso del IDE Visual Studio Code, incluyendo su
            configuración y personalización, y la utilización de GitHub Copilot
            como asistente de inteligencia artificial para optimizar el
            desarrollo y mejorar la productividad en proyectos de software.
          </p>
        </div>
      );
    },
  },
  {
    title: "Lovable",
    description: "desarrollo web",
    src: "./certificados/Lovable.webp",
    academyLogo: "./icons/academy/platzi.svg",
    credencial:
      "https://platzi.com/p/sebaconde7/curso/12324-course/diploma/detalle/",
    fecha: "12 de Diciembre 2025",
    estado: "finalizado",
    content: () => {
      return (
        <div>
          <p>
            Un curso que me enseñó a utilizar Lovable a través de vibecoding.
            Aplicando los modos de chat y edición para crear un front-end
            funcional.
          </p>
        </div>
      );
    },
  },
  {
    title: "Curso a fondo de GitHub",
    description: "desarrollo web",
    src: "./certificados/Curso a fondo de github.webp",
    academyLogo: "./icons/academy/codigofacilito.png",
    credencial:
      "https://codigofacilito.com/certificates/eb1457c9-31a8-4206-8b74-3d8749dfbdb2",
    fecha: "10 de Diciembre 2025",
    estado: "finalizado",
    content: () => {
      return (
        <div>
          <p>
            Curso orientado a comprender la importancia de Git y GitHub en
            entornos de trabajo modernos y profesionales. Aborda el
            funcionamiento de GitHub, la configuración y optimización del
            perfil, sus principales utilidades, comandos más utilizados y una
            introducción a la historia y origen de la herramienta.
          </p>
        </div>
      );
    },
  },

  {
    title: "Curso profesional de React",
    description: "desarrollo web / React",
    src: "./certificados/React2025.webp",
    academyLogo: "./icons/academy/codigofacilito.png",
    credencial:
      "https://codigofacilito.com/certificates/bf0a7f10-6d1b-4d1b-a671-7dc8d8ef3b8c",
    fecha: "2 de Julio 2025",
    estado: "finalizado",
    content: () => {
      return (
        <div>
          <p>
            Es un programa completo que me dio una base sólida en el desarrollo
            de aplicaciones web con React JS, una de las bibliotecas más
            populares y demandadas del ecosistema JavaScript. A lo largo del
            curso me fueron guiando paso a paso por todos los conceptos
            fundamentales y pude aprender desde lo básico hasta lo necesario
            para construir aplicaciones modernas, interactivas y eficientes.
          </p>
        </div>
      );
    },
  },
  {
    title: "Inmersion IA",
    description: "IA",
    src: "/certificados/Inmersion ia.webp",
    academyLogo: "./icons/academy/alura.svg",
    credencial:
      "https://credsverse.com/credentials/4dc24c89-49de-4f6b-950b-86f63577e6be/",
    fecha: "4 de Septiembre 2025",
    estado: "finalizado",
    content: () => {
      return (
        <div>
          <p>
            Desarrollé habilidades en uso práctico de Gemini, creación de
            prompts efectivos e integración con Google Workspace para
            automatizar procesos y crear asistentes inteligentes.
          </p>
        </div>
      );
    },
  },
  {
    title: "Desarrollo con IA",
    description: "IA",
    src: "/certificados/Iniciacion desarrollo con ia.webp",
    academyLogo: "./icons/academy/BigSchool.svg",
    credencial:
      "https://drive.google.com/file/d/1izWHBQmDLUA35F_6n_OJpyUiB6qE-yyo/view?pli=1",
    fecha: "11 de Octubre 2025",
    estado: "finalizado",
    content: () => {
      return (
        <div>
          <p>
            Diseño prompts técnicos para obtener código de calidad en minutos.
            Automatización de procesos de programación con IA.
          </p>
        </div>
      );
    },
  },
  {
    title: "Genexus 16",
    description: "Genexus",
    src: "./certificados/React2025.webp",
    academyLogo: "./icons/academy/genexus.svg",
    credencial:
      "https://codigofacilito.com/certificates/bf0a7f10-6d1b-4d1b-a671-7dc8d8ef3b8c",
    fecha: "2 de Julio 2025",
    estado: "finalizado",
    content: () => {
      return (
        <div>
          <p>
            GeneXus es una suite de desarrollo de código de bajo nivel que
            permite la generación rápida de aplicaciones de soware en múltiples
            lenguajes y plataformas. GeneXus ofrece varias ventajas: es fácil de
            aprender, altamente productivo, multiplataforma y preparado para el
            futuro, de forma que protege tus activos digitales y simplifica la
            adopción de nuevas tecnologías.
          </p>
        </div>
      );
    },
  },
];
