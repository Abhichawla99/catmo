import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import * as THREE from 'three';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { PixelShaderCard } from './pixel-shader-card';

gsap.registerPlugin(SplitText);

// Unused component, kept for potential future use
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _SingularityWaveShader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial | undefined>(undefined);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1) Renderer + Scene + Camera + Clock
    let renderer;
    try {
      // Use alpha:false for a standard opaque background
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setPixelRatio(window.devicePixelRatio);

      // Ensure canvas fills the container
      const canvas = renderer.domElement;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.display = 'block';

      container.appendChild(canvas);
      console.log('✅ WebGL Canvas mounted successfully');
    } catch (err) {
      console.error('❌ WebGL not supported', err);
      container.innerHTML = '<p style="color:white;text-align:center;">Sorry, WebGL isn\'t available.</p>';
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    // 2) Shaders
    const vertexShader = `
      // Pass the UV coordinates to the fragment shader
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      varying vec2 vUv;
      uniform vec2 u_resolution;
      uniform float u_time;

      // Simplex Noise function for organic-looking randomness
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0) * 2.0 + 1.0;
          vec4 s1 = floor(b1) * 2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
      }

      void main() {
          vec2 uv = (vUv - 0.5) * 2.0;
          float aspect = u_resolution.x / u_resolution.y;
          uv.x *= aspect;

          vec3 color = vec3(0.0);
          float t = u_time * 0.1;
          float d = length(uv) * 0.8;
          float noise = snoise(vec3(uv * 1.5, t));
          float waves = sin(d * 10.0 - t * 5.0 + noise * 2.0) * 0.5 + 0.5;
          float singularity = 1.0 / (d + 0.1);
          float final_pattern = pow(waves * singularity, 2.0);

          vec3 color1 = vec3(0.1, 0.0, 0.3);
          vec3 color2 = vec3(0.8, 0.1, 0.4);
          vec3 color3 = vec3(1.0, 0.7, 0.2);

          color = mix(color1, color2, smoothstep(0.0, 1.5, final_pattern));
          color = mix(color, color3, smoothstep(1.0, 1.3, final_pattern));
          color *= (1.0 - length(uv) * 0.7);

          gl_FragColor = vec4(color, 1.0);
      }
    `;

    // 3) Material, Geometry, Mesh
    const uniforms = {
      u_time:       { value: 0 },
      u_resolution: { value: new THREE.Vector2() }
    };
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    materialRef.current = material; // Store material in ref
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh     = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 4) Resize Handler
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.u_resolution.value.set(w, h);
    };

    window.addEventListener('resize', onResize);
    onResize();

    // 5) Animation Loop
    renderer.setAnimationLoop(() => {
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    // 6) Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      renderer.setAnimationLoop(null);
      const canvas = renderer.domElement;
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundColor: 'transparent'
      }}
      aria-label="Animated singularity wave background"
    />
  );
};

// ===================== HERO =====================
interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
  microDetails?: Array<string>;
  cardContent?: ReactNode;
}

export default function Hero({
  title,
  description,
  badgeText = "Generative Surfaces",
  badgeLabel = "New",
  ctaButtons = [
    { text: "Get started", href: "#get-started", primary: true },
    { text: "View showcase", href: "#showcase" }
  ],
  microDetails = ["Low‑weight font", "Tight tracking", "Subtle motion"],
  cardContent
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<HTMLUListElement | null>(null);
  const microItem1Ref = useRef<HTMLLIElement | null>(null);
  const microItem2Ref = useRef<HTMLLIElement | null>(null);
  const microItem3Ref = useRef<HTMLLIElement | null>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;

      document.fonts.ready.then(() => {
        const split = new SplitText(headerRef.current!, {
          type: 'lines',
          wordsClass: 'lines',
        });

        gsap.set(split.lines, {
          filter: 'blur(16px)',
          yPercent: 30,
          autoAlpha: 0,
          scale: 1.06,
          transformOrigin: '50% 100%',
        });

        if (badgeRef.current) {
          gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
        }
        if (paraRef.current) {
          gsap.set(paraRef.current, { autoAlpha: 0, y: 8 });
        }
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
        }
        const microItems = [microItem1Ref.current, microItem2Ref.current, microItem3Ref.current].filter(Boolean);
        if (microItems.length > 0) {
          gsap.set(microItems, { autoAlpha: 0, y: 6 });
        }

        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
        });

        if (badgeRef.current) {
          tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.0);
        }

        tl.to(
          split.lines,
          {
            filter: 'blur(0px)',
            yPercent: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
          },
          0.1,
        );

        if (paraRef.current) {
          tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.55');
        }
        if (ctaRef.current) {
          tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.35');
        }
        if (microItems.length > 0) {
          tl.to(microItems, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.25');
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative h-screen w-screen overflow-hidden bg-black">
      {/* <SingularityWaveShader /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-36 sm:pt-44 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="flex flex-col items-start gap-6 sm:gap-8">
            <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">{badgeLabel}</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="text-xs font-light tracking-tight text-white/80">{badgeText}</span>
            </div>

            <h1 ref={headerRef} className="max-w-2xl text-left text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              {title}
            </h1>

            <p ref={paraRef} className="max-w-xl text-left text-base font-light leading-relaxed tracking-tight text-white/75 sm:text-lg">
              {description}
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
              {ctaButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`rounded-2xl border border-white/10 px-5 py-3 text-sm font-light tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 duration-300 ${
                    button.primary
                      ? "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  {button.text}
                </a>
              ))}
            </div>

            <ul ref={microRef} className="mt-8 flex flex-wrap gap-6 text-xs font-extralight tracking-tight text-white/60">
              {microDetails.map((detail, index) => {
                const refMap = [microItem1Ref, microItem2Ref, microItem3Ref];
                return (
                  <li key={index} ref={refMap[index]} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-white/40" /> {detail}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column - Interactive Card */}
          {cardContent && <PixelShaderCard>{cardContent}</PixelShaderCard>}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
