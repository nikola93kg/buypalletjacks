import { ExternalLink } from "lucide-react";

const PLACE_ID = process.env.GOOGLE_PLACE_ID ?? "ChIJhSDznPSxD4gRCU4-y7E0-Vc";
const MAPS_URL = "https://maps.app.goo.gl/cY9wLPhrmABpB3fU8";

// ── Types ──────────────────────────────────────────────────
interface PlacesReview {
  name: string;
  rating: number;
  relativePublishTimeDescription: string;
  text?: { text: string };
  authorAttribution: { displayName: string; photoUri?: string };
}

interface PlacesResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesReview[];
}

interface NormalisedReview {
  author: string;
  rating: number;
  date: string;
  body: string;
}

// Real reviews from your listing that the API doesn't return
// (Places API hard-caps at 5 results — this fills the 6th slot)
const STATIC_REVIEWS: NormalisedReview[] = [
  {
    author: "Nikola Marković",
    rating: 5,
    date: "7 months ago",
    body: "Great experience, fast delivery, reliable products and very good owners!",
  },
];

// ── Server-side data fetch (cached 24 h) ───────────────────
async function fetchPlaceData(): Promise<{
  rating: number;
  reviewCount: number;
  reviews: NormalisedReview[];
} | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: 86400 }, // re-fetch once every 24 h
      }
    );

    if (!res.ok) return null;

    const data: PlacesResponse = await res.json();

    const liveReviews: NormalisedReview[] = (data.reviews ?? [])
      .filter((r) => r.text?.text && r.rating >= 4)   // only positive, non-empty
      .slice(0, 7)
      .map((r) => ({
        author: r.authorAttribution.displayName,
        rating: r.rating,
        date: r.relativePublishTimeDescription,
        body: r.text!.text,
      }));

    // Merge static fallbacks, skip any whose author already came from the API
    const liveAuthors = new Set(liveReviews.map((r) => r.author));
    const merged = [
      ...liveReviews,
      ...STATIC_REVIEWS.filter((r) => !liveAuthors.has(r.author)),
    ].slice(0, 6);

    return {
      rating: data.rating ?? 0,
      reviewCount: data.userRatingCount ?? 0,
      reviews: merged,
    };
  } catch {
    return null;
  }
}

// ── Sub-components ─────────────────────────────────────────
function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const sz = size === "lg" ? "w-6 h-6" : "w-4 h-4";
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={sz}
          viewBox="0 0 20 20"
          fill={star <= Math.round(rating) ? "#F97316" : "none"}
          stroke={star <= Math.round(rating) ? "#F97316" : "#CBD5E1"}
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
      <path fill="none" d="M0 0h48v48H0z" />
    </svg>
  );
}

// ── Server Component ───────────────────────────────────────
export default async function GoogleReviews() {
  const data = await fetchPlaceData();

  if (!data || data.reviews.length === 0) return null;

  const { rating, reviewCount, reviews } = data;

  return (
    <section
      className="section-padding bg-[#F1F5F9]"
      aria-labelledby="reviews-heading"
    >
      <div className="container-site">

        {/* ── Header — centered, matching all other sections ── */}
        <div className="text-center mb-12">
          <span className="section-eyebrow">Customer Reviews</span>
          <h2
            id="reviews-heading"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-5xl font-900 text-[#0F172A] mb-4"
          >
            What our customers{" "}
            <span className="text-[#1D4ED8]">are saying</span>
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-base mb-8">
            Verified reviews from real customers on Google.
          </p>

          {/* Aggregate badge — centered below subtitle */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-2xl px-6 py-3.5 shadow-sm hover:shadow-md transition-shadow duration-200"
            aria-label={`${rating.toFixed(1)} stars — read reviews on Google Maps`}
          >
            <GoogleLogo className="w-7 h-7" />
            <span
              className="text-2xl font-900 text-[#0F172A] leading-none"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {rating.toFixed(1)}
            </span>
            <StarRating rating={rating} size="lg" />
            <span className="text-sm text-[#64748B] font-medium pl-1 border-l border-[#E2E8F0]">
              {reviewCount} Google reviews
            </span>
          </a>
        </div>

        {/* ── Review cards ───────────────────────────────────── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {reviews.map((review) => (
            <article
              key={review.author}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-[0_8px_28px_-6px_rgba(29,78,216,0.14)] hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className="font-700 text-[#0F172A] text-sm leading-tight mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {review.author}
                  </p>
                  <StarRating rating={review.rating} />
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <GoogleLogo className="w-4 h-4" />
                  <span className="text-[10px] text-[#94A3B8] font-medium">{review.date}</span>
                </div>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed flex-1">
                &ldquo;{review.body}&rdquo;
              </p>
            </article>
          ))}
        </div>

        {/* ── CTA — matches btn-primary pattern ──────────────── */}
        <div className="text-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-600 text-[#1D4ED8] hover:text-[#1E3A8A] transition-colors duration-200"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <GoogleLogo className="w-4 h-4" />
            Read all {reviewCount} reviews on Google
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
