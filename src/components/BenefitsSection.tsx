
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
  Sparkles
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
      texto: "Tenho 53 anos e descobri que tinha miosite (fibromialgia) algum tempo atrás. Fiz tratamento alopático, mas o resultado foi decepcionante. Ao ler uma reportagem na internet sobre microfisioterapia me pareceu uma boa opção de tratamento. A dra. Daniela aplicou a terapia e já na primeira sessão as dores e a dificuldade de mobilidade foram embora. Muitas atividades que então não poderia fazer, hoje faço sem nenhum problema, exercícios físicos na academia e atividades domésticas por exemplo. Grata por todo cuidado e carinho que sempre tiveram comigo!"
    },
    {
      nome: "Patrícia Datilio",
      texto: "Todas as vezes que vou à clínica da Dra Daniela Fiorim saio feliz e motivada. É notável o carinho, preparo e atenção dispensados para que todos se sintam cuidados física e emocionalmente. O que torna os resultados dos tratamentos mais rápidos e eficazes."
    },
    {
      nome: "Deborah de Brito",
      texto: "Cheguei na clínica da Dra Daniela com estado físico muito debilitado proveniente de uma fase sedentária, com tremor nos braços e mãos, dor nos joelhos e coluna lombar, com a pisada errada e musculatura enfraquecida. Estou muito feliz com as mudanças proporcionadas pelos tratamentos de ozonioterapia e ortobiomolecular, além dos exercícios fisioterápicos. Só tenha a agradecer à Dra Daniela pelo profissionalismo e dedicação. Gratidão!"
    },
    {
      nome: "Terezinha Dyas",
      texto: "Sabe quando Deus envia pessoas ou anjos pra dar só uma espiadinha em nossas vidas? Então num momento em que eu estava no auge da angústia Ele me disse baixinho: – Vai a uma consulta com a Dra Daniela Fiorim. Fui e não mais a deixei. Obrigada amiga, benção de Deus!"
    },
    {
      nome: "Carmem Damaceno",
      texto: "A microfisioterapia é um tratamento que melhora seu corpo e mente, super recomendo, é uma excelente profissional."
    },
    {
      nome: "Flávia Palazzo de Rezende",
      texto: "Encantada com o tratamento que meu filho fez para se livrar das fraldas, bastou uma sessão de Microfisioterapia e tudo resolvido. Dra Daniela é um amor de pessoa."
    },
    {
      nome: "Juliana Bortoletto Blanco Correa",
      texto: "Conheço a Daniela há 20 anos, tenho 46 anos, sou fisioterapeuta e atuo na área de palmilhas posturais. Fizemos um tratamento de saúde integral alinhando a microfisioterapia, acupuntura e medicina quântica devido à uma inflamação muscular no quadril que me incomodava com muitas dores há mais de um ano. Foram 5 sessões, até a terceira sessão ainda sentia um pouco de dor, mas ao final do tratamento fiquei totalmente livre da inflamação e, principalmente, das dores e restrições de movimentos, podendo retomar a prática de exercícios físicos. Mas o mais interessante desse tratamento é que pude superar alguns entraves emocionais. A saúde integral realmente trabalha o ser como um todo, alinhando as emoções (mente) com o físico (corpo)."
    },
    {
      nome: "Juliano Castro",
      texto: "Meu filho de 8 anos foi diagnosticado com bronquite antes dos 2 anos de idade. Nesse período fez uso de corticóides diariamente, mas alterações no clima, excesso de atividade física e situações de ansiedade ainda assim provocavam as crises. Normalmente eram moderadas, mas aconteceram algumas bem fortes. Este ano, após uma broncopneumonia resolvi procurar um tratamento alternativo. Iniciamos a microfisioterapia com a Dra. Daniela. Achei muito boa a forma como lidou com ele e nos explicou tudo como funcionava. Confesso que estava bem cético com o tratamento. Mas após essa sessão ele não teve mais nenhuma crise. Ele já fez um retorno com a microfisioterapia e posso dizer que seu organismo (sono, apetite, evacuação, imunidade) está muito melhor."
    },
    {
      nome: "Pamela Duarte",
      texto: "Iniciei meu tratamento de RPG com a Dra. Daniela Fiorim para melhorar a postura e trazer mais conforto no dia-a-dia, até porque tive escoliose na adolescência então sempre precisei de exercícios posturais. Agora, aos 28 anos, durante o tratamento descobrimos duas hérnias de disco na coluna lombar. Então, após tratar a inflamação, acrescentamos a microfisioterapia e a terapia por informação biofísica (florais quânticos). Já faz mais de um ano e nunca mais senti dor na coluna. Minha postura está 100% melhor e consegui retornar à prática de exercícios de impacto."
    },
    {
      nome: "Elizângela Ferreira",
      texto: "Quero relatar o quanto fui abençoada por ter conhecido a Dra Daniela através da indicação de uma amiga. Tive câncer de mama há três anos atrás e passei por três cirurgias, com problemas de cicatrização e queloide. Em consequência disso, tive muita queda de cabelo, unhas fracas, anemia, fraqueza e desânimo. Um mês antes da minha última cirurgia, começamos o tratamento de ozonioterapia e desintoxicação. Os resultados superaram minhas expectativas: cessou a queda de cabelo, fortaleceu as unhas, a cicatrização está excelente e sem queloides, não estou mais com anemia e nem sentindo dores na coluna. A Dra Daniela e sua equipe são anjos de Deus enviados para cuidar de verdade da nossa saúde. Essa foi a melhor indicação que recebi na vida e tenho o prazer de repassar para outras pessoas. Grata por todo cuidado e carinho que sempre tiveram comigo!"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-white to-cor-fundo">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-10 text-center">
          Depoimentos
        </h2>
        <div className="max-w-3xl mx-auto">
          <Carousel>
            <CarouselContent>
              {depoimentos.map((dep, idx) => (
                <CarouselItem key={idx}>
                  <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col min-h-[260px] border-4 border-cor-principal">
                    <p className="text-cor-texto/90 text-base mb-4">{dep.texto}</p>
                    <span className="font-semibold text-cor-principal mt-auto">{dep.nome}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
