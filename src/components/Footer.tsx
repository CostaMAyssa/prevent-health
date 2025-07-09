
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/preventhealth",
      label: "Instagram"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/preventhealth",
      label: "Facebook"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/preventhealth",
      label: "LinkedIn"
    }
  ];

  const quickLinks = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#services" },
    { label: "Benefícios", href: "#benefits" },
    { label: "Sobre", href: "#about" },
    { label: "Localização", href: "#location" }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">PH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Prevent Health</h3>
                <p className="text-sm text-gray-400">Dra. Daniela Fiorim</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Medicina preventiva personalizada com acompanhamento contínuo 
              para sua saúde e bem-estar integral.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  size="icon"
                  className="border-gray-600 text-gray-400 hover:bg-primary hover:border-primary hover:text-white"
                  onClick={() => window.open(social.href, '_blank')}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <p>Rua das Palmeiras, 123<br />Praia do Canto, Vitória - ES</p>
              <p>(27) 99999-9999</p>
              <p>contato@preventhealth.com.br</p>
            </div>
            <Button 
              className="mt-6 bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://wa.me/5527999999999', '_blank')}
            >
              Agendar Consulta
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2024 Prevent Health. Todos os direitos reservados.
            <Heart className="h-4 w-4 text-primary" />
            Desenvolvido com carinho para sua saúde.
          </p>
        </div>
      </div>
    </footer>
  );
};
