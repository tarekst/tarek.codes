'use client';
import { useRef, useEffect, useState } from 'react';

interface MovingLine {
  orientation: 'vertical' | 'horizontal';
  position: number;
  startSide: 'left' | 'right' | 'top' | 'bottom';
  progress: number;
  speed: number;
  length: number;
}

interface FloatingIcon {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  size: number;
}

interface TunnelToken {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
  text: string;
  color: string;
}

const ICON_LABELS = ['MCP', 'LLM', 'AI-Agent', 'RAG', 'MCP', 'LLM', 'AI-Agent', 'RAG'];
const CONNECTION_DISTANCE = 500;
const MOBILE_BREAKPOINT = 768;
const ICON_SIZE = 31;

const TOKEN_TEXTS = [
  'hello', 'think', 'query', 'embed', 'token', 'parse', 'model',
  'data', 'learn', 'train', 'prompt', 'agent', 'tool', 'fetch',
  'call', 'plan', 'search', 'stream', 'chunk', 'encode',
];
const TOKEN_COLORS = [
  'rgba(255,120,120,', // red
  'rgba(120,180,255,', // blue
  'rgba(120,220,150,', // green
  'rgba(180,130,255,', // purple
  'rgba(255,180,80,',  // orange
  'rgba(255,220,100,', // yellow
  'rgba(140,220,255,', // cyan
];

function drawRobotIcon(ctx: CanvasRenderingContext2D, x: number, y: number, s: number) {
  // AI-Agent: Robot head
  const w = s * 0.9, h = s * 0.7;
  ctx.beginPath();
  ctx.roundRect(x - w / 2, y - h / 2, w, h, 2);
  ctx.stroke();
  // Eyes
  const eyeR = s * 0.1;
  ctx.beginPath();
  ctx.arc(x - w * 0.22, y - h * 0.05, eyeR, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x + w * 0.22, y - h * 0.05, eyeR, 0, Math.PI * 2);
  ctx.fill();
  // Antenna
  ctx.beginPath();
  ctx.moveTo(x, y - h / 2);
  ctx.lineTo(x, y - h / 2 - s * 0.3);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, y - h / 2 - s * 0.3, s * 0.08, 0, Math.PI * 2);
  ctx.fill();
  // Mouth
  ctx.beginPath();
  ctx.moveTo(x - w * 0.2, y + h * 0.2);
  ctx.lineTo(x + w * 0.2, y + h * 0.2);
  ctx.stroke();
}

function drawChatIcon(ctx: CanvasRenderingContext2D, x: number, y: number, s: number) {
  // LLM: Chat bubble
  const w = s * 1.0, h = s * 0.75;
  ctx.beginPath();
  ctx.roundRect(x - w / 2, y - h / 2, w, h, 3);
  ctx.stroke();
  // Tail
  ctx.beginPath();
  ctx.moveTo(x - w * 0.15, y + h / 2);
  ctx.lineTo(x - w * 0.35, y + h / 2 + s * 0.25);
  ctx.lineTo(x + w * 0.1, y + h / 2);
  ctx.stroke();
  // Dots (typing indicator)
  const dotR = s * 0.07;
  const dotY = y;
  ctx.beginPath();
  ctx.arc(x - s * 0.2, dotY, dotR, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, dotY, dotR, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x + s * 0.2, dotY, dotR, 0, Math.PI * 2);
  ctx.fill();
}

function drawMcpIcon(ctx: CanvasRenderingContext2D, x: number, y: number, s: number) {
  // Official MCP logo - 3 interlocking curved strokes
  // Original viewBox: 0 0 180 180, scaled to fit size s
  const sc = s / 180;
  const ox = x - s / 2;
  const oy = y - s / 2;
  const savedWidth = ctx.lineWidth;
  const savedCap = ctx.lineCap;
  ctx.lineWidth = Math.max(1, 12 * sc);
  ctx.lineCap = 'round';

  // Stroke 1: top-left diagonal with curve
  ctx.beginPath();
  ctx.moveTo(ox + 18 * sc, oy + 85 * sc);
  ctx.lineTo(ox + 86 * sc, oy + 17 * sc);
  ctx.quadraticCurveTo(ox + 120 * sc, oy + 7 * sc, ox + 120 * sc, oy + 34 * sc);
  ctx.lineTo(ox + 69 * sc, oy + 102 * sc);
  ctx.stroke();

  // Stroke 2: middle diagonal
  ctx.beginPath();
  ctx.moveTo(ox + 103 * sc, oy + 34 * sc);
  ctx.lineTo(ox + 53 * sc, oy + 84 * sc);
  ctx.quadraticCurveTo(ox + 43 * sc, oy + 118 * sc, ox + 70 * sc, oy + 118 * sc);
  ctx.lineTo(ox + 137 * sc, oy + 68 * sc);
  ctx.stroke();

  // Stroke 3: bottom-right diagonal with tail
  ctx.beginPath();
  ctx.moveTo(ox + 69 * sc, oy + 101 * sc);
  ctx.lineTo(ox + 120 * sc, oy + 51 * sc);
  ctx.quadraticCurveTo(ox + 154 * sc, oy + 41 * sc, ox + 154 * sc, oy + 68 * sc);
  ctx.lineTo(ox + 93 * sc, oy + 147 * sc);
  ctx.quadraticCurveTo(ox + 88 * sc, oy + 158 * sc, ox + 93 * sc, oy + 158 * sc);
  ctx.lineTo(ox + 105 * sc, oy + 170 * sc);
  ctx.stroke();

  ctx.lineWidth = savedWidth;
  ctx.lineCap = savedCap;
}

function drawDatabaseIcon(ctx: CanvasRenderingContext2D, x: number, y: number, s: number) {
  // RAG: Database (stacked ellipses)
  const w = s * 0.45, h = s * 0.15;
  const totalH = s * 0.7;
  const topY = y - totalH / 2;
  // Top ellipse
  ctx.beginPath();
  ctx.ellipse(x, topY, w, h, 0, 0, Math.PI * 2);
  ctx.stroke();
  // Sides
  ctx.beginPath();
  ctx.moveTo(x - w, topY);
  ctx.lineTo(x - w, topY + totalH);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + w, topY);
  ctx.lineTo(x + w, topY + totalH);
  ctx.stroke();
  // Bottom ellipse
  ctx.beginPath();
  ctx.ellipse(x, topY + totalH, w, h, 0, 0, Math.PI);
  ctx.stroke();
  // Middle lines
  ctx.beginPath();
  ctx.ellipse(x, topY + totalH * 0.35, w, h, 0, 0, Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(x, topY + totalH * 0.65, w, h, 0, 0, Math.PI);
  ctx.stroke();
}

function drawIconForLabel(ctx: CanvasRenderingContext2D, label: string, x: number, y: number, s: number) {
  switch (label) {
    case 'AI-Agent': drawRobotIcon(ctx, x, y, s); break;
    case 'LLM': drawChatIcon(ctx, x, y, s); break;
    case 'MCP': drawMcpIcon(ctx, x, y, s); break;
    case 'RAG': drawDatabaseIcon(ctx, x, y, s); break;
  }
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const linesRef = useRef<MovingLine[]>([]);
  const iconsRef = useRef<FloatingIcon[]>([]);
  const tokensRef = useRef<TunnelToken[]>([]);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const spawnLine = (width: number, height: number, cellSize: number) => {
    const orientation = Math.random() < 0.5 ? 'vertical' : 'horizontal';
    let position = 0;
    let startSide: 'left' | 'right' | 'top' | 'bottom';
    let progress = 0;

    if (orientation === 'vertical') {
      position = Math.floor(Math.random() * (width / cellSize)) * cellSize;
      startSide = Math.random() < 0.5 ? 'top' : 'bottom';
      progress = startSide === 'top' ? -cellSize : height + cellSize;
    } else {
      position = Math.floor(Math.random() * (height / cellSize)) * cellSize;
      startSide = Math.random() < 0.5 ? 'left' : 'right';
      progress = startSide === 'left' ? -cellSize : width + cellSize;
    }

    const speed = 200 + Math.random() * 100;
    const length = cellSize * 0.8;
    linesRef.current.push({ orientation, position, startSide, progress, speed, length });
  };

  const spawnIcons = (width: number, height: number) => {
    const icons: FloatingIcon[] = [];
    const count = 6 + Math.floor(Math.random() * 3); // 6-8 icons
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 30 + Math.random() * 30;
      icons.push({
        x: 80 + Math.random() * (width - 160),
        y: 80 + Math.random() * (height - 160),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        label: ICON_LABELS[i % ICON_LABELS.length],
        size: ICON_SIZE,
      });
    }
    return icons;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const isDesktop = window.innerWidth >= MOBILE_BREAKPOINT;

    const resizeCanvas = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      context.resetTransform();
      context.scale(dpr, dpr);
    };

    resizeCanvas();

    if (isDesktop && iconsRef.current.length === 0) {
      iconsRef.current = spawnIcons(window.innerWidth, window.innerHeight);
    }

    const lines = linesRef.current;
    const icons = iconsRef.current;
    const tokens = tokensRef.current;

    const animate = (timestamp: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const deltaTime = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cellSize = 100;

      // Background
      context.fillStyle = isDarkMode ? '#000' : '#FFF';
      context.fillRect(0, 0, width, height);

      // Grid
      context.strokeStyle = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
      context.lineWidth = 1;
      for (let x = 0; x <= width; x += cellSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = 0; y <= height; y += cellSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      // Floating icons (desktop only)
      if (isDesktop && icons.length > 0) {
        // Update positions & bounce
        for (const icon of icons) {
          icon.x += icon.vx * deltaTime;
          icon.y += icon.vy * deltaTime;

          if (icon.x < 50) { icon.x = 50; icon.vx = Math.abs(icon.vx); }
          if (icon.x > width - 50) { icon.x = width - 50; icon.vx = -Math.abs(icon.vx); }
          if (icon.y < 30) { icon.y = 30; icon.vy = Math.abs(icon.vy); }
          if (icon.y > height - 30) { icon.y = height - 30; icon.vy = -Math.abs(icon.vy); }
        }

        // Label-to-label collision (AABB push-apart)
        context.font = `20px Inter, sans-serif`;
        context.textAlign = 'left';
        for (let i = 0; i < icons.length; i++) {
          const twI = context.measureText(icons[i].label).width;
          const hwI = (twI + ICON_SIZE + 8 + 20) / 2;
          const hhI = (ICON_SIZE + 14) / 2;
          for (let j = i + 1; j < icons.length; j++) {
            const twJ = context.measureText(icons[j].label).width;
            const hwJ = (twJ + ICON_SIZE + 8 + 20) / 2;
            const hhJ = (ICON_SIZE + 14) / 2;
            const dx = icons[j].x - icons[i].x;
            const dy = icons[j].y - icons[i].y;
            const overlapX = (hwI + hwJ) - Math.abs(dx);
            const overlapY = (hhI + hhJ) - Math.abs(dy);
            if (overlapX > 0 && overlapY > 0) {
              if (overlapX < overlapY) {
                // Push apart on X axis
                const sign = dx > 0 ? 1 : -1;
                icons[i].x -= sign * overlapX / 2;
                icons[j].x += sign * overlapX / 2;
                // Swap X velocities
                const tmpVx = icons[i].vx;
                icons[i].vx = icons[j].vx;
                icons[j].vx = tmpVx;
              } else {
                // Push apart on Y axis
                const sign = dy > 0 ? 1 : -1;
                icons[i].y -= sign * overlapY / 2;
                icons[j].y += sign * overlapY / 2;
                const tmpVy = icons[i].vy;
                icons[i].vy = icons[j].vy;
                icons[j].vy = tmpVy;
              }
            }
          }
        }

        // Pre-calculate label rects for tunnel clipping
        context.font = `20px Inter, sans-serif`;
        context.textAlign = 'left';
        const iconRects = icons.map(icon => {
          const textWidth = context.measureText(icon.label).width;
          const iconSpace = ICON_SIZE + 8;
          const totalContentW = iconSpace + textWidth;
          const padX = 10;
          const padY = 7;
          const rectW = totalContentW + padX * 2;
          const rectH = ICON_SIZE + padY * 2;
          return { hw: rectW / 2, hh: rectH / 2 };
        });

        // Clip line to rect edge: find the point on the rect border in direction (dx, dy)
        const clipToEdge = (cx: number, cy: number, hw: number, hh: number, dx: number, dy: number) => {
          if (dx === 0 && dy === 0) return { x: cx, y: cy };
          const scaleX = hw / Math.abs(dx || 0.001);
          const scaleY = hh / Math.abs(dy || 0.001);
          const s = Math.min(scaleX, scaleY);
          return { x: cx + dx * s, y: cy + dy * s };
        };

        // Connection tunnel lines (two parallel lines, clipped to label edges)
        const tunnelGap = 8;
        for (let i = 0; i < icons.length; i++) {
          for (let j = i + 1; j < icons.length; j++) {
            const dx = icons[j].x - icons[i].x;
            const dy = icons[j].y - icons[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DISTANCE) {
              const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.3;
              context.strokeStyle = isDarkMode
                ? `rgba(255,255,255,${opacity})`
                : `rgba(0,0,0,${opacity})`;
              context.lineWidth = 1;
              // Clip start/end to label rect edges
              const startPt = clipToEdge(icons[i].x, icons[i].y, iconRects[i].hw, iconRects[i].hh, dx, dy);
              const endPt = clipToEdge(icons[j].x, icons[j].y, iconRects[j].hw, iconRects[j].hh, -dx, -dy);
              // Perpendicular offset for parallel lines
              const nx = -dy / dist * tunnelGap;
              const ny = dx / dist * tunnelGap;
              context.beginPath();
              context.moveTo(startPt.x + nx, startPt.y + ny);
              context.lineTo(endPt.x + nx, endPt.y + ny);
              context.stroke();
              context.beginPath();
              context.moveTo(startPt.x - nx, startPt.y - ny);
              context.lineTo(endPt.x - nx, endPt.y - ny);
              context.stroke();
            }
          }
        }

        // Spawn new tokens in active tunnels
        for (let i = 0; i < icons.length; i++) {
          for (let j = i + 1; j < icons.length; j++) {
            const dx = icons[j].x - icons[i].x;
            const dy = icons[j].y - icons[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DISTANCE && Math.random() < 0.005) {
              const activeTokens = tokens.filter(t => t.fromIdx === i && t.toIdx === j);
              if (activeTokens.length < 3) {
                tokens.push({
                  fromIdx: i,
                  toIdx: j,
                  progress: 0,
                  speed: 0.3 + Math.random() * 0.3,
                  text: TOKEN_TEXTS[Math.floor(Math.random() * TOKEN_TEXTS.length)],
                  color: TOKEN_COLORS[Math.floor(Math.random() * TOKEN_COLORS.length)],
                });
              }
            }
          }
        }

        // Update and render tokens
        context.font = '14px Inter, sans-serif';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        for (let t = tokens.length - 1; t >= 0; t--) {
          const tk = tokens[t];
          tk.progress += tk.speed * deltaTime;
          const from = icons[tk.fromIdx];
          const to = icons[tk.toIdx];
          if (!from || !to) { tokens.splice(t, 1); continue; }
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (tk.progress >= 1 || dist >= CONNECTION_DISTANCE) {
            tokens.splice(t, 1);
            continue;
          }
          const tunnelOpacity = (1 - dist / CONNECTION_DISTANCE) * 0.6;
          // Interpolate between label edges, not centers
          const fromRect = iconRects[tk.fromIdx];
          const toRect = iconRects[tk.toIdx];
          const startPt = clipToEdge(from.x, from.y, fromRect.hw, fromRect.hh, dx, dy);
          const endPt = clipToEdge(to.x, to.y, toRect.hw, toRect.hh, -dx, -dy);
          const tx = startPt.x + (endPt.x - startPt.x) * tk.progress;
          const ty = startPt.y + (endPt.y - startPt.y) * tk.progress;
          context.fillStyle = tk.color + tunnelOpacity + ')';
          context.fillText(tk.text, tx, ty);
        }

        // Draw icons with SVG-style icons
        const iconColor = isDarkMode ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)';
        const iconStrokeColor = isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.12)';

        context.font = `20px Inter, sans-serif`;
        context.textAlign = 'left';
        context.textBaseline = 'middle';

        for (const icon of icons) {
          const textWidth = context.measureText(icon.label).width;
          const iconSpace = ICON_SIZE + 8; // space for icon + gap
          const totalContentW = iconSpace + textWidth;
          const padX = 10;
          const padY = 7;
          const rectW = totalContentW + padX * 2;
          const rectH = ICON_SIZE + padY * 2;
          const cornerRadius = 6;

          const rx = icon.x - rectW / 2;
          const ry = icon.y - rectH / 2;

          // Rounded rectangle with gradient background
          const bgGrad = context.createLinearGradient(rx, ry, rx + rectW, ry + rectH);
          if (isDarkMode) {
            bgGrad.addColorStop(0, 'rgba(40,30,60,0.65)');
            bgGrad.addColorStop(1, 'rgba(20,40,60,0.65)');
          } else {
            bgGrad.addColorStop(0, 'rgba(200,180,240,0.35)');
            bgGrad.addColorStop(1, 'rgba(180,220,240,0.35)');
          }
          context.beginPath();
          context.roundRect(rx, ry, rectW, rectH, cornerRadius);
          context.fillStyle = bgGrad;
          context.fill();
          context.strokeStyle = iconStrokeColor;
          context.lineWidth = 1;
          context.stroke();

          // Draw SVG icon
          const iconCenterX = rx + padX + ICON_SIZE / 2;
          const iconCenterY = icon.y;
          context.strokeStyle = iconColor;
          context.fillStyle = iconColor;
          context.lineWidth = 1;
          drawIconForLabel(context, icon.label, iconCenterX, iconCenterY, ICON_SIZE);

          // Label text
          context.fillStyle = iconColor;
          context.fillText(icon.label, rx + padX + iconSpace, icon.y);
        }
      }

      // Moving lines
      if (lines.length < 6 && Math.random() < 0.01) {
        spawnLine(width, height, cellSize);
      }

      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i];
        const distance = line.speed * deltaTime;

        if (line.orientation === 'vertical') {
          line.progress += line.startSide === 'top' ? distance : -distance;
        } else {
          line.progress += line.startSide === 'left' ? distance : -distance;
        }

        const gradient = context.createLinearGradient(
          line.orientation === 'vertical' ? line.position : line.progress,
          line.orientation === 'vertical' ? line.progress : line.position,
          line.orientation === 'vertical' ? line.position : line.progress + line.length,
          line.orientation === 'vertical' ? line.progress + line.length : line.position
        );
        gradient.addColorStop(0, 'rgba(255, 80, 80, 1)');
        gradient.addColorStop(1, 'rgba(80, 160, 255, 1)');

        context.strokeStyle = gradient;
        context.lineWidth = 2;
        context.beginPath();
        if (line.orientation === 'vertical') {
          context.moveTo(line.position, line.progress);
          context.lineTo(line.position, line.progress + line.length);
        } else {
          context.moveTo(line.progress, line.position);
          context.lineTo(line.progress + line.length, line.position);
        }
        context.stroke();

        if (
          (line.startSide === 'top' && line.progress > height + line.length) ||
          (line.startSide === 'bottom' && line.progress < -line.length) ||
          (line.startSide === 'left' && line.progress > width + line.length) ||
          (line.startSide === 'right' && line.progress < -line.length)
        ) {
          lines.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDarkMode]);

  return <canvas ref={canvasRef} className="bg-canvas" />;
};

export default AnimatedBackground;
