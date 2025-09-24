import { Button } from "@/components/ui/button";

const Header = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5519983673940";
    const message = "Oi, tudo bem ? Consegue me falar mais sobre esse estilo de consórcio ?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 z-50 py-2 md:py-3 px-2 md:px-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-2">
          <span className="text-white text-lg animate-pulse">💰</span>
          <p className="text-white text-xs md:text-sm font-bold leading-tight">
            <strong className="text-yellow-200">LUCRE ALTO</strong> • Investimento <strong className="text-yellow-200">GARANTIDO</strong>
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={handleWhatsAppContact}
          className="text-white border-white hover:bg-white hover:text-orange-600 text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 min-w-max"
        >
          FALE CONOSCO
        </Button>
      </div>
    </header>
  );
};

export default Header;