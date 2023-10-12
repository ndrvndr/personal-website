import BreakLine from "@/components/elements/BreakLine";
import { ABOUT_TEXTS, FAVORITE_STACKS } from "@/contants/about";
import clsx from "clsx";

export default function About() {
  return (
    <main>
      <div className="px-8 pt-6">
        <h2 className="primary text-xl font-bold">About me</h2>
        <h1
          className={clsx(
            "mb-6 mt-2 w-fit",
            "gradient__text text-2xl font-bold ",
          )}
        >
          Andre Avindra
        </h1>

        <BreakLine decoration="border-dashed" />

        <section>
          {ABOUT_TEXTS.map(({ text }, index) => (
            <p key={index} className="mt-6 leading-relaxed">
              {text}
            </p>
          ))}

          <BreakLine />

          <div>
            <h2 className="primary text-xl font-bold">
              Current Favorite Tech Stacks
            </h2>
            <ul className="mt-2 flex flex-wrap gap-4">
              {FAVORITE_STACKS.map((stack) => (
                <li key={stack.name}>{stack.icon}</li>
              ))}
            </ul>
          </div>
        </section>

        <BreakLine />

        <section>
          <h2 className="primary text-xl font-bold">Contact</h2>
          <p className="mt-4 leading-relaxed">
            Feel free to reach out if you require my insights on web
            development, particularly when it comes to frontend tasks. I&apos;m
            more than willing to assist you. You can locate my email in the
            footer.
          </p>
        </section>

        <BreakLine />
      </div>
    </main>
  );
}
