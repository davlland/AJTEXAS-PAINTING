import React, { useState, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const closeTimeout = useRef();

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setIsServicesOpen(false), 220);
  };

  return (
    <>
      <Header />
      <main className="container py-8 min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout; 