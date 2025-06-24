import React, { useEffect, useRef, useState } from 'react';
import './PreHeader.css';

const PHONE = '+34 600 123 456';

export default function PreHeader({ setReduced, setHeight }) {
  const preHeaderRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(32);
  const [preHeaderHeight, setPreHeaderHeight] = useState(128);
  const [reduced, setReducedState] = useState(false);

  useEffect(() => {
    function updateHeight() {
      const header = document.querySelector('.header');
      if (header) {
        const h = header.offsetHeight;
        setHeaderHeight(h);
        setPreHeaderHeight(h * 3.9);
        if (preHeaderRef.current) {
          preHeaderRef.current.style.setProperty('--header-height', `${h}px`);
          preHeaderRef.current.style.setProperty('--preheader-height', `${h * 3.9}px`);
        }
        if (setHeight) setHeight(h * 3.9);
      }
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [setHeight]);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      if (scrollY > preHeaderHeight && !reduced) {
        setReducedState(true);
        if (setReduced) setReduced(true);
      } else if (scrollY <= preHeaderHeight && reduced) {
        setReducedState(false);
        if (setReduced) setReduced(false);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [preHeaderHeight, reduced, setReduced]);

  const dynamicHeight = reduced ? preHeaderHeight / 2 : preHeaderHeight;
  const scale = reduced ? 0.5 : 1;
  const logoHeight = Math.max(Math.min(headerHeight * 5 * scale, 220 * scale), 32);
  const phoneSize = reduced ? 18 : 28;

  return (
    <div
      className="preheader sticky"
      ref={preHeaderRef}
      style={{ height: dynamicHeight, top: 0, zIndex: 60, transition: 'height 0.3s cubic-bezier(0.7,0,0.3,1)' }}
    >
      <div className="preheader-container">
        <img src="/images/logo.png" alt="Logo AJ Texas Painting" className="preheader-logo" style={{ height: logoHeight, maxHeight: 220, transition: 'height 0.3s cubic-bezier(0.7,0,0.3,1)' }} />
        <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="preheader-phone preheader-phone--small" style={{ fontSize: phoneSize, transition: 'font-size 0.3s cubic-bezier(0.7,0,0.3,1)' }}>
          Llámanos: {PHONE}
        </a>
      </div>
    </div>
  );
} 