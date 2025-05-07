
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-mmp-black text-white py-12 border-t border-mmp-green/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-mmp-green">MMP Party Futbol Barcelona</h3>
            <p className="mb-4 text-gray-300">
              El mejor lugar para celebrar tus eventos en Barcelona. Creamos momentos mágicos y experiencias inolvidables para toda la familia.
            </p>
            <p className="text-gray-400">© {new Date().getFullYear()} MMP Party Futbol Barcelona. Todos los derechos reservados.</p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-mmp-green">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-mmp-green transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-mmp-green transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="text-gray-300 hover:text-mmp-green transition-colors">Galería</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-mmp-green transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-mmp-green">Horario</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Lunes - Viernes: 09:00 - 20:00</li>
              <li>Sábados: 09:00 - 00:00</li>
              <li>Domingos: 09:00 - 00:00</li>
            </ul>
            <div className="mt-4">
              <p className="font-semibold text-mmp-green">¿Tienes preguntas?</p>
              <p className="text-gray-300">Llámanos: +34 688 64 69 95</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;