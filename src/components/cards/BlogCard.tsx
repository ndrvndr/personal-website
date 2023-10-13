"use client";
import clsx from "clsx";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import { incrementViews } from "../../../sanity/action";

interface Props {
  id: string;
  image: string;
  tags: Array<string>;
  title: String;
  readingTime: string;
  views: number;
  releaseDate: string;
  description: string;
  slug: string;
  checkTagged?: (tag: string) => boolean;
}

export default function BlogCard({
  id,
  image,
  tags,
  title,
  readingTime,
  views,
  releaseDate,
  description,
  slug,
  checkTagged,
}: Props) {
  const [localViews, setLocalViews] = React.useState(views);

  const handleCardClick = async () => {
    try {
      const updatedViews = await incrementViews(id);
      setLocalViews(updatedViews);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li
      className={clsx(
        "rounded-md",
        "bg-transparent shadow-lg",
        "border__color",
        "dark:bg-neutral-800 dark:shadow-none",
        "transition-transform duration-200",
        "lg:hover:scale-[1.03]",
      )}
      onClick={handleCardClick}
    >
      <Link
        href={`/blog/${slug}`}
        aria-label="Read more"
        className={clsx("group", "flex flex-col", "h-full")}
      >
        <div className="relative">
          <Image
            src={image}
            alt="Photo taken from Unsplash"
            width={1200}
            height={480}
            className="h-auto w-auto rounded-t-md"
            priority={true}
          />

          <div className="absolute bottom-2 right-2 flex gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className={clsx(
                  "rounded-md px-2 py-1 text-xs",
                  checkTagged?.(tag)
                    ? "bg-gradient-linear text-primary-light"
                    : "bg-neutral-200 dark:bg-neutral-800",
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4">
          <h2 className="primary font-bold leading-relaxed md:text-lg lg:h-14">
            {title}
          </h2>

          <div className="mt-2 flex gap-2 text-sm font-medium">
            <div className="flex items-center gap-1">
              <HiOutlineClock className="text-base" />
              <span className="gradient__text">{readingTime}</span>
            </div>

            <div className="flex items-center gap-1">
              <HiOutlineEye className="text-base" />
              <span className="gradient__text">
                {localViews?.toLocaleString() ?? "0"} views
              </span>
            </div>
          </div>

          <p className="primary mb-2 mt-4 text-sm font-semibold">
            {format(new Date(releaseDate), "MMMM dd, yyyy")}
          </p>

          <p className="secondary text-sm leading-relaxed">{description}</p>
        </div>
      </Link>
    </li>
  );
}
