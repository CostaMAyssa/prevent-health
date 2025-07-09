
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta com a Dra. Daniela Fiorim para fisioterapia integrativa."
    );
    window.open(`https://wa.me/5562998221110?text=${message}`, '_blank');
  };

  return (
    <Button 
      className="fixed bottom-6 right-6 z-50 bg-cor-principal hover:bg-cor-botao-hover text-white rounded-full w-16 h-16 shadow-elegant hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 animate-pulse"
      onClick={handleWhatsAppClick}
      size="icon"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  );
};
