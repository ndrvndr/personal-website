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
          "mb-4",
          "text-xl font-bold",
          "min-[347px]:text-2xl md:text-3xl",
        )}
      >
        Call me <span className="gradient__text">Andre</span>
        <div className="ml-1 inline-block animate-waving-hand">👋</div>
      </h1>

      <ul className="secondary mb-4 list-disc space-y-1 pl-4 text-sm md:text-lg">
        <li>Front-End Web Developer</li>
        <li>
          I build <span className="gradient__text">website</span>.
        </li>
      </ul>

      <p className="secondary mb-4 text-sm leading-relaxed md:text-lg">
        Working within the React ecosystem, transform ideas into digital
        realities that are easily accessible and inclusive for web users.
      </p>

      <div className="mb-4 flex items-center gap-2">
        <Ping />
        <p className="primary text-sm md:text-lg">Available for hire</p>
      </div>

      <Link
        href="mailto:andreavindra37@gmail.com"
        aria-label="Contact Me"
        className={clsx(
          "primary border__gradient cursor-pointer",
          "flex items-center gap-3",
          "w-fit rounded-md p-3",
          "text-sm font-bold md:text-lg",
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGmail />
        Contact Me
      </Link>
    </section>
  );
}
