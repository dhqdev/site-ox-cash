import Header from "@/components/Header";
import Logo from "@/components/Logo";
import CompanyInfo from "@/components/CompanyInfo";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import InstructorProfile from "@/components/InstructorProfile";
import CustomerReviews from "@/components/CustomerReviews";
import VideoSection from "@/components/VideoSection";
import LeadCapture from "@/components/LeadCapture";
import LocationMap from "@/components/LocationMap";
import OurHistory from "@/components/OurHistory";
import NavigationMenu from "@/components/NavigationMenu";
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
      <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Logo />
          
          <div className="text-center mb-8 sm:mb-12">
            {/* Badge de destaque */}
            <div className="inline-flex items-center gap-2 bg-gradient-gold/20 border border-gold/30 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl animate-pulse">🔥</span>
              <span className="text-sm sm:text-base font-semibold text-gradient-gold">
                OPORTUNIDADE EXCLUSIVA DE INVESTIMENTO
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6 px-2 sm:px-0">
              Transforme <span className="text-gradient-gold">R$ 30 mil</span> em 
              <span className="text-gradient-gold"> R$ 85 mil</span> em 36 meses
            </h1>
            
            <div className="bg-gradient-hero/30 backdrop-blur-sm border border-gold/20 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-4xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4">
                <strong className="text-gradient-gold">Crédito imobiliário com rentabilidade garantida</strong> - 
                O investimento mais seguro e lucrativo do mercado
              </p>
              
              {/* Estatísticas impressionantes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-gradient-gold/10 rounded-xl p-3 border border-gold/20">
                  <div className="text-lg sm:text-xl font-bold text-gradient-gold">27 ANOS</div>
                  <div className="text-xs sm:text-sm text-white/70">de experiência</div>
                </div>
                <div className="bg-gradient-gold/10 rounded-xl p-3 border border-gold/20">
                  <div className="text-lg sm:text-xl font-bold text-gradient-gold">500+</div>
                  <div className="text-xs sm:text-sm text-white/70">clientes satisfeitos</div>
                </div>
                <div className="bg-gradient-gold/10 rounded-xl p-3 border border-gold/20">
                  <div className="text-lg sm:text-xl font-bold text-gradient-gold">R$ 150M</div>
                  <div className="text-xs sm:text-sm text-white/70">em vendas realizadas</div>
                </div>
              </div>
            </div>

            {/* Call to Action principal */}
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-gold text-black px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
                🚀 QUERO INVESTIR AGORA
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-2xl">
              <CompanyInfo />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4">
        <OurHistory />
        
        <WhatYouWillLearn />
        
        <VideoSection />
        
        <LeadCapture />

        <InstructorProfile />
        
        <CustomerReviews />
        
        <LocationMap />
        
        {/* Final CTA Section */}
        <section className="text-center py-8 sm:py-12 md:py-16">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-border rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 leading-tight">
              Transforme seu futuro financeiro com a <span className="text-gradient-gold">OX CASH</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Com <strong className="text-gradient-gold">27 anos de experiência</strong>, somos especialistas 
              em criar oportunidades de investimento seguras e rentáveis. 
              <strong className="text-white"> Sua confiança é nossa prioridade.</strong>
            </p>
            <WhatsAppCTA 
              text="COMEÇAR AGORA"
              className="text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16"
            />
          </div>
        </section>
      </div>
      
      {/* Menu de navegação flutuante */}
      <NavigationMenu />
    </div>
  );
};

export default Index;