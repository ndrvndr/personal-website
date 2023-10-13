import Bottombar from "@/components/layouts/Bottombar";
import Footer from "@/components/layouts/Footer";
import Providers from "@/components/layouts/Providers";
import Sidebar from "@/components/layouts/Sidebar";
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
          <div className="w-fulll sticky top-0 z-10 h-2 bg-gradient-linear"></div>
          <div className="md:flex lg:m-auto lg:max-w-7xl lg:justify-center lg:gap-5">
            <Sidebar />
            <div>
              <main className="lg:max-w-4xl">{children}</main>
              <Bottombar />
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
