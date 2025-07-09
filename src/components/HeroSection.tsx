
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
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cor-texto leading-tight">
                Saúde Integral e Cuidado Humanizado com a{" "}
                <span className="text-cor-principal">Dra. Daniela Fiorim</span>
              </h1>
              <p className="text-xl text-cor-texto max-w-xl">
                Fisioterapia Integrativa e Terapias Complementares para seu bem-estar físico, emocional e espiritual.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-elegant text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                onClick={() => window.open('https://wa.me/5562998221110', '_blank')}
              >
                Agende sua consulta pelo WhatsApp
              </Button>
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
            <div className="pt-8 flex justify-center">
              <div className="relative w-80 h-20 overflow-hidden">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center gap-3 transition-all duration-500 transform ${
                      index === currentCardIndex 
                        ? 'translate-x-0 opacity-100' 
                        : index < currentCardIndex 
                          ? '-translate-x-full opacity-0' 
                          : 'translate-x-full opacity-0'
                    }`}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <card.icon className="h-6 w-6 text-cor-principal" />
                    </div>
                    <div>
                      <p className="font-semibold text-cor-texto">{card.title}</p>
                      <p className="text-sm text-cor-texto/70">{card.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores de progresso - agora embaixo da foto */}
            <div className="flex justify-center gap-2 pt-4">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
