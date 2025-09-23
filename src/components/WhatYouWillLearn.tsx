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
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Como a <span className="text-gradient-gold">OX CASH</span> pode
          <br />
          <span className="text-gradient-gold">transformar seus investimentos</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Com nossa experiência de 27 anos, oferecemos as melhores oportunidades 
          do mercado de crédito imobiliário e consórcios
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {learningPoints.map((point, index) => (
          <div key={index} className="bg-gradient-card border border-border rounded-2xl p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-gold text-black font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl shrink-0">
                {point.number}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouWillLearn;