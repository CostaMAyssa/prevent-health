
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/dradanielafiorim",
      label: "Instagram"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/dradanielafiorim",
      label: "Facebook"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/danielafiorim",
      label: "LinkedIn"
    }
  ];

  const quickLinks = [
    { label: "Início", href: "#hero" },
    { label: "Terapias", href: "#services" },
    { label: "Benefícios", href: "#benefits" },
    { label: "Sobre", href: "#about" },
    { label: "Localização", href: "#location" }
  ];

  return (
    <footer className="bg-cor-texto text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/favicon.png" 
                  alt="Logo Dra. Daniela Fiorim" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dra. Daniela Fiorim</h3>
                <p className="text-sm text-gray-400">Fisioterapia Integrativa</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Fisioterapia Integrativa e Terapias Complementares para seu bem-estar físico, emocional e espiritual.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  size="icon"
                  className="border-gray-600 text-gray-400 hover:bg-cor-principal hover:border-cor-principal hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
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
                    className="text-gray-300 hover:text-cor-principal transition-colors"
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
              <p>Rua João de Abreu, nº 116<br />Ed. Euro Working Concept<br />Sala 1002-B, Setor Oeste<br />Goiânia-GO</p>
              <p>(62) 3215-2603<br />(62) 99822-1110</p>
              <p>contato@danielafiorim.com.br</p>
            </div>
            <Button 
              className="mt-6 bg-[#25D366] hover:bg-[#1FB157] text-white px-6 py-3 rounded-full shadow-elegant hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
              onClick={() => window.open('https://wa.me/5562998221110', '_blank')}
            >
              Agendar Consulta
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2024 Dra. Daniela Fiorim. Todos os direitos reservados.
            <Heart className="h-4 w-4 text-cor-principal" />
            Desenvolvido com carinho para sua saúde.
          </p>
        </div>
      </div>
    </footer>
  );
};
