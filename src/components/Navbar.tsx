"use client";
import {Navbar,NavBody,NavItems,MobileNav,NavbarLogo,NavbarButton,MobileNavHeader,MobileNavToggle,MobileNavMenu} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Download } from "lucide-react";

export function NavbarComponent() {
  const navItems = [
    {
      name: "About me",
      link: "#aboutMe",
    },
    {
      name: "Stack",
      link: "#stack",
    },
    {
      name: "Proyectos",
      link: "#proyectos",
    },
    {
      name: "Certificaciones",
      link: "#certificaciones",
    },
    {
      name: "Contacto",
      link: "#contacto",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items gap-4">
            <NavbarButton variant="primary" className="flex items-center gap-2"  download href="/SebastianCondeVillalbaCV.pdf">Descargar cv<Download height={20} width={20}/></NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}
