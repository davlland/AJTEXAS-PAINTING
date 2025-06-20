import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
}

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/galeria", label: "Galería" },
  { to: "/sobre-nosotros", label: "Sobre Nosotros" },
  { to: "/contacto", label: "Contacto" },
  { to: "/trabaja", label: "Trabaja con Nosotros" },
  { to: "/color-picker", label: "Paleta de Colores" },
];

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  return (
    <header className="fixed w-full z-50 bg-fondo/95 backdrop-blur-sm shadow-lg py-2 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4" aria-label="Ir a inicio">
          <img src="/images/logo.png" alt="AJ Texas Painting Logo" className="h-10 w-auto object-contain" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primario to-secundario bg-clip-text text-transparent">AJ TEXAS PAINTING</h1>
        </Link>
        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="p-3 rounded-md hover:bg-acento2 focus:outline-none focus:ring-2 focus:ring-primario"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Abrir menú</span>
              <span className="text-3xl">☰</span>
            </button>
            {menuOpen && (
              <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMenuOpen(false)} />
            )}
            <nav
              className={`fixed top-0 right-0 h-full w-64 bg-fondo shadow-lg z-50 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200`}
              style={{ transitionProperty: 'transform' }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-2xl p-2 rounded hover:bg-acento2"
                aria-label="Cerrar menú"
              >×</button>
              <ul className="flex flex-col gap-6 mt-20 px-8">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="block text-neutroOscuro hover:text-primario text-xl font-medium py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    className="block w-full text-left text-neutroOscuro hover:text-primario text-xl font-medium py-2 flex items-center justify-between"
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services-submenu"
                  >
                    Servicios
                    <span className={`transform transition-transform duration-200 ${servicesOpen ? 'rotate-90' : ''}`}>▶</span>
                  </button>
                  <ul
                    id="mobile-services-submenu"
                    className={`overflow-hidden transition-all duration-200 pl-4 ${servicesOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{ pointerEvents: servicesOpen ? 'auto' : 'none' }}
                  >
                    <li>
                      <Link
                        to="/servicios/paint-texturing"
                        className="block py-1 text-neutroOscuro hover:text-primario"
                        onClick={() => setMenuOpen(false)}
                      >
                        Paint & Texturing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/servicios/make-ready"
                        className="block py-1 text-neutroOscuro hover:text-primario"
                        onClick={() => setMenuOpen(false)}
                      >
                        Make Ready
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </>
        ) : (
          <nav>
            <ul className="flex flex-row items-center gap-6">
              <li className="relative group">
                <button className="flex items-center gap-1 text-neutroOscuro hover:text-primario font-medium transition-colors duration-200 focus:outline-none">
                  Servicios
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-fondo rounded-lg shadow-lg overflow-hidden z-40 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                  <div className="py-2">
                    <Link to="/services#paint-texturing" className="block px-4 py-2 text-neutroOscuro hover:bg-acento2 hover:text-primario">Paint & Texturing</Link>
                    <Link to="/services#make-ready" className="block px-4 py-2 text-neutroOscuro hover:bg-acento2 hover:text-primario">Make Ready</Link>
                  </div>
                </div>
              </li>
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-neutroOscuro hover:text-primario font-medium transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
