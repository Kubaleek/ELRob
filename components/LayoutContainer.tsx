"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Common/Navbar/Header";

export default function LayoutContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0 backdrop-blur-lg"></div>
      <AnimatePresence>
        <div className="bg-[#1c1c1c] h-full md:max-w-7xl mx-auto p-4 z-50 relative">
          <Header />
          <motion.main
            className="container flex flex-col gap-12 mx-auto text-tiny sm:text-medium flex-grow text-pretty leading-relaxed text-justify pt-12 pb-12 md:pt-16 overflow-x-hidden"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1, transition: { duration: 0.5 } },
              hidden: { opacity: 0 },
            }}
            transition={{
              duration: 0.7,
              delayChildren: 0.6,
              staggerChildren: 0.8,
            }}
          >
            {children}
          </motion.main>
        </div>
      </AnimatePresence>
    </div>
  );
}
