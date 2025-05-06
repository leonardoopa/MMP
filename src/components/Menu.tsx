
import React from 'react';
import { Pizza, Sandwich, CupSoda } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Menu = () => {
  return (
    <section id="menu" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mmp-blue mb-4">Nuestro Menú</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deliciosas opciones para hacer de tu celebración un éxito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
              alt="Pizza para fiestas" 
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
              alt="Bocadillos y refrescos" 
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        <Card className="max-w-3xl mx-auto border-2 border-mmp-blue/10">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center space-x-4">
                <Pizza className="h-8 w-8 text-mmp-blue" />
                <Sandwich className="h-8 w-8 text-mmp-blue" />
                <CupSoda className="h-8 w-8 text-mmp-blue" />
              </div>
              <p className="text-xl text-gray-700">
                Elige el menú para tu fiesta. Tenemos kebab con patatas, refrescos, pizza, sándwiches y mucho más. ¡Adaptamos nuestras opciones según tus preferencias!
              </p>
              <p className="font-medium text-mmp-blue">
                Consulta todas nuestras opciones de menú al reservar
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Menu;