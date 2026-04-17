'use client';

import {useEffect, useRef, useState} from 'react';

interface DotPatternBackgroundProps {
  spacing?: number;
  dotRadius?: number;
  glowRadius?: number;
  baseColorDark?: string;
  baseColorLight?: string;
  glowColorDark?: string;
  glowColorLight?: string;
  enableVignette?: boolean;
}

interface Rgb {
  r: number;
  g: number;
  b: number;
}

function parseHexColor(hex: string): Rgb {
  const value = hex.replace('#', '');
  const full = value.length === 3
    ? value.split('').map((c) => c + c).join('')
    : value;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}

export default function DotPatternBackground({
  spacing = 24,
  dotRadius = 1,
  glowRadius = 220,
  baseColorDark = '#404040',
  baseColorLight = '#d4d4d4',
  glowColorDark = '#818cf8',
  glowColorLight = '#4f46e5',
  enableVignette = true,
}: DotPatternBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{x: number; y: number}>({x: -9999, y: -9999});
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDarkMode(root.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, {attributes: true, attributeFilter: ['class']});
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const baseDark = parseHexColor(baseColorDark);
    const baseLight = parseHexColor(baseColorLight);
    const glowDark = parseHexColor(glowColorDark);
    const glowLight = parseHexColor(glowColorLight);
    const reducedMotionMql = window.matchMedia('(prefers-reduced-motion: reduce)');

    let cssWidth = 0;
    let cssHeight = 0;
    let animationFrameId = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      cssWidth = window.innerWidth;
      cssHeight = window.innerHeight;
      canvas.width = Math.floor(cssWidth * dpr);
      canvas.height = Math.floor(cssHeight * dpr);
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const base = isDarkMode ? baseDark : baseLight;
      const glow = isDarkMode ? glowDark : glowLight;
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      const cols = Math.floor(cssWidth / spacing);
      const rows = Math.floor(cssHeight / spacing);
      const offsetX = (cssWidth - (cols - 1) * spacing) / 2;
      const offsetY = (cssHeight - (rows - 1) * spacing) / 2;
      const mouse = mouseRef.current;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offsetX + c * spacing;
          const y = offsetY + r * spacing;
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const t = Math.min(1, dist / glowRadius);
          const eased = 1 - Math.exp(-3.5 * t * t);
          const rr = Math.round(glow.r + (base.r - glow.r) * eased);
          const gg = Math.round(glow.g + (base.g - glow.g) * eased);
          const bb = Math.round(glow.b + (base.b - glow.b) * eased);
          const radius = dotRadius + (1 - eased) * dotRadius * 3.5;
          ctx.fillStyle = `rgb(${rr},${gg},${bb})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const bloomRadius = glowRadius * 0.6;
      if (mouse.x > -1000 && mouse.y > -1000) {
        ctx.globalCompositeOperation = 'lighter';
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const x = offsetX + c * spacing;
            const y = offsetY + r * spacing;
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist >= bloomRadius) continue;
            const intensity = 1 - dist / bloomRadius;
            const alpha = intensity * intensity * 0.35;
            ctx.fillStyle = `rgba(${glow.r},${glow.g},${glow.b},${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, dotRadius * 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.globalCompositeOperation = 'source-over';
      }
    };

    const frame = () => {
      draw();
      if (!reducedMotionMql.matches) {
        animationFrameId = window.requestAnimationFrame(frame);
      }
    };

    const startLoop = () => {
      window.cancelAnimationFrame(animationFrameId);
      if (reducedMotionMql.matches) {
        mouseRef.current = {x: -9999, y: -9999};
        draw();
      } else {
        animationFrameId = window.requestAnimationFrame(frame);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouseRef.current = {x: event.clientX, y: event.clientY};
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) mouseRef.current = {x: touch.clientX, y: touch.clientY};
    };

    const handlePointerLeave = () => {
      mouseRef.current = {x: -9999, y: -9999};
    };

    resize();
    startLoop();

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove, {passive: true});
    window.addEventListener('touchmove', handleTouchMove, {passive: true});
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('blur', handlePointerLeave);
    reducedMotionMql.addEventListener('change', startLoop);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
      reducedMotionMql.removeEventListener('change', startLoop);
    };
  }, [
    spacing,
    dotRadius,
    glowRadius,
    baseColorDark,
    baseColorLight,
    glowColorDark,
    glowColorLight,
    isDarkMode,
  ]);

  return (
    <div className="bg-canvas">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full"/>
      {enableVignette && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(10,10,10,0.35) 100%)',
          }}
        />
      )}
    </div>
  );
}
