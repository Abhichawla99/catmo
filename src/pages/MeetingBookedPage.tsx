import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';

export const MeetingBookedPage = () => {
    return (
        <>
            <SEO
                title="Meeting Booked | manuv.co"
                description="Your meeting has been successfully booked. We'll be in touch soon."
                keywords="meeting booked, confirmation"
                canonical="https://manuv.co/meetingbooked"
            />

            <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-4xl mx-auto px-6 relative">
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="flex justify-center mb-12"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                            <div className="relative w-24 h-24 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center">
                                <CheckCircle2 className="w-12 h-12 text-primary" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary/10 border-l-4 border-primary rounded-r-full">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-primary font-mono text-xs uppercase tracking-widest">Meeting Confirmed</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            You're all set.
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                            Your meeting has been successfully booked. We're looking forward to learning about your project 
                            and exploring how we can help.
                        </p>
                    </motion.div>

                    {/* Next Steps */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-16"
                    >
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                            <h2 className="text-2xl font-bold mb-8 text-center">What happens next?</h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Calendar,
                                        title: 'Calendar confirmation',
                                        description: "You'll receive a calendar invite with all the meeting details. Add it to your calendar so you don't miss it."
                                    },
                                    {
                                        icon: Mail,
                                        title: 'Pre-meeting prep',
                                        description: "We'll send you a brief questionnaire a few days before the call to help us prepare and make the most of our time together."
                                    },
                                    {
                                        icon: Sparkles,
                                        title: 'The conversation',
                                        description: "During the call, we'll discuss your business, challenges, and goals. We'll be honest about whether we're the right fit."
                                    }
                                ].map((step, i) => {
                                    const Icon = step.icon;
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            className="flex gap-6 items-start"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                                <p className="text-gray-400 leading-relaxed">{step.description}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mb-16 text-center"
                    >
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <p className="text-gray-300 mb-4">
                                <span className="font-semibold">Need to reschedule?</span> No problem. Just reply to the calendar invite 
                                or email us at <a href="mailto:hello@manuv.co" className="text-primary hover:underline">hello@manuv.co</a>
                            </p>
                            <p className="text-sm text-gray-500">
                                We typically respond within 24 hours.
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            to="/"
                            className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-3"
                        >
                            <span>Back to Home</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/work"
                            className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-3"
                        >
                            <span>See Our Work</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

