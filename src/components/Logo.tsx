import coinIcon from "@/assets/coin-icon.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <img src={coinIcon} alt="Coin Icon" className="w-12 h-12" />
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-gradient-gold">BCI</span>
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-white">Investimentos & Consórcios</h2>
      </div>
    </div>
  );
};

export default Logo;