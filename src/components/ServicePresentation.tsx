
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Heart, Leaf, Zap, Droplets, Brain, Shield } from "lucide-react";

export const ServicePresentation = () => {
  const therapies = [
    {
      icon: Heart,
      title: "Microfisioterapia",
      description: "Para traumas e disfunções celulares",
      delay: "0s"
    },
    {
      icon: Droplets,
      title: "Ozonioterapia",
      description: "Para oxigenação e desintoxicação",
      delay: "0.2s"
    },
    {
      icon: Zap,
      title: "Acupuntura Quântica",
      description: "Para equilíbrio energético",
      delay: "0.4s"
    },
    {
      icon: Leaf,
      title: "Terapia Ortobiomolecular",
      description: "Com substâncias naturais",
      delay: "0.6s"
    },
    {
      icon: Brain,
      title: "Psych-K",
      description: "Para reprogramação biológica",
      delay: "0.8s"
    },
    {
      icon: Shield,
      title: "Terapias Biofísicas",
      description: "Para bem-estar integral",
      delay: "1s"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-cor-fundo to-white">
      <div className="container mx-auto px-4">
        
        {/* Video Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-6">
            Vamos conhecer nossa{" "}
            <span className="text-cor-principal">clínica</span>
          </h2>
          <p className="text-lg text-cor-texto mb-8 max-w-2xl mx-auto">
            Descubra nosso espaço acolhedor e nossa abordagem integrativa para sua saúde e bem-estar
          </p>
          
          {/* YouTube Video Embed */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-cor-principal/10 to-cor-destaque/10 rounded-2xl flex items-center justify-center">
                <div className="w-20 h-20 bg-cor-principal rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-cor-texto mb-2">
                  Conheça nossa abordagem terapêutica
                </h3>
                <p className="text-cor-texto/70">
                  Assista ao vídeo e descubra como nossas terapias integrativas podem transformar sua vida
                </p>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cor-destaque/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cor-principal/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Therapies Section with Background Image */}
        <div 
          className="relative py-20 rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay ofuscado */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Therapies Title */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-6">
                Nossas{" "}
                <span className="text-cor-principal">Terapias Integrativas</span>
              </h2>
              <p className="text-lg text-cor-texto max-w-3xl mx-auto">
                Tratamentos especializados para cuidar de você de forma completa e personalizada
              </p>
            </div>

            {/* Floating Therapy Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative px-4">
              {therapies.map((therapy, index) => (
                <Card 
                  key={index} 
                  className="group bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-float"
                  style={{
                    animationDelay: therapy.delay,
                    animationDuration: `${3 + index * 0.5}s`
                  }}
                >
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cor-principal/5 to-cor-destaque/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-cor-principal to-cor-botao-hover rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                      <therapy.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold text-cor-texto mb-3 group-hover:text-cor-principal transition-colors duration-300">
                        {therapy.title}
                      </h3>
                      <p className="text-cor-texto/70 text-sm leading-relaxed">
                        {therapy.description}
                      </p>
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-cor-principal/30 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-cor-destaque/40 rounded-full animate-pulse"></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <Button 
                size="lg" 
                className="btn-elegant text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                onClick={() => window.open('https://wa.me/5562998221110', '_blank')}
              >
                Agende sua consulta pelo WhatsApp
              </Button>
              <p className="text-cor-texto/70 mt-4">
                Transforme sua saúde com nosso cuidado integral e personalizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
