import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATEGORIES } from "../data/products";

const HERO_IMG =
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&q=90";

const FEATURED = PRODUCTS.slice(0, 4);

export default function Home({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? PRODUCTS.slice(0, 6)
      : PRODUCTS.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-[88dvh] w-full bg-grain overflow-hidden flex flex-col justify-end pb-14 px-6">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Art Gallery fine objects collection"
            className="h-full w-full object-cover opacity-85"
            style={{ filter: "var(--hero-filter, none)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--th-bg) 0%, color-mix(in srgb, var(--th-bg) 30%, transparent) 40%, transparent 100%)",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-sm">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
            style={{
              color: "var(--th-primary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            New Collection 2024
          </p>
          <h1
            className="mb-6 text-5xl italic leading-[1.08] font-bold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--th-text)" }}
          >
            Curation of
            <br />
            the Sublime
          </h1>
          <p
            className="mb-8 max-w-xs text-sm leading-relaxed"
            style={{ color: "var(--th-muted)" }}
          >
            Discover exclusive pieces from emerging global artists.
            <br />
            Minimalist forms meeting emotional depth.
          </p>
          <Link to="/catalog" className="btn-primary inline-flex">
            Shop the Edit
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Scrolling ticker */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t py-3"
          style={{
            borderColor:
              "color-mix(in srgb, var(--th-primary) 20%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--th-bg) 80%, transparent)",
          }}
        >
          <div className="flex gap-12 animate-[ticker_18s_linear_infinite] whitespace-nowrap">
            {[
              "Free shipping on orders over $200",
              "New ceramics drop Friday",
              "Limited edition prints available now",
              "Sustainably sourced materials",
            ].map((t, i) => (
              <span
                key={i}
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: "var(--th-muted)" }}
              >
                <span
                  style={{ color: "var(--th-primary)", marginRight: "0.75rem" }}
                >
                  ◆
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse by Category ── */}
      <section className="px-5 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--th-text)" }}
          >
            Browse by Category
          </h2>
          <Link
            to="/catalog"
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--th-primary)" }}
          >
            All <ArrowRight size={12} />
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
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
                flexShrink: 0,
                transition: "all 0.2s ease",
              }}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap"
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="px-5 pb-8">
        <div className="mb-6 flex items-center justify-between">
          <h2
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-serif)", color: "var(--th-text)" }}
          >
            Featured Pieces
          </h2>
          <span
            className="flex items-center gap-1 text-[11px] font-mono"
            style={{ color: "var(--th-primary)" }}
          >
            <Sparkles size={11} /> Curated
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/catalog" className="btn-outline inline-flex">
            View All Products
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section
        className="mx-5 mb-10 rounded px-8 py-12 text-center"
        style={{ backgroundColor: "var(--th-surface)" }}
      >
        <p
          className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{ color: "var(--th-primary)", fontFamily: "var(--font-mono)" }}
        >
          Our Philosophy
        </p>
        <h2
          className="mb-4 text-3xl italic leading-tight"
          style={{ fontFamily: "var(--font-serif)", color: "var(--th-text)" }}
        >
          Objects that
          <br />
          outlive trends
        </h2>
        <p
          className="max-w-sm mx-auto text-sm leading-relaxed"
          style={{ color: "var(--th-muted)" }}
        >
          We partner exclusively with independent makers who treat craft as a
          practice, not production.
        </p>
      </section>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0) }
          to { transform: translateX(-50%) }
        }
        .scrollbar-none::-webkit-scrollbar { display: none }
      `}</style>
    </div>
  );
}
