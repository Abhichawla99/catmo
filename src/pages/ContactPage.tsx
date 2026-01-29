import { motion } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { Calendar, Linkedin } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export const ContactPage = () => {

    return (
        <>
            <SEO
                title="Contact Us | Catmo Media"
                description="Get in touch with Catmo Media. Inquiries? New projects? Drop us a message and let's see if there's a fit."
                keywords="contact Catmo Media, digital advertising consultation, marketing inquiry"
                canonical="https://www.catmomedia.ca/contact"
            />

            <div className="min-h-screen bg-background pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Inquiries? New Projects?
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Reach out! We love to keep a streamlined operation, and a satisfying relationship with our clients is paramount to success for both parties.
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

                            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                                Drop us a message, and let's see if there's a fit. It is much easier to drive results for a business we support 100%.
                            </p>

                            {/* Contact Form Placeholder */}
                            <div className="bg-background/50 border border-white/5 rounded-2xl p-8 mb-8 min-h-[400px] flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-muted-foreground mb-4">Contact form will be integrated here</p>
                                    <p className="text-sm text-muted-foreground">Name, Email, Message fields</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Alternative Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center space-y-8"
                    >
                        <div>
                            <p className="text-muted-foreground mb-4 font-mono text-xs uppercase tracking-widest">
                                Prefer email?
                            </p>
                            <a
                                href="mailto:info@catmomedia.ca"
                                className="text-2xl font-bold text-white hover:text-primary transition-colors"
                            >
                                info@catmomedia.ca
                            </a>
                        </div>

                        <div className="pt-4">
                            <p className="text-muted-foreground mb-4 font-mono text-xs uppercase tracking-widest">
                                Social
                            </p>
                            <a
                                href="https://www.linkedin.com/company/catmomedia/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xl font-semibold text-white/80 hover:text-[#4148ff] transition-all duration-300 group"
                            >
                                <span className="p-2 rounded-lg bg-white/5 group-hover:bg-[#4148ff]/10 border border-white/10 group-hover:border-[#4148ff]/30 transition-all">
                                    <Linkedin className="w-6 h-6" />
                                </span>
                                <span>Connect on LinkedIn</span>
                            </a>
                        </div>
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
                                <span className="text-foreground font-medium">Boutique service:</span> Personalized attention for every client
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};
