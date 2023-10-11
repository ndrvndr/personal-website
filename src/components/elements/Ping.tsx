import clsx from "clsx";

export default function Ping() {
  return (
    <span className="relative flex h-3 w-3">
      <span
        className={clsx(
          "absolute inline-flex",
          "h-full w-full",
          "animate-ping rounded-full bg-red-400 opacity-75",
        )}
      />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
    </span>
  );
}
