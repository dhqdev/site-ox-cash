const OurHistory = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient-gold">Nossa História</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient-gold">Sobre Nós</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Somos uma <strong className="text-white">empresa familiar</strong> com experiência de 
                  <strong className="text-gradient-gold"> 25 anos no mercado</strong>, construindo 
                  relacionamentos sólidos e duradouros com nossos clientes.
                </p>
                
                <p>
                  <strong className="text-white">Especializados em crédito imobiliário</strong>, 
                  garantimos excelente lucro e rentabilidade através do consórcio como investimento, 
                  oferecendo oportunidades únicas no mercado.
                </p>
                
                <p>
                  Qualificados por nosso <strong className="text-white">atendimento, confiabilidade e eficiência</strong>, 
                  oferecemos aos nossos clientes segurança e transparência no atendimento e suporte 
                  com os serviços contratados.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-hero/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">27+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              
              <div className="bg-gradient-hero/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              
              <div className="bg-gradient-hero/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-gradient-gold mb-2">150M</div>
                <div className="text-sm text-muted-foreground">Em Vendas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;