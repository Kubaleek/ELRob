import { Chip, Divider } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import NextImage from 'next/image';
import Blob from "../../app/assets/blob.svg";
import OvFirma from "../../app/assets/OvFirma.svg";
export default function About() {
    return (
        <section className="xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center">
                <div className="hidden lg:flex justify-center items-center relative lg:px-8">
                    <NextImage alt="Koło" className="z-0 w-full h-full relative" src={Blob} width={500} height={500} />
                    <div className="absolute inset-0 flex justify-center items-center z-10 lg:px-8">
                        <NextImage alt="Koło" className="z-0 w-full h-full relative lg:px-8" src={OvFirma} width={500} height={500} />
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <Chip size="lg" radius="sm" color="warning" variant="dot" className="text-white border border-[#ef9c00]">
                        O Firmie
                    </Chip>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-pretty leading-relaxed text-xl md:text-xl lg:tracking-widest font-bold text-[#ef9c00]">
                                O EL-ROB <span className="text-white md:text-2xl lg:text-4xl">Elektro</span>{" "}
                                Usługi
                            </h1>
                            <Divider className="h-[1px] bg-[#ef9c00] max-w-20" />
                        </div>
                        <p className="text-tiny sm:text-medium text-pretty leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                            maiores ut eius, corporis, sint ipsum illo dolor, et libero
                            voluptatibus tempora mollitia? Provident maiores nesciunt
                            doloremque, repellat eius quod cupiditate?
                        </p>
                        <div>
                            <Button as={Link} href="/o-firmie" radius="none" color="warning" variant="shadow" className="text-white">
                                Więcej o firmie
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
