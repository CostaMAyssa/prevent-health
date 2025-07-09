
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Heart, 
  Stethoscope
} from "lucide-react";

export const DoctorProfile = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Formação Médica",
      description: "Graduação em Medicina pela Universidade Federal do Espírito Santo"
    },
    {
      icon: Award,
      title: "Especialização",
      description: "Especialista em Medicina Preventiva e Integrativa"
    },
    {
      icon: Heart,
      title: "Abordagem Humanizada",
      description: "Foco no cuidado integral e na relação médico-paciente"
    },
    {
      icon: Stethoscope,
      title: "Medicina Integrativa",
      description: "Combinação de medicina tradicional e terapias complementares"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative bg-gradient-primary rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80" 
                alt="Dra. Daniela Fiorim"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Dra.{" "}
                <span className="text-primary">Daniela Fiorim</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Médica especialista em Medicina Preventiva e Integrativa, com mais de 15 anos 
                de experiência no cuidado humanizado e personalizado. Acredita que a verdadeira 
                medicina vai além do tratamento de doenças, focando na prevenção e no bem-estar 
                integral do ser humano.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sua abordagem combina os melhores recursos da medicina tradicional com 
                terapias complementares comprovadas, sempre priorizando a relação próxima 
                com o paciente e o cuidado individualizado.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {qualifications.map((qualification, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <qualification.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {qualification.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {qualification.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => window.open('https://wa.me/5527999999999', '_blank')}
              >
                Agendar Consulta
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Conhecer mais sobre a abordagem
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
