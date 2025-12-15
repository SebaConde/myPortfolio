import Footer from "@/components/Footer";
import CertificationsCards from "@/components/shared/certifications-cards";
import { TypingAnimation } from "@/components/ui/typing-animation";

const Certifications = () => {
  return (
    <div className="relative mt-0 min-h-screen bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] bg-fixed bg-cover px-5 py-24">
      <div className="flex flex-col items-center justify-center h-full text-center mb-10">
        <TypingAnimation>Certificaciones</TypingAnimation>
        <h1>
          A continuación se muestran las certificaciones obtenidas a lo largo de
          mi formación como desarrollador.
        </h1>
        <CertificationsCards />
        
      </div>
      <div className=" fixed bottom-0 left-0 w-full">
        <Footer />
        </div>
    </div>
    
  );
};

export default Certifications;
