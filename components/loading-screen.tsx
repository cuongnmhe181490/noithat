"use client";

import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <div className="space-y-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/12 bg-white/6 font-serif text-2xl tracking-[0.28em]"
        >
          MDK
        </motion.div>
        <div className="space-y-2">
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/58">
            Preparing the showroom
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 220 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto h-px bg-white/70"
          />
        </div>
      </div>
    </div>
  );
}
