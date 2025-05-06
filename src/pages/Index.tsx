
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Galeria from '@/components/Galeria';
import Menu from '@/components/Menu';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Servicios />
      <Galeria />
      <Menu />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Index;
