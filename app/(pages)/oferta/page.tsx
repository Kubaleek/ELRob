"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Importuj motion
import HeroImage from "../../../public/assets/pomiary-elektryczne.jpg";
import { Image } from "@nextui-org/react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function OfferPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className="relative bg-gradient-to-r bgOverlay flex flex-col gap-6 md:gap-3 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-4">
        {/* Pierwszy blok */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-1 gap-6"
        >
          <Image src={HeroImage.src} alt="Oferty" className="w-full h-full object-cover" />
          <div className="flex flex-col gap-2">
            <h2 className="text-small text-white/80 font-light text-pretty font-sans">EL-ROB Elektro Usługi</h2>
            <h1 className="text-large font-bold uppercase text-pretty">Usługi Elektryczne</h1>
            <p className="text-tiny sm:text-medium text-white/95 text-pretty text-justify leading-relaxed">
              Usługi Elektryczne obejmują kompleksowe instalacje, naprawy oraz modernizacje systemów elektrycznych
            </p>
          </div>
        </motion.div>

        {/* Drugi blok */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-1 gap-6"
        >
          <div className="flex flex-col gap-2 text-left lg:text-right">
            <h2 className="text-small text-white/80 font-light text-pretty font-sans">EL-ROB Elektro Usługi</h2>
            <h2 className="text-large font-bold uppercase text-pretty">Naprawy Elektryczne</h2>
            <p className="text-tiny sm:text-medium text-white/95 text-pretty text-justify leading-relaxed">
              Naprawy Elektryczne obejmują diagnozowanie i usuwanie awarii instalacji elektrycznych, naprawę gniazdek, oświetlenia oraz bezpieczników.
            </p>
          </div>
          <Image src={HeroImage.src} alt="Oferty" className="w-full h-full object-cover" />
        </motion.div>

        {/* Trzeci blok */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-1 gap-6"
        >
          <Image src={HeroImage.src} alt="Oferty" className="w-full h-full object-cover" />
          <div className="flex flex-col gap-2">
            <h2 className="text-small text-white/80 font-light text-pretty font-sans">EL-ROB Elektro Usługi</h2>
            <h3 className="text-large font-bold uppercase text-pretty">Pomiary Elektryczne</h3>
            <p className="text-tiny sm:text-medium text-white/95 text-pretty text-justify leading-relaxed">
            Oferujemy dokładne badania, takie jak pomiar rezystancji izolacji, skuteczności uziemienia i wyłączników różnicowoprądowych.
            </p>
          </div>
        </motion.div>

        {/* Czwarty blok */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-1 gap-6"
        >
          <div className="flex flex-col gap-2 text-left lg:text-right">
            <h2 className="text-small text-white/80 font-light text-pretty font-sans">EL-ROB Elektro Usługi</h2>
            <h3 className="text-large font-bold uppercase text-pretty">Przeglądy Elektryczne</h3>
            <p className="text-tiny sm:text-medium text-white/95 text-pretty text-justify leading-relaxed">
              Przeglądy Elektryczne obejmują regularne kontrole instalacji elektrycznych w celu wykrycia potencjalnych usterek i zapobiegania awariom.
            </p>
          </div>
          <Image src={HeroImage.src} alt="Oferty" className="w-full h-full object-cover" />
        </motion.div>

        {/* Piąty blok */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-1 gap-6"
        >
          <Image src={HeroImage.src} alt="Oferty" className="w-full h-full object-cover" />
          <div className="flex flex-col gap-2">
            <h2 className="text-small text-white/80 font-light text-pretty font-sans">EL-ROB Elektro Usługi</h2>
            <h3 className="text-large font-bold uppercase text-pretty">Odbiory Instalacji:</h3>
            <p className="text-tiny sm:text-medium text-white/95 text-pretty text-justify leading-relaxed">
              Przeprowadzanie odbiorów technicznych instalacji elektrycznych zgodnie z obowiązującymi normami.
            </p>
          </div>
        </motion.div>

        {/* Szósty blok */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-1 gap-6"
        >
          <div className="flex flex-col gap-2 text-left lg:text-right">
            <h2 className="text-small text-white/80 font-light text-pretty font-sans">EL-ROB Elektro Usługi</h2>
            <h3 className="text-large font-bold uppercase text-pretty">Serwis i Naprawy:</h3>
            <p className="text-tiny sm:text-medium text-white/95 text-pretty text-justify leading-relaxed">
             Oferujemy szybką diagnostykę usterek oraz profesjonalną naprawę instalacji elektrycznych. a także modernizujemy systemy, zapewniając ich efektywność i bezpieczeństwo. Działamy sprawnie i zgodnie z najwyższymi standardami.
            </p>
          </div>
          <Image src={HeroImage.src} alt="Oferty" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
