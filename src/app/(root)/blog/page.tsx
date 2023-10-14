import BlogCard from "@/components/cards/BlogCard";
import PageTitle from "@/components/elements/PageTitle";
import { BlogItem } from "@/types";
import type { Metadata } from "next";
import { getBlog } from "../../../../sanity/action";
import Search from "./Search";

export const metadata: Metadata = {
  title: "Blog | Andre Avindra",
  description: "Share thoughts and tutorials on web development",
  alternates: {
    canonical: "https://andreavindra.vercel.app/blog",
  },
};

export default async function Blog() {
  const blogs = await getBlog({
    query: "",
    tags: "",
    page: "1",
  });

  return (
    <div className="p-8">
      <PageTitle
        title="Blog"
        description="Share thoughts and tutorials on web development."
      />

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
