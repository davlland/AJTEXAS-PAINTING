import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import PreHeader from "./PreHeader";

const Layout = () => {
  const [preHeaderReduced, setPreHeaderReduced] = React.useState(false);
  const [preHeaderHeight, setPreHeaderHeight] = React.useState(96);
  const [headerHeight, setHeaderHeight] = React.useState(64);

  // Estado de reducción sincronizado para ambos
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    // Detecta la altura real del header después de renderizar
    const header = document.querySelector('.header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, [preHeaderReduced, preHeaderHeight]);

  // Sincroniza la reducción con scroll para ambos
  React.useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY > 20 && !reduced) {
            setReduced(true);
          } else if (scrollY <= 20 && reduced) {
            setReduced(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduced]);

  // Calcula la altura real del preheader según el estado reducido
  const realPreHeaderHeight = reduced ? preHeaderHeight / 2 : preHeaderHeight;

  return (
    <>
      <PreHeader setReduced={setPreHeaderReduced} setHeight={setPreHeaderHeight} reduced={reduced} />
      <Header preHeaderReduced={preHeaderReduced} preHeaderHeight={realPreHeaderHeight} reduced={reduced} />
      <main
        className="container py-8 min-h-[60vh]"
        style={{ paddingTop: preHeaderHeight + headerHeight }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout; 