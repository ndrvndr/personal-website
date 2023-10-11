import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiReacttable,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = "100%";

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} color="yellow" />,
  TypeScript: <SiTypescript size={iconSize} color="blue" />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  "React.js": <SiReact size={iconSize} color="sky" />,
  TailwindCSS: <SiTailwindcss size={iconSize} color="cyan" />,
  GraphQL: <SiGraphql size={iconSize} color="pink" />,
  Vite: <SiVite size={iconSize} color="purple" />,
  PostgreSql: <BiLogoPostgresql size={iconSize} color="blue" />,
  SASS: <SiSass size={iconSize} color="pink" />,
  Firebase: <SiFirebase size={iconSize} color="yellow" />,
  "Framer Motion": <SiFramer size={iconSize} />,
  Jest: <SiJest size={iconSize} color="orange" />,
  "Express.js": <SiExpress size={iconSize} />,
  Redux: <SiRedux size={iconSize} color="purple" />,
  "React Query": <SiReactquery size={iconSize} color="red" />,
  HTML: <SiHtml5 size={iconSize} color="orange" />,
  CSS: <SiCss3 size={iconSize} color="blue" />,
  Prisma: <SiPrisma size={iconSize} color="teal" />,
  "Node JS": <SiNodedotjs size={iconSize} color="green" />,
  Github: <SiGithub size={iconSize} />,
  "React Router": <SiReactrouter size={iconSize} color="pink" />,
  "React Hook Form": <SiReacthookform size={iconSize} color="pink" />,
  "React Table": <SiReacttable size={iconSize} color="rose" />,
};
