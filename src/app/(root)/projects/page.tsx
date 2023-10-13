import ProjectCard from "@/components/cards/ProjectCard";
import BreakLine from "@/components/elements/BreakLine";
import { PROJECTCARD_CONTENTS } from "@/contants/projects";

export default function Projects() {
  return (
    <div className="p-8">
      <h1 className="primary text-xl font-bold md:text-2xl">Projects</h1>
      <p className="secondary mt-2 text-sm leading-relaxed md:text-lg">
        Showcase of my works on frontend development.
      </p>

      <BreakLine decoration="border-dashed" />

      <section className="lg:mb-20">
        <ul className="grid gap-8 sm:grid-cols-2">
          {PROJECTCARD_CONTENTS.map((content, index) => (
            <ProjectCard
              key={index}
              url={content.url}
              title={content.name}
              description={content.description}
              techStack={content.techStack}
              image={content.image}
              imageAlt={content.imageAlt}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
