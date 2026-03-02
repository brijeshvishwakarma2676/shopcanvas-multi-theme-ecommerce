import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Heart } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart && onAddToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleWish = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setWished((v) => !v);
  };

  return (
    <Link to={`/product/${product.id}`} className="group flex flex-col gap-3">
      {/* Image container */}
      <div
        className="relative w-full aspect-3/4 overflow-hidden"
        style={{ backgroundColor: "var(--th-surface)" }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Tag badge */}
        {product.tag && (
          <span
            className="absolute top-3 left-3 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
            style={{ backgroundColor: "var(--th-primary)", color: "#fff" }}
          >
            {product.tag}
          </span>
        )}

        {/* Wishlist button */}
        <button
          onClick={handleWish}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--th-bg) 85%, transparent)",
            backdropFilter: "blur(4px)",
            color: wished ? "var(--th-primary)" : "var(--th-muted)",
          }}
          aria-label="Wishlist"
        >
          <Heart size={14} fill={wished ? "currentColor" : "none"} />
        </button>

        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          style={{
            backgroundColor: added
              ? "var(--th-primary)"
              : "color-mix(in srgb, var(--th-bg) 90%, transparent)",
            backdropFilter: "blur(4px)",
            color: added ? "#fff" : "var(--th-text)",
            transition: "all 0.2s ease",
          }}
          aria-label="Add to cart"
        >
          <Plus size={14} strokeWidth={added ? 3 : 2} />
        </button>
      </div>

      {/* Product info */}
      <div className="flex flex-col gap-0.5 px-0.5">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.15em] truncate"
          style={{ color: "var(--th-muted)", fontFamily: "var(--font-mono)" }}
        >
          {product.artist}
        </p>
        <h3
          className="text-sm leading-tight font-semibold truncate transition-colors"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--th-text)",
          }}
        >
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2 mt-1">
          <span
            className="text-sm font-bold"
            style={{ color: "var(--th-primary)" }}
          >
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span
              className="text-xs line-through"
              style={{ color: "var(--th-muted)" }}
            >
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
