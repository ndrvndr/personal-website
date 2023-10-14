import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";

const ICON_SIZE: number = 20;

export const CONTACT_ITEMS = [
  {
    icon: <FiGithub size={ICON_SIZE} />,
    url: "https://github.com/ndrvndr",
    label: "GitHub",
    backgroundColor: "bg-neutral-800",
  },
  {
    icon: <FiLinkedin size={ICON_SIZE} />,
    url: "https://www.linkedin.com/in/andre-avindra/",
    label: "LinkedIn",
    backgroundColor: "bg-[#0A66C2]",
  },
  {
    icon: <FiInstagram size={ICON_SIZE} />,
    url: "https://www.instagram.com/ndr.vndr/",
    label: "Instagram",
    backgroundColor:
      "bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    icon: <FiTwitter size={ICON_SIZE} />,
    url: "https://twitter.com/ndrvndr",
    label: "Twitter",
    backgroundColor: "bg-neutral-800",
  },
  {
    icon: <FiFacebook size={ICON_SIZE} />,
    url: "https://www.facebook.com/ndrvndr/",
    label: "Facebook",
    backgroundColor: "bg-[#0966FE]",
  },
];
