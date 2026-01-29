import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 sm:py-40 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative">
                {/* Asymmetric Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    {/* Left: Badge and Headline - 1 column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-l-4 border-primary rounded-r-full">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-white font-mono text-xs uppercase tracking-widest">Inquiries? New Projects?</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter">
                            Reach <span className="italic font-normal text-white/90">Out</span>.
                            <br />
                            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-3xl md:text-5xl tracking-normal mt-2 block font-extralight">
                                Let's connect.
                            </span>
                        </h2>
                    </motion.div>

                    {/* Middle: Description - 1 column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <p className="text-lg text-gray-300 leading-relaxed">
                            We love to keep a streamlined operation, and a satisfying relationship with our clients is paramount to success for both parties.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            It is much easier to drive results for a business we support 100%. <span className="text-primary font-bold">Drop us a message, and let's see if there's a fit!</span>
                        </p>
                        <div className="pt-4">
                            <div className="flex items-center gap-3">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest whitespace-nowrap">
                                    Boutique digital advertising
                                </p>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/20 to-transparent" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: CTA Button - 1 column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-start lg:items-end"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, x: 4 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <a
                                href="https://calendar.app.google/QdxMrAa98Eq9Q7aU7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block w-full sm:w-auto px-10 py-6 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-2xl shadow-primary/20 flex items-center justify-center sm:justify-start gap-4 overflow-hidden border-2 border-transparent hover:border-white/30"
                            >
                                <span className="relative z-10 flex items-center gap-3 text-lg">
                                    <span>Book a Meeting</span>
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                            </a>
                        </motion.div>

                        <p className="mt-4 text-xs text-gray-500 font-mono uppercase tracking-widest text-right">
                            Personalized attention
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-primary/30 via-transparent to-transparent" />
                <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-accent/30 via-transparent to-transparent" />
            </div>
        </section>
    );
};
