import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Laion Helcidio - Contabilidade" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300"
            >
              Fale conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection("contato")}
                className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 w-full"
              >
                Fale conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
