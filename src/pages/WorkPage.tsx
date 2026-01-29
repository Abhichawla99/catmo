import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import Hero from '../components/ui/neural-network-hero';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';

const flagshipProducts = [
    {
        name: 'GLOBAL ADS ENGINE',
        description: 'Sophisticated advertising architecture combining Performance Max and Search hybrid models to scale eCommerce and service businesses.',
        metrics: [
            '3000% Max ROAS achieved',
            '94% lower cost per conversion',
            '10× growth in organic views'
        ],
        features: [
            'Full-funnel Google Ads orchestration',
            'Video creative strategy (Shorts vs. Landscape)',
            'Dynamic retargeting engines',
            'Compliance-focused campaign structures',
            'Real-time performance analytics dashboards',
            'AI-powered audience segmentation',
            'Automated budget optimization'
        ],
        link: '/case-studies'
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
        name: 'Luxury Fashion Retailer',
        metrics: ['3000%+ Peak ROAS', '10× YouTube Growth'],
        description: 'Scaling high-end eCommerce through strategic Performance Max and video creative orchestration',
        link: '/case-studies/luxury-fashion-retailer'
    },
    {
        name: 'Cleanfiniti',
        metrics: ['94% Lower Cost/Conv', '300% Higher Conversions'],
        description: 'Global Google Ads strategy and budget optimization for residential services',
        link: '/case-studies/cleanfiniti-google-ads'
    }
];

const processSteps = [
    { name: 'Discovery', description: 'Map brand position, business goals, and ideal customers' },
    { name: 'Targeting', description: 'Create user avatars and map the entire customer journey' },
    { name: 'Attribution', description: 'Build tracking architecture to measure every touchpoint' },
    { name: 'Amplification', description: 'Develop and execute comprehensive advertising strategies' },
    { name: 'Transparency', description: 'Real-time ROI tracking via live performance dashboards' }
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
                title="Work | Digital Advertising & Performance Marketing | Catmo Media"
                description="Measurable results. Data-driven growth. See how Catmo Media scales businesses through high-impact digital advertising and strategic optimization."
                keywords="digital advertising, performance marketing, Google ads, conversion optimization, Catmo Media work"
                canonical="https://catmomedia.ca/work"
                ogUrl="https://catmomedia.ca/work"
            />

            {/* Hero Section with Neural Network Background */}
            <Hero
                title={
                    <>
                        Proven <span className="italic font-normal text-primary">strategies</span>. Measurable <span className="italic font-normal text-primary underline decoration-primary/30 underline-offset-8">growth</span>.
                    </>
                }
                description="Here's what we've built — from full AI platforms to autonomous agents to deeply integrated automation systems."
                badgeText="Our Portfolio"
                badgeLabel="Work"
                ctaButtons={[
                    { text: "Play a Game", href: "/game", primary: true },
                    { text: "Book a Meeting", href: "https://calendar.app.google/QdxMrAa98Eq9Q7aU7", isExternal: true }
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
                        <p className="text-lg text-white/50 font-light">Custom advertising frameworks fully engineered by Catmo Media</p>
                    </div>

                    <div className="space-y-12">
                        {flagshipProducts.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-12"
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

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-8">
                                    {product.metrics.map((metric, i) => (
                                        <div key={i} className="rounded-2xl border border-primary/20 bg-primary/5 p-4 group/metric hover:border-primary/40 transition-all">
                                            <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover/metric:from-primary group-hover/metric:to-secondary transition-all">{metric}</span>
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
                                <Link
                                    to={agent.name === 'AI Customer Support Agent' ? '/agents/ai-customer-support-agent' :
                                        agent.name === 'AI SDR / Outbound Agent' ? '/agents/ai-sdr-agent' :
                                            agent.name === 'AI Research Agent' ? '/agents/ai-research-agent' :
                                                agent.name === 'AI Content Agent' ? '/agents/ai-content-agent' :
                                                    agent.name === 'AI Operations Agent' ? '/agents/ai-operations-agent' :
                                                        '/agents/ai-data-agent'}
                                    className="text-xs font-light text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                                >
                                    See how it works
                                    <ExternalLink className="w-3 h-3" />
                                </Link>
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
                                <Link
                                    to={system.title === 'Lead Qualification & Routing' ? '/automations/lead-qualification-routing' :
                                        system.title === 'CRM Enrichment Engine' ? '/automations/crm-enrichment-engine' :
                                            system.title === 'Inbox → CRM Ingestion' ? '/automations/inbox-crm-ingestion' :
                                                system.title === 'Client Onboarding Flow' ? '/automations/client-onboarding-flow' :
                                                    system.title === 'Automated Reporting System' ? '/automations/automated-reporting-system' :
                                                        '/automations/document-processing-pipeline'}
                                    className="text-xs font-light text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                                >
                                    Learn more →
                                </Link>
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
                    <div className="rounded-3xl border border-primary/20 bg-white/[0.02] p-8 md:p-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4">
                            Ready to build?
                        </h2>
                        <p className="text-lg font-light text-white/60 mb-2">
                            We take on 3 clients per quarter.
                        </p>
                        <p className="text-base font-light text-white/50 mb-10 max-w-2xl mx-auto">
                            If you want a bespoke AI system built for your business — let's talk.
                        </p>

                        <a
                            href="https://calendar.app.google/QdxMrAa98Eq9Q7aU7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full sm:w-auto gap-3 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                        >
                            Book a Meeting
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};
