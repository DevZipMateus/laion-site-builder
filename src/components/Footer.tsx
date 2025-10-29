import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="tel:+5562996004949"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} className="mr-2" />
                <span>(62) 99600-4949</span>
              </a>
              <a 
                href="mailto:contador@laion.cnt.br"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} className="mr-2" />
                <span>contador@laion.cnt.br</span>
              </a>
              <div className="flex items-start text-muted-foreground">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Goiânia - Goiás</span>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Horário de atendimento</h3>
            <div className="flex items-start text-muted-foreground">
              <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
              <div>
                <p>Segunda à Sexta</p>
                <p>9h às 18h</p>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Redes sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/laion.cnt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/laion.cnt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Laion Helcidio - Contabilidade. Todos os direitos reservados.</p>
          <p className="mt-2">CRC/GO 004.843.101-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;