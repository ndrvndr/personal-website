import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";
import Career from "./Career";
import Header from "./Header";
import Hero from "./Hero";
import Stacks from "./Stacks";

export const metadata: Metadata = {
  title: "Andre Avindra",
  description:
    "Personal website and blog by Andre Avindra. Showcase of my projects, thoughts and skills on website development.",
  alternates: {
    canonical: "https://andreavindra.vercel.app/",
  },
};

export default function Home() {
  return (
    <>
      <div className="px-8 pb-5 pt-8">
        <PageTitle title="Home" description="Personal website and blog." />
        <Header />
        <Hero />
        <Career />
        <Stacks />
      </div>
    </>
  );
}
