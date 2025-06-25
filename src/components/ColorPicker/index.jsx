import React, { useState, useEffect } from "react";
import axios from "axios";
import ColorInfo from "./ColorInfo";
import ColorScheme from "./ColorScheme";
import ColorControls from "./ColorControls";

const ColorPicker = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [colorInfo, setColorInfo] = useState(null);
  const [scheme, setScheme] = useState(null);

  const getColorInfo = async (hex) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://www.thecolorapi.com/id`, {
        params: { hex, format: "json" },
      });
      setColorInfo(response.data);
    } catch (err) {
      setError("Error al obtener información del color");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getColorScheme = async ({ color, mode, count }) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://www.thecolorapi.com/scheme`, {
        params: { hex: color, mode, count, format: "json" },
      });
      setScheme(response.data);
      if (response.data.colors && response.data.colors.length > 0) {
        setColorInfo(response.data.colors[0]);
      }
    } catch (err) {
      setError("Error al generar el esquema de colores");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Selector de Colores
      </h1>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Controles</h2>
          <ColorControls onSubmit={getColorScheme} />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Información del Color</h2>
          {loading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
          ) : (
            colorInfo && <ColorInfo color={colorInfo} schemeColors={scheme?.colors || []} />
          )}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Esquema de Colores</h2>
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : (
          scheme && <ColorScheme colors={scheme.colors} />
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
