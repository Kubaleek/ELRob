"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

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
        className="relative flex flex-col gap-6 md:gap-3  md:mt-12 md:mb-12 lg:mb-24 bgOverlay2"
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-12 justify-center items-center mx-auto text-center">
          <div className="flex flex-col gap-6 sm:gap-3 max-w-3xl">
            <motion.div
              ref={headingRef}
              initial={{ opacity: 0, y: -50 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-2"
            >
              <h2 className="text-pretty text-left sm:text-center leading-relaxed text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-[#ef9c00]">
                EL-ROB{" "}
                <span className="text-white md:text-2xl lg:text-4xl">
                  Elektro
                </span>{" "}
                Usługi{" "}
                <span className="text-white md:text-2xl lg:text-4xl">Łódź</span>
              </h2>
            </motion.div>

            {/* Animacja dla paragrafu */}
            <motion.p ref={paragraphRef} initial={{ opacity: 0, y: 20 }} animate={paragraphInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="text-tiny sm:text-small text-pretty leading-relaxed text-justify">
              <span className="sm:text-lg font-bold text-[#ef9c00]">
                EL-ROB Elektro
              </span>{" "}
              - oferuje kompleksowe usługi elektryczne dla firm i klientów
              indywidualnych. Specjalizujemy się w montażu instalacji
              elektrycznych, modernizacjach oraz naprawach. Gwarantujemy
              profesjonalizm, terminowość i wysoką jakość wykonania, dostosowaną
              do indywidualnych potrzeb.
            </motion.p>
          </div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-6" initial={{ opacity: 0, y: 20 }} animate={paragraphInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}>
            <Card className="bg-[#262626] text-white rounded border-2 border-[#ef9c00]/45">
              <CardHeader className="flex gap-3 pb-0">
                <div className="bg-[#ef9c00]/25 text-[#ef9c00] p-2 rounded-full items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cable">
                    <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
                    <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
                    <path d="M21 21v-2h-4" />
                    <path d="M3 5h4V3" />
                    <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
                  </svg>
                </div>
                <p className="font-semibold">Usługi Elektryczne</p>
              </CardHeader>
              <CardBody>
                <p className="text-tiny sm:text-small text-pretty leading-relaxed text-[#7f7f7f] text-justify">Usługi Elektryczne obejmują kompleksowe instalacje, naprawy oraz modernizacje systemów elektrycznych</p>
              </CardBody>
            </Card>
            <Card className="bg-[#262626] text-white rounded border-2 border-[#ef9c00]/45">
              <CardHeader className="flex gap-3 pb-0">
                <div className="bg-[#ef9c00]/25 text-[#ef9c00] p-2 rounded-full items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cable">
                    <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
                    <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
                    <path d="M21 21v-2h-4" />
                    <path d="M3 5h4V3" />
                    <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
                  </svg>
                </div>
                <p className="font-semibold">Naprawy Elektryczne</p>
              </CardHeader>
              <CardBody>
                <p className="text-tiny sm:text-small text-pretty leading-relaxed text-[#7f7f7f] text-justify">Naprawy Elektryczne obejmują diagnozowanie i usuwanie awarii instalacji elektrycznych, naprawę gniazdek, oświetlenia oraz bezpieczników.</p>
              </CardBody>
            </Card>
            <Card className="bg-[#262626] text-white rounded border-2 border-[#ef9c00]/45">
              <CardHeader className="flex gap-3 pb-0">
                <div className="bg-[#ef9c00]/25 text-[#ef9c00] p-2 rounded-full items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cable">
                    <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
                    <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
                    <path d="M21 21v-2h-4" />
                    <path d="M3 5h4V3" />
                    <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
                  </svg>
                </div>
                <p className="font-semibold">Pomiary Elektryczne</p>
              </CardHeader>
              <CardBody>
                <p className="text-tiny sm:text-small text-pretty leading-relaxed text-[#7f7f7f] text-justify">Oferujemy dokładne badania, takie jak pomiar rezystancji izolacji, skuteczności uziemienia i wyłączników różnicowoprądowych.</p>
              </CardBody>
            </Card>
            <Card className="bg-[#262626] text-white rounded border-2 border-[#ef9c00]/45">
              <CardHeader className="flex gap-3 pb-0">
                <div className="bg-[#ef9c00]/25 text-[#ef9c00] p-2 rounded-full items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cable">
                    <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
                    <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
                    <path d="M21 21v-2h-4" />
                    <path d="M3 5h4V3" />
                    <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
                  </svg>
                </div>
                <p className="font-semibold">Przeglądy Elektryczne</p>
              </CardHeader>
              <CardBody>
                <p className="text-tiny sm:text-small text-pretty leading-relaxed text-[#7f7f7f] text-justify">Przeglądy Elektryczne obejmują regularne kontrole instalacji elektrycznych w celu wykrycia potencjalnych usterek i zapobiegania awariom.</p>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
