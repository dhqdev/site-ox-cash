import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useNavigate } from "react-router-dom";

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
      nome: "Supermercados Boa",
      categoria: "Varejo",
      logo: logoBoa,
    },
    {
      nome: "Supermercados São Vicente",
      categoria: "Varejo",
      logo: logoSaoVicente,
    },
    {
      nome: "Cato Supermercados",
      categoria: "Varejo",
      logo: logoCato,
    },
    {
      nome: "Império",
      categoria: "Alimentação",
      logo: logoImperio,
    },
    {
      nome: "Estação Vegana",
      categoria: "Alimentação",
      logo: logoEstacaoVegana,
    },
    {
      nome: "Instituto Crescer",
      categoria: "Educação",
      logo: logoCrescer,
    },
    {
      nome: "Jundaquece",
      categoria: "Serviços",
      logo: logoJundaquece,
    },
    {
      nome: "Supermercado Gazellato",
      categoria: "Varejo",
      logo: logoGazellato,
    },
    {
      nome: "Tulipa Pré-Fabricados",
      categoria: "Construção",
      logo: logoTulipa,
    }
  ];

  return (
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

          {/* Seção Nossas Representações */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Nossas <span className="text-gradient-gold">Representações</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Somos representantes oficiais das principais empresas de consórcios e veículos do país, 
                oferecendo incríveis oportunidades para nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {representacoes.map((representacao, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-110 hover:bg-white/10 transition-all duration-500 group cursor-pointer shadow-xl"
                >
                  <div className="text-center">
                    {/* Logo da representação */}
                    <div className="w-20 h-20 bg-white/90 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-white transition-all duration-300 shadow-lg overflow-hidden">
                      <img 
                        src={representacao.logo} 
                        alt={`Logo ${representacao.nome}`}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    
                    <h3 className="font-bold text-white text-base mb-2 leading-tight">
                      {representacao.nome}
                    </h3>
                    
                    <div className="inline-block bg-gradient-gold/30 px-3 py-1 rounded-full">
                      <span className="text-xs text-gold font-semibold">{representacao.categoria}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seção Nossos Clientes */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Nossos <span className="text-gradient-gold">Clientes</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Conheça as empresas que escolheram a OX CA$H como parceira estratégica 
                para suas necessidades financeiras e de investimento.
              </p>
            </div>
          </div>

          {/* Grid de Logos dos Clientes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
            {clientes.map((cliente, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  {/* Logo da empresa */}
                  <div className="w-24 h-24 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-white/30 transition-colors overflow-hidden">
                    <img 
                      src={cliente.logo} 
                      alt={`Logo ${cliente.nome}`}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  <h3 className="font-bold text-white text-sm mb-2 leading-tight">
                    {cliente.nome}
                  </h3>
                  
                  <div className="inline-block bg-gradient-gold/20 px-2 py-1 rounded-full mb-2">
                    <span className="text-xs text-gold font-medium">{cliente.categoria}</span>
                  </div>
                </div>
              </div>
            ))}
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
  );
};

export default Clientes;