import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú de servicios al hacer scroll o cambiar de tamaño
  useEffect(() => {
    const closeDropdown = () => setIsServicesOpen(false);
    window.addEventListener("scroll", closeDropdown);
    window.addEventListener("resize", closeDropdown);
    return () => {
      window.removeEventListener("scroll", closeDropdown);
      window.removeEventListener("resize", closeDropdown);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-fondo/95 backdrop-blur-sm shadow-lg py-2"
          : "bg-fondo py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Logo y botón de menú */}
          <div className="w-full lg:w-auto flex justify-between items-center">
            <Link
              to="/"
              className="group relative flex items-center gap-4"
              aria-label="Ir a inicio"
            >
              <img
                src="/images/logo.png"
                alt="AJ Texas Painting Logo"
                className="h-10 w-auto object-contain"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primario to-secundario bg-clip-text text-transparent transition-all duration-300 group-hover:from-secundario group-hover:to-primario">
                AJ TEXAS PAINTING
              </h1>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primario transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Botón de menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-acento2 focus:outline-none focus:ring-2 focus:ring-primario"
              aria-expanded={isMenuOpen}
              aria-label="Menú de navegación"
            >
              <svg
                className="w-6 h-6 text-neutroOscuro"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navegación */}
          <nav
            className={`${
              isMenuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 lg:max-h-96 opacity-0 lg:opacity-100"
            } overflow-hidden transition-all duration-300 ease-in-out w-full lg:w-auto`}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-6 py-4 lg:py-0">
              <li>
                <Link
                  to="/"
                  className="relative text-neutroOscuro hover:text-primario font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full"
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              {/* Menú de Servicios con hover en desktop y click en móvil */}
              <li className="relative group lg:static">
                <button
                  type="button"
                  className="flex items-center gap-1 relative text-neutroOscuro hover:text-primario font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                  onClick={() => setIsServicesOpen((open) => !open)}
                  onMouseEnter={() =>
                    window.innerWidth >= 1024 && setIsServicesOpen(true)
                  }
                  onMouseLeave={() =>
                    window.innerWidth >= 1024 && setIsServicesOpen(false)
                  }
                >
                  Servicios
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Menú desplegable */}
                <div
                  onMouseEnter={() =>
                    window.innerWidth >= 1024 && setIsServicesOpen(true)
                  }
                  onMouseLeave={() =>
                    window.innerWidth >= 1024 && setIsServicesOpen(false)
                  }
                  className={`absolute left-1/2 -translate-x-1/2 mt-0 w-48 bg-fondo rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform origin-top z-40
                    ${
                      isServicesOpen
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }
                  `}
                >
                  <div className="py-2">
                    <a
                      href="/services#paint-texturing"
                      className="block px-4 py-2 text-neutroOscuro hover:bg-acento2 hover:text-primario transition-colors duration-200"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Paint & Texturing
                    </a>
                    <a
                      href="/services#make-ready"
                      className="block px-4 py-2 text-neutroOscuro hover:bg-acento2 hover:text-primario transition-colors duration-200"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Make Ready
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="/galeria"
                  className="relative text-neutroOscuro hover:text-primario font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full"
                >
                  Galería
                </a>
              </li>
              <li>
                <a
                  href="/sobre-nosotros"
                  className="relative text-neutroOscuro hover:text-primario font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="relative text-neutroOscuro hover:text-primario font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to="/trabaja"
                  className="inline-block px-6 py-2 bg-primario text-fondo rounded-md hover:bg-secundario transform hover:scale-105 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primario focus:ring-offset-2"
                >
                  Trabaja con Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/color-picker"
                  className="relative text-neutroOscuro hover:text-primario font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primario after:transition-all after:duration-300 hover:after:w-full"
                >
                  Paleta de Colores
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
