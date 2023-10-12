import Bottombar from "@/components/layouts/Bottombar";
import Footer from "@/components/layouts/Footer";
import Providers from "@/components/layouts/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andre Avindra",
  robots: "index, follow",
  description:
    "Personal website and blog by Andre Avindra. Showcase of my projects, thoughts and skills on website development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Bottombar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
