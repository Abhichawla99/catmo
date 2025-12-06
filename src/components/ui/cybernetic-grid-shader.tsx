import { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform float iTime;
  uniform vec2 iResolution;
  uniform vec2 iMouse;
  varying vec2 vUv;

  // Cybernetic grid shader with glowing lines and tech aesthetic

  float grid(vec2 uv, float scale) {
    vec2 grid = abs(fract(uv * scale - 0.5) - 0.5) / fwidth(uv * scale);
    float line = min(grid.x, grid.y);
    return 1.0 - min(line, 1.0);
  }

  float hexGrid(vec2 uv, float scale) {
    uv *= scale;
    vec2 r = vec2(1.0, 1.732);
    vec2 h = r * 0.5;
    vec2 a = mod(uv, r) - h;
    vec2 b = mod(uv - h, r) - h;
    vec2 gv = length(a) < length(b) ? a : b;
    float d = length(gv);
    return smoothstep(0.05, 0.02, d - 0.4);
  }

  vec3 cybGrid(vec2 uv, float time) {
    // Main grid
    float g1 = grid(uv, 10.0) * 0.3;
    float g2 = grid(uv, 2.0) * 0.6;

    // Animated scan lines
    float scan = sin(uv.y * 50.0 + time * 2.0) * 0.5 + 0.5;
    scan = smoothstep(0.3, 0.7, scan) * 0.2;

    // Moving data streams
    float stream = sin(uv.x * 20.0 - time * 3.0) * 0.5 + 0.5;
    stream *= sin(uv.y * 15.0 + time * 2.0) * 0.5 + 0.5;
    stream = pow(stream, 3.0) * 0.4;

    // Hexagonal pattern overlay
    float hex = hexGrid(uv, 5.0) * 0.2;

    // Combine all elements
    float intensity = g1 + g2 + scan + stream + hex;

    // Color gradients - cybernetic blue/cyan
    vec3 color1 = vec3(0.0, 0.5, 1.0); // Bright blue
    vec3 color2 = vec3(0.0, 1.0, 0.8); // Cyan
    vec3 color3 = vec3(0.5, 0.0, 1.0); // Purple accent

    vec3 col = mix(color1, color2, sin(time * 0.5) * 0.5 + 0.5);
    col = mix(col, color3, stream);

    return col * intensity;
  }

  void main() {
    vec2 uv = (vUv - 0.5) * 2.0;
    float aspect = iResolution.x / iResolution.y;
    uv.x *= aspect;

    // Mouse interaction
    vec2 mouseUv = (iMouse - 0.5) * 2.0;
    mouseUv.x *= aspect;
    float mouseDist = length(uv - mouseUv);
    float mouseEffect = exp(-mouseDist * 2.0) * 0.5;

    // Create the cybernetic grid
    vec3 color = cybGrid(uv, iTime);

    // Add glow effect
    float glow = 0.0;
    for(float i = 1.0; i < 4.0; i++) {
      glow += 0.5 / i * pow(length(cybGrid(uv, iTime + i * 0.1)), 0.5);
    }
    color += vec3(0.0, 0.3, 0.6) * glow * 0.3;

    // Mouse glow
    color += vec3(0.0, 0.8, 1.0) * mouseEffect;

    // Vignette
    float vignette = 1.0 - length(vUv - 0.5) * 0.8;
    color *= vignette;

    // Ambient darkness
    color = mix(vec3(0.0, 0.05, 0.1), color, 0.8);

    gl_FragColor = vec4(color, 1.0);
  }
`;

const CyberneticGridMaterial = shaderMaterial(
  {
    iTime: 0,
    iResolution: new THREE.Vector2(1, 1),
    iMouse: new THREE.Vector2(0.5, 0.5)
  },
  vertexShader,
  fragmentShader
);

extend({ CyberneticGridMaterial });

function ShaderPlane({ mousePos }: { mousePos: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<any>(null!);

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.iTime = state.clock.elapsedTime;
    const { width, height } = state.size;
    materialRef.current.iResolution.set(width, height);
    materialRef.current.iMouse.set(mousePos.x, mousePos.y);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[4, 4]} />
      <cyberneticGridMaterial ref={materialRef} />
    </mesh>
  );
}

export default function CyberneticGridShader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  const camera = useMemo(
    () => ({ position: [0, 0, 1] as [number, number, number], fov: 75, near: 0.1, far: 1000 }),
    []
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePos.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: 1.0 - (e.clientY - rect.top) / rect.height
    };
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={camera}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
      >
        <ShaderPlane mousePos={mousePos.current} />
      </Canvas>
    </div>
  );
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    cyberneticGridMaterial: any;
  }
}
