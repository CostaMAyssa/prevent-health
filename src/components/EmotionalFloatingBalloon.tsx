
import { useState, useEffect } from "react";
import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EmotionalFloatingBalloon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  // Mensagens emocionais rotativas
  const emotionalMessages = [
    {
      title: "Cansado de conviver com a dor?",
      subtitle: "Você merece uma vida sem limitações. Descubra como as terapias integrativas podem transformar seu bem-estar.",
    },
    {
      title: "Ansiedade controlando sua vida?",
      subtitle: "Não precisa ser assim. Encontre o equilíbrio que você tanto busca com nosso atendimento especializado.",
    },
    {
      title: "Noites mal dormidas te esgotando?",
      subtitle: "O sono reparador que você precisa está ao seu alcance. Vamos cuidar de você de forma integral.",
    },
    {
      title: "Estresse afetando sua qualidade de vida?",
      subtitle: "Hora de priorizar seu bem-estar. Descubra métodos naturais que realmente funcionam.",
    }
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Aparece após rolar 30% da página e não foi fechado ainda
      const shouldShow = (scrollPosition > windowHeight * 0.3) && !hasBeenShown;
      
      if (shouldShow && !isVisible) {
        setIsVisible(true);
        // Rotaciona mensagem aleatoriamente
        setCurrentMessage(Math.floor(Math.random() * emotionalMessages.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, hasBeenShown]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setHasBeenShown(true);
      setIsClosing(false);
    }, 300);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vi a mensagem no site e gostaria de agendar uma consulta com a Dra. Daniela Fiorim. Preciso cuidar melhor da minha saúde e bem-estar."
    );
    window.open(`https://wa.me/5562998221110?text=${message}`, '_blank');
    handleClose();
  };

  if (!isVisible) return null;

  const message = emotionalMessages[currentMessage];

  return (
    <div 
      className={`fixed bottom-6 left-6 z-[60] max-w-sm transform transition-all duration-500 ease-out ${
        isClosing 
          ? 'translate-y-full opacity-0 scale-95' 
          : 'translate-y-0 opacity-100 scale-100'
      }`}
      style={{
        animation: isClosing ? 'none' : 'float 6s ease-in-out infinite'
      }}
    >
      {/* Balão principal */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-cor-destaque/20 p-6 backdrop-blur-sm">
        {/* Botão fechar */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Ícone emocional */}
        <div className="flex items-start space-x-3 mb-4">
          <div className="bg-cor-principal/10 p-2 rounded-full flex-shrink-0">
            <Heart className="h-5 w-5 text-cor-principal" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-cor-texto mb-2 leading-tight">
              {message.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {message.subtitle}
            </p>
          </div>
        </div>

        {/* Botão de ação */}
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full bg-cor-principal hover:bg-cor-botao-hover text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
        >
          💚 Agendar Consulta Agora
        </Button>

        {/* Elemento visual - seta apontando */}
        <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-r border-b border-cor-destaque/20 transform rotate-45"></div>
      </div>

      {/* Efeito de brilho sutil */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cor-principal/5 to-cor-destaque/5 -z-10 blur-xl"></div>
    </div>
  );
};
