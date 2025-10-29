import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Contato */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Contato</h3>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href="tel:+5562996004949"
                className="flex items-center text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>(62) 99600-4949</span>
              </a>
              <a 
                href="mailto:contador@laion.cnt.br"
                className="flex items-center text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span className="break-all">contador@laion.cnt.br</span>
              </a>
              <div className="flex items-start text-sm sm:text-base text-muted-foreground">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Goiânia - Goiás</span>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Horário de atendimento</h3>
            <div className="flex items-start text-sm sm:text-base text-muted-foreground">
              <Clock size={16} className="mr-2 mt-1 flex-shrink-0" />
              <div>
                <p>Segunda à Sexta</p>
                <p>9h às 18h</p>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Redes sociais</h3>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/laion.cnt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/laion.cnt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center text-muted-foreground text-xs sm:text-sm">
          <p className="px-4">© {new Date().getFullYear()} Laion Helcidio - Contabilidade. Todos os direitos reservados.</p>
          <p className="mt-2">CRC/GO 004.843.101-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;