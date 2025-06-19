import React, { useState } from "react";
import { motion } from "framer-motion";

const items = [
  { key: "appliance-installations", label: "Appliance Installations" },
  { key: "appliances-checking", label: "Appliances Checking" },
  { key: "basic-make-ready", label: "Basic Make Ready" },
  { key: "make-ready-upgrades", label: "Make Ready Upgrades" },
  { key: "re-caulking", label: "Re-Caulking" },
  { key: "furniture-trash-outs", label: "Furniture Trash Outs" },
];

// Cambia las rutas por tus videos reales
const videos = {
  "appliance-installations": "/videos/appliance-installations.mp4",
  "appliances-checking": "/videos/appliances-checking.mp4",
  "basic-make-ready": "/videos/basic-make-ready.mp4",
  "make-ready-upgrades": "/videos/make-ready-upgrades.mp4",
  "re-caulking": "/videos/re-caulking.mp4",
  "furniture-trash-outs": "/videos/furniture.mp4",
};

const MakeReady = () => {
  const [selected, setSelected] = useState(items[0].key);
  const videoUrl = videos[selected];

  return (
    <div className="lg:flex gap-8">
      <aside className="mb-6 lg:mb-0 lg:w-64">
        <h3 className="text-xl font-bold text-primario mb-4">Make Ready</h3>
        <nav className="flex flex-col gap-2">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => setSelected(item.key)}
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
        <h4 className="text-2xl font-bold text-primario mb-4">{items.find(i => i.key === selected)?.label}</h4>
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
                key={videoUrl}
                src={videoUrl}
                controls
                className="w-full"
                style={{ height: "31.25rem", maxHeight: "80vh" }} // 400px * 1.3 = 520px aprox
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
      </section>
    </div>
  );
};

export default MakeReady; 