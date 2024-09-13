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
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute inset-0 bg-[#141414]"
          >
            <ElectroLoading />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute inset-0 bg-[#141414] overflow-hidden bgOverlay"
          >
            {/* Koła, Trójkąty, Pioruny i Inne Kształty
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-[#ef9c00] rounded-full opacity-50 blur-xl"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5, 1], rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-24 h-24 bg-[#ef9c00] rounded-full opacity-50 blur-lg"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1], rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 bg-transparent border-t-[32px] border-t-[#ef9c00] border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.svg
              className="absolute top-10 right-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ef9c00"
              width="48"
              height="48"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M13 2L3 14h7v8l10-12h-7z" />
            </motion.svg>
            <motion.div
              className="absolute top-1/2 left-1/2 w-48 h-48 bg-transparent border-t-[24px] border-t-[#ef9c00] border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ transformOrigin: "center" }}
            />
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-[#ef9c00] rounded-full opacity-40 blur-md"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1], rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-28 h-28 bg-[#ef9c00] rounded-full opacity-40 blur-md"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1], rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 top-1/3 left-1/3 w-32 h-32 bg-transparent border-t-[24px] border-t-[#ef9c00] border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 top-1/4 right-1/4 w-20 h-20 bg-transparent border-t-[16px] border-t-[#ef9c00] border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity }}
            /> */}
            <div className="absolute inset-0 backdrop-blur-sm"></div>
            {/* Wyśrodkowana Zawartość Strona */}
            <div className="bg-[#1c1c1c] h-full max-w-7xl mx-auto p-4 border border-[#ef9c00] z-50 relative overflow-y-auto">
              <Header />
              <motion.main className="container flex flex-col gap-6 mx-auto max-w-7xl text-tiny sm:text-medium flex-grow text-pretty leading-relaxed text-justify pt-12" transition={{ duration: 0.7, delayChildren: 0.6, staggerChildren: 0.8 }}>
                {children}
              </motion.main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
