import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import ColorPage from "./components/ColorPage.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Gallery />
              <About />
            </>
          }
        />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/trabaja" element={<Careers />} />
        <Route path="/color-picker" element={<ColorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
