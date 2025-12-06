import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useEffect } from 'react';
import { SEO } from '../components/seo/SEO';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export const ContactPage = () => {
    useEffect(() => {
        // Load TidyCal embed script
        const script = document.createElement('script');
        script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup: remove script on unmount
            const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <>
            <SEO
                title="Contact | Book a Call | manuv.co"
                description="Schedule a strategy call to discuss your AI and automation needs. Custom white-glove service with direct access to our engineering team."
                keywords="AI consultation, automation consultation, book a call"
                canonical="https://manuv.co/contact"
            />

            <div className="min-h-screen bg-background pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Let's talk.
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Book a call with our engineering team. Custom white-glove service —
                            a direct conversation about what you're trying to build.
                        </p>
                    </motion.div>

                    {/* Calendly/Cal.com Embed Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 mb-16"
                    >
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
                                <Calendar className="w-8 h-8 text-primary" />
                            </div>

                            <h2 className="text-2xl font-bold mb-4">Schedule a Strategy Call</h2>
                            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                                30-minute call to understand your goals, discuss potential solutions,
                                and determine if we're the right fit.
                            </p>

                            {/* TidyCal Calendar Embed */}
                            <div className="bg-background/50 border border-white/5 rounded-2xl p-8 mb-8 min-h-[600px]">
                                <div 
                                    className="tidycal-embed" 
                                    data-path="abhixchawla/manuvstrategy"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Alternative Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-muted-foreground mb-4">
                            Prefer email? Reach us directly at
                        </p>
                        <a
                            href="mailto:hello@manuv.co"
                            className="text-xl font-semibold text-primary hover:underline"
                        >
                            hello@manuv.co
                        </a>
                    </motion.div>

                    {/* Trust Builder */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-20 text-center"
                    >
                        <div className="inline-block border border-white/10 rounded-full px-6 py-3">
                            <p className="text-sm text-muted-foreground">
                                <span className="text-foreground font-medium">Response time:</span> We typically respond within 24 hours
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};
