import { Link } from "react-router-dom";
import { Star, ShoppingBag, Heart } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  const discounted =
    product.originalPrice && product.price < product.originalPrice;

  return (
    <div
      className="group relative flex flex-col"
      style={{
        backgroundColor: "var(--th-surface)",
        borderRadius: "var(--radius-DEFAULT)",
      }}
    >
      {/* Image */}
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden aspect-[3/4]"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />

        {/* Tag */}
        {product.tag && (
          <span
            style={{
              backgroundColor: "var(--th-primary)",
              color: product.tag === "Sale" ? "#fff" : "#fff",
            }}
            className="absolute left-3 top-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
          >
            {product.tag}
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 hover:bg-white">
          <Heart size={14} className="text-gray-700" />
        </button>

        {/* Quick add */}
        <button
          onClick={(e) => {
            e.preventDefault();
            onAddToCart && onAddToCart(product);
          }}
          style={{ backgroundColor: "var(--th-primary)" }}
          className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
        >
          <ShoppingBag size={13} />
          Quick Add
        </button>
      </Link>

      {/* Info */}
      <div className="flex flex-col gap-1 p-3">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.15em]"
          style={{ color: "var(--th-primary)", fontFamily: "var(--font-mono)" }}
        >
          {product.artist}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3
            className="text-sm font-semibold leading-tight hover:opacity-70 transition-opacity"
            style={{ fontFamily: "var(--font-serif)", color: "var(--th-text)" }}
          >
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mt-0.5">
          <Star
            size={10}
            fill="currentColor"
            style={{ color: "var(--th-primary)" }}
          />
          <span
            className="text-[10px] font-mono"
            style={{ color: "var(--th-muted)" }}
          >
            {product.rating} ({product.reviews})
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span
            className="text-sm font-bold"
            style={{ color: "var(--th-text)" }}
          >
            ${product.price}
          </span>
          {discounted && (
            <span
              className="text-xs line-through"
              style={{ color: "var(--th-muted)" }}
            >
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
