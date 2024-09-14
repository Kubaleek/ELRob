import { Chip, Divider } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Blob from "../../app/assets/blob.svg";
import OvOferta from "../../app/assets/OvOferta.svg";
import NextImage from 'next/image';

export default function Offer() {
    return (
        <section className="xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center">
                <div className="flex flex-col gap-6">
                    <Chip size="lg" radius="sm" color="warning" variant="dot" className="text-white border border-[#ef9c00]">
                        Oferta
                    </Chip>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-pretty leading-relaxed text-xl md:text-xl lg:tracking-widest font-bold text-[#ef9c00]">
                                EL-ROB Elektro <span className="text-white md:text-2xl lg:text-4xl">Nasza</span> Oferta{" "}
                            </h1>
                            <Divider className="h-[1px] bg-[#ef9c00] max-w-20" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                            <Card className="bg-[#262626] text-white rounded border-2 border-[#ef9c00]/45">
                                <CardHeader className="flex gap-3">
                                    <div className="bg-[#ef9c00]/25 text-[#ef9c00] p-2 rounded-full items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cable"><path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" /><path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" /><path d="M21 21v-2h-4" /><path d="M3 5h4V3" /><path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" /></svg>
                                    </div>
                                    <p className="font-semibold">
                                        Lorem Lorem Lorem
                                    </p>
                                </CardHeader>
                            </Card>
                            <Card className="bg-[#262626] text-white rounded border-2 border-[#ef9c00]/45">
                                <CardHeader className="flex gap-3">
                                    <div className="bg-[#ef9c00]/25 text-[#ef9c00] p-2 rounded-full items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plug-zap"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" /><path d="m2 22 3-3" /><path d="M7.5 13.5 10 11" /><path d="M10.5 16.5 13 14" /><path d="m18 3-4 4h6l-4 4" /></svg>
                                    </div>
                                    <p className="font-semibold">
                                        Lorem Lorem Lorem
                                    </p>
                                </CardHeader>
                            </Card>
                            <Card className="bg-[#262626] text-white rounded border-2 border-[#ef9c00]/45">
                                <CardHeader className="flex gap-3">
                                    <div className="bg-[#ef9c00]/25 text-[#ef9c00] p-2 rounded-full items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                                    </div>
                                    <p className="font-semibold">
                                        Lorem Lorem Lorem
                                    </p>
                                </CardHeader>
                            </Card>
                            <Card className="bg-[#262626] text-white rounded border-2 border-[#ef9c00]/45">
                                <CardHeader className="flex gap-3">
                                    <div className="bg-[#ef9c00]/25 text-[#ef9c00] p-2 rounded-full items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
                                    </div>
                                    <p className="font-semibold">
                                        Lorem Lorem Lorem
                                    </p>
                                </CardHeader>
                            </Card>
                        </div>
                        <div>
                            <Button as={Link} href="/realizacje" radius="none" color="warning" variant="shadow" className="text-white">
                                Zobacz pozostałe oferty
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex justify-center items-center relative lg:px-8">
                    <NextImage alt="Koło" className="z-0 w-full h-full relative" src={Blob} width={500} height={500} />
                    <div className="absolute inset-0 flex justify-center items-center z-10 lg:px-8">
                        <NextImage alt="Koło" className="z-0 w-full h-full relative lg:px-8" src={OvOferta} width={500} height={500} />
                    </div>
                </div>
            </div>
        </section>
    );
}