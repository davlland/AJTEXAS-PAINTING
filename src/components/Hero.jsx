import React from 'react';
import Button from './Button';

const Hero = () => (
  <section className="hero relative py-16 bg-white">
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
      {/* Texto principal */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-4">Expertos en remodelación y pintura de condominios</h2>
        <p className="text-lg mb-6">Atendemos residencias dentro de urbanizaciones, barrios y condominios, garantizando calidad y puntualidad.</p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">Solicita una cotización</Button>
      </div>
      {/* Imagen lateral */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
        <img
          src="/images/foto-hero.jpeg"
          alt="Pintores trabajando en condominio"
          className="w-3/4 rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default Hero;