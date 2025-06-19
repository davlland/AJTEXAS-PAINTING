import React from "react";
import { Outlet } from "react-router-dom";

const Services = () => (
  <section id="servicios" className="py-12 bg-fondo flex justify-center">
    <div className="w-full max-w-7xl rounded-2xl shadow-2xl bg-white/80 border border-acento2 p-12">
      <h2 className="text-3xl font-bold text-primario mb-6">Servicios</h2>
      {/* Menú eliminado según solicitud */}
      <Outlet />
    </div>
  </section>
);

export default Services;
