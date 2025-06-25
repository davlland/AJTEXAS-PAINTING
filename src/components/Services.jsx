import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const h2Ref = React.useRef(null);

  React.useEffect(() => {
    if (location.state && location.state.scrollToServicios && h2Ref.current) {
      h2Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      h2Ref.current.focus();
      // Limpia el estado para evitar scrolls futuros no deseados
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <section id="servicios" className="py-12 bg-fondo flex justify-center">
      <div className="w-full max-w-7xl rounded-2xl shadow-2xl bg-white/80 border border-acento2 p-12">
        <h2 className="text-3xl font-bold text-primario mb-6" tabIndex={-1} ref={h2Ref}>
          Servicios
        </h2>
        {/* Menú eliminado según solicitud */}
        <Outlet />
      </div>
    </section>
  );
};

export default Services;
