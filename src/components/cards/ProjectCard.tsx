"use client";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import Ping from "../elements/Ping";
import Tooltip from "../elements/Tooltip";

export default function ProjectCard({
  url,
  name,
  description,
  techStack,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <li
      className={clsx(
        "mb-10 rounded-md",
        "bg-transparent shadow-lg",
        "border border-solid border-gray-200",
        "dark:border-[#262626] dark:bg-[#262626] dark:shadow-none",
      )}
    >
      <Link
        href={url}
        aria-label="Visit live production demo"
        className={clsx("group cursor-pointer")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mb-4 px-4 pt-4">
          <div className="flex items-center gap-2">
            <Ping />

            <h3 className="flex items-center gap-1 font-bold">
              {name}
              <span
                className={clsx(
                  "transition-all duration-300",
                  "group-hover:-translate-y-1 group-hover:translate-x-1",
                )}
              >
                <TbArrowUpRight />
              </span>
            </h3>
          </div>

          <p className="secondary my-3 text-sm leading-relaxed">
            {description}
          </p>

          <ul className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <li className="text-2xl" key={index}>
                <Tooltip placement="top" label={tech.label}>
                  {tech.icon}
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>

        <Image
          className="h-auto w-auto rounded-b-md"
          width={1920}
          height={1080}
          src={image}
          alt={imageAlt}
          loading="lazy"
          aria-label="Live Production Screenshot"
        />
      </Link>
    </li>
  );
}

interface TechStackItem {
  label: string;
  icon: React.ReactElement;
}

interface ProjectCardProps {
  key: number;
  url: string;
  name: string;
  description: string;
  techStack: Array<TechStackItem>;
  image: string | StaticImageData;
  imageAlt: string;
}
