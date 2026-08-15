import type { Song } from "@/data/types";
import { labelColorFor } from "./utils";

type VinylProps = {
  song: Song;
  playing: boolean;
  size?: number;
};

/**
 * The cover art here is a generated paper label (no per-song image assets
 * exist for 50 traditional folk tracks). If you have real artwork, add
 * `cover` to the Song entry in data/songs.ts and swap the label div below
 * for an <img>.
 */
export function Vinyl({ song, playing, size = 80 }: VinylProps) {
  const label = labelColorFor(song.id);
  const spindle = Math.max(10, Math.round(size * 0.15));

  return (
    <div
      className="relative shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        animation: "vinyl-spin 8s linear infinite",
        animationPlayState: playing ? "running" : "paused",
        background: "#0c0a08",
        boxShadow:
          "0 6px 16px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.08)",
      }}
      aria-hidden
    >
      {/* groove rings */}
      <div
        className="absolute inset-[8%] rounded-full"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.05), 0 0 0 5px rgba(255,255,255,0.035), 0 0 0 9px rgba(255,255,255,0.045), 0 0 0 13px rgba(255,255,255,0.03)",
        }}
      />
      {/* paper label */}
      <div
        className="absolute inset-[30%] rounded-full"
        style={{
          background: `radial-gradient(circle at 35% 30%, ${label}, #0c0a08 130%)`,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.15)",
        }}
      />
      {/* spindle hole */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 ring-2 ring-white/48"
        style={{ width: spindle, height: spindle }}
      />
    </div>
  );
}
