import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  { key: "full-paints", label: "Full Paints" },
  { key: "color-change", label: "Color Change" },
  { key: "cabinet-painting", label: "Cabinet Painting" },
  { key: "door-painting", label: "Door Painting" },
  { key: "paint-accent-walls", label: "Paint Accent Walls" },
  { key: "paint-ceilings", label: "Paint Ceilings" },
  { key: "paint-garages", label: "Paint Garages" },
  { key: "baseboard-trim-painting", label: "Baseboard/Trim Painting" },
  { key: "tbt-repairs", label: "T.B.T. Repairs" },
  { key: "kilz-painting", label: "KILZ Painting" },
  { key: "interior-painting", label: "Interior Painting" },
  { key: "apartment-painters", label: "Apartment Painters" },
  { key: "home-painters", label: "Home Painters" },
];

// Cambia las rutas por tus videos reales
const videos = {
  "full-paints": "/videos/full-painting.mp4",
  "color-change": "/videos/color-change.mp4",
  "cabinet-painting": "/videos/cabinet-painting.mp4",
  "door-painting": "/videos/door-painting.mp4",
  "paint-accent-walls": "/videos/paint-accent-walls.mp4",
  "paint-ceilings": "/videos/paint-ceilings.mp4",
  "paint-garages": "/videos/paint-garages.mp4",
  "baseboard-trim-painting": "/videos/baseboard.mp4",
  "tbt-repairs": "/videos/tbt-repairs.mp4",
  "kilz-painting": "/videos/kilz-painting.mp4",
  "interior-painting": "/videos/interior-painting.mp4",
  "apartment-painters": "/videos/apartment-painters.mp4",
  "home-painters": "/videos/home-painters.mp4",
};

const PaintTexturing = () => {
  const [selected, setSelected] = useState(null);
  const videoUrl = videos[selected];
  const videoRef = useRef(null);
  const h3Ref = useRef(null);
  const h4Ref = useRef(null);

  const handleSelect = (key) => {
    setSelected(key);
    setTimeout(() => {
      if (h4Ref.current) {
        h4Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [videoUrl]);

  return (
    <div className="lg:flex gap-8">
      <aside className="mb-6 lg:mb-0 lg:w-64">
        <h3 className="text-xl font-bold text-primario mb-4" tabIndex={-1} ref={h3Ref}>Paint & Texturing</h3>
        <nav className="flex flex-col gap-2">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => handleSelect(item.key)}
              className={`px-4 py-2 rounded transition-colors font-medium text-left text-base focus:outline-none focus:ring-2 focus:ring-primario ${
                selected === item.key
                  ? "bg-primario text-fondo shadow"
                  : "text-neutroOscuro hover:bg-acento2 hover:text-primario"
              }`}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <section className="flex-1 min-w-0 flex flex-col items-center">
        {selected && (
          <>
            <h4 ref={h4Ref} className="text-2xl font-bold text-primario mb-4">{items.find(i => i.key === selected)?.label}</h4>
            {videoUrl ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full flex justify-center"
              >
                <div
                  className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-black p-6"
                  style={{
                    background: "linear-gradient(135deg, #e3f0ff 0%, #fafdff 100%)",
                    transition: "all 0.4s ease",
                  }}
                >
                  <motion.video
                    ref={videoRef}
                    src={videoUrl}
                    controls
                    className="w-full"
                    style={{ height: "31.25rem", maxHeight: "80vh" }}
                    whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                    transition={{ duration: 0.4, ease: "ease" }}
                  >
                    Tu navegador no soporta la reproducción de video.
                  </motion.video>
                </div>
              </motion.div>
            ) : (
              <div className="text-neutroOscuro">Agrega la ruta del video para este servicio en el objeto <b>videos</b>.</div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default PaintTexturing; 