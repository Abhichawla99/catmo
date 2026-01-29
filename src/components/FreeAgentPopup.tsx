import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export function FreeAgentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('manuv_seen_free_agent_popup');

    if (!hasSeenPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('manuv_seen_free_agent_popup', 'true');
    // Set flag to show banner
    localStorage.setItem('manuv_show_banner', 'true');
  };

  const handleBookCall = () => {
    localStorage.setItem('manuv_seen_free_agent_popup', 'true');
    // Don't show banner if they book a call
    localStorage.setItem('manuv_show_banner', 'false');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-[100000] flex items-center justify-center p-4"
          >
            <div className="relative bg-background border border-primary/20 rounded-2xl shadow-2xl max-w-lg w-full p-8 md:p-10">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Unlock Your Free{' '}
                <span className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">
                  Digital Growth Strategy
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-muted-foreground text-center mb-6 text-sm md:text-base">
                Book a 30-minute discovery call, and we'll deliver a comprehensive digital advertising roadmap tailored to your business—completely free.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Understand your market position and growth opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Get a custom advertising strategy built for your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">Zero commitment—see the roadmap before deciding anything</span>
                </li>
              </ul>

              {/* CTA Button */}
              <a
                href="https://calendar.app.google/QdxMrAa98Eq9Q7aU7"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBookCall}
                className="block w-full"
              >
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,136,0.4)]"
                >
                  Book Your Free Strategy Call
                </Button>
              </a>

              {/* Small text */}
              <p className="text-xs text-muted-foreground text-center mt-4">
                No credit card required • 30-minute call • Get your roadmap within 7 days
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
