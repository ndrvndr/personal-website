import BreakLine from "@/components/elements/BreakLine";
import Career from "./Career";
import Header from "./Header";
import Hero from "./Hero";
import Stacks from "./Stacks";

export default function Home() {
  return (
    <>
      <div className="px-8 pb-5 pt-8">
        <Header />
        <Hero />
        <BreakLine />
        <Career />
        <BreakLine />
        <Stacks />
      </div>
    </>
  );
}
