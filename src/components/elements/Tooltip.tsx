"use client";
import Tippy from "@tippyjs/react/headless";
import clsx from "clsx";

export default function Tooltip({ children, label, placement }: TooltipProps) {
  return (
    <Tippy
      placement={placement}
      render={() => (
        <div
          className={clsx(
            "rounded-md px-3 py-2",
            "primary__reverse",
            "bg-black dark:bg-white",
          )}
        >
          {label}
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

interface TooltipProps {
  children: React.ReactElement;
  label: string;
  placement: "top" | "bottom";
}
