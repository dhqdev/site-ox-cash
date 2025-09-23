import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    experience: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Inscrição Realizada!",
      description: "Você receberá as informações de acesso por email.",
    });

    console.log('Form submitted:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="bg-gradient-card border border-border rounded-2xl p-8 max-w-md mx-auto" id="inscricao">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="bg-input border-border"
          required
        />
        
        <Input
          type="email"
          placeholder="Seu melhor e-mail"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="bg-input border-border"
          required
        />
        
        <Input
          placeholder="Seu WhatsApp (com DDD)"
          value={formData.whatsapp}
          onChange={(e) => handleChange('whatsapp', e.target.value)}
          className="bg-input border-border"
          required
        />
        
        <Select onValueChange={(value) => handleChange('experience', value)}>
          <SelectTrigger className="bg-input border-border">
            <SelectValue placeholder="Você já tem experiência com consórcio?" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="sim">Sim, já participei</SelectItem>
            <SelectItem value="nao">Não, nunca participei</SelectItem>
            <SelectItem value="pesquisando">Estou pesquisando</SelectItem>
          </SelectContent>
        </Select>
        
        <Button 
          type="submit" 
          variant="cta"
          size="lg"
          className="w-full"
        >
          QUERO ME INSCREVER AGORA!
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;