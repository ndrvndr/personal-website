"use client";
import { FOOTER_ITEMS } from "@/contants/footer";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { SiSpotify } from "react-icons/si";
import useSWR from "swr";

export default function Footer() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <footer className="mb-24 mt-8 px-8">
      <Link
        target="_blank"
        rel="noopener noreferer"
        href={
          data?.isPlaying
            ? data.songUrl
            : "https://open.spotify.com/user/vwg28n9kqnigrvv34x96si8a6"
        }
        className={clsx(
          "cursor-pointer",
          "relative w-fit max-w-xs",
          "m-auto p-5",
          "flex items-center gap-4",
          "border__color rounded-md",
        )}
      >
        <div className="w-16">
          {data?.isPlaying ? (
            <Image
              className="w-16"
              src={data?.albumImageUrl}
              alt={data?.album}
              width={64}
              height={64}
            />
          ) : (
            <SiSpotify size={64} color={"#1ED760"} />
          )}
        </div>

        <div className="flex-1">
          <p className="font-medium">
            {data?.isPlaying ? data.title : "Not Listening"}
          </p>
          <p className="text-xs">{data?.isPlaying ? data.artist : "Spotify"}</p>
        </div>
        <div className="absolute bottom-1.5 right-1.5">
          <SiSpotify size={20} color={"#1ED760"} />
        </div>
      </Link>

      <p className="mb-2 mt-4 text-center text-sm font-medium">Reach me out</p>
      <ul className="flex justify-center gap-4">
        {FOOTER_ITEMS.map(({ icon, href, ariaLabel }, index) => (
          <li key={index}>
            <Link
              href={href}
              aria-label={ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center text-sm">
        copyright &copy; Andre Avindra 2023
      </p>
    </footer>
  );
}
