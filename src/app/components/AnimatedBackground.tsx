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

const AnimatedBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const lines: MovingLine[] = [];
    let lastTime: number | null = null;

    // Funktion zur Darkmode-Erkennung
    useEffect(() => {
        const checkDarkMode = () => {
            const darkModeOn = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(darkModeOn);
        };

        checkDarkMode();
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', checkDarkMode);

        return () => {
            mediaQuery.removeEventListener('change', checkDarkMode);
        };
    }, []);

    // Erstellt eine neue Linie an einer zufälligen Position im Grid
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

        const speed = 200 + Math.random() * 100; // Geschwindigkeit zwischen 200-300 px/s
        const length = cellSize * 0.8; // Feste Linienlänge (80% der Gridgröße)

        lines.push({ orientation, position, startSide, progress, speed, length });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext('2d');
        if (!context) return;

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

        const animate = (timestamp: number) => {
            if (lastTime === null) lastTime = timestamp;
            const deltaTime = (timestamp - lastTime) / 1000;
            lastTime = timestamp;
            const width = window.innerWidth;
            const height = window.innerHeight;
            const cellSize = 100;

            // Dynamische Hintergrundfarbe basierend auf Darkmode
            context.fillStyle = isDarkMode ? '#000' : '#FFF';
            context.fillRect(0, 0, width, height);

            // Grid zeichnen
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

            // Linien seltener erscheinen lassen
            if (lines.length < 6 && Math.random() < 0.01) {
                spawnLine(width, height, cellSize);
            }

            // Animierte Linien aktualisieren
            for (let i = lines.length - 1; i >= 0; i--) {
                const line = lines[i];
                const distance = line.speed * deltaTime;

                if (line.orientation === 'vertical') {
                    line.progress += line.startSide === 'top' ? distance : -distance;
                } else {
                    line.progress += line.startSide === 'left' ? distance : -distance;
                }

                // Farbverlauf von Rot nach Blau
                const gradient = context.createLinearGradient(
                    line.orientation === 'vertical' ? line.position : line.progress,
                    line.orientation === 'vertical' ? line.progress : line.position,
                    line.orientation === 'vertical' ? line.position : line.progress + line.length,
                    line.orientation === 'vertical' ? line.progress + line.length : line.position
                );
                gradient.addColorStop(0, 'rgba(255, 80, 80, 1)'); // Rot
                gradient.addColorStop(1, 'rgba(80, 160, 255, 1)'); // Blau

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

                // Linie entfernen, wenn sie mit ihrer vollen Länge aus dem Bild raus ist
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
