import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    experienciaConsorcio: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.whatsapp || !formData.experienciaConsorcio) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Validação de email básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erro",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    // Validação de WhatsApp (deve ter pelo menos 10 dígitos)
    const whatsappNumbers = formData.whatsapp.replace(/\D/g, '');
    if (whatsappNumbers.length < 10) {
      toast({
        title: "Erro",
        description: "Por favor, insira um número de WhatsApp válido com DDD.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simular envio (você pode integrar com Google Sheets depois)

      const res = await fetch('https://script.google.com/macros/s/AKfycbyaZLpv5slCQu7UcVznOO-4wg8O2Cgqac3J5dW2uZ2miAN6dnV_uKeoX9841V1B9iqL/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      console.log(res)
      if (!res.ok) {
        throw new Error('Erro ao enviar dados');
      }
      
      toast({
        title: "Sucesso! 🎉",
        description: "Seus dados foram enviados com sucesso! Nossa equipe entrará em contato em breve.",
      });

      // Limpar formulário
      setFormData({
        nome: "",
        email: "",
        whatsapp: "",
        experienciaConsorcio: ""
      });

    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar seus dados. Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="cadastro" className="py-8 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
          {/* Background decorativo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-gold/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-gold/20 px-3 sm:px-4 py-2 rounded-full mb-4">
              <span className="text-xl sm:text-2xl">🚀</span>
              <span className="text-gold font-semibold text-sm sm:text-base">OPORTUNIDADE EXCLUSIVA</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Receba nossa <span className="text-gradient-gold">consulta gratuita</span>!
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Preencha os dados abaixo e receba uma análise personalizada das 
              <strong className="text-white"> melhores oportunidades de investimento</strong> em 
              consórcios para o seu perfil.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Nome Completo */}
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-white font-medium flex items-center gap-2">
                  <span className="text-gold">👤</span>
                  Nome Completo *
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold focus:ring-gold h-12 text-base"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium flex items-center gap-2">
                  <span className="text-gold">📧</span>
                  E-mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Digite seu melhor e-mail"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold focus:ring-gold h-12 text-base"
                  required
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-white font-medium flex items-center gap-2">
                  <span className="text-gold">📱</span>
                  WhatsApp com DDD *
                </Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="(19) 99999-9999"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold focus:ring-gold h-12 text-base"
                  required
                />
              </div>

              {/* Experiência com Consórcio */}
              <div className="space-y-2">
                <Label htmlFor="experienciaConsorcio" className="text-white font-medium flex items-center gap-2">
                  <span className="text-gold">💼</span>
                  Experiência com consórcio *
                </Label>
                <select
                  id="experienciaConsorcio"
                  name="experienciaConsorcio"
                  value={formData.experienciaConsorcio}
                  onChange={handleInputChange}
                  className="flex h-12 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-base text-white placeholder:text-white/60 focus:border-gold focus:ring-gold focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="" className="bg-gray-800 text-white">Selecione uma opção</option>
                  <option value="Sim, já possuo experiência" className="bg-gray-800 text-white">✅ Sim, já possuo experiência</option>
                  <option value="Não, é meu primeiro contato" className="bg-gray-800 text-white">🆕 Não, é meu primeiro contato</option>
                  <option value="Já ouvi falar, mas nunca investi" className="bg-gray-800 text-white">🤔 Já ouvi falar, mas nunca investi</option>
                </select>
              </div>
            </div>



            {/* Call to Action */}
            <div className="text-center pt-4 sm:pt-6">
              <Button 
                type="submit"
                disabled={isLoading}
                className="bg-gradient-gold hover:bg-gold/90 text-black font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg w-full sm:w-auto"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-black mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    🚀 QUERO MINHA CONSULTORIA GRATUITA
                  </>
                )}
              </Button>
              
              <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                * Campos obrigatórios. Seus dados estão seguros conosco.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;