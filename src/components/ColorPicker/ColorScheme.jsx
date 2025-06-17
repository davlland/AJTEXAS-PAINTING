import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorScheme = ({ colors }) => {
  if (!colors?.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {colors.map((color, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div 
            className="h-32 w-full"
            style={{ backgroundColor: `#${color.hex.clean}` }}
          />
          <div className="p-4 space-y-2">
            <h4 className="font-medium text-sm">{color.name.value}</h4>
            <div className="space-y-1">
              {['hex', 'rgb', 'hsl'].map((format) => (
                <CopyToClipboard key={format} text={color[format].value}>
                  <button className="w-full px-2 py-1 text-xs bg-gray-50 hover:bg-gray-100 rounded transition-colors">
                    {color[format].value}
                  </button>
                </CopyToClipboard>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorScheme;
