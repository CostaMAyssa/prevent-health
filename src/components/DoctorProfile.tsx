
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
      title: "Formação Acadêmica",
      description: "Fisioterapia pela Faculdade de Educação Física de Lins-SP (1994)"
    },
    {
      icon: Award,
      title: "Especializações Internacionais",
      description: "Microfisioterapia, RPG, Podoposturologia, Acupuntura, Terapia Ortobiomolecular"
    },
    {
      icon: Heart,
      title: "Experiência Clínica",
      description: "25 anos dedicados à saúde integral e cuidado personalizado"
    },
    {
      icon: Stethoscope,
      title: "Abordagem Holística",
      description: "Equilibra maternidade e profissão com amor, fé e compromisso"
    }
  ];

  return (
    <section id="dra-daniela" className="py-20 bg-cor-fundo relative overflow-hidden">
      {/* Overlay de textura de areia */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/src/lib/textures/sand.png')",
          opacity: 0.18,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <img 
                src="/fotos/IMG_dr.PNG"
                alt="Dra. Daniela Fiorim"
                className="w-full object-cover rounded-2xl"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cor-destaque/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cor-principal/20 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-cor-texto">
                Dra. Daniela
                <span className="text-cor-principal"> – Fisioterapeuta</span>
              </h2>
              <p className="text-sm text-cor-texto">CREFITO 17563F</p>
              <p className="text-lg text-cor-texto leading-relaxed">
                Formada em Fisioterapia pela Faculdade de Educação Física de Lins-SP (1994), 
                com especializações internacionais em Microfisioterapia, RPG, Podoposturologia, 
                Acupuntura, Terapia Ortobiomolecular, Psych-K e outras.
              </p>
              <p className="text-lg text-cor-texto leading-relaxed">
                Sua experiência clínica é marcada pela dedicação à saúde integral, superação 
                pessoal e busca constante por terapias que promovam equilíbrio físico e emocional.
              </p>
              <p className="text-lg text-cor-texto leading-relaxed">
                Mãe de dois filhos, Daniela equilibra a maternidade e a profissão com amor, 
                fé e compromisso, atendendo seus pacientes em seu consultório em Goiânia desde 2012.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {qualifications.map((qualification, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-cor-destaque/20 hover:border-cor-principal/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-cor-principal/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cor-principal/20 transition-colors">
                        <qualification.icon className="h-5 w-5 text-cor-principal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-cor-texto mb-1">
                          {qualification.title}
                        </h3>
                        <p className="text-sm text-cor-texto/70">
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
                className="bg-[#25D366] hover:bg-[#1FB157] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-elegant hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/5562998221110', '_blank')}
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
