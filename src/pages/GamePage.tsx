import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Trophy, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';

interface TargetType {
    id: number;
    x: number;
    y: number;
}

export const GamePage = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(() => {
        const saved = localStorage.getItem('highScore');
        return saved ? parseInt(saved) : 0;
    });
    const [timeLeft, setTimeLeft] = useState(30);
    const [isPlaying, setIsPlaying] = useState(false);
    const [targets, setTargets] = useState<TargetType[]>([]);
    const [missedClicks, setMissedClicks] = useState(0);

    const generateTarget = useCallback(() => {
        const newTarget: TargetType = {
            id: Date.now(),
            x: Math.random() * 80 + 10, // 10-90% from left
            y: Math.random() * 70 + 15, // 15-85% from top
        };
        setTargets(prev => [...prev, newTarget]);

        // Remove target after 1.5 seconds if not clicked
        setTimeout(() => {
            setTargets(prev => prev.filter(t => t.id !== newTarget.id));
        }, 1500);
    }, []);

    const startGame = () => {
        setScore(0);
        setTimeLeft(30);
        setIsPlaying(true);
        setTargets([]);
        setMissedClicks(0);
    };

    const handleTargetClick = (targetId: number) => {
        setScore(prev => prev + 10);
        setTargets(prev => prev.filter(t => t.id !== targetId));
    };

    const handleMissedClick = () => {
        if (isPlaying) {
            setMissedClicks(prev => prev + 1);
        }
    };

    useEffect(() => {
        if (!isPlaying) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setIsPlaying(false);
                    if (score > highScore) {
                        setHighScore(score);
                        localStorage.setItem('highScore', score.toString());
                    }
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isPlaying, score, highScore]);

    useEffect(() => {
        if (!isPlaying) return;

        const targetInterval = setInterval(() => {
            generateTarget();
        }, 800);

        return () => clearInterval(targetInterval);
    }, [isPlaying, generateTarget]);

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            <SEO
                title="Game | manuv.co"
                description="Test your reflexes with our interactive game"
                keywords="game, interactive, reflexes"
                canonical="https://manuv.co/game"
            />

            {/* Header */}
            <div className="relative z-[10000] px-6 md:px-10 lg:px-16 py-8 pt-28 pointer-events-none">
                <Link
                    to="/work"
                    className="inline-flex items-center gap-2 text-sm font-light text-white/60 hover:text-white transition-colors cursor-pointer pointer-events-auto"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Work
                </Link>
            </div>

            {/* Game Area */}
            <div className="relative z-10 px-6 md:px-10 lg:px-16 pb-20">
                <div className="max-w-7xl mx-auto">
                    {/* Stats Bar */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center"
                        >
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <Target className="w-4 h-4 text-primary" />
                                <span className="text-xs font-light text-white/60 uppercase tracking-wider">Score</span>
                            </div>
                            <span className="text-3xl font-extralight text-white">{score}</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center"
                        >
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <Zap className="w-4 h-4 text-primary" />
                                <span className="text-xs font-light text-white/60 uppercase tracking-wider">Time</span>
                            </div>
                            <span className={`text-3xl font-extralight ${timeLeft <= 5 && isPlaying ? 'text-red-400' : 'text-white'}`}>
                                {timeLeft}s
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center"
                        >
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <Trophy className="w-4 h-4 text-primary" />
                                <span className="text-xs font-light text-white/60 uppercase tracking-wider">Best</span>
                            </div>
                            <span className="text-3xl font-extralight text-white">{highScore}</span>
                        </motion.div>
                    </div>

                    {/* Game Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.01] overflow-hidden"
                        style={{ height: '500px' }}
                        onClick={handleMissedClick}
                    >
                        {/* Game Targets */}
                        <AnimatePresence>
                            {targets.map((target) => (
                                <motion.button
                                    key={target.id}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleTargetClick(target.id);
                                    }}
                                    className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-primary/80 to-purple-500/80 border-2 border-white/20 shadow-lg shadow-primary/50 cursor-pointer"
                                    style={{
                                        left: `${target.x}%`,
                                        top: `${target.y}%`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                                </motion.button>
                            ))}
                        </AnimatePresence>

                        {/* Start/End Screen */}
                        <AnimatePresence>
                            {!isPlaying && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                                >
                                    <div className="text-center">
                                        {timeLeft === 0 ? (
                                            <>
                                                <motion.h2
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    className="text-5xl font-extralight text-white mb-4"
                                                >
                                                    Game Over!
                                                </motion.h2>
                                                <motion.p
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                    className="text-2xl font-light text-white/70 mb-2"
                                                >
                                                    Final Score: <span className="text-primary">{score}</span>
                                                </motion.p>
                                                <motion.p
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="text-sm font-light text-white/50 mb-8"
                                                >
                                                    Accuracy: {targets.length === 0 && score === 0 ? 0 : Math.round((score / 10) / ((score / 10) + missedClicks) * 100)}%
                                                </motion.p>
                                            </>
                                        ) : (
                                            <>
                                                <motion.h2
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    className="text-5xl font-extralight text-white mb-4"
                                                >
                                                    Reflex Test
                                                </motion.h2>
                                                <motion.p
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                    className="text-lg font-light text-white/60 mb-8"
                                                >
                                                    Click the targets as fast as you can
                                                </motion.p>
                                            </>
                                        )}

                                        <motion.button
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            onClick={startGame}
                                            className="rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-light tracking-tight text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
                                        >
                                            {timeLeft === 0 ? 'Play Again' : 'Start Game'}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Instructions */}
                        {isPlaying && (
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-xs font-light text-white/40"
                                >
                                    Click the glowing targets before they disappear
                                </motion.p>
                            </div>
                        )}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-sm font-light text-white/60 mb-4">
                            Ready to automate your business with the same precision?
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-light tracking-tight text-white transition-all hover:bg-white/10"
                        >
                            Book a Call
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
            </div>
        </div>
    );
};
