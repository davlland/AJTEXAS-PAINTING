import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorInfo = ({ color }) => {
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
            {color.name.exact_match_name ? 'Exact Match' : 'Closest Match'}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {['hex', 'rgb', 'hsl', 'cmyk'].map((format) => (
          <div key={format} className="flex items-center justify-between">
            <span className="uppercase text-sm font-medium">{format}:</span>
            <CopyToClipboard text={color[format].value}>
              <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors">
                {color[format].value}
              </button>
            </CopyToClipboard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorInfo;
