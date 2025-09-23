const WhatYouWillLearn = () => {
  const learningPoints = [
    {
      number: "1",
      title: "O Investimento Certo",
      description: "Os pilares da alavancagem patrimonial e como começar com total segurança."
    },
    {
      number: "2", 
      title: "A Estratégia Secreta",
      description: "As melhores táticas de multiplicação com consórcios que o mercado não te conta."
    },
    {
      number: "3",
      title: "A Prática e a Escala", 
      description: "Como colocar o plano em prática e escalar seus resultados de forma consistente."
    },
    {
      number: "4",
      title: "O Caminho Completo",
      description: "O passo a passo para maximizar seus lucros e construir sua liberdade financeira."
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          O que você vai descobrir na
          <br />
          <span className="text-gradient-gold">Série Lucrando com Consórcios</span>
        </h2>
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