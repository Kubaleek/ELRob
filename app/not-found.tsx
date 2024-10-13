"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Error404 from "../public/assets/404.svg";
export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="relative flex flex-col justify-center items-center  gap-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-computer opacity-60 text-[#ef9c00]"
      >
        {" "}
        <rect width="14" height="8" x="5" y="2" rx="2" />{" "}
        <rect width="20" height="8" x="2" y="14" rx="2" /> <path d="M6 18h2" />{" "}
        <path d="M12 18h6" />
      </svg>
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl font-bold font-sans uppercase text-[#ef9c00]"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-justify text-pretty leading-relaxed text-medium font-sans italic"
      >
        Strona, której szukasz nie istnieje. Wróć do strony głównej.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="p-5 max-w-sm"
      >
        <Image src={Error404} alt="404" />
      </motion.div>
    </motion.section>
  );
}
