import Header from "@/components/Header";
import WhatsAppCTA from "@/components/WhatsAppCTA";
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
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mb-8 text-white border-white hover:bg-white hover:text-primary"
            >
              ← Voltar ao Início
            </Button>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-gold">Cotas Contempladas</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Descubra as melhores oportunidades de investimento em cotas contempladas 
              com <strong className="text-white">segurança e rentabilidade garantida</strong>
            </p>
          </div>

          {/* O que é uma Cota Contemplada */}
          <section className="mb-16">
            <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    O que é uma <span className="text-gradient-gold">Cota Contemplada?</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    É um consórcio que <strong className="text-white">já foi contemplado</strong> cujo cliente 
                    não deseja utilizar. Portanto, trata-se de um crédito já liberado para uso.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                      <span className="text-sm">🏠 <strong>IMÓVEIS</strong> - Para sua casa própria</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                      <span className="text-sm">🚗 <strong>VEÍCULOS</strong> - Para seu transporte</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                      <span className="text-sm">⚙️ <strong>SERVIÇOS</strong> - Para seu negócio</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-hero/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-gradient-gold">Como funciona?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As cotas contempladas exigem o <strong className="text-white">pagamento de uma entrada</strong>, 
                    referente ao valor já pago pelo cliente até a contemplação ou leilão da venda da cota.
                  </p>
                  <div className="bg-gradient-gold/10 rounded-lg p-4 border border-gold/20">
                    <p className="text-sm text-center">
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
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              🏠 Cotas Contempladas de <span className="text-gradient-gold">Imóveis</span>
            </h2>
            <div className="bg-gradient-card border border-border rounded-2xl overflow-hidden">
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
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              🚗 Cotas Contempladas de <span className="text-gradient-gold">Automóveis</span>
            </h2>
            <div className="bg-gradient-card border border-border rounded-2xl overflow-hidden">
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
          <section className="text-center py-16">
            <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Encontrou a cota ideal para você?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nossa equipe especializada está pronta para ajudar você a realizar seu sonho 
                com <strong className="text-white">segurança e as melhores condições do mercado</strong>.
              </p>
              <WhatsAppCTA 
                text="FALAR COM ESPECIALISTA"
                className="text-xl px-16"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CotasContempladas;