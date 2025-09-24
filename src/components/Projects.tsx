"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { ExternalLink, GithubIcon } from "lucide-react";
import { ProjectLink, RepoLink } from "./ui/button-links";


export function ProjectsComponent() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
        <Card className="m-0 border-0 w-80" >
          <CardHeader>
          <img
          src="/StamfordBridge.jpg"
          alt="jordans"
          height="70"
          width="199"
          className="object-contain"
        />
            <CardTitle>Store</CardTitle>
            <CardDescription>Un tienda web de ropa</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>
            <i className="devicon-nextjs-plain text-2xl" > </i>
            <i className="devicon-tailwindcss-original text-2xl"> </i>
            <i className="devicon-typescript-plain text-2xl"> </i>
            <i className="devicon-prisma-original text-2xl"> </i>
            <i className="devicon-postgresql-plain text-2xl"> </i> <br />
            <div className="flex gap-1 mt-2">
            <ProjectLink link="https://tu-proyecto-demo.com" text="Proyecto" />
            <RepoLink link="https://github.com/tu-usuario/tu-repo" text="Repositorio" />
            </div>

            </p>
          </CardFooter>
        </Card>
      </BackgroundGradient> 
      <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
        <Card className="m-0 border-0 w-80" >
          <CardHeader>
          <img
          src="/StamfordBridge.jpg"
          alt="jordans"
          height="70"
          width="199"
          className="object-contain"
        />
            <CardTitle>Seedware</CardTitle>
            <CardDescription>Landing page de seedware</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>
            <i className="devicon-nextjs-plain text-2xl" > </i>
            <i className="devicon-tailwindcss-original text-2xl"> </i>
            <i className="devicon-typescript-plain text-2xl"> </i>
            <i className="devicon-prisma-original text-2xl"> </i>
            <i className="devicon-postgresql-plain text-2xl"> </i> <br />
            <div className="flex gap-1 mt-2">
            <ProjectLink link="https://tu-proyecto-demo.com" text="Proyecto" />
            <RepoLink link="https://github.com/tu-usuario/tu-repo" text="Repositorio" />
            </div>

            </p>
          </CardFooter>
        </Card>
      </BackgroundGradient> <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
        <Card className="m-0 border-0 w-80" >
          <CardHeader>
          <img
          src="/StamfordBridge.jpg"
          alt="jordans"
          height="70"
          width="199"
          className="object-contain"
        />
            <CardTitle>Store</CardTitle>
            <CardDescription>Un tienda web de ropa</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>
            <i className="devicon-nextjs-plain text-2xl" > </i>
            <i className="devicon-tailwindcss-original text-2xl"> </i>
            <i className="devicon-typescript-plain text-2xl"> </i>
            <i className="devicon-prisma-original text-2xl"> </i>
            <i className="devicon-postgresql-plain text-2xl"> </i> <br />
            <div className="flex gap-1 mt-2">
            <ProjectLink link="https://tu-proyecto-demo.com" text="Proyecto" />
            <RepoLink link="https://github.com/tu-usuario/tu-repo" text="Repositorio" />
            </div>

            </p>
          </CardFooter>
        </Card>
      </BackgroundGradient> <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-4 bg-white dark:bg-zinc-900">
        <Card className="m-0 border-0 w-80" >
          <CardHeader>
          <img
          src="/StamfordBridge.jpg"
          alt="jordans"
          height="70"
          width="199"
          className="object-contain"
        />
            <CardTitle>Store</CardTitle>
            <CardDescription>Un tienda web de ropa</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>
            <i className="devicon-nextjs-plain text-2xl" > </i>
            <i className="devicon-tailwindcss-original text-2xl"> </i>
            <i className="devicon-typescript-plain text-2xl"> </i>
            <i className="devicon-prisma-original text-2xl"> </i>
            <i className="devicon-postgresql-plain text-2xl"> </i> <br />
            <div className="flex gap-1 mt-2">
            <ProjectLink link="https://tu-proyecto-demo.com" text="Proyecto" />
            <RepoLink link="https://github.com/tu-usuario/tu-repo" text="Repositorio" />
            </div>

            </p>
          </CardFooter>
        </Card>
      </BackgroundGradient> 
      
      
    </div>
  );
}
