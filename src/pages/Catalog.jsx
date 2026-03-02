import { useState } from "react";
import { SlidersHorizontal, Grid2x2, List, X, ChevronDown } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATEGORIES } from "../data/products";

const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 – $300", min: 100, max: 300 },
  { label: "$300+", min: 300, max: Infinity },
];

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "rating", label: "Top Rated" },
];

export default function Catalog({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [gridCols, setGridCols] = useState(2);
  const [sort, setSort] = useState("featured");

  const priceRange = PRICE_RANGES[activePriceIdx];

  let filtered = PRODUCTS.filter((p) => {
    const catOk = activeCategory === "all" || p.category === activeCategory;
    const priceOk = p.price >= priceRange.min && p.price <= priceRange.max;
    return catOk && priceOk;
  });

  if (sort === "price-asc")
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price-desc")
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "rating")
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen pt-16 pb-28 overflow-x-hidden">
      {/* ── Page Header ── */}
      <div
        className="px-5 lg:px-12 py-10 border-b"
        style={{
          borderColor: "color-mix(in srgb, var(--th-primary) 15%, transparent)",
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <p
            className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-1"
            style={{ color: "var(--th-primary)" }}
          >
            Shop All
          </p>
          <div className="flex items-end justify-between">
            <h1
              className="text-3xl lg:text-4xl font-bold"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--th-text)",
              }}
            >
              The Collection
            </h1>
            <p className="text-xs" style={{ color: "var(--th-muted)" }}>
              {filtered.length} items
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto lg:flex lg:gap-8 lg:px-12">
        {/* ── Desktop left sidebar ── */}
        <aside className="hidden lg:block w-56 flex-shrink-0 pt-8 self-start sticky top-20">
          {/* Categories */}
          <div className="mb-8">
            <p
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--th-muted)" }}
            >
              Category
            </p>
            <div className="flex flex-col gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="flex items-center gap-2 px-3 py-2 rounded text-xs font-semibold text-left transition-all duration-150"
                  style={{
                    backgroundColor:
                      activeCategory === cat.id
                        ? "color-mix(in srgb, var(--th-primary) 12%, transparent)"
                        : "transparent",
                    color:
                      activeCategory === cat.id
                        ? "var(--th-primary)"
                        : "var(--th-text)",
                    fontWeight: activeCategory === cat.id ? 700 : 500,
                  }}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <p
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--th-muted)" }}
            >
              Price Range
            </p>
            <div className="flex flex-col gap-1">
              {PRICE_RANGES.map((range, i) => (
                <button
                  key={i}
                  onClick={() => setActivePriceIdx(i)}
                  className="flex items-center justify-between px-3 py-2 rounded text-xs font-semibold text-left transition-all duration-150"
                  style={{
                    backgroundColor:
                      activePriceIdx === i
                        ? "color-mix(in srgb, var(--th-primary) 12%, transparent)"
                        : "transparent",
                    color:
                      activePriceIdx === i
                        ? "var(--th-primary)"
                        : "var(--th-text)",
                  }}
                >
                  {range.label}
                  {activePriceIdx === i && (
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "var(--th-primary)" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--th-muted)" }}
            >
              Sort By
            </p>
            <div className="flex flex-col gap-1">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSort(opt.value)}
                  className="px-3 py-2 rounded text-xs font-semibold text-left transition-all duration-150"
                  style={{
                    backgroundColor:
                      sort === opt.value
                        ? "color-mix(in srgb, var(--th-primary) 12%, transparent)"
                        : "transparent",
                    color:
                      sort === opt.value
                        ? "var(--th-primary)"
                        : "var(--th-text)",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <div className="min-w-0 w-full lg:flex-1 pt-6 px-5 lg:px-0">
          {/* Mobile filter bar */}
          <div
            className="flex items-center gap-3 overflow-x-auto pb-4 lg:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            <button
              onClick={() => setFiltersOpen(true)}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold flex-shrink-0 transition-all"
              style={{
                backgroundColor: "var(--th-surface)",
                color: "var(--th-text)",
                border:
                  "1px solid color-mix(in srgb, var(--th-primary) 25%, transparent)",
              }}
            >
              <SlidersHorizontal size={13} />
              Filter
            </button>

            {CATEGORIES.slice(0, 5).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-200"
                style={{
                  backgroundColor:
                    activeCategory === cat.id
                      ? "var(--th-primary)"
                      : "var(--th-surface)",
                  color: activeCategory === cat.id ? "#fff" : "var(--th-text)",
                  border:
                    "1px solid color-mix(in srgb, var(--th-primary) 25%, transparent)",
                }}
              >
                {cat.label}
              </button>
            ))}

            <div className="ml-auto flex items-center gap-2 flex-shrink-0">
              <div
                className="flex items-center gap-1 rounded-full px-3 py-2"
                style={{
                  backgroundColor: "var(--th-surface)",
                  border:
                    "1px solid color-mix(in srgb, var(--th-primary) 25%, transparent)",
                }}
              >
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--th-text)",
                    border: "none",
                    outline: "none",
                  }}
                  className="text-xs font-semibold appearance-none"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={11} style={{ color: "var(--th-muted)" }} />
              </div>
              <button
                onClick={() => setGridCols((v) => (v === 2 ? 1 : 2))}
                style={{ color: "var(--th-muted)" }}
                className="p-1.5 rounded hover:opacity-60 transition-opacity"
              >
                {gridCols === 2 ? <List size={18} /> : <Grid2x2 size={18} />}
              </button>
            </div>
          </div>

          {/* Desktop sort bar */}
          <div
            className="hidden lg:flex items-center justify-between mb-6 pb-4 border-b"
            style={{
              borderColor:
                "color-mix(in srgb, var(--th-primary) 15%, transparent)",
            }}
          >
            <p className="text-xs" style={{ color: "var(--th-muted)" }}>
              Showing{" "}
              <span style={{ color: "var(--th-text)", fontWeight: 600 }}>
                {filtered.length}
              </span>{" "}
              results
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs" style={{ color: "var(--th-muted)" }}>
                Sort by
              </span>
              <div
                className="flex items-center gap-1 rounded px-3 py-1.5"
                style={{
                  backgroundColor: "var(--th-surface)",
                  border:
                    "1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)",
                }}
              >
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--th-text)",
                    border: "none",
                    outline: "none",
                  }}
                  className="text-xs font-semibold appearance-none pr-4"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={11} style={{ color: "var(--th-muted)" }} />
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setGridCols(2)}
                  className="p-1.5 rounded transition-opacity"
                  style={{
                    color:
                      gridCols === 2 ? "var(--th-primary)" : "var(--th-muted)",
                  }}
                >
                  <Grid2x2 size={16} />
                </button>
                <button
                  onClick={() => setGridCols(1)}
                  className="p-1.5 rounded transition-opacity"
                  style={{
                    color:
                      gridCols === 1 ? "var(--th-primary)" : "var(--th-muted)",
                  }}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div
            className={`grid gap-x-4 gap-y-10 ${
              gridCols === 1
                ? "grid-cols-1"
                : "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            }`}
          >
            {filtered.length === 0 ? (
              <div
                className="col-span-4 py-24 text-center"
                style={{ color: "var(--th-muted)" }}
              >
                <p className="text-4xl mb-3">∅</p>
                <p className="text-sm">No products match these filters.</p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setActivePriceIdx(0);
                  }}
                  className="mt-4 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
                  style={{ color: "var(--th-primary)" }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* ── Mobile Filter Drawer ── */}
      {filtersOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setFiltersOpen(false)}
          />
          <div
            className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl px-6 pb-10 pt-5 shadow-2xl"
            style={{
              backgroundColor: "var(--th-surface)",
              color: "var(--th-text)",
              borderTop:
                "1px solid color-mix(in srgb, var(--th-primary) 30%, transparent)",
            }}
          >
            <div
              className="mx-auto mb-5 h-1 w-10 rounded-full"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--th-muted) 40%, transparent)",
              }}
            />
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-bold text-sm uppercase tracking-widest">
                Filters
              </h3>
              <button
                onClick={() => setFiltersOpen(false)}
                style={{ color: "var(--th-muted)" }}
              >
                <X size={18} />
              </button>
            </div>

            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "var(--th-muted)" }}
            >
              Category
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="rounded-full px-3 py-1.5 text-xs font-semibold transition-all"
                  style={{
                    backgroundColor:
                      activeCategory === cat.id
                        ? "var(--th-primary)"
                        : "transparent",
                    color:
                      activeCategory === cat.id ? "#fff" : "var(--th-text)",
                    border:
                      "1px solid color-mix(in srgb, var(--th-primary) 40%, transparent)",
                  }}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>

            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "var(--th-muted)" }}
            >
              Price Range
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {PRICE_RANGES.map((range, i) => (
                <button
                  key={i}
                  onClick={() => setActivePriceIdx(i)}
                  className="rounded-full px-3 py-1.5 text-xs font-semibold transition-all"
                  style={{
                    backgroundColor:
                      activePriceIdx === i
                        ? "var(--th-primary)"
                        : "transparent",
                    color: activePriceIdx === i ? "#fff" : "var(--th-text)",
                    border:
                      "1px solid color-mix(in srgb, var(--th-primary) 40%, transparent)",
                  }}
                >
                  {range.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setFiltersOpen(false)}
              className="btn-primary w-full"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
}
