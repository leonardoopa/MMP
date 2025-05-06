
import React from 'react';

const imagenes = [
  {
    url: "/images/foto6.jpg",
    titulo: "Celebración de cumpleaños"
  },
  {
    url: "/images/foto2.jpg",
    titulo: "Fiesta infantil"
  },
  {
    url: "/images/foto3.jpg",
    titulo: "Área de juegos"
  },
  {
    url: "/images/foto4.jpg",
    titulo: "Pastel y dulces"
  },
  {
    url: "/images/foto1.jpg",
    titulo: "Actividades artísticas"
  },
  {
    url: "/images/foto5.jpg",
    titulo: "Campo de fútbol"
  }
];

const Galeria = () => {
  return (
    <section id="galeria" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mmp-blue mb-4">Nuestra Galería</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre los momentos mágicos que creamos en MMP Party Futbol Barcelona
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagenes.map((imagen, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl shadow-lg h-64 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              <img 
                src={imagen.url} 
                alt={imagen.titulo} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-semibold">{imagen.titulo}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
