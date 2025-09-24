const OurHistory = () => {
  return (
    <section className="py-8 sm:py-16 px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient-gold">Nossa História</span>
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-gradient-gold mx-auto mb-6 sm:mb-8"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient-gold">Sobre Nós</h3>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Somos uma <strong className="text-white">empresa familiar</strong> com experiência de 
                  <strong className="text-gradient-gold"> 27 anos no mercado</strong>, construindo 
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
            
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6">
              <div className="bg-gradient-hero/20 rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-2">27+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              
              <div className="bg-gradient-hero/20 rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-2">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              
              <div className="bg-gradient-hero/20 rounded-xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-2">150M</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Em Vendas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;