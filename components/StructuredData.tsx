import { site } from "@/data/site";

/**
 * Renders JSON-LD structured data (schema.org/Restaurant) so search engines
 * can surface rich results — rating, hours, address, price range — for
 * queries like "burger restaurant Budaiya" or "Cheesy Burger Bahrain".
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200",
    servesCuisine: [
      "American",
      "Burgers",
      "Smash Burgers",
      "Fries",
      "Steak Sandwiches",
    ],
    priceRange: site.priceRange,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Maqabah",
      addressLocality: "Budaiya",
      addressCountry: "BH",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: site.ratingCount,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "04:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
