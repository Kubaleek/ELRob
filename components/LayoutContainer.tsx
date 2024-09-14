"use client";

import ElectroLoading from "@/components/Loading";
import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Navbar/Header";

export default function LayoutContainer({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedLoadingState = localStorage.getItem("loadingState");

    if (savedLoadingState === "false") {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("loadingState", "false");
      }, 2000); // Czas ładowania
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loading" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="absolute inset-0 bg-[#141414]">
            <ElectroLoading />
          </motion.div>
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="absolute inset-0 bg-[#141414]">
            <div className="absolute inset-0 backdrop-blur-lg"></div>
            <div className="bg-[#1c1c1c] h-full overflow-y-scroll max-w-full mx-auto p-4 bgOverlayHero z-50 relative">
              <Header />
              <motion.main className="container flex flex-col gap-12 mx-auto max-w-7xl text-tiny sm:text-medium flex-grow text-pretty leading-relaxed text-justify pt-12 pb-12 md:pt-16" transition={{ duration: 0.7, delayChildren: 0.6, staggerChildren: 0.8 }}>
                {children}
              </motion.main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
