
import { Card, CardContent } from "@/components/ui/card";

export const PillarsSection = () => {
  const pillars = [
    {
      title: "Prevenção em primeiro lugar",
      description: "Acreditamos que prevenir é sempre melhor que remediar. Nossa abordagem foca na identificação precoce de riscos e na implementação de estratégias preventivas personalizadas para cada paciente."
    },
    {
      title: "Relação próxima com o paciente",
      description: "Valorizamos o vínculo médico-paciente, dedicando tempo adequado para ouvir, compreender e criar um plano de cuidados que respeite a individualidade e necessidades de cada pessoa."
    },
    {
      title: "Tratamentos individualizados",
      description: "Cada paciente é único, por isso desenvolvemos planos de tratamento personalizados que consideram histórico médico, estilo de vida, preferências e objetivos específicos de saúde."
    },
    {
      title: "Atualização científica contínua",
      description: "Mantemos-nos constantemente atualizados com as mais recentes pesquisas e evidências científicas, garantindo que nossos pacientes recebam os melhores tratamentos disponíveis."
    },
    {
      title: "Medicina integrativa",
      description: "Combinamos o melhor da medicina tradicional com terapias complementares comprovadas, oferecendo uma abordagem holística para o cuidado da saúde e bem-estar."
    },
    {
      title: "Compromisso com a excelência",
      description: "Nossa dedicação à excelência se reflete em cada aspecto do atendimento, desde a primeira consulta até o acompanhamento contínuo, sempre priorizando a qualidade e humanização do cuidado."
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pilares da{" "}
            <span className="text-primary">Prevent Health</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça os valores fundamentais que norteiam nossa prática médica 
            e garantem um cuidado de excelência para nossos pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
