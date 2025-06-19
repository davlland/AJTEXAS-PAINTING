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
import FullPaints from "./components/Services/FullPaints";
import ColorChange from "./components/Services/ColorChange";
import CabinetPainting from "./components/Services/CabinetPainting";
import DoorPainting from "./components/Services/DoorPainting";
import PaintAccentWalls from "./components/Services/PaintAccentWalls";
import PaintCeilings from "./components/Services/PaintCeilings";
import PaintGarages from "./components/Services/PaintGarages";
import BaseboardTrimPainting from "./components/Services/BaseboardTrimPainting";
import TBTRepairs from "./components/Services/TBTRepairs";
import KILZPainting from "./components/Services/KILZPainting";
import InteriorPainting from "./components/Services/InteriorPainting";
import ApartmentPainters from "./components/Services/ApartmentPainters";
import HomePainters from "./components/Services/HomePainters";
// import Careers from "./components/Careers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Hero />} />
          <Route path="servicios" element={<Services />}>
            <Route path="paint-texturing" element={<PaintTexturing />}>
              <Route path="full-paints" element={<FullPaints />} />
              <Route path="color-change" element={<ColorChange />} />
              <Route path="cabinet-painting" element={<CabinetPainting />} />
              <Route path="door-painting" element={<DoorPainting />} />
              <Route path="paint-accent-walls" element={<PaintAccentWalls />} />
              <Route path="paint-ceilings" element={<PaintCeilings />} />
              <Route path="paint-garages" element={<PaintGarages />} />
              <Route path="baseboard-trim-painting" element={<BaseboardTrimPainting />} />
              <Route path="tbt-repairs" element={<TBTRepairs />} />
              <Route path="kilz-painting" element={<KILZPainting />} />
              <Route path="interior-painting" element={<InteriorPainting />} />
              <Route path="apartment-painters" element={<ApartmentPainters />} />
              <Route path="home-painters" element={<HomePainters />} />
            </Route>
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
