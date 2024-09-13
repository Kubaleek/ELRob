import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-5">
          <h1 className="text-justify text-pretty leading-relaxed text-xl md:text-3xl font-bold text-[#ef9c00]">EL-ROB <span className="text-white md:text-4xl">Elektro</span> Usługi <span className="text-white md:text-4xl">Łódź</span></h1>
          <Divider className="h-[1px] bg-[#ef9c00] max-w-[1280px] mx-auto" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores ut eius, corporis, sint ipsum illo dolor, et libero voluptatibus tempora mollitia? Provident maiores nesciunt doloremque, repellat eius quod cupiditate?
          </p>
          <div>
            <Button as={Link} href="/o-firmie" radius="none" color="warning" variant="shadow" className="text-white">
              Więcej o nas
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
