
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

export const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lista dos vídeos locais
  const videos = [
    "/videos/8313516-hd_1920_1080_30fps.mp4",
    "/videos/5793441-uhd_3840_2160_25fps.mp4", 
    "/videos/4520173-hd_1920_1080_30fps.mp4"
  ];

  // Alternância dos vídeos
  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 15000); // Troca a cada 15 segundos

    return () => clearInterval(videoInterval);
  }, [videos.length]);

  // Controlar a transição dos vídeos
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.style.opacity = '0';
      
      const handleLoadedData = () => {
        video.style.transition = 'opacity 1s ease-in-out';
        video.style.opacity = '1';
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.load(); // Recarrega o vídeo

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [currentVideoIndex]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-end overflow-hidden">
      {/* Vídeo de Fundo */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        poster="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
        key={currentVideoIndex}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Conteúdo alinhado à direita */}
      <div className="relative z-20 pr-8 md:pr-16 lg:pr-20 xl:pr-24 max-w-2xl text-right">
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
              className="bg-cor-principal hover:bg-cor-botao-hover text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://wa.me/5527999999999?text=Olá! Gostaria de agendar uma consulta.', '_blank')}
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>

      {/* Indicadores de Vídeo */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentVideoIndex ? 'bg-cor-principal' : 'bg-white/50'
            }`}
            onClick={() => setCurrentVideoIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};
