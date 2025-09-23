import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToForm = () => {
    const element = document.getElementById('inscricao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-red-600 z-50 py-3 px-4">
      <div className="container mx-auto text-center">
        <p className="text-white text-sm font-semibold">
          VAGAS LIMITADAS! Garanta seu lugar no evento 100% gratuito.{" "}
          <Button 
            variant="link" 
            onClick={scrollToForm}
            className="text-white underline hover:text-yellow-200 p-0 h-auto font-semibold"
          >
            INSCREVA-SE AQUI!
          </Button>
        </p>
      </div>
    </header>
  );
};

export default Header;