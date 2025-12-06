import { motion } from 'framer-motion';
import { Bot, Send, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const demoMessages = [
    { role: 'ai', text: "Hello! I'm your custom AI agent. How can I optimize your workflow today?" },
    { role: 'user', text: "Analyze our Q3 sales data and find inefficiencies." },
    { role: 'ai', text: "I've analyzed the dataset. Notable inefficiency found in supply chain logistics causing 15% margin drag. Generating report..." },
    { role: 'user', text: "Great, schedule a meeting with the ops team." },
    { role: 'ai', text: "Meeting scheduled for Tomorrow at 10 AM with Operations. Calendar invite sent." }
];

export const Agents = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev < demoMessages.length ? prev + 1 : 0));
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="agents" className="py-24 px-6 bg-white/5 border-y border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-32 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 text-primary mb-4">
                            <Sparkles className="w-5 h-5" />
                            <span className="font-semibold tracking-wide uppercase text-sm">Intelligent Automation</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Agents that <br />
                            <span className="text-gray-400">actually work.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We don't just wrap GPT. We build autonomous agents integrated deep into your
                            business processes—handling support, logistics, and data analysis 24/7.
                        </p>
                    </motion.div>
                </div>

                <div className="flex-1 w-full max-w-md">
                    <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Fake Browser Header */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <div className="text-xs text-gray-500 ml-2">Manuv Agent v2.0</div>
                        </div>

                        {/* Chat Area */}
                        <div className="p-4 h-[400px] flex flex-col gap-4 overflow-y-auto">
                            {demoMessages.slice(0, activeIndex + 1).map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                            ? 'bg-primary text-white rounded-br-none'
                                            : 'bg-white/10 text-gray-200 rounded-bl-none'
                                        }`}>
                                        {msg.role === 'ai' && <Bot className="w-4 h-4 mb-1 text-primary" />}
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-3 border-t border-white/5 bg-white/[0.02]">
                            <div className="flex items-center gap-2 bg-black/50 p-2 rounded-xl border border-white/5">
                                <div className="w-full text-sm text-gray-600 px-2">Type a message...</div>
                                <button className="p-2 bg-primary/20 text-primary rounded-lg">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
