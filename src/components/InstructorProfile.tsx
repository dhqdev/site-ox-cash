import oscarPhoto from "@/assets/oscar-photo.jpg";
import ProfileCard from "@/components/ProfileCard";

const InstructorProfile = () => {
  const whatsappNumber = "5519983673940";
  
  const handleWhatsAppContact = (founderName: string) => {
    const message = encodeURIComponent(
      `Olá! Vi o perfil do ${founderName} no site da OX CA$H e gostaria de conversar sobre consórcios. Podemos marcar uma conversa?`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-8 sm:py-16 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Conheça nossos <span className="text-gradient-gold">Fundadores</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Os especialistas por trás da OX CA$H. Clique nos cards para interagir e entre em contato diretamente pelo WhatsApp.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start justify-items-center mobile-spacing">
          {/* Oscar Neto Card */}
          <div className="w-full max-w-sm mb-8 md:mb-0">
            <ProfileCard
              name="Oscar Neto"
              title="Sócio Fundador & CEO"
              handle=""
              avatar={oscarPhoto}
              backgroundImage={oscarPhoto}
              instagramHandle="oscarneto6"
              credentials={[
                "Fundador da OX CA$H",
                "27+ anos de experiência",
                "Especialista em crédito",
                "Mentor de investidores",
                "R$ 150M+ em vendas"
              ]}
              quote="Com mais de 27 anos de experiência, ajudo pessoas a conquistarem seus sonhos através de investimentos seguros e inteligentes."
            />
          </div>

          {/* Oscar IHMS Card */}
          <div className="w-full max-w-sm mb-8 md:mb-0">
            <ProfileCard
              name="Oscar IHMS"
              title="Sócio Fundador & CTO"
              handle=""
              avatar="/lovable-uploads/e253f5f7-f4a1-4600-9e89-2e3339e4e22d.png"
              backgroundImage="/lovable-uploads/e253f5f7-f4a1-4600-9e89-2e3339e4e22d.png"
              instagramHandle="oscarihms"
              credentials={[
                "Co-fundador da OX CA$H",
                "Expert em sistemas financeiros", 
                "Especialista em análise",
                "Estratégias inovadoras",
                "Tecnologia e processos"
              ]}
              quote="Através da inovação tecnológica, tornamos o crédito imobiliário mais acessível e transparente para todos."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;
