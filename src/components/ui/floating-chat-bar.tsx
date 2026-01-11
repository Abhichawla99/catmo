import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { HeroChatBar } from './hero-chat-bar';
import { useChat } from '../../contexts/ChatContext';

export function FloatingChatBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);
  const { isChatOpen, handleSendMessage, handleOpenChat } = useChat();
  const location = useLocation();

  useEffect(() => {
    // Find the hero section
    const findHero = () => {
      const hero = document.querySelector('section[class*="min-h-screen"]');
      if (hero) {
        heroRef.current = hero as HTMLElement;
      }
    };

    findHero();
    
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const heroHeight = heroRef.current.offsetHeight;
        const scrollAmount = window.scrollY;
        
        // Calculate scroll progress (0 to 1)
        // Start transitioning when hero is 80% scrolled
        const transitionStart = heroHeight * 0.8;
        const progress = Math.min(Math.max((scrollAmount - transitionStart) / (heroHeight * 0.2), 0), 1);
        
        setScrollProgress(progress);
        setIsScrolled(rect.bottom < window.innerHeight * 0.5);
      } else {
        findHero();
      }
    };

    // Use requestAnimationFrame for smooth scroll tracking
    let rafId: number;
    const onScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Only show floating bar when scrolled past hero, chat is not open, and not on assessment page
  const isAssessmentPage = location.pathname === '/assessment';

  return (
    <AnimatePresence mode="wait">
      {isScrolled && !isChatOpen && !isAssessmentPage && (
        <motion.div
          key="floating-chat-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99998] w-full max-w-md px-4 pointer-events-auto"
        >
          <HeroChatBar
            key="floating-chat"
            onSendMessage={handleSendMessage}
            onOpenChat={handleOpenChat}
            isFloating={true}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
