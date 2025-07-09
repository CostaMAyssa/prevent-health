
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center gradient-primary">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Cuide da sua saúde com quem{" "}
                <span className="text-primary">entende de prevenção</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Medicina preventiva personalizada com acompanhamento contínuo para 
                sua saúde e bem-estar integral.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                onClick={() => window.open('https://wa.me/5527999999999', '_blank')}
              >
                Agendar pelo WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
              >
                Conheça nossos serviços
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Atendimento Humanizado</p>
                  <p className="text-sm text-muted-foreground">Cuidado integral</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Medicina Preventiva</p>
                  <p className="text-sm text-muted-foreground">Prevenção em primeiro lugar</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Acompanhamento Contínuo</p>
                  <p className="text-sm text-muted-foreground">Sempre perto de você</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" 
                alt="Dra. Daniela Fiorim atendendo paciente"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/60 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
