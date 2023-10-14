import clsx from "clsx";
import Link from "next/link";
import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";

const ICON_SIZE: number = 20;

export default function SocialMediaCard({
  url,
  ariaLabel,
  icon,
  label,
  backgroundColor,
}: SocialMediaCardProps) {
  return (
    <>
      <li>
        <Link
          href="https://github.com/ndrvndr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={clsx(
            "bg-neutral-800",
            "cursor-pointer",
            "text-sm font-medium text-primary-dark",
            "flex items-center justify-center gap-2",
            "rounded-md px-4 py-3",
            "md:text-base",
            "lg:hover:scale-[1.08]",
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
            "cursor-pointer",
            "text-sm font-medium text-primary-dark",
            "flex items-center justify-center gap-2",
            "rounded-md px-4 py-3",
            "md:text-base",
            "lg:hover:scale-[1.08]",
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
            "cursor-pointer",
            "text-sm font-medium text-primary-dark",
            "flex items-center justify-center gap-2",
            "rounded-md px-4 py-3",
            "md:text-base",
            "lg:hover:scale-[1.08]",
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
            "bg-neutral-800",
            "cursor-pointer",
            "text-sm font-medium text-primary-dark",
            "flex items-center justify-center gap-2",
            "rounded-md px-4 py-3",
            "md:text-base",
            "lg:hover:scale-[1.08]",
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
            "cursor-pointer",
            "text-sm font-medium text-primary-dark",
            "flex items-center justify-center gap-2",
            "rounded-md px-4 py-3",
            "md:text-base",
            "lg:hover:scale-[1.08]",
          )}
        >
          <FiFacebook size={ICON_SIZE} />
          Facebook
        </Link>
      </li>
    </>
  );
}

interface SocialMediaCardProps {
  url?: string;
  ariaLabel?: string;
  icon?: React.ReactElement;
  label?: string;
  backgroundColor?: string;
}
