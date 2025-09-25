import { useState } from "react";
import { X, Instagram, MessageCircle } from "lucide-react";

interface SocialMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SocialMediaModal: React.FC<SocialMediaModalProps> = ({ isOpen, onClose }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5519983673940";
    const message = "Oi, tudo bem ? Consegue me falar mais sobre esse estilo de consórcio ?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleInstagramClick = () => {
    const instagramUrl = "https://www.instagram.com/oxcash?igsh=MTRqNWc3ZTZ6dGFxag==";
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-gradient-gold/30 rounded-2xl p-6 shadow-2xl max-w-sm w-full transform transition-all duration-300 scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">
              Conecte-se conosco! 📱
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Opções */}
          <div className="space-y-4">
            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl p-4 flex items-center gap-4 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <MessageCircle size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">WhatsApp</div>
                <div className="text-sm opacity-90">Fale conosco agora</div>
              </div>
            </button>

            {/* Instagram */}
            <button
              onClick={handleInstagramClick}
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white rounded-xl p-4 flex items-center gap-4 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <Instagram size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">Instagram</div>
                <div className="text-sm opacity-90">Siga @oxcash</div>
              </div>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Escolha como quer se conectar com a <span className="text-gradient-gold font-semibold">OX CA$H</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaModal;