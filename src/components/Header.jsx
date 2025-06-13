import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="site-header">
    <div className="container">
      <h1 className="logo">AJ TEXAS PAINTING</h1>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/trabaja">Trabaja con Nosotros</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;