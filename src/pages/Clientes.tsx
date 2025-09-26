import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CircularGallery from "@/components/CircularGallery";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Import dos logos
import logoCato from "@/assets/logo-cato.png";
import logoGazellato from "@/assets/logo-gazellato.png";
import logoEstacaoVegana from "@/assets/logo-estacao-vegana.png";
import logoImperio from "@/assets/logo-imperio.png";
import logoJundaquece from "@/assets/logo-jundaquece.png";
import logoCrescer from "@/assets/logo-crescer.png";
import logoBoa from "@/assets/logo-boa.png";
import logoSaoVicente from "@/assets/logo-sao-vicente.png";
import logoTulipa from "@/assets/logo-tulipa.png";

// Import dos logos das representações
import logoRodobens from "@/assets/logo-rodobens.png";
import logoYamaha from "@/assets/logo-yamaha.png";
import logoServopa from "@/assets/logo-servopa.png";
import logoEmbracon from "@/assets/logo-embracon.png";

const Clientes = () => {
  const navigate = useNavigate();
  
  // Hook para detectar tamanho da tela
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Representações da OX CA$H
  const representacoes = [
    {
      nome: "Rodobens Consórcio",
      categoria: "Consórcios",
      logo: logoRodobens,
    },
    {
      nome: "Yamaha",
      categoria: "Veículos",
      logo: logoYamaha,
    },
    {
      nome: "Consórcio Servopa",
      categoria: "Consórcios",
      logo: logoServopa,
    },
    {
      nome: "Consórcio Embracon",
      categoria: "Consórcios",
      logo: logoEmbracon,
    }
  ];

  // Logos dos clientes baseados nas imagens fornecidas
  const clientes = [
    {
      categoria: "Varejo",
      logo: logoBoa,
    },
    {
      categoria: "Varejo",
      logo: logoSaoVicente,
    },
    {
      categoria: "Varejo",
      logo: logoCato,
    },
    {
      categoria: "Alimentação",
      logo: logoImperio,
    },
    {
      categoria: "Alimentação",
      logo: logoEstacaoVegana,
    },
    {
      categoria: "Educação",
      logo: logoCrescer,
    },
    {
      categoria: "Serviços",
      logo: logoJundaquece,
    },
    {
      categoria: "Varejo",
      logo: logoGazellato,
    },
    {
      categoria: "Construção",
      logo: logoTulipa,
    }
  ];

  // Dados preparados para o CircularGallery com imagens maiores
  const clientesGallery = [
    { image: logoBoa, text: "" },
    { image: logoSaoVicente, text: "" },
    { image: logoCato, text: "" },
    { image: logoImperio, text: "" },
    { image: logoEstacaoVegana, text: "" },
    { image: logoCrescer, text: "" },
    { image: logoJundaquece, text: "" },
    { image: logoGazellato, text: "" },
    { image: logoTulipa, text: "" }
  ];

  // Dados das representações para o CircularGallery
  const representacoesGallery = [
    { image: logoRodobens, text: "" },
    { image: logoYamaha, text: "" },
    { image: logoServopa, text: "" },
    { image: logoEmbracon, text: "" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Eles <span className="text-gradient-gold">confiam</span> na OX CA$H
            </h1>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-card border border-border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">150M+</div>
                <div className="text-sm text-muted-foreground">Em vendas</div>
              </div>
              <div className="bg-gradient-card border border-border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Clientes ativos</div>
              </div>
              <div className="bg-gradient-card border border-border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">27</div>
                <div className="text-sm text-muted-foreground">Anos no mercado</div>
              </div>
              <div className="bg-gradient-card border border-border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Seção Nossas Representações com CircularGallery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Nossas <span className="text-gradient-gold">Representações</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Somos representantes oficiais das principais empresas de consórcios e veículos do país, 
                oferecendo incríveis oportunidades para nossos clientes.
              </p>
            </div>

            {/* CircularGallery com as representações */}
            <div 
              style={{ 
                height: isMobile ? '500px' : '500px', 
                position: 'relative' 
              }} 
              className="mb-8"
            >
              <CircularGallery 
                items={representacoesGallery}
                bend={isMobile ? 1.2 : 2.5} 
                textColor="#fbbf24" 
                borderRadius={0.1}
                scrollEase={isMobile ? 0.08 : 0.03}
                font={isMobile ? "bold 14px Inter, sans-serif" : "bold 20px Inter, sans-serif"}
                scrollSpeed={isMobile ? 2.5 : 1.2}
              />
            </div>

            <div className="text-center">
            </div>
          </div>

          {/* Seção Nossos Clientes com CircularGallery */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Alguns de nossos <span className="text-gradient-gold">Clientes</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Conheça as empresas que escolheram a OX CA$H como parceira estratégica 
                para suas necessidades financeiras e de investimento.
              </p>
            </div>

            {/* CircularGallery com os logos dos clientes */}
            <div 
              style={{ 
                height: isMobile ? '550px' : '600px', 
                position: 'relative' 
              }} 
              className="mb-8 sm:mb-8 md:mb-8"
            >
              <CircularGallery 
                items={clientesGallery}
                bend={isMobile ? 1.5 : 3} 
                textColor="#fbbf24" 
                borderRadius={0.1}
                scrollEase={isMobile ? 0.08 : 0.02}
                font={isMobile ? "bold 16px Inter, sans-serif" : "bold 24px Inter, sans-serif"}
                scrollSpeed={isMobile ? 3.0 : 1.5}
              />
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Faça parte do time de <span className="text-gradient-gold">parceiros</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Descubra como podemos ajudar sua empresa 
                a crescer com <strong className="text-white">soluções financeiras inteligentes</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    const phoneNumber = "5519983673940";
                    const message = "Olá! Gostaria de saber mais sobre parcerias com a OX CA$H.";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-gradient-gold hover:bg-gold/90 text-black font-bold text-lg px-8"
                >
                  FALAR COM ESPECIALISTA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp flutuante */}
      <WhatsAppFloat />
    </div>
    </PageTransition>
  );
};

export default Clientes;