import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import {
    TrendingUp,
    Users,
    Target,
    BarChart3,
    Zap,
    Sparkles,
    Activity,
    Globe,
    Cpu,
    Terminal,
    Layers,
    ArrowRight,
    MessageSquare,
    Fingerprint,
    CheckCircle2,
    Database
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const steps = [
    {
        icon: MessageSquare,
        title: 'Contact Us',
        subtitle: "Let's get to know each other",
        description: 'Before amplifying your message, we work with you to learn about your business, brand position, and ideal customers. We develop strategies that generate leads, get referrals, and boost sales.',
        keyword: 'Discovery',
        color: '#4148ff',
        stat: '1:1 Strategy',
        detail: 'Systems Analysis',
        systemStatus: 'Analyzing Context',
        metric: '01',
        metricLabel: 'Phase',
        logs: ['Mapping brand position...', 'Ideal customer profiling', 'Lead gen strategy active']
    },
    {
        icon: Users,
        title: 'Finding the right customer',
        subtitle: 'Mapping the journey',
        description: 'Getting to know your customers on a deep level is key. Catmo Media helps you create an avatar for your ideal customers and assists in mapping out their entire journey from awareness to purchase.',
        keyword: 'Targeting',
        color: '#c43198',
        stat: 'Avatar Sync',
        detail: 'Journey Mapping',
        systemStatus: 'Tracking Signals',
        metric: '02',
        metricLabel: 'Phase',
        logs: ['Persona synthesis...', 'Touchpoint mapping', 'Behavioral analysis active']
    },
    {
        icon: Fingerprint,
        title: 'All your ducks in a row',
        subtitle: 'Attributing results',
        description: 'We ensure all your marketing efforts are up to snuff. After mapping touchpoints, we ensure every event is tracked and attributed so we can measure the impact on your business goals.',
        keyword: 'Attribution',
        color: '#00d2ff',
        stat: '100% Tracking',
        detail: 'Pixel Architecture',
        systemStatus: 'Measuring Impact',
        metric: '03',
        metricLabel: 'Phase',
        logs: ['Measuring touchpoints...', 'Attribution model: Linear', 'Data integrity: Verified']
    },
    {
        icon: Zap,
        title: 'Amplifying your message',
        subtitle: 'Unique brand experience',
        description: 'Whether scaling a small business or providing a fresh perspective for a big company, we develop comprehensive advertising strategies to amplify the unique features of your business.',
        keyword: 'Amplification',
        color: '#f5576c',
        stat: 'Global Reach',
        detail: 'Engine Orchestration',
        systemStatus: 'Scaling Output',
        metric: '04',
        metricLabel: 'Phase',
        logs: ['Ad spend optimization...', 'Creative testing: Active', 'Channel scaling: Google / Meta']
    },
    {
        icon: BarChart3,
        title: 'Measuring success',
        subtitle: 'Real-time transparency',
        description: 'Transparency is key. Our live dashboard allows you to track effectiveness in terms of new customers, conversion rate, and spending patterns on all your favorite devices anytime.',
        keyword: 'Transparency',
        color: '#5eeffb',
        stat: 'Live Dashboard',
        detail: 'Real-Time ROI',
        systemStatus: 'Nominal Operation',
        metric: '05',
        metricLabel: 'Phase',
        logs: ['Updating cloud metrics...', 'ROI Calculator: Online', 'Dashboard sync: Synchronized']
    }
];

export const WhyAgents = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const activeColor = useTransform(
        scrollYProgress,
        steps.map((_, i) => i / (steps.length - 1)),
        steps.map(s => s.color)
    );

    return (
        <section ref={containerRef} className="relative min-h-screen lg:h-[400vh] bg-black">
            {/* Preamble Content */}
            <div className="max-w-7xl mx-auto px-6 pt-40 pb-20 text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-4">
                        <Activity className="w-4 h-4 text-primary" />
                        <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.4em]">Operational Framework</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-tight">
                        Our <span className="italic font-normal text-primary underline decoration-primary/20 underline-offset-[16px]">Process</span>.
                    </h2>
                    <p className="text-xl md:text-2xl text-white/40 font-light max-w-4xl mx-auto leading-relaxed">
                        We specialize in marketing strategy and advertising. Together we'll identify new ways to grow your business, increase conversion rates and find the best channels for effective marketing.
                    </p>
                    <div className="flex flex-col items-center gap-4 pt-10">
                        <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent" />
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">Scroll to Initialize</span>
                    </div>
                </motion.div>
            </div>



            {/* Mobile/Tablet Walkthrough View - Vertical Cards */}
            <div className="flex flex-col gap-8 px-6 pb-20 lg:hidden relative z-10">
                {steps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                        <div
                            key={i}
                            className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 overflow-hidden backdrop-blur-sm"
                        >
                            {/* Ambient Glow */}
                            <div
                                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent blur-3xl opacity-20"
                                style={{ background: step.color }}
                            />

                            <div className="flex flex-col gap-6 relative z-10">
                                {/* Header */}
                                <div className="flex items-start justify-between">
                                    <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-white/90" />
                                    </div>
                                    <span className="text-4xl font-black italic text-white/5" style={{ color: `${step.color}20` }}>
                                        {step.metric}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-primary text-xs font-mono uppercase tracking-widest mb-2" style={{ color: step.color }}>
                                            {step.subtitle}
                                        </h4>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-white/60 leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Footer Metrics */}
                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: step.color }} />
                                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">{step.systemStatus}</span>
                                    </div>
                                    <span className="text-xs font-bold text-white/80">{step.stat}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Desktop Sticky Viewport */}
            <div className="hidden lg:flex sticky top-0 h-screen w-full flex-col items-center justify-center overflow-hidden">

                {/* Dynamic Background Glow */}
                <motion.div
                    style={{ background: activeColor }}
                    className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-[0.05] pointer-events-none"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />

                <div className="max-w-7xl w-full px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-32 z-10">

                    {/* Left Side: Process Narrative */}
                    <div className="flex-1 space-y-12">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="flex items-center gap-4 text-white/20"
                            >
                                <Sparkles className="w-5 h-5" />
                                <span className="text-xs font-mono uppercase tracking-[0.6em]">Catmo // Operational Protocol</span>
                            </motion.div>

                            <div className="relative h-[120px] pointer-events-none">
                                {steps.map((step, i) => {
                                    const start = i / steps.length;
                                    const end = (i + 1) / steps.length;
                                    const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
                                    const y = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [40, 0, 0, -40]);
                                    const color = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], ["#ffffff10", step.color, step.color, "#ffffff10"]);

                                    return (
                                        <motion.h2
                                            key={i}
                                            style={{ opacity, y, color }}
                                            className="absolute top-0 left-0 text-7xl md:text-9xl font-black italic tracking-tighter"
                                        >
                                            {step.keyword}
                                        </motion.h2>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Step Description */}
                        <div className="relative h-48 md:h-40">
                            {steps.map((step, i) => {
                                const start = i / steps.length;
                                const end = (i + 1) / steps.length;
                                const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                                const x = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [-20, 0, 0, 20]);

                                return (
                                    <motion.div
                                        key={i}
                                        style={{ opacity, x }}
                                        className="absolute top-0 left-0 space-y-6"
                                    >
                                        <h4 className="text-white/40 font-mono text-sm tracking-widest flex items-center gap-3">
                                            <span className="w-8 h-px bg-white/20" />
                                            {step.subtitle}
                                        </h4>
                                        <p className="text-xl md:text-2xl font-light text-white/50 leading-relaxed max-w-xl">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Animated Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex items-center justify-between max-w-md group cursor-pointer hover:bg-white/[0.05] transition-all"
                        >
                            <div className="space-y-1">
                                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Growth Partnership</span>
                                <h5 className="text-sm font-bold text-white tracking-wide">Identify new ways to grow</h5>
                            </div>
                            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                    </div>

                    {/* Right Side: Visual Core */}
                    <div className="flex-1 w-full max-w-sm relative flex flex-col gap-6">

                        {/* THE CARD */}
                        <div className="aspect-square relative w-full">
                            {steps.map((step, i) => {
                                const start = i / steps.length;
                                const end = (i + 1) / steps.length;
                                // Sharper transitions to avoid clutterness during overlap
                                const scale = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0.94, 1, 1, 0.94]);
                                const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
                                const zIndex = useTransform(scrollYProgress, [start, end], [1, 10]);

                                const Icon = step.icon;

                                return (
                                    <motion.div
                                        key={i}
                                        style={{ opacity, scale, zIndex }}
                                        className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-[40px] backdrop-blur-2xl overflow-hidden shadow-2xl group/card"
                                    >
                                        <div
                                            className="absolute inset-0 opacity-[0.1]"
                                            style={{ background: `radial-gradient(circle at 100% 0%, ${step.color}, transparent 60%)` }}
                                        />

                                        <div className="h-full w-full p-8 flex flex-col items-center justify-center space-y-6 relative z-10 text-center">
                                            <motion.div
                                                animate={{
                                                    y: [0, -5, 0],
                                                    backgroundColor: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.06)', 'rgba(255,255,255,0.02)']
                                                }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center"
                                            >
                                                <Icon className="w-8 h-8 text-white/80" />
                                            </motion.div>

                                            <h3 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase italic leading-tight">
                                                {step.title}
                                            </h3>

                                            {/* Progress Bar */}
                                            <div className="w-20 h-0.5 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full origin-left"
                                                    style={{
                                                        background: step.color,
                                                        scaleX: useTransform(scrollYProgress, [start, end], [0, 1])
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* THE PREMIUM ANALYTICAL STRIP BELOW THE CARD */}
                        <div className="h-24 relative w-full overflow-hidden rounded-[24px] bg-white/[0.02] border border-white/5 backdrop-blur-2xl shadow-inner group/metric">
                            {steps.map((step, i) => {
                                const start = i / steps.length;
                                const end = (i + 1) / steps.length;
                                const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [60, 0, 0, -60]);
                                const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);

                                return (
                                    <motion.div
                                        key={i}
                                        style={{ y, opacity }}
                                        className="absolute inset-0 flex items-center justify-between px-10"
                                    >
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-3">
                                                <div className="relative">
                                                    <div className="w-2.5 h-2.5 rounded-full blur-[2px]" style={{ background: step.color }} />
                                                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full animate-ping" style={{ background: step.color }} />
                                                </div>
                                                <span className="text-[9px] font-mono text-white/40 tracking-[0.3em] uppercase">{step.systemStatus}</span>
                                            </div>
                                            <span className="text-lg font-black text-white tracking-widest uppercase italic">{step.detail}</span>
                                        </div>

                                        {/* Dynamic Frequency Bars */}
                                        <div className="hidden lg:flex gap-1 items-end h-8 px-6 border-x border-white/5">
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(b => (
                                                <motion.div
                                                    key={b}
                                                    animate={{ height: [4, Math.random() * 16 + 4, 4] }}
                                                    transition={{ duration: 1 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                                                    className="w-1 rounded-full opacity-30"
                                                    style={{ backgroundColor: step.color }}
                                                />
                                            ))}
                                        </div>

                                        <div className="flex flex-col items-end gap-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.1em]">Efficiency</span>
                                                <Activity className="w-3 h-3 text-white/20" />
                                            </div>
                                            <span className="text-3xl font-black italic tracking-tighter" style={{ color: step.color }}>{step.metric}</span>
                                        </div>
                                    </motion.div>
                                );
                            })}

                            {/* Scanning overlay */}
                            <motion.div
                                animate={{ left: ['-10%', '110%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 bottom-0 w-[20px] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 z-10"
                            />
                        </div>
                    </div>
                </div>

                {/* BOTTOM STICKY HUD (SYSTEM TOOLBAR) */}
                <div className="absolute bottom-10 left-0 right-0 px-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 pointer-events-none z-50">
                    <div className="flex flex-col gap-8 pointer-events-auto">
                        <div className="flex gap-3 h-1.5">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    style={{
                                        width: useTransform(scrollYProgress, [(i - 0.5) / steps.length, i / steps.length, (i + 0.5) / steps.length], [32, 100, 32]),
                                        opacity: useTransform(scrollYProgress, [(i - 0.5) / steps.length, i / steps.length, (i + 0.5) / steps.length], [0.1, 1, 0.1]),
                                        backgroundColor: step.color,
                                        boxShadow: useMotionTemplate`0 0 20px ${step.color}20`
                                    }}
                                    className="rounded-full transition-all duration-300"
                                />
                            ))}
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3 text-white/30 font-mono text-[9px] uppercase tracking-[0.4em] px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                                <Terminal className="w-3.5 h-3.5" />
                                <span>Core Ready // v2.4</span>
                            </div>
                            <div className="flex items-center gap-3 text-emerald-500/40 font-mono text-[9px] uppercase tracking-[0.4em]">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span>Real-time link established</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Side Nav Labels */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-8 items-center h-72">
                    <div className="flex-1 w-[1px] bg-white/5 relative overflow-hidden">
                        <motion.div
                            style={{
                                height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                                background: activeColor
                            }}
                            className="absolute top-0 w-full shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Globe className="w-4 h-4 text-white/10" />
                        <Cpu className="w-4 h-4 text-white/10" />
                        <Database className="w-4 h-4 text-white/10" />
                    </div>
                    <span className="text-[9px] font-mono text-white/10 vertical-text tracking-[0.8em] uppercase">Protocol</span>
                </div>
            </div>

            <style>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
            `}</style>
        </section >
    );
};
