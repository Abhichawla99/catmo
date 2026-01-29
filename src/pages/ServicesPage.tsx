import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Globe, Target, BarChart3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import NeuralNetworkHero from '../components/ui/neural-network-hero';
import { BackgroundPaths } from '../components/ui/background-paths';

const serviceExamples = [
    { text: 'Search Marketing', hot: true },
    { text: 'Social Media Advertising', hot: true },
    { text: 'Programmatic Marketing', hot: false },
    { text: 'Compliance-Focused Campaigns', hot: false },
    { text: 'Audience Research & Targeting', hot: false },
    { text: 'Message Testing & Optimization', hot: false },
    { text: 'Performance Analytics', hot: false },
];

const platformExamples = [
    'Google AdWords',
    'Bing Ads',
    'Facebook & Instagram',
    'LinkedIn',
    'Twitter',
    'TikTok',
    'YouTube',
    'Pinterest',
];

const industryExamples = [
    'Healthcare & Pharmaceuticals',
    'Financial Services',
    'Legal Services',
    'Insurance',
    'Real Estate',
    'Education',
];

export const ServicesPage = () => {
    return (
        <div className="relative min-h-screen bg-gray-900">
            <SEO
                title="Services | Digital Advertising | Catmo Media"
                description="Digital advertising strategies for regulated industries. Data-driven campaigns leveraging search, social, and programmatic marketing."
                keywords="digital advertising, marketing strategy, regulated industries, compliance marketing, search marketing, social media advertising"
                canonical="https://www.catmomedia.ca/services"
                ogUrl="https://www.catmomedia.ca/services"
            />

            {/* Neural Network Hero with Shader Background */}
            <NeuralNetworkHero
                title={
                    <>
                        Digital <span className="italic font-normal text-primary">advertising</span> that drives <span className="italic font-normal text-primary underline decoration-primary/30 underline-offset-8">growth</span>.
                    </>
                }
                description="We specialize in digital advertising strategies for regulated industries where traditional marketing approaches often fall short. Data-driven campaigns that find your ideal customers."
                badgeLabel="Services"
                badgeText="What We Offer"
                ctaButtons={[
                    { text: "Book a Meeting", href: "https://calendar.app.google/QdxMrAa98Eq9Q7aU7", primary: true, isExternal: true },
                    { text: "View Case Studies", href: "/case-studies" }
                ]}
                microDetails={["Boutique service", "Compliance-focused", "Measurable results"]}
                cardContent={<BackgroundPaths />}
            />

            {/* Services Content */}
            <div className="relative z-10 bg-black">
                {/* Services Grid */}
                <section className="px-6 md:px-10 lg:px-16 py-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

                            {/* Service 1: Digital Advertising */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-2"
                            >
                                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 group hover:bg-white/[0.04] transition-all">
                                    <div className="flex items-start justify-between mb-8">
                                        <div>
                                            <span className="text-[10px] font-light uppercase tracking-[0.12em] text-primary/80 font-mono">Service 01</span>
                                            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mt-2">
                                                Digital Advertising
                                            </h2>
                                        </div>
                                        <TrendingUp className="w-8 h-8 text-primary/50 group-hover:text-primary transition-colors" />
                                    </div>

                                    <p className="text-white/60 font-light leading-relaxed mb-8 max-w-lg">
                                        We architect full-funnel growth engines. From high-intent search capture to behavioral programmatic scale, we find your customers where they live.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {serviceExamples.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 py-2">
                                                <span className="h-px w-4 bg-white/20" />
                                                <span className="text-sm font-light text-white/80">{item.text}</span>
                                                {item.hot && (
                                                    <span className="text-[10px] uppercase tracking-wider text-primary/80 bg-primary/10 px-2 py-0.5 rounded">
                                                        core
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Service 2: Platform Mastery */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 group hover:bg-white/[0.04] transition-all">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <span className="text-[10px] font-light uppercase tracking-[0.12em] text-secondary/80 font-mono">Capability 02</span>
                                            <h2 className="text-2xl font-extralight tracking-tight text-white mt-2">
                                                Multi-Platform
                                            </h2>
                                        </div>
                                        <Globe className="w-6 h-6 text-secondary/50 group-hover:text-secondary transition-colors" />
                                    </div>

                                    <p className="text-white/60 font-light leading-relaxed mb-8 text-sm">
                                        Mastery over the ecosystems that move markets.
                                    </p>

                                    <div className="space-y-2">
                                        {platformExamples.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 py-1.5">
                                                <span className="h-px w-3 bg-white/20" />
                                                <span className="text-sm font-light text-white/70">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Service 3: Regulated Verticals */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 group hover:bg-white/[0.04] transition-all">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <span className="text-[10px] font-light uppercase tracking-[0.12em] text-accent/80 font-mono">Specialization 03</span>
                                            <h2 className="text-2xl font-extralight tracking-tight text-white mt-2">
                                                Regulated Verticals
                                            </h2>
                                        </div>
                                        <ShieldCheck className="w-6 h-6 text-accent/50 group-hover:text-accent transition-colors" />
                                    </div>

                                    <p className="text-white/60 font-light leading-relaxed mb-8 text-sm">
                                        Compliance-first marketing for high-stakes industries.
                                    </p>

                                    <div className="space-y-2">
                                        {industryExamples.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 py-1.5">
                                                <span className="h-px w-3 bg-white/20" />
                                                <span className="text-sm font-light text-white/70">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Why It Works / Quote */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="lg:col-span-2 text-center flex flex-col justify-center border-t border-white/5 pt-12"
                            >
                                <h3 className="text-2xl md:text-3xl font-extralight tracking-tight text-white/90 leading-relaxed italic max-w-2xl mx-auto">
                                    "The difference between <span className="text-primary font-bold">marketing</span> and <span className="text-primary font-bold">growth</span> is the depth of the engineering behind it."
                                </h3>
                                <p className="mt-6 text-white/30 font-mono text-[10px] uppercase tracking-[0.4em]">Catmo Media // Precision Protocol</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-6 md:px-10 lg:px-16 pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-7xl mx-auto"
                    >
                        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-12 md:p-16 text-center backdrop-blur-sm">
                            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mb-4">
                                Ready to scale your reach?
                            </h2>
                            <p className="text-white/60 font-light mb-8 max-w-md mx-auto">
                                We help purpose-driven businesses navigate complex digital landscapes with confidence.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-[10px] text-white/40 font-mono uppercase tracking-widest">
                                <span className="flex items-center gap-2"><Target className="w-3 h-3" /> Boutique partner</span>
                                <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> Compliance expert</span>
                                <span className="flex items-center gap-2"><BarChart3 className="w-3 h-3" /> Data-driven ROI</span>
                            </div>

                            <a
                                href="https://calendar.app.google/QdxMrAa98Eq9Q7aU7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/40"
                            >
                                Book a Meeting
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};
