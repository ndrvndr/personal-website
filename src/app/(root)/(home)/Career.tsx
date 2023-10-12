import clsx from "clsx";
import Link from "next/link";
import { BiSolidDownvote } from "react-icons/bi";
import { MdOutlineWorkHistory } from "react-icons/md";

export default function Career() {
  return (
    <section className="mb-8">
      <div className="mb-2 flex items-center gap-2">
        <MdOutlineWorkHistory size={20} />
        <h2 className="primary text-xl font-bold">Career</h2>
      </div>

      <Link
        href="https://res.cloudinary.com/dqqmzgesp/image/upload/v1697030578/personal-website/cv.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "secondary cursor-pointer",
          "flex items-center gap-3",
          "mb-4 pl-0.5",
          "transition-all duration-300",
        )}
      >
        <div
          className={clsx(
            "overflow-hidden",
            "border-b-2 border-solid",
            "border-secondary-light dark:border-secondary-dark",
          )}
        >
          <BiSolidDownvote className="animate-rain-arrow" />
        </div>
        <span>Download CV</span>
      </Link>

      <div className="space-y-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              "w-full px-6 py-4",
              "flex items-center justify-around",
              "border border-solid border-gray-500",
              "animate-pulse rounded-md shadow-md",
            )}
          >
            <div className="h-14 w-14 rounded-full bg-gray-500" />
            <div className="flex flex-col gap-2">
              <div className="h-4 w-32 rounded-xl bg-gray-500" />
              <div className="h-4 w-36 rounded-xl bg-gray-500" />
              <div className="h-4 w-24 rounded-xl bg-gray-500" />
              <div className="h-4 w-20 rounded-xl bg-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
