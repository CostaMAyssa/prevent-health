
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cor-principal/20"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-cor-principal/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cor-principal/20 transition-colors">
                          <step.icon className="h-6 w-6 text-cor-principal" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-cor-texto mb-3">
                            {step.title}
                          </h3>
                          <p className="text-cor-texto/70 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Step number */}
                <div className="w-16 h-16 bg-cor-principal rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  {step.number}
                </div>

                <div className="flex-1 lg:block hidden"></div>
              </div>
            ))}
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
