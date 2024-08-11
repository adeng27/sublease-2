import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import ClientOnly from "./components/ClientOnly";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sublease startup",
  description: "sublease startup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
