import About from "@/components/Home/About";
import Gallery from "@/components/Home/Gallery";
import Hero from "@/components/Home/Hero";
import Offer from "@/components/Home/Offer";
import Opinions from "@/components/Home/Opinions";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Offer />
      <Gallery />
      <Opinions />
    </>
  );
}
