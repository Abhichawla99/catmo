import { useEffect, useState, useRef } from 'react';
import { SEO } from '../components/seo/SEO';
import { Sparkles, Clock, TrendingDown, Zap, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';

// Animated Mascot Component - Simple AI Assistant
function AnimatedMascot() {
  return (
    <motion.div
      className="relative w-16 h-16"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center">
        <Sparkles className="w-8 h-8 text-primary" />
      </div>
    </motion.div>
  );
}

// Fade in up animation variant
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Assessment Chat Interface Component
function AssessmentChatInterface() {
  const [messages, setMessages] = useState<{ role: 'assistant' | 'user'; content: string }[]>([
    {
      role: 'assistant',
      content: "Welcome! 👋\n\nI'm here to help you discover exactly how much time you could save with AI automation.\n\nLet's start—what's your website URL?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = async () => {
    const text = inputValue.trim();
    if (!text || isLoading) return;

    // Add user message
    const userMessage = { role: 'user' as const, content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get session ID
      const getSessionId = (): string => {
        try {
          const storageKey = 'manuv_assessment_session_id';
          let sessionId = localStorage.getItem(storageKey);

          if (!sessionId) {
            sessionId = `assessment_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
            localStorage.setItem(storageKey, sessionId);
          }

          return sessionId;
        } catch (error) {
          return `assessment_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
        }
      };

      const sessionId = getSessionId();

      const payload = {
        message: text,
        sessionId: sessionId,
        timestamp: new Date().toISOString(),
        context: 'assessment'
      };

      console.log('Sending payload to webhook:', payload);

      const response = await fetch('https://abhixchawla.app.n8n.cloud/webhook/roadmap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Webhook response status:', response.status);
      console.log('Webhook response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Webhook error response:', errorText);
        throw new Error(`Webhook error: ${response.status} - ${errorText}`);
      }

      let data;
      const contentType = response.headers.get('content-type');
      console.log('Response content-type:', contentType);

      // Always read as text first to handle edge cases
      const textResponse = await response.text();
      console.log('Raw text response:', textResponse);

      // Try to parse as JSON if content-type suggests it or if it looks like JSON
      if (contentType && contentType.includes('application/json')) {
        try {
          // Trim and clean the response before parsing
          const trimmedResponse = textResponse.trim();
          data = JSON.parse(trimmedResponse);
          console.log('Parsed JSON response:', data);
        } catch (jsonError) {
          console.warn('Failed to parse as JSON despite content-type, using as text:', jsonError);
          data = textResponse;
        }
      } else {
        // Not JSON content-type, use as text
        data = textResponse;
      }

      console.log('Final data object:', data);

      let assistantContent = '';

      // Handle direct string response
      if (typeof data === 'string') {
        assistantContent = data;
        console.log('Using direct string response');
      }
      // Handle object with response/message/text properties
      else if (data && typeof data === 'object') {
        if (data.response) {
          assistantContent = data.response;
          console.log('Using data.response');
        } else if (data.message) {
          assistantContent = data.message;
          console.log('Using data.message');
        } else if (data.text) {
          assistantContent = data.text;
          console.log('Using data.text');
        } else if (data.data) {
          // Handle nested data object
          if (typeof data.data === 'string') {
            assistantContent = data.data;
            console.log('Using data.data string');
          } else if (data.data.response) {
            assistantContent = data.data.response;
            console.log('Using data.data.response');
          } else if (data.data.message) {
            assistantContent = data.data.message;
            console.log('Using data.data.message');
          } else if (data.data.text) {
            assistantContent = data.data.text;
            console.log('Using data.data.text');
          }
        } else {
          // Fallback: stringify the object
          assistantContent = JSON.stringify(data, null, 2);
          console.log('Using JSON.stringify fallback');
        }
      }

      console.log('Final assistantContent:', assistantContent);

      if (!assistantContent) {
        assistantContent = 'I received your message. Let me help you with that.';
        console.warn('No content extracted, using fallback message');
      }

      const assistantMessage = {
        role: 'assistant' as const,
        content: assistantContent,
      };

      console.log('Adding assistant message:', assistantMessage);
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        role: 'assistant' as const,
        content: 'Sorry, I encountered an error. Please try again or contact us directly at hello@manuv.co',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
    >
      {/* Chat Header with Mascot */}
      <div className="bg-white/[0.02] border-b border-white/10 px-6 py-5">
        <div className="flex items-center gap-4">
          <AnimatedMascot />
          <div>
            <h3 className="text-lg font-semibold text-foreground">AI Assessment</h3>
            <p className="text-sm text-muted-foreground">Powered by custom-trained AI</p>
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div className="px-6 py-6 space-y-4 min-h-[450px] max-h-[500px] overflow-y-auto scroll-smooth">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.23, 1, 0.32, 1]
            }}
            className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.role === 'assistant' && (
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </div>
            )}

            <motion.div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-primary/10 text-white border border-primary/20'
                  : 'bg-white/[0.03] text-gray-100 border border-white/10'
              }`}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {message.content}
              </p>
            </motion.div>

            {message.role === 'user' && (
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />
              </div>
            )}
          </motion.div>
        ))}

        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex gap-3 justify-start"
            >
              <div className="flex-shrink-0 mt-1">
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3">
                <div className="flex gap-1.5">
                  <motion.div
                    className="w-2 h-2 bg-primary/60 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-primary/60 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-primary/60 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-6 pb-6 pt-4 border-t border-white/10 bg-white/[0.01]">
        <div className="flex items-center gap-3">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your answer..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/20 focus:bg-white/8 transition-all"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            size="default"
            className="gap-2"
          >
            Send
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export const AssessmentPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <SEO
        title="Free Assessment: Discover Where You're Losing Money | manuv.co"
        description="Take our free 2-minute assessment to uncover exactly which tasks are draining your budget and how AI agents can automate them starting today."
        keywords="AI assessment, business automation assessment, cost savings calculator, efficiency audit"
        canonical="https://manuv.co/assessment"
        ogUrl="https://manuv.co/assessment"
      />

      <div className="min-h-screen bg-background pt-32 pb-24">
        {/* Subtle background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
          <div className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Header Section */}
          <motion.div {...fadeInUp} className="text-center mb-12">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-medium tracking-wide">
                Free • 2 min • No signup
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get{' '}
              <span className="bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
                20 Hours Back
              </span>
              {' '}Every Week
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Our custom-trained AI will analyze your workflow in 2 minutes and show you exactly which tasks you can automate today.
            </p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                2 minutes
              </span>
              <span className="w-px h-4 bg-white/10" />
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Custom AI
              </span>
              <span className="w-px h-4 bg-white/10" />
              <span className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-primary" />
                Instant results
              </span>
            </motion.div>
          </motion.div>

          {/* Roadmap Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4">
              <p className="text-sm text-center text-muted-foreground">
                <span className="text-primary font-semibold">After the assessment:</span> We'll send a custom AI automation roadmap tailored to your business straight to your inbox
              </p>
            </div>
          </motion.div>

          {/* Chat Interface */}
          <AssessmentChatInterface />

          {/* Bottom Trust Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block border border-white/10 rounded-full px-6 py-3">
              <p className="text-sm text-muted-foreground">
                🔒 <span className="text-foreground font-medium">Your data is private and secure</span> • We'll never share it
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
