import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Controlar scroll do body quando menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const handleWhatsAppContact = () => {
    const phoneNumber = "5519983673940";
    const message = "Oi, tudo bem ? Consegue me falar mais sobre esse estilo de consórcio ?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const menuItems = [
    {
      title: "CONHECER OPORTUNIDADES",
      description: "Fale com nossos especialistas",
      icon: "📱",
      action: handleWhatsAppContact,
      gradient: "from-orange-500 to-red-500",
      primary: true
    },
    {
      title: "VER COTAS CONTEMPLADAS",
      description: "Cotas disponíveis para investimento",
      icon: "📋",
      action: () => navigate('/cotas-contempladas'),
      gradient: "from-gray-700 to-gray-800",
      primary: false
    },
    {
      title: "NOSSOS CLIENTES",
      description: "Conheça quem confia na OX CASH",
      icon: "🤝",
      action: () => navigate('/clientes'),
      gradient: "from-gray-700 to-gray-800",
      primary: false
    }
  ];

  return (
    <>
      {/* Botão flutuante para abrir o menu */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[80]">
        <div className="relative">
          {/* Tooltip para desktop */}
          <div className={`hidden lg:block absolute bottom-full right-0 mb-2 transition-all duration-300 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}>
            <div className="bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
              Navegação Rápida
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
            </div>
          </div>

          <Button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full shadow-xl transition-all duration-300 hover:scale-110 ${
              isOpen 
                ? 'bg-red-500 hover:bg-red-600 rotate-45' 
                : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
            }`}
          >
            <span className="text-xl sm:text-2xl lg:text-3xl text-white">
              {isOpen ? '✕' : '☰'}
            </span>
          </Button>
        </div>
      </div>

      {/* Menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu lateral */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-80 md:w-96 lg:w-[420px] bg-gradient-hero transform transition-transform duration-300 z-[70] overflow-y-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
          {/* Header do menu */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🏦</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-gold">OX CASH</h2>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">Navegação Rápida</p>
            </div>
            <Button
              variant="ghost"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10 p-2 lg:p-3 rounded-xl"
            >
              <span className="text-lg sm:text-xl lg:text-2xl">✕</span>
            </Button>
          </div>

          {/* Menu items */}
          <div className="flex-1 space-y-3 sm:space-y-4 lg:space-y-5 overflow-y-auto">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  item.action();
                  setIsOpen(false);
                }}
                className={`group bg-gradient-to-r ${item.gradient} rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 cursor-pointer transform hover:scale-[1.02] lg:hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                  item.primary ? 'ring-2 ring-orange-400/50 lg:ring-4' : ''
                } border border-white/10 hover:border-white/20`}
              >
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-sm sm:text-lg lg:text-xl mb-1 sm:mb-2 lg:mb-3 leading-tight group-hover:text-gradient-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-white/60 flex-shrink-0 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm sm:text-lg lg:text-xl group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                  </div>
                </div>
                
                {item.primary && (
                  <div className="mt-3 sm:mt-4 lg:mt-5 flex items-center gap-2 text-xs lg:text-sm text-white/70">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">Atendimento imediato</span>
                  </div>
                )}
              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  );
};

export default NavigationMenu;