import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PaintTexturing from "./components/Services/PaintTexturing";
import MakeReady from "./components/Services/MakeReady";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import ColorPage from "./components/ColorPage";
import CareersForm from "./components/CareersForm";
// import Careers from "./components/Careers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Hero />} />
          <Route path="servicios" element={<Services />}>
            <Route path="paint-texturing" element={<PaintTexturing />} />
            <Route path="make-ready" element={<MakeReady />} />
          </Route>
          <Route path="galeria" element={<Gallery />} />
          <Route path="sobre-nosotros" element={<About />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="trabaja" element={<CareersForm />} />
          <Route path="color-picker" element={<ColorPage />} />
          {/* <Route path="empleo" element={<CareersForm />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
