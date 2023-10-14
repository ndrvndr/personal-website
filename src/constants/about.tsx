import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

const ICON_SIZE: number = 32;

export const ABOUT_TEXTS = [
  {
    text: "Hi! I'm Andre. I started learning web development at the beginning of the pandemic. With not much else to do, I decided to begin my web development journey through web development forums. After that, I started watching various YouTube videos to delve deeper into web development, especially in terms of frontend development.",
  },
  {
    text: "I'm eager to expand my knowledge and skills in frontend development, as there is a vast array of technologies and concepts to explore. I find great satisfaction in the process of acquiring new information and techniques, and I'm highly motivated to keep learning and growing. I value constructive feedback as it helps me refine my abilities and enhance my overall proficiency.",
  },
  {
    text: "Through this website, I plan to share my thoughts and showcase the projects I've worked on. I firmly believe that documenting what I've learned is an excellent method to solidify my understanding, and it also allows me to impart my knowledge with others. Please don't hesitate to reach out, and I'll be delighted to assist you!",
  },
];

export const FAVORITE_STACKS = [
  {
    icon: <SiTypescript size={ICON_SIZE} color="#3078C7" />,
    name: "Typescript",
  },
  {
    icon: <SiTailwindcss size={ICON_SIZE} color="#38BDF8" />,
    name: "Tailwind",
  },
  { icon: <SiReact size={ICON_SIZE} color="#149FCB" />, name: "React" },
  { icon: <SiNextdotjs size={ICON_SIZE} />, name: "Next.js" },
  { icon: <SiNodedotjs size={ICON_SIZE} color="#418A3F" />, name: "Node.js" },
];
