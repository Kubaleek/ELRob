"use client";

import ElectroLoading from "@/components/Loading";
import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Navbar/Header";

export default function LayoutContainer({ children } : {children: ReactNode}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const savedLoadingState = localStorage.getItem('loadingState');
      
      if (savedLoadingState === 'false') {
        setLoading(false);
      } else {
        const timer = setTimeout(() => {
          setLoading(false);
          localStorage.setItem('loadingState', 'false');
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
              <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="absolute inset-0 bg-[#141414] p-4">
                <Header />
                <main className="container mx-auto max-w-7xl flex-grow text-pretty leading-relaxed text-justify">
                  {children}
                </main>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
}
