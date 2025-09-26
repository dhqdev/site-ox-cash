import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
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
    <PageTransition>
      <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <div className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4">
        <div className="container mx-auto max-w-6xl">

          {/* O que é uma Cota Contemplada */}
          <section className="mb-8 sm:mb-12 md:mb-16">
            <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-md border-2 border-gradient-gold/30 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
                  O que são as cotas contempladas?
                </h2>
                <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                {/* Conteúdo principal */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-400/30">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-300 flex items-center gap-3">
                      <span className="text-2xl">💡</span>
                      O que é?
                    </h3>
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                      É um consórcio que <span className="text-gradient-gold font-bold">já foi contemplado</span> cujo cliente 
                      não deseja utilizar. Portanto, trata-se de um <span className="text-yellow-400 font-semibold">crédito já liberado para uso</span>.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-400/30">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-orange-300 flex items-center gap-3">
                      <span className="text-2xl">💰</span>
                      Como pagar?
                    </h3>
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                      As cotas contempladas exigem o <span className="text-gradient-gold font-bold">pagamento de uma entrada</span>, 
                      referente ao valor já pago pelo cliente até a contemplação ou leilão da venda da cota.
                    </p>
                  </div>
                </div>

                {/* Card de destaque "Vale a pena?" */}
                <div className="lg:order-last">
                  <div className="relative bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-3xl p-8 border-2 border-emerald-400/40 shadow-xl">

                    <div className="text-left mt-4">
                      <h3 className="text-2xl sm:text-3xl font-black mb-4 text-emerald-300">
                        Vale a pena?
                      </h3>
                      <p className="text-lg sm:text-xl text-white/95 leading-relaxed mb-6">
                        <span className="text-yellow-400 font-bold">Claro!</span> Ainda é bem mais barato do que um financiamento bancário.
                      </p>
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                        <p className="text-base font-semibold text-emerald-200">
                          💪 <span className="text-yellow-400">Você tem o poder</span> de negociar o seu bem ou serviço à vista!
                        </p>
                      </div>
                    </div>
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
            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-md border-2 border-gradient-gold/30 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
              {/* Background effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-500/10 rounded-3xl blur-2xl animate-pulse"></div>
              
              <div className="relative">
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 leading-tight">
                  Encontrou a cota ideal para você?
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                  Nossa equipe especializada está pronta para ajudar você a realizar seu sonho 
                  com <span className="text-gradient-gold font-bold">segurança e as melhores condições do mercado</span>.
                </p>
                
                <WhatsAppCTA 
                  text="FALAR COM ESPECIALISTA"
                  className="text-lg sm:text-xl md:text-2xl px-8 sm:px-12 md:px-9 py-4 sm:py-5 rounded-2xl font-black shadow-2xl hover:shadow-green-500/25 border-2 border-green-400/50"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      
      {/* WhatsApp flutuante */}
      <WhatsAppFloat />
    </div>
    </PageTransition>
  );
};

export default CotasContempladas;