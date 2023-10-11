import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { TbWriting } from "react-icons/tb";
import { FaRegPaperPlane } from "react-icons/fa";

export const bottombaritems = [
  { icon: <AiOutlineHome size={24} />, pathname: "/" },
  { icon: <SiAboutdotme size={24} />, pathname: "/about" },
  { icon: <GoProjectSymlink size={24} />, pathname: "/project" },
  { icon: <TbWriting size={24} />, pathname: "/blog" },
  { icon: <FaRegPaperPlane size={24} />, pathname: "/contact" },
];
