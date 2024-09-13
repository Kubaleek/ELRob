import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./nextui/NextUIProvider";
import { Inter } from 'next/font/google'
import LayoutContainer from "./content/LayoutContainer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "EL - ROB Elektro Uslugi Robert Król",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className='bg-[#141414] text-[#f7f7f7]'>
      <body className={`${inter.className} text-small sm:text-medium font-normal text-pretty leading-relaxed`}>
        <Providers>
          <LayoutContainer>
            {children}
          </LayoutContainer>
        </Providers>
      </body>
    </html>
  );
}
