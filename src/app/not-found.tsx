import clsx from "clsx";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className={clsx(
        "h-screen w-full",
        "p-8",
        "flex flex-col items-center justify-center",
      )}
    >
      <section className="flex flex-col items-center">
        <h1 className={clsx("primary", "text-2xl font-bold", "md:text-3xl")}>
          404
        </h1>
        <p
          className={clsx(
            "secondary",
            "my-4",
            "text-center text-xl",
            "md:text-2xl",
          )}
        >
          This page could not be found.
        </p>

        <Link href="/" aria-label="Return to the homepage">
          <div
            className={clsx(
              "primary group",
              "relative mb-9",
              "font-bold",
              "md:text-lg",
            )}
          >
            <h2>Homepage</h2>
            <div
              className={clsx(
                "absolute",
                "bg-gradient-linear",
                "mt-[2px] h-[1px] w-full",
              )}
            />
            <div
              className={clsx(
                "mt-[2px] h-[2px] w-full",
                "bg-gradient-linear",
                "lg:w-0 lg:group-hover:w-full",
                "lg:transition-all lg:duration-200",
              )}
            />
          </div>
        </Link>
      </section>
    </div>
  );
}
