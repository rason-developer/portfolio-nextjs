import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "./components/main/StarBackground";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import Projects from "./components/main/Projects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruno Sousa",
  description: "My own Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas/>
        <Navbar/>
        {children}
        <Projects/>
        <Footer/>
        </body>

    </html>
  );
}
