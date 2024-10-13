"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import { Card } from "@nextui-org/react";
import HeroImg from "../../public/assets/HeroImage.jpg";
import { useInView } from "react-intersection-observer";

export default function About() {
  const animationSettings = {
    triggerOnce: true,
    threshold: 0.5,
  };

  const { ref: textBlockRef, inView: textBlockInView } =
    useInView(animationSettings);
  const { ref: headingRef, inView: headingInView } =
    useInView(animationSettings);
  const { ref: paragraphRef, inView: paragraphInView } =
    useInView(animationSettings);
  const { ref: ImageRef, inView: ImageInView } =
    useInView(animationSettings);

  return (
    <section  className="relative md:mt-12 md:mb-12 lg:mb-24 bgOverlay22 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center ">
        <motion.div className="flex flex-col gap-1 md:gap-6" ref={textBlockRef} initial={{ opacity: 0, x: -50 }} animate={textBlockInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
          <motion.h2 ref={headingRef} initial={{ opacity: 0, y: -20 }} animate={headingInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-pretty leading-relaxed text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-[#ef9c00] text-left sm:text-center">
            O EL-ROB{" "}
            <span className="text-white md:text-2xl lg:text-4xl">Elektro</span>
          </motion.h2>

          <motion.p ref={paragraphRef} initial={{ opacity: 0, y: 20 }} animate={paragraphInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-tiny sm:text-small text-pretty leading-relaxed text-justify">
            <span className="text-[#ef9c00] text-sm sm:text-lg font-bold">
              O EL-ROB Elektro Usługi Łódź
            </span>{" "}
            – Świadczymy usługi elektryczne w Łodzi, zapewniając nowoczesne rozwiązania i profesjonalne podejście.
          </motion.p>
        </motion.div>

        <div className="hidden md:flex">
          <div className="col-span-12 md:col-span-6 hidden md:flex px-5">
            <div className="gap-6 grid grid-cols-12 mx-auto">
              <motion.div ref={ImageRef} initial={{ opacity: 0, y: 20 }} animate={ImageInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="col-span-12 md:col-span-6 lg:col-span-6">
                <Card className="rounded-none">
                  <NextImage alt="Elektryczne Zdjęcia" className="z-0 w-full h-full object-cover border-2 border-[#ef9c00]" src={HeroImg} width={500} height={500}/>
                </Card>
              </motion.div>

              <motion.div ref={ImageRef} initial={{ opacity: 0, y: 20 }} animate={ImageInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="col-span-12 md:col-span-6 lg:col-span-6">
                <Card className="rounded-none">
                  <NextImage alt="Elektryczne Zdjęcia" className="z-0 w-full h-full object-cover border-2 border-[#ef9c00]" src={HeroImg} width={500} height={500}/>
                </Card>
              </motion.div>

              <motion.div ref={ImageRef} initial={{ opacity: 0, y: 20 }} animate={ImageInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="col-span-12 md:col-span-6 lg:col-span-6">
                <Card className="rounded-none">
                  <NextImage alt="Elektryczne Zdjęcia" className="z-0 w-full h-full object-cover border-2 border-[#ef9c00]" src={HeroImg} width={500} height={500}/>
                </Card>
              </motion.div>
              <motion.div ref={ImageRef} initial={{ opacity: 0, y: 20 }} animate={ImageInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="col-span-12 md:col-span-6 lg:col-span-6">
                <Card className="rounded-none">
                  <NextImage alt="Elektryczne Zdjęcia" className="z-0 w-full h-full object-cover border-2 border-[#ef9c00]" src={HeroImg} width={500} height={500}/>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
