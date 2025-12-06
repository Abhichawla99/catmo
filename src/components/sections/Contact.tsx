import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact = () => {
    return (
        <section id="contact" className="py-40 px-6 relative overflow-hidden">
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
                            <span className="text-primary font-mono text-xs uppercase tracking-widest">Limited Capacity</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
                            Ready to
                            <br />
                            <span className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">
                                build?
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
                            We only take on <span className="text-primary font-bold">3 new clients</span> per quarter to ensure focused, bespoke quality.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Let's see if we're a match.
                        </p>
                        <div className="pt-4">
                            <div className="flex items-center gap-3">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest whitespace-nowrap">
                                    Bespoke solutions
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
                            <Link to="/contact" className="group relative block px-10 py-6 bg-white text-black font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl shadow-white/20 flex items-center gap-4 overflow-hidden border-2 border-transparent hover:border-white/30">
                                <span className="relative z-10 flex items-center gap-3 text-lg">
                                    <span>Book Intro Call</span>
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                            </Link>
                        </motion.div>
                        
                        <p className="mt-4 text-xs text-gray-500 font-mono uppercase tracking-widest text-right">
                            White-glove service
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
