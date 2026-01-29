import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';

export const AboutPage = () => {
    return (
        <>
            <SEO
                title="About | Catmo Media"
                description="A boutique digital advertising partner crafting bespoke solutions for purpose-driven businesses in regulated industries."
                keywords="digital advertising agency, boutique marketing, about Catmo Media"
                canonical="https://www.catmomedia.ca/about"
                ogUrl="https://www.catmomedia.ca/about"
            />

            <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative">
                    {/* Hero - Asymmetric */}
                    <div className="mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary/10 border-l-4 border-primary rounded-r-full"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-white font-mono text-xs uppercase tracking-widest">About</span>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                            {/* Left: Large Headline - 3 columns */}
                            <div className="lg:col-span-3 space-y-6">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                                    Amplifying purpose-driven
                                    <br />
                                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                        businesses.
                                    </span>
                                </h1>
                                <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
                            </div>

                            {/* Right: Description - 2 columns */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="lg:col-span-2 space-y-4 pt-8"
                            >
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Catmo Media operates as a boutique digital advertising partner, crafting bespoke solutions for each client's unique objectives.
                                    We prioritize quality over quantity, maintaining a select client roster that allows us to deliver personalized attention.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Approach - Split Layout */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-32"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                            {/* Left: Stats Card - 1 column */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-32 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                            <Users className="w-7 h-7 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-4xl font-black text-white">100%</div>
                                            <div className="text-xs text-gray-500 uppercase tracking-[0.2em] font-mono">Committed</div>
                                        </div>
                                    </div>
                                    <div className="h-px bg-white/10" />
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        We only work with businesses we support 100%. Quality relationships drive better results.
                                    </p>
                                </div>
                            </div>

                            {/* Right: Content - 4 columns */}
                            <div className="lg:col-span-4 space-y-8">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Approach</h2>
                                    <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
                                        <div className="relative pl-8 border-l-2 border-primary/30">
                                            <p>
                                                We combine technical expertise with creative insight to develop customized campaigns that truly reflect your brand's distinct voice and business goals.
                                                This hands-on approach enables us to be nimble, responsive, and fully invested in your success.
                                            </p>
                                        </div>
                                        <div className="relative pl-8 border-l-2 border-white/10">
                                            <p>
                                                Success begins with proper foundations. We start by analyzing your brand positioning, value proposition, and competitive landscape before launching any campaigns.
                                                This strategic groundwork ensures every dollar of your advertising budget works harder.
                                            </p>
                                        </div>
                                        <div className="relative pl-8 border-l-2 border-white/10">
                                            <p>
                                                Our systematic approach includes audience research, message testing, and continuous optimization to refine campaigns based on real-world performance data.
                                                We believe ethical advertising practices not only protect consumers but ultimately deliver better results for our clients.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Values - Asymmetric Grid */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-32"
                    >
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
                            <div className="h-px w-32 bg-gradient-to-r from-primary to-transparent" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Target,
                                    title: 'Quality over quantity',
                                    description: 'We prioritize quality over quantity, maintaining a select client roster that allows us to deliver personalized attention and strategic depth to every campaign.'
                                },
                                {
                                    icon: Shield,
                                    title: 'Privacy and transparency',
                                    description: 'Privacy and transparency form the cornerstone of our business ethics. We partner exclusively with data providers who prioritize consumer privacy and maintain rigorous compliance standards.'
                                },
                                {
                                    icon: Users,
                                    title: 'Boutique partnership',
                                    description: 'We operate as a boutique digital advertising partner, crafting bespoke solutions for each client\'s unique objectives. Every campaign reflects your brand\'s distinct voice.'
                                },
                                {
                                    icon: Zap,
                                    title: 'Data-driven results',
                                    description: 'Our systematic approach includes audience research, message testing, and continuous optimization based on real-world performance data to ensure measurable growth.'
                                }
                            ].map((value, i) => {
                                const Icon = value.icon;
                                const isLarge = i === 0;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                                        className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01] hover:border-primary/30 transition-all duration-500 ${isLarge ? 'md:col-span-2' : ''
                                            }`}
                                    >
                                        {/* Diagonal Accent */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative p-6 sm:p-8">
                                            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                                <Icon className="w-7 h-7 text-primary" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{value.description}</p>
                                            <div className="mt-6 h-1 w-16 bg-gradient-to-r from-white/20 to-transparent group-hover:w-24 transition-all duration-300" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.section>

                    {/* What Sets Us Apart - Sidebar Style */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-32"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                            <div className="lg:col-span-2">
                                <div className="inline-block px-4 py-2 bg-primary/10 border-l-4 border-primary rounded-r-full mb-6">
                                    <span className="text-primary font-mono text-xs uppercase tracking-widest">What Sets Us Apart</span>
                                </div>
                            </div>
                            <div className="lg:col-span-3 space-y-6 text-gray-300 leading-relaxed text-lg">
                                <p>
                                    We specialize in digital advertising strategies for regulated industries where traditional marketing approaches often fall short.
                                    Our data-driven campaigns leverage search, social, and programmatic marketing to find your ideal customers while navigating complex compliance requirements.
                                </p>
                                <p>
                                    We don't use templates or one-size-fits-all solutions. Every campaign is customized to reflect your brand's distinct voice and business goals,
                                    integrated with your existing marketing infrastructure, and designed to evolve with your business.
                                </p>
                                <p>
                                    We're selective about the businesses we work with. It is much easier to drive results for a business we support 100%.
                                    If we're not the right fit, we'll tell you honestly—and point you toward someone who is.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* CTA - Asymmetric */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl -z-10" />
                        <div className="absolute top-0 left-0 w-1/2 h-full border-l border-t border-b border-white/5 rounded-l-3xl" />

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 p-6 sm:p-12 lg:p-16">
                            {/* Left: Text - 2 columns */}
                            <div className="lg:col-span-2 space-y-6 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-l-4 border-primary rounded-r-full">
                                    <Sparkles className="w-4 h-4 text-primary" />
                                    <span className="text-white font-mono text-xs uppercase tracking-widest">Let's Talk</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                    Ready to grow?
                                    <br />
                                    <span className="text-gray-400">Let's connect</span>
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Drop us a message, and let's see if there's a fit. We love to keep a streamlined operation,
                                    and a satisfying relationship with our clients is paramount to success for both parties.
                                </p>
                            </div>

                            {/* Right: CTA Button - 3 columns */}
                            <div className="lg:col-span-3 flex flex-col justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.02, x: 4 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <a
                                        href="https://calendar.app.google/QdxMrAa98Eq9Q7aU7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative block w-full sm:w-auto px-8 py-5 sm:px-10 sm:py-7 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-2xl shadow-primary/20 flex items-center justify-center sm:justify-between overflow-hidden border-2 border-transparent hover:border-white/30"
                                    >
                                        <span className="relative z-10 flex items-center gap-4 text-lg">
                                            <span>Book a Meeting</span>
                                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                                    </a>
                                </motion.div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="absolute bottom-4 left-12 w-24 h-px bg-primary/30" />
                        <div className="absolute bottom-4 right-12 w-16 h-px bg-accent/30" />
                    </motion.section>
                </div>
            </div>
        </>
    );
};
