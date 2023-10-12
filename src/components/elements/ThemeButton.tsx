import clsx from "clsx";
import { useTheme } from "next-themes";
import * as React from "react";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <button
      className={clsx("h-10 w-10 rounded-full ", "grid place-items-center")}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Theme Button"
    >
      {mounted ? (
        <>
          {theme === "light" ? (
            <span className="text-2xl">🌔</span>
          ) : (
            <span className="text-2xl">🌤️</span>
          )}
        </>
      ) : (
        <span className="text-2xl">🌤️</span>
      )}
    </button>
  );
}
