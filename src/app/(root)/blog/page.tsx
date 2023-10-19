import PageTitle from "@/components/elements/PageTitle";
import { BLOG_API_ENDPOINT } from "@/constants";
import { BlogItem } from "@/types";
import type { Metadata } from "next";
import BlogSection from "./[slug]/BlogSection";

export const metadata: Metadata = {
  title: "Blog | Andre Avindra",
  description:
    "Reflections, cognitive models, and instructional content related to the realm of front-end development. Adapt your mental framework to bring more predictability to front-end development.",
  alternates: {
    canonical: "https://andreavindra.vercel.app/blog",
  },
};

async function getBlogs() {
  const blogApiEndpoint =
    process.env.NODE_ENV === "production"
      ? BLOG_API_ENDPOINT
      : "http://localhost:3000/api/blog";

  const res = await fetch(`${blogApiEndpoint}`, {
    next: { revalidate: 3600 },
  });

  const data = await res.json();
  return data;
}

export default async function Blog() {
  const blogs = (await getBlogs()) as BlogItem[];

  return (
    <div className="p-8">
      <PageTitle
        title="Blog"
        description="Share thoughts and tutorials on web development."
      />
      <BlogSection blogs={blogs} />
    </div>
  );
}
