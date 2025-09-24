import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useNavigate } from "react-router-dom";

const Clientes = () => {
  const navigate = useNavigate();

  // Logos dos clientes baseados nas imagens fornecidas
  const clientes = [
    {
      nome: "Supermercados Boa",
      categoria: "Varejo",
      logo: "/placeholder.svg",
    },
    {
      nome: "Supermercados São Vicente",
      categoria: "Varejo",
      logo: "/placeholder.svg",
    },
    {
      nome: "Cato Supermercados",
      categoria: "Varejo",
      logo: "/placeholder.svg",
    },
    {
      nome: "Império",
      categoria: "Alimentação",
      logo: "/placeholder.svg",
    },
    {
      nome: "Estação Vegana",
      categoria: "Alimentação",
      logo: "/placeholder.svg",
    },
    {
      nome: "Instituto Crescer",
      categoria: "Educação",
      logo: "/placeholder.svg",
    },
    {
      nome: "Jundaquece",
      categoria: "Serviços",
      logo: "/placeholder.svg",
    },
    {
      nome: "Supermercado Gazellato",
      categoria: "Varejo",
      logo: "/placeholder.svg",
    },
    {
      nome: "Tulipa Pré-Fabricados",
      categoria: "Construção",
      logo: "/placeholder.svg",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="pt-16 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mb-8 text-white border-white hover:bg-white hover:text-primary"
            >
              ← Voltar ao Início
            </Button>
            
            <div className="inline-flex items-center gap-2 bg-gradient-gold/20 px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🤝</span>
              <span className="text-gold font-semibold">NOSSOS PARCEIROS</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Clientes que <span className="text-gradient-gold">confiam</span> na OX CASH
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Com mais de <strong className="text-gradient-gold">27 anos de experiência</strong>, 
              conquistamos a confiança de grandes empresas e marcas reconhecidas no mercado. 
              Conheça alguns dos nossos <strong className="text-white">principais parceiros</strong>.
            </p>

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

          {/* Grid de Logos dos Clientes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
            {clientes.map((cliente, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:scale-105 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  {/* Logo placeholder - substitua pela imagem real */}
                  <div className="w-16 h-16 bg-gradient-gold/20 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-gradient-gold/30 transition-colors">
                    <span className="text-2xl font-bold text-white">{cliente.nome.charAt(0)}</span>
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

          {/* Seção de Destaque - Principais Parcerias */}
          <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Principais <span className="text-gradient-gold">Parcerias</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Destacamos algumas de nossas parcerias mais estratégicas que nos permitem 
                oferecer as melhores oportunidades de investimento.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-gold/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-gradient-gold/30 transition-colors">
                  <span className="text-3xl">🏦</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gradient-gold">Instituições Financeiras</h3>
                <p className="text-muted-foreground text-sm">
                  Parcerias sólidas com bancos e financeiras para oferecer as melhores condições de crédito.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-gold/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-gradient-gold/30 transition-colors">
                  <span className="text-3xl">🏪</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gradient-gold">Varejo e Comércio</h3>
                <p className="text-muted-foreground text-sm">
                  Relacionamento próximo com grandes redes varejistas e empresas do setor comercial.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-gold/20 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:bg-gradient-gold/30 transition-colors">
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gradient-gold">Construção e Serviços</h3>
                <p className="text-muted-foreground text-sm">
                  Apoio a empresas de construção e prestação de serviços com soluções financeiras personalizadas.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Quer fazer parte dos nossos <span className="text-gradient-gold">parceiros</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos ajudar sua empresa 
                a crescer com <strong className="text-white">soluções financeiras inteligentes</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    const phoneNumber = "5519983673940";
                    const message = "Olá! Gostaria de saber mais sobre parcerias com a OX CASH.";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-gradient-gold hover:bg-gold/90 text-black font-bold text-lg px-8"
                >
                  📱 FALAR COM ESPECIALISTA
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/')}
                  className="text-white border-white hover:bg-white hover:text-primary text-lg px-8"
                >
                  🏠 VOLTAR AO INÍCIO
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