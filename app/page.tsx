import React from "react";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Offer from "@/components/Home/Offer";
import Opinion from "@/components/Home/Opinion";
import Works from "@/components/Home/Works";
export default function Home() {
  return (
    <>
        <Hero />
        <About />
        <Offer />
        <Works />
        <Opinion />
    </>
  );
}
