
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Shield, 
  Users, 
  Stethoscope, 
  Brain, 
  Activity,
  TrendingUp,
  ChevronRight,
  Sparkles
} from "lucide-react";

export const BenefitsSection = () => {
  const [visibleCards, setVisibleCards] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Melhora da qualidade de vida",
      description: "Bem-estar físico, emocional e espiritual através de terapias integrativas",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Alívio efetivo de dores",
      description: "Tratamento de dores crônicas e agudas com técnicas especializadas",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600"
    },
    {
      icon: Shield,
      title: "Fortalecimento imunológico",
      description: "Estimula o sistema imunológico e previne doenças naturalmente",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: Brain,
      title: "Equilíbrio emocional",
      description: "Redução do estresse e promoção do bem-estar mental e emocional",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: Activity,
      title: "Evidências científicas",
      description: "Tratamentos baseados em pesquisas científicas e abordagem holística",
      color: "bg-yellow-50 border-yellow-200",
      iconColor: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Cuidado personalizado",
      description: "Atendimento próximo, respeitoso e individualizado para cada paciente",
      color: "bg-cor-principal/10 border-cor-principal/20",
      iconColor: "text-cor-principal"
    }
  ];

  const startDiscovery = () => {
    setHasStarted(true);
    setVisibleCards(1);
  };

  const showNextBenefit = () => {
    if (visibleCards < benefits.length) {
      setVisibleCards(visibleCards + 1);
    }
  };

  const showAllBenefits = () => {
    setVisibleCards(benefits.length);
  };

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-white to-cor-fundo">
      <div className="container mx-auto px-4">
        
        {/* Initial Question */}
        {!hasStarted && (
          <div className="text-center max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cor-principal/5 to-cor-destaque/5 rounded-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-cor-principal/10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-cor-principal to-cor-botao-hover rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-6 leading-tight">
                  Você sabe os{" "}
                  <span className="text-cor-principal">Benefícios da Fisioterapia Integrativa?</span>
                </h2>
                
                <p className="text-xl text-cor-texto/80 mb-8 leading-relaxed">
                  Descubra como nossa abordagem pode transformar sua saúde e bem-estar de forma personalizada
                </p>
                
                <Button 
                  size="lg"
                  onClick={startDiscovery}
                  className="btn-elegant text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Descobrir os benefícios
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cor-destaque/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cor-principal/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        )}

        {/* Progressive Benefits Discovery */}
        {hasStarted && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-6">
            Benefícios da{" "}
                <span className="text-cor-principal">Fisioterapia Integrativa</span>
          </h2>
              <p className="text-lg text-cor-texto/80 max-w-3xl mx-auto">
                Descubra as vantagens de uma abordagem integrativa para sua saúde
          </p>
        </div>

            {/* Benefits Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.slice(0, visibleCards).map((benefit, index) => (
            <Card 
              key={index} 
                  className="group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: `${3 + index * 0.5}s`
                  }}
                >
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cor-principal/5 to-cor-destaque/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-cor-principal to-cor-botao-hover rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                      <benefit.icon className="h-8 w-8 text-white" />
                </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold text-cor-texto mb-3 group-hover:text-cor-principal transition-colors duration-300">
                  {benefit.title}
                </h3>
                      <p className="text-cor-texto/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-cor-principal/30 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-cor-destaque/40 rounded-full animate-pulse"></div>
              </CardContent>
            </Card>
          ))}
        </div>

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              {visibleCards < benefits.length && (
                <div className="space-x-4">
                  <Button 
                    onClick={showNextBenefit}
                    className="bg-cor-principal hover:bg-cor-botao-hover text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Descobrir mais um benefício
                  </Button>
                  
                  <Button 
                    onClick={showAllBenefits}
                    variant="outline"
                    className="border-cor-principal text-cor-principal hover:bg-cor-principal hover:text-white px-6 py-3 rounded-full transition-all duration-300"
                  >
                    Ver todos os benefícios
                  </Button>
                </div>
              )}
              
              {visibleCards === benefits.length && (
                <div className="bg-cor-fundo/80 rounded-2xl p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-cor-texto mb-4">
                    Pronto para transformar sua saúde?
                  </h3>
                  <p className="text-cor-texto/70 mb-6">
                    Agende uma consulta e descubra como a fisioterapia integrativa pode beneficiar você
                  </p>
                  <Button 
                    size="lg"
                    onClick={() => window.open('https://wa.me/5562998221110', '_blank')}
                    className="bg-[#25D366] hover:bg-[#1FB157] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Agendar consulta pelo WhatsApp
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
