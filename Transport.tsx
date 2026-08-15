type TransportProps = {
  playing: boolean;
  onPrev: () => void;
  onToggle: () => void;
  onNext: () => void;
  className?: string;
};

function PrevIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zm3.34 7 9.4-6.53a1 1 0 0 1 1.57.82v11.42a1 1 0 0 1-1.57.82L9.34 12.82a1 1 0 0 1 0-1.64z" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM14.66 12l-9.4 6.53A1 1 0 0 1 3.7 17.7V6.3a1 1 0 0 1 1.57-.82l9.4 6.53a1 1 0 0 1 0 1.64z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5.5a1 1 0 0 1 1.5-.87l10 6.5a1 1 0 0 1 0 1.74l-10 6.5A1 1 0 0 1 8 18.5z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="5" width="4.5" height="14" rx="1.2" />
      <rect x="13.5" y="5" width="4.5" height="14" rx="1.2" />
    </svg>
  );
}

const buttonBase =
  "flex items-center justify-center rounded-full text-white/85 transition " +
  "hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-accent/70 active:scale-95";

export function Transport({ playing, onPrev, onToggle, onNext, className = "" }: TransportProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <button
        type="button"
        aria-label="Previous track"
        onClick={onPrev}
        className={`${buttonBase} h-8 w-8`}
      >
        <PrevIcon />
      </button>
      <button
        type="button"
        aria-label={playing ? "Pause" : "Play"}
        onClick={onToggle}
        className={`${buttonBase} h-10 w-10 bg-accent text-ink hover:bg-accent-soft hover:text-ink`}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
      <button
        type="button"
        aria-label="Next track"
        onClick={onNext}
        className={`${buttonBase} h-8 w-8`}
      >
        <NextIcon />
      </button>
    </div>
  );
}
