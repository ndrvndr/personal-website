import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const ICON_SIZE: number = 24;

export const FOOTER_ITEMS = [
  {
    icon: <FiMail size={ICON_SIZE} />,
    href: "mailto:andreavindra37@gmail.com",
    ariaLabel: "Send me an email",
  },
  {
    icon: <FiLinkedin size={ICON_SIZE} />,
    href: "https://www.linkedin.com/in/andre-avindra/",
    ariaLabel: "LinkedIn",
  },
  {
    icon: <FiGithub size={ICON_SIZE} />,
    href: "https://github.com/ndrvndr",
    ariaLabel: "GitHub",
  },
];
