import React from 'react';
import Button from './Button';

const Hero = () => (
  <section className="hero relative py-20 bg-fondo">
    <div className="container mx-auto px-4">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Texto principal */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-primario leading-tight">
            Expertos en remodelación y pintura de condominios
          </h2>
          <p className="text-lg text-neutroOscuro leading-relaxed">
            Atendemos residencias dentro de urbanizaciones, barrios y condominios, garantizando calidad y puntualidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-primario text-fondo hover:bg-secundario transform hover:scale-105 transition-all duration-300">
              Solicita una cotización
            </Button>
            <Button className="bg-fondo text-primario border-2 border-primario hover:bg-acento2 hover:text-primario transform hover:scale-105 transition-all duration-300">
              Ver nuestros servicios
            </Button>
          </div>
        </div>
        {/* Imagen lateral */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-acento2 rounded-2xl transform rotate-3"></div>
            <img
              src="/images/foto-hero.jpeg"
              alt="Pintores trabajando en condominio"
              className="w-full max-w-lg rounded-xl shadow-xl relative transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;