"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, x: -20, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollUp}
          aria-label="Scroll to top"
          className="fixed left-5 bottom-8 z-50 group"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl overflow-hidden shadow-lg">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
            {/* Shine overlay */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: "0 0 20px rgba(37,99,235,0.6)" }} />
            {/* Arrow */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <ArrowUp className="w-5 h-5 text-white" strokeWidth={2.5} />
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
