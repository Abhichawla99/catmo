import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FreeAgentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if we should show the banner
    const showBanner = localStorage.getItem('manuv_show_banner');
    const bannerDismissed = localStorage.getItem('manuv_banner_dismissed');

    if (showBanner === 'true' && !bannerDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('manuv_banner_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed top-0 left-0 right-0 z-[99997] bg-gradient-to-r from-primary via-pink-500 to-primary shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Gift className="w-5 h-5 text-white flex-shrink-0" />
              <p className="text-white text-sm md:text-base font-medium truncate">
                <span className="font-bold">Limited Offer:</span> Get your first AI agent built for free—no strings attached
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="px-4 py-1.5 md:px-6 md:py-2 bg-white text-primary font-semibold text-sm rounded-full hover:bg-white/90 transition-all hover:scale-105 whitespace-nowrap"
              >
                Book Free Call
              </Link>
              <button
                onClick={handleDismiss}
                className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
