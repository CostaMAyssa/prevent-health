
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Stethoscope, 
  FileText, 
  ClipboardList, 
  Heart,
  Download
} from "lucide-react";

export const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Agendamento da consulta",
      description: "Agendamento rápido pelo WhatsApp ou telefone de forma prática e eficiente"
    },
    {
      number: "02",
      icon: Stethoscope,
      title: "Avaliação inicial detalhada",
      description: "Análise completa do seu histórico médico e necessidades específicas"
    },
    {
      number: "03",
      icon: FileText,
      title: "Solicitação de exames",
      description: "Quando necessário, solicitação de exames para melhor diagnóstico"
    },
    {
      number: "04",
      icon: ClipboardList,
      title: "Plano terapêutico personalizado",
      description: "Desenvolvimento de plano com as técnicas e terapias mais indicadas para você"
    },
    {
      number: "05",
      icon: Heart,
      title: "Acompanhamento e reavaliação",
      description: "Monitoramento periódico para ajustes e evolução do tratamento"
    }
  ];

  return (
    <section id="process" className="py-20 bg-cor-fundo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-6">
            Como funciona{" "}
            <span className="text-cor-principal">o atendimento</span>
          </h2>
          <p className="text-lg text-cor-texto max-w-3xl mx-auto">
            Um processo cuidadosamente estruturado para garantir o melhor 
            cuidado integrativo e personalizado para você.
          </p>
        </div>

        {/* Steps with Alternating Colors */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isEven 
                    ? 'bg-gradient-to-r from-cor-principal to-cor-principal/90' 
                    : 'bg-gradient-to-r from-slate-700 to-slate-600'
                }`}
              >
                {/* Content Container */}
                <div className="px-8 py-12 md:px-12 md:py-16">
                  <div className={`flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* Number and Icon Side */}
                    <div className="flex-shrink-0">
                      <div className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center ${
                        isEven 
                          ? 'bg-white/20 backdrop-blur-sm border-2 border-white/30' 
                          : 'bg-cor-principal/20 backdrop-blur-sm border-2 border-cor-principal/30'
                      }`}>
                        <div className="text-center">
                          <div className={`text-3xl md:text-4xl font-bold mb-1 ${
                            isEven ? 'text-white' : 'text-cor-principal'
                          }`}>
                            {step.number}
                          </div>
                          <Icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto ${
                            isEven ? 'text-white/80' : 'text-cor-principal/80'
                          }`} />
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1">
                      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                        isEven ? 'text-white' : 'text-white'
                      }`}>
                            {step.title}
                          </h3>
                      <p className={`text-lg md:text-xl leading-relaxed ${
                        isEven ? 'text-white/90' : 'text-white/90'
                      }`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 ${
                  isEven ? 'bg-white' : 'bg-cor-principal'
                }`}></div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-full opacity-5 ${
                  isEven ? 'bg-white' : 'bg-cor-principal'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-cor-principal hover:bg-cor-botao-hover text-white px-8 py-4 text-lg font-semibold rounded-full shadow-elegant hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => alert('Download do PDF em breve')}
          >
            <Download className="h-5 w-5 mr-2" />
            Baixe aqui o PDF completo com detalhes do nosso atendimento
          </Button>
        </div>
      </div>
    </section>
  );
};
