import { HeroBackground } from "@/components/HeroBackground";
import { GrainOverlay } from "@/components/GrainOverlay";
import { TopRow } from "@/components/TopRow";
import { Player } from "@/components/player/Player";
import { songs } from "@/data/songs";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      <HeroBackground />
      <GrainOverlay />
      <TopRow />
      <Player songs={songs} />
    </main>
  );
}
