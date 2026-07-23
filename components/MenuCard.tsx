export default function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  const stars = [0, 1, 2, 3, 4];
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {stars.map((i) => {
        const filled = i < Math.round(rating);
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill={filled ? "#FFC107" : "none"}
            stroke="#FFC107"
            strokeWidth="1"
            aria-hidden="true"
          >
            <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
          </svg>
        );
      })}
    </div>
  );
}
