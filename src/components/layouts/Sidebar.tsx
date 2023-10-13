"use client";
import { SIDEBAR_ITEMS } from "@/contants/sidebar";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SpotifyCard from "../cards/SpotifyCard";
import BreakLine from "../elements/BreakLine";
import ThemeButton from "../elements/ThemeButton";

export default function Sidebar() {
  const pathname = usePathname();
  const isBlogSlug = pathname.startsWith("/blog/");

  return (
    <nav
      className={clsx(
        isBlogSlug && "lg:hidden",
        "sticky top-2 ml-8 hidden h-[calc(100vh-8px)] pt-8",
        "w-fit md:block",
        "lg:w-52",
      )}
    >
      <header
        className={clsx(
          "m-auto flex w-fit items-center justify-between",
          "md:flex-col",
          "lg:mb-12 lg:w-52 lg:flex-row",
        )}
      >
        <div className="flex items-center gap-4">
          <Image
            src="https://res.cloudinary.com/dqqmzgesp/image/upload/v1697030269/personal-website/profileImage.webp"
            alt="Image Profile"
            className="border__color h-11 w-11 rounded-full"
            width={100}
            height={100}
          />

          <div className="hidden flex-col lg:flex">
            <h2 className="primary text-base font-medium md:text-lg">
              ndr.vndr
            </h2>
            <p className="secondary text-sm md:text-base">Λ.7214</p>
          </div>
        </div>

        <ThemeButton />
      </header>

      <BreakLine />

      <ul className="space-y-4">
        {SIDEBAR_ITEMS.map((item, index) => {
          const isActivePage =
            pathname === item.pathname ||
            (item.pathname === "/blog" && pathname.startsWith("/blog/"));

          return (
            <li key={index}>
              <Link href={item.pathname}>
                <div
                  className={clsx(
                    isActivePage
                      ? "bg-gradient-linear text-primary-light hover:scale-100"
                      : "primary hover:scale-[1.08]",
                    "rounded-md",
                    "flex items-center gap-4",
                    "w-fit px-4 py-3 ",
                    "font-bold",
                    "hover:bg-neutral-200 dark:hover:bg-neutral-800",
                    "lg:w-full",
                  )}
                >
                  {item.icon}
                  <span className="hidden lg:block">{item.label}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <BreakLine classname="md:hidden lg:block" />

      <SpotifyCard display="md:hidden lg:flex" />
    </nav>
  );
}
