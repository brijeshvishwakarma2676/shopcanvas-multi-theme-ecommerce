import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  Share2,
} from "lucide-react";
import { PRODUCTS } from "../data/products";

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart && onAddToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pt-16 pb-28">
      {/* Back nav */}
      <div className="flex items-center gap-3 px-5 py-4">
        <button
          onClick={() => navigate(-1)}
          style={{ color: "var(--th-text)" }}
          className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity"
        >
          <ArrowLeft size={14} />
          Back
        </button>
      </div>

      {/* Image gallery */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={product.images[activeImg]}
          alt={product.name}
          className="h-full w-full object-cover transition-opacity duration-300"
        />

        {/* Actions overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {[Heart, Share2].map((Icon, i) => (
            <button
              key={i}
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--th-bg) 90%, transparent)",
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm shadow-sm hover:opacity-70 transition-opacity"
            >
              <Icon size={16} style={{ color: "var(--th-text)" }} />
            </button>
          ))}
        </div>

        {/* Thumbnails */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  backgroundColor:
                    i === activeImg
                      ? "var(--th-primary)"
                      : "rgba(255,255,255,0.6)",
                  width: i === activeImg ? "24px" : "8px",
                  transition: "all 0.3s ease",
                }}
                className="h-2 rounded-full"
              />
            ))}
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="px-5 pt-6">
        {/* Artist + category */}
        <div className="flex items-center justify-between mb-2">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{
              color: "var(--th-primary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {product.artist}
          </p>
          {product.tag && (
            <span
              style={{ backgroundColor: "var(--th-primary)", color: "#fff" }}
              className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded"
            >
              {product.tag}
            </span>
          )}
        </div>

        <h1
          className="text-2xl font-bold leading-tight mb-3"
          style={{ fontFamily: "var(--font-serif)", color: "var(--th-text)" }}
        >
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                style={{ color: "var(--th-primary)" }}
              />
            ))}
          </div>
          <span
            className="text-xs font-mono"
            style={{ color: "var(--th-muted)" }}
          >
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-5">
          <span
            className="text-2xl font-bold"
            style={{ color: "var(--th-text)" }}
          >
            ${product.price}
          </span>
          {product.originalPrice && (
            <span
              className="text-sm line-through"
              style={{ color: "var(--th-muted)" }}
            >
              ${product.originalPrice}
            </span>
          )}
          {product.originalPrice && (
            <span
              className="text-xs font-bold px-1.5 py-0.5 rounded"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--th-primary) 15%, transparent)",
                color: "var(--th-primary)",
              }}
            >
              Save ${product.originalPrice - product.price}
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "var(--th-muted)" }}
        >
          {product.description}
        </p>

        {/* Specs */}
        <div
          className="rounded p-4 mb-6 grid grid-cols-2 gap-3"
          style={{ backgroundColor: "var(--th-surface)" }}
        >
          {[
            { label: "Dimensions", value: product.dimensions },
            { label: "Material", value: product.material },
          ].map((spec) => (
            <div key={spec.label}>
              <p
                className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
                style={{ color: "var(--th-muted)" }}
              >
                {spec.label}
              </p>
              <p
                className="text-xs font-semibold"
                style={{ color: "var(--th-text)" }}
              >
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        {/* Quantity + Add to Cart */}
        <div className="flex gap-3">
          {/* Stepper */}
          <div
            className="flex items-center rounded"
            style={{
              border:
                "1.5px solid color-mix(in srgb, var(--th-primary) 40%, transparent)",
              backgroundColor: "var(--th-surface)",
            }}
          >
            <button
              onClick={() => setQty((v) => Math.max(1, v - 1))}
              style={{ color: "var(--th-text)" }}
              className="flex h-12 w-10 items-center justify-center hover:opacity-60 transition-opacity"
            >
              <Minus size={14} />
            </button>
            <span
              className="w-10 text-center text-sm font-bold"
              style={{
                color: "var(--th-text)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {qty}
            </span>
            <button
              onClick={() => setQty((v) => v + 1)}
              style={{ color: "var(--th-text)" }}
              className="flex h-12 w-10 items-center justify-center hover:opacity-60 transition-opacity"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* CTA */}
          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            style={{
              backgroundColor: added
                ? "var(--th-primary-hover, var(--th-primary))"
                : "var(--th-primary)",
              color: "#fff",
              transition: "all 0.3s ease",
              opacity: product.inStock ? 1 : 0.5,
            }}
            className="flex-1 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.15em]"
          >
            <ShoppingBag size={14} />
            {!product.inStock
              ? "Out of Stock"
              : added
                ? "✓ Added!"
                : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
