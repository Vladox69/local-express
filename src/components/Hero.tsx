import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRzNCwyIDQgNGMwIDItMiA0LTQgNHMtNC0yLTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Delivery & Transporte
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Conectamos Urcuquí, Yachay e Ibarra con los mejores locales y opciones de transporte
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-white">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Urcuquí</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Yachay</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Ibarra</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
