import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/globals.css';
import '../styles/components.css';

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
  { to: "/sobre-nosotros", label: "Sobre Nosotros" },
  { to: "/contacto", label: "Contacto" },
  { to: "/trabaja", label: "Trabaja con Nosotros" },
  { to: "/color-picker", label: "Paleta de Colores" },
];

const Header = ({ preHeaderReduced = false, preHeaderHeight = 128, reduced = false }) => {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isServicesOpenDesktop, setIsServicesOpenDesktop] = useState(false);
  const servicesLiRef = useRef(null);
  const servicesButtonRef = useRef(null);

  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  useEffect(() => {
    if (!isServicesOpenDesktop) return;
    function handleClickOutside(event) {
      if (
        servicesLiRef.current &&
        !servicesLiRef.current.contains(event.target) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(event.target)
      ) {
        setIsServicesOpenDesktop(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesOpenDesktop]);

  useEffect(() => {
    if (!isServicesOpenDesktop) return;
    function handleEsc(e) {
      if (e.key === 'Escape') setIsServicesOpenDesktop(false);
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isServicesOpenDesktop]);

  return (
    <header
      className="header fixed w-full z-[9999] bg-fondo/95 backdrop-blur-sm shadow-lg"
      style={{
        top: `${preHeaderHeight}px`,
        transform: `translateY(${preHeaderReduced ? -preHeaderHeight/2 : 0}px)`,
        transition: 'top 0.3s cubic-bezier(0.7,0,0.3,1), transform 0.3s cubic-bezier(0.7,0,0.3,1), height 0.3s cubic-bezier(0.7,0,0.3,1)',
        margin: 0,
        padding: 0,
        borderTop: 0,
        height: reduced ? 44 : 64,
      }}
    >
      <div className="max-w-7xl h-full mx-auto px-2 sm:px-4 flex items-center justify-between"
        style={{ transition: 'padding 0.3s cubic-bezier(0.7,0,0.3,1)' }}>
        <Link to="/" className="flex items-center gap-2 w-0 flex-1 min-w-0 overflow-hidden justify-center sm:w-auto sm:justify-start" aria-label="Ir a inicio">
          <h1
            className="font-bold brand-animated focus:outline-none text-center w-full sm:w-auto text-[0.95rem] sm:text-xl md:text-2xl leading-tight break-words px-2 truncate"
            tabIndex={0}
          >
            AJ TEXAS PAINTING
            <span className="brand-underline"></span>
          </h1>
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
              className={`fixed top-0 right-0 h-full w-64 bg-gray-300 shadow-lg z-50 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200`}
              style={{ transitionProperty: 'transform' }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-2xl p-2 rounded hover:bg-acento2"
                aria-label="Cerrar menú"
              >×</button>
              <ul
                className={`flex flex-col gap-6 mt-20 px-8 bg-gradient-to-b from-[#d0d3d6] via-gray-200/80 to-gray-200/80 transition-all duration-300 ease-out transform ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}
              >
                <li key={navLinks[0].to}>
                  <Link
                    to={navLinks[0].to}
                    className={`block text-neutroOscuro text-xl font-medium py-2 rounded transition-colors duration-200 ${activeMenuItem === navLinks[0].to ? 'bg-primario/80 text-white' : ''}`}
                    onClick={() => {
                      setActiveMenuItem(navLinks[0].to);
                      setTimeout(() => setActiveMenuItem(null), 200);
                      setMenuOpen(false);
                    }}
                  >
                    {navLinks[0].label}
                  </Link>
                </li>
                <li key="servicios-menu">
                  <button
                    className={`block w-full text-left text-neutroOscuro text-xl font-medium py-2 flex items-center justify-between rounded transition-colors duration-200 ${activeMenuItem === 'servicios' ? 'bg-primario/80 text-white' : ''}`}
                    onClick={() => {
                      setActiveMenuItem('servicios');
                      setTimeout(() => setActiveMenuItem(null), 200);
                      setServicesOpen((v) => !v);
                    }}
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
                    {[
                      { to: '/servicios/paint-texturing', label: 'Paint & Texturing' },
                      { to: '/servicios/make-ready', label: 'Make Ready' },
                    ].map(link => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className={`block py-1 text-neutroOscuro rounded transition-colors duration-200 ${activeMenuItem === link.to ? 'bg-primario/80 text-white' : ''}`}
                          onClick={() => {
                            setActiveMenuItem(link.to);
                            setTimeout(() => setActiveMenuItem(null), 200);
                            setMenuOpen(false);
                          }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {navLinks.slice(1).map(link => (
                  link.label !== 'Inicio' && (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className={`block text-neutroOscuro text-xl font-medium py-2 rounded transition-colors duration-200 ${activeMenuItem === link.to ? 'bg-primario/80 text-white' : ''}`}
                        onClick={() => {
                          setActiveMenuItem(link.to);
                          setTimeout(() => setActiveMenuItem(null), 200);
                          setMenuOpen(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                ))}
              </ul>
            </nav>
          </>
        ) : (
          <nav>
            <ul className="flex flex-row items-center gap-6">
              <li key={navLinks[0].to}>
                <Link to={navLinks[0].to} className="text-neutroOscuro hover:text-primario font-medium transition-colors duration-200">
                  {navLinks[0].label}
                </Link>
              </li>
              <li
                className="relative"
                key="servicios-desktop"
                ref={servicesLiRef}
              >
                <button
                  ref={servicesButtonRef}
                  className="flex items-center gap-1 text-neutroOscuro hover:text-primario font-medium transition-colors duration-200 focus:outline-none"
                  onClick={() => setIsServicesOpenDesktop((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={isServicesOpenDesktop}
                  type="button"
                >
                  Servicios
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-fondo rounded-lg shadow-lg overflow-hidden z-50 transition-opacity duration-200 ${isServicesOpenDesktop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  style={{ minWidth: '12rem' }}
                  onClick={e => e.stopPropagation()}
                >
                  <div className="py-2">
                    <Link
                      to="/servicios/paint-texturing"
                      className="block px-4 py-2 text-neutroOscuro hover:bg-acento2 hover:text-primario transition-colors duration-150"
                      onClick={() => setIsServicesOpenDesktop(false)}
                    >Paint & Texturing</Link>
                    <Link
                      to="/servicios/make-ready"
                      className="block px-4 py-2 text-neutroOscuro hover:bg-acento2 hover:text-primario transition-colors duration-150"
                      onClick={() => setIsServicesOpenDesktop(false)}
                    >Make Ready</Link>
                  </div>
                </div>
              </li>
              {navLinks.slice(1).map(link => (
                link.label !== 'Inicio' && (
                  <li key={link.to}>
                    <Link to={link.to} className="text-neutroOscuro hover:text-primario font-medium transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
