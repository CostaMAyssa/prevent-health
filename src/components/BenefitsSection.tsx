
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Shield, 
  Users, 
  Stethoscope, 
  Brain, 
  Activity,
  TrendingUp,
  ChevronRight,
  Sparkles,
  Quote,
  Star
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

export const BenefitsSection = () => {
  const depoimentos = [
    {
      nome: "Mara Helene",
      texto: "Tenho 53 anos e descobri que tinha miosite (fibromialgia) algum tempo atrás. Fiz tratamento alopático, mas o resultado foi decepcionante. Ao ler uma reportagem na internet sobre microfisioterapia me pareceu uma boa opção de tratamento. A dra. Daniela aplicou a terapia e já na primeira sessão as dores e a dificuldade de mobilidade foram embora. Muitas atividades que então não poderia fazer, hoje faço sem nenhum problema, exercícios físicos na academia e atividades domésticas por exemplo. Grata por todo cuidado e carinho que sempre tiveram comigo!",
      rating: 5
    },
    {
      nome: "Patrícia Datilio",
      texto: "Todas as vezes que vou à clínica da Dra Daniela Fiorim saio feliz e motivada. É notável o carinho, preparo e atenção dispensados para que todos se sintam cuidados física e emocionalmente. O que torna os resultados dos tratamentos mais rápidos e eficazes.",
      rating: 5
    },
    {
      nome: "Deborah de Brito",
      texto: "Cheguei na clínica da Dra Daniela com estado físico muito debilitado proveniente de uma fase sedentária, com tremor nos braços e mãos, dor nos joelhos e coluna lombar, com a pisada errada e musculatura enfraquecida. Estou muito feliz com as mudanças proporcionadas pelos tratamentos de ozonioterapia e ortobiomolecular, além dos exercícios fisioterápicos. Só tenha a agradecer à Dra Daniela pelo profissionalismo e dedicação. Gratidão!",
      rating: 5
    },
    {
      nome: "Terezinha Dyas",
      texto: "Sabe quando Deus envia pessoas ou anjos pra dar só uma espiadinha em nossas vidas? Então num momento em que eu estava no auge da angústia Ele me disse baixinho: – Vai a uma consulta com a Dra Daniela Fiorim. Fui e não mais a deixei. Obrigada amiga, benção de Deus!",
      rating: 5
    },
    {
      nome: "Carmem Damaceno",
      texto: "A microfisioterapia é um tratamento que melhora seu corpo e mente, super recomendo, é uma excelente profissional.",
      rating: 5
    },
    {
      nome: "Flávia Palazzo de Rezende",
      texto: "Encantada com o tratamento que meu filho fez para se livrar das fraldas, bastou uma sessão de Microfisioterapia e tudo resolvido. Dra Daniela é um amor de pessoa.",
      rating: 5
    },
    {
      nome: "Juliana Bortoletto Blanco Correa",
      texto: "Conheço a Daniela há 20 anos, tenho 46 anos, sou fisioterapeuta e atuo na área de palmilhas posturais. Fizemos um tratamento de saúde integral alinhando a microfisioterapia, acupuntura e medicina quântica devido à uma inflamação muscular no quadril que me incomodava com muitas dores há mais de um ano. Foram 5 sessões, até a terceira sessão ainda sentia um pouco de dor, mas ao final do tratamento fiquei totalmente livre da inflamação e, principalmente, das dores e restrições de movimentos, podendo retomar a prática de exercícios físicos. Mas o mais interessante desse tratamento é que pude superar alguns entraves emocionais. A saúde integral realmente trabalha o ser como um todo, alinhando as emoções (mente) com o físico (corpo).",
      rating: 5
    },
    {
      nome: "Juliano Castro",
      texto: "Meu filho de 8 anos foi diagnosticado com bronquite antes dos 2 anos de idade. Nesse período fez uso de corticóides diariamente, mas alterações no clima, excesso de atividade física e situações de ansiedade ainda assim provocavam as crises. Normalmente eram moderadas, mas aconteceram algumas bem fortes. Este ano, após uma broncopneumonia resolvi procurar um tratamento alternativo. Iniciamos a microfisioterapia com a Dra. Daniela. Achei muito boa a forma como lidou com ele e nos explicou tudo como funcionava. Confesso que estava bem cético com o tratamento. Mas após essa sessão ele não teve mais nenhuma crise. Ele já fez um retorno com a microfisioterapia e posso dizer que seu organismo (sono, apetite, evacuação, imunidade) está muito melhor.",
      rating: 5
    },
    {
      nome: "Pamela Duarte",
      texto: "Iniciei meu tratamento de RPG com a Dra. Daniela Fiorim para melhorar a postura e trazer mais conforto no dia-a-dia, até porque tive escoliose na adolescência então sempre precisei de exercícios posturais. Agora, aos 28 anos, durante o tratamento descobrimos duas hérnias de disco na coluna lombar. Então, após tratar a inflamação, acrescentamos a microfisioterapia e a terapia por informação biofísica (florais quânticos). Já faz mais de um ano e nunca mais senti dor na coluna. Minha postura está 100% melhor e consegui retornar à prática de exercícios de impacto.",
      rating: 5
    },
    {
      nome: "Elizângela Ferreira",
      texto: "Quero relatar o quanto fui abençoada por ter conhecido a Dra Daniela através da indicação de uma amiga. Tive câncer de mama há três anos atrás e passei por três cirurgias, com problemas de cicatrização e queloide. Em consequência disso, tive muita queda de cabelo, unhas fracas, anemia, fraqueza e desânimo. Um mês antes da minha última cirurgia, começamos o tratamento de ozonioterapia e desintoxicação. Os resultados superaram minhas expectativas: cessou a queda de cabelo, fortaleceu as unhas, a cicatrização está excelente e sem queloides, não estou mais com anemia e nem sentindo dores na coluna. A Dra Daniela e sua equipe são anjos de Deus enviados para cuidar de verdade da nossa saúde. Essa foi a melhor indicação que recebi na vida e tenho o prazer de repassar para outras pessoas. Grata por todo cuidado e carinho que sempre tiveram comigo!",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-white via-cor-fundo/30 to-cor-fundo/60 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cor-principal/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cor-destaque/5 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cor-principal/3 to-cor-destaque/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cor-principal/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-cor-principal" />
            <span className="text-cor-principal font-medium text-sm">Histórias de Transformação</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-cor-texto mb-4">
            Depoimentos
          </h2>
          
          <p className="text-cor-texto/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Descubra como nossos pacientes encontraram o caminho para o bem-estar físico e emocional
          </p>
        </div>

        {/* Carousel de depoimentos */}
        <div className="max-w-5xl mx-auto relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {depoimentos.map((dep, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Ícone de aspas */}
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-cor-principal to-cor-destaque rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Quote className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Texto do depoimento */}
                      <div className="flex-1 mb-6">
                        <p className="text-cor-texto/90 text-base leading-relaxed italic">
                          "{dep.texto}"
                        </p>
                      </div>

                      {/* Rating com estrelas */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(dep.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Nome do paciente */}
                      <div className="border-t border-cor-principal/20 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-cor-principal/20 to-cor-destaque/20 rounded-full flex items-center justify-center">
                            <span className="text-cor-principal font-semibold text-sm">
                              {dep.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-cor-texto">{dep.nome}</p>
                            <p className="text-cor-texto/60 text-sm">Paciente</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navegação */}
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white hover:bg-cor-principal hover:text-white border-cor-principal/20 hover:border-cor-principal transition-all duration-300" />
              <CarouselNext className="static translate-y-0 bg-white hover:bg-cor-principal hover:text-white border-cor-principal/20 hover:border-cor-principal transition-all duration-300" />
            </div>
          </Carousel>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm border border-cor-principal/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-cor-texto mb-4">
              Sua história de transformação começa aqui
            </h3>
            <p className="text-cor-texto/70 mb-6">
              Junte-se a centenas de pacientes que já descobriram o poder das terapias integrativas
            </p>
            <Button className="bg-cor-principal hover:bg-cor-botao-hover text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Agendar Consulta
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
