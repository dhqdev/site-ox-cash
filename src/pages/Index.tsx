import Header from "@/components/Header";
import Logo from "@/components/Logo";
import SignupForm from "@/components/SignupForm";
import CountdownTimer from "@/components/CountdownTimer";
import EventInfo from "@/components/EventInfo";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import InstructorProfile from "@/components/InstructorProfile";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToForm = () => {
    const element = document.getElementById('inscricao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Logo />
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Aprenda a formar <span className="text-gradient-gold">patrimônio e renda passiva</span> com consórcios, de forma <span className="text-gradient-gold">100% gratuita</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              É possível ter uma rentabilidade de <strong className="text-white">+500%</strong> com as estratégias certas de consórcio que você irá aprender no curso exclusivo com <strong className="text-gradient-gold">Henrique Corso</strong>
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <EventInfo />
              <div className="text-center">
        <Button 
          onClick={scrollToForm}
          variant="cta"
          size="lg"
          className="text-lg px-12"
        >
          GARANTIR MINHA VAGA GRATUITA
        </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <SignupForm />
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4">
        <WhatYouWillLearn />
        
        {/* CTA Section */}
        <section className="text-center py-16">
        <Button 
          onClick={scrollToForm}
          variant="cta"
          size="lg"
          className="text-xl px-16"
        >
          GARANTIR MINHA VAGA GRATUITA
        </Button>
        </section>

        <InstructorProfile />
        
        {/* Final CTA Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não perca a chance de transformar seu futuro financeiro.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Esta é a sua chance de ter acesso a um conhecimento que pode acelerar em anos a sua jornada de enriquecimento. As vagas são limitadas.
          </p>
        <Button 
          onClick={scrollToForm}
          variant="cta"
          size="lg"
          className="text-xl px-16"
        >
          GARANTIR MINHA VAGA GRATUITA
        </Button>
        </section>
      </div>
    </div>
  );
};

export default Index;