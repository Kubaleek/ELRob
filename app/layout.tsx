import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import LayoutContainer from "../components/LayoutContainer";
import { NextUIProvider } from '@nextui-org/react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "EL - ROB Elektro Uslugi",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className='bg-[#1c1c1c] text-[#f7f7f7] overflow-x-hidden'>
      <body className={`${inter.className} text-small sm:text-medium font-normal text-pretty leading-relaxed overflow-x-hidden`}>
        <NextUIProvider>
          <LayoutContainer>
            {children}
          </LayoutContainer>
        </NextUIProvider>
      </body>
    </html>
  );
}
