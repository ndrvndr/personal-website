import Ping from "@/components/elements/Ping";
import clsx from "clsx";
import Link from "next/link";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <section>
      <h1
        className={clsx(
          "primary",
          "mb-2",
          "flex items-center",
          "text-xl font-medium",
          "min-[347px]:text-2xl",
        )}
      >
        Hi, I&apos;m
        <span className="gradient__text ml-2 font-bold">Andre Avindra</span>
        <div className="ml-1 animate-waving-hand">👋</div>
      </h1>

      <ul className="secondary mb-4 list-disc space-y-2 pl-4">
        <li>Front-End Web Developer</li>
        <li>I build website.</li>
      </ul>

      <p className="secondary mb-4 leading-relaxed">
        Working within the React ecosystem, transform ideas into digital
        realities that are easily accessible and inclusive for web users.
      </p>

      <div className="mb-4 flex items-center gap-2">
        <Ping />
        <p className="primary text-sm line-through decoration-2">
          Available for hire
        </p>
      </div>

      <div className="lg:flex lg:justify-end">
        <Link
          href="mailto:andreavindra37@gmail.com"
          aria-label="Send me an email"
          className={clsx(
            "primary cursor-pointer",
            "flex items-center gap-3",
            "w-fit rounded-md p-3",
            "font-medium",
            "border border-solid",
            "border-primary-gradient dark:border-secondary-gradient",
            "border-opacity-20 dark:border-opacity-30",
            "shadow-lg",
            "shadow-primary-gradient dark:shadow-secondary-gradient",
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail />
          Contact Me
        </Link>
      </div>
    </section>
  );
}
