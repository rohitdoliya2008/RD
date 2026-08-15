"use client";

import { useEffect, useState } from "react";

const BASE_LISTENERS = 30500;

function formatCount(n: number) {
  return `${(n / 1000).toFixed(1)}K`;
}

export function ListenerCount() {
  const [count, setCount] = useState(BASE_LISTENERS);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        const drift = Math.round((Math.random() - 0.5) * 240);
        const next = c + drift;
        // Keep it plausibly close to baseline rather than wandering off.
        return Math.min(Math.max(next, BASE_LISTENERS - 1500), BASE_LISTENERS + 1500);
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 backdrop-blur-md"
      role="status"
      aria-label={`${count.toLocaleString()} people listening now`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="text-[13px] font-medium tabular-nums text-white/90">
        {formatCount(count)}
      </span>
      <span className="hidden text-[11px] text-white/50 sm:inline">listening</span>
    </div>
  );
}
