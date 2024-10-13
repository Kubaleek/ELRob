"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Image } from "@nextui-org/react";

const images = Array(12).fill("/assets/HeroImage.jpg");

export default function Works() {
  const { ref: AniRef, inView: AnimInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.section
      ref={AniRef}
      className="relative flex flex-col gap-6 md:gap-3 md:mb-12 lg:mb-24 bgOverlay4"
      initial={{ opacity: 0, x: 20 }}
      animate={AnimInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-12 justify-center items-center mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={AnimInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 sm:gap-3 max-w-3xl"
        >
          <h2 className="text-pretty text-left sm:text-center leading-relaxed text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-[#ef9c00]">
            EL-ROB{" "}
            <span className="text-white md:text-2xl lg:text-4xl">Elektro</span>{" "}
            Nasze{" "}
            <span className="text-white md:text-2xl lg:text-4xl">Realizacje</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 mx-auto justify-center items-center">
          {images.map((src, index) => {
            const isTall = index % 3 === 0;
            const isWide = index % 4 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={AnimInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${
                  isWide ? "col-span-2" : "col-span-1"
                } ${
                  isTall ? "row-span-2" : "row-span-1"
                } ${index % 5 === 0 ? "lg:col-span-1 lg:row-span-3" : ""}`}
              >
                <Image
                  isBlurred
                  width={isWide ? 960 : 200}
                  height={isTall ? 400 : 200}
                  src={src}
                  alt={`Realizacje ${index}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
