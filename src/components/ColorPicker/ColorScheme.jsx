import React from "react";

function ColorScheme({ colors = [] }) {
  if (!colors.length) {
    return <p className="text-neutroOscuro">No hay colores generados aún.</p>;
  }

  // Si hay 10 colores, fuerza 5 columnas en todos los tamaños
  const gridClass =
    colors.length === 10
      ? "grid grid-cols-5 gap-4"
      : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4";

  return (
    <div className={gridClass}>
      {colors.map((color, idx) => (
        <div
          key={color.hex.value || idx}
          className="flex flex-col items-center bg-white rounded-lg shadow p-4"
        >
          <div
            className="w-16 h-16 rounded mb-2 border flex items-center justify-center relative"
            style={{ backgroundColor: color.hex.value }}
          >
            <span
              className={
                "absolute top-1 left-1 w-5 text-center text-xs font-bold text-gray-500 select-none" +
                (idx + 1 === 10 ? " ml-[-1px]" : "")
              }
            >
              {String(idx + 1).padStart(2, '0')}
            </span>
          </div>
          <span className="font-mono text-sm text-primario">{color.hex.value}</span>
        </div>
      ))}
    </div>
  );
}

export default ColorScheme;
