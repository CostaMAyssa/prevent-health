
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section id="hero" className="min-h-screen flex items-center bg-cor-fundo hero-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cor-texto leading-tight animate-hero-title">
                Saúde Integral e Cuidado Humanizado com a{" "}
                <span className="text-cor-principal">Dra. Daniela Fiorim</span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-hero-button">
              {/* Seta animada para descobrir mais */}
              <div className="flex flex-col items-center gap-4 mt-8">
                <div className="text-center">
                  <p className="text-lg text-cor-texto/80 mb-2 leading-relaxed">
                    Sua jornada de transformação começa aqui
                  </p>
                  <p className="text-sm text-cor-principal font-medium">
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
                
                <p className="text-xs text-cor-texto/60 italic">
                  Continue explorando
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
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
                      <p className="font-medium text-cor-texto text-sm">{card.title}</p>
                      <p className="text-xs text-cor-texto/70">{card.subtitle}</p>
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
                    index === currentCardIndex ? 'bg-cor-principal' : 'bg-cor-principal/30'
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
