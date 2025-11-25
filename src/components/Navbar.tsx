"use client";
import {Navbar,NavBody,NavItems,MobileNav,NavbarLogo,NavbarButton,MobileNavHeader,MobileNavToggle,MobileNavMenu} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Download } from "lucide-react";
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

export function NavbarComponent() {
  const { scrollToSection } = useSmoothScroll();
  
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

  const handleNavClick = (link: string) => {
    scrollToSection(link.replace('#', ''));
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative w-full z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div onClick={(e) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a')?.getAttribute('href');
            if (link?.startsWith('#')) {
              e.preventDefault();
              scrollToSection(link.replace('#', ''));
            }
          }}>
            <NavItems items={navItems} />
          </div>
          <div className="flex items-center gap-4">
            <NavbarButton 
              variant="primary" 
              className="flex items-center gap-2"  
              as="a"
              download 
              href="/SebastianCondeVillalbaCV.pdf"
            >
              Descargar cv
              <Download height={20} width={20}/>
            </NavbarButton>
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
              <button
                key={`mobile-link-${idx}`}
                onClick={() => handleNavClick(item.link)}
                className="relative text-neutral-600 dark:text-neutral-300 w-full text-left"
              >
                <span className="block">{item.name}</span>
              </button>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}