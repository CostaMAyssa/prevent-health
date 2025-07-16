import { Play } from "lucide-react";

const ClinicVideoSection = () => (
  <section id="clinic-video" className="py-20 bg-gradient-to-br from-cor-fundo to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-cor-texto mb-6">
          Vamos conhecer nossa <span className="text-cor-principal">clínica</span>
        </h2>
        <p className="text-lg text-cor-texto mb-8 max-w-2xl mx-auto">
          Descubra nosso espaço acolhedor e nossa abordagem integrativa para sua saúde e bem-estar
        </p>
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-cor-principal/10 to-cor-destaque/10 rounded-2xl overflow-hidden">
              {/* Substitua VIDEO_ID pelo ID do seu vídeo do YouTube */}
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1&showinfo=0"
                title="Vídeo da Clínica Prevent Health"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-cor-destaque/20 rounded-full animate-float"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cor-principal/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  </section>
);

export default ClinicVideoSection; 