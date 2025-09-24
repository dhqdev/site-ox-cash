import Header from "@/components/Header";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CotasContempladas = () => {
  const navigate = useNavigate();

  const cotasImoveis = [
    { credito: "R$ 77.000,00", entrada: "R$ 30.500,00", prazo: "131", valor: "R$ 566,00", admin: "BRADESCO" },
    { credito: "R$ 85.000,00", entrada: "R$ 31.000,00", prazo: "127", valor: "R$ 646,00", admin: "BRADESCO" },
    { credito: "R$ 86.200,00", entrada: "R$ 35.000,00", prazo: "160", valor: "R$ 803,00", admin: "BRADESCO" },
    { credito: "R$ 91.200,00", entrada: "R$ 35.500,00", prazo: "141", valor: "R$ 744,00", admin: "H S" },
    { credito: "R$ 91.800,00", entrada: "R$ 34.500,00", prazo: "140", valor: "R$ 743,00", admin: "BRADESCO" },
    { credito: "R$ 98.200,00", entrada: "R$ 38.500,00", prazo: "175", valor: "R$ 874,00", admin: "BRADESCO" }
  ];

  const cotasAutomoveis = [
    { credito: "R$ 24.050,00", entrada: "R$ 10.000,00", prazo: "22", valor: "R$ 1.181,00", admin: "Porto Seguro" },
    { credito: "R$ 34.540,00", entrada: "R$ 13.000,00", prazo: "22", valor: "R$ 1.507,00", admin: "Porto Seguro" },
    { credito: "R$ 37.200,00", entrada: "R$ 14.000,00", prazo: "18", valor: "R$ 2.017,00", admin: "Porto Seguro" },
    { credito: "R$ 40.400,00", entrada: "R$ 13.500,00", prazo: "26", valor: "R$ 1.759,00", admin: "ITAU" },
    { credito: "R$ 41.100,00", entrada: "R$ 15.000,00", prazo: "22", valor: "R$ 1.545,00", admin: "Sabemi" },
    { credito: "R$ 42.000,00", entrada: "R$ 16.500,00", prazo: "22", valor: "R$ 1.945,00", admin: "Suecia Unicoop" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mb-6 sm:mb-8 text-white border-white hover:bg-white hover:text-primary text-sm sm:text-base"
            >
              ← Voltar ao Início
            </Button>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-gradient-gold">Cotas Contempladas</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
              Descubra as melhores oportunidades de investimento em cotas contempladas 
              com <strong className="text-white">segurança e rentabilidade garantida</strong>
            </p>
          </div>

          {/* O que é uma Cota Contemplada */}
          <section className="mb-8 sm:mb-12 md:mb-16">
            <div className="bg-gradient-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-center">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 leading-tight">
                    O que é uma <span className="text-gradient-gold">Cota Contemplada?</span>
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    É um consórcio que <strong className="text-white">já foi contemplado</strong> cujo cliente 
                    não deseja utilizar. Portanto, trata-se de um crédito já liberado para uso.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-gold rounded-full mt-1 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm leading-tight">🏠 <strong>IMÓVEIS</strong> - Para sua casa própria</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-gold rounded-full mt-1 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm leading-tight">🚗 <strong>VEÍCULOS</strong> - Para seu transporte</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-gold rounded-full mt-1 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm leading-tight">⚙️ <strong>SERVIÇOS</strong> - Para seu negócio</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-hero/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gradient-gold">Como funciona?</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                    As cotas contempladas exigem o <strong className="text-white">pagamento de uma entrada</strong>, 
                    referente ao valor já pago pelo cliente até a contemplação ou leilão da venda da cota.
                  </p>
                  <div className="bg-gradient-gold/10 rounded-lg p-3 sm:p-4 border border-gold/20">
                    <p className="text-xs sm:text-sm text-center leading-tight">
                      💡 <strong>Vale a pena?</strong><br/>
                      Claro! Ainda é bem mais barato do que um financiamento bancário. 
                      E você tem o poder de negociar o seu bem ou serviço à vista.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cotas de Imóveis */}
          <section className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center leading-tight">
              🏠 Cotas Contempladas de <span className="text-gradient-gold">Imóveis</span>
            </h2>
            
            {/* Mobile Cards */}
            <div className="block lg:hidden space-y-4">
              {cotasImoveis.map((cota, index) => (
                <div key={index} className="bg-gradient-card border border-border rounded-2xl p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs text-muted-foreground">Crédito</span>
                        <div className="font-bold text-gradient-gold text-lg">{cota.credito}</div>
                      </div>
                      <WhatsAppCTA 
                        text="Consultar" 
                        variant="outline" 
                        size="sm"
                        className="text-xs px-3 py-1"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-xs text-muted-foreground">Entrada</span>
                        <div className="font-semibold text-sm">{cota.entrada}</div>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Prazo</span>
                        <div className="font-semibold text-sm">{cota.prazo} meses</div>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Valor Mensal</span>
                        <div className="font-semibold text-sm">{cota.valor}</div>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Administradora</span>
                        <div className="font-semibold text-sm">{cota.admin}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block bg-gradient-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-gold text-black">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Crédito</th>
                      <th className="px-4 py-3 text-left font-semibold">Entrada</th>
                      <th className="px-4 py-3 text-left font-semibold">Prazo</th>
                      <th className="px-4 py-3 text-left font-semibold">Valor Mensal</th>
                      <th className="px-4 py-3 text-left font-semibold">Administradora</th>
                      <th className="px-4 py-3 text-left font-semibold">Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cotasImoveis.map((cota, index) => (
                      <tr key={index} className="border-b border-border hover:bg-gradient-hero/10">
                        <td className="px-4 py-3 font-semibold text-gradient-gold">{cota.credito}</td>
                        <td className="px-4 py-3">{cota.entrada}</td>
                        <td className="px-4 py-3">{cota.prazo} meses</td>
                        <td className="px-4 py-3">{cota.valor}</td>
                        <td className="px-4 py-3">{cota.admin}</td>
                        <td className="px-4 py-3">
                          <WhatsAppCTA 
                            text="Consultar" 
                            variant="outline" 
                            size="sm"
                            className="text-xs px-3 py-1"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Cotas de Automóveis */}
          <section className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center leading-tight">
              🚗 Cotas Contempladas de <span className="text-gradient-gold">Automóveis</span>
            </h2>
            
            {/* Mobile Cards */}
            <div className="block lg:hidden space-y-4">
              {cotasAutomoveis.map((cota, index) => (
                <div key={index} className="bg-gradient-card border border-border rounded-2xl p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs text-muted-foreground">Crédito</span>
                        <div className="font-bold text-gradient-gold text-lg">{cota.credito}</div>
                      </div>
                      <WhatsAppCTA 
                        text="Consultar" 
                        variant="outline" 
                        size="sm"
                        className="text-xs px-3 py-1"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-xs text-muted-foreground">Entrada</span>
                        <div className="font-semibold text-sm">{cota.entrada}</div>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Prazo</span>
                        <div className="font-semibold text-sm">{cota.prazo} meses</div>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Valor Mensal</span>
                        <div className="font-semibold text-sm">{cota.valor}</div>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Administradora</span>
                        <div className="font-semibold text-sm">{cota.admin}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block bg-gradient-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-gold text-black">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Crédito</th>
                      <th className="px-4 py-3 text-left font-semibold">Entrada</th>
                      <th className="px-4 py-3 text-left font-semibold">Prazo</th>
                      <th className="px-4 py-3 text-left font-semibold">Valor Mensal</th>
                      <th className="px-4 py-3 text-left font-semibold">Administradora</th>
                      <th className="px-4 py-3 text-left font-semibold">Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cotasAutomoveis.map((cota, index) => (
                      <tr key={index} className="border-b border-border hover:bg-gradient-hero/10">
                        <td className="px-4 py-3 font-semibold text-gradient-gold">{cota.credito}</td>
                        <td className="px-4 py-3">{cota.entrada}</td>
                        <td className="px-4 py-3">{cota.prazo} meses</td>
                        <td className="px-4 py-3">{cota.valor}</td>
                        <td className="px-4 py-3">{cota.admin}</td>
                        <td className="px-4 py-3">
                          <WhatsAppCTA 
                            text="Consultar" 
                            variant="outline" 
                            size="sm"
                            className="text-xs px-3 py-1"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="text-center py-8 sm:py-12 md:py-16">
            <div className="bg-gradient-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 leading-tight">
                Encontrou a cota ideal para você?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Nossa equipe especializada está pronta para ajudar você a realizar seu sonho 
                com <strong className="text-white">segurança e as melhores condições do mercado</strong>.
              </p>
              <WhatsAppCTA 
                text="FALAR COM ESPECIALISTA"
                className="text-base sm:text-lg md:text-xl px-6 sm:px-12 md:px-16"
              />
            </div>
          </section>
        </div>
      </div>
      
      {/* WhatsApp flutuante */}
      <WhatsAppFloat />
    </div>
  );
};

export default CotasContempladas;