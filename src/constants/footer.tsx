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
  {
    label: "Source Code",
    toolTip: "This website is open source.",
    url: "https://github.com/ndrvndr/personal-website",
  },
  {
    label: "Design",
    toolTip: "andreavindra.vercel.app color palette.",
    url: "/",
  },
  {
    label: "Docs",
    toolTip:
      "Personal documentation about my best practices on web development.",
    url: "/",
  },
  { label: "Book Notes", toolTip: "Book Notes", url: "/" },
  { label: "Starter Templates", toolTip: "Starter Templates", url: "/" },
  {
    label: "Analytics",
    toolTip: "andreavindra.vercel.app views and visitors analytics",
    url: "/",
  },
  { label: "Statistics", toolTip: "Blog and Projects statistics", url: "/" },
  {
    label: "Guestbook",
    toolTip: "Leave whatever you like to say-message, appreciation, suggestion",
    url: "/guestbook",
  },
  {
    label: "Subscribe",
    toolTip: "Get an email whenever i post a blog, no spam",
    url: "/",
  },
  {
    label: "RSS",
    toolTip: "Add andreavindra.vercel.app blog to your feeds",
    url: "/",
  },
];
