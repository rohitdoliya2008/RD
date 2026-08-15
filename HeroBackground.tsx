/**
 * Two stacked fixed layers:
 *  1. `.hero-bg` — background-image is set in globals.css (not inline) so the
 *     `@media (orientation: portrait)` rule there can swap scene-wide.png for
 *     scene-tall.png. Requires public/bg/scene-wide.png + scene-tall.png.
 *  2. A gradient scrim so foreground text stays legible over bright sky.
 */
export function HeroBackground() {
  return (
    <>
      <div
        aria-hidden
        className="hero-bg fixed inset-0 -z-20 bg-cover bg-center"
      />
      <div
        aria-hidden
        className="fixed inset-0 -z-[19] bg-gradient-to-b from-black/35 via-black/10 to-black/60"
      />
    </>
  );
}
