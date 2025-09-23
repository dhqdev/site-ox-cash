const EventInfo = () => {
  const eventDetails = [
    { label: "Trabalham de Segunda a Sexta", icon: "📅" },
    { label: "Horário: 9h às 18h", icon: "⏰" },
    { label: "Mais de 500 clientes", icon: "👥" },
    { label: "Sempre disponíveis", icon: "📞" },
    { label: "100% GRATUITO", icon: "🆓" },
    { label: "Atendimento personalizado", icon: "⭐" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 mb-12">
      {eventDetails.map((detail, index) => (
        <div key={index} className="bg-gradient-card border border-border rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">{detail.icon}</div>
          <div className="text-sm font-medium text-foreground">{detail.label}</div>
        </div>
      ))}
    </div>
  );
};

export default EventInfo;