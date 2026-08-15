"use client";

import { useEffect, useState } from "react";

function formatParts(date: Date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const weekday = date.toLocaleDateString(undefined, { weekday: "short" });
  return { hours, minutes, weekday };
}

export function Clock() {
  // Start null so server and first client render match; fill in after mount.
  const [now, setNow] = useState<Date | null>(null);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => {
      setNow(new Date());
      setBlink((b) => !b);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return <div className="h-[34px] w-[92px]" aria-hidden />;
  }

  const { hours, minutes, weekday } = formatParts(now);

  return (
    <div
      className="flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 backdrop-blur-md"
      role="status"
      aria-label={`${weekday}, ${hours}:${minutes}`}
    >
      <span className="text-[11px] uppercase tracking-wide text-white/50">{weekday}</span>
      <span className="text-[15px] font-semibold tabular-nums text-white/90">
        {hours}
        <span className={blink ? "opacity-100" : "opacity-30"}>:</span>
        {minutes}
      </span>
    </div>
  );
}
