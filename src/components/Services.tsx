import { FileText, TrendingUp, Users, Shield, Calculator, Building2 } from "lucide-react";
import servicesWorkspace from "@/assets/services-workspace.jpg";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Contabilidade geral",
      description: "Escrituração contábil completa, atendendo às normas e legislações vigentes com precisão e transparência."
    },
    {
      icon: Calculator,
      title: "Planejamento tributário",
      description: "Otimização da carga tributária de forma legal e estratégica, garantindo economia e segurança fiscal."
    },
    {
      icon: Shield,
      title: "Perícia contábil",
      description: "Análises técnicas especializadas para processos judiciais e extrajudiciais com rigor e imparcialidade."
    },
    {
      icon: Users,
      title: "Reestruturação societária",
      description: "Reorganização da estrutura empresarial para maior eficiência operacional e fiscal."
    },
    {
      icon: Building2,
      title: "Holdings e planejamento sucessório",
      description: "Estruturação de holdings familiares e planejamento da sucessão patrimonial com segurança jurídica."
    },
    {
      icon: TrendingUp,
      title: "Consultoria empresarial",
      description: "Orientação estratégica para tomada de decisões e crescimento sustentável do seu negócio."
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Nossos serviços
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 text-justify">
              Soluções completas em contabilidade para empresas de todos os portes e segmentos
            </p>
          </div>

          {/* Imagem decorativa */}
          <div className="mb-8 sm:mb-10 md:mb-12 animate-fade-in">
            <img 
              src={servicesWorkspace} 
              alt="Workspace profissional de contabilidade com documentos e análise financeira" 
              className="rounded-xl shadow-elegant w-full h-auto max-w-4xl mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-card rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 p-6 sm:p-8 bg-primary/5 rounded-xl border-2 border-primary/20 text-center">
            <p className="text-base sm:text-lg text-foreground font-medium px-4 text-justify">
              Atendemos empresas de todos os portes e segmentos em todo o mercado brasileiro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
