"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
import { ExternalLink, GithubIcon, ArrowRight } from "lucide-react";
import { ProjectLink, RepoLink } from "./ui/button-links";
import { TypingAnimation } from "./ui/typing-animation";
import { Button } from "./ui/button";
import Image from "next/image";

export function ProjectsComponent() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full text-center mt-6 mb-10">
        <TypingAnimation>Proyectos</TypingAnimation>
        <h2>
          Algunos de mis proyectos destacados.
        </h2>
      </div>
     
      <div className="flex flex-wrap gap-6 justify-center">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
        <Card className="m-0 border-0 w-80" >
          <CardHeader>
          <Image src="/StamfordBridge.jpg" alt="jordans" height="70" width="199" className="object-contain"/>
            <CardTitle>Store</CardTitle>
            <CardDescription>Un tienda web de ropa</CardDescription>
          </CardHeader>
          <CardFooter>
            <div>
            <i className="devicon-nextjs-plain text-2xl" > </i>
            <i className="devicon-tailwindcss-original text-2xl"> </i>
            <i className="devicon-typescript-plain text-2xl"> </i>
            <i className="devicon-prisma-original text-2xl"> </i>
            <i className="devicon-postgresql-plain text-2xl"> </i> <br />
              <div className="flex gap-1 mt-2">
              <ProjectLink link="https://tu-proyecto-demo.com" text="Proyecto" />
              <RepoLink link="https://github.com/tu-usuario/tu-repo" text="Repositorio" />
              </div>
            </div>
          </CardFooter>
        </Card>
      </BackgroundGradient> 
      <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
        <Card className="m-0 border-0 w-80" >
          <CardHeader>
          <Image src="/StamfordBridge.jpg" alt="jordans" height="70" width="199" className="object-contain"/>
            <CardTitle>Seedware</CardTitle>
            <CardDescription>Landing page de seedware</CardDescription>
          </CardHeader>
          <CardFooter>
            <div>
            <i className="devicon-nextjs-plain text-2xl" > </i>
            <i className="devicon-tailwindcss-original text-2xl"> </i>
            <i className="devicon-typescript-plain text-2xl"> </i>
            <i className="devicon-prisma-original text-2xl"> </i>
            <i className="devicon-postgresql-plain text-2xl"> </i> <br />
              <div className="flex gap-1 mt-2">
              <ProjectLink link="https://tu-proyecto-demo.com" text="Proyecto" />
              <RepoLink link="https://github.com/tu-usuario/tu-repo" text="Repositorio" />
              </div>
            </div>
          </CardFooter>
        </Card>
      </BackgroundGradient> <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
        <Card className="m-0 border-0 w-80" >
          <CardHeader>
          <Image src="/StamfordBridge.jpg" alt="jordans" height="70" width="199" className="object-contain"/>
            <CardTitle>Store</CardTitle>
            <CardDescription>Un tienda web de ropa</CardDescription>
          </CardHeader>
          <CardFooter>
            <div>
            <i className="devicon-nextjs-plain text-2xl" > </i>
            <i className="devicon-tailwindcss-original text-2xl"> </i>
            <i className="devicon-typescript-plain text-2xl"> </i>
            <i className="devicon-prisma-original text-2xl"> </i>
            <i className="devicon-postgresql-plain text-2xl"> </i> <br />
              <div className="flex gap-1 mt-2">
              <ProjectLink link="https://tu-proyecto-demo.com" text="Proyecto" />
              <RepoLink link="https://github.com/tu-usuario/tu-repo" text="Repositorio" />
              </div>
            </div>
          </CardFooter>
        </Card>
      </BackgroundGradient> <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
        <Card className="m-0 border-0 w-80" >
          <CardHeader>
          <Image src="/StamfordBridge.jpg" alt="jordans" height="70" width="199" className="object-contain"/>
            <CardTitle>Store</CardTitle>
            <CardDescription>Un tienda web de ropa</CardDescription>
          </CardHeader>
          <CardFooter>
            <div>
            <i className="devicon-nextjs-plain text-2xl" > </i>
            <i className="devicon-tailwindcss-original text-2xl"> </i>
            <i className="devicon-typescript-plain text-2xl"> </i>
            <i className="devicon-prisma-original text-2xl"> </i>
            <i className="devicon-postgresql-plain text-2xl"> </i> <br />
              <div className="flex gap-1 mt-2">
              <ProjectLink link="https://tu-proyecto-demo.com" text="Proyecto" />
              <RepoLink link="https://github.com/tu-usuario/tu-repo" text="Repositorio" />
              </div>
            </div>
          </CardFooter>
        </Card>
      </BackgroundGradient> 
      </div>
      <div className="relative w-full flex flex-col items-center justify-center h-full text-center mt-8 mb-10">
      <Button variant="outline" type="button" >
        mas proyectos 
         <ArrowRight />
      </Button>
      </div>
  
    </div>    
  );
}
