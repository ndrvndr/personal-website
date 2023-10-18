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
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Design",
    toolTip: "andreavindra.vercel.app color palette.",
    url: "/design",
    target: "",
    rel: "",
  },
  {
    label: "Docs",
    toolTip:
      "Personal documentation about my best practices on web development.",
    url: "/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Starter Templates",
    toolTip: "Starter Templates",
    url: "https://github.com/ndrvndr?tab=repositories&q=starter",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Audits",
    toolTip:
      "Real-time performance report for andreavindra.vercel.app based on the Pagespeed API",
    url: "/audits",
    target: "",
    rel: "",
  },
  {
    label: "Analytics",
    toolTip: "andreavindra.vercel.app views and visitors analytics",
    url: "/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Statistics",
    toolTip: "Blogs statistics",
    url: "/statistics",
    target: "",
    rel: "",
  },
  {
    label: "Guestbook",
    toolTip: "Leave whatever you like to say-message, appreciation, suggestion",
    url: "/guestbook",
    target: "",
    rel: "",
  },
  {
    label: "Subscribe",
    toolTip: "Get an email whenever i post a blog, no spam",
    url: "/subscribe",
    target: "",
    rel: "",
  },
  {
    label: "RSS",
    toolTip: "Add andreavindra.vercel.app blog to your feeds",
    url: "https://andreavindra.vercel.app/rss.xml",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
