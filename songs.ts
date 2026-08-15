import type { Song } from "./types";

/**
 * No audio files ship with this repo. Drop mp3s into public/audio using the
 * slug-based filenames below (e.g. public/audio/kesariya-balam-aavo-ni.mp3)
 * and the player will pick them up automatically. Until then the transport
 * controls work, but playback will silently fail to start — that's expected.
 */

type RawTrack = { title: string; artist: string };

const RAW_TRACKS: RawTrack[] = [
  { title: "Kesariya Balam Aavo Ni, Padharo Mhare Des", artist: "Traditional Rajasthani Folk" },
  { title: "Mharo Gorband Nakhralo", artist: "Traditional Rajasthani Folk" },
  { title: "Mor Bole Re", artist: "Traditional Rajasthani Folk" },
  { title: "Moriyo Aacho Bolyo Re", artist: "Traditional Rajasthani Folk" },
  { title: "Kurjan", artist: "Traditional Rajasthani Folk" },
  { title: "Moomal", artist: "Moomal–Mahendra Legend" },
  { title: "Dhola Maru", artist: "Dhola–Maru Legend" },
  { title: "Panihari", artist: "Traditional Rajasthani Folk" },
  { title: "Peepali", artist: "Traditional Rajasthani Folk" },
  { title: "Hichki", artist: "Traditional Rajasthani Folk" },
  { title: "Olyun", artist: "Traditional Rajasthani Folk" },
  { title: "Supna", artist: "Traditional Rajasthani Folk" },
  { title: "Kangasiyo", artist: "Traditional Rajasthani Folk" },
  { title: "Eendoni", artist: "Traditional Rajasthani Folk" },
  { title: "Languriya", artist: "Kaila Devi Devotional" },
  { title: "Ghoomra Ghumela Ji", artist: "Ghoomar Tradition" },
  { title: "Gangaur Geet – Khelan Do Gangaur", artist: "Gangaur Folk Tradition" },
  { title: "Banna Re Bagan Mein Jhula", artist: "Banna–Banni Wedding Folk" },
  { title: "Banni / Bani Geet", artist: "Banna–Banni Wedding Folk" },
  { title: "Badhawa", artist: "Wedding Folk" },
  { title: "Saaton Re Bhaiyan Ri Ek Bahanladi", artist: "Wedding Folk" },
  { title: "Pallo Latke", artist: "Traditional Rajasthani Folk" },
  { title: "Hariyo Podina", artist: "Traditional Rajasthani Folk" },
  { title: "Udiyo Re Udiyo Mharo Suvtiyo", artist: "Traditional Rajasthani Folk" },
  { title: "Utra Balam Bichhudo Mein", artist: "Traditional Rajasthani Folk" },
  { title: "Oji Mhara Ran Banka Sirdar", artist: "Traditional Rajasthani Folk" },
  { title: "Satrangi Tharo Lehriyo", artist: "Traditional Rajasthani Folk" },
  { title: "Baras Baras Mera Inder Raja", artist: "Traditional Rajasthani Folk" },
  { title: "Sasuji Bulave Thane Hans Hans Ke", artist: "Wedding Folk" },
  { title: "Kangasiyo Panihara Le Gayi Re", artist: "Traditional Rajasthani Folk" },
  { title: "Bole To Meetho Lage", artist: "Traditional Rajasthani Folk" },
  { title: "Aage Aage Kothali, Ghodla Laare", artist: "Wedding Folk" },
  { title: "Jeera", artist: "Traditional Rajasthani Folk" },
  { title: "Chirmi", artist: "Traditional Rajasthani Folk" },
  { title: "Padmavati Lokgeet", artist: "Traditional Rajasthani Folk" },
  { title: "Ratan Rano", artist: "Traditional Rajasthani Folk" },
  { title: "Kevda Ghughri", artist: "Traditional Rajasthani Folk" },
  { title: "Beechhudo", artist: "Traditional Rajasthani Folk" },
  { title: "Pavna", artist: "Traditional Rajasthani Folk" },
  { title: "Seethane", artist: "Traditional Rajasthani Folk" },
  { title: "Jhorawa", artist: "Traditional Rajasthani Folk" },
  { title: "Pabuji Ki Phad", artist: "Bhopa Folk Epic" },
  { title: "Tejaji Ke Lokgeet", artist: "Tejaji Folk Tradition" },
  { title: "Gogaji Ke Lokgeet", artist: "Gogaji Folk Tradition" },
  { title: "Ramdevji Ke Bhajan", artist: "Ramdevji Devotional" },
  { title: "Meera Ke Pad", artist: "Meera Bai" },
  { title: "Kabir Ke Nirgun Bhajan", artist: "Kabir" },
  { title: "Dadu Dayal Ke Pad", artist: "Dadu Dayal" },
  { title: "Bhairavji Ke Jagran Geet", artist: "Bhairavji Jagran Tradition" },
  { title: "Mahadev Ke Jagran Geet", artist: "Mahadev Jagran Tradition" },
];

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const songs: Song[] = RAW_TRACKS.map((track, i) => {
  const slug = slugify(track.title);
  const id = String(i + 1).padStart(2, "0");
  return {
    id,
    title: track.title,
    artist: track.artist,
    slug,
    src: `/audio/${slug}.mp3`,
  };
});
