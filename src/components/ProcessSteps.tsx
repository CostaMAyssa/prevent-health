
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
      description: "Agende sua consulta de forma rápida e prática pelo WhatsApp ou telefone"
    },
    {
      number: "02",
      icon: Stethoscope,
      title: "Avaliação inicial",
      description: "Consulta detalhada para conhecer seu histórico médico e objetivos de saúde"
    },
    {
      number: "03",
      icon: FileText,
      title: "Solicitação de exames",
      description: "Exames personalizados conforme sua necessidade e perfil de saúde"
    },
    {
      number: "04",
      icon: ClipboardList,
      title: "Montagem do plano de cuidado",
      description: "Plano personalizado com estratégias preventivas e terapêuticas"
    },
    {
      number: "05",
      icon: Heart,
      title: "Acompanhamento periódico",
      description: "Monitoramento contínuo com consultas regulares e ajustes necessários"
    }
  ];

  return (
    <section id="process" className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Etapas do{" "}
            <span className="text-primary">Nosso Atendimento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um processo cuidadosamente estruturado para garantir o melhor 
            cuidado preventivo e personalizado para você.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Step number */}
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
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
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => alert('Download do PDF em breve')}
          >
            <Download className="h-5 w-5 mr-2" />
            Baixar PDF com todas as informações
          </Button>
        </div>
      </div>
    </section>
  );
};
