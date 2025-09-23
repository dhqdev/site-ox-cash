import coinIcon from "@/assets/coin-icon.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      <img src={coinIcon} alt="OX Cash Icon" className="w-16 h-16" />
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          <span className="text-gradient-gold">OX CASH</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-white/80 mb-2">
          + que negócio e investimento
        </p>
        <p className="text-lg text-muted-foreground">
          BCI - Banco de Crédito Digital
        </p>
      </div>
    </div>
  );
};

export default Logo;