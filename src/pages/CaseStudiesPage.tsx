import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { ExternalLink, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Contact } from '../components/sections/Contact';

const caseStudies = [
    {
        title: "Luxury Fashion Retailer",
        subtitle: "Scaling High-End eCommerce to 3000% ROAS",
        gradient: "from-primary via-secondary to-accent",
        link: "/case-studies/luxury-fashion-retailer",
        challenge: "A luxury designer fashion retailer needed to scale sales and market presence in a highly competitive global market while maintaining brand prestige.",
        solution: "Orchestrated a full-funnel strategy using Performance Max, Google Shopping, and a sophisticated video creative strategy (YouTube Shorts vs. Landscape).",
        results: [
            { metric: "3000%+", label: "Peak ROAS" },
            { metric: "10x", label: "YouTube Growth" },
            { metric: "600%+", label: "Avg ROAS" }
        ],
        tech: ["P-Max", "Google Shopping", "YouTube Ads", "Retargeting Engine"]
    },
    {
        title: "Cleanfiniti",
        subtitle: "Global Google Ads Strategy & Scaling",
        gradient: "from-secondary via-primary to-accent",
        link: "/case-studies/cleanfiniti-google-ads",
        challenge: "Residential cleaning company struggling with high CAC and ineffective self-managed campaigns in a saturated market.",
        solution: "Implemented a structured Google Search hybrid model combined with Performance Max campaigns to maximize full-funnel efficiency.",
        results: [
            { metric: "94%", label: "Lower Cost/Conv" },
            { metric: "300%", label: "Higher Conversions" },
            { metric: "75%", label: "Budget Optimized" }
        ],
        tech: ["Google Ads", "P-Max", "Search Analytics", "Conversion Tracking"]
    }
];

export const CaseStudiesPage = () => {
    return (
        <>
            <SEO
                title="Catmo Media | Case Studies | Digital Advertising Results"
                description="See how Catmo Media helps businesses scale through strategic digital advertising. Real case studies with measurable results from high-growth industries."
                keywords="digital advertising case studies, Google ads success, conversion optimization, Catmo Media results"
                canonical="https://catmomedia.ca/case-studies"
            />

            <section className="pt-32 pb-24 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 tracking-tighter leading-tight">
                            Engineering <span className="italic font-normal text-primary">Growth</span>.
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Real projects, real results. See how we've helped businesses transform their growth with data-driven advertising and strategic optimization.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {caseStudies.map((study, index) => {
                            const isExternal = study.link.startsWith('http');
                            const CardWrapper = isExternal ? 'a' : Link;
                            const wrapperProps = isExternal
                                ? { href: study.link, target: "_blank", rel: "noopener noreferrer" }
                                : { to: study.link };

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <CardWrapper
                                        {...(wrapperProps as any)}
                                        className="block group bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(30,34,170,0.1)]"
                                    >
                                        {/* Header */}
                                        <div className={`bg-gradient-to-r ${study.gradient} p-6 md:p-12 relative overflow-hidden`}>
                                            <div className="grain absolute inset-0 opacity-30 px-4 md:px-20" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                                            <div className="relative z-10">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <h2 className="text-3xl md:text-5xl font-bold mb-2 group-hover:scale-[1.02] transition-transform duration-500 origin-left">{study.title}</h2>
                                                        <p className="text-white/80 text-lg md:text-xl font-light">{study.subtitle}</p>
                                                    </div>
                                                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                                        {isExternal ? <ExternalLink className="w-6 h-6" /> : <ArrowRight className="w-6 h-6" />}
                                                    </div>
                                                </div>

                                                {/* Results */}
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                                                    {study.results.map((result, i) => (
                                                        <div key={i} className="text-center">
                                                            <div className="text-3xl md:text-5xl font-black mb-1 tracking-tight">{result.metric}</div>
                                                            <div className="text-xs md:text-sm uppercase tracking-widest text-white/70 font-medium">{result.label}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 md:p-12 bg-white/[0.02]">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                                            <Users className="w-5 h-5 text-primary" />
                                                        </div>
                                                        <h3 className="text-xl font-bold text-white">The Challenge</h3>
                                                    </div>
                                                    <p className="text-gray-400 leading-relaxed text-lg font-light">{study.challenge}</p>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                                                            <Zap className="w-5 h-5 text-accent" />
                                                        </div>
                                                        <h3 className="text-xl font-bold text-white">Strategic Solution</h3>
                                                    </div>
                                                    <p className="text-gray-400 leading-relaxed text-lg font-light">{study.solution}</p>
                                                </div>
                                            </div>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap items-center gap-3 pt-8 border-t border-white/5">
                                                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold mr-2">Core Tech:</span>
                                                {study.tech.map((tech, i) => (
                                                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-400 group-hover:text-white transition-colors">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardWrapper>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-20 text-center bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 md:p-12"
                    >
                        <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h2 className="text-3xl font-bold mb-4">Ready for similar results?</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can build a custom advertising system for your business.
                        </p>
                        <a
                            href="https://calendar.app.google/QdxMrAa98Eq9Q7aU7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all text-center relative overflow-hidden group border-2 border-transparent hover:border-white/20"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                <span>Book a Meeting</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                        </a>
                    </motion.div>
                </div>
            </section>

            <Contact />
        </>
    );
};
