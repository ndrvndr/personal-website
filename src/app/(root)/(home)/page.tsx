import BreakLine from "@/components/elements/BreakLine";
import Hero from "./Hero";
import Header from "./Header";
import Stacks from "./Stacks";
import Career from "./Career";

export default function Home() {
  return (
    <main>
      <div className="px-8 pt-6">
        <Header />
        <Hero />
        <BreakLine />
        <Career />
        <BreakLine />
        <Stacks />
        <BreakLine />
      </div>
    </main>
  );
}
