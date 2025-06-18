import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Services = () => (
  <section id="servicios" className="py-12 bg-fondo">
    <h2 className="text-3xl font-bold text-primario mb-4">Servicios</h2>
    <nav className="flex gap-4 mb-6">
      <NavLink to="paint-texturing" className={({ isActive }) => isActive ? "text-primario font-bold" : "text-neutroOscuro hover:text-primario"}>
        Paint & Texturing
      </NavLink>
      <NavLink to="make-ready" className={({ isActive }) => isActive ? "text-primario font-bold" : "text-neutroOscuro hover:text-primario"}>
        Make Ready
      </NavLink>
    </nav>
    <Outlet />
  </section>
);

export default Services;
