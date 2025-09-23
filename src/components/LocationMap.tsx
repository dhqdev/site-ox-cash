const LocationMap = () => {
  const address = "Rua Monte Aprazível, 78, Chacara da Barra, Campinas SP, 13090-764, Brasil";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFaC0J8oQ8tQ8tQ8tQ8tQ8tQ8tQ8tQ8tQ&q=${encodeURIComponent(address)}`;

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nossa <span className="text-gradient-gold">Localização</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-2">Venha nos conhecer pessoalmente</p>
        <p className="text-lg text-muted-foreground">{address}</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-card border border-border rounded-2xl p-6">
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8987654321!2d-47.0789123!3d-22.8567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c5c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sRua%20Monte%20Apraz%C3%ADvel%2C%2078%20-%20Ch%C3%A1cara%20da%20Barra%2C%20Campinas%20-%20SP%2C%2013090-764!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização BCI - Campinas, SP"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;