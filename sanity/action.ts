import { groq } from "next-sanity";
import { readClient, writeClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetBlogsParams {
  query: string;
  tags: string;
  page: string;
}

export const getBlog = async (params: GetBlogsParams) => {
  const { query, tags, page } = params;

  try {
    const blogs = await readClient.fetch(
      groq`${buildQuery({
        type: "blog",
        query,
        tags,
        page: parseInt(page),
      })}{
        _id,
        title,
        slug,
        readingTime,
        views,
        releaseDate,
        description,
        "image": poster.asset->url,
        tags,
        content,
      }`,
    );

    return blogs;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export async function incrementViews(blogId: string): Promise<void> {
  try {
    await writeClient.patch(blogId).inc({ views: 1 }).commit();
  } catch (error) {
    console.error("Failed to increment views:", error);
    throw error;
  }
}
