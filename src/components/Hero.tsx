import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Laion Helcidio - Contabilidade
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Excelência em soluções contábeis, fiscais e periciais com mais de 20 anos de experiência no mercado
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 shadow-elegant group"
            >
              Entre em contato
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
            <a
              href="https://wa.me/5562996004949"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                WhatsApp
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-foreground font-medium">Anos de experiência</div>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-foreground font-medium">Compromisso com excelência</div>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-foreground font-medium">Suporte dedicado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
