import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "orphic.so",
        description: "AI-native content generation platform.",
        gradient: "from-purple-600 via-violet-600 to-indigo-600",
        accentGradient: "from-purple-400/20 via-violet-500/30 to-indigo-500/20",
        link: "https://orphic.so"
    },
    {
        title: "milna.io",
        description: "Intelligent workflow automation for enterprise.",
        gradient: "from-blue-600 via-cyan-600 to-teal-600",
        accentGradient: "from-blue-400/20 via-cyan-500/30 to-teal-500/20",
        link: "https://milna.io"
    }
];

export const Showcase = () => {
    return (
        <section id="work" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Works</h2>
                    <p className="text-gray-400 max-w-xl">
                        A glimpse into the bespoke solutions we've crafted for forward-thinking companies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative block aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl"
                        >
                            {/* Base gradient layer */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-all duration-500`} />

                            {/* Accent gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-tl ${project.accentGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                            {/* Grain texture */}
                            <div className="grain absolute inset-0 opacity-40" />

                            {/* Radial glow effect */}
                            <div className={`absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 70%)' }} />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 relative z-10">
                                <div className="transform transition-all duration-300 group-hover:translate-y-[-12px]">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-2xl font-bold drop-shadow-lg">{project.title}</h3>
                                        <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg" />
                                    </div>
                                    <p className="text-gray-200 drop-shadow-md">{project.description}</p>
                                </div>
                            </div>

                            {/* Border glow on hover */}
                            <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500`} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
