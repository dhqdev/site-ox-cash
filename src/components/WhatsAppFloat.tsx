import { useState } from "react";
import { Share2, Instagram, MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5519983673940";
    const message = "Oi, tudo bem ? Consegue me falar mais sobre esse estilo de consórcio ?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleInstagramClick = () => {
    const instagramUrl = "https://www.instagram.com/oxcash?igsh=MTRqNWc3ZTZ6dGFxag==";
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Lista de ícones - aparece quando isOpen = true */}
      {isOpen && (
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-2 duration-200">
          {/* Instagram */}
          <button
            onClick={handleInstagramClick}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </button>
          
          {/* WhatsApp */}
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </button>
        </div>
      )}

      {/* Botão principal de redes sociais */}
      <button
        onClick={handleToggle}
        className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center group relative overflow-hidden ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
        aria-label="Redes sociais"
      >
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        
        <Share2 
          className="w-7 h-7 group-hover:scale-110 transition-transform relative z-10" 
        />
      </button>
      
      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Nossas redes sociais
        </div>
      )}
    </div>
  );
};

export default WhatsAppFloat;