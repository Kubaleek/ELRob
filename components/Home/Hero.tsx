"use client";

import { Button } from "@nextui-org/react";
import NextImage from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import HeroImg from "../../app/assets/HeroImage.jpg";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animacja uruchamia się tylko raz, gdy element pojawi się w widoku
    threshold: 0.5, // 50% elementu musi być widoczne, aby wywołać akcję
  });

  return (
    <motion.section
      className="relative flex flex-col gap-6 md:gap-3 bgOverlay sm:mb-8 md:mb-12 lg:mb-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>
      <div className="flex flex-col gap-3 justify-center items-center max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-[#ef9c00] rounded-full p-3">
          <motion.svg
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 sm:w-16 sm:h-16 text-[#ef9c00] filter drop-shadow-xl"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ filter: "drop-shadow(0 0 10px rgba(239, 156, 0, 0.9))" }}>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(239,156,0)", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(255,204,0)", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
              stroke="url(#grad1)"
            />
          </motion.svg>
        </motion.div>
        <div className="flex flex-col gap-3 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-2">
            <h1 className="text-pretty leading-relaxed text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-[#ef9c00]">
              EL-ROB{" "}
              <span className="text-white md:text-2xl lg:text-4xl">
                Elektro
              </span>{" "}
              Usługi{" "}
              <span className="text-white md:text-2xl lg:text-4xl">Łódź</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-tiny sm:text-medium text-pretty leading-relaxed text-justify sm:text-center">
            <span className="sm:text-lg font-bold text-[#ef9c00]">
              EL-ROB Elektro Usługi Łódź
            </span>{" "}
            – Profesjonalne usługi elektryczne dla domu i firmy. Zajmujemy się
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              as={Link}
              href="/o-firmie"
              radius="none"
              color="warning"
              variant="shadow"
              className="w-full sm:w-fit text-white">
              Więcej o nas
            </Button>
            <Button
              as={Link}
              href="/kontakt"
              radius="none"
              color="warning"
              variant="shadow"
              className="w-full sm:w-fit text-white">
              Kontakt
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        ref={ref}
        className="hidden sm:flex relative mx-auto inset-y-6 md:inset-y-12 max-w-sm md:max-w-xl lg:max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}>
        <NextImage src={HeroImg} alt="Elektryka" className="relative rounded" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ef9c00]/25 from-40% to-[#ef9c00]/35 to-60% backdrop-saturate-150 backdrop-sepia backdrop-contrast-75 rounded"></div>
      </motion.div>
    </motion.section>
  );
}
