import BreakLine from "@/components/elements/BreakLine";
import Tooltip from "@/components/elements/Tooltip";
import { ABOUT_TEXTS, FAVORITE_STACKS } from "@/contants/about";

export default function About() {
  return (
    <div className="p-8">
      <h1 className="primary text-xl font-bold md:text-2xl">About me</h1>
      <p className="secondary mt-2 text-sm leading-relaxed md:text-lg">
        Short story about me.
      </p>

      <BreakLine decoration="border-dashed" />

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
                  {stack.icon}
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
