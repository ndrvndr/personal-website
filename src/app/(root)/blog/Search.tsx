"use client";
import InputForm from "@/components/elements/Input";
import Tag from "@/components/elements/Tag";
import { TAGS } from "@/constants/blog";
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
      <InputForm
        id="search"
        label="Search"
        placeholder="Search..."
        type="search"
        value={selectedTags}
      />

      <div className="mb-8 flex flex-wrap justify-start gap-2 text-sm">
        <span className="primary text-sm md:text-base">Choose topic:</span>
        {TAGS.map((tag) => (
          <Tag key={tag} tag={tag} onTagClick={handleTagClick} />
        ))}
      </div>
    </>
  );
}
