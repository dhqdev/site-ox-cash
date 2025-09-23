import instructorPhoto from "@/assets/instructor-photo.jpg";

const InstructorProfile = () => {
  const credentials = [
    "💰 +R$1 bilhão em cotas de investimento",
    "📈 15 anos no mercado financeiro", 
    "🎯 Criador do Método Lucro Garantido",
    "👨‍🏫 Milhares de alunos enriquecendo com consórcios"
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Conheça o <span className="text-gradient-gold">Henrique Corso</span>
        </h2>
        <p className="text-xl text-muted-foreground">CEO da Corso Consórcios</p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="lg:w-1/3">
          <div className="relative">
            <img 
              src={instructorPhoto} 
              alt="Henrique Corso" 
              className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto"
            />
            <div className="absolute -bottom-4 -right-4 bg-gradient-gold text-black p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Anos de experiência</div>
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
            <h3 className="text-xl font-bold mb-4">Transformando vidas através dos consórcios</h3>
            <p className="text-muted-foreground leading-relaxed">
              Henrique Corso é reconhecido como um dos maiores especialistas em investimentos com consórcios do Brasil. 
              Sua metodologia exclusiva já ajudou milhares de pessoas a construir patrimônio e gerar renda passiva 
              de forma segura e consistente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;