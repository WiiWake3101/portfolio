'use client';
import { useEffect, useRef, useState } from 'react';

export default function CyberpunkCursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const trailsRef = useRef([]);
  const pos = useRef({ x: 0, y: 0 });
  const smoothPos = useRef({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const historyRef = useRef([]);

  useEffect(() => {
    const TRAIL_LENGTH = 8;

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Track cursor history for trails
      historyRef.current.push({ x: e.clientX, y: e.clientY });
      if (historyRef.current.length > TRAIL_LENGTH) historyRef.current.shift();

      // Update trail dots
      trailsRef.current.forEach((el, i) => {
        const hist = historyRef.current[historyRef.current.length - 1 - i];
        if (el && hist) {
          el.style.left = hist.x + 'px';
          el.style.top = hist.y + 'px';
          el.style.opacity = ((TRAIL_LENGTH - i) / TRAIL_LENGTH * 0.35).toString();
          const size = (TRAIL_LENGTH - i) * 1.2;
          el.style.width = size + 'px';
          el.style.height = size + 'px';
        }
      });

      // Check pointer
      const target = e.target;
      const isPtr = window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button');
      setIsPointer(!!isPtr);
    };

    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    let af;
    const animate = () => {
      smoothPos.current.x += (pos.current.x - smoothPos.current.x) * 0.12;
      smoothPos.current.y += (pos.current.y - smoothPos.current.y) * 0.12;

      if (outerRef.current) {
        outerRef.current.style.left = pos.current.x + 'px';
        outerRef.current.style.top = pos.current.y + 'px';
      }
      if (innerRef.current) {
        innerRef.current.style.left = smoothPos.current.x + 'px';
        innerRef.current.style.top = smoothPos.current.y + 'px';
      }
      af = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      cancelAnimationFrame(af);
    };
  }, []);

  const outerSize = isClicking ? 28 : isPointer ? 40 : 32;
  const outerColor = isPointer ? '#ff00aa' : '#00fff0';

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          ref={el => trailsRef.current[i] = el}
          className="fixed pointer-events-none z-[9997] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background: '#00fff0',
            transition: 'width 0.1s, height 0.1s',
            width: 4,
            height: 4,
          }}
        />
      ))}

      {/* Outer reticle ring */}
      <div
        ref={outerRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: outerSize,
          height: outerSize,
          transition: 'width 0.15s, height 0.15s',
        }}
      >
        {/* Four corner brackets */}
        {[
          { top: 0, left: 0, borderWidth: '2px 0 0 2px' },
          { top: 0, right: 0, borderWidth: '2px 2px 0 0' },
          { bottom: 0, left: 0, borderWidth: '0 0 2px 2px' },
          { bottom: 0, right: 0, borderWidth: '0 2px 2px 0' },
        ].map((style, i) => (
          <div
            key={i}
            className="absolute w-2 h-2"
            style={{
              ...style,
              borderStyle: 'solid',
              borderColor: outerColor,
              filter: `drop-shadow(0 0 4px ${outerColor})`,
              transition: 'border-color 0.2s',
            }}
          />
        ))}
        {/* Center crosshair */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-1 h-1 rounded-full"
            style={{
              background: outerColor,
              boxShadow: `0 0 6px ${outerColor}, 0 0 12px ${outerColor}`,
              transition: 'background 0.2s',
            }}
          />
        </div>
      </div>

      {/* Inner smooth follower */}
      <div
        ref={innerRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
        style={{
          background: '#fff',
          boxShadow: '0 0 8px #00fff0',
        }}
      />
    </>
  );
}