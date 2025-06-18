import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primario text-acento2 border-t-4 border-acento1 py-6 text-center">
    <p className="text-sm">&copy; 2025 AJTEXAS PAINTING. Todos los derechos reservados. <NavLink to="/empleo" className="ml-4 underline hover:text-acento1">Empleo</NavLink></p>
  </footer>
);

export default Footer;