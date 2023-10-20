import PageTitle from "@/components/elements/PageTitle";
import { getBlog } from "@/services/blog";
import { BlogItem } from "@/types";
import type { Metadata } from "next";
import BlogSection from "./[slug]/BlogSection";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | Andre Avindra",
  description:
    "Reflections, cognitive models, and instructional content related to the realm of front-end development. Adapt your mental framework to bring more predictability to front-end development.",
  alternates: {
    canonical: "https://andreavindra.vercel.app/blog",
  },
};

export default async function Blog() {
  const blogs = (await getBlog()) as BlogItem[];

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
