import { useRef } from "react";

type SeekBarProps = {
  /** 0–1 */
  progress: number;
  onSeek: (fraction: number) => void;
  onNudge?: (deltaSeconds: number) => void;
  disabled?: boolean;
};

export function SeekBar({ progress, onSeek, onNudge, disabled }: SeekBarProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const clamped = Math.min(1, Math.max(0, progress || 0));

  function fractionFromEvent(e: { clientX: number }) {
    const el = trackRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    return Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (disabled) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    onSeek(fractionFromEvent(e));
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (disabled || e.buttons !== 1) return;
    onSeek(fractionFromEvent(e));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (disabled || !onNudge) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      onNudge(5);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      onNudge(-5);
    }
  }

  return (
    <div
      ref={trackRef}
      role="slider"
      aria-label="Seek"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped * 100)}
      tabIndex={disabled ? -1 : 0}
      className="group/seek relative flex h-6 w-full touch-none items-center focus:outline-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onKeyDown={handleKeyDown}
    >
      <div className="relative h-[3px] w-full rounded-full bg-white/15">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(232,163,61,0.55)]"
          style={{ width: `${clamped * 100}%` }}
        />
        <div
          className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full
                     bg-accent opacity-0 shadow-[0_0_6px_rgba(0,0,0,0.5)] transition-opacity
                     duration-150 group-hover/seek:opacity-100 group-focus-visible/seek:opacity-100"
          style={{ left: `${clamped * 100}%` }}
        />
      </div>
    </div>
  );
}
