import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Search, BarChart3, MessageSquare, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const CleanfinitiCaseStudyPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Case Study: How Google Ads Transformed Cleanfiniti's Customer Acquisition"
                description="Learn how Catmo Media used professional Google Ads management and Performance Max campaigns to slash costs by 94% and boost conversions by 300% for Cleanfiniti."
                keywords="Google Ads case study, Performance Max results, digital marketing ROI, Cleanfiniti success story, Catmo Media"
                canonical="https://manuv.co/case-studies-manuv/cleanfiniti-google-ads"
            />

            {/* Hero Section */}
            <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-primary/20 via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <TrendingUp className="w-8 h-8 text-primary" />
                            <span className="text-sm font-light uppercase tracking-wider text-primary/80">Case Study</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white leading-tight">
                            How <span className="font-bold">Google Ads</span> Transformed <span className="italic font-normal text-primary">Customer Acquisition</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            Learn the impact of professional management for impressive ROI and a drastic reduction of advertising budget.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                            <div>
                                <div className="text-primary text-3xl font-bold mb-1">94%</div>
                                <div className="text-white/60 text-xs uppercase tracking-wider">Cost/Conv Drop</div>
                            </div>
                            <div>
                                <div className="text-primary text-3xl font-bold mb-1">300%</div>
                                <div className="text-white/60 text-xs uppercase tracking-wider">Conv Increase</div>
                            </div>
                            <div>
                                <div className="text-primary text-3xl font-bold mb-1">75%</div>
                                <div className="text-white/60 text-xs uppercase tracking-wider">Budget Save</div>
                            </div>
                            <div>
                                <div className="text-primary text-3xl font-bold mb-1">80%</div>
                                <div className="text-white/60 text-xs uppercase tracking-wider">Lead Growth</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto space-y-24">

                    {/* The Client */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-extralight text-white mb-6 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-primary/50"></span>
                            The Client
                        </h2>
                        <p className="text-lg text-white/80 font-light leading-relaxed">
                            Meet <span className="text-white font-normal">Cleanfiniti</span>, a residential cleaning company based in Calgary. They were struggling to generate new customers through digital channels. The company had a negative experience with a previous marketing agency, which made them hesitant to hire another one. Their self-managed Google Ads campaigns didn't yield great results either.
                        </p>
                        <p className="text-lg text-white/80 font-light leading-relaxed mt-4">
                            Cleanfiniti had ambitious goals. They aimed to increase their customer base by 20% before summer and by 100% by the end of the year. They needed a solution that would help them achieve these targets without breaking the bank.
                        </p>
                    </div>

                    {/* The Challenge */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-extralight text-white mb-6 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-primary/50"></span>
                            The Challenge
                        </h2>
                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
                            <p className="text-lg text-white/80 font-light leading-relaxed">
                                Cleanfiniti faced several challenges in boosting its customer acquisition:
                            </p>
                            <ul className="list-none space-y-4 m-0 p-0">
                                <li className="flex gap-4">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    <span className="text-white/80">Self-managed campaigns failed to scale or yield ROI</span>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    <span className="text-white/80">Previous agency experience left them skeptical of professional help</span>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    <span className="text-white/80">Strenuous competition in the Calgary residential cleaning market</span>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    <span className="text-white/80">Deep stress of learning effective digital marketing while growing a startup</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 text-primary/20">
                            <Quote size={120} />
                        </div>
                        <div className="relative z-10 bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-14">
                            <p className="text-xl md:text-3xl font-extralight italic text-white/90 leading-tight mb-8">
                                "I was very relieved after the discovery call with Mitchell Baptista of Catmo Media. He understands the pressures on small, growing businesses and the importance of really stretching every dollar. The boutique feel of Catmo Media is very comforting and I feel heard with any concerns I may have."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold">
                                    A
                                </div>
                                <div>
                                    <div className="font-bold text-white text-lg">Audrey</div>
                                    <div className="text-primary/70 text-sm uppercase tracking-wider">Owner, Cleanfiniti</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Strategy */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-extralight text-white mb-8 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-primary/50"></span>
                            The Strategy
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Search className="text-primary w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Google Search Hybrid</h3>
                                <p className="text-white/70 font-light leading-relaxed">
                                    Catmo Media restructured Cleanfiniti's search campaigns, directing funds to high-performing keywords. We tackled ad group cannibalization and excluded low-quality search terms to focus on high-intent keywords.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                                    <BarChart3 className="text-accent w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Performance Max</h3>
                                <p className="text-white/70 font-light leading-relaxed">
                                    Leveraging Google's full inventory (Search, Display, YouTube, Gmail, and Discovery) to optimize for lower CPC and more conversions. Continuous monitoring allowed for fine-tuning performance across all channels.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Outcomes */}
                    <div className="prose prose-invert prose-lg max-w-none bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-14">
                        <h2 className="text-3xl font-extralight text-white mb-10 text-center">Outcomes & Results</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            <div className="space-y-6">
                                <h3 className="text-primary uppercase tracking-widest text-sm font-bold">April 2023 vs April 2024</h3>
                                <div className="space-y-4">
                                    <ResultRow label="Ad Spend" old="$3,609.86" current="$629.23" highlight="down" />
                                    <ResultRow label="Conversions" old="10" current="31" highlight="up" />
                                    <ResultRow label="Cost per Conv" old="$360.99" current="$20.30" highlight="down" />
                                    <ResultRow label="Avg CPC" old="$12.24" current="$1.65" highlight="down" />
                                    <ResultRow label="Clicks" old="295" current="381" highlight="up" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-accent uppercase tracking-widest text-sm font-bold">P-Max Impact (May 2024)</h3>
                                <div className="bg-accent/10 rounded-2xl p-8 h-full flex flex-col justify-center">
                                    <div className="mb-6">
                                        <div className="text-white/60 text-sm mb-1">Cost per Conversion</div>
                                        <div className="text-accent text-3xl sm:text-5xl font-bold">$7.46</div>
                                    </div>
                                    <div>
                                        <div className="text-white/60 text-sm mb-1">Total Conversions</div>
                                        <div className="text-accent text-3xl sm:text-5xl font-bold">43</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-10 border-t border-white/10 text-center uppercase tracking-[0.2em] text-sm text-white/40">
                            Massive efficiency gains enabling 100% year-over-year target achievement
                        </div>
                    </div>

                    {/* Key Takeaways */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-extralight text-white mb-8 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-primary/50"></span>
                            Key Takeaways
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Management Matters", desc: "Budget down 75%, conversions up 300%." },
                                { title: "Structure is Crucial", desc: "Preventing cannibalization saved thousands." },
                                { title: "P-Max Delivers", desc: "80% boost in lead generation via full inventory." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-white/60 text-sm font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h2 className="text-4xl font-extralight text-white mb-4 relative z-10">Want Similar Results?</h2>
                        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto relative z-10 font-light">
                            Professional Google Ads management can transform your customer acquisition. Let's discuss how we can scale your business.
                        </p>
                        <a
                            href="https://calendar.app.google/QdxMrAa98Eq9Q7aU7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full sm:w-auto gap-3 rounded-full bg-primary text-white px-8 py-4 sm:px-10 sm:py-5 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 relative z-10"
                        >
                            Book a Meeting
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                </div>
            </section>

            {/* Navigation Footer */}
            <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-16 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-extralight text-white mb-8">Explore More</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link to="/case-studies" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/70 hover:text-white hover:bg-white/10 transition-all flex justify-between items-center group">
                            <span>View All Case Studies</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/case-studies-manuv/manuv-case-study-ecommerce" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/70 hover:text-white hover:bg-white/10 transition-all flex justify-between items-center group">
                            <span>E-commerce Automation</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ResultRow = ({ label, old, current, highlight }: { label: string, old: string, current: string, highlight: 'up' | 'down' }) => (
    <div className="flex justify-between items-center border-b border-white/5 pb-2">
        <span className="text-white/60 font-light text-base">{label}</span>
        <div className="flex items-center gap-4">
            <span className="line-through text-white/30 text-sm">{old}</span>
            <span className={`font-bold ${highlight === 'down' ? 'text-green-400' : 'text-primary'}`}>{current}</span>
        </div>
    </div>
);
