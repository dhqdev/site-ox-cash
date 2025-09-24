const OurHistory = () => {
  return (
    <section className="py-4 sm:py-8 px-4">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient-gold">Nossa História</span>
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-gradient-gold mx-auto mb-6 sm:mb-8"></div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        {/* Timeline Horizontal */}
        <div className="relative">
          {/* Linha horizontal no desktop, escondida no mobile */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-gold opacity-30"></div>
          
          {/* Cards da Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Início */}
            <div className="relative">
              <div className="bg-gradient-card border border-border rounded-xl p-4 sm:p-6 h-full">
                {/* Círculo da timeline - apenas desktop */}
                <div className="hidden md:block absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-gold rounded-full border-4 border-background"></div>
                
                <div className="text-center mb-4">
                  <div className="text-3xl sm:text-4xl mb-3">🏠</div>
                  <div className="text-xs text-gradient-gold font-semibold mb-2">1997 - O INÍCIO</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">História Familiar</h3>
                </div>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Começamos como uma <span className="text-white font-semibold">empresa familiar</span> com 
                  o sonho de ajudar no <span className="text-gradient-gold">sonho da casa própria</span>.
                </p>
              </div>
            </div>

            {/* Especialização */}
            <div className="relative">
              <div className="bg-gradient-card border border-border rounded-xl p-4 sm:p-6 h-full">
                {/* Círculo da timeline - apenas desktop */}
                <div className="hidden md:block absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-gold rounded-full border-4 border-background"></div>
                
                <div className="text-center mb-4">
                  <div className="text-3xl sm:text-4xl mb-3">📈</div>
                  <div className="text-xs text-gradient-gold font-semibold mb-2">2000s - EXPANSÃO</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Especialização</h3>
                </div>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Desenvolvemos expertise em <span className="text-white font-semibold">crédito imobiliário</span>, 
                  transformando consórcio em <span className="text-gradient-gold">investimento inteligente</span>.
                </p>
              </div>
            </div>

            {/* Presente */}
            <div className="relative">
              <div className="bg-gradient-card border border-border rounded-xl p-4 sm:p-6 h-full">
                {/* Círculo da timeline - apenas desktop */}
                <div className="hidden md:block absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-gold rounded-full border-4 border-background"></div>
                
                <div className="text-center mb-4">
                  <div className="text-3xl sm:text-4xl mb-3">🏆</div>
                  <div className="text-xs text-gradient-gold font-semibold mb-2">HOJE - EXCELÊNCIA</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">27 Anos</h3>
                </div>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Reconhecidos pelo <span className="text-white font-semibold">atendimento e confiabilidade</span>, 
                  oferecemos <span className="text-gradient-gold">segurança total</span> aos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;