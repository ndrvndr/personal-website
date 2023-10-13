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
  title,
  description,
  techStack,
  image,
  imageAlt,
}: ProjectCardProps) {
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
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit live production demo"
        className={clsx(
          "group cursor-pointer",
          "flex flex-col justify-between",
          "h-full",
        )}
      >
        <div className="px-4 pt-4">
          <div className="flex items-center gap-2">
            <Ping />

            <h3 className="flex items-center gap-1 font-bold md:text-lg">
              {title}
              <span
                className={clsx(
                  "transition-all duration-200",
                  "lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1",
                )}
              >
                <TbArrowUpRight />
              </span>
            </h3>
          </div>

          <p className="secondary my-4 text-sm leading-relaxed md:text-base">
            {description}
          </p>
        </div>

        <div>
          <ul className="mb-4 flex flex-wrap gap-4 px-4">
            {techStack.map((tech, index) => (
              <li className="text-2xl" key={index}>
                <Tooltip placement="top" label={tech.label}>
                  {tech.icon}
                </Tooltip>
              </li>
            ))}
          </ul>

          <Image
            className="h-auto w-auto rounded-b-md"
            width={1920}
            height={1080}
            src={image}
            alt={imageAlt}
            loading="lazy"
            aria-label="Live Production Screenshot"
          />
        </div>
      </Link>
    </li>
  );
}

interface TechStackItem {
  label: string;
  icon: React.ReactElement;
}

interface ProjectCardProps {
  url: string;
  title: string;
  description: string;
  techStack: Array<TechStackItem>;
  image: string | StaticImageData;
  imageAlt: string;
}
