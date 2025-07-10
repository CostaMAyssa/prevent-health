
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-hero-title drop-shadow-lg">
                Saúde Integral e Cuidado Humanizado com a{" "}
                <span className="text-cor-principal">Dra. Daniela Fiorim</span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-hero-button">
              {/* Seta animada para descobrir mais */}
              <div className="flex flex-col items-center gap-4 mt-8">
                <div className="text-center">
                  <p className="text-lg text-white/90 mb-2 leading-relaxed drop-shadow-md">
                    Sua jornada de transformação começa aqui
                  </p>
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

          <div className="relative animate-slide-in-right">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" 
                alt="Dra. Daniela Fiorim atendendo paciente"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cor-destaque/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cor-principal/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Card rotativo - agora embaixo da foto */}
            <div className="pt-6 flex justify-center">
              <div className="relative w-64 h-16 overflow-hidden">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center gap-2 transition-all duration-500 transform ${
                      index === currentCardIndex 
                        ? 'translate-x-0 opacity-100' 
                        : index < currentCardIndex 
                          ? '-translate-x-full opacity-0' 
                          : 'translate-x-full opacity-0'
                    }`}
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                      <card.icon className="h-5 w-5 text-cor-principal" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm drop-shadow-md">{card.title}</p>
                      <p className="text-xs text-white/80 drop-shadow-md">{card.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores de progresso - agora embaixo da foto */}
            <div className="flex justify-center gap-1.5 pt-3">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentCardIndex ? 'bg-cor-principal' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
