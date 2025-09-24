import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleWhatsAppContact = () => {
    const phoneNumber = "5519983673940";
    const message = "Oi, tudo bem ? Consegue me falar mais sobre esse estilo de consórcio ?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const menuItems = [
    {
      title: "OPORTUNIDADES",
      icon: "📱",
      action: handleWhatsAppContact,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "COTAS",
      icon: "📋",
      action: () => navigate('/cotas-contempladas'),
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "CLIENTES",
      icon: "🤝",
      action: () => navigate('/clientes'),
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <>
      {/* Botão flutuante principal */}
      <div className="fixed bottom-4 right-4 z-[80]">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isOpen 
              ? 'bg-red-500 hover:bg-red-600 rotate-45' 
              : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
          }`}
        >
          <span className="text-2xl text-white">
            {isOpen ? '✕' : '☰'}
          </span>
        </Button>
      </div>

      {/* Menu compacto */}
      {isOpen && (
        <>
          {/* Overlay para fechar */}
          <div 
            className="fixed inset-0 z-[70]"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Itens do menu */}
          <div className="fixed bottom-20 right-4 z-[80] space-y-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  item.action();
                  setIsOpen(false);
                }}
                className={`bg-gradient-to-r ${item.color} text-white px-4 py-3 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-200 min-w-[140px]`}
                style={{ 
                  animation: `slideUp 0.3s ease-out ${index * 100}ms forwards`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-semibold text-sm">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          <style>{`
            @keyframes slideUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default NavigationMenu;