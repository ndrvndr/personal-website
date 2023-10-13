import { BlogItem } from "@/types";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { BiCollapse } from "react-icons/bi";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import { getBlogBySlug } from "../../../../../sanity/action";
import BreakLine from "@/components/elements/BreakLine";
import Article from "./Article";
import Aside from "./Aside";
import DonateBox from "@/components/elements/DonateBox";

export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blog = (await getBlogBySlug(params.slug)) as BlogItem;

  return (
    <div className="p-8">
      <section>
        <div className="mb-8 hidden lg:block">
          <Link
            href="/blog"
            className="primary flex items-center gap-2 text-lg font-medium"
          >
            <BiCollapse className="text-2xl" />
            Back
          </Link>
        </div>

        <Image
          src={blog.image}
          alt="Photo taken from Unsplash"
          width={1200}
          height={480}
          placeholder="blur"
          blurDataURL={blog.image}
          className="rounded-md"
        />

        <h1 className="primary mt-4 text-2xl font-bold md:text-3xl">
          {blog.title}
        </h1>

        <p className="secondary mb-4 mt-1 text-sm font-medium leading-relaxed">
          Written on {format(new Date(blog.releaseDate), "MMMM dd, yyyy")} by
          Andre Avindra
        </p>

        <div className="flex gap-2 text-sm font-medium">
          <div className="flex items-center gap-1">
            <HiOutlineClock className="text-base" />
            <span className="gradient__text">{blog.readingTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <HiOutlineEye className="text-base" />
            <span className="gradient__text">
              {blog.views?.toLocaleString() ?? "0"} views
            </span>
          </div>
        </div>

        <BreakLine decoration="border-dashed" />

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-8">
          <Article content={blog.content} />
          <Aside content={blog.content} />
        </div>

        <DonateBox classname="w-64 lg:hidden" />

        {/* <div className="mt-20 h-fit w-full md:mt-32">
              <Comment />
            </div> */}
      </section>
    </div>
  );
}
