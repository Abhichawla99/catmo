import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SantaHatSVG from "./santa-hat.svg";

export function HoveringSanta() {
    const [mounted, setMounted] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const location = useLocation();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const updatePosition = () => {
            // Find the active nav link based on current route
            const navLinks = document.querySelectorAll('a[href]');
            let activeLink: HTMLElement | null = null;

            for (const link of navLinks) {
                const href = link.getAttribute('href');
                if (href === location.pathname && link instanceof HTMLElement) {
                    activeLink = link;
                    break;
                }
            }

            if (activeLink !== null) {
                const rect = activeLink.getBoundingClientRect();
                // Position hat directly above the center of the active link
                setPosition({
                    x: rect.left + rect.width / 2 - 32, // 32 is half of hat's width (64px)
                    y: rect.top - 65, // Position above the navbar with padding
                });
            }
        };

        // Update position immediately and on window resize
        updatePosition();
        window.addEventListener('resize', updatePosition);

        // Small delay to ensure navbar is rendered
        const timer = setTimeout(updatePosition, 100);

        return () => {
            window.removeEventListener('resize', updatePosition);
            clearTimeout(timer);
        };
    }, [location.pathname, mounted]);

    if (!mounted) return null;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                className="fixed z-[10000] pointer-events-none"
                initial={{
                    x: position.x,
                    y: position.y - 20,
                    opacity: 0,
                    scale: 0.3
                }}
                animate={{
                    x: position.x,
                    y: position.y,
                    opacity: 1,
                    scale: 1
                }}
                exit={{
                    opacity: 0,
                    scale: 0.3,
                    transition: { duration: 0.2 }
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    opacity: { duration: 0.3 }
                }}
            >
                <img
                    src={SantaHatSVG}
                    alt="Santa Hat"
                    className="w-16 h-16 drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
                />
            </motion.div>
        </AnimatePresence>
    );
}
