import oscarPhoto from "@/assets/oscar-photo.jpg";

const InstructorProfile = () => {
  const credentials = [
    "Sócio fundador da OX CASH", 
    "27+ anos de experiência no mercado financeiro",
    "Especialista em crédito imobiliário",
    "Mentor de centenas de investidores",
    "Responsável por mais de R$ 150M em vendas"
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Conheça <span className="text-gradient-gold">Oscar</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Sócio fundador e especialista em investimentos
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <img 
                src={oscarPhoto} 
                alt="Oscar - Sócio fundador da OX CASH" 
                className="w-64 h-64 rounded-2xl object-cover mx-auto mb-6 border-4 border-gold/20"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
                Oscar - Sócio Fundador
              </h3>
              
              <div className="space-y-3 mb-6">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-gold rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{credential}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-hero/20 rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  "Com mais de <strong className="text-gradient-gold">27 anos de experiência</strong> 
                  no mercado financeiro, dedico minha carreira a ajudar pessoas e empresas a 
                  alcançarem suas metas através de <strong className="text-white">investimentos 
                  seguros e rentáveis</strong>."
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  "Na <strong className="text-gradient-gold">OX CASH</strong>, nossa missão é 
                  democratizar o acesso ao crédito imobiliário e proporcionar oportunidades 
                  reais de crescimento patrimonial através de consórcios."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;