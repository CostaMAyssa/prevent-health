
import { Card, CardContent } from "@/components/ui/card";

export const PillarsSection = () => {
  const pillars = [
    {
      number: "01",
      title: "Avaliação inicial detalhada",
      description: "Análise completa do seu histórico médico e necessidades específicas"
    },
    {
      number: "02", 
      title: "Solicitação de exames",
      description: "Quando necessário, solicitação de exames para melhor diagnóstico"
    },
    {
      number: "03",
      title: "Plano terapêutico personalizado", 
      description: "Desenvolvimento de plano com as técnicas e terapias mais indicadas para você"
    },
    {
      number: "04",
      title: "Acompanhamento e reavaliação",
      description: "Monitoramento periódico para ajustes e evolução do tratamento"
    },
    {
      number: "05",
      title: "Cuidado contínuo",
      description: "Suporte permanente em sua jornada de bem-estar e saúde integral"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-6">
            Nossos{" "}
            <span className="text-cor-principal">Pilares de Tratamento</span>
          </h2>
          <p className="text-lg text-cor-texto max-w-3xl mx-auto">
            Fundamentamos nosso trabalho em pilares sólidos que garantem 
            um atendimento de excelência e resultados duradouros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cor-principal rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {pillar.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cor-texto mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-cor-texto/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
