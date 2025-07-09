
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export const LocationMap = () => {
  const address = "Rua João de Abreu, 116, Ed. Euro Working Concept, Sala 1002-B, Setor Oeste, Goiânia, GO";
  const encodedAddress = encodeURIComponent(address);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua João de Abreu, nº 116 – Ed. Euro Working Concept, Sala 1002-B, Setor Oeste – Goiânia-GO",
      action: "Ver no mapa"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      action: null
    },
    {
      icon: Phone,
      title: "Telefones",
      info: "(62) 3215-2603 | (62) 99822-1110",
      action: "Ligar agora"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@danielafiorim.com.br",
      action: "Enviar e-mail"
    }
  ];

  return (
    <section id="location" className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossa{" "}
            <span className="text-primary">Localização</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Encontre-nos facilmente em Goiânia, com localização privilegiada 
            e fácil acesso no Setor Oeste.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {item.info}
                      </p>
                      {item.action && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-primary text-primary hover:bg-primary hover:text-white"
                          onClick={() => {
                            if (item.title === "Telefones") {
                              window.open('tel:+5562998221110', '_blank');
                            } else if (item.title === "E-mail") {
                              window.open('mailto:contato@danielafiorim.com.br', '_blank');
                            } else if (item.title === "Endereço") {
                              window.open(mapsUrl, '_blank');
                            }
                          }}
                        >
                          {item.action}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="relative h-96 bg-gradient-primary">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-16 w-16 mx-auto mb-4 opacity-80" />
                      <h3 className="text-xl font-semibold mb-2">
                        Consultório em Goiânia
                      </h3>
                      <p className="text-white/80 mb-4 px-4">
                        Rua João de Abreu, 116<br />
                        Setor Oeste - Goiânia/GO
                      </p>
                      <Button 
                        variant="secondary"
                        onClick={() => window.open(mapsUrl, '_blank')}
                      >
                        Abrir no Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
