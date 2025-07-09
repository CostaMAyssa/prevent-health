
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
      className="whatsapp-float"
      onClick={handleWhatsAppClick}
      size="icon"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};
