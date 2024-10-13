"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Importuj motion
import { Image } from "@nextui-org/react";
import HeroImage from "./Images/HeroImage.jpg";

export default function Realizations() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <section ref={ref} className="relative flex flex-col gap-6 md:gap-3 mb-6">
      <div className="flex flex-col bgOverlay22 p-4 gap-6">
        <div className="flex flex-col gap-2">
          <motion.h2
            className="text-[#ef9c00] text-small"
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Realizacja #1
          </motion.h2>
          <motion.h1
            className="font-bold text-xl sm:text-3xl"
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            Domki Rodzinne
          </motion.h1>
          <motion.p
            className="text-tiny sm:text-small leading-relaxed text-pretty text-justify max-w-lg"
            variants={textVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eum dicta sunt aliquid aspernatur ad? Possimus impedit,
            praesentium laudantium aliquam corporis deserunt minima, dolorum
            minus nisi rem placeat pariatur fugit.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-rows-3 md:grid-cols-4 gap-4">
          <motion.div 
            className="row-span-1 md:row-span-2 col-span-1 md:col-span-2"
            variants={imageVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Image src={HeroImage.src} alt="Realizacje" radius="none" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div 
            variants={imageVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={hoverEffect}
          >
            <Image src={HeroImage.src} alt="Realizacje" radius="none" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div 
            variants={imageVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={hoverEffect}
          >
            <Image src={HeroImage.src} alt="Realizacje" radius="none" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div 
            variants={imageVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={hoverEffect}
          >
            <Image src={HeroImage.src} alt="Realizacje" radius="none" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div 
            variants={imageVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={hoverEffect}
          >
            <Image src={HeroImage.src} alt="Realizacje" radius="none" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div 
            variants={imageVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={hoverEffect}
          >
            <Image src={HeroImage.src} alt="Realizacje" radius="none" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div 
            variants={imageVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={hoverEffect}
          >
            <Image src={HeroImage.src} alt="Realizacje" radius="none" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div 
            className="row-span-1 md:row-span-2 col-span-1 md:col-span-2"
            variants={imageVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Image src={HeroImage.src} alt="Realizacje" radius="none" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div 
            variants={imageVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={hoverEffect}
          >
            <Image src={HeroImage.src} alt="Realizacje" radius="none" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div 
            variants={imageVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={hoverEffect}
          >
            <Image src={HeroImage.src} alt="Realizacje" radius="none" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div 
            className="row-span-1 md:row-span-2 col-span-1 md:col-span-2"
            variants={imageVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Image src={HeroImage.src} alt="Realizacje" radius="none" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
