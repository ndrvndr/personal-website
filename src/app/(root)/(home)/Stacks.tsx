import StackCard from "@/components/cards/StackCard";
import MarqueeElement from "@/components/elements/Marquee";
import { STACKS } from "@/contants/stacks";
import { HiOutlineCode } from "react-icons/hi";

export default function Stacks() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(
    STACKS,
  ).sort(() => Math.random() - 0.5);
  return (
    <section className="mb-16">
      <div className="mb-6 flex items-center gap-2">
        <HiOutlineCode size={20} />
        <h2 className="text-xl font-medium">Stacks</h2>
      </div>

      <div className="flex flex-col">
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
          return (
            <MarqueeElement
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              {slider.map(([name, icon], index) => (
                <StackCard key={index} name={name} icon={icon} />
              ))}
            </MarqueeElement>
          );
        })}
      </div>
    </section>
  );
}
