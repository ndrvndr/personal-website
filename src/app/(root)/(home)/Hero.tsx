import Ping from "@/components/elements/Ping";
import clsx from "clsx";
import Link from "next/link";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <section>
      <h1 className="mb-2 flex items-center text-2xl font-medium">
        Hi, I&apos;m Andre <div className="animate-waving-hand ml-1">👋</div>
      </h1>

      <ul className="mb-4 list-disc space-y-3 pl-4">
        <li>Front-End Web Developer</li>
        <li>Based in Batam 🇮🇩</li>
      </ul>

      <p className="mb-4 leading-relaxed">
        I am very enthusiastic about web development, especially front-end web
        development. I have worked on several personal projects and hope to be
        involved in more real-world projects in the future.
      </p>

      <div className="mb-4 flex items-center gap-2">
        <Ping />
        <p className="text-sm">Available for hire</p>
      </div>

      <div className="lg:flex lg:justify-end">
        <Link
          href="mailto:andreavindra37@gmail.com"
          aria-label="Send me an email"
          className={clsx(
            "flex items-center gap-3",
            " w-fit rounded-md px-3 py-2",
            "bg-red-500 text-sm font-medium text-white",
          )}
        >
          <SiGmail />
          Contact Me
        </Link>
      </div>
    </section>
  );
}
