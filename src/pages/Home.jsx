import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATEGORIES } from "../data/products";

const HERO_IMG =
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1400&q=90";

const TICKER_ITEMS = [
  "Free shipping on orders over $200",
  "New ceramics drop Friday",
  "Limited edition prints available now",
  "Sustainably sourced materials",
  "Free shipping on orders over $200",
  "New ceramics drop Friday",
  "Limited edition prints available now",
  "Sustainably sourced materials",
];

const CATEGORY_IMAGES = {
  paintings:
    "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=400&q=80",
  sculpture:
    "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=400&q=80",
  prints:
    "https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?w=400&q=80",
  ceramics:
    "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&q=80",
};

export default function Home({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? PRODUCTS.slice(0, 8)
      : PRODUCTS.filter((p) => p.category === activeCategory).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-[90dvh] w-full overflow-hidden flex flex-col justify-end">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="ShopCanvas editorial collection"
            className="h-full w-full object-cover"
            style={{ filter: "var(--hero-filter, none)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--th-bg) 0%, color-mix(in srgb, var(--th-bg) 40%, transparent) 45%, transparent 100%)",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 pb-16 px-6 max-w-screen-xl mx-auto w-full">
          <div className="max-w-sm lg:max-w-lg">
            <p
              className="mb-4 text-xs font-bold uppercase tracking-[0.25em]"
              style={{
                color: "var(--th-primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              New Collection 2024
            </p>
            <h1
              className="mb-6 text-5xl lg:text-7xl italic leading-[1.05] font-bold"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--th-text)",
              }}
            >
              Curation of
              <br />
              the Sublime
            </h1>
            <p
              className="mb-8 max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--th-muted)" }}
            >
              Discover exclusive pieces from emerging global artists. Minimalist
              forms meeting emotional depth.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/catalog" className="btn-primary inline-flex">
                Shop the Edit
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/catalog"
                className="text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
                style={{ color: "var(--th-text)" }}
              >
                View All →
              </Link>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t py-3"
          style={{
            borderColor:
              "color-mix(in srgb, var(--th-primary) 20%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--th-bg) 85%, transparent)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="flex gap-12 animate-[ticker_20s_linear_infinite] whitespace-nowrap">
            {TICKER_ITEMS.map((t, i) => (
              <span
                key={i}
                className="text-[11px] font-semibold uppercase tracking-widest flex-shrink-0"
                style={{ color: "var(--th-muted)" }}
              >
                <span className="mr-3" style={{ color: "var(--th-primary)" }}>
                  ◆
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse by Category ── */}
      <section className="px-5 py-12 lg:px-12">
        <div className="mb-6 flex items-center justify-between max-w-screen-xl mx-auto">
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.2em] mb-1"
              style={{
                color: "var(--th-primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Collections
            </p>
            <h2
              className="text-2xl font-bold"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--th-text)",
              }}
            >
              Browse by Category
            </h2>
          </div>
          <Link
            to="/catalog"
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
            style={{ color: "var(--th-primary)" }}
          >
            All <ChevronRight size={14} />
          </Link>
        </div>

        {/* Category grid — mobile: horizontal scroll, desktop: grid */}
        <div className="max-w-screen-xl mx-auto">
          {/* Filter pills */}
          <div
            className="flex gap-3 overflow-x-auto pb-2 mb-6"
            style={{ scrollbarWidth: "none" }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0"
                style={{
                  backgroundColor:
                    activeCategory === cat.id
                      ? "var(--th-primary)"
                      : "var(--th-surface)",
                  color: activeCategory === cat.id ? "#fff" : "var(--th-text)",
                  border:
                    activeCategory === cat.id
                      ? "none"
                      : "1px solid color-mix(in srgb, var(--th-primary) 25%, transparent)",
                }}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Visual category cards (desktop) */}
          <div className="hidden lg:grid grid-cols-4 gap-4 mb-4">
            {CATEGORIES.slice(0, 4).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="group relative h-48 overflow-hidden rounded-sm"
                style={{ backgroundColor: "var(--th-surface)" }}
              >
                {CATEGORY_IMAGES[cat.id] && (
                  <img
                    src={CATEGORY_IMAGES[cat.id]}
                    alt={cat.label}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h4
                    className="text-2xl italic text-white font-semibold"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {cat.label}
                  </h4>
                </div>
                {activeCategory === cat.id && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: "var(--th-primary)" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section
        className="px-5 lg:px-12 py-12 rounded-t-3xl"
        style={{ backgroundColor: "var(--th-surface)" }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span
                className="flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-widest mb-1"
                style={{ color: "var(--th-primary)" }}
              >
                <Sparkles size={11} /> Curated Selection
              </span>
              <h2
                className="text-2xl font-bold"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--th-text)",
                }}
              >
                Featured Works
              </h2>
            </div>
            <Link
              to="/catalog"
              className="text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity hidden sm:flex items-center gap-1"
              style={{ color: "var(--th-muted)" }}
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>

          {/* Product grid: 2col mobile → 4col desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/catalog" className="btn-outline inline-flex">
              View All Works
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section
        className="px-6 py-20 text-center"
        style={{ backgroundColor: "var(--th-bg)" }}
      >
        <div className="max-w-lg mx-auto">
          <p
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{
              color: "var(--th-primary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Our Philosophy
          </p>
          <h2
            className="mb-5 text-4xl lg:text-5xl italic leading-tight"
            style={{ fontFamily: "var(--font-serif)", color: "var(--th-text)" }}
          >
            Objects that
            <br />
            outlive trends
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "var(--th-muted)" }}
          >
            We partner exclusively with independent makers who treat craft as a
            practice, not production. Every piece is chosen for its integrity,
            not its moment.
          </p>
          <Link to="/catalog" className="btn-primary inline-flex">
            Explore the Collection
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0) }
          to   { transform: translateX(-50%) }
        }
      `}</style>
    </div>
  );
}
