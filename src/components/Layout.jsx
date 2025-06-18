import React, { useState, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeout = useRef();

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setIsServicesOpen(false), 220);
  };

  return (
    <>
      <header className="bg-fondo shadow">
        <nav className="container flex flex-wrap items-center justify-between py-4 gap-4">
          <div className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="AJ Texas Painting Logo" className="h-10 w-auto object-contain" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primario to-secundario bg-clip-text text-transparent transition-all duration-300 group-hover:from-secundario group-hover:to-primario group-hover:scale-105 cursor-pointer">
              AJ TEXAS PAINTING
            </span>
          </div>
          <div className="flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) =>
              `relative transition-all duration-200 px-1 ${isActive ? "text-primario font-bold" : "text-neutroOscuro hover:text-primario"} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full`}
              end>
              Inicio
            </NavLink>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/servicios" className={({ isActive }) =>
                `relative transition-all duration-200 px-1 ${isActive ? "text-primario font-bold" : "text-neutroOscuro hover:text-primario"} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full`}
              >
                Servicios
              </NavLink>
              <div
                className={`absolute left-0 mt-2 bg-fondo rounded shadow-2xl z-10 min-w-[200px] transition-all duration-500 origin-top transform
                  ${isServicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"}`}
                style={{ willChange: 'opacity, transform' }}
              >
                <NavLink
                  to="/servicios/paint-texturing"
                  className={({ isActive }) =>
                    `block px-6 py-3 transition-all duration-300 font-medium text-lg rounded-md relative
                    ${isActive ? "bg-acento2 text-primario font-bold" : "text-neutroOscuro hover:bg-acento1/30 hover:text-primario hover:translate-x-2"}
                    after:absolute after:bottom-1 after:left-4 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-2/3`
                  }
                  onClick={() => setIsServicesOpen(false)}
                >
                  Paint & Texturing
                </NavLink>
                <NavLink
                  to="/servicios/make-ready"
                  className={({ isActive }) =>
                    `block px-6 py-3 transition-all duration-300 font-medium text-lg rounded-md relative
                    ${isActive ? "bg-acento2 text-primario font-bold" : "text-neutroOscuro hover:bg-acento1/30 hover:text-primario hover:translate-x-2"}
                    after:absolute after:bottom-1 after:left-4 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-2/3`
                  }
                  onClick={() => setIsServicesOpen(false)}
                >
                  Make Ready
                </NavLink>
              </div>
            </div>
            <NavLink to="/galeria" className={({ isActive }) =>
              `relative transition-all duration-200 px-1 ${isActive ? "text-primario font-bold" : "text-neutroOscuro hover:text-primario"} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full`}
            >
              Galería
            </NavLink>
            <NavLink to="/sobre-nosotros" className={({ isActive }) =>
              `relative transition-all duration-200 px-1 ${isActive ? "text-primario font-bold" : "text-neutroOscuro hover:text-primario"} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full`}
            >
              Sobre Nosotros
            </NavLink>
            <NavLink to="/contacto" className={({ isActive }) =>
              `relative transition-all duration-200 px-1 ${isActive ? "text-primario font-bold" : "text-neutroOscuro hover:text-primario"} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full`}
            >
              Contacto
            </NavLink>
            <NavLink to="/trabaja" className={({ isActive }) =>
              `relative transition-all duration-200 px-1 ${isActive ? "text-primario font-bold" : "text-neutroOscuro hover:text-primario"} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full`}
            >
              Trabaja con Nosotros
            </NavLink>
            <NavLink to="/color-picker" className={({ isActive }) =>
              `relative transition-all duration-200 px-1 ${isActive ? "text-primario font-bold" : "text-neutroOscuro hover:text-primario"} after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full`}
            >
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
};

export default Layout; 