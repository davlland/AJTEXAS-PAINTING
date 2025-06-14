import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Logo y botón de menú */}
          <div className="w-full lg:w-auto flex justify-between items-center">
            <Link 
              to="/" 
              className="group relative"
              aria-label="Ir a inicio"
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-800 group-hover:to-blue-600">
                AJ TEXAS PAINTING
              </h1>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Botón de menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-label="Menú de navegación"
            >
              <svg 
                className="w-6 h-6 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Navegación */}
          <nav 
            className={`${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 lg:max-h-96 opacity-0 lg:opacity-100'
            } overflow-hidden transition-all duration-300 ease-in-out w-full lg:w-auto`}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-6 py-4 lg:py-0">
              <li>
                <Link 
                  to="/" 
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#galeria" 
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Galería
                </a>
              </li>
              <li>
                <a 
                  href="#sobre-nosotros" 
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link 
                  to="/trabaja" 
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Trabaja con Nosotros
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