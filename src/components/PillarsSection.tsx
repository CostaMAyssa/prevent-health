
import { Card, CardContent } from "@/components/ui/card";

export const PillarsSection = () => {
  const pillars = [
    {
      title: "Visão Integral",
      description: "Cuidar do corpo, mente e espírito como um todo, promovendo o equilíbrio em todas as dimensões da saúde e bem-estar."
    },
    {
      title: "Humanização",
      description: "Atendimento empático, acolhedor e respeitoso, onde cada paciente é tratado com dignidade e cuidado individualizado."
    },
    {
      title: "Ciência e Espiritualidade",
      description: "Combinação harmoniosa do conhecimento científico rigoroso com práticas integrativas comprovadas e abordagem espiritual."
    },
    {
      title: "Atualização Contínua",
      description: "Aperfeiçoamento constante através de especializações internacionais e estudos das mais avançadas técnicas terapêuticas."
    },
    {
      title: "Transformação",
      description: "Promover mudanças significativas na saúde e qualidade de vida dos pacientes através de terapias eficazes e cuidado dedicado."
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-cor-fundo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-6">
            Os pilares que orientam{" "}
            <span className="text-cor-principal">meu trabalho</span>
          </h2>
          <p className="text-lg text-cor-texto max-w-3xl mx-auto">
            Conheça os valores fundamentais que norteiam minha prática terapêutica 
            e garantem um cuidado de excelência para meus pacientes.
          </p>
        </div>

        {/* Background Image with Cards */}
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
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <Card 
                  key={index} 
                  className="group bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-cor-destaque/20 hover:border-cor-principal/30"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-cor-texto mb-4 group-hover:text-cor-principal transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-cor-texto/70 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
