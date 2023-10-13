import clsx from "clsx";
import { useState } from "react";

export default function Tag({ tag, onTagClick }: TagProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onTagClick(tag);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "rounded-md px-1.5 py-0.5 font-medium",
        "primary",
        "bg-neutral-200 dark:bg-neutral-800",
        "disabled:cursor-not-allowed disabled:bg-opacity-20 disabled:text-opacity-20",
      )}
    >
      <span className={clsx(isClicked ? "gradient__text" : "primary")}>
        {tag}
      </span>
    </button>
  );
}

interface TagProps {
  tag: string;
  onTagClick: (tag: string) => void;
}
