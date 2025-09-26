const WhatYouWillLearn = () => {
  const learningPoints = [
    {
      number: "1",
      title: "Crédito Imobiliário Inteligente",
      description: "Descubra como investir em crédito imobiliário com segurança e obter rentabilidade garantida através do nosso BCI."
    },
    {
      number: "2", 
      title: "Estratégias de Consórcio",
      description: "Aprenda as melhores táticas para multiplicar seu patrimônio através de consórcios contemplados e não contemplados."
    },
    {
      number: "3",
      title: "Maximização de Lucros", 
      description: "Como estruturar seus investimentos para escalar resultados de forma consistente e construir renda passiva."
    },
    {
      number: "4",
      title: "Consultoria Especializada",
      description: "Tenha acesso ao conhecimento de 27 anos no mercado e transforme sua realidade financeira com segurança."
    }
  ];

  return (
    <section className="py-8 sm:py-16 px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Como a <span className="text-gradient-gold">OX CA$H</span> pode
          <br className="hidden sm:block" />
          <span className="text-gradient-gold">transformar seus investimentos</span>
        </h2>
      </div>
      
      {/* Desktop - Grid normal */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
        {learningPoints.map((point, index) => (
          <div key={index} className="bg-gradient-card border border-border rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-gradient-gold text-black font-bold rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl shrink-0">
                {point.number}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 leading-tight">{point.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile e Tablet - Carrossel horizontal */}
      <div className="lg:hidden">
        <div className="flex overflow-x-auto gap-4 pb-6 px-2 snap-x snap-mandatory scrollbar-hide">
          {learningPoints.map((point, index) => (
            <div key={index} className="flex-none w-72 sm:w-80 snap-start">
              <div className="bg-gradient-card border border-border rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-200 h-full">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-gold text-black font-bold rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl shrink-0">
                    {point.number}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 leading-tight">{point.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;