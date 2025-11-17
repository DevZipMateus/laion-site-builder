import { Target, Compass, Heart } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 px-4 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Sobre nós
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16 items-center animate-fade-in">
            <div className="order-2 lg:order-1">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
                Há mais de 20 anos no mercado contábil, acumulando experiência da teoria em conjunto com a prática. 
                Iniciei no escritório de contabilidade como office boy, antiga profissão que foi extinta na contabilidade 
                com o advento da tecnologia e digitalização dos processos. De lá pra cá me formei, especializei em 
                Perícia, Planejamento Tributário, Reestruturação Societária, Planejamento Sucessório através das Holdings. 
                Liderando uma equipe extremamente competente, hoje nossa atuação é em vários seguimentos, tipo e porte de 
                empresa, andando lado a lado com empresário, atendendo as legislações vigente e buscando sempre soluções 
                para cada negócio.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={aboutTeam} 
                alt="Equipe de contabilidade profissional analisando documentos financeiros" 
                className="rounded-xl shadow-elegant w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Visão */}
            <div className="p-6 sm:p-8 bg-background rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Visão</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                Ser referência em contabilidade estratégica e pericial, reconhecida pela precisão técnica, 
                credibilidade e contribuição efetiva para o desenvolvimento econômico e social das empresas 
                e da comunidade.
              </p>
            </div>

            {/* Missão */}
            <div className="p-6 sm:p-8 bg-background rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Compass className="text-primary" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Missão</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                Oferecer soluções contábeis, fiscais e periciais com excelência, clareza e responsabilidade, 
                transformando dados financeiros em informações que orientam decisões seguras, fortalecem negócios 
                e promovem justiça e transparência.
              </p>
            </div>

            {/* Valores */}
            <div className="p-6 sm:p-8 bg-background rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Valores</h3>
              <ul className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-2">
                <li>• Ética e integridade</li>
                <li>• Precisão técnica</li>
                <li>• Transparência</li>
                <li>• Responsabilidade social</li>
                <li>• Excelência profissional</li>
                <li>• Comprometimento</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
