/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primario: '#2C3E50', // azul grisáceo oscuro
        secundario: '#2980B9', // azul medio
        acento1: '#F39C12', // amarillo mostaza
        acento2: '#ECF0F1', // gris muy claro
        neutroOscuro: '#7F8C8D', // gris cálido
        fondo: '#FFFFFF', // blanco
      },
    },
  },
  plugins: [],
} 