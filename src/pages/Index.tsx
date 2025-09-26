import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import CompanyInfo from "@/components/CompanyInfo";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import InstructorProfile from "@/components/InstructorProfile";
import CustomerReviews from "@/components/CustomerReviews";
import VideoSection from "@/components/VideoSection";
import LeadCapture from "@/components/LeadCapture";
import LocationMap from "@/components/LocationMap";
import OurHistory from "@/components/OurHistory";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MetaBalls from "@/components/MetaBalls";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const stats = [
  { title: "27 ANOS", subtitle: "de experiência no mercado", color: "from-amber-500/20 to-orange-500/20 border-amber-400/30" },
  { title: "500+", subtitle: "clientes satisfeitos", color: "from-emerald-500/20 to-green-500/20 border-emerald-400/30" },
  { title: "R$ 150M", subtitle: "em vendas realizadas", color: "from-blue-500/20 to-purple-500/20 border-blue-400/30" },
];

const Index = () => {
  const navigate = useNavigate();

  const handleCotasClick = () => {
    navigate('/cotas-contempladas');
  };

  const scrollToCadastro = () => {
    const elemento = document.getElementById('cadastro');
    if (elemento) {
      elemento.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // controle da rotação do cubo (em graus)
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 120); // gira 120° a cada vez (3 faces)
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // valores ajustáveis:
  const CARD_WIDTH_PX = 256; // corresponde a w-64 (16rem * 16px)
  const translateZ = Math.round(CARD_WIDTH_PX / 2); // meio do card -> evita overlap visual

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
        {/* MetaBalls Background Animation */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <MetaBalls
            color="#f59e0b"
            cursorBallColor="#fb923c"
            cursorBallSize={0.2}
            ballCount={50}
            animationSize={150}
            enableMouseInteraction={true}
            enableTransparency={true}
            hoverSmoothness={0.01}
            clumpFactor={5.0}
            speed={0.03}
          />
        </div>
      
        {/* Content */}
        <div className="relative z-10">
          <Header />
          
          {/* Hero Section */}
          <section className="pt-24 sm:pt-28 md:pt-32 pb-2 sm:pb-4 md:pb-6 px-4">
            <div className="container mx-auto max-w-6xl">
              <Logo />
              
              <div className="text-center mb-8 sm:mb-12">
                {/* Proposta de valor principal */}
                <div className="mb-8 sm:mb-12">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 sm:mb-8 px-2 sm:px-0">
                    Transforme <span className="text-gradient-gold">R$ 30 mil</span> em 
                    <span className="text-gradient-gold"> R$ 85 mil</span> em torno 37 meses
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                    <span className="text-yellow-400 font-semibold">Investimento seguro e rentável</span> com acompanhamento especializado
                  </p>
                </div>
                
                {/* Estatísticas em destaque com cubo 3D CORRIGIDO */}
                <div
                  // perspectiva NO PAI: fundamental para que o 3D seja percebido
                  className="bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-md border border-gold/30 rounded-3xl p-8 mb-10 sm:mb-12 max-w-md mx-auto shadow-2xl"
                  style={{ perspective: "1200px" }} // também pode ajustar para 800px / 1600px conforme gosto
                >
                  <div
                    className="relative w-64 h-40 mx-auto"
                    // transform-style PRESERVE-3D e transição aqui (inline para garantir)
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${rotation}deg)`,
                      transition: "transform 1000ms ease-in-out",
                      willChange: "transform",
                    }}
                  >
                    {stats.map((stat, i) => (
                      <div
                        key={i}
                        className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl p-6 border text-center bg-gradient-to-br ${stat.color}`}
                        style={{
                          // posiciona cada face ao redor do eixo Y e afasta pela metade da largura
                          transform: `rotateY(${i * 120}deg) translateZ(${translateZ}px)`,
                          backfaceVisibility: "hidden", // esconde o "verso" espelhado
                        }}
                      >
                        <div className="text-3xl font-black text-gradient-gold mb-2">{stat.title}</div>
                        <div className="text-base text-white/80 font-medium">{stat.subtitle}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vídeo do YouTube */}
                <div className="mt-4 sm:mt-6">
                  <VideoSection />
                </div>
              </div>
              
              <div className="flex justify-center mt-4 sm:mt-6">
                <div className="max-w-2xl">
                  <CompanyInfo />
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto max-w-6xl px-4 -mt-12 sm:-mt-16">
            <OurHistory />
            <WhatYouWillLearn />
            <LeadCapture />
            <InstructorProfile />
            <CustomerReviews />
            <LocationMap />
            
            {/* Final CTA Section */}
            <section className="text-center py-12 sm:py-16 md:py-20">
              <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-md border-2 border-gradient-gold/30 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-2xl animate-pulse"></div>
                
                <div className="relative">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 leading-tight">
                    Transforme seu futuro financeiro com a <span className="text-gradient-gold">OX CA$H</span>
                  </h2>
                  
                  <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                    Com <span className="text-gradient-gold font-bold">27 anos de experiência</span>, somos especialistas 
                    em criar oportunidades de investimento seguras e rentáveis. 
                    <span className="text-yellow-400 font-semibold"> Sua confiança é nossa prioridade.</span>
                  </p>
                  
                  <WhatsAppCTA 
                    text="COMEÇAR AGORA"
                    className="text-lg sm:text-xl md:text-2xl px-10 sm:px-16 md:px-20 py-4 sm:py-5 rounded-2xl font-black shadow-2xl hover:shadow-orange-500/25 border-2 border-orange-400/50 relative overflow-hidden group"
                  />
                </div>
              </div>
            </section>
          </div>
          
          {/* WhatsApp flutuante */}
          <WhatsAppFloat />
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
