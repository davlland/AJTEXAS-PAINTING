import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import PreHeader from "./PreHeader";

const Layout = () => {
  const [preHeaderReduced, setPreHeaderReduced] = React.useState(false);
  const [preHeaderHeight, setPreHeaderHeight] = React.useState(128);
  const [headerHeight, setHeaderHeight] = React.useState(64);

  React.useEffect(() => {
    // Detecta la altura real del header después de renderizar
    const header = document.querySelector('.header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, [preHeaderReduced, preHeaderHeight]);

  return (
    <>
      <PreHeader setReduced={setPreHeaderReduced} setHeight={setPreHeaderHeight} />
      <Header preHeaderReduced={preHeaderReduced} preHeaderHeight={preHeaderHeight} />
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