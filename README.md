Optional. The vinyl label art is generated in CSS (components/player/Vinyl.tsx)
so no cover images are required. If you'd rather show real artwork:

1. Add an image here, e.g. public/covers/kesariya-balam-aavo-ni-padharo-mhare-des.jpg
2. Set `cover: "/covers/…"` on the matching entry in data/songs.ts
3. Swap the generated label div in Vinyl.tsx for an <img src={song.cover}> when `song.cover` is set
