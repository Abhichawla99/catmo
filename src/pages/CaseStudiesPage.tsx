import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { ExternalLink, TrendingUp, Users, Zap } from 'lucide-react';
import { Contact } from '../components/sections/Contact';

const caseStudies = [
    {
        title: "orphic.so",
        subtitle: "AI-Native Content Generation Platform",
        gradient: "from-purple-600 via-violet-600 to-indigo-600",
        link: "https://orphic.so",
        challenge: "Building a scalable AI content platform that could handle multiple content types and maintain brand voice consistency across thousands of generated pieces.",
        solution: "Custom AI pipeline with fine-tuned models, intelligent caching, and real-time quality scoring. Integrated with n8n for workflow orchestration.",
        results: [
            { metric: "95%", label: "Faster content creation" },
            { metric: "10x", label: "Output volume increase" },
            { metric: "4.8/5", label: "Quality rating" }
        ],
        tech: ["GPT-4", "n8n", "Custom ML Models", "Vector DB"]
    },
    {
        title: "milna.io",
        subtitle: "Intelligent Workflow Automation for Enterprise",
        gradient: "from-blue-600 via-cyan-600 to-teal-600",
        link: "https://milna.io",
        challenge: "Enterprise needed to automate complex multi-step processes across 15+ different tools without disrupting existing workflows.",
        solution: "Built comprehensive n8n automation hub with custom nodes, AI-powered decision trees, and intelligent error handling.",
        results: [
            { metric: "40%", label: "Cost reduction" },
            { metric: "85%", label: "Manual tasks eliminated" },
            { metric: "99.9%", label: "Uptime achieved" }
        ],
        tech: ["n8n", "Custom Nodes", "API Integration", "Monitoring"]
    },
    {
        title: "Thinking Calgary",
        subtitle: "AI Social Media Content Generator",
        gradient: "from-orange-600 via-red-600 to-pink-600",
        link: "#",
        challenge: "Local media brand needed to maintain consistent posting schedule with timely, relevant content about Calgary news and events.",
        solution: "Autonomous AI agent that researches news via Perplexity, generates images, writes captions, and posts to Slack—fully automated on 8-hour schedule.",
        results: [
            { metric: "100%", label: "Automation rate" },
            { metric: "3x", label: "Content output" },
            { metric: "8hrs", label: "Saved per week" }
        ],
        tech: ["Langchain Agent", "GPT-4", "Perplexity", "n8n", "Image Generation"]
    }
];

export const CaseStudiesPage = () => {
    return (
        <>
            <SEO
                title="AI Automation Case Studies | Real Results from Custom AI Projects | manuv.co"
                description="See how we've helped businesses with custom AI development and n8n automation. Real case studies with metrics from orphic.so, milna.io, and more."
                keywords="AI automation case studies, custom AI examples, n8n automation results, AI project portfolio"
                canonical="https://manuv.co/case-studies"
            />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Case Studies
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Real projects, real results. See how we've helped businesses transform their operations with bespoke AI and automation.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
                            >
                                {/* Header */}
                                <div className={`bg-gradient-to-r ${study.gradient} p-8 md:p-12 relative overflow-hidden`}>
                                    <div className="grain absolute inset-0 opacity-30" />
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-2">{study.title}</h2>
                                                <p className="text-white/80 text-lg">{study.subtitle}</p>
                                            </div>
                                            {study.link !== "#" && (
                                                <a
                                                    href={study.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 bg-white/20 hover:bg-white/30 rounded-xl transition-colors"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>

                                        {/* Results */}
                                        <div className="grid grid-cols-3 gap-6 mt-8">
                                            {study.results.map((result, i) => (
                                                <div key={i} className="text-center">
                                                    <div className="text-3xl md:text-4xl font-bold mb-1">{result.metric}</div>
                                                    <div className="text-sm text-white/70">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                                <Users className="w-5 h-5 text-primary" />
                                                Challenge
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                                <Zap className="w-5 h-5 text-accent" />
                                                Solution
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed">{study.solution}</p>
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-500 mb-3">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {study.tech.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-20 text-center bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12"
                    >
                        <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h2 className="text-3xl font-bold mb-4">Ready for similar results?</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can build a custom AI solution for your business.
                        </p>
                        <button className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all">
                            Start Your Project
                        </button>
                    </motion.div>
                </div>
            </section>

            <Contact />
        </>
    );
};
