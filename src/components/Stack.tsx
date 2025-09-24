"use client";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { BackgroundGradient } from "../components/ui/background-gradient";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";


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
     <TypingAnimation>Stack</TypingAnimation>
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
            <CardTitle>Backend</CardTitle>
            <CardDescription> 
                
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aarch64/aarch64-plain.svg" height={90} width={90}/>

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"  height={90} width={90}/>
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"  height={90} width={90}/>
          
            <i className="devicon-github-original"  ></i>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" height={90} width={90} />
          
          </CardDescription>
          </CardHeader>
          <CardFooter>
            <p>stack y links</p>
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
            <CardTitle>Nombre del proyecto</CardTitle>
            <CardDescription>Descripcion del proyecto</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>stack y links</p>
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
            <CardTitle>Nombre del proyecto</CardTitle>
            <CardDescription>Descripcion del proyecto</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>stack y links</p>
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
            <CardTitle>Nombre del proyecto</CardTitle>
            <CardDescription>Descripcion del proyecto</CardDescription>
          </CardHeader>
          <CardFooter>
            <p>stack y links</p>
          </CardFooter>
        </Card>
      </BackgroundGradient> 
      
      
    </div>
      {/* Navbar */}
    </div>
  );
}
