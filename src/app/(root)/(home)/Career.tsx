import clsx from "clsx";
import Link from "next/link";
import { BiSolidDownvote } from "react-icons/bi";
import { MdOutlineWorkHistory } from "react-icons/md";

export default function Career() {
  return (
    <section>
      <div className="mb-2 flex items-center gap-2">
        <MdOutlineWorkHistory size={20} />
        <h2 className="text-xl font-medium">Career</h2>
      </div>

      <Link
        href="/"
        target="_blank"
        className="mb-6 flex items-center gap-3 pl-0.5 text-neutral-600 transition-all duration-300"
      >
        <div className="overflow-hidden border-b-2 border-solid border-black">
          <BiSolidDownvote className="animate-rain-arrow" />
        </div>
        <span>Download Resume</span>
      </Link>

      <div className="space-y-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              "w-full px-6 py-4",
              "flex items-center justify-around",
              "border border-solid border-gray-200",
              "animate-pulse rounded-md shadow-md",
            )}
          >
            <div className="h-14 w-14 rounded-full bg-gray-300" />
            <div className="flex flex-col gap-2">
              <div className="h-4 w-32 rounded-xl bg-gray-300" />
              <div className="h-4 w-36 rounded-xl bg-gray-300" />
              <div className="h-4 w-24 rounded-xl bg-gray-300" />
              <div className="h-4 w-20 rounded-xl bg-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
