import { motion } from 'framer-motion';
import { Bot, Clock, TrendingUp, Shield, Zap, DollarSign, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
    {
        icon: Clock,
        title: '24/7 Operations',
        description: 'Your agents never sleep. Handle customer inquiries, process orders, and manage workflows around the clock without human intervention.',
        stat: '99.9%',
        statLabel: 'Uptime',
        color: 'from-blue-500/20 to-cyan-500/20',
        accent: 'blue'
    },
    {
        icon: TrendingUp,
        title: 'Scale Instantly',
        description: 'Handle 10x the volume without hiring. Your autonomous agents scale with demand, not headcount.',
        stat: '10x',
        statLabel: 'Capacity',
        color: 'from-purple-500/20 to-pink-500/20',
        accent: 'purple'
    },
    {
        icon: DollarSign,
        title: 'Cut Costs',
        description: 'Reduce operational costs by 60-80%. One agent replaces multiple full-time employees while improving accuracy.',
        stat: '75%',
        statLabel: 'Savings',
        color: 'from-green-500/20 to-emerald-500/20',
        accent: 'green'
    },
    {
        icon: Shield,
        title: 'Zero Mistakes',
        description: 'Eliminate human error. Agents follow protocols perfectly, every time. No training, no sick days, no mistakes.',
        stat: '100%',
        statLabel: 'Accuracy',
        color: 'from-yellow-500/20 to-orange-500/20',
        accent: 'yellow'
    },
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Process requests in seconds, not hours. Your agents work at the speed of code, not human limitations.',
        stat: '10x',
        statLabel: 'Faster',
        color: 'from-pink-500/20 to-rose-500/20',
        accent: 'pink'
    },
    {
        icon: Bot,
        title: 'Always Learning',
        description: 'Agents improve over time. They learn from interactions, optimize workflows, and get smarter with every task.',
        stat: '∞',
        statLabel: 'Improvement',
        color: 'from-indigo-500/20 to-violet-500/20',
        accent: 'indigo'
    }
];

export const WhyAgents = () => {
    return (
        <section className="py-40 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Asymmetric Header */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary/10 border-l-4 border-primary rounded-r-full"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono text-xs uppercase tracking-widest">Why Agents</span>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Large Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
                                Stop paying
                                <br />
                                <span className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">
                                    for time.
                                </span>
                            </h2>
                            <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
                        </motion.div>

                        {/* Right: Subheadline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-4 pt-8"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-300">
                                Start building assets.
                            </h3>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                                Every hour your team spends on repetitive tasks is money walking out the door. 
                                Autonomous agents turn those hours into automated revenue streams that work while you sleep.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Staggered Benefits Grid - Asymmetric Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        const isLarge = index === 0 || index === 3;
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
                                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${benefit.color} backdrop-blur-sm hover:border-white/20 transition-all duration-500 ${
                                    isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                                }`}
                            >
                                {/* Diagonal Accent Line */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Content */}
                                <div className="relative p-8 h-full flex flex-col">
                                    {/* Stat - Top Right */}
                                    <div className="absolute top-6 right-6 text-right">
                                        <motion.div 
                                            className="text-4xl font-black text-white/90"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {benefit.stat}
                                        </motion.div>
                                        <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-mono mt-1">
                                            {benefit.statLabel}
                                        </div>
                                    </div>

                                    {/* Icon - Large and Bold */}
                                    <div className="mb-8 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                                        <Icon className="w-8 h-8 text-white/90" />
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-3 text-white/95">{benefit.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm">{benefit.description}</p>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div className="mt-6 h-1 w-16 bg-gradient-to-r from-white/20 to-transparent group-hover:w-24 transition-all duration-300" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA - Asymmetric Design */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mt-32"
                >
                    {/* Background Accent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl -z-10" />
                    <div className="absolute top-0 left-0 w-1/2 h-full border-l border-t border-b border-white/5 rounded-l-3xl" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 p-12 lg:p-16">
                        {/* Left: Large Text - Takes 2 columns */}
                        <div className="lg:col-span-2 space-y-8 flex flex-col justify-center">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-l-4 border-primary rounded-r-full">
                                    <Sparkles className="w-4 h-4 text-primary" />
                                    <span className="text-primary font-mono text-xs uppercase tracking-widest">Let's Build</span>
                                </div>
                                <h3 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
                                    Your first agent
                                    <br />
                                    <span className="text-gray-400">starts here</span>
                                </h3>
                            </div>
                            <div className="space-y-3">
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Join companies using agents to eliminate repetitive work and scale without headcount.
                                </p>
                                <div className="flex items-center gap-3 pt-2">
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest whitespace-nowrap">
                                        Custom white-glove service
                                    </p>
                                    <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
                                </div>
                            </div>
                        </div>

                        {/* Right: CTA Buttons - Takes 3 columns */}
                        <div className="lg:col-span-3 flex flex-col justify-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.02, x: 4 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link to="/contact" className="group relative block px-10 py-7 bg-white text-black font-bold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl shadow-white/20 flex items-center justify-between overflow-hidden border-2 border-transparent hover:border-white/20">
                                    <span className="relative z-10 flex items-center gap-4 text-lg">
                                        <span>Book Discovery Call</span>
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                                </Link>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.01, x: 2 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                <Link to="/work" className="group block px-10 py-7 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                                    <span>See Case Studies</span>
                                    <ArrowRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Decorative Elements */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="absolute bottom-4 left-12 w-24 h-px bg-primary/30" />
                    <div className="absolute bottom-4 right-12 w-16 h-px bg-accent/30" />
                </motion.div>
            </div>
        </section>
    );
};
