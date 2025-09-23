const CompanyInfo = () => {
  const companyDetails = [
    { label: "27 anos de experiência", icon: "🏆", highlight: true },
    { label: "Empresa familiar", icon: "👨‍👩‍👧‍👦" },
    { label: "Recorde de vendas", icon: "📈", highlight: true },
    { label: "Segunda a Sexta: 9h às 18h", icon: "⏰" },
    { label: "Atendimento personalizado", icon: "🤝" },
    { label: "Segurança e transparência", icon: "🔒" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 mb-12">
      {companyDetails.map((detail, index) => (
        <div 
          key={index} 
          className={`bg-gradient-card border border-border rounded-xl p-4 text-center hover:scale-105 transition-transform duration-200 ${
            detail.highlight ? 'ring-2 ring-gold/30' : ''
          }`}
        >
          <div className="text-2xl mb-2">{detail.icon}</div>
          <div className="text-sm font-medium text-foreground">{detail.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CompanyInfo;