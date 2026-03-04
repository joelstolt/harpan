import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Förskolan Harpan – Kristen förskola med musikprofil i Hässleholm",
  description:
    "En liten förskola med 31 barn, musikprofil och kristen värdegrund. Finjagatan 19, Hässleholm. Sök plats idag!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
