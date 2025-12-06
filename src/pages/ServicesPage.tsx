import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import NeuralNetworkHero from '../components/ui/neural-network-hero';
import { BackgroundPaths } from '../components/ui/background-paths';

const agentExamples = [
    { text: 'Customer Support Agent', hot: true },
    { text: 'Outbound + Inbound SDR', hot: true },
    { text: 'Sales Assistant', hot: false },
    { text: 'Research Agent', hot: false },
    { text: 'Content Assistant', hot: false },
    { text: 'Operations Coordinator', hot: false },
    { text: 'Data Agent', hot: false },
];

const automationExamples = [
    'Lead qualification & routing',
    'CRM enrichment',
    'Inbox → CRM tagging',
    'Client onboarding',
    'Contract generation',
    'Reporting dashboards',
    'Schedule coordination',
    'Document processing',
];

const integrationExamples = [
    'CRM ↔ AI pipelines',
    'API integrations',
    'Legacy systems',
    'Data syncing',
    'Workflow orchestration',
    'Payment linkage',
];

export const ServicesPage = () => {
    return (
        <div className="relative min-h-screen bg-gray-900">
            <SEO
                title="Services | AI Automation & Agents | manuv.co"
                description="We build AI automation systems and autonomous agents that run your business operations on autopilot."
                keywords="AI automation, AI agents, workflow automation"
                canonical="https://manuv.co/services"
                ogUrl="https://manuv.co/services"
            />

            {/* Neural Network Hero with Shader Background */}
            <NeuralNetworkHero
                title="AI systems that run your operations."
                description="Automation and agents built for teams that refuse to do repetitive work. Trusted by agencies, SaaS companies, and consulting firms."
                badgeLabel="Services"
                badgeText="What We Build"
                ctaButtons={[
                    { text: "Book a Strategy Call", href: "/contact", primary: true },
                    { text: "View Work", href: "/case-studies" }
                ]}
                microDetails={["Custom-built", "4-week delivery", "Direct engineer access"]}
                cardContent={<BackgroundPaths />}
            />

            {/* Services Content */}
            <div className="relative z-10 bg-black">
                {/* Services Grid */}
                <section className="px-6 md:px-10 lg:px-16 py-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

                            {/* Service 1: AI Agents */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-2"
                            >
                                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                                    <div className="flex items-start justify-between mb-8">
                                        <div>
                                            <span className="text-[10px] font-light uppercase tracking-[0.12em] text-primary/80">01</span>
                                            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mt-2">
                                                Autonomous Agents
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="text-white/60 font-light leading-relaxed mb-8 max-w-lg">
                                        Digital employees that complete multi-step tasks on their own.
                                        Consistent. Fast. Available 24/7.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {agentExamples.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 py-2">
                                                <span className="h-px w-4 bg-white/20" />
                                                <span className="text-sm font-light text-white/80">{item.text}</span>
                                                {item.hot && (
                                                    <span className="text-[10px] uppercase tracking-wider text-orange-400/80 bg-orange-500/10 px-2 py-0.5 rounded">
                                                        popular
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <p className="mt-8 text-xs text-white/30 font-light italic">
                                        Every agent is custom-built to your operations.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Service 2: AI Automation */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                                    <span className="text-[10px] font-light uppercase tracking-[0.12em] text-primary/80">02</span>
                                    <h2 className="text-2xl md:text-3xl font-extralight tracking-tight text-white mt-2 mb-6">
                                        AI Automation
                                    </h2>

                                    <p className="text-white/60 font-light leading-relaxed mb-8 text-sm">
                                        End-to-end workflows that eliminate manual tasks.
                                    </p>

                                    <div className="space-y-2">
                                        {automationExamples.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 py-1.5">
                                                <span className="h-px w-3 bg-white/20" />
                                                <span className="text-sm font-light text-white/70">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Service 3: Integrations */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                                    <span className="text-[10px] font-light uppercase tracking-[0.12em] text-primary/80">03</span>
                                    <h2 className="text-2xl md:text-3xl font-extralight tracking-tight text-white mt-2 mb-6">
                                        Integrations
                                    </h2>

                                    <p className="text-white/60 font-light leading-relaxed mb-8 text-sm">
                                        Connect your CRMs, databases, and apps seamlessly.
                                    </p>

                                    <div className="space-y-2">
                                        {integrationExamples.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 py-1.5">
                                                <span className="h-px w-3 bg-white/20" />
                                                <span className="text-sm font-light text-white/70">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Service 4: In-House AI Apps */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                                    <span className="text-[10px] font-light uppercase tracking-[0.12em] text-primary/80">04</span>
                                    <h2 className="text-2xl md:text-3xl font-extralight tracking-tight text-white mt-2 mb-6">
                                        In-House AI Apps
                                    </h2>

                                    <p className="text-white/60 font-light leading-relaxed mb-6 text-sm">
                                        Full-stack AI applications built from the ground up.
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3">
                                            <span className="h-px w-3 bg-white/20" />
                                            <span className="text-sm font-light text-white/70">Lean architecture</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="h-px w-3 bg-white/20" />
                                            <span className="text-sm font-light text-white/70">Fast performance</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="h-px w-3 bg-white/20" />
                                            <span className="text-sm font-light text-white/70">Sturdy & reliable</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="h-px w-3 bg-white/20" />
                                            <span className="text-sm font-light text-white/70">Built to scale</span>
                                        </div>
                                    </div>

                                    <p className="text-xs text-white/30 font-light italic">
                                        Seamlessly integrated with your operations.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Why It Works */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="lg:col-span-2"
                            >
                                <div className="h-full rounded-3xl border border-white/5 bg-white/[0.01] p-8 md:p-10">
                                    <h3 className="text-xl font-extralight tracking-tight text-white/90 mb-4">
                                        Why this works
                                    </h3>
                                    <p className="text-white/50 font-light leading-relaxed max-w-xl">
                                        You eliminate repetitive tasks. Reduce human errors.
                                        Get faster, more consistent operations.
                                    </p>
                                </div>
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
                        <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mb-4">
                                Not sure what you need?
                            </h2>
                            <p className="text-white/60 font-light mb-6">
                                Book a free 30-minute strategy call.
                            </p>

                            <div className="flex flex-col gap-2 text-xs text-white/40 font-light mb-10 max-w-md mx-auto">
                                <span>We only take 3 new clients per quarter</span>
                                <span>White-glove service — custom consultation with engineers</span>
                                <span>Most systems implemented in under 4 weeks</span>
                            </div>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                            >
                                Schedule a Strategy Call
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};
