import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  Tag,
  ShoppingBag,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const EMPTY_IMG =
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=60";

export default function Cart({ cart, onUpdateQty, onRemove }) {
  const { theme } = useTheme();
  const isStreet = theme === "street";
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 200 ? 0 : 18;
  const discount = promoApplied ? Math.floor(subtotal * 0.1) : 0;
  const total = subtotal + shipping - discount;

  const handlePromo = () => {
    if (promoCode.toLowerCase() === "canvas10") {
      setPromoApplied(true);
      setPromoError(false);
    } else {
      setPromoError(true);
    }
  };

  /* ── Empty cart ── */
  if (cart.length === 0) {
    return (
      <div
        className="min-h-screen pt-16 pb-28 flex flex-col items-center justify-center px-6 text-center"
        style={{ backgroundColor: isStreet ? "var(--th-bg)" : undefined }}
      >
        <div
          className="mb-6 h-28 w-28 flex items-center justify-center text-5xl"
          style={{
            backgroundColor: "var(--th-surface)",
            borderRadius: isStreet ? "0" : "9999px",
          }}
        >
          🛒
        </div>
        <h2
          className="mb-2 text-2xl font-bold"
          style={{
            fontFamily: isStreet ? "var(--font-mono)" : "var(--font-serif)",
            color: "var(--th-text)",
            textTransform: isStreet ? "uppercase" : undefined,
            letterSpacing: isStreet ? "-0.02em" : undefined,
          }}
        >
          {isStreet ? "CART IS EMPTY" : "Your cart is empty"}
        </h2>
        <p
          className="mb-8 text-sm max-w-xs"
          style={{ color: "var(--th-muted)" }}
        >
          {isStreet
            ? "ADD SOME DRIP TO GET STARTED."
            : "Add something beautiful to get started."}
        </p>
        <Link to="/catalog" className="btn-primary inline-flex">
          {isStreet ? "SHOP NOW " : "Explore the Collection "}
          <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-16 pb-28"
      style={{ backgroundColor: isStreet ? "var(--th-bg)" : undefined }}
    >
      {/* ── Page Header ── */}
      <div
        className="px-5 lg:px-12 py-8 lg:py-10 border-b"
        style={{
          borderColor: isStreet
            ? "rgba(255,255,255,0.08)"
            : "color-mix(in srgb, var(--th-primary) 15%, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {isStreet ? (
            <div className="flex items-center justify-between">
              <h1
                className="text-2xl font-extrabold tracking-tight"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--th-text)",
                }}
              >
                YOUR CART ({cart.reduce((s, i) => s + i.qty, 0)})
              </h1>
              <button
                onClick={() => cart.forEach((item) => onRemove(item.id))}
                className="text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
                style={{ color: "var(--th-muted)" }}
              >
                CLEAR
              </button>
            </div>
          ) : (
            <>
              <p
                className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-1"
                style={{ color: "var(--th-primary)" }}
              >
                Your Selection
              </p>
              <div className="flex items-end justify-between">
                <h1
                  className="text-3xl lg:text-4xl font-bold"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--th-text)",
                  }}
                >
                  Shopping Cart
                </h1>
                <p className="text-xs" style={{ color: "var(--th-muted)" }}>
                  {cart.length} item{cart.length !== 1 ? "s" : ""}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Desktop 2-col layout ── */}
      <div className="max-w-7xl mx-auto lg:px-12 lg:flex lg:gap-10 lg:items-start lg:pt-10">
        {/* ── Cart items column ── */}
        <div className="flex-1 px-5 lg:px-0 pt-6 lg:pt-0">
          <div
            className="flex flex-col"
            style={{ gap: isStreet ? "0" : "1rem" }}
          >
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4"
                style={{
                  backgroundColor: isStreet
                    ? "var(--th-surface)"
                    : "var(--th-surface)",
                  borderBottom: isStreet
                    ? "1px solid rgba(255,255,255,0.06)"
                    : undefined,
                  borderRadius: isStreet ? "0" : undefined,
                }}
              >
                {/* Image */}
                <Link to={`/product/${item.id}`} className="shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 object-cover"
                    style={{
                      width: "80px",
                      borderRadius: isStreet ? "0" : "0.25rem",
                    }}
                  />
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <Link to={`/product/${item.id}`}>
                        <h3
                          className="text-sm font-bold leading-tight mb-1 hover:opacity-70 transition-opacity truncate"
                          style={{
                            fontFamily: isStreet
                              ? "var(--font-mono)"
                              : "var(--font-serif)",
                            color: "var(--th-text)",
                            textTransform: isStreet ? "uppercase" : undefined,
                            letterSpacing: isStreet ? "-0.01em" : undefined,
                          }}
                        >
                          {isStreet
                            ? item.name
                                .toUpperCase()
                                .replace(/ /g, " // ")
                                .slice(0, item.name.toUpperCase().length)
                            : item.name}
                        </h3>
                      </Link>
                      {isStreet ? (
                        <p
                          className="text-[10px] uppercase tracking-wider"
                          style={{
                            color: "var(--th-muted)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {item.size && `SIZE: ${item.size}`}
                          {item.size && item.material && " ·  "}
                          {item.material && item.material.split(",")[0]}
                        </p>
                      ) : (
                        <div className="flex flex-wrap items-center gap-2 mt-0.5">
                          <p
                            className="text-[10px] font-bold uppercase tracking-wider"
                            style={{
                              color: "var(--th-primary)",
                              fontFamily: "var(--font-mono)",
                            }}
                          >
                            {item.artist}
                          </p>
                          {item.size && (
                            <span
                              className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                              style={{
                                color: "var(--th-text)",
                                backgroundColor:
                                  "color-mix(in srgb, var(--th-primary) 8%, transparent)",
                              }}
                            >
                              {item.size}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="shrink-0 hover:opacity-60 transition-opacity"
                      style={{ color: "var(--th-muted)" }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Price */}
                    <span
                      className="font-bold"
                      style={{
                        color: isStreet
                          ? "var(--th-primary)"
                          : "var(--th-text)",
                        fontFamily: isStreet ? "var(--font-mono)" : undefined,
                        fontSize: isStreet ? "1.05rem" : "0.875rem",
                      }}
                    >
                      {isStreet
                        ? `$${item.price.toFixed(2)}`
                        : `$${(item.price * item.qty).toLocaleString()}`}
                    </span>

                    {/* Quantity stepper */}
                    <div
                      className="flex items-center"
                      style={{
                        border: isStreet
                          ? "1px solid rgba(255,255,255,0.15)"
                          : "1px solid color-mix(in srgb, var(--th-primary) 30%, transparent)",
                        borderRadius: isStreet ? "0" : "0.25rem",
                      }}
                    >
                      <button
                        onClick={() =>
                          onUpdateQty(item.id, Math.max(1, item.qty - 1))
                        }
                        style={{ color: "var(--th-text)" }}
                        className="flex h-8 w-8 items-center justify-center hover:opacity-60"
                      >
                        <Minus size={12} />
                      </button>
                      <span
                        className="w-8 text-center text-xs font-bold"
                        style={{
                          color: "var(--th-text)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {item.qty}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty + 1)}
                        style={{ color: "var(--th-text)" }}
                        className="flex h-8 w-8 items-center justify-center hover:opacity-60"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Continue shopping link (mobile only) */}
          <div className="mt-6 lg:hidden">
            <Link
              to="/catalog"
              className="text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
              style={{ color: "var(--th-muted)" }}
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>

        {/* ── Summary sidebar ── */}
        <div className="w-full lg:w-80 lg:shrink-0 px-5 lg:px-0 mt-8 lg:mt-0">
          {/* Promo code */}
          <div
            className="p-4 rounded mb-4"
            style={{ backgroundColor: "var(--th-surface)" }}
          >
            <p
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--th-muted)" }}
            >
              Promo Code
            </p>
            <div className="flex gap-2">
              <div
                className="flex flex-1 items-center gap-2 rounded px-3"
                style={{
                  backgroundColor: "var(--th-bg)",
                  border: `1px solid ${
                    promoError
                      ? "rgba(239,68,68,0.5)"
                      : "color-mix(in srgb, var(--th-primary) 30%, transparent)"
                  }`,
                }}
              >
                <Tag size={13} style={{ color: "var(--th-muted)" }} />
                <input
                  type="text"
                  placeholder="Enter code…"
                  value={promoCode}
                  onChange={(e) => {
                    setPromoCode(e.target.value);
                    setPromoError(false);
                  }}
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--th-text)",
                    fontFamily: "var(--font-mono)",
                    outline: "none",
                    border: "none",
                    width: "100%",
                    fontSize: "0.75rem",
                  }}
                  className="py-2.5"
                />
              </div>
              <button
                onClick={handlePromo}
                className="btn-outline text-xs px-3 flex-shrink-0"
                style={{ padding: "0 0.75rem" }}
              >
                {promoApplied ? "✓" : "Apply"}
              </button>
            </div>
            {promoApplied && (
              <p
                className="mt-2 text-xs font-semibold font-mono"
                style={{ color: "var(--th-primary)" }}
              >
                10% discount applied!
              </p>
            )}
            {promoError && (
              <p
                className="mt-2 text-xs font-semibold"
                style={{ color: "rgba(239,68,68,0.9)" }}
              >
                Invalid code. Try <span className="font-mono">CANVAS10</span>
              </p>
            )}
            {!promoApplied && !promoError && (
              <p
                className="mt-1.5 text-[10px]"
                style={{ color: "var(--th-muted)" }}
              >
                Try <span className="font-mono font-bold">CANVAS10</span> for
                10% off
              </p>
            )}
          </div>

          {/* Order summary */}
          <div
            className="p-5 mb-4"
            style={{
              backgroundColor: "var(--th-surface)",
              borderRadius: isStreet ? "0" : "0.25rem",
            }}
          >
            <h3
              className="mb-4 text-sm font-bold uppercase tracking-widest"
              style={{
                color: "var(--th-text)",
                fontFamily: isStreet ? "var(--font-mono)" : undefined,
                letterSpacing: isStreet ? "0.12em" : undefined,
              }}
            >
              {isStreet ? "ORDER SUMMARY" : "Order Summary"}
            </h3>

            {[
              {
                label: isStreet ? "Subtotal" : "Subtotal",
                value: `$${subtotal.toLocaleString()}`,
              },
              {
                label: isStreet ? "Shipping" : "Shipping",
                value: shipping === 0 ? "Free ✓" : `$${shipping}`,
              },
              ...(discount > 0
                ? [
                    {
                      label: isStreet ? "Promo" : "Promo (CANVAS10)",
                      value: `-$${discount}`,
                    },
                  ]
                : []),
            ].map((row) => (
              <div
                key={row.label}
                className="flex justify-between mb-3"
                style={{
                  paddingBottom: isStreet ? "0.75rem" : undefined,
                  borderBottom: isStreet
                    ? "1px solid rgba(255,255,255,0.06)"
                    : undefined,
                }}
              >
                <span
                  className="text-xs"
                  style={{
                    color: "var(--th-muted)",
                    fontFamily: isStreet ? "var(--font-mono)" : undefined,
                    textTransform: isStreet ? "uppercase" : undefined,
                    letterSpacing: isStreet ? "0.08em" : undefined,
                  }}
                >
                  {row.label}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{
                    color: row.label.toLowerCase().includes("promo")
                      ? "var(--th-primary)"
                      : row.label.toLowerCase() === "shipping" && shipping === 0
                        ? "var(--th-primary)"
                        : "var(--th-text)",
                    fontFamily: isStreet ? "var(--font-mono)" : undefined,
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}

            <div
              className="flex justify-between pt-4 mt-1"
              style={{
                borderTop: isStreet
                  ? "2px solid rgba(255,255,255,0.12)"
                  : "1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)",
              }}
            >
              <span
                className="font-bold"
                style={{
                  color: "var(--th-text)",
                  fontSize: isStreet ? "0.9rem" : "0.875rem",
                  fontFamily: isStreet ? "var(--font-mono)" : undefined,
                  textTransform: isStreet ? "uppercase" : undefined,
                  letterSpacing: isStreet ? "0.1em" : undefined,
                }}
              >
                TOTAL
              </span>
              <span
                className="font-bold"
                style={{
                  color: "var(--th-primary)",
                  fontSize: isStreet ? "1.35rem" : "1.125rem",
                  fontFamily: isStreet ? "var(--font-mono)" : undefined,
                }}
              >
                ${total.toFixed(2)}
              </span>
            </div>

            {subtotal < 200 && (
              <div
                className="mt-4 p-3 rounded text-center"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--th-primary) 8%, transparent)",
                }}
              >
                <p
                  className="text-[10px] font-semibold font-mono"
                  style={{ color: "var(--th-primary)" }}
                >
                  Add ${(200 - subtotal).toFixed(0)} more for free shipping
                </p>
                <div
                  className="mt-2 h-1 rounded-full overflow-hidden"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--th-primary) 15%, transparent)",
                  }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min((subtotal / 200) * 100, 100)}%`,
                      backgroundColor: "var(--th-primary)",
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <button
            className="w-full flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-[0.12em] py-4 transition-all duration-200"
            style={{
              backgroundColor: "var(--th-primary)",
              color: isStreet ? "#000" : "#fff",
              borderRadius: isStreet ? "0" : "0.25rem",
              fontFamily: isStreet ? "var(--font-mono)" : undefined,
              letterSpacing: isStreet ? "0.15em" : "0.12em",
              boxShadow: isStreet
                ? "none"
                : "0 4px 20px color-mix(in srgb, var(--th-primary) 35%, transparent)",
            }}
          >
            {!isStreet && <ShoppingBag size={16} />}
            {isStreet ? "CHECKOUT →" : "Proceed to Checkout"}
          </button>

          <Link
            to="/catalog"
            className="mt-4 block text-center text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity"
            style={{ color: "var(--th-muted)" }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
