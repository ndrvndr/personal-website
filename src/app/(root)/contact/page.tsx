import BreakLine from "@/components/elements/BreakLine";
import clsx from "clsx";
import Link from "next/link";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import EmailForm from "./EmailForm";

const ICON_SIZE: number = 20;

export default function Contact() {
  return (
    <main>
      <div className="px-8 pt-6">
        <h1 className="primary text-xl font-bold">Contact</h1>
        <p className="secondary mt-2 text-sm leading-relaxed">Reach me out</p>

        <BreakLine decoration="border-dashed" />

        <section>
          <h2 className="primary font-semibold">Find me on</h2>

          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <Link
                href="https://github.com/ndrvndr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={clsx(
                  "bg-[#262626]",
                  "text-primary-dark",
                  "flex items-center justify-center gap-2",
                  "rounded-md px-4 py-2",
                )}
              >
                <FiGithub size={ICON_SIZE} />
                GitHub
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/in/andre-avindra/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={clsx(
                  "bg-[#0A66C2]",
                  "text-primary-dark",
                  "flex items-center justify-center gap-2",
                  "rounded-md px-4 py-2",
                )}
              >
                <FiLinkedin size={ICON_SIZE} />
                LinkedIn
              </Link>
            </li>

            <li>
              <Link
                href="https://www.instagram.com/ndr.vndr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={clsx(
                  "bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
                  "text-primary-dark",
                  "flex items-center justify-center gap-2",
                  "rounded-md px-4 py-2",
                )}
              >
                <FiInstagram size={ICON_SIZE} />
                Instagram
              </Link>
            </li>

            <li>
              <Link
                href="https://twitter.com/ndrvndr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className={clsx(
                  "bg-[#262626]",
                  "text-primary-dark",
                  "flex items-center justify-center gap-2",
                  "rounded-md px-4 py-2",
                )}
              >
                <FiTwitter size={ICON_SIZE} />
                Twitter
              </Link>
            </li>

            <li>
              <Link
                href="https://www.facebook.com/ndrvndr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={clsx(
                  "bg-[#0966FE]",
                  "text-primary-dark",
                  "flex items-center justify-center gap-2",
                  "rounded-md px-4 py-2",
                )}
              >
                <FiFacebook size={ICON_SIZE} />
                Facebook
              </Link>
            </li>
          </ul>
        </section>

        <BreakLine />

        <EmailForm />

        <BreakLine />
      </div>
    </main>
  );
}
