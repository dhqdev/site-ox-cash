const VideoSection = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Veja como <span className="text-gradient-gold">funciona na prática</span>
        </h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
          <iframe
            src="https://www.youtube.com/embed/qfaWi4E7sBk?start=1"
            title="Como Lucrar com Consórcios - BCI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;