import { getNowPlaying } from "@/lib/songPlayingNow";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { SiSpotify } from "react-icons/si";

export default async function SpotifyCard({ display }: { display: string }) {
  const songPlayingNow = await getNowPlaying();

  const { isPlaying, songUrl, album, albumImageUrl, artist, title } =
    songPlayingNow;

  return (
    <Link
      target="_blank"
      rel="noopener noreferer"
      href={
        isPlaying && songUrl
          ? songUrl
          : "https://open.spotify.com/user/vwg28n9kqnigrvv34x96si8a6"
      }
      className={clsx(
        display,
        "cursor-pointer",
        "relative w-fit max-w-xs",
        "m-auto p-4",
        "items-center gap-4",
        "border__color rounded-md",
        "lg:w-52",
      )}
    >
      <div className="w-16">
        {isPlaying ? (
          <Image
            className="h-auto w-auto"
            src={albumImageUrl || ""}
            alt={album || ""}
            width={64}
            height={64}
          />
        ) : (
          <SiSpotify size={64} color={"#1ED760"} />
        )}
      </div>

      <div className="flex-1">
        <p className="font-medium leading-tight">
          {isPlaying ? title : "Not Listening"}
        </p>
        <p className="mt-1 text-xs">{isPlaying ? artist : "Spotify"}</p>
      </div>
      <div className="absolute bottom-2 right-2">
        <SiSpotify size={20} color={"#1ED760"} />
      </div>
    </Link>
  );
}
