import { NavbarComponent } from "@/components/Navbar";
import { AboutMeComponent } from "@/components/AboutMe";
import { ProjectsComponent } from "@/components/Projects";
import { StackComponent} from "@/components/Stack"

export default function Home() {
  return (
     //<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="bg-[#ecdfc7] min-h-screen">
      {/* // <NavbarComponent />
      // <AboutMeComponent />
      // <ProjectsComponent />
      // <StackComponent />   */}
        <div className="flex justify-center items-center h-screen">
         <img src="/animated.png" alt="" height={800} width={800} />
       </div>
    //</div>
  );
}
