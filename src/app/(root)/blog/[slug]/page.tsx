import BreakLine from "@/components/elements/BreakLine";
import DonateBox from "@/components/elements/DonateBox";
import { DEFAULT_METADATA } from "@/constants/metadata";
import { BlogItem } from "@/types";
import { format } from "date-fns";
import type { Metadata } from "next";
import Image from "next/image";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import { getBlog } from "../../../../../sanity/action";
import Article from "./Article";
import Aside from "./Aside";
import Comment from "@/components/elements/Comment";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = (await getBlog({
    query: params.slug,
    tags: "",
    page: "1",
  })) as BlogItem[];

  const { title, description, slug } = blog[0];

  return {
    title: `${title} | Andre Avindra`,
    description: description,
    openGraph: {
      images: DEFAULT_METADATA.image,
      url: `https://andreavindra.vercel.app/blog/${slug}`,
      siteName: DEFAULT_METADATA.siteName,
      locale: DEFAULT_METADATA.locale,
      type: "article",
      authors: "Andre Avindra",
    },
    keywords: title,
    alternates: {
      canonical: `${process.env.DOMAIN}/${slug}`,
    },
  };
}

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blog = (await getBlog({
    query: params.slug,
    tags: "",
    page: "1",
  })) as BlogItem[];

  const { image, title, releaseDate, readingTime, views, content } = blog[0];

  return (
    <div className="p-8">
      <section>
        <Image
          src={image}
          alt="Photo taken from Unsplash"
          width={1200}
          height={480}
          placeholder="blur"
          blurDataURL={image}
          className="rounded-md"
        />

        <h1 className="primary mt-4 text-2xl font-bold md:text-3xl">{title}</h1>

        <p className="secondary mb-4 mt-1 text-sm font-medium leading-relaxed">
          Written on {format(new Date(releaseDate), "MMMM dd, yyyy")} by Andre
          Avindra
        </p>

        <div className="flex gap-2 text-sm font-medium">
          <div className="flex items-center gap-1">
            <HiOutlineClock className="text-base" />
            <span className="gradient__text">{readingTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <HiOutlineEye className="text-base" />
            <span className="gradient__text">
              {views?.toLocaleString() ?? "0"} views
            </span>
          </div>
        </div>

        <BreakLine decoration="border-dashed" />

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-8">
          <Article content={content} />
          <Aside content={content} />
        </div>

        <DonateBox classname="w-64 lg:hidden" />

        <Comment />
      </section>
    </div>
  );
}
