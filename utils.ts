// The exact glass recipe from the brief: a flat white/10 fill reads as a grey
// slab, not glass, so it's a gradient fill + heavy blur/saturate + a two-part
// shadow (outer drop shadow, inset top highlight).
export const GLASS =
  "border border-white/10 bg-gradient-to-b from-white/[0.15] to-white/[0.055] " +
  "backdrop-blur-3xl backdrop-saturate-[1.7] " +
  "shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]";

export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

// Rotates label colour through the theme palette rather than a random hue,
// so every record still reads as part of the same set.
const LABEL_COLORS = ["#e8a33d", "#6d1f2b", "#22406b", "#c98a4b"];

export function labelColorFor(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  return LABEL_COLORS[hash % LABEL_COLORS.length];
}
