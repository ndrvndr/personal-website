import clsx from "clsx";

export default function BreakLine() {
  return (
    <div
      className={clsx(
        "mb-6 mt-8 border-b border-solid",
        "border-secondary-light dark:border-secondary-dark",
      )}
    />
  );
}
