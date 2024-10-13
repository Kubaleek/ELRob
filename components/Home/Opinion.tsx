"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";

export default function Opinion() {
  const { ref: AniRef, inView: AnimInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Różne wartości top dla każdej karty
  const cardPositions = ["lg:top-0", "lg:top-6", "lg:top-12"];

  return (
    <motion.section
      ref={AniRef}
      className="flex flex-col gap-12 relative md:mt-12 md:mb-12 lg:mb-24 "
      initial={{ opacity: 0, x: 20 }}
      animate={AnimInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="bgOverlay22 py-8 px-4 flex justify-center items-center mx-auto ">
        <div className="flex justify-center items-center">
          <motion.div
            className="flex flex-col gap-1 md:gap-3"
            initial={{ opacity: 0, x: -50 }}
            animate={AnimInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              ref={AniRef}
              initial={{ opacity: 0, y: 20 }}
              animate={AnimInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-pretty leading-relaxed text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-[#ef9c00] text-left sm:text-center"
            >
              <span className="text-white md:text-2xl lg:text-4xl">Opinie</span>{" "}
              O EL-ROB{" "}
              <span className="text-white md:text-2xl lg:text-4xl">
                Elektro
              </span>
            </motion.h2>
            <motion.p
              ref={AniRef}
              initial={{ opacity: 0, y: 20 }}
              animate={AnimInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-tiny sm:text-small text-pretty leading-relaxed text-justify"
            >
              <span className="text-[#ef9c00] text-sm sm:text-lg font-bold">
                Opinie O EL-ROB Elektro
              </span>{" "}
              - Zaufanie klientów jest dla nas najważniejsze! Sprawdź, co mówią
              o EL-ROB Elektro Usługi. Nasi klienci cenią nas za profesjonalizm,
              terminowość i wysoką jakość wykonanych prac. Zobacz, jak pomagamy
              w realizacji nowoczesnych i bezpiecznych instalacji elektryczny
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            initial="hidden"
            ref={AniRef}
            animate={AnimInView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`relative ${cardPositions[index]}`} // Dodanie różnej wartości top
          >
            <Card
              radius="none"
              className="bg-transparent border border-[#ef9c00]/25 shadow-none"
            >
              <CardHeader />
              <CardBody>
                <p className="text-white font-medium text-tiny text-pretty leading-relaxed text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consectetur, quas vero. Ipsam sed placeat atque, incidunt magni
                  animi reiciendis consectetur eum eaque quo debitis. Doloremque
                  est accusantium odio assumenda quaerat.
                </p>
              </CardBody>
              <CardFooter className="flex justify-center items-center gap-2 flex-col">
                <Avatar
                  size="sm"
                  showFallback
                  src="https://images.unsplash.com/broken"
                  classNames={{
                    base: "bg-gradient-to-br from-[#FFB457] to-[#ef9c00]",
                    icon: "text-black/80",
                  }}
                />
                <p className="text-white font-medium flex flex-col text-small text-pretty leading-relaxed text-center">
                  Jan Kowalski
                  <span className="text-tiny font-sans font-normal text-gray-200">
                    Napisał/a 25 września 2024
                  </span>
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
