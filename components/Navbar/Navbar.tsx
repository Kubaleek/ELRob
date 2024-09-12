import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function Navigation() {

  const active = usePathname();

  const items = [
    { label: "Strona Główna", href: "/" },
    { label: "O Firmie", href: "/o-firmie" },
    { label: "Oferta", href: "/oferta" },
    { label: "Galleria", href: "/galleria" },
    { label: "Opinie", href: "/opinie" },
    { label: "Kontakt", href: "/kontakt" }
  ];

  return (
    <nav className="bg-[#141414] max-w-[1280px] flex justify-between items-center mx-auto py-2">
      <Logo />
      <div className="hidden lg:flex">
        <ul className="flex gap-4">
          {items.map((item, id) => (
            <li key={`${item.label}-${id}`}>
              <Button as={Link} href={item.href} radius="none" color="warning" variant="shadow" className={`${active === item.href ? ("scale-110") : ("hover:scale-110 scale-95")} text-white transition-all duration-250 delay-75`}>
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden flex">
        test
      </div>
    </nav>
  );
}
