"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import next from '../../../public/icons/nextjs.svg'
import prisma from '../../../public/icons/prisma.svg'
import typescript from '../../../public/icons/typescript.svg'
import tailwind from '../../../public/icons/tailwind.svg'
import postgre from '../../../public/icons/postgresql.svg'
import neon from '../../../public/icons/neon.svg'
import { BackgroundGradient } from "../ui/background-gradient";
import { ExternalLink } from "lucide-react";

export default function ProjectsCards() {
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

useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

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
                <img width={200} height={200} src={active.src} alt={active.title}  
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"/>
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <div className="flex justify-between items-start mt-2">

                  <button className="relative inline-flex h-6 overflow-hidden rounded-full p-px focus:outline-none "
                      onClick={() => (window.open(active.ctaLinkDemo, "_blank", "noopener,noreferrer"))}>
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Demo <ExternalLink height={15} width={15}/>
                      </span>
                    </button> 
                    <button className="relative inline-flex h-6 overflow-hidden rounded-full p-px focus:outline-none "
                      onClick={() => (window.open(active.ctaLinkRepo, "_blank", "noopener,noreferrer"))}>
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Repo <ExternalLink height={15} width={15}/>
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
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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
            <BackgroundGradient key={`card-${card.title}-${id}`} className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-zinc-900 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col w-fullfont-bold">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img width={100} height={100} src={card.src} alt={card.title} className="h-60 w-full  rounded-lg object-cover object-top"/>
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h2
                    layoutId={`title-${card.title}-${id}`}
                    className=" text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base font-bold"
                  >
                    {card.title}
                  </motion.h2>
                  <motion.p
                    layoutId={`description-${card.description+card.title}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                  >
                    {card.description}
                  </motion.p>
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
    description: "ecommerce",
    title: "Mate store",
    src: "./imgs/matestoreHome.webp",
    ctaLinkDemo: "https://mate-store-six.vercel.app/",
    ctaLinkRepo: "https://github.com/SebaConde/mateStore-frontend",
    content: () => {
      return (
        <div>
          <div className="flex gap-5 mb-2 mt-0">
            <Image src={next} height={25} width={25} alt="nextIcon"/>
            <Image src={tailwind} height={25} width={25} alt="tailwindIcon"/>
            <Image src={typescript} height={25} width={25} alt="typescriptIcon"/>
            <Image src={prisma} height={25} width={25} alt="prismaIcon"/>
            <Image src={postgre} height={25} width={25} alt="postgreIcon"/>
            <Image src={neon} height={25} width={25} alt="neonDB"/>
          </div>
            <p>
            Babu Maan, a legendary Punjabi singer, is renowned for his soulful
            voice and profound lyrics that resonate deeply with his audience. Born
            in the village of Khant Maanpur in Punjab, India, he has become a
            cultural icon in the Punjabi music industry. <br />
          </p>
        </div>

      );
    },
  },
    {
    description: "?",
    title: "??",
    src: "./imgs/coming-soon.webp",
    ctaLinkDemo: "https://ui.aceternity.com/templates",
    ctaLinkRepo: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div>
          <div className="flex gap-5 mb-2 mt-0">
TBA
          </div>
            <p>
            [Soon]
          </p>
        </div>

      );
    },
  },
  {
    description: "?",
    title: "??",
    src: "./imgs/coming-soon.webp",
    ctaLinkDemo: "https://ui.aceternity.com/templates",
    ctaLinkRepo: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div>
          <div className="flex gap-5 mb-2 mt-0">
            TBA
          </div>
            <p>
            [Soon]
          </p>
        </div>

      );
    },
  },  {
    description: "?",
    title: "??",
    src: "./imgs/coming-soon.webp",
    ctaLinkDemo: "https://ui.aceternity.com/templates",
    ctaLinkRepo: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div>
          <div className="flex gap-5 mb-2 mt-0">
           TBA
          </div>
            <p>
            [Soon]
          </p>
        </div>
      );
    },
  },
 
];
