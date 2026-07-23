export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-white/10 border-t-cheese" />
        <div className="absolute inset-0 flex items-center justify-center text-xl">🍔</div>
      </div>
      <p className="font-display text-sm tracking-wide text-cream/60">Firing up the grill…</p>
    </div>
  );
}
