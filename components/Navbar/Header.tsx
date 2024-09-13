
import Navigation from "@/components/Navbar/Navbar";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { Button, Divider } from "@nextui-org/react";

export default function Header() {
    return (
      <div>
        <header className="flex flex-col gap-2 sm:flex-row max-w-7xl justify-end items-center mx-auto">
          <p className="text-pretty leading-relaxed w-full font-thin text-small sm:text-medium">Elektryk i usługi Elektryczne</p>
          <div className="flex justify-normal sm:justify-end items-center gap-3 w-full">
            <Button startContent={<LocalPhoneIcon fontSize="small"/>} isDisabled  className="opacity-100" radius="none" variant="flat" color="warning" size="sm">
              666 666 666
            </Button>
            <Button startContent={<LocalPostOfficeIcon fontSize="small"/>} isDisabled  className="opacity-100" radius="none" variant="flat" color="warning" size="sm">
              test@gmail.com
            </Button>
          </div>
        </header>
        <Divider className="h-[1px] bg-[#ef9c00] max-w-[1280px] mx-auto my-3" />
        <Navigation />
      </div>
    );
}