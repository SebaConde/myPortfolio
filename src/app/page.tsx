import { NavbarComponent } from "@/components/Navbar";
import { AboutMeComponent } from "@/components/AboutMe";
import { ProjectsComponent } from "@/components/Projects";
import { StackComponent } from "@/components/Stack";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="relative mt-0 min-h-screen bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-fixed bg-cover px-5 py-24">
    //   <NavbarComponent />
    //   <AboutMeComponent />
    //   <ProjectsComponent />
    //   <StackComponent />

      <div className="flex justify-center items-center h-screen bg-[#f3e5ce]">
        <Image src="/animated.png" alt="Descripción" height={800} width={800} priority />
      </div> 
    // </div>
  );
}
