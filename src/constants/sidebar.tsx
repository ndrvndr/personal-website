import { AiOutlineHome } from "react-icons/ai";
import { FaInfo, FaRegPaperPlane } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { TbWriting } from "react-icons/tb";

const ICON_SIZE: number = 24;

export const SIDEBAR_ITEMS = [
  { icon: <AiOutlineHome size={ICON_SIZE} />, pathname: "/", label: "Home" },
  {
    icon: <FaInfo size={ICON_SIZE} />,
    pathname: "/about",
    label: "About",
  },
  {
    icon: <GoProjectSymlink size={ICON_SIZE} />,
    pathname: "/projects",
    label: "Projects",
  },
  { icon: <TbWriting size={ICON_SIZE} />, pathname: "/blog", label: "Blog" },
  {
    icon: <FaRegPaperPlane size={ICON_SIZE} />,
    pathname: "/contact",
    label: "Contact",
  },
];
