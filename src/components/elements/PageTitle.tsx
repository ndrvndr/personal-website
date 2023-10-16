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
        className="secondary mt-2 leading-relaxed md:mb-14 md:text-lg lg:mb-0"
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
