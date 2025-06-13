import React from 'react';

/**
 * Reusable Button component
 * @param {{ children: React.ReactNode, onClick?: () => void, className?: string, type?: 'button'|'submit' }} props
 */
const Button = ({ children, onClick, className = '', type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ${className}`}
  >
    {children}
  </button>
);

export default Button;
