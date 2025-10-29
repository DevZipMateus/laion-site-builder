import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EgestorERP from "@/components/EgestorERP";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EgestorERP />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
  </div>
  );
};

export default Index;
