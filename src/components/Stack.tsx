"use client";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import strapi from '../../public/icons/strapi.svg'
import javascript from '../../public/icons/javascript.svg'
import typescript from '../../public/icons/typescript.svg'
import python from '../../public/icons/python.svg'
import java from '../../public/icons/java.svg'
import html5 from '../../public/icons/html5.svg'
import css3 from '../../public/icons/css3.svg'

import node from '../../public/icons/node.svg'
import express from '../../public/icons/express.svg'
import php from '../../public/icons/php.svg'
import prisma from '../../public/icons/prisma.svg'


import react from '../../public/icons/react.svg'
import next from '../../public/icons/nextjs.svg'
import vue from '../../public/icons/vue.svg'
import vite from '../../public/icons/vite.svg'
import tailwind from '../../public/icons/tailwind.svg'
import astro from '../../public/icons/astro.svg'
import bootstrap from '../../public/icons/bootstrap.svg'

import mongodb from '../../public/icons/mongodb.svg'
import postgre from '../../public/icons/postgresql.svg'
import mysql from '../../public/icons/mysql.svg'
import sqlServer from '../../public/icons/sqlServer.svg'


import git from '../../public/icons/git.svg'
import github from '../../public/icons/github.svg'
import vercel from '../../public/icons/vercel.svg'
import postman from '../../public/icons/postman.svg'
import vscode from '../../public/icons/vscode.svg'
import cursor from '../../public/icons/cursor.svg'
import claude from '../../public/icons/claude.svg'
import chatgpt from '../../public/icons/chatgpt.svg'
import npm from '../../public/icons/npm.svg'




export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
];

export function StackComponent() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center justify-center h-full text-center mt-8 mb-10">
        <TypingAnimation>Stack técnico</TypingAnimation>
        <h2>Tecnologías y herramientas que domino para crear soluciones eficientes.</h2>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-4">
        {/* Lenguajes */}
        <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
          <Card className="mt-0 mb-0 border-0 w-80">
            <CardHeader>
              <CardTitle className='mt-0 text-center text-3xl '>Lenguajes</CardTitle>
              <CardDescription className="flex flex-wrap gap-8 justify-center mt-4">
                <Image src={javascript} 
                height={60} width={60} alt="javascript"/>
                <Image src={typescript} 
                height={60} width={60} alt="typescript"/>
                <Image src={python} 
                height={60} width={60} alt="python"/>
                <Image src={java}
                height={60} width={60} alt="java"/>
                <Image src={html5}
                height={60} width={60} alt="html5"/>
                <Image src={css3}
                height={60} width={60} alt="css"/>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" 
                height={60} width={60} alt="SQL"/>

              </CardDescription>
            </CardHeader>
          </Card>
        </BackgroundGradient>
        
        {/* Backend */}
        <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
          <Card className="mt-0 mb-0 border-0 w-80">
            <CardHeader>
              <CardTitle className='mt-0 text-center text-3xl '>Backend</CardTitle>
              <CardDescription className="flex flex-wrap gap-8 justify-center mt-4">
                <Image src={node} height={60} width={60} alt="nodejs"/>
                <Image src={express} height={60} width={60} alt="express"/>
                <Image src={php} height={60} width={60} alt="php"/>
                <Image src={prisma} height={60} width={60} alt="prisma"/>
                <Image src={strapi} height={60} width={60} alt="html5"/>
              </CardDescription>
            </CardHeader>
          </Card>
        </BackgroundGradient>
        
        {/* Frameworks / Librerías */}
        <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
          <Card className="mt-0 mb-0 border-0 w-80">
            <CardHeader>
              <CardTitle className='mt-0 text-center text-3xl '>Frameworks</CardTitle>
              <CardDescription className="flex flex-wrap gap-8 justify-center mt-4">
                <Image src={react} height={60} width={60} alt="react"/>
                <Image src={next} height={60} width={60} alt="nextjs"/>
                <Image src={vue} height={60} width={60} alt="vue"/>
                <Image src={vite} height={60} width={60} alt="vite"/>
                <Image src={astro} height={60} width={60} alt="astro"/>
                <Image src={tailwind} height={60} width={60} alt="tailwind"/>
                <Image src={bootstrap} height={60} width={60} alt="bootstrap"/>
              </CardDescription>
            </CardHeader>
          </Card>
        </BackgroundGradient>

        {/* BDD */}
        <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
          <Card className="mt-0 mb-0 border-0 w-80">
            <CardHeader>
              <CardTitle className='mt-0 text-center text-3xl '>Bases de datos</CardTitle>
              <CardDescription className="flex flex-wrap gap-8 justify-center mt-4">
                <Image src={mongodb} height={60} width={60} alt="mongodb"/>
                <Image src={mysql} height={60} width={60} alt="mysql"/>
                <Image src={postgre} height={60} width={60} alt="postgre"/>
                <Image src={sqlServer} height={60} width={60} alt="sqlServer"/>
              </CardDescription>
            </CardHeader>
          </Card>
        </BackgroundGradient>
        
        {/* Herramientas */}
        <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
          <Card className="mt-0 mb-0 border-0 w-80">
            <CardHeader>
              <CardTitle className='mt-0 text-center text-3xl '>Herramientas</CardTitle>
              <CardDescription className="flex flex-wrap gap-8 justify-center mt-4">
                <Image src={git} height={60} width={60} alt="git"/>
                <Image src={github} height={60} width={60} alt="github"/>
                <Image src={vercel} height={60} width={60} alt="vercel"/>
                <Image src={vscode} height={60} width={60} alt="vscode"/>
                <Image src={cursor} color="#000000"  height={60} width={60} alt="cursor"/>
                <Image src={npm} height={60} width={60} alt="npm"/>
                <Image src={chatgpt} height={60} width={60} alt="chatgpt"/>
                <Image src={claude} color="#D97757" height={60} width={60} alt="claude"/>
                <Image src={postman} height={60} width={60} alt="postman"/>
                
              </CardDescription>
            </CardHeader>
          </Card>
        </BackgroundGradient>
      </div>
      
      {/* Navbar */}
     
    </div>
  );
}
