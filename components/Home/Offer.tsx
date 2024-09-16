"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Offer() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <motion.section
        ref={sectionRef}
        className="relative flex flex-col gap-6 md:gap-3  md:mt-12 md:mb-12 lg:mb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3 }}>
        
        <div className="flex flex-col gap-3 justify-center items-center max-w-3xl mx-auto text-center">
          <div className="flex flex-col gap-3 sm:gap-6">
            {/* Animacja dla nagłówka */}
            <motion.div
              ref={headingRef}
              initial={{ opacity: 0, y: -50 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
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

            {/* Animacja dla paragrafu */}
            <motion.p
              ref={paragraphRef}
              initial={{ opacity: 0, y: 20 }}
              animate={paragraphInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-tiny sm:text-medium text-pretty leading-relaxed text-justify sm:text-center">
              <span className="sm:text-lg font-bold text-[#ef9c00]">
                EL-ROB Elektro
              </span>{" "}
              oferuje kompleksowe usługi elektryczne dla firm i klientów indywidualnych. Specjalizujemy się w montażu instalacji elektrycznych, modernizacjach oraz naprawach. Gwarantujemy profesjonalizm, terminowość i wysoką jakość wykonania, dostosowaną do indywidualnych potrzeb.
            </motion.p>
          </div>
        </div>
      </motion.section>
    </>
  );
}
