import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fecha: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, telefono, email, fecha, mensaje } = formData;
    const whatsappMessage = `Hola, mi nombre es ${nombre}. Mi teléfono es ${telefono}, mi email es ${email} y me gustaría reservar para la fecha ${fecha}. Mensaje: ${mensaje}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/34688646995?text=${encodedMessage}`, '_blank');
    
    // Simulación de envío de formulario
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactar con MMP Party Futbol Barcelona. Te responderemos pronto.",
    });
    
    // Resetear formulario
    setFormData({
      nombre: '',
      telefono: '',
      email: '',
      fecha: '',
      mensaje: ''
    });
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mmp-blue mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para reservar tu evento? Ponte en contacto con nosotros
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mmp-blue"
                    placeholder="Tu nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mmp-blue"
                    placeholder="Tu teléfono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mmp-blue"
                  placeholder="Tu email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="fecha" className="block text-gray-700 mb-2">Fecha del evento</label>
                <input
                  type="date"
                  id="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mmp-blue"
                  required
                  value={formData.fecha}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mmp-blue"
                  placeholder="Cuéntanos sobre tu evento..."
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-mmp-blue hover:bg-mmp-lightBlue text-white py-6 text-lg">
                Enviar Mensaje
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-mmp-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">+34 93 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-mmp-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@mmpcasadefiestas.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
