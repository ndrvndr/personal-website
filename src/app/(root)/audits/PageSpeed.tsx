"use client";
import CircularProgress from "@/components/elements/CircularProgress";
import CircularProgressLoading from "@/components/elements/CircularProgressLoading";
import { PAGESPEED_CATEGORIES } from "@/constants";
import { TAGS } from "@/constants/audits";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import useSWR from "swr";

export default function PageSpeed() {
  const [selectedTag, setSelectedTag] = useState<string>("Home");
  const [path, setPath] = useState<string>("/");

  const ENDPOINT = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://andreavindra.vercel.app${path}&key=${process.env.NEXT_PUBLIC_PAGESPEED_API_KEY}${PAGESPEED_CATEGORIES}`;

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, isLoading, mutate } = useSWR(ENDPOINT, fetcher);
  const categories = data?.lighthouseResult?.categories || {};
  const categoriesInArray = Object.keys(categories).map((key) => ({
    ...categories[key],
  }));

  const handleClickTag = (tag: string) => {
    setSelectedTag(tag);
    tag === "Home" ? setPath("/") : setPath(`/${tag.toLowerCase()}`);
    mutate();
  };

  return (
    <section className="m-auto w-fit">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 flex flex-wrap justify-center gap-2 text-sm"
      >
        {TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => handleClickTag(tag)}
            className={clsx(
              "primary",
              "px-1.5 py-0.5",
              "rounded-md font-medium",
              "bg-neutral-200 dark:bg-neutral-800",
            )}
          >
            <span
              className={clsx(
                selectedTag === tag ? "gradient__text" : "primary",
              )}
            >
              {tag}
            </span>
          </button>
        ))}
      </motion.div>

      {isLoading ? (
        <CircularProgressLoading />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col justify-between gap-8 md:flex-row"
        >
          {categoriesInArray.map((category) => (
            <div key={category.id} className="flex flex-col items-center">
              <CircularProgress value={Number(category.score || 0) * 100} />
              <h2 className="primary mt-2 text-center text-sm">
                {category.title}
              </h2>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
