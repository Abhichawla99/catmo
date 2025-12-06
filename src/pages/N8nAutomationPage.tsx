import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { Workflow, Zap, Database, Code2, CheckCircle2 } from 'lucide-react';
import { Workflows } from '../components/sections/Workflows';
import { Contact } from '../components/sections/Contact';

const benefits = [
    "Visual workflow builder - no code required",
    "400+ pre-built integrations",
    "Self-hosted or cloud deployment",
    "AI-native with Langchain support",
    "Cost-effective vs. Zapier/Make",
    "Full control & customization"
];

const useCases = [
    {
        icon: Zap,
        title: "Content Generation",
        description: "Automated content creation workflows using AI, from social media posts to blog articles."
    },
    {
        icon: Database,
        title: "Data Processing",
        description: "ETL pipelines, data enrichment, and automated reporting workflows."
    },
    {
        icon: Code2,
        title: "API Orchestration",
        description: "Complex multi-step API workflows connecting your entire tech stack."
    },
    {
        icon: Workflow,
        title: "Business Automation",
        description: "Invoice processing, customer onboarding, and operational workflows."
    }
];

export const N8nAutomationPage = () => {
    return (
        <>
            <SEO
                title="n8n Workflow Automation Agency | Expert n8n Development | manuv.co"
                description="Specialized n8n workflow automation agency. Custom n8n workflows, AI agent integration, and process automation. Expert n8n consultants for enterprise automation."
                keywords="n8n automation, n8n workflow automation, n8n agency, n8n consultants, workflow automation services"
                canonical="https://manuv.co/n8n-automation"
            />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold">
                            n8n Specialists
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            n8n Workflow Automation
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            We build custom n8n workflows that automate your business processes, integrate your tools, and deploy AI agents—all without vendor lock-in.
                        </p>
                    </motion.div>

                    {/* Why n8n */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold mb-12 text-center">Why n8n?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-300">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-bold mb-12 text-center">Common Use Cases</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {useCases.map((useCase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-8"
                                >
                                    <useCase.icon className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                                    <p className="text-gray-400">{useCase.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Workflow Example */}
            <Workflows />

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to automate with n8n?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        We'll build a custom proof-of-concept workflow for your specific use case—free of charge.
                    </p>
                    <button className="px-10 py-5 bg-primary text-white text-lg font-bold rounded-xl hover:bg-primary/90 transition-colors">
                        Request Free POC
                    </button>
                </div>
            </section>

            <Contact />
        </>
    );
};
