import oscarPhoto from "@/assets/oscar-photo.jpg";
import instructorPhoto from "@/assets/instructor-photo.jpg";

const InstructorProfile = () => {
  const founders = [
    {
      name: "Oscar Neto",
      title: "Sócio Fundador & CEO",
      photo: oscarPhoto,
      credentials: [
        "Sócio fundador da OX CASH", 
        "27+ anos de experiência no mercado financeiro",
        "Especialista em crédito imobiliário",
        "Mentor de centenas de investidores",
        "Responsável por mais de R$ 150M em vendas"
      ],
      quote: "Com mais de 27 anos de experiência no mercado financeiro, dedico minha carreira a ajudar pessoas e empresas a alcançarem suas metas através de investimentos seguros e rentáveis."
    },
    {
      name: "Oscar IHMS",
      title: "Sócio Fundador & CTO",
      photo: instructorPhoto,
      credentials: [
        "Co-fundador da OX CASH",
        "Especialista em sistemas financeiros",
        "Expert em análise de crédito",
        "Desenvolvedor de estratégias inovadoras",
        "Responsável pela tecnologia e processos"
      ],
      quote: "Nossa missão é democratizar o acesso ao crédito imobiliário e proporcionar oportunidades reais de crescimento patrimonial através de consórcios."
    }
  ];

  return (
    <section className="py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Conheça nossos <span className="text-gradient-gold">Fundadores</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          Os especialistas por trás da OX CASH
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="bg-gradient-card border border-border rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="text-center mb-6">
                <img 
                  src={founder.photo} 
                  alt={`${founder.name} - ${founder.title}`} 
                  className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl object-cover mx-auto mb-4 border-4 border-gold/20"
                />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gradient-gold">
                  {founder.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  {founder.title}
                </p>
              </div>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {founder.credentials.map((credential, credIndex) => (
                  <div key={credIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{credential}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-hero/20 rounded-xl p-4 sm:p-6">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  "<strong className="text-gradient-gold">{founder.quote}</strong>"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;