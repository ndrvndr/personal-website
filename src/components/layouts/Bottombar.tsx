"use client";
import { BsCloudSunFill } from "react-icons/bs";
import { bottombaritems } from "@/contants/bottombar";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Bottombar() {
  const pathname = usePathname();
  return (
    <nav
      className={clsx(
        "fixed bottom-4 left-1/2 -translate-x-1/2 bg-red-500",
        "flex items-center gap-1",
        "rounded-full p-2",
        "z-20",
      )}
    >
      {bottombaritems.map((item, index) => {
        const isActivePage = pathname === item.pathname;
        return (
          <div
            key={index}
            className={clsx(
              "h-10 w-10 rounded-full",
              "grid place-items-center",
              isActivePage && "bg-white",
            )}
          >
            {item.icon}
          </div>
        );
      })}

      <div className={clsx("border-r border-solid border-black", "mx-2 h-6")} />

      <div
        className={clsx("h-10 w-10 rounded-full ", "grid place-items-center")}
      >
        <BsCloudSunFill size={24} color="white" />
      </div>
    </nav>
  );
}
