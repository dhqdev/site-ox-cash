import { Button } from "@/components/ui/button";

interface WhatsAppCTAProps {
  text?: string;
  variant?: "default" | "cta" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

const WhatsAppCTA = ({ 
  text = "ENTRAR EM CONTATO", 
  variant = "cta", 
  size = "lg",
  className = ""
}: WhatsAppCTAProps) => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5519983673940";
    const message = "Oi, tudo bem ? Consegue me falar mais sobre esse estilo de consórcio ?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      onClick={handleWhatsAppContact}
      variant={variant}
      size={size}
      className={`text-lg px-12 ${className}`}
    >
      📱 {text}
    </Button>
  );
};

export default WhatsAppCTA;