
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export const LocationMap = () => {
  const address = "Rua João de Abreu, 116, Ed. Euro Working Concept, Sala 1002-B, Setor Oeste, Goiânia, GO";
  const encodedAddress = encodeURIComponent(address);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  
  // URL para iframe do Google Maps
  const embedMapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dw0qWMW1-8Cz7c&q=${encodedAddress}`;

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
    <section id="location" className="py-20 bg-cor-fundo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-6">
            Nossa{" "}
            <span className="text-cor-principal">Localização</span>
          </h2>
          <p className="text-lg text-cor-texto max-w-3xl mx-auto">
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
                    <div className="w-12 h-12 bg-cor-principal/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cor-principal/20 transition-colors">
                      <item.icon className="h-6 w-6 text-cor-principal" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-cor-texto mb-2">
                        {item.title}
                      </h3>
                      <p className="text-cor-texto/70 mb-3">
                        {item.info}
                      </p>
                      {item.action && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-cor-principal text-cor-principal hover:bg-cor-principal hover:text-white rounded-full px-4 py-2 shadow-elegant hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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
                <div className="relative h-96">
                  {/* Google Maps Embed */}
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8891234567890!2d-49.2648123!3d-16.6778123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQwJzQwLjEiUyA0OcKwMTUnNTMuMyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr&q=Rua+João+de+Abreu,+116,+Setor+Oeste,+Goiânia,+GO`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Clínica Dra. Daniela Fiorim"
                  />
                  
                  {/* Overlay com informações */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Consultório em Goiânia
                      </h3>
                      <p className="text-white/90 text-sm mb-3">
                        Rua João de Abreu, 116<br />
                        Ed. Euro Working Concept - Sala 1002-B<br />
                        Setor Oeste - Goiânia/GO
                      </p>
                      <Button 
                        variant="secondary"
                        size="sm"
                        className="bg-white/90 hover:bg-white text-cor-principal hover:text-cor-botao-hover rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium"
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
