
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta na Prevent Health com a Dra. Daniela Fiorim."
    );
    window.open(`https://wa.me/5527999999999?text=${message}`, '_blank');
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
