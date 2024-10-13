"use client";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import HeroImg from "../../../public/assets/pomiary-elektryczne.jpg";
import { Card } from "@nextui-org/react";

export default function AboutPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className="relative flex flex-col  gap-6 md:gap-3 mb-6"
    >
      <div className="grid grid-cols-12 gap-y-12  bgOverlay  md:gap-6 justify-center items-center max-w-7xl p-3 mx-auto">
        <div className="col-span-12 md:col-span-6 lg:col-span-6">
          <div className="flex flex-col gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-pretty leading-relaxed text-xl md:text-2xl lg:text-3xl font-bold"
            >
              O <span className="text-[#ef9c00]">EL-ROB</span> Elektro{" "}
              <span className="text-[#ef9c00]">Usługi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
              className="text-tiny sm:text-medium text-pretty leading-relaxed text-justify"
            >
              <span className="text-[#ef9c00] font-bold text-large">
                O EL-ROB Elektro Usługi Łódź
              </span>{" "}
              – Jesteśmy dynamicznie rozwijającą się firmą, która od niedawna
              oferuje usługi elektryczne na terenie Łodzi. Pomimo krótkiego
              czasu na rynku, zdobywamy zaufanie klientów dzięki
              profesjonalizmowi, nowoczesnym rozwiązaniom i indywidualnemu
              podejściu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            >
              <Button
                as={Link}
                href="/realizacje"
                radius="none"
                color="warning"
                variant="shadow"
                className="w-full sm:w-fit text-white"
              >
                Zobacz Realizacje
              </Button>
            </motion.div>
          </div>
        </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-12 md:col-span-6 lg:col-span-6  md:px-5"
          >
            <Card className="rounded-none">
              <Image
                alt="Elektryczne Zdjęcia"
                className="z-0 w-full h-full object-cover"
                src={HeroImg}
                width={500}
                height={500}
              />
            </Card>
          </motion.div>
      </div>
    </section>
  );
}
