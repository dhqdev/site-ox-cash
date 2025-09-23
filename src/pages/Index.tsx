import Header from "@/components/Header";
import Logo from "@/components/Logo";
import CompanyInfo from "@/components/CompanyInfo";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import InstructorProfile from "@/components/InstructorProfile";
import CustomerReviews from "@/components/CustomerReviews";
import VideoSection from "@/components/VideoSection";
import LocationMap from "@/components/LocationMap";
import OurHistory from "@/components/OurHistory";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleCotasClick = () => {
    navigate('/cotas-contempladas');
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Logo />
          
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Invista em <span className="text-gradient-gold">crédito imobiliário</span> e tenha 
              <span className="text-gradient-gold"> lucro garantido</span> com segurança
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Com mais de <strong className="text-gradient-gold">27 anos de experiência</strong> e 
              <strong className="text-white"> +500 clientes satisfeitos</strong>, a OX CASH oferece 
              as melhores oportunidades de investimento através do nosso 
              <strong className="text-gradient-gold"> BCI - Banco de Crédito Digital</strong>
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <CompanyInfo />
              <div className="text-center space-y-4">
                <WhatsAppCTA 
                  text="CONHECER OPORTUNIDADES"
                  className="text-lg px-12 w-full"
                />
                <Button 
                  onClick={handleCotasClick}
                  variant="outline"
                  size="lg"
                  className="text-lg px-12 w-full text-white border-white hover:bg-white hover:text-primary"
                >
                  VER COTAS CONTEMPLADAS
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gradient-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-gradient-gold">
                  Por que escolher a OX CASH?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                    <span className="text-sm">🏆 <strong>27 anos</strong> de tradição no mercado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                    <span className="text-sm">👨‍👩‍👧‍👦 <strong>Empresa familiar</strong> com valores sólidos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                    <span className="text-sm">📈 <strong>Recorde de vendas</strong> e resultados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                    <span className="text-sm">🏦 <strong>Fornecedor de crédito</strong> especializado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                    <span className="text-sm">🔒 <strong>Segurança e transparência</strong> garantidas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                    <span className="text-sm">💰 <strong>Rentabilidade</strong> através de consórcios</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4">
        <OurHistory />
        
        <WhatYouWillLearn />
        
        <VideoSection />
        
        {/* CTA Section */}
        <section className="text-center py-16">
          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Quer saber mais sobre nossos <span className="text-gradient-gold">investimentos?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para apresentar as melhores oportunidades 
              de <strong className="text-white">crédito imobiliário e consórcios</strong> do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppCTA 
                text="FALAR COM ESPECIALISTA"
                className="text-xl px-16"
              />
              <Button 
                onClick={handleCotasClick}
                variant="outline"
                size="lg"
                className="text-xl px-16 text-white border-white hover:bg-white hover:text-primary"
              >
                VER COTAS DISPONÍVEIS
              </Button>
            </div>
          </div>
        </section>

        <InstructorProfile />
        
        <CustomerReviews />
        
        <LocationMap />
        
        {/* Final CTA Section */}
        <section className="text-center py-16">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Transforme seu futuro financeiro com a <span className="text-gradient-gold">OX CASH</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Com <strong className="text-gradient-gold">27 anos de experiência</strong>, somos especialistas 
              em criar oportunidades de investimento seguras e rentáveis. 
              <strong className="text-white"> Sua confiança é nossa prioridade.</strong>
            </p>
            <WhatsAppCTA 
              text="COMEÇAR AGORA"
              className="text-xl px-16"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;