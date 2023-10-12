import clsx from "clsx";

export default function BreakLine({
  decoration = "solid",
}: {
  decoration?: string;
}) {
  return (
    <div
      className={clsx(
        `border-${decoration}`,
        "mb-6 mt-6 border-b",
        "border-secondary-light dark:border-secondary-dark",
      )}
    />
  );
}
