import { SpotifyData } from "@/types";
import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const token = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    cache: "no-store",
    method: "POST",
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (
    response.status === 204 ||
    response.status > 400 ||
    response.statusText !== "OK"
  ) {
    return { isPlaying: false };
  }

  const data = (await response.json()) as SpotifyData;

  if (data.item === null || undefined) {
    return { isPlaying: false };
  } else {
    return {
      isPlaying: data.is_playing,
      title: data.item.name,
      album: data.item.album.name,
      artist: data.item.album.artists.map((artist) => artist.name).join(", "),
      albumImageUrl: data.item.album.images[0]?.url,
      songUrl: data.item.external_urls.spotify,
    };
  }
};
