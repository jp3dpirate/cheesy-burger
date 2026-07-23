/**
 * NeonBadge — Cheesy Burger's diner-neon signature motif.
 * Reinforces the "open until 4am" identity that sets this brand apart from
 * a typical daytime burger shop. Used in the Navbar and Hero.
 */
export default function NeonBadge({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-cheese/50 bg-cheese/10 px-4 py-1.5 font-display font-semibold text-cheese animate-flicker ${
        compact ? "text-[11px]" : "text-xs sm:text-sm"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-red opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
      </span>
      OPEN TIL 4AM
    </div>
  );
}
