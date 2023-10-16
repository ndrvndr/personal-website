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

export const FOOTER_LINKS = [
  { label: "Source Code", toolTip: "This website is open source." },
  { label: "Design", toolTip: "andreavindra.vercel.app color palette." },
  {
    label: "Docs",
    toolTip:
      "Personal documentation about my best practices on web development.",
  },
  { label: "Book Notes", toolTip: "Book Notes" },
  { label: "Starter Templates", toolTip: "Starter Templates" },
  {
    label: "Analytics",
    toolTip: "andreavindra.vercel.app views and visitors analytics",
  },
  { label: "Statistics", toolTip: "Blog and Projects statistics" },
  {
    label: "Guestbook",
    toolTip: "Leave whatever you like to say-message, appreciation, suggestion",
  },
  {
    label: "Subscribe",
    toolTip: "Get an email whenever i post a blog, no spam",
  },
  { label: "RSS", toolTip: "Add andreavindra.vercel.app blog to your feeds" },
];
