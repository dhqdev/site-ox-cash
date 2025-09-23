import coinIcon from "@/assets/coin-icon.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <img src={coinIcon} alt="Coin Icon" className="w-12 h-12" />
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="text-gradient-gold">LUCRANDO</span>
          <span className="text-white"> com</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-white">CONSÓRCIOS</h2>
      </div>
    </div>
  );
};

export default Logo;