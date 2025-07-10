
import { Card, CardContent } from "@/components/ui/card";

export const PillarsSection = () => {
  const pillars = [
    {
      number: "01",
      title: "Avaliação inicial detalhada",
      description: "Análise completa do seu histórico médico e necessidades específicas"
    },
    {
      number: "02", 
      title: "Solicitação de exames",
      description: "Quando necessário, solicitação de exames para melhor diagnóstico"
    },
    {
      number: "03",
      title: "Plano terapêutico personalizado", 
      description: "Desenvolvimento de plano com as técnicas e terapias mais indicadas para você"
    },
    {
      number: "04",
      title: "Acompanhamento e reavaliação",
      description: "Monitoramento periódico para ajustes e evolução do tratamento"
    },
    {
      number: "05",
      title: "Cuidado contínuo",
      description: "Suporte permanente em sua jornada de bem-estar e saúde integral"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-6">
            Nossos{" "}
            <span className="text-cor-principal">Pilares de Tratamento</span>
          </h2>
          <p className="text-lg text-cor-texto max-w-3xl mx-auto">
            Fundamentamos nosso trabalho em pilares sólidos que garantem 
            um atendimento de excelência e resultados duradouros.
          </p>
        </div>

        {/* Background Image with Content */}
        <div 
          className="relative py-16 rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay ofuscado */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex items-start gap-6">
                  {/* Número */}
                  <div className="w-12 h-12 bg-cor-principal rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {pillar.number}
                  </div>
                  
                  {/* Conteúdo alternado */}
                  <div className="flex-1">
                    {index % 2 === 0 ? (
                      // Texto verde (índices pares: 0, 2, 4...)
                      <div>
                        <h3 className="text-2xl font-bold text-cor-principal mb-2">
                          {pillar.title}
                        </h3>
                        <p className="text-cor-principal/80 text-lg leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    ) : (
                      // Texto com fundo (índices ímpares: 1, 3...)
                      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-cor-destaque/20">
                        <h3 className="text-2xl font-bold text-cor-texto mb-2">
                          {pillar.title}
                        </h3>
                        <p className="text-cor-texto/70 text-lg leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
