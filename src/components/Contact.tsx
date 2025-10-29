import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return <section id="contato" className="py-20 px-4 bg-card">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para atender você e transformar a gestão do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Telefone</h3>
                  <a href="https://wa.me/5562996004949" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    (62) 99600-4949
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">E-mail</h3>
                  <a href="mailto:contador@laion.cnt.br" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    contador@laion.cnt.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Localização</h3>
                  <p className="text-muted-foreground">Goiânia - Goiás</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Horário de atendimento</h3>
                  <p className="text-muted-foreground">Segunda à Sexta: 9h às 18h</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col justify-center">
              <div className="p-8 bg-gradient-primary rounded-xl shadow-elegant text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Pronto para transformar sua contabilidade?
                </h3>
                <p className="text-primary-foreground/90 mb-8 leading-relaxed">
                  Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer 
                  com segurança e eficiência.
                </p>
                <div className="space-y-4">
                  <a href="https://wa.me/5562996004949" target="_blank" rel="noopener noreferrer" className="block">
                    <Button size="lg" className="w-full bg-card text-foreground hover:bg-card/90 transition-all duration-300 shadow-soft">
                      Fale pelo WhatsApp
                    </Button>
                  </a>
                  <a href="mailto:contador@laion.cnt.br" className="block">
                    <Button size="lg" variant="outline" className="w-full border-2 border-card hover:bg-card/10 transition-all duration-300 text-inherit">
                      Enviar e-mail
                    </Button>
                  </a>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="mt-8 text-center">
                <h3 className="text-lg font-bold text-foreground mb-4">Siga-nos nas redes sociais</h3>
                <div className="flex justify-center gap-4">
                  <a href="https://www.facebook.com/laion.cnt" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Facebook">
                    <Facebook size={24} />
                  </a>
                  <a href="https://www.instagram.com/laion.cnt" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;