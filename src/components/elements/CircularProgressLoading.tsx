import clsx from "clsx";
import { motion } from "framer-motion";

export default function CircularProgressLoading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex animate-pulse flex-col justify-between gap-8 md:flex-row md:gap-12"
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={clsx(
              "h-16 w-16",
              "rounded-full",
              "bg-neutral-200 dark:bg-neutral-700",
              "border-4 border-solid",
              "border-primary-light dark:border-primary-dark",
              "border-opacity-10 dark:border-opacity-10",
            )}
          />

          <div
            className={clsx(
              "mt-2 h-4 w-16",
              "rounded-full",
              "bg-neutral-200 dark:bg-neutral-700",
            )}
          />
        </div>
      ))}
    </motion.div>
  );
}
