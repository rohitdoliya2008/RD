export type Song = {
  /** Stable id, also used to derive the vinyl label colour */
  id: string;
  title: string;
  /** Tradition / lineage the piece comes from — most Rajasthani folk has no single named performer */
  artist: string;
  slug: string;
  /** Expected at public/audio/{slug}.mp3 — drop your own recordings in using this naming */
  src: string;
  /** Optional real cover art at public/covers/{slug}.jpg — falls back to a generated label */
  cover?: string;
};
