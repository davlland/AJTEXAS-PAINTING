import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => (
  <>
    <header className="bg-fondo shadow">
      <nav className="container flex flex-wrap items-center justify-between py-4 gap-4">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="AJ Texas Painting Logo" className="h-10 w-auto object-contain" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primario to-secundario bg-clip-text text-transparent">
            AJ TEXAS PAINTING
          </span>
        </div>
        <div className="flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-primario font-bold" : "text-neutroOscuro"} end>
            Inicio
          </NavLink>
          <div className="relative group">
            <NavLink to="/servicios" className={({ isActive }) => isActive ? "text-primario font-bold" : "text-neutroOscuro"}>
              Servicios
            </NavLink>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-fondo rounded shadow-lg z-10 min-w-[180px]">
              <NavLink to="/servicios/paint-texturing" className={({ isActive }) => isActive ? "block px-4 py-2 text-primario font-bold" : "block px-4 py-2 text-neutroOscuro hover:text-primario"}>
                Paint & Texturing
              </NavLink>
              <NavLink to="/servicios/make-ready" className={({ isActive }) => isActive ? "block px-4 py-2 text-primario font-bold" : "block px-4 py-2 text-neutroOscuro hover:text-primario"}>
                Make Ready
              </NavLink>
            </div>
          </div>
          <NavLink to="/galeria" className={({ isActive }) => isActive ? "text-primario font-bold" : "text-neutroOscuro"}>
            Galería
          </NavLink>
          <NavLink to="/sobre-nosotros" className={({ isActive }) => isActive ? "text-primario font-bold" : "text-neutroOscuro"}>
            Sobre Nosotros
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => isActive ? "text-primario font-bold" : "text-neutroOscuro"}>
            Contacto
          </NavLink>
          <NavLink to="/trabaja" className={({ isActive }) => isActive ? "text-primario font-bold" : "text-neutroOscuro"}>
            Trabaja con Nosotros
          </NavLink>
          <NavLink to="/color-picker" className={({ isActive }) => isActive ? "text-primario font-bold" : "text-neutroOscuro"}>
            Paleta de Colores
          </NavLink>
        </div>
      </nav>
    </header>
    <main className="container py-8 min-h-[60vh]">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout; 