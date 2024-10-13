"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Common/Navbar/Header";
import Logo from "./Common/Navbar/Logo";
import { items } from "./Common/Navbar/Navbar";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Divider } from "@nextui-org/react";

export default function LayoutContainer({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
      <div className="flex flex-col gap-6 bg-[#1c1c1c] h-full md:max-w-6xl mx-auto p-4 z-50 relative">
        <Header />
        <motion.main
          className="container flex flex-col gap-24 sm:gap-12 md:gap-6 lg:gap-12 mx-auto text-tiny sm:text-medium text-pretty leading-relaxed text-justify pt-12 md:pt-16"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1, transition: { duration: 0.5 } },
            hidden: { opacity: 0 },
          }}
          transition={{
            duration: 0.7,
            delayChildren: 0.6,
            staggerChildren: 0.8,
          }}
        >
          {children}
        </motion.main>
        <Divider className="h-[1px] bg-[#ef9c00]/25 max-w-lg mx-auto my-3" />
        <footer className="flex flex-col sm:items-center gap-6">
          <Logo />
          <p className="text-justify text-pretty text-tiny sm:text-small leading-relaxed max-w-md text-gray-50">
            O EL-ROB Elektro Usługi Łódź – Jesteśmy dynamicznie rozwijającą się firmą, która od niedawna oferuje usługi elektryczne na terenie Łodzi.
          </p>
          <ul className="hidden md:flex flex-col flex-wrap md:flex-row gap-3">
            {items.map((item, id) => (
              <li key={`${item.label}-${id}`}>
                <Button
                  as={Link}
                  href={item.href}
                  radius="none"
                  color="warning"
                  variant="light"
                  className={`text-[#ef9c00] bg-transparent !focus:text-white transition-all duration-250 delay-75 w-full`}>
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
          <p className="text-pretty text-tiny leading-relaxed text-gray-50">
          © 2024 EL-ROB Elektro Usługi Łódź™. Wszelkie prawa zastrzeżone.
          </p>
        </footer>
      </div>
    </AnimatePresence>
  );
}
