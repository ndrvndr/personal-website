import BreakLine from "@/components/elements/BreakLine";
import PageTitle from "@/components/elements/PageTitle";
import Tooltip from "@/components/elements/Tooltip";
import { ABOUT_TEXTS, FAVORITE_STACKS } from "@/constants/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Andre Avindra",
  description: "Short story about Andre Avindra",
  alternates: {
    canonical: "https://andreavindra.vercel.app/about",
  },
};

export default function About() {
  return (
    <div className="p-8">
      <PageTitle title="About me" description="Short story about me." />

      <section>
        {ABOUT_TEXTS.map(({ text }, index) => (
          <p key={index} className="secondary mb-8 leading-relaxed">
            {text}
          </p>
        ))}

        <BreakLine />

        <div>
          <h2 className="primary text-lg font-semibold md:text-xl">
            Current Favorite Tech Stacks
          </h2>

          <ul className="mt-4 flex flex-wrap gap-4">
            {FAVORITE_STACKS.map((stack) => (
              <li key={stack.name}>
                <Tooltip placement="top" label={stack.name}>
                  <span className="text-[32px] md:text-[40px]">
                    {stack.icon}
                  </span>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BreakLine />

      <section>
        <h2 className="primary text-lg font-semibold md:text-xl">Contact</h2>
        <p className="secondary mt-4 leading-relaxed">
          Feel free to reach out if you require my insights on web development,
          particularly when it comes to frontend tasks. I&apos;m more than
          willing to assist you. You can locate my email in the footer.
        </p>
      </section>
    </div>
  );
}
