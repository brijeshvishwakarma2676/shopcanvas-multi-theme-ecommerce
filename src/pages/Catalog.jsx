import { useState } from "react";
import { SlidersHorizontal, Grid2x2, List, X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATEGORIES } from "../data/products";

const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 – $300", min: 100, max: 300 },
  { label: "$300+", min: 300, max: Infinity },
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
    <div className="min-h-screen pt-16 pb-24">
      {/* Page Header */}
      <div className="px-5 py-8">
        <p
          className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-1"
          style={{ color: "var(--th-primary)" }}
        >
          Shop All
        </p>
        <h1
          className="text-3xl font-bold"
          style={{ fontFamily: "var(--font-serif)", color: "var(--th-text)" }}
        >
          The Collection
        </h1>
        <p className="text-xs mt-1" style={{ color: "var(--th-muted)" }}>
          {filtered.length} items
        </p>
      </div>

      {/* Mobile filter bar */}
      <div
        className="flex items-center gap-3 overflow-x-auto px-5 pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Filter button */}
        <button
          onClick={() => setFiltersOpen(true)}
          style={{
            backgroundColor: "var(--th-surface)",
            color: "var(--th-text)",
            border:
              "1px solid color-mix(in srgb, var(--th-primary) 25%, transparent)",
            flexShrink: 0,
          }}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
        >
          <SlidersHorizontal size={13} />
          Filters
        </button>

        {/* Category pills */}
        {CATEGORIES.slice(0, 5).map((cat) => (
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
                "1px solid color-mix(in srgb, var(--th-primary) 25%, transparent)",
              flexShrink: 0,
              transition: "all 0.2s ease",
            }}
            className="rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap"
          >
            {cat.label}
          </button>
        ))}

        {/* Sort + grid toggle */}
        <div className="ml-auto flex items-center gap-2 flex-shrink-0">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              backgroundColor: "var(--th-surface)",
              color: "var(--th-text)",
              border:
                "1px solid color-mix(in srgb, var(--th-primary) 25%, transparent)",
            }}
            className="rounded-full px-3 py-2 text-xs font-semibold"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="rating">Top Rated</option>
          </select>
          <button
            onClick={() => setGridCols((v) => (v === 2 ? 1 : 2))}
            style={{ color: "var(--th-muted)" }}
            className="p-1"
          >
            {gridCols === 2 ? <List size={18} /> : <Grid2x2 size={18} />}
          </button>
        </div>
      </div>

      {/* Product grid */}
      <div
        className={`px-5 grid gap-4 ${gridCols === 1 ? "grid-cols-1" : "grid-cols-2"}`}
      >
        {filtered.length === 0 ? (
          <div
            className="col-span-2 py-20 text-center"
            style={{ color: "var(--th-muted)" }}
          >
            <p className="text-2xl mb-2">∅</p>
            <p className="text-sm">No products match these filters</p>
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

      {/* Filter drawer */}
      {filtersOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={() => setFiltersOpen(false)}
          />
          <div
            style={{
              backgroundColor: "var(--th-surface)",
              color: "var(--th-text)",
              borderTop:
                "1px solid color-mix(in srgb, var(--th-primary) 30%, transparent)",
            }}
            className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl px-6 pb-10 pt-5 shadow-2xl"
          >
            <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-gray-300/60" />
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

            {/* Category filter */}
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
                  className="rounded-full px-3 py-1.5 text-xs font-semibold"
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Price filter */}
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
                  style={{
                    backgroundColor:
                      activePriceIdx === i
                        ? "var(--th-primary)"
                        : "transparent",
                    color: activePriceIdx === i ? "#fff" : "var(--th-text)",
                    border:
                      "1px solid color-mix(in srgb, var(--th-primary) 40%, transparent)",
                  }}
                  className="rounded-full px-3 py-1.5 text-xs font-semibold"
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
