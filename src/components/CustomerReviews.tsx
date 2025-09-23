const CustomerReviews = () => {
  const reviews = [
    {
      name: "Maria Silva",
      rating: 5,
      comment: "Investir com a BCI foi a melhor decisão financeira da minha vida. Em 2 anos consegui comprar minha casa própria!",
      location: "São Paulo, SP"
    },
    {
      name: "João Santos",
      rating: 5,
      comment: "Equipe super profissional e transparente. Já são mais de 3 anos investindo e sempre com excelentes resultados.",
      location: "Campinas, SP"
    },
    {
      name: "Ana Costa",
      rating: 5,
      comment: "O Oscar e toda equipe são incríveis! Consegui multiplicar meu patrimônio de forma segura e consistente.",
      location: "Rio de Janeiro, RJ"
    },
    {
      name: "Carlos Oliveira",
      rating: 5,
      comment: "4 anos de parceria e só tenho a agradecer. Metodologia única e resultados comprovados!",
      location: "Belo Horizonte, MG"
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          O que nossos <span className="text-gradient-gold">clientes dizem</span>
        </h2>
        <p className="text-xl text-muted-foreground">Mais de 500 clientes satisfeitos em 4+ anos</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gradient-card border border-border rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-gradient-gold text-xl">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground mb-4 italic">"{review.comment}"</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;