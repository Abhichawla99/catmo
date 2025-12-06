import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import Hero from '../components/ui/neural-network-hero';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';

const flagshipProducts = [
    {
        name: 'ORPHIC',
        description: 'AI content intelligence engine that transforms all past content into a structured knowledge base and generates new content automatically in the same voice.',
        metrics: [
            '95% faster content creation',
            '10× content output volume',
            '4.8/5 quality rating'
        ],
        features: [
            'Ingests content from Instagram, YouTube, PDFs, transcripts, blogs',
            'Extracts, cleans, and embeds text into vector database',
            'Learns voice patterns: tone, style, pacing, vocabulary, structure',
            'Generates social posts, scripts, newsletters, long-form, emails',
            'Scores content for clarity and voice consistency',
            'n8n pipeline handles ingestion, batch generation, scheduling',
            'Includes dashboards and editor UI'
        ],
        link: 'https://orphic.so'
    },
    {
        name: 'MILNA',
        description: 'AI website agents that automate sales and support conversations directly on the website, trained on your content, docs, and data.',
        metrics: [
            '70-90% ticket resolution',
            '24/7 availability',
            'Real-time CRM sync'
        ],
        features: [
            'Sales Agent: answers questions, recommends products, qualifies leads, books calls, pushes to CRM',
            'Support Agent: resolves queries, pulls account data via API, manages tickets, escalates when needed',
            'Uses real-time retrieval from website content and documentation',
            'Runs on custom workflow engine (n8n + custom logic nodes)',
            'Includes monitoring, logs, analytics, fallback behaviors',
            'Trained on KB articles, documents, FAQs, pricing'
        ],
        link: 'https://milna.io'
    }
];

const aiAgents = [
    {
        name: 'AI Customer Support Agent',
        problem: 'Support tickets pile up faster than humans can respond',
        solution: 'Resolves 70–90% of tickets using knowledge base, CRM lookups, and tool actions',
        description: 'Automatically triages, researches, and responds to customer inquiries with contextual understanding.'
    },
    {
        name: 'AI SDR / Outbound Agent',
        problem: 'Manual prospecting is slow and inconsistent',
        solution: 'Prospects, enriches leads, writes personalized outreach, updates CRM',
        description: 'Generates qualified leads and sends personalized outreach at scale while maintaining quality.'
    },
    {
        name: 'AI Research Agent',
        problem: 'Research takes hours of manual work',
        solution: 'Scrapes sources, analyzes data, summarizes insights, builds reports',
        description: 'Conducts comprehensive research across multiple sources and delivers structured reports.'
    },
    {
        name: 'AI Content Agent',
        problem: 'Content creation is bottlenecked by manual writing',
        solution: 'Writes, repurposes, schedules, and analyzes multi-platform content',
        description: 'Creates and adapts content for different platforms while maintaining brand consistency.'
    },
    {
        name: 'AI Operations Agent',
        problem: 'Internal requests slow down operations',
        solution: 'Automates SOPs, approvals, routing, escalations, and internal requests',
        description: 'Handles routine operational tasks and ensures processes run smoothly without human intervention.'
    },
    {
        name: 'AI Data Agent',
        problem: 'Data lives in silos across systems',
        solution: 'Cleans, structures, and moves data between systems automatically',
        description: 'Ensures data consistency and availability across your entire tech stack.'
    }
];

const automationSystems = [
    {
        title: 'Lead Qualification & Routing',
        description: 'Auto-tags, scores, enriches, and sends leads to the right pipeline based on qualification criteria.'
    },
    {
        title: 'CRM Enrichment Engine',
        description: 'Cross-checks leads in HubSpot/Notion/Sheets and enriches with external APIs for complete profiles.'
    },
    {
        title: 'Inbox → CRM Ingestion',
        description: 'Reads emails → extracts details → classifies → creates entries automatically with zero manual input.'
    },
    {
        title: 'Client Onboarding Flow',
        description: 'Auto-generates proposals, contracts, checklists, and sends them to clients at the right time.'
    },
    {
        title: 'Automated Reporting System',
        description: 'Generates daily/weekly revenue + operations reports and sends them to Slack/Email on schedule.'
    },
    {
        title: 'Document Processing Pipeline',
        description: 'Parses PDFs, extracts data, validates with AI, sends to appropriate systems without human review.'
    }
];

const caseStudies = [
    {
        name: 'Orphic',
        metrics: ['95% faster content creation', '10× output volume'],
        description: 'AI content intelligence engine with vector DB, voice learning, and automated generation pipeline',
        link: '/case-studies#orphic'
    },
    {
        name: 'Milna',
        metrics: ['70-90% automation rate', '24/7 availability'],
        description: 'AI sales and support agents with real-time data retrieval, CRM integration, and intelligent escalation',
        link: '/case-studies#milna'
    }
];

const processSteps = [
    { name: 'Discover', description: 'Map systems, tools, tasks, bottlenecks' },
    { name: 'Architect', description: 'Design a custom AI + automation solution' },
    { name: 'Build', description: 'Develop agents, integrations, and workflows' },
    { name: 'Deploy', description: 'Test, monitor, refine' },
    { name: 'Scale', description: 'Expand agents, reduce cost, improve speed' }
];

const trustFactors = [
    'Direct access to engineers',
    'No "one-size-fits-all" solutions',
    'Built for reliability and scale',
    'Fast implementation',
    'Deep systems thinking',
    'Boutique: only 3 clients per quarter'
];

export const WorkPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Work | AI Systems & Automation | manuv.co"
                description="Real AI systems. Real business outcomes. See our flagship products, AI agents, and automation systems built for scale."
                keywords="AI systems, automation, AI agents, case studies"
                canonical="https://manuv.co/work"
            />

            {/* Hero Section with Neural Network Background */}
            <Hero
                title="Real AI Systems. Real Business Outcomes."
                description="Here's what we've built — from full AI platforms to autonomous agents to deeply integrated automation systems."
                badgeText="Our Portfolio"
                badgeLabel="Work"
                ctaButtons={[
                    { text: "Play a Game", href: "/game", primary: true },
                    { text: "Book a Call", href: "/contact" }
                ]}
                microDetails={["Flagship Products", "AI Agents", "Enterprise Automation"]}
                cardContent={<BackgroundBeamsWithCollision />}
            />

            {/* Flagship Products */}
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                            Featured Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-white">
                            Flagship Products
                        </h2>
                        <p className="text-lg text-white/50 font-light">Full-scale SaaS products fully developed by our studio</p>
                    </div>

                    <div className="space-y-12">
                        {flagshipProducts.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <span className="text-[10px] font-light uppercase tracking-[0.12em] text-primary/80">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-4xl font-extralight tracking-tight text-white mt-2 mb-4">
                                            {product.name}
                                        </h3>
                                        <p className="text-lg font-light text-white/70 max-w-3xl">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6 my-8">
                                    {product.metrics.map((metric, i) => (
                                        <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.01] p-4">
                                            <span className="text-2xl font-light text-white">{metric}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-2 mb-8">
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className="h-px w-4 bg-white/20 mt-3" />
                                            <span className="text-sm font-light text-white/60">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={product.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-light tracking-tight text-white transition-all hover:bg-white/10"
                                >
                                    View {product.name} Project
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Agents */}
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                            Autonomous Systems
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-white">
                            AI Agents
                        </h2>
                        <p className="text-lg text-white/50 font-light">Autonomous agents that handle complex multi-step tasks</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiAgents.map((agent, index) => (
                            <motion.div
                                key={agent.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all"
                            >
                                <h3 className="text-xl font-light tracking-tight text-white mb-3">
                                    {agent.name}
                                </h3>
                                <p className="text-xs font-light text-white/40 mb-4 italic">
                                    Problem: {agent.problem}
                                </p>
                                <p className="text-sm font-light text-white/80 mb-4">
                                    {agent.solution}
                                </p>
                                <p className="text-sm font-light text-white/50 mb-6">
                                    {agent.description}
                                </p>
                                <button className="text-xs font-light text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                                    See how it works
                                    <ExternalLink className="w-3 h-3" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Automation Systems */}
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gray-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                            Enterprise Workflows
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-white">
                            Automation Systems
                        </h2>
                        <p className="text-lg text-white/50 font-light">Custom workflows built with n8n and enterprise integrations</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {automationSystems.map((system, index) => (
                            <motion.div
                                key={system.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                            >
                                <div className="h-32 rounded-lg bg-white/[0.03] border border-white/5 mb-4 flex items-center justify-center">
                                    <span className="text-xs text-white/30 font-light">Workflow visualization</span>
                                </div>
                                <h3 className="text-lg font-light tracking-tight text-white mb-3">
                                    {system.title}
                                </h3>
                                <p className="text-sm font-light text-white/60 mb-4">
                                    {system.description}
                                </p>
                                <button className="text-xs font-light text-primary hover:text-primary/80 transition-colors">
                                    Learn more →
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                            Results & Impact
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-white">
                            Case Studies
                        </h2>
                        <p className="text-lg text-white/50 font-light">Deep dives into our flagship projects</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                            >
                                <h3 className="text-2xl font-light tracking-tight text-white mb-4">
                                    {study.name}
                                </h3>
                                <div className="space-y-2 mb-4">
                                    {study.metrics.map((metric, i) => (
                                        <div key={i} className="text-sm font-light text-primary">
                                            {metric}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm font-light text-white/60 mb-6">
                                    {study.description}
                                </p>
                                <Link
                                    to={study.link}
                                    className="inline-flex items-center gap-2 text-sm font-light text-white hover:text-white/80 transition-colors"
                                >
                                    View Case Study
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-black to-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                            How We Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4 text-white">
                            Our Process
                        </h2>
                        <p className="text-lg text-white/50 font-light">Boutique, engineered, precise</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                                    <span className="text-xs font-light text-white/40">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-xl font-light text-white mt-2 mb-2">
                                        {step.name}
                                    </h3>
                                    <p className="text-sm font-light text-white/60">
                                        {step.description}
                                    </p>
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/20" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Trust Us */}
            <section className="px-6 md:px-10 lg:px-16 py-32 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <span className="text-xs font-light uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                            Our Approach
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white">
                            Why Companies Trust Us
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {trustFactors.map((factor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 py-3"
                            >
                                <span className="h-px w-4 bg-primary" />
                                <span className="text-base font-light text-white/80">{factor}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-10 lg:px-16 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-12 md:p-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">
                            Ready to build?
                        </h2>
                        <p className="text-lg font-light text-white/60 mb-2">
                            We take on 3 clients per quarter.
                        </p>
                        <p className="text-base font-light text-white/50 mb-10 max-w-2xl mx-auto">
                            If you want a bespoke AI system built for your business — let's talk.
                        </p>

                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                        >
                            Book an Intro Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};
