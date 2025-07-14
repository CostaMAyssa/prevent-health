
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import heroVideo from "../lib/videos/WhatsApp Video 2025-07-14 at 19.49.53.mp4";

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="hero" className="relative h-screen flex items-start justify-end overflow-hidden pt-48 md:pt-64">
      {/* Vídeo de Fundo */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Conteúdo alinhado à direita, texto à esquerda */}
      <div className="relative z-20 pr-8 md:pr-16 lg:pr-20 xl:pr-24 max-w-2xl text-left">
        <div className="space-y-8">
          {/* Frase de destaque */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
              "Seu corpo fala, sua mente sente —{" "}
              <br className="hidden md:block" />
              <span className="text-cor-principal font-normal">
                e aqui, nós ouvimos tudo isso.
              </span>"
            </h1>
          </div>

          {/* Nome da clínica e subtítulo */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-cor-principal">
              PREVENT & HEALTH
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
              Terapias Integrativas
            </p>
          </div>

          {/* Botão de agendamento */}
          <div className="pt-8">
            <Button 
              className="bg-[#25D366] hover:bg-[#1FB157] text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://wa.me/5562998221110?text=Olá! Gostaria de agendar uma consulta.', '_blank')}
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
