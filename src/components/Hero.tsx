
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const serviciosElement = document.getElementById('servicios');
    if (serviciosElement) {
      serviciosElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReservar = () => {
    const contactoElement = document.getElementById('contacto');
    if (contactoElement) {
      contactoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero-pattern min-h-[85vh] flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mmp-green mb-4">
                MMP <span className="text-white">Party Futbol Barcelona</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400">
              Celebra el cumpleaños de tu hijo por 0 euros y bebe a precios de fábrica ⚽ en el mejor campo de fútbol de Barcelona.
              </p>
            </div>
            
            <p className="text-gray-400 text-lg">
              Reserva ara el teu aniversari!
              Promoció per temps limitat!
              Porta els teus amics i vine a divertir-te
            </p>
            
            <div className="flex items-center text-gray-400 space-x-1">
              <Calendar className="h-5 w-5 text-mmp-green" />
              <span>Disponibles todos los días de la semana</span>
            </div>
            
            <div className="flex items-center text-gray-400 space-x-1">
              <MapPin className="h-5 w-5 text-mmp-green" />
              <span>Barcelona, España</span>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button 
                className="bg-mmp-green hover:bg-mmp-green/80 text-black text-lg px-8 py-6"
                onClick={handleReservar}
              >
                Reservar Ahora
              </Button>
              <Button 
                variant="outline" 
                className="border-mmp-green text-mmp-green hover:bg-mmp-green/10 text-lg px-8 py-6"
                onClick={scrollToServices}
              >
                Ver Servicios
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute top-0 left-0 w-full h-full bg-mmp-green rounded-full opacity-10 animate-pulse"></div>
            <img 
              src="/images/fotocapammp.jpg"
              alt="Celebración de cumpleaños infantil" 
              className="rounded-3xl shadow-2xl relative z-10 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;