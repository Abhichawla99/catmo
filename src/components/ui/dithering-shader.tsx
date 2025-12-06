import { useEffect, useRef } from 'react';

interface DitheringShaderProps {
    shape?: 'wave' | 'circle' | 'diamond';
    type?: '2x2' | '4x4' | '8x8';
    colorBack?: string;
    colorFront?: string;
    pxSize?: number;
    speed?: number;
}

export function DitheringShader({
    shape = 'wave',
    type = '8x8',
    colorBack = '#001122',
    colorFront = '#ff0088',
    pxSize = 3,
    speed = 0.6,
}: DitheringShaderProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Parse colors
        const hexToRgb = (hex: string) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : { r: 0, g: 0, b: 0 };
        };

        const backColor = hexToRgb(colorBack);
        const frontColor = hexToRgb(colorFront);

        // Dither patterns
        const patterns: Record<string, number[][]> = {
            '2x2': [
                [0, 2],
                [3, 1]
            ],
            '4x4': [
                [0, 8, 2, 10],
                [12, 4, 14, 6],
                [3, 11, 1, 9],
                [15, 7, 13, 5]
            ],
            '8x8': [
                [0, 32, 8, 40, 2, 34, 10, 42],
                [48, 16, 56, 24, 50, 18, 58, 26],
                [12, 44, 4, 36, 14, 46, 6, 38],
                [60, 28, 52, 20, 62, 30, 54, 22],
                [3, 35, 11, 43, 1, 33, 9, 41],
                [51, 19, 59, 27, 49, 17, 57, 25],
                [15, 47, 7, 39, 13, 45, 5, 37],
                [63, 31, 55, 23, 61, 29, 53, 21]
            ]
        };

        const pattern = patterns[type] || patterns['8x8'];
        const patternSize = pattern.length;
        const maxPatternValue = patternSize === 2 ? 4 : patternSize === 4 ? 16 : 64;

        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const getShapeValue = (x: number, y: number, t: number): number => {
            const normalizedX = x / canvas.width;
            const normalizedY = y / canvas.height;

            switch (shape) {
                case 'wave':
                    return (
                        Math.sin(normalizedX * 6 + t) * 0.5 +
                        Math.sin(normalizedY * 4 + t * 0.8) * 0.3 +
                        Math.sin((normalizedX + normalizedY) * 3 + t * 1.2) * 0.2 +
                        0.5
                    );
                case 'circle':
                    const cx = 0.5 + Math.sin(t) * 0.2;
                    const cy = 0.5 + Math.cos(t) * 0.2;
                    const dist = Math.sqrt((normalizedX - cx) ** 2 + (normalizedY - cy) ** 2);
                    return Math.sin(dist * 10 - t * 2) * 0.5 + 0.5;
                case 'diamond':
                    const dx = Math.abs(normalizedX - 0.5);
                    const dy = Math.abs(normalizedY - 0.5);
                    return Math.sin((dx + dy) * 8 - t) * 0.5 + 0.5;
                default:
                    return 0.5;
            }
        };

        const render = () => {
            time += speed * 0.02;

            const imageData = ctx.createImageData(canvas.width, canvas.height);
            const data = imageData.data;

            for (let y = 0; y < canvas.height; y += pxSize) {
                for (let x = 0; x < canvas.width; x += pxSize) {
                    const shapeValue = getShapeValue(x, y, time);
                    const threshold = pattern[Math.floor(y / pxSize) % patternSize][Math.floor(x / pxSize) % patternSize] / maxPatternValue;

                    const useFront = shapeValue > threshold;
                    const color = useFront ? frontColor : backColor;

                    // Fill the pixel block
                    for (let py = 0; py < pxSize && y + py < canvas.height; py++) {
                        for (let px = 0; px < pxSize && x + px < canvas.width; px++) {
                            const i = ((y + py) * canvas.width + (x + px)) * 4;
                            data[i] = color.r;
                            data[i + 1] = color.g;
                            data[i + 2] = color.b;
                            data[i + 3] = 255;
                        }
                    }
                }
            }

            ctx.putImageData(imageData, 0, 0);
            animationRef.current = requestAnimationFrame(render);
        };

        resize();
        window.addEventListener('resize', resize);
        render();

        return () => {
            window.removeEventListener('resize', resize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [shape, type, colorBack, colorFront, pxSize, speed]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ imageRendering: 'pixelated' }}
        />
    );
}
