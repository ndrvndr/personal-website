import clsx from "clsx";
import Link from "next/link";

export default function SubscribeCard() {
  return (
    <div
      className={clsx(
        "border__color",
        "flex flex-col gap-4",
        "mt-8 p-4",
        "rounded text-left",
      )}
    >
      <h3 className="gradient__text w-fit text-lg font-bold md:text-2xl">
        Join to the newsletter list
      </h3>
      <p className="secondary max-w-md text-sm md:text-base">
        Don&apos;t forget to subscribe. Receive an email every time I publish
        new blog content, with no spam.
      </p>
      <Link
        className="primary border__gradient w-fit px-4 py-2.5 text-sm font-bold md:text-base"
        href="/subscribe"
      >
        Subscribe Now
      </Link>
    </div>
  );
}
