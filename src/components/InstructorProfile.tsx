import oscarPhoto from "@/assets/oscar-photo.jpg";

const InstructorProfile = () => {
  const credentials = [
    "💰 Mais de 4 anos no mercado",
    "👥 +500 clientes satisfeitos", 
    "🎯 Sócio fundador da BCI",
    "📈 Especialista em consórcios e investimentos"
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Conheça o <span className="text-gradient-gold">Oscar</span>
        </h2>
        <p className="text-xl text-muted-foreground">Sócio Fundador da BCI</p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="lg:w-1/3">
          <div className="relative">
            <img 
              src={oscarPhoto} 
              alt="Oscar - Sócio Fundador BCI" 
              className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto"
            />
            <div className="absolute -bottom-4 -right-4 bg-gradient-gold text-black p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">4+</div>
              <div className="text-sm">Anos de mercado</div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-2/3">
          <div className="space-y-6">
            {credentials.map((credential, index) => (
              <div key={index} className="bg-gradient-card border border-border rounded-xl p-4 flex items-center gap-4">
                <div className="text-2xl">{credential.split(' ')[0]}</div>
                <div className="text-lg font-medium">{credential.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-gradient-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Transformando vidas através dos investimentos</h3>
            <p className="text-muted-foreground leading-relaxed">
              Oscar, sócio fundador da BCI, possui mais de 4 anos de experiência no mercado financeiro e 
              já ajudou mais de 500 clientes a alcançarem seus objetivos financeiros através de investimentos 
              seguros e rentáveis em consórcios. Sua abordagem personalizada e transparente é o diferencial da BCI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;