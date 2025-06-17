import React, { useState } from 'react';

const ColorControls = ({ onSubmit, modes = ['monochrome', 'analogic', 'complement', 'triad', 'quad'] }) => {
  const [color, setColor] = useState('#1E4D8C');
  const [mode, setMode] = useState('analogic');
  const [count, setCount] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ color: color.replace('#', ''), mode, count });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Color Base
        </label>
        <div className="flex space-x-2">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="h-10 w-20"
          />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-md"
            pattern="^#[0-9A-Fa-f]{6}$"
            placeholder="#HEXCODE"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Modo
        </label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        >
          {modes.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Número de colores
        </label>
        <input
          type="number"
          min="2"
          max="10"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Generar Esquema
      </button>
    </form>
  );
};

export default ColorControls;
