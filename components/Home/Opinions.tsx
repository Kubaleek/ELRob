import { Chip, Divider } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Blob from "../../app/assets/blob.svg";
import OvOpinie from "../../app/assets/OvOpinie.svg";
import NextImage from 'next/image';
import { Avatar, AvatarIcon } from "@nextui-org/react";


export default function Opinions() {
    return (
        <section className="xl:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center">
                <div className="flex flex-col gap-6">
                    <Chip size="lg" radius="sm" color="warning" variant="dot" className="text-white border border-[#ef9c00]">
                        Opinie
                    </Chip>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-pretty leading-relaxed text-xl md:text-xl lg:tracking-widest font-bold text-[#ef9c00]">
                                <span className="text-white md:text-2xl lg:text-4xl">Opinie o </span> EL-ROB Elektro
                            </h1>
                            <Divider className="h-[1px] bg-[#ef9c00] max-w-20" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <Card className="bg-[#262626] text-white rounded border-2 border-[#ef9c00]/45">
                                <CardHeader className="flex gap-3 pb-0">
                                    <Avatar icon={<AvatarIcon />} classNames={{base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",icon: "text-black/80",}}/>
                                    <div>
                                        <p className="text-justify sm:text-medium font-semibold tracking-widest text-[#ef9c00]">Kuba Kowalski</p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <p className="text-tiny sm:text-small text-pretty leading-relaxed text-[#7f7f7f] text-justify">Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.</p>
                                </CardBody>
                            </Card>
                            <Card className="bg-[#262626] text-white rounded border-2 border-[#ef9c00]/45">
                                <CardHeader className="flex gap-3 pb-0">
                                    <Avatar icon={<AvatarIcon />} classNames={{base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",icon: "text-black/80",}}/>
                                    <div>
                                        <p className="text-justify sm:text-medium font-semibold tracking-widest text-[#ef9c00]">Kuba Kowalski</p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <p className="text-tiny sm:text-small text-pretty leading-relaxed text-[#7f7f7f] text-justify">Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.</p>
                                </CardBody>
                            </Card>
                        </div>
                        <div>
                            <Button as={Link} href="/realizacje" radius="none" color="warning" variant="shadow" className="text-white">
                                Zobacz pozostałe opinie
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex justify-center items-center relative lg:px-8">
                    <NextImage alt="Koło" className="z-0 w-full h-full relative" src={Blob} width={500} height={500} />
                    <div className="absolute inset-0 flex justify-center items-center z-10 lg:px-8">
                        <NextImage alt="Koło" className="z-0 w-full h-full relative lg:px-8" src={OvOpinie} width={500} height={500} />
                    </div>
                </div>
            </div>
        </section>
    );
}