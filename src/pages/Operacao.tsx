import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Building2, 
  Users, 
  Calculator, 
  TrendingUp, 
  CheckCircle, 
  Target, 
  Banknote,
  FileText,
  Award,
  Clock,
  BarChart3,
  PieChart
} from "lucide-react";

const Operacao = () => {
  const navigate = useNavigate();

  const stepCard = (icon: React.ReactNode, title: string, description: string, highlight?: string) => (
    <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-md border border-orange-500/30 rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed mb-4">{description}</p>
      {highlight && (
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-3">
          <p className="text-yellow-200 font-semibold text-sm">{highlight}</p>
        </div>
      )}
    </div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-hero">
        <Header />
        
        <div className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
                <span className="text-gradient-gold">Operação Estruturada</span> de Consórcio
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Entenda como funciona nossa operação estratégica através de dados selecionados pela diretoria, 
                escolhendo os melhores grupos para esse modelo de operação com recurso suficiente para contemplação programada.
              </p>
            </div>

            {/* Processo em 3 Etapas */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                Como Funciona Nossa <span className="text-gradient-gold">Operação</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Etapa 1 */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 rounded-3xl p-8 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-black text-2xl mb-6 mx-auto">
                      1
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Operação de Crédito</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Operação de crédito acima de 2 milhões com programação de entrega mensal para uso de construção e comerciais industriais rurais.
                    </p>
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-4">
                      <Building2 className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <p className="text-yellow-200 font-semibold text-sm">Crédito Acima de R$ 2 Milhões</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-content-center">
                      <span className="text-white font-bold">→</span>
                    </div>
                  </div>
                </div>

                {/* Etapa 2 */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 rounded-3xl p-8 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-black text-2xl mb-6 mx-auto">
                      2
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Contemplação por Lance</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      São contemplados 2 cotas por lance. Todo mês há um lance com um sorteio livre e um máximo por grupos, possibilitando as contemplações programadas.
                    </p>
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg p-4">
                      <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="text-blue-200 font-semibold text-sm">2 Cotas por Lance Mensal</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">→</span>
                    </div>
                  </div>
                </div>

                {/* Etapa 3 */}
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-3xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-black text-2xl mb-6 mx-auto">
                    3
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Aprovação da Empresa</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    A operação passa por uma aprovação da empresa estando todos cientes do processo a ser executado para que o negócio seja fechado.
                  </p>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-lg p-4">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-green-200 font-semibold text-sm">Processo Aprovado e Auditado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard de Crédito */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                Dashboard de <span className="text-gradient-gold">Operação</span>
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Divisão de Crédito */}
                <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md border-2 border-orange-500/40 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                    <Calculator className="mr-3 text-orange-400" />
                    Divisão de Crédito de R$ 2 Milhões
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-orange-500/30 to-red-500/30 border-2 border-orange-400/50 rounded-2xl p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold text-white">10 Créditos/Cotas</span>
                        <span className="text-3xl font-black text-gradient-gold">R$ 200.000</span>
                      </div>
                      <p className="text-gray-200 text-lg leading-relaxed">Em 10 grupos diferentes, cada um em um grupo diferente para um lance</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border-2 border-blue-400/50 rounded-2xl p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold text-white">Sorteio por Lance</span>
                        <span className="text-3xl font-bold text-blue-400">Mensal</span>
                      </div>
                      <p className="text-gray-200 text-lg leading-relaxed">Participando de sorteios de lance todo mês até a contemplação</p>
                    </div>
                  </div>
                </div>

                {/* Estatísticas da Operação */}
                <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md border-2 border-blue-500/40 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                    <BarChart3 className="mr-3 text-blue-400" />
                    Operação Estruturada
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/40 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-black text-purple-300 mb-3">2 Milhões</div>
                      <div className="text-lg text-gray-200 font-semibold">Crédito Acima de</div>
                      <div className="text-sm text-gray-400 mt-2">Programação de entrega mensal</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-black text-green-300 mb-3">2 Cotas</div>
                      <div className="text-lg text-gray-200 font-semibold">Contempladas por Lance</div>
                      <div className="text-sm text-gray-400 mt-2">Sorteio livre + máximo por grupos</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/40 rounded-2xl p-6 text-center">
                      <div className="text-4xl font-black text-yellow-300 mb-3">100%</div>
                      <div className="text-lg text-gray-200 font-semibold">Aprovação da Empresa</div>
                      <div className="text-sm text-gray-400 mt-2">Processo auditado e aprovado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vantagens da Operação */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                Vantagens da Nossa <span className="text-gradient-gold">Operação</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stepCard(
                  <Award className="w-8 h-8 text-orange-400" />,
                  "Operação Estratégica",
                  "Operação elaborada estrategicamente através de dados selecionados pela diretoria",
                  "Dados selecionados e aprovados"
                )}
                
                {stepCard(
                  <Clock className="w-8 h-8 text-blue-400" />,
                  "Contemplação Programada",
                  "Escolhemos os melhores grupos para esse modelo de operação com recurso suficiente",
                  "Contemplação programada garantida"
                )}
                
                {stepCard(
                  <Building2 className="w-8 h-8 text-green-400" />,
                  "Construção e Comercial",
                  "Para uso de construção e comerciais industriais rurais com entrega mensal programada",
                  "Aplicação industrial e rural"
                )}
                
                {stepCard(
                  <Users className="w-8 h-8 text-purple-400" />,
                  "Grupos Otimizados",
                  "Selecionamos grupos com maior probabilidade de contemplação através de análise detalhada",
                  "Análise de performance por grupo"
                )}
                
                {stepCard(
                  <TrendingUp className="w-8 h-8 text-cyan-400" />,
                  "Crédito Estruturado",
                  "Operação com crédito acima de R$ 2 milhões dividido estrategicamente em 10 cotas",
                  "R$ 200.000 por cota"
                )}
                
                {stepCard(
                  <FileText className="w-8 h-8 text-yellow-400" />,
                  "Processo Auditado",
                  "Toda operação passa por aprovação da empresa com todos cientes do processo executado",
                  "100% de transparência operacional"
                )}
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center py-16">
              <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-md border-2 border-gradient-gold/30 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden">
                {/* Background effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-2xl animate-pulse"></div>
                
                <div className="relative">
                  <h2 className="text-3xl sm:text-4xl font-black mb-8 leading-tight">
                    Pronto para Investir com <span className="text-gradient-gold">Segurança</span>?
                  </h2>
                  
                  <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Conheça nossa operação estruturada de consórcio com crédito acima de R$ 2 milhões e 
                    <span className="text-gradient-gold font-semibold"> contemplação programada estratégica</span>.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <WhatsAppCTA 
                      text="QUERO INVESTIR AGORA"
                      className="text-lg sm:text-xl px-12 py-5 rounded-2xl font-black shadow-2xl hover:shadow-orange-500/25 border-2 border-orange-400/50"
                    />
                    
                    <Button 
                      variant="outline"
                      onClick={() => navigate('/clientes')}
                      className="text-lg px-8 py-5 rounded-2xl border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                    >
                      Ver Clientes Satisfeitos
                    </Button>
                  </div>
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

export default Operacao;