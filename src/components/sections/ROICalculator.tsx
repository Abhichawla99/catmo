import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Clock, Zap } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ROICalculator = () => {
    const [employees, setEmployees] = useState(50);
    const [hourlyRate, setHourlyRate] = useState(50);
    const [hoursPerWeek, setHoursPerWeek] = useState(10);

    // Calculations
    const weeklyManualCost = employees * hourlyRate * hoursPerWeek;
    const annualManualCost = weeklyManualCost * 52;
    const automationSavings = annualManualCost * 0.75; // 75% reduction
    const implementationCost = 25000; // Average project cost
    const roi = ((automationSavings - implementationCost) / implementationCost) * 100;
    const paybackMonths = (implementationCost / (automationSavings / 12)).toFixed(1);

    return (
        <section className="py-24 px-6 relative overflow-hidden bg-background z-0">

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold">
                        ROI Calculator
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Calculate Your Automation ROI
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        See how much your business could save with custom AI automation
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Input Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Your Current Situation</h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">
                                    Number of Employees
                                </label>
                                <input
                                    type="range"
                                    min="10"
                                    max="500"
                                    value={employees}
                                    onChange={(e) => setEmployees(Number(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="text-right text-2xl font-bold text-primary mt-2">{employees}</div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">
                                    Average Hourly Rate ($)
                                </label>
                                <input
                                    type="range"
                                    min="20"
                                    max="200"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="text-right text-2xl font-bold text-primary mt-2">${hourlyRate}</div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-300">
                                    Hours Spent on Manual Tasks (per employee/week)
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="40"
                                    value={hoursPerWeek}
                                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                                <div className="text-right text-2xl font-bold text-primary mt-2">{hoursPerWeek}h</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Results Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-white/5 border border-primary/30 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <DollarSign className="w-8 h-8 text-primary" />
                                <h3 className="text-xl font-bold">Annual Savings</h3>
                            </div>
                            <div className="text-5xl font-bold text-primary mb-2">
                                ${automationSavings.toLocaleString()}
                            </div>
                            <p className="text-sm text-gray-400">
                                Based on 75% automation of manual tasks
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <TrendingUp className="w-5 h-5 text-green-500" />
                                    <h4 className="font-semibold text-sm">ROI</h4>
                                </div>
                                <div className="text-3xl font-bold text-green-500">
                                    {roi.toFixed(0)}%
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Clock className="w-5 h-5 text-blue-500" />
                                    <h4 className="font-semibold text-sm">Payback</h4>
                                </div>
                                <div className="text-3xl font-bold text-blue-500">
                                    {paybackMonths}mo
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Zap className="w-5 h-5 text-yellow-500" />
                                <h4 className="font-semibold">Cost Breakdown</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Current Annual Cost:</span>
                                    <span className="font-semibold">${annualManualCost.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Implementation:</span>
                                    <span className="font-semibold">${implementationCost.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between pt-2 border-t border-white/10">
                                    <span className="text-gray-400">Net Savings (Year 1):</span>
                                    <span className="font-bold text-green-500">
                                        ${(automationSavings - implementationCost).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <Link to="/contact" className="block w-full px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-center">
                            Get Your Custom Quote
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center text-sm text-gray-500"
                >
                    * Calculations based on industry averages. Actual results may vary based on your specific use case.
                </motion.div>
            </div>
        </section>
    );
};
