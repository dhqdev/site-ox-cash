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
      className={`group relative bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white font-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 ${className} overflow-hidden`}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      <span className="relative flex items-center gap-3">
        {text}
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
      </span>
    </Button>
  );
};

export default WhatsAppCTA;