
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Play, Heart, Leaf, Zap, Brain, Shield, Activity, Syringe } from "lucide-react";

export const ServicePresentation = () => {
  const therapies = [
    {
      icon: Heart,
      title: "Microfisioterapia",
      description: "Técnica de terapia manual para auto-cura",
      tooltip: "Microfisioterapia é uma técnica de terapia manual criada na França há mais de 30 anos, que consiste em identificar por meio de gestos manuais em mapas corporais a Cicatriz Patológica, a causa primária de uma doença ou sintoma. No mesmo momento os toques sutis vão estimular o processo de reparação corporal e a auto-cura do organismo. A microfisioterapia é aplicada à todas as idades, desde crianças a partir de 06 meses de idade até idosos, sem contra indicações. Indicações: – Dores Musculares e Articulares Crônicas ou Agudas, – Distúrbios do Sono, – Intolerância Alimentar/Refluxo gastroesofágico, – Alergias e Dermatites, – Asma, Bronquite, Rinites e Sinusites, – Medos, Fobias e Síndrome do Pânico, – Depressão/Ansiedade, – Déficit de Atenção e Hiperatividade, – Traumas Emocionais (perdas, abandonos, separações, etc), – Dores de Cabeça, Cefaléia e Enxaquecas.",
      delay: "0s"
    },
    {
      icon: Syringe,
      title: "Terapia Neural",
      description: "Estímulo do sistema nervoso para autocura",
      tooltip: "A terapia neural consiste na aplicação de anestésico(procaína) em pontos do corpo humano, similarmente à acupuntura. Surgiu na Alemanha, no início do século XX, é usada em vários países da Europa e da América Latina. A terapia neural estimula o sistema nervoso autônomo, com o objetivo de que este desencadeie a autocura. Ela é responsável por conectar e regular todo o funcionamento do organismo através de repolarização das células, permitindo que o corpo se autorregule e recupere seu estado de harmonia natural. Quais doenças podem ser tratadas com a terapia neural: -dores em geral(cervicalgia, lombalgias,hérnia de disco e lesões do esporte); -recuperação pós operatório; -artrite, artrose e transtornos reumáticos; -Fibromialgia; -desequilíbrios do sistema nervoso e mentais (ansiedade, fobias, insônia e depressão). Os resultados já são perceptíveis na primeira aplicação, no entanto o número de sessões a serem realizadas dependerá do organismo e demanda de cada paciente.",
      delay: "0.2s"
    },
    {
      icon: Activity,
      title: "Biorressonância",
      description: "Análise e monitoramento de desequilíbrios",
      tooltip: "Com o desenvolvimento da tecnologia, tornou-se possível a análise e monitoramento eletrônico dos desequilíbrios do nosso corpo. A biorressonância foi criada através da junção do conhecimento da acupuntura e a mensuração precisa de ondas eletromagnéticas, permitindo assim a identificação de alterações biofísicas e bioquímicas do organismo. A avaliação por biorressonância utiliza tanto a frequência eletromagnética do corpo e as frequências únicas e individuais de cada órgão para fazer seu exame. Isso é possível porque se sabe que toda matéria tem sua própria frequência vibracional. Quando se insere outros fatores, como emoções, parasitas, pensamentos, metais pesados, sons, radiações, toxinas o organismo pode entrar em desequilíbrio e, em consequência, ocasionar o aparecimento de doenças. Com a biorressonância é possível a identificação de inflamações, alergias alimentares, parasitas, metais pesados, desequilíbrios de nutrientes e órgãos. O procedimento da biorressonância vem sendo utilizado há mais de 20 anos no mundo todo, totalmente seguro e eficiente. É uma abordagem integrativa que visa conceder alívio aos pacientes da maneira mais rápida e eficaz, podendo ser realizada presencialmente e a distância.",
      delay: "0.4s"
    },
    {
      icon: Leaf,
      title: "Terapia Ortomolecular",
      description: "Medicina funcional e integrativa",
      tooltip: "É uma abordagem da medicina funcional integrativa com um olhar humanizado da integralidade do ser, e não apenas atenção aos sintomas. A terapia ortomolecular promove assim bem-estar físico, mental e emocional; qualidade de vida e longevidade saudável. A terapia ortomolecular tem como objetivo desintoxicar, desinflamar, deglicar, repor macro e micro nutrientes; remover excesso de toxinas e oxidação celular. Consiste em investigar desequilíbrios e aplicar meios metodizados individualmente, objetivando o equilíbrio homeostático da função celular. Através da suplementação de nutrientes essenciais é muito indicada para fortalecer a imunidade; fadiga mitocondrial e adrenal; tratamento de inflamações agudas e crônicas; prevenção de doenças crônicas e degenerativas; estímulo cognitivo, foco e concentração; equilíbrio do estresse mental e distúrbio do sono.",
      delay: "0.6s"
    },
    {
      icon: Brain,
      title: "Psych-K",
      description: "Reprogramação de crenças subconscientes",
      tooltip: "PSYCH-K® é um método simples e direto para identificar e mudar crenças subconscientes auto limitantes, que perpetuam os velhos hábitos de pensamento e comportamento que você gostaria de mudar. Uma poderosa metodologia para atingir as metas e mudanças que não são passíveis apenas com a força de vontade. Estudos em neurociência indicam que 95% de nossa consciência é, na verdade, subconsciente. É a mente subconsciente que guarda nossas atitudes, valores e crenças. É um processo simples que ajuda você a se comunicar com seu subconsciente, onde quase todos os comportamentos humanos – construtivos e destrutivos – se originam, para que você possa mudar as crenças que limitam a sua autoestima, seus relacionamentos, o desempenho no trabalho e até mesmo sua saúde física! EM QUE CASOS O PSYCH-K® PODE AJUDAR? Em casos de desequilibrios como: auto-estima baixa, dificuldades de prosperar, dificuldades para se relacionar socialmente e amorosamente, sentimento de inferioridade, dificuldade de dirigir, dificuldade de se aceitar, sentimento de culpa, pessimismo, compulsões alimentares, tiques nervosos, timidez, dificuldade de falar em público, dificuldade de cobrar por seus serviços, dificuldade de aprendizado, alergias, compulsões, vícios(roer unhas, cigarro, drogas, chocolate), traumas por morte, separação e traumas em geral, fobias, sindrome do pânico, ansiedade, insônia, depressão, dores, doenças entre outros. “¨Nas profundezas do seu subconsciente, à espera de se expandir e de se expressar, há uma sabedoria infinita, há um poder infinito, há um estoque ilimitado de tudo o que é necessário para uma vida perfeita. Comece agora a descobrir essas potencialidades das profundezas da sua mente e elas tomarão forma no mundo exterior”",
      delay: "0.8s"
    },
    {
      icon: Shield,
      title: "Terapias Biofísicas",
      description: "Tecnologias avançadas para equilíbrio natural",
      tooltip: "As terapias biofísicas utilizam tecnologias avançadas que emitem frequências específicas para estimular o equilíbrio natural do corpo, desintoxicar, fortalecer o sistema imunológico e promover saúde física, emocional e mental. Baseadas nos estudos de Royal Rife e Hulda Clark, essas terapias atuam em nível celular por meio de dispositivos modernos como RPD (plasma), Hidrovitalis (desintoxicação iônica), PC Zapper, NeuroSpa (estimulação elétrica craniana), ColorGen Pro (cromoterapia), TMS (pulso magnético) e Fotobiomodulação (laser e LEDs). Indicadas para dores crônicas, doenças autoimunes, estresse, ansiedade, depressão, insônia, entre outros.",
      delay: "1s"
    }
  ];

  return (
    <TooltipProvider>
      <section id="services" className="py-20 bg-gradient-to-br from-cor-fundo to-white">
      <div className="container mx-auto px-4">
          
          {/* Video Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-6">
              Vamos conhecer nossa{" "}
              <span className="text-cor-principal">clínica</span>
              </h2>
            <p className="text-lg text-cor-texto mb-8 max-w-2xl mx-auto">
              Descubra nosso espaço acolhedor e nossa abordagem integrativa para sua saúde e bem-estar
            </p>
            
            {/* YouTube Video Embed */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-cor-principal/10 to-cor-destaque/10 rounded-2xl flex items-center justify-center">
                  <div className="w-20 h-20 bg-cor-principal rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-cor-texto mb-2">
                    Conheça nossa abordagem terapêutica
                  </h3>
                  <p className="text-cor-texto/70">
                    Assista ao vídeo e descubra como nossas terapias integrativas podem transformar sua vida
                  </p>
                </div>
            </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cor-destaque/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cor-principal/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Therapies Section with Background Image */}
          <div 
            className="relative py-20 rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Content */}
            <div className="relative z-10">
              {/* Therapies Title */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-6">
                  Nossas{" "}
                  <span className="text-cor-principal">Terapias Integrativas</span>
                </h2>
                <p className="text-lg text-cor-texto max-w-3xl mx-auto mb-4">
                  Tratamentos especializados para cuidar de você de forma completa e personalizada
                </p>
                <p className="text-sm text-cor-texto/70 max-w-2xl mx-auto">
                  💡 <em>Passe o mouse sobre cada terapia para descobrir como ela pode ajudar você</em>
                </p>
                  </div>

              {/* Floating Therapy Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative px-4">
                {therapies.map((therapy, index) => (
                  <Tooltip key={index} delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Card 
                        className="group bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-float cursor-pointer"
                        style={{
                          animationDelay: therapy.delay,
                          animationDuration: `${3 + index * 0.5}s`
                        }}
                      >
                        <CardContent className="p-6 text-center relative overflow-hidden">
                          {/* Animated background gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-cor-principal/5 to-cor-destaque/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Icon */}
                          <div className="relative w-16 h-16 bg-gradient-to-br from-cor-principal to-cor-botao-hover rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                            <therapy.icon className="h-8 w-8 text-white" />
                </div>
                          
                          {/* Content */}
                          <div className="relative z-10">
                            <h3 className="text-lg font-semibold text-cor-texto mb-3 group-hover:text-cor-principal transition-colors duration-300">
                              {therapy.title}
                  </h3>
                            <p className="text-cor-texto/70 text-sm leading-relaxed mb-2">
                              {therapy.description}
                            </p>
                            <p className="text-xs text-cor-principal/60 italic">
                              Clique para saber mais
                  </p>
                </div>
                          
                          {/* Floating particles effect */}
                          <div className="absolute top-4 right-4 w-2 h-2 bg-cor-principal/30 rounded-full animate-ping"></div>
                          <div className="absolute bottom-4 left-4 w-1 h-1 bg-cor-destaque/40 rounded-full animate-pulse"></div>
              </CardContent>
            </Card>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      className="max-w-sm p-4 bg-white/95 backdrop-blur-sm border-cor-principal/20 shadow-xl max-h-[300px] overflow-y-auto"
                    >
                      <div className="space-y-2">
                        <h4 className="font-semibold text-cor-principal text-sm">
                          {therapy.title}
                        </h4>
                        <p className="text-sm text-cor-texto/80 leading-relaxed">
                          {therapy.tooltip}
                        </p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16">
                <Button 
                  size="lg" 
                  className="bg-[#25D366] hover:bg-[#1FB157] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  onClick={() => window.open('https://wa.me/5562998221110', '_blank')}
                >
                  Agende sua consulta pelo WhatsApp
                </Button>
                <p className="text-cor-texto/70 mt-4">
                  Transforme sua saúde com nosso cuidado integral e personalizado
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
    </TooltipProvider>
  );
};
