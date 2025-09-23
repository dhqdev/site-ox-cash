import { Button } from "@/components/ui/button";

const Header = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5519983673940";
    const message = "Oi, tudo bem ? Consegue me falar mais sobre esse estilo de consórcio ?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary z-50 py-3 px-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-white text-sm font-semibold">
          🏦 <strong>27 anos</strong> transformando sonhos em realidade
        </p>
        <Button 
          variant="outline" 
          onClick={handleWhatsAppContact}
          className="text-white border-white hover:bg-white hover:text-primary text-sm px-4 py-1"
        >
          FALE CONOSCO
        </Button>
      </div>
    </header>
  );
};

export default Header;