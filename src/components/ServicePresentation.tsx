
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
    <section id="services" className="py-20 bg-cor-fundo">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-cor-texto">
                Nossas{" "}
                <span className="text-cor-principal">Terapias Integrativas</span>
              </h2>
              <p className="text-lg text-cor-texto leading-relaxed">
                Sou Daniela Nunes Viana Fiorim, fisioterapeuta com mais de 25 anos de experiência.
                Desde minha formação em Fisioterapia pela Faculdade de Educação Física de Lins-SP, me dedico à saúde integral e ao cuidado personalizado.
              </p>
              <p className="text-lg text-cor-texto leading-relaxed">
                Após um grave acidente na infância, escolhi a fisioterapia para transformar vidas, unindo ciência e terapias integrativas para cuidar do corpo e da mente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cor-principal mt-0.5 flex-shrink-0" />
                  <span className="text-cor-texto">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-cor-principal hover:bg-cor-botao-hover text-white px-8 py-4 text-lg font-semibold rounded-full shadow-elegant hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/5562998221110', '_blank')}
              >
                Agende sua consulta
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-cor-principal rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-cor-texto text-center mb-4">
                  Conheça mais sobre minha abordagem
                </h3>
                <p className="text-cor-texto text-center leading-relaxed">
                  Assista a uma introdução sobre minhas terapias integrativas e como elas podem 
                  transformar sua saúde e bem-estar de forma holística.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
