/**
 * DripDivider — Cheesy Burger's signature section break.
 * A wavy "melted cheese" line with a few slow-drooping drips, used instead
 * of a plain <hr> between major sections. Keep it subtle: one per seam.
 */
export default function DripDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`drip-divider ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1200 46" preserveAspectRatio="none" fill="none">
        <path
          d="M0 8 C 100 24, 200 -4, 300 12 C 400 28, 500 0, 600 14 C 700 28, 800 -2, 900 12 C 1000 26, 1100 2, 1200 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle className="drop" cx="140" cy="18" r="4" fill="currentColor" />
        <circle className="drop" cx="360" cy="24" r="3" fill="currentColor" />
        <circle className="drop" cx="620" cy="20" r="5" fill="currentColor" />
        <circle className="drop" cx="860" cy="16" r="3.5" fill="currentColor" />
        <circle className="drop" cx="1040" cy="22" r="4" fill="currentColor" />
      </svg>
    </div>
  );
}
