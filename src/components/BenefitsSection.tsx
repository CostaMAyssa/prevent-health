
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Shield, 
  Users, 
  Stethoscope, 
  Brain, 
  Activity,
  Clock,
  Award,
  TrendingUp
} from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Redução de uso de medicamentos",
      description: "Abordagem natural e preventiva para diminuir a dependência de medicamentos"
    },
    {
      icon: Clock,
      title: "Acompanhamento constante",
      description: "Monitoramento contínuo da sua saúde com consultas regulares"
    },
    {
      icon: TrendingUp,
      title: "Melhora da qualidade de vida",
      description: "Foco no bem-estar integral e prevenção de doenças"
    },
    {
      icon: Users,
      title: "Atendimento humanizado",
      description: "Cuidado personalizado com tempo adequado para cada paciente"
    },
    {
      icon: Shield,
      title: "Plano de saúde integrativo",
      description: "Combinação de medicina tradicional e terapias complementares"
    },
    {
      icon: Activity,
      title: "Resultados baseados em evidência",
      description: "Tratamentos fundamentados em pesquisas científicas atualizadas"
    },
    {
      icon: Brain,
      title: "Prevenção especializada",
      description: "Identificação precoce de riscos e prevenção de doenças"
    },
    {
      icon: Stethoscope,
      title: "Medicina personalizada",
      description: "Tratamentos adaptados às necessidades individuais de cada paciente"
    },
    {
      icon: Award,
      title: "Excelência no atendimento",
      description: "Padrão de qualidade elevado em todos os aspectos do cuidado"
    }
  ];

  return (
    <section id="benefits" className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Benefícios do{" "}
            <span className="text-primary">Programa Prevent Health</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra as vantagens de escolher uma abordagem preventiva e personalizada 
            para cuidar da sua saúde com excelência e humanização.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
