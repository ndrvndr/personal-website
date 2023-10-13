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
  }
};

export async function getBlogBySlug(slug: string) {
  try {
    const query = `*[_type == "blog" && slug.current == "${slug}"][0] {
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
    }`;
    const data = await readClient.fetch(query);

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSlugs() {
  try {
    const query = groq`*[_type == "blog" && defined(slug.current)][].slug.current`;
    const slugs = await readClient.fetch(query);

    return slugs;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function incrementViews(blogId: string): Promise<number> {
  try {
    const currentViewsQuery = groq`*[_type == "blog" && _id == $blogId][0].views`;
    const currentViews = await writeClient.fetch<number>(currentViewsQuery, {
      blogId,
    });

    const updatedViews = currentViews + 1;

    const patchOperation = {
      set: {
        views: updatedViews,
      },
    };

    await writeClient.transaction().patch(blogId, patchOperation).commit();

    return updatedViews;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
