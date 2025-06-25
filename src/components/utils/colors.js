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
  hex = hex.replace("#", "");
  if (hex.length === 3)
    hex = hex
      .split("")
      .map((x) => x + x)
      .join("");
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

export { getClosestColorName };
