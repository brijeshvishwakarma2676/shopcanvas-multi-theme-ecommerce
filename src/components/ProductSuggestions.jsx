import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { PRODUCTS } from "../data/products";

export default function ProductSuggestions({
  currentProductId,
  category,
  theme: productTheme,
}) {
  const { theme: activeTheme } = useTheme();

  // Filter products: same category or same theme, excluding the current one
  const recommendations = PRODUCTS.filter(
    (p) =>
      p.id !== currentProductId &&
      (p.category === category || p.theme === productTheme),
  ).slice(0, 4);

  if (recommendations.length === 0) return null;

  const isStreet = activeTheme === "street";
  const isGourmet = activeTheme === "gourmet";
  const isGallery = activeTheme === "gallery";

  return (
    <section
      className="mt-20 border-t pt-16 px-5 lg:px-12 max-w-7xl mx-auto"
      style={{
        borderColor: "color-mix(in srgb, var(--th-primary) 10%, transparent)",
      }}
    >
      <div className="flex items-center justify-between mb-10">
        <h2
          className="text-2xl lg:text-3xl font-bold tracking-tight"
          style={{
            fontFamily: isStreet ? "var(--font-mono)" : "var(--font-serif)",
            color: "var(--th-text)",
            textTransform: isStreet ? "uppercase" : "none",
          }}
        >
          {isStreet
            ? "Recommended Drops"
            : isGourmet
              ? "Fresh Picks for You"
              : "You May Also Like"}
        </h2>
        <Link
          to="/catalog"
          className="text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
          style={{ color: "var(--th-primary)" }}
        >
          View All
        </Link>
      </div>

      <div
        className={
          isStreet
            ? "grid grid-cols-2 lg:grid-cols-4 gap-6"
            : "flex overflow-x-auto pb-8 gap-6 no-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0"
        }
      >
        {recommendations.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            className={`group shrink-0 ${isStreet ? "w-full" : "w-[240px] lg:w-1/4"}`}
          >
            <div
              className={`relative aspect-3/4 overflow-hidden mb-4 ${isGourmet ? "rounded-3xl" : isStreet ? "rounded-none" : "rounded-2xl"}`}
              style={{ backgroundColor: "var(--th-surface)" }}
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Quick Add Button/Link */}
              <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {isStreet ? (
                  <span
                    className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-black text-white"
                    style={{
                      backgroundColor: "var(--th-text)",
                      color: "var(--th-bg)",
                    }}
                  >
                    Quick Add
                  </span>
                ) : (
                  <button
                    className="h-10 w-10 flex items-center justify-center rounded-full shadow-lg"
                    style={{
                      backgroundColor: "var(--th-primary)",
                      color: "#fff",
                    }}
                  >
                    <Plus size={18} />
                  </button>
                )}
              </div>
            </div>

            <div className="px-1">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1"
                style={{
                  color: "var(--th-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {p.artist}
              </p>
              <h3
                className="text-sm font-semibold mb-1"
                style={{
                  fontFamily: isStreet
                    ? "var(--font-mono)"
                    : "var(--font-serif)",
                  color: "var(--th-text)",
                  textTransform: isStreet ? "uppercase" : "none",
                }}
              >
                {p.name}
              </h3>
              <p
                className="text-sm font-bold"
                style={{ color: "var(--th-primary)" }}
              >
                ${p.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
