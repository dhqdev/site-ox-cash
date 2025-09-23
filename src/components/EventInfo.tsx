const EventInfo = () => {
  const eventDetails = [
    { label: "De 26 a 29 de Setembro", icon: "📅" },
    { label: "Sempre às 20:00h", icon: "⏰" },
    { label: "AO VIVO", icon: "🔴" },
    { label: "Transmissão online", icon: "💻" },
    { label: "100% GRATUITO", icon: "🆓" },
    { label: "Inscrições limitadas", icon: "⚠️" }
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