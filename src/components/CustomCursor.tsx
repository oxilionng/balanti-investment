/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect mobile / touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }

    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseMoveEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    addEventListeners();

    // Setup interactive hover states for standard links/buttons
    const handleLinkHover = () => {
      const interactives = document.querySelectorAll('button, a, input, textarea, select, [role="button"]');
      
      const onLinkEnter = () => setLinkHovered(true);
      const onLinkLeave = () => setLinkHovered(false);

      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onLinkEnter);
        el.addEventListener('mouseleave', onLinkLeave);
      });

      return () => {
        interactives.forEach((el) => {
          el.removeEventListener('mouseenter', onLinkEnter);
          el.removeEventListener('mouseleave', onLinkLeave);
        });
      };
    };

    // Run query selector binder after initial delay
    const timer = setTimeout(handleLinkHover, 1000);

    return () => {
      removeEventListeners();
      clearTimeout(timer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={ringRef}
      className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-gold pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out ${
        clicked ? 'scale-75 bg-brand-gold/10' : ''
      } ${
        linkHovered ? 'scale-150 border-white bg-white/5' : ''
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

// Simple helper types
interface MouseMoveEvent {
  clientX: number;
  clientY: number;
}
