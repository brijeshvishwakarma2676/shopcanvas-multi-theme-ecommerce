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

const EMPTY_IMG =
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=60";

export default function Cart({ cart, onUpdateQty, onRemove }) {
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
      <div className="min-h-screen pt-16 pb-28 flex flex-col items-center justify-center px-6 text-center">
        <div
          className="mb-6 h-28 w-28 flex items-center justify-center rounded-full text-5xl"
          style={{ backgroundColor: "var(--th-surface)" }}
        >
          🛒
        </div>
        <h2
          className="mb-2 text-2xl font-bold"
          style={{ fontFamily: "var(--font-serif)", color: "var(--th-text)" }}
        >
          Your cart is empty
        </h2>
        <p
          className="mb-8 text-sm max-w-xs"
          style={{ color: "var(--th-muted)" }}
        >
          Add something beautiful to get started.
        </p>
        <Link to="/catalog" className="btn-primary inline-flex">
          Explore the Collection
          <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-28">
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
        </div>
      </div>

      {/* ── Desktop 2-col layout ── */}
      <div className="max-w-screen-xl mx-auto lg:px-12 lg:flex lg:gap-10 lg:items-start lg:pt-10">
        {/* ── Cart items column ── */}
        <div className="flex-1 px-5 lg:px-0 pt-6 lg:pt-0">
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 rounded"
                style={{ backgroundColor: "var(--th-surface)" }}
              >
                {/* Image */}
                <Link to={`/product/${item.id}`} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-22 rounded object-cover"
                    style={{ width: "88px" }}
                  />
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-wider mb-0.5 truncate"
                      style={{
                        color: "var(--th-primary)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {item.artist}
                    </p>
                    <Link to={`/product/${item.id}`}>
                      <h3
                        className="text-sm font-semibold leading-tight mb-1 hover:opacity-70 transition-opacity"
                        style={{
                          fontFamily: "var(--font-serif)",
                          color: "var(--th-text)",
                        }}
                      >
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-xs" style={{ color: "var(--th-muted)" }}>
                      ${item.price.toLocaleString()} each
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity stepper */}
                    <div
                      className="flex items-center rounded"
                      style={{
                        border:
                          "1px solid color-mix(in srgb, var(--th-primary) 30%, transparent)",
                      }}
                    >
                      <button
                        onClick={() =>
                          onUpdateQty(item.id, Math.max(1, item.qty - 1))
                        }
                        style={{ color: "var(--th-text)" }}
                        className="flex h-7 w-7 items-center justify-center hover:opacity-60"
                      >
                        <Minus size={11} />
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
                        className="flex h-7 w-7 items-center justify-center hover:opacity-60"
                      >
                        <Plus size={11} />
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className="text-sm font-bold"
                        style={{ color: "var(--th-text)" }}
                      >
                        ${(item.price * item.qty).toLocaleString()}
                      </span>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="hover:opacity-60 transition-opacity p-1 rounded hover:bg-red-500/10"
                        style={{ color: "var(--th-muted)" }}
                      >
                        <Trash2 size={14} />
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
        <div className="w-full lg:w-80 lg:flex-shrink-0 px-5 lg:px-0 mt-8 lg:mt-0">
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
            className="p-5 rounded mb-4"
            style={{ backgroundColor: "var(--th-surface)" }}
          >
            <h3
              className="mb-4 text-sm font-bold uppercase tracking-widest"
              style={{ color: "var(--th-text)" }}
            >
              Order Summary
            </h3>

            {[
              { label: "Subtotal", value: `$${subtotal.toLocaleString()}` },
              {
                label: "Shipping",
                value: shipping === 0 ? "Free ✓" : `$${shipping}`,
              },
              ...(discount > 0
                ? [{ label: "Promo (CANVAS10)", value: `-$${discount}` }]
                : []),
            ].map((row) => (
              <div key={row.label} className="flex justify-between mb-3">
                <span className="text-xs" style={{ color: "var(--th-muted)" }}>
                  {row.label}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{
                    color: row.label.startsWith("Promo")
                      ? "var(--th-primary)"
                      : row.label === "Shipping" && shipping === 0
                        ? "var(--th-primary)"
                        : "var(--th-text)",
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}

            <div
              className="flex justify-between pt-4 mt-1"
              style={{
                borderTop:
                  "1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)",
              }}
            >
              <span
                className="text-sm font-bold"
                style={{ color: "var(--th-text)" }}
              >
                Total
              </span>
              <span
                className="text-lg font-bold"
                style={{ color: "var(--th-primary)" }}
              >
                ${total.toLocaleString()}
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
            className="w-full flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-[0.12em] py-4 rounded transition-all duration-200"
            style={{
              backgroundColor: "var(--th-primary)",
              color: "#fff",
              boxShadow:
                "0 4px 20px color-mix(in srgb, var(--th-primary) 35%, transparent)",
            }}
          >
            <ShoppingBag size={16} />
            Proceed to Checkout
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
