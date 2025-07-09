
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, CheckCircle } from "lucide-react";

export const ServicePresentation = () => {
  const highlights = [
    "Microfisioterapia para traumas e disfunções celulares",
    "Ozonioterapia para oxigenação e desintoxicação",
    "Acupuntura Quântica para equilíbrio energético",
    "Terapia Ortobiomolecular com substâncias naturais",
    "Psych-K para reprogramação biológica",
    "Terapias Biofísicas para bem-estar integral"
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nossas{" "}
                <span className="text-primary">Terapias Integrativas</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou Daniela Nunes Viana Fiorim, fisioterapeuta com mais de 25 anos de experiência.
                Desde minha formação em Fisioterapia pela Faculdade de Educação Física de Lins-SP, me dedico à saúde integral e ao cuidado personalizado.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Após um grave acidente na infância, escolhi a fisioterapia para transformar vidas, unindo ciência e terapias integrativas para cuidar do corpo e da mente.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => window.open('https://wa.me/5562998221110', '_blank')}
              >
                Agendar Consulta
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Saiba mais sobre nossas terapias
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden bg-gradient-secondary border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80" 
                    alt="Fisioterapia Integrativa"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white/90 hover:bg-white text-primary rounded-full p-6"
                      onClick={() => alert('Vídeo institucional em breve')}
                    >
                      <Play className="h-8 w-8 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    Cada tratamento é personalizado
                  </h3>
                  <p className="text-muted-foreground">
                    Respeitando suas necessidades e individualidade para alcançar o melhor resultado.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
