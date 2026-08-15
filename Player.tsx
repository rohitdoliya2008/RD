"use client";

import { useEffect, useRef, useState } from "react";
import type { Song } from "@/data/types";
import { Vinyl } from "./Vinyl";
import { SeekBar } from "./SeekBar";
import { Transport } from "./Transport";
import { GLASS, formatTime } from "./utils";

type PlayerProps = {
  songs: Song[];
};

export function Player({ songs }: PlayerProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const wantsPlayRef = useRef(false); // survives across the track-change effect

  const song = songs[index];
  const progress = duration > 0 ? currentTime / duration : 0;

  // Load the new track whenever the index changes; resume playback if we were mid-play.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(0);
    setDuration(0);
    audio.load();
    if (wantsPlayRef.current) {
      audio.play().catch(() => setPlaying(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      wantsPlayRef.current = false;
      setPlaying(false);
    } else {
      wantsPlayRef.current = true;
      audio.play().then(
        () => setPlaying(true),
        () => setPlaying(false)
      );
    }
  }

  function next() {
    wantsPlayRef.current = playing;
    setIndex((i) => (i + 1) % songs.length);
  }

  function prev() {
    const audio = audioRef.current;
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      setCurrentTime(0);
      return;
    }
    wantsPlayRef.current = playing;
    setIndex((i) => (i - 1 + songs.length) % songs.length);
  }

  function seekTo(fraction: number) {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(duration) || duration <= 0) return;
    const target = fraction * duration;
    audio.currentTime = target;
    setCurrentTime(target);
  }

  function nudge(deltaSeconds: number) {
    const audio = audioRef.current;
    if (!audio) return;
    const target = Math.min(duration, Math.max(0, audio.currentTime + deltaSeconds));
    audio.currentTime = target;
    setCurrentTime(target);
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-10 flex justify-center px-4
                 pb-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <div className="w-full max-w-xl">
        <audio
          ref={audioRef}
          src={song.src}
          preload="metadata"
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onEnded={next}
        />

        {/* ---------- Desktop: one horizontal glass pill ---------- */}
        <div className={`hidden sm:flex items-center gap-4 rounded-full p-3 pr-5 ${GLASS}`}>
          <Vinyl song={song} playing={playing} size={80} />

          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <div className="min-w-0">
              <p className="truncate font-display text-[16px] font-normal leading-tight tracking-wide">{song.title}</p>
              <p className="truncate text-[12.5px] text-white/70">{song.artist}</p>
            </div>
            <SeekBar progress={progress} onSeek={seekTo} onNudge={nudge} />
            <div className="flex items-center justify-between text-[10.5px] tabular-nums text-white/60">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <Transport playing={playing} onPrev={prev} onToggle={togglePlay} onNext={next} />
        </div>

        {/* ---------- Mobile: stacked card ---------- */}
        <div className={`flex sm:hidden flex-col gap-3 rounded-3xl p-4 ${GLASS}`}>
          <div className="flex items-center gap-3">
            <Vinyl song={song} playing={playing} size={56} />
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-[16px] font-normal leading-tight tracking-wide">{song.title}</p>
              <p className="truncate text-[12.5px] text-white/70">{song.artist}</p>
            </div>
          </div>

          <SeekBar progress={progress} onSeek={seekTo} onNudge={nudge} />
          <div className="flex items-center justify-between text-[10.5px] tabular-nums text-white/60">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          <Transport
            playing={playing}
            onPrev={prev}
            onToggle={togglePlay}
            onNext={next}
            className="justify-center gap-8"
          />
        </div>
      </div>
    </div>
  );
}
