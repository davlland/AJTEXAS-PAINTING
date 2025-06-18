import React from "react";

function ColorScheme({ colors = [] }) {
  if (!colors.length) {
    return <p className="text-neutroOscuro">No hay colores generados aún.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {colors.map((color, idx) => (
        <div
          key={color.hex.value || idx}
          className="flex flex-col items-center bg-white rounded-lg shadow p-4"
        >
          <div
            className="w-16 h-16 rounded mb-2 border"
            style={{ backgroundColor: color.hex.value }}
          />
          <span className="font-mono text-sm text-primario">{color.hex.value}</span>
        </div>
      ))}
    </div>
  );
}

export default ColorScheme;
