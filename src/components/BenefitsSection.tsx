
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
      icon: TrendingUp,
      title: "Melhora da qualidade de vida",
      description: "Bem-estar físico, emocional e espiritual através de terapias integrativas"
    },
    {
      icon: Heart,
      title: "Alívio efetivo de dores",
      description: "Tratamento de dores crônicas e agudas com técnicas especializadas"
    },
    {
      icon: Shield,
      title: "Fortalecimento imunológico",
      description: "Estimula o sistema imunológico e previne doenças naturalmente"
    },
    {
      icon: Brain,
      title: "Equilíbrio emocional",
      description: "Redução do estresse e promoção do bem-estar mental e emocional"
    },
    {
      icon: Activity,
      title: "Evidências científicas",
      description: "Tratamentos baseados em pesquisas científicas e abordagem holística"
    },
    {
      icon: Users,
      title: "Cuidado personalizado",
      description: "Atendimento próximo, respeitoso e individualizado para cada paciente"
    }
  ];

  return (
    <section id="benefits" className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Benefícios da{" "}
            <span className="text-primary">Fisioterapia Integrativa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra as vantagens de escolher uma abordagem integrativa e personalizada 
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
