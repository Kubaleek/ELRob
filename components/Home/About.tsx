"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import { Card } from "@nextui-org/react";
import HeroImg from "../../app/assets/HeroImage.jpg";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: textBlockRef, inView: textBlockInView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });
  const { ref: firstImageRef, inView: firstImageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });
  const { ref: secondImageRef, inView: secondImageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: thirdImageRef, inView: thirdImageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
        <motion.div className="flex flex-col gap-1 md:gap-3" ref={textBlockRef}
          initial={{ opacity: 0, x: -50 }}
          animate={textBlockInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}>
          <h2 className="text-pretty leading-relaxed text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-[#ef9c00]">
            O EL-ROB{" "}
            <span className="text-white md:text-2xl lg:text-4xl">Elektro</span>
          </h2>
          <p className="text-tiny sm:text-medium text-pretty leading-relaxed text-justify">
            <span className="text-[#ef9c00] text-sm sm:text-lg font-bold">
              O EL-ROB Elektro Usługi Łódź
            </span>{" "}
            – Jesteśmy dynamicznie rozwijającą się firmą, która od niedawna
            oferuje usługi elektryczne na terenie Łodzi i okolic. Pomimo
            krótkiego czasu na rynku, zdobywamy zaufanie klientów dzięki
            profesjonalizmowi, nowoczesnym rozwiązaniom i indywidualnemu
            podejściu.
          </p>
        </motion.div>
        <div>
          <div className="col-span-12 md:col-span-6 hidden md:flex px-5">
            <div className="gap-6 grid grid-cols-12 mx-auto">
              {/* Pierwszy obrazek */}
              <motion.div
                ref={firstImageRef}
                initial={{ opacity: 0, y: 20 }}
                animate={firstImageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="col-span-12 md:col-span-6 lg:col-span-6">
                <Card className="rounded-none">
                  <NextImage
                    alt="Elektryczne Zdjęcia"
                    className="z-0 w-full h-full object-cover border-2 border-[#ef9c00]"
                    src={HeroImg}
                    width={500}
                    height={500}
                  />
                </Card>
              </motion.div>
              {/* Drugi obrazek */}
              <motion.div
                ref={secondImageRef}
                initial={{ opacity: 0, y: 20 }}
                animate={secondImageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-12 md:col-span-6 lg:col-span-6">
                <Card className="rounded-none">
                  <NextImage
                    alt="Elektryczne Zdjęcia"
                    className="z-0 w-full h-full object-cover border-2 border-[#ef9c00]"
                    src={HeroImg}
                    width={500}
                    height={500}
                  />
                </Card>
              </motion.div>
              {/* Trzeci obrazek */}
              <motion.div
                ref={thirdImageRef}
                initial={{ opacity: 0, y: 20 }}
                animate={thirdImageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="col-span-12 h-full">
                <Card className="rounded-none">
                  <NextImage
                    alt="Elektryczne Zdjęcia"
                    className="z-0 w-full h-full object-cover border-2 border-[#ef9c00]"
                    src={HeroImg}
                    width={500}
                    height={500}
                  />
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
