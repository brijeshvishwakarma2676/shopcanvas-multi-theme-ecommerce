import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  Share2,
  ChevronDown,
  ChevronUp,
  Truck,
  RefreshCw,
  Shield,
} from "lucide-react";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import Reviews from "../components/Reviews";
import { useTheme } from "../context/ThemeContext";
import ProductSuggestions from "../components/ProductSuggestions";
import { showToast } from "../components/Toast";

const ACCORDIONS = [
  {
    id: "description",
    label: "Description",
    icon: null,
    render: (p) => (
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--th-muted)" }}
      >
        {p.description}
      </p>
    ),
  },
  {
    id: "details",
    label: "Details & Dimensions",
    icon: null,
    render: (p) => (
      <div className="grid grid-cols-2 gap-4 text-sm">
        {[
          { label: "Dimensions", value: p.dimensions },
          { label: "Material", value: p.material },
          { label: "Category", value: p.category },
          { label: "In Stock", value: p.inStock ? "Yes" : "No" },
        ].map((spec) => (
          <div key={spec.label}>
            <p
              className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
              style={{ color: "var(--th-muted)" }}
            >
              {spec.label}
            </p>
            <p className="font-semibold" style={{ color: "var(--th-text)" }}>
              {spec.value ?? "—"}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "delivery",
    label: "Delivery & Returns",
    icon: null,
    render: () => (
      <div className="flex flex-col gap-3">
        {[
          { icon: Truck, text: "Free standard delivery on orders over $200" },
          { icon: RefreshCw, text: "Free returns within 30 days" },
          { icon: Shield, text: "Authenticity guaranteed on all works" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <Icon
              size={14}
              style={{
                color: "var(--th-primary)",
                flexShrink: 0,
                marginTop: 2,
              }}
            />
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--th-muted)" }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isGourmet = theme === "gourmet";
  const isStreet = theme === "street";
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [wished, setWished] = useState(false);
  const [openAccordion, setOpenAccordion] = useState("description");
  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : null,
  );

  const handleAdd = () => {
    onAddToCart && onAddToCart({ ...product, size: selectedSize }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    showToast({ productName: product.name, size: selectedSize, qty });
  };

  return (
    <div className="min-h-screen pt-16 pb-28">
      {/* ── Back nav ── */}
      <div className="px-5 lg:px-12 py-4 max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity"
          style={{ color: "var(--th-muted)" }}
        >
          <ArrowLeft size={14} />
          Back
        </button>
      </div>

      {/* ── Desktop split / Mobile single col ── */}
      <div className="max-w-7xl mx-auto lg:px-12 lg:flex lg:gap-12 lg:items-start">
        {/* ── Image Column ── */}
        <div className="lg:w-[55%] lg:sticky lg:top-20 lg:self-start">
          {/* Main image */}
          <div
            className="relative w-full aspect-square lg:aspect-3/4 overflow-hidden"
            style={{
              backgroundColor: "var(--th-surface)",
              borderRadius: isGourmet ? "2.5rem" : isStreet ? "0" : "1.5rem",
            }}
          >
            <img
              src={product.images ? product.images[activeImg] : product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-opacity duration-300"
            />

            {/* Tag badge */}
            {product.tag && (
              <span
                className="absolute top-4 left-4 px-2 py-1 text-[9px] font-bold uppercase tracking-wider"
                style={{ backgroundColor: "var(--th-primary)", color: "#fff" }}
              >
                {product.tag}
              </span>
            )}

            {/* Action buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              {[
                {
                  Icon: Heart,
                  active: wished,
                  onClick: () => setWished((v) => !v),
                  label: "Wishlist",
                },
                {
                  Icon: Share2,
                  active: false,
                  onClick: () => {},
                  label: "Share",
                },
              ].map(({ Icon, active, onClick, label }) => (
                <button
                  key={label}
                  onClick={onClick}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm shadow hover:scale-105 transition-transform"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--th-bg) 90%, transparent)",
                    color: active ? "var(--th-primary)" : "var(--th-text)",
                  }}
                >
                  <Icon size={15} fill={active ? "currentColor" : "none"} />
                </button>
              ))}
            </div>

            {/* Dot pagination */}
            {product.images && product.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    style={{
                      backgroundColor:
                        i === activeImg
                          ? "var(--th-primary)"
                          : "rgba(255,255,255,0.5)",
                      width: i === activeImg ? "24px" : "8px",
                      transition: "all 0.3s ease",
                    }}
                    className="h-2 rounded-full"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Thumbnails row */}
          {product.images && product.images.length > 1 && (
            <div className="hidden lg:flex gap-2 mt-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="h-20 w-16 overflow-hidden shrink-0 transition-all"
                  style={{
                    outline:
                      i === activeImg
                        ? `2px solid var(--th-primary)`
                        : "2px solid transparent",
                    outlineOffset: "2px",
                    opacity: i === activeImg ? 1 : 0.6,
                  }}
                >
                  <img
                    src={img}
                    alt={`View ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Info Column ── */}
        <div className="lg:w-[45%] px-5 lg:px-0 pt-6 lg:pt-0">
          {/* Gourmet: Organic badge pills + rating */}
          {isGourmet ? (
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span
                className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider"
                style={{
                  color: "var(--th-primary)",
                  backgroundColor:
                    "color-mix(in srgb, var(--th-primary) 12%, transparent)",
                  borderRadius: "0.25rem",
                }}
              >
                Organic
              </span>
              <span
                className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider"
                style={{
                  color: "var(--th-primary)",
                  backgroundColor:
                    "color-mix(in srgb, var(--th-primary) 12%, transparent)",
                  borderRadius: "0.25rem",
                }}
              >
                Cold Pressed
              </span>
              <div className="flex items-center gap-1 ml-auto">
                <Star size={14} fill="#fbbf24" className="text-yellow-400" />
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--th-text)" }}
                >
                  4.9
                </span>
                <span className="text-xs" style={{ color: "var(--th-muted)" }}>
                  (128 reviews)
                </span>
              </div>
            </div>
          ) : (
            /* All other themes: artist + badge row */
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
                  className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--th-primary) 15%, transparent)",
                    color: "var(--th-primary)",
                  }}
                >
                  {product.tag}
                </span>
              )}
            </div>
          )}

          {/* Title */}
          <h1
            className="text-2xl lg:text-3xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "var(--th-text)" }}
          >
            {product.name}
          </h1>

          {/* Rating Summary */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={14}
                  fill={
                    s <= Math.round(product.rating)
                      ? "var(--th-primary)"
                      : "none"
                  }
                  style={{
                    color:
                      s <= Math.round(product.rating)
                        ? "var(--th-primary)"
                        : "var(--th-muted)",
                  }}
                />
              ))}
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{
                color: "var(--th-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {product.rating} ({product.reviews}{" "}
              {isStreet ? "DRIPS" : "reviews"})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--th-text)" }}
            >
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <>
                <span
                  className="text-sm line-through"
                  style={{ color: "var(--th-muted)" }}
                >
                  ${product.originalPrice}
                </span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--th-primary) 12%, transparent)",
                    color: "var(--th-primary)",
                  }}
                >
                  Save ${product.originalPrice - product.price}
                </span>
              </>
            )}
          </div>

          {/* Divider */}
          <div
            className="mb-6 h-px"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--th-primary) 15%, transparent)",
            }}
          />

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{
                    color: "var(--th-text)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {isStreet ? "SIZE" : "Select Size"}
                </p>
                {selectedSize && (
                  <span
                    className="text-xs font-bold px-2 py-0.5"
                    style={{
                      color: "var(--th-primary)",
                      backgroundColor:
                        "color-mix(in srgb, var(--th-primary) 10%, transparent)",
                      borderRadius: isStreet ? "0" : "9999px",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {selectedSize}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                    style={{
                      borderRadius: isStreet
                        ? "0"
                        : isGourmet
                          ? "9999px"
                          : "0.5rem",
                      border:
                        selectedSize === size
                          ? "2px solid var(--th-primary)"
                          : "2px solid color-mix(in srgb, var(--th-primary) 20%, transparent)",
                      backgroundColor:
                        selectedSize === size
                          ? "color-mix(in srgb, var(--th-primary) 10%, transparent)"
                          : "var(--th-surface)",
                      color:
                        selectedSize === size
                          ? "var(--th-primary)"
                          : "var(--th-text)",
                      fontFamily: isStreet ? "var(--font-mono)" : "inherit",
                      transform:
                        selectedSize === size ? "scale(1.06)" : "scale(1)",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add to Cart */}
          <div className="flex gap-3 mb-8">
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

            <button
              onClick={handleAdd}
              disabled={!product.inStock}
              className="flex-1 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.15em] rounded transition-all duration-300"
              style={{
                backgroundColor: added
                  ? "var(--th-primary-hover, var(--th-primary))"
                  : "var(--th-primary)",
                color: "#fff",
                opacity: product.inStock ? 1 : 0.5,
                boxShadow: added
                  ? "none"
                  : "0 4px 20px color-mix(in srgb, var(--th-primary) 30%, transparent)",
              }}
            >
              <ShoppingBag size={14} />
              {!product.inStock
                ? "Out of Stock"
                : added
                  ? "✓ Added to Cart!"
                  : "Add to Cart"}
            </button>
          </div>

          {/* Delivery badges */}
          <div
            className="flex items-center gap-4 p-4 rounded mb-8"
            style={{ backgroundColor: "var(--th-surface)" }}
          >
            {[
              { icon: Truck, text: "Free shipping $200+" },
              { icon: RefreshCw, text: "30-day returns" },
              { icon: Shield, text: "Authentic" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex flex-col items-center gap-1 flex-1 text-center"
              >
                <Icon size={16} style={{ color: "var(--th-primary)" }} />
                <span
                  className="text-[9px] font-semibold uppercase tracking-wider"
                  style={{ color: "var(--th-muted)" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Accordion */}
          <div
            className="border-t rounded overflow-hidden"
            style={{
              borderColor:
                "color-mix(in srgb, var(--th-primary) 15%, transparent)",
            }}
          >
            {ACCORDIONS.map(({ id, label, render }) => (
              <div
                key={id}
                className="border-b"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--th-primary) 15%, transparent)",
                }}
              >
                <button
                  onClick={() =>
                    setOpenAccordion(openAccordion === id ? null : id)
                  }
                  className="flex items-center justify-between w-full px-4 py-4 text-left"
                >
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--th-text)" }}
                  >
                    {label}
                  </span>
                  {openAccordion === id ? (
                    <ChevronUp size={14} style={{ color: "var(--th-muted)" }} />
                  ) : (
                    <ChevronDown
                      size={14}
                      style={{ color: "var(--th-muted)" }}
                    />
                  )}
                </button>
                {openAccordion === id && (
                  <div className="px-4 pb-5">{render(product)}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Reviews Section ── */}
      <Reviews
        reviews={product.mockReviews}
        onRate={(data) => console.log("New rating submitted:", data)}
      />

      {/* ── Product Suggestions ── */}
      <ProductSuggestions
        currentProductId={product.id}
        category={product.category}
        theme={product.theme}
      />
    </div>
  );
}
