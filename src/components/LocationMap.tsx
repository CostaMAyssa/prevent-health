
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export const LocationMap = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua das Palmeiras, 123 - Praia do Canto, Vitória - ES",
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
      title: "Telefone",
      info: "(27) 99999-9999",
      action: "Ligar agora"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@preventhealth.com.br",
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
            Encontre-nos facilmente em uma localização privilegiada, 
            com fácil acesso e estacionamento disponível.
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
                            if (item.title === "Telefone") {
                              window.open('tel:+5527999999999', '_blank');
                            } else if (item.title === "E-mail") {
                              window.open('mailto:contato@preventhealth.com.br', '_blank');
                            } else if (item.title === "Endereço") {
                              window.open('https://maps.google.com/', '_blank');
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
                        Mapa da Clínica
                      </h3>
                      <p className="text-white/80 mb-4">
                        Clique para abrir no Google Maps
                      </p>
                      <Button 
                        variant="secondary"
                        onClick={() => window.open('https://maps.google.com/', '_blank')}
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
