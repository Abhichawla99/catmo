import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShoppingCart, PlayCircle, BarChart3, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo/SEO';

export const LuxuryFashionRetailerCaseStudyPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <SEO
                title="Case Study: Boosting Sales for a Luxury Fashion Retailer | Catmo Media"
                description="Discover how Catmo Media achieved up to 3000% ROAS for a luxury designer fashion retailer through strategic Google Shopping and Performance Max campaigns."
                keywords="luxury fashion advertising, eCommerce ROAS, Google Shopping case study, Performance Max success, luxury retail marketing"
                canonical="https://manuv.co/case-studies-manuv/luxury-fashion-retailer"
            />

            {/* Hero Section */}
            <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-32 bg-gradient-to-b from-purple-900/20 via-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <Star className="w-8 h-8 text-purple-400" />
                            <span className="text-sm font-light uppercase tracking-wider text-purple-400">Luxury eCommerce</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6 text-white leading-tight">
                            Boosting Sales for a <span className="italic font-normal text-purple-400">Luxury Fashion Retailer</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/70 mb-8 leading-relaxed">
                            How strategic advertising initiatives led to exceptional ROI and increased market presence for a high-end designer brand.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                            <div>
                                <div className="text-purple-400 text-3xl font-bold mb-1">3000%</div>
                                <div className="text-white/60 text-xs uppercase tracking-wider">Max ROAS</div>
                            </div>
                            <div>
                                <div className="text-purple-400 text-3xl font-bold mb-1">10x</div>
                                <div className="text-white/60 text-xs uppercase tracking-wider">YouTube Views</div>
                            </div>
                            <div>
                                <div className="text-purple-400 text-3xl font-bold mb-1">600%</div>
                                <div className="text-white/60 text-xs uppercase tracking-wider">Minimum ROAS</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-24 bg-black">
                <div className="max-w-4xl mx-auto space-y-24">

                    {/* The Partnership */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-extralight text-white mb-6 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-purple-500/50"></span>
                            The Partnership
                        </h2>
                        <p className="text-lg text-white/80 font-light leading-relaxed">
                            In this remarkable case study, we explore how <span className="text-white font-normal">Catmo Media</span>, in partnership with <span className="text-white font-normal">Urba Media</span>, crafted a transformative advertising campaign for a consignment luxury designer fashion retailer.
                        </p>
                        <p className="text-lg text-white/80 font-light leading-relaxed mt-4 italic">
                            *Note: Due to contractual obligations, the client’s name must remain confidential.
                        </p>
                    </div>

                    {/* Campaign Goals */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-extralight text-white mb-6 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-purple-500/50"></span>
                            Campaign Goals & Success
                        </h2>
                        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
                            <p className="text-lg text-white/80 font-light leading-relaxed m-0">
                                Our primary objective revolved around amplifying sales and revenue through:
                            </p>
                            <ul className="list-none space-y-4 m-0 p-0">
                                <li className="flex gap-4">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                    <span className="text-white/80">Maximizing Total Revenue attributed to campaigns</span>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                    <span className="text-white/80">Achieving exceptional Return on Ad Spend (ROAS)</span>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                    <span className="text-white/80">Enhancing Brand Awareness via strategic retargeting</span>
                                </li>
                            </ul>
                            <div className="mt-8 pt-8 border-t border-white/10 font-bold text-2xl text-purple-400">
                                Result: Achieved ROAS ranging from 600% to over 3000%.
                            </div>
                        </div>
                    </div>

                    {/* The Video Advantage */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-extralight text-white mb-8 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-purple-500/50"></span>
                            The Video Advantage
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                                    <PlayCircle className="text-red-500 w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">YouTube Shorts</h3>
                                <p className="text-white/70 font-light text-sm leading-relaxed">
                                    A goldmine for the brand, generating an astounding tenfold increase in earned views and subscribers.
                                </p>
                            </div>
                            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                                    <TrendingUp className="text-blue-500 w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Landscape Video</h3>
                                <p className="text-white/70 font-light text-sm leading-relaxed">
                                    Captivating influence on website engagement, facilitating longer sessions and higher page views.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Strategy Implementation */}
                    <div className="prose prose-invert prose-lg max-w-none bg-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-14">
                        <h2 className="text-3xl font-extralight text-white mb-10 text-center">Strategic Implementation</h2>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-purple-400 text-xl font-bold mb-4 flex items-center gap-3">
                                    <ShoppingCart className="w-6 h-6" />
                                    Google Shopping & P-Max
                                </h3>
                                <p className="text-white/80 font-light leading-relaxed">
                                    Coupled with the Performance Max initiative, these campaigns proved instrumental in capturing target audiences and enticing them to add desired items to their carts. By orchestrating branded campaigns, customers were enticed to revisit the online shop, resulting in a substantial surge in conversions.
                                </p>
                            </div>

                            <div className="bg-purple-400/5 border border-purple-400/20 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-white text-xl font-bold mb-4">Innovation Pillar</h3>
                                <p className="text-white/80 font-light leading-relaxed">
                                    Catmo Media integrated Google's <span className="text-white">Performance Max</span> campaign in June of 2022. By seamlessly blending video assets into the customer journey, engagement soared, transforming the path to conversion.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-extralight text-white mb-6 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-purple-500/50"></span>
                            Conclusion
                        </h2>
                        <p className="text-lg text-white/80 font-light leading-relaxed">
                            Through meticulous optimizations, creative utilization of Performance Max, and astute deployment of video assets, Catmo Media astoundingly propelled sales while elevating brand awareness for the luxury retailer. This case study stands as a testament to our ability to deliver outstanding results in the dynamic realm of eCommerce.
                        </p>
                    </div>

                    {/* Final CTA */}
                    <div className="bg-gradient-to-br from-purple-900/40 via-blue-900/20 to-purple-900/40 rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h2 className="text-4xl font-extralight text-white mb-4 relative z-10">Experience Transformative Results</h2>
                        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto relative z-10 font-light">
                            Ready to elevate your eCommerce business? Reach out for a free consultation today.
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
                        <Link to="/case-studies-manuv/cleanfiniti-google-ads" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/70 hover:text-white hover:bg-white/10 transition-all flex justify-between items-center group">
                            <span>Cleanfiniti Case Study</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
