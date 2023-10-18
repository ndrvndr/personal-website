"use client";
import ColorSwatch from "@/components/elements/ColorSwatch";
import { THEME_COLORS } from "@/constants/design";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function ColorPalette() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={clsx("rounded p-4", "border__color border-2 border-dashed")}
    >
      <p className="secondary text-sm">Font Family: Inter</p>

      <div className="grid sm:grid-cols-2">
        {THEME_COLORS.map((color) => (
          <ColorSwatch
            key={color.title}
            title={color.title}
            subTitle={color.subTitle}
            colorClassname={color.colorClassName}
          />
        ))}

        <div className={clsx("mt-4 flex items-center gap-2")}>
          <div
            className={clsx(
              "bg-gradient-linear",
              "h-10 w-10 rounded",
              "border__color",
            )}
          />
          <div className="flex flex-col gap-1">
            <p>Gradient</p>
            <p className="secondary text-sm">#B3ffab to #12fff7</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
