
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#hero" },
    { label: "Terapias", href: "#services" },
    { label: "Benefícios", href: "#benefits" },
    { label: "Pilares", href: "#pillars" },
    { label: "Atendimento", href: "#process" },
    { label: "Sobre", href: "#about" },
    { label: "Localização", href: "#location" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/favicon.png" 
                alt="Logo Dra. Daniela Fiorim" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-cor-principal">PREVENT HEALTH</h1>
              <p className="text-xs text-white">Terapias Integrativas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white hover:text-cor-principal transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4 mt-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-cor-principal transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
