import { useState } from "react";
import { Star, User, Send } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Reviews({ reviews = [], onRate }) {
  const { theme } = useTheme();
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  const isStreet = theme === "street";
  const isGourmet = theme === "gourmet";

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        ).toFixed(1)
      : 0;

  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    percentage:
      reviews.length > 0
        ? (reviews.filter((r) => r.rating === star).length / reviews.length) *
          100
        : 0,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userRating === 0) return;
    onRate && onRate({ rating: userRating, comment });
    setUserRating(0);
    setComment("");
  };

  return (
    <section className="mt-20 px-5 lg:px-12 max-w-7xl mx-auto mb-20">
      <h2
        className="text-2xl font-bold mb-10"
        style={{
          fontFamily: isStreet ? "var(--font-mono)" : "var(--font-serif)",
          color: "var(--th-text)",
          textTransform: isStreet ? "uppercase" : "none",
        }}
      >
        {isStreet ? "Customer Drips" : "Ratings & Reviews"}
      </h2>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Rating Summary */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-4xl font-bold"
              style={{ color: "var(--th-text)" }}
            >
              {averageRating}
            </span>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    fill={
                      s <= Math.round(averageRating)
                        ? "var(--th-primary)"
                        : "none"
                    }
                    style={{
                      color:
                        s <= Math.round(averageRating)
                          ? "var(--th-primary)"
                          : "var(--th-muted)",
                    }}
                  />
                ))}
              </div>
              <p
                className="text-xs uppercase tracking-widest font-bold"
                style={{ color: "var(--th-muted)" }}
              >
                Based on {reviews.length} reviews
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {ratingCounts.map(({ star, count, percentage }) => (
              <div key={star} className="flex items-center gap-3 text-sm">
                <span
                  className="w-3 font-bold"
                  style={{ color: "var(--th-text)" }}
                >
                  {star}
                </span>
                <div
                  className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--th-primary) 5%, transparent)",
                  }}
                >
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: "var(--th-primary)",
                    }}
                  ></div>
                </div>
                <span
                  className="w-8 text-right text-xs font-bold"
                  style={{ color: "var(--th-muted)" }}
                >
                  {count}
                </span>
              </div>
            ))}
          </div>

          {/* Rate Form */}
          <div
            className={`mt-10 p-6 ${isGourmet ? "rounded-3xl" : isStreet ? "rounded-none" : "rounded-2xl"}`}
            style={{ backgroundColor: "var(--th-surface)" }}
          >
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--th-text)" }}
            >
              {isStreet ? "Rate the Drop" : "Write a Review"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onMouseEnter={() => setHoverRating(s)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setUserRating(s)}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      size={24}
                      fill={
                        (hoverRating || userRating) >= s
                          ? "var(--th-primary)"
                          : "none"
                      }
                      style={{
                        color:
                          (hoverRating || userRating) >= s
                            ? "var(--th-primary)"
                            : "var(--th-muted)",
                      }}
                    />
                  </button>
                ))}
              </div>
              <textarea
                placeholder={
                  isStreet
                    ? "YOUR THOUGHTS..."
                    : "What did you think of the product?"
                }
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className={`w-full p-4 text-sm bg-transparent border focus:outline-none transition-colors ${isStreet ? "rounded-none p-3 uppercase font-mono" : "rounded-xl"}`}
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--th-primary) 20%, transparent)",
                  color: "var(--th-text)",
                }}
                rows={3}
              />
              <button
                type="submit"
                className={`w-full py-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest transition-all ${isStreet ? "rounded-none" : "rounded-full"}`}
                style={{
                  backgroundColor: "var(--th-primary)",
                  color: "#fff",
                }}
              >
                Submit {isStreet ? "Drip" : "Review"}
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Review List */}
        <div className="lg:col-span-2 space-y-8">
          {reviews.length > 0 ? (
            reviews.map((r) => (
              <div
                key={r.id}
                className={`p-6 border-b last:border-0 ${isStreet ? "bg-black/5" : ""}`}
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--th-primary) 10%, transparent)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 flex items-center justify-center ${isGourmet ? "rounded-full" : isStreet ? "rounded-none" : "rounded-lg"}`}
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--th-primary) 10%, transparent)",
                        color: "var(--th-primary)",
                      }}
                    >
                      <User size={18} />
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold uppercase tracking-wider"
                        style={{ color: "var(--th-text)" }}
                      >
                        {r.user}
                      </p>
                      <p
                        className="text-[10px] font-bold"
                        style={{ color: "var(--th-muted)" }}
                      >
                        {r.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={12}
                        fill={s <= r.rating ? "var(--th-primary)" : "none"}
                        style={{
                          color:
                            s <= r.rating
                              ? "var(--th-primary)"
                              : "var(--th-muted)",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <p
                  className={`text-sm leading-relaxed ${isStreet ? "uppercase font-mono tracking-tight" : ""}`}
                  style={{ color: "var(--th-text)" }}
                >
                  {r.comment}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-20 opacity-50">
              <p className="text-sm uppercase tracking-widest font-bold">
                No reviews yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
