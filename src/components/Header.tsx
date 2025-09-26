import GooeyNav from "./GooeyNav";

const Header = () => {
  const navItems = [
    { label: "Início", href: "/" },
    { label: "Clientes", href: "/clientes" },
    { label: "Cotas", href: "/cotas-contempladas" }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <GooeyNav
        items={navItems}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
};

export default Header;