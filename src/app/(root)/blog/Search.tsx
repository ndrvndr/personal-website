"use client";
import Tag from "@/components/elements/Tag";
import { TAGS } from "@/constants/blog";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Search() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor="search" className="primary text-sm md:text-base">
          Search
        </label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          value={selectedTags}
          className={clsx(
            "border__color",
            "secondary text-sm",
            "mt-2 w-full px-2 py-3",
            "rounded-md bg-transparent",
            "placeholder:text-sm placeholder:text-neutral-500",
            "focus:outline-double focus:outline-neutral-500",
            "md:text-base md:placeholder:text-base",
          )}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8 mt-2 flex flex-wrap justify-start gap-2 text-sm"
      >
        <span className="primary text-sm md:text-base">Choose topic:</span>
        {TAGS.map((tag) => (
          <Tag key={tag} tag={tag} onTagClick={handleTagClick} />
        ))}
      </motion.div>
    </>
  );
}
