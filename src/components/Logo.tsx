const Logo = () => {
  return (
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <div className="relative inline-block">
        {/* Background decorativo melhorado */}
        <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/30 via-orange-500/30 to-red-500/30 rounded-3xl blur-2xl animate-pulse"></div>
        <div className="absolute -inset-4 bg-gradient-gold/10 rounded-3xl blur-xl"></div>
        
        <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md border-2 border-gradient-gold/30 rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl">
          {/* Badge superior */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-lg">
              LÍDER EM INVESTIMENTOS
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-4 mt-2">
            <div className="relative">
              <span className="text-4xl sm:text-5xl md:text-6xl drop-shadow-2xl">🏦</span>
              <div className="absolute -inset-2 bg-yellow-400/20 rounded-full blur-md animate-pulse"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="text-gradient-gold drop-shadow-lg">OX CA$H</span>
            </h1>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/95 leading-tight">
              + que <span className="text-gradient-gold font-bold">negócio</span> e <span className="text-gradient-gold font-bold">investimento</span>
            </p>
            
            {/* Badge BCI melhorado */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-blue-400/30 shadow-xl">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BCI - Banco de Crédito Digital
              </span>
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>

          </div>          
        </div>
      </div>
    </div>
  );
};

export default Logo;