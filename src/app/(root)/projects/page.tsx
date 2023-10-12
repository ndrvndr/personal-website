import ProjectCard from "@/components/cards/ProjectCard";
import BreakLine from "@/components/elements/BreakLine";
import { PROJECTCARD_CONTENTS } from "@/contants/projects";

export default function Projects() {
  return (
    <main>
      <div className="px-8 pt-6">
        <h1 className="primary text-xl font-bold">Projects</h1>
        <p className="secondary mt-2 text-sm leading-relaxed">
          Showcase of my works on frontend development.
        </p>

        <BreakLine decoration="border-dashed" />

        <section>
          <ul>
            {PROJECTCARD_CONTENTS.map((content, index) => (
              <ProjectCard
                key={index}
                url={content.url}
                name={content.name}
                description={content.description}
                techStack={content.techStack}
                image={content.image}
                imageAlt={content.imageAlt}
              />
            ))}
          </ul>
        </section>

        <BreakLine />
      </div>
    </main>
  );
}
