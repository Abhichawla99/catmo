import { motion } from 'framer-motion';

export const GlobalGlow = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Smokey Texture Layer */}
            <div className="absolute inset-0 grain opacity-[0.03] mix-blend-screen" />

            {/* Top Glow - Smokey Blue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                    x: [-10, 10, -10]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[40%] bg-primary/20 blur-[120px] rounded-[100%]"
            />

            {/* Drifting Smoke Effect */}
            <motion.div
                animate={{
                    x: ['-20%', '20%', '-20%'],
                    y: ['-10%', '10%', '-10%'],
                    opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent blur-[150px]"
            />

            {/* Left Edge Glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    y: [-20, 20, -20]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute top-1/4 left-[-10%] w-[30%] h-[60%] bg-secondary/10 blur-[100px] rounded-[100%]"
            />

            {/* Right Edge Glow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    y: [20, -20, 20]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-1/3 right-[-10%] w-[30%] h-[60%] bg-accent/10 blur-[100px] rounded-[100%]"
            />

            {/* Subtle Bottom Glow */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[-5%] left-1/4 w-[50%] h-[20%] bg-primary/5 blur-[80px] rounded-[100%]"
            />
        </div>
    );
};
