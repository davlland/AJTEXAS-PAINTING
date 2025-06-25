import React from "react";
import { getClosestColorName } from "../utils/colors";






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
