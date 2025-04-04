
import React from 'react';
import { Cake, Utensils, Gamepad2, PaintBucket, Trophy } from 'lucide-react';

const servicios = [
  {
    icon: <Cake className="h-12 w-12 text-mmp-blue" />,
    titulo: "Cumpleaños",
    descripcion: "El lugar perfecto para celebrar el cumpleaños de tus pequeños con amigos y familiares."
  },
  {
    icon: <Utensils className="h-12 w-12 text-mmp-blue" />,
    titulo: "Comida Deliciosa",
    descripcion: "Menús especiales para niños y adultos, con opciones para todo tipo de gustos y necesidades dietéticas."
  },
  {
    icon: <Gamepad2 className="h-12 w-12 text-mmp-blue" />,
    titulo: "Juguetes y Juegos",
    descripcion: "Gran variedad de juguetes y juegos para entretener a los niños durante toda la celebración."
  },
  {
    icon: <PaintBucket className="h-12 w-12 text-mmp-blue" />,
    titulo: "Área de Pintura",
    descripcion: "Espacio creativo donde los niños pueden desarrollar su creatividad con actividades artísticas."
  },
  {
    icon: <Trophy className="h-12 w-12 text-mmp-blue" />,
    titulo: "Campo de Fútbol",
    descripcion: "Mini campo de fútbol para que los pequeños disfruten de partidos emocionantes con sus amigos."
  }
];

const Servicios = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mmp-blue mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En MMP ofrecemos todo lo que necesitas para crear momentos inolvidables en tus celebraciones
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div key={index} className="service-card flex flex-col items-center text-center">
              <div className="mb-6 p-4 rounded-full bg-blue-50">
                {servicio.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{servicio.titulo}</h3>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
