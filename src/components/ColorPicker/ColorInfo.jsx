import React from "react";
// Diccionario reducido de nombres web estándar (puedes ampliarlo a 150-200 si lo deseas)
const COLOR_NAMES = [
  { name: "Negro", hex: "#000000" },
  { name: "Blanco", hex: "#FFFFFF" },
  { name: "Rojo", hex: "#FF0000" },
  { name: "Lima", hex: "#00FF00" },
  { name: "Azul", hex: "#0000FF" },
  { name: "Amarillo", hex: "#FFFF00" },
  { name: "Cian", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Gris", hex: "#808080" },
  { name: "Naranja", hex: "#FFA500" },
  { name: "Marrón", hex: "#A52A2A" },
  { name: "Verde", hex: "#008000" },
  { name: "Violeta", hex: "#800080" },
  { name: "Rosa", hex: "#FFC0CB" },
  { name: "Oro", hex: "#FFD700" },
  { name: "Plata", hex: "#C0C0C0" },
  { name: "Azul marino", hex: "#000080" },
  { name: "Verde oliva", hex: "#808000" },
  { name: "Turquesa", hex: "#40E0D0" },
  { name: "Coral", hex: "#FF7F50" },
  // ... puedes ampliar la lista ...
];

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
  const num = parseInt(hex, 16);
  return [num >> 16, (num >> 8) & 0xff, num & 0xff];
}

function colorDistance(rgb1, rgb2) {
  return Math.sqrt(
    Math.pow(rgb1[0] - rgb2[0], 2) +
    Math.pow(rgb1[1] - rgb2[1], 2) +
    Math.pow(rgb1[2] - rgb2[2], 2)
  );
}

function getClosestColorName(hex) {
  const rgb = hexToRgb(hex);
  let minDist = Infinity;
  let closest = null;
  for (const c of COLOR_NAMES) {
    const dist = colorDistance(rgb, hexToRgb(c.hex));
    if (dist < minDist) {
      minDist = dist;
      closest = c.name;
    }
  }
  return closest || "—";
}

const ColorInfo = ({ color, schemeColors }) => {
  if (!color) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <div
          className="w-20 h-20 rounded-lg shadow-inner"
          style={{ backgroundColor: `#${color.hex.clean}` }}
        />
        <div>
          <h3 className="font-bold text-lg">{color.name.value}</h3>
          <p className="text-sm text-gray-500">
            {color.name.exact_match_name ? "Exact Match" : "Closest Match"}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {["hex", "rgb", "hsl", "cmyk"].map((format) => (
          <div key={format} className="flex items-center justify-between">
            <span className="uppercase text-sm font-medium">{format}:</span>
            <button
              onClick={() => navigator.clipboard.writeText(color[format].value)}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
            >
              {color[format].value}
            </button>
          </div>
        ))}
      </div>

      {schemeColors && schemeColors.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-base mb-2">Nombre aproximado</h4>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-800">
            {schemeColors.map((c, i) => {
              const hex = c.hex?.value || c.hex?.clean ? `#${c.hex.clean}` : undefined;
              return (
                <li key={hex || i}>
                  <span className="inline-block align-middle mr-2" style={{ width: 18, height: 18, background: hex, borderRadius: 4, border: '1px solid #ccc' }}></span>
                  {hex ? getClosestColorName(hex) : '—'} <span className="text-gray-500">({hex || '—'})</span>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default ColorInfo;
