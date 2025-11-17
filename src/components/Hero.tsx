import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

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
    <section id="inicio" className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/85"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Laion Helcidio - Contabilidade
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light leading-relaxed px-2 text-justify">
              Excelência em soluções contábeis, fiscais e periciais com mais de 20 anos de experiência no mercado
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-fade-in-up px-4">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 shadow-elegant group w-full sm:w-auto"
            >
              Entre em contato
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
            <a
              href="https://wa.me/5562996004949"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full"
              >
                WhatsApp
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
            <div className="p-4 sm:p-6 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-foreground font-medium text-sm sm:text-base">Anos de experiência</div>
            </div>
            <div className="p-4 sm:p-6 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-foreground font-medium text-sm sm:text-base">Compromisso com excelência</div>
            </div>
            <div className="p-4 sm:p-6 bg-card rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in-up">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-foreground font-medium text-sm sm:text-base">Suporte dedicado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
