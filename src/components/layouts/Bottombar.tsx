"use client";
import { BOTTOMBAR_ITEMS } from "@/contants/bottombar";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeButton from "../elements/ThemeButton";

export default function Bottombar() {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        "border__color",
        "fixed bottom-4 left-1/2 -translate-x-1/2",
        "shadow-md backdrop-blur-3xl",
        "flex items-center gap-1",
        "rounded-full p-2",
        "z-20",
        "md:hidden",
      )}
    >
      {BOTTOMBAR_ITEMS.map((item, index) => {
        const isActivePage =
          pathname === item.pathname ||
          (item.pathname === "/blog" && pathname.startsWith("/blog/"));
        return (
          <Link
            key={index}
            href={item.pathname}
            className={clsx(
              "h-10 w-10 rounded-full",
              "grid place-items-center",
              isActivePage && "bg-gradient-linear ",
            )}
          >
            <span className={isActivePage ? "text-primary-light" : "primary"}>
              {item.icon}
            </span>
          </Link>
        );
      })}

      <div
        className={clsx(
          "mx-2 h-6",
          "border-r border-solid border-secondary-light",
          "dark:border-secondary-dark",
        )}
      />

      <ThemeButton />
    </nav>
  );
}
