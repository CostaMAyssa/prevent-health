
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const HeroSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const cards = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      subtitle: "Cuidado integral"
    },
    {
      icon: Shield,
      title: "Fisioterapia Integrativa",
      subtitle: "25 anos de experiência"
    },
    {
      icon: Users,
      title: "Terapias Complementares",
      subtitle: "Corpo, mente e espírito"
    }
  ];

  // Lista dos vídeos locais
  const videos = [
    "/videos/8313516-hd_1920_1080_30fps.mp4",
    "/videos/5793441-uhd_3840_2160_25fps.mp4", 
    "/videos/4520173-hd_1920_1080_30fps.mp4"
  ];

  // Alternância dos cards rotativos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, [cards.length]);

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
    <section id="hero" className="relative min-h-screen flex items-center hero-section overflow-hidden">
      {/* Playlist de Vídeos de Fundo */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        poster="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
        key={currentVideoIndex} // Force re-render quando muda o vídeo
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        {/* Fallback para navegadores que não suportam vídeo */}
        Seu navegador não suporta a tag de vídeo.
      </video>

      {/* Indicadores de Vídeo */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentVideoIndex ? 'bg-cor-principal' : 'bg-white/50'
            }`}
            onClick={() => setCurrentVideoIndex(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Conteúdo da Hero Section */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-4xl space-y-8">
            {/* Frase de destaque */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-hero-title drop-shadow-lg">
                "Seu corpo fala, sua mente sente — e aqui,{" "}
                <span className="text-cor-principal">nós ouvimos tudo isso.</span>"
              </h1>
            </div>

            {/* Nome da clínica e subtítulo */}
            <div className="space-y-4 animate-hero-description">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cor-principal drop-shadow-lg">
                PREVENT & HEALTH
              </h2>
              <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                Terapias Integrativas
              </p>
            </div>

            {/* Botão de agendamento */}
            <div className="animate-hero-button">
              <Button 
                className="bg-cor-principal hover:bg-cor-botao-hover text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/5527999999999?text=Olá! Gostaria de agendar uma consulta.', '_blank')}
              >
                Agendar Consulta
              </Button>
            </div>

            {/* Card rotativo */}
            <div className="pt-8 flex justify-center">
              <div className="relative w-80 h-16 overflow-hidden">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500 transform ${
                      index === currentCardIndex 
                        ? 'translate-x-0 opacity-100' 
                        : index < currentCardIndex 
                          ? '-translate-x-full opacity-0' 
                          : 'translate-x-full opacity-0'
                    }`}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                      <card.icon className="h-6 w-6 text-cor-principal" />
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-white text-base drop-shadow-md">{card.title}</p>
                      <p className="text-sm text-white/80 drop-shadow-md">{card.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores de progresso */}
            <div className="flex justify-center gap-2 pt-4">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentCardIndex ? 'bg-cor-principal' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Seta animada para descobrir mais */}
            <div className="flex flex-col items-center gap-4 pt-8">
              <div className="text-center">
                <p className="text-sm text-cor-principal font-medium drop-shadow-md">
                  Descubra como podemos cuidar de você ↓
                </p>
              </div>
              
              <div className="relative group cursor-pointer" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                {/* Círculo de fundo */}
                <div className="w-16 h-16 bg-gradient-to-br from-cor-principal to-cor-botao-hover rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 animate-float">
                  {/* Seta para baixo */}
                  <svg 
                    className="w-6 h-6 text-white transform group-hover:translate-y-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
              </div>
                
                {/* Ondas de expansão */}
                <div className="absolute inset-0 rounded-full border-2 border-cor-principal/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-cor-destaque/20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              
              <p className="text-xs text-white/70 italic drop-shadow-md">
                Continue explorando
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
