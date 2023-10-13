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
            "rounded-md px-4 py-3",
            "primary__reverse",
            "bg-neutral-800 dark:bg-neutral-200",
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
