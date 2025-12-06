import { useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Link } from "react-router-dom";

function GenerativeArtScene() {
    const mountRef = useRef<HTMLDivElement>(null);
    const lightRef = useRef<THREE.PointLight | null>(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 3;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        currentMount.appendChild(renderer.domElement);

        const geometry = new THREE.IcosahedronGeometry(1.2, 64);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                pointLightPos: { value: new THREE.Vector3(0, 0, 5) },
                color: { value: new THREE.Color("#ff0088") },
            },
            vertexShader: `
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i = floor(v + dot(v, C.yyy));
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
          return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
        }

        void main() {
          vNormal = normal;
          vPosition = position;
          float displacement = snoise(position * 2.0 + time * 0.5) * 0.2;
          vec3 newPosition = position + normal * displacement;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
            fragmentShader: `
        uniform vec3 color;
        uniform vec3 pointLightPosition;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vec3 normal = normalize(vNormal);
          vec3 lightDir = normalize(pointLightPosition - vPosition);
          float diffuse = max(dot(normal, lightDir), 0.0);
          
          float fresnel = 1.0 - dot(normal, vec3(0.0, 0.0, 1.0));
          fresnel = pow(fresnel, 2.0);
          
          vec3 finalColor = color * diffuse + color * fresnel * 0.5;
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
            wireframe: true,
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(0, 0, 5);
        lightRef.current = pointLight;
        scene.add(pointLight);

        let frameId: number;
        const animate = (t: number) => {
            material.uniforms.time.value = t * 0.0003;
            mesh.rotation.y += 0.0005;
            mesh.rotation.x += 0.0002;
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        animate(0);

        const handleResize = () => {
            if (!currentMount) return;
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            const vec = new THREE.Vector3(x, y, 0.5).unproject(camera);
            const dir = vec.sub(camera.position).normalize();
            const dist = -camera.position.z / dir.z;
            const pos = camera.position.clone().add(dir.multiplyScalar(dist));
            if (lightRef.current) {
                lightRef.current.position.copy(pos);
            }
            material.uniforms.pointLightPos.value = pos;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}

export const Hero = () => {
    return (
        <section className="relative min-h-screen w-full bg-background overflow-hidden">
            {/* Split Layout Container */}
            <div className="flex flex-col lg:flex-row min-h-screen">

                {/* Left Side - 3D Animation */}
                <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen">
                    <Suspense fallback={<div className="w-full h-full bg-background" />}>
                        <GenerativeArtScene />
                    </Suspense>

                    {/* Gradient overlay for smooth transition */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/80 lg:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background lg:hidden" />
                </div>

                {/* Vertical Separator - Desktop only */}
                <div className="hidden lg:flex items-center justify-center w-px relative">
                    <div className="absolute h-2/3 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
                    <div className="absolute w-3 h-3 rounded-full bg-primary/60 animate-pulse" />
                </div>

                {/* Right Side - Content */}
                <div className="relative w-full lg:w-1/2 flex items-center justify-center px-8 lg:px-16 py-16 lg:py-0">
                    <div className="max-w-xl">
                        {/* Eyebrow */}
                        <p className="text-primary/80 text-sm font-mono tracking-widest uppercase mb-6 animate-pulse">
                            AI-Powered Automation
                        </p>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 leading-[1.1]">
                            Stop Working.
                            <br />
                            <span className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">
                                Start Automating.
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
                            We design custom AI agents and workflow engines that eliminate the tasks draining your team’s time.
                            <br />
                            <br />
                            Faster delivery. Fewer mistakes. More profit — without adding headcount.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,136,0.4)] text-center">
                                Book a Discovery Call
                            </Link>
                            <Link to="/work" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-foreground font-semibold rounded-full border border-white/20 transition-all duration-300 hover:scale-105 text-center">
                                See Our Work
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Logo Carousel - Full Width */}
            <div className="absolute bottom-0 left-0 right-0 py-8 border-t border-white/10 bg-background/80 backdrop-blur-sm">
                <div className="overflow-hidden">
                    <div className="flex animate-scroll">
                        {[
                            { file: 'openai logo.png', name: 'OpenAI', invert: true },
                            { file: 'claude logo (1).png', name: 'Claude' },
                            { file: 'geminilogo.png', name: 'Gemini' },
                            { file: 'cursor logo.png', name: 'Cursor' },
                            { file: 'supabase-logo-vector--comseeklogo435677 (1).png', name: 'Supabase' },
                            { file: '11labs.png', name: 'ElevenLabs' },
                            { file: 'airtable logo (1).png', name: 'Airtable' },
                            { file: 'HubSpot-Emblem (1).png', name: 'HubSpot' },
                            { file: 'kisspng-salesforce-com-netsuite-customer-relationship-mana-great-idea-5b22720fe7eb20.32355178152898407995.png', name: 'Salesforce' },
                            { file: 'make-color (1).png', name: 'Make' },
                            { file: 'Notion-logo.png', name: 'Notion' },
                            { file: 'slack-logo-vector-white-background-slack-logo-vector-white-background-editorial-illustrative-social-media-logo-206665964.png', name: 'Slack' }
                        ].concat([
                            { file: 'openai logo.png', name: 'OpenAI', invert: true },
                            { file: 'claude logo (1).png', name: 'Claude' },
                            { file: 'geminilogo.png', name: 'Gemini' },
                            { file: 'cursor logo.png', name: 'Cursor' },
                            { file: 'supabase-logo-vector--comseeklogo435677 (1).png', name: 'Supabase' },
                            { file: '11labs.png', name: 'ElevenLabs' },
                            { file: 'airtable logo (1).png', name: 'Airtable' },
                            { file: 'HubSpot-Emblem (1).png', name: 'HubSpot' },
                            { file: 'kisspng-salesforce-com-netsuite-customer-relationship-mana-great-idea-5b22720fe7eb20.32355178152898407995.png', name: 'Salesforce' },
                            { file: 'make-color (1).png', name: 'Make' },
                            { file: 'Notion-logo.png', name: 'Notion' },
                            { file: 'slack-logo-vector-white-background-slack-logo-vector-white-background-editorial-illustrative-social-media-logo-206665964.png', name: 'Slack' }
                        ]).map((logo, index) => (
                            <div key={index} className="flex-shrink-0 px-8">
                                <img
                                    src={`/logos/${logo.file}`}
                                    alt={logo.name}
                                    className={`h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 object-contain ${logo.invert ? 'invert' : ''}`}
                                    style={{ maxWidth: '140px' }}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
