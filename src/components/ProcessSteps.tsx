
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

        {/* Background Image with Content */}
        <div 
          className="relative py-16 rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay ofuscado */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  {/* Número */}
                  <div className="w-12 h-12 bg-cor-principal rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  
                  {/* Conteúdo alternado */}
                  <div className="flex-1">
                    {index % 2 === 0 ? (
                      // Texto verde (índices pares: 0, 2, 4...)
                      <div>
                        <h3 className="text-2xl font-bold text-cor-principal mb-2">
                          {step.title}
                        </h3>
                        <p className="text-cor-principal/80 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      // Texto com fundo (índices ímpares: 1, 3...)
                      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-cor-destaque/20">
                        <h3 className="text-2xl font-bold text-cor-texto mb-2">
                          {step.title}
                        </h3>
                        <p className="text-cor-texto/70 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
