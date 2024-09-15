import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { Divider } from "@nextui-org/react";

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const active = usePathname();

  const items = [
    { label: "Strona Główna", href: "/" },
    { label: "O Firmie", href: "/o-firmie" },
    { label: "Oferta", href: "/oferta" },
    { label: "Cennik", href: "/cennik" },
    { label: "Realizacje", href: "/realizacje" },
    { label: "Opinie", href: "/opinie" }, 
    { label: "Galeria", href: "/galeria" },
  ];

  return (
    <nav className="flex justify-between items-center relative">
      <Logo />
      <ul className="hidden lg:flex gap-4">
        {items.map((item, id) => (
          <li key={`${item.label}-${id}`}>
            <Button
              as={Link}
              href={item.href}
              radius="none"
              color="warning"
              variant="flat"
              className={`${active === item.href ? "scale-105" : "hover:scale-105 scale-95"} text-[#ef9c00] transition-all duration-250 delay-75`}>
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
      <div className="lg:hidden flex items-center">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#ef9c00" rounded />
        <div className={`fixed justify-start gap-6 flex flex-col p-4 items-center top-0 left-0 h-full w-48 bg-[#1c1c1c] backdrop-blur-3xl bg-opacity-45  border-r border-[#ef9c00] z-40 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div>
            <Logo />
            <Divider className="h-[1px] bg-[#ef9c00] my-3" />
          </div>
          <ul className="flex flex-col gap-4">
            {items.map((item, id) => (
              <li key={`${item.label}-${id}`}>
                <Button
                  as={Link}
                  href={item.href}
                  radius="none"
                  color="warning"
                  variant="flat"
                  className={`text-[#ef9c00] !focus:text-white transition-all duration-250 delay-75 w-full`}>
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
