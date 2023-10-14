"use client";
import { useScramble } from "use-scramble";
import BreakLine from "./BreakLine";
export default function PageTitle({ title, description }: PageTitleProps) {
  const { ref: refH1 } = useScramble({
    text: title,
  });

  const { ref: refP } = useScramble({
    text: description,
  });

  return (
    <>
      <h1 className="primary text-xl font-bold md:text-2xl" ref={refH1} />
      <p
        className="secondary mt-2 text-sm leading-relaxed md:text-lg"
        ref={refP}
      />
      <BreakLine decoration="border-dashed" />
    </>
  );
}

interface PageTitleProps {
  title: string;
  description: string;
}
