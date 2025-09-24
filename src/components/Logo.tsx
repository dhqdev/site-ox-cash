const Logo = () => {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <div className="relative inline-block">
        {/* Background decorativo */}
        <div className="absolute -inset-4 bg-gradient-gold/20 rounded-3xl blur-xl"></div>
        
        <div className="relative bg-gradient-hero/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-3xl sm:text-4xl">🏦</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-gradient-gold">OX CA$H</span>
            </h1>
          </div>
          
          <div className="space-y-2">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90">
              + que <span className="text-gradient-gold">negócio</span> e <span className="text-gradient-gold">investimento</span>
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-gold/10 px-4 py-2 rounded-full border border-gold/30">
              <span className="text-sm sm:text-base font-semibold text-gradient-gold">
                BCI - Banco de Crédito Digital
              </span>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Logo;