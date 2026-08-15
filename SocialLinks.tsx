type LinkDef = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const LINKS: LinkDef[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Share",
    href: "#share",
    icon: (
      <svg {...iconProps}>
        <circle cx="18" cy="5" r="2.4" />
        <circle cx="6" cy="12" r="2.4" />
        <circle cx="18" cy="19" r="2.4" />
        <path d="M8.2 10.8l7.6-4.6M8.2 13.2l7.6 4.6" />
      </svg>
    ),
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-2.5 py-1.5 backdrop-blur-md">
      {LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          className="flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition
                     hover:text-accent focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-accent/70"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
