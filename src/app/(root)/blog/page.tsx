import BlogCard from "@/components/cards/BlogCard";
import BreakLine from "@/components/elements/BreakLine";
import { BlogItem } from "@/types";
import { getBlog } from "../../../../sanity/action";
import Search from "./Search";

export default async function Blog() {
  const blogs = await getBlog({
    query: "",
    tags: "",
    page: "1",
  });

  return (
    <div className="p-8">
      <h1 className="primary text-xl font-bold md:text-2xl">Blog</h1>
      <p className="secondary mt-2 text-sm leading-relaxed md:text-lg">
        Share thoughts and tutorials on web development.
      </p>

      <BreakLine decoration="border-dashed" />

      <section className="">
        <Search />

        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {blogs.map((blog: BlogItem) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              image={blog.image}
              tags={blog.tags}
              title={blog.title}
              readingTime={blog.readingTime}
              views={blog.views}
              releaseDate={blog.releaseDate}
              description={blog.description}
              slug={blog.slug.current}
              //   checkTagged={checkTagged}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
