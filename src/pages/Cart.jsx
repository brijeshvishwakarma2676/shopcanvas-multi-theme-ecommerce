import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowRight, Tag } from "lucide-react";

export default function Cart({ cart, onUpdateQty, onRemove }) {
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 200 ? 0 : 18;
  const discount = promoApplied ? Math.floor(subtotal * 0.1) : 0;
  const total = subtotal + shipping - discount;

  const handlePromo = () => {
    if (promoCode.toLowerCase() === "canvas10") setPromoApplied(true);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-16 pb-28 flex flex-col items-center justify-center px-6 text-center">
        <div
          className="mb-6 flex h-24 w-24 items-center justify-center rounded-full text-4xl"
          style={{ backgroundColor: "var(--th-surface)" }}
        >
          🛒
        </div>
        <h2
          className="mb-2 text-xl font-bold"
          style={{ fontFamily: "var(--font-serif)", color: "var(--th-text)" }}
        >
          Your cart is empty
        </h2>
        <p className="mb-8 text-sm" style={{ color: "var(--th-muted)" }}>
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
      {/* Header */}
      <div className="px-5 py-8">
        <p
          className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-1"
          style={{ color: "var(--th-primary)" }}
        >
          Your Selection
        </p>
        <h1
          className="text-3xl font-bold"
          style={{ fontFamily: "var(--font-serif)", color: "var(--th-text)" }}
        >
          Shopping Cart
        </h1>
        <p className="text-xs mt-1" style={{ color: "var(--th-muted)" }}>
          {cart.length} item{cart.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Cart items */}
      <div className="px-5 flex flex-col gap-4 mb-6">
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
                className="h-24 w-20 rounded object-cover"
              />
            </Link>

            {/* Info */}
            <div className="flex-1 min-w-0">
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
                  className="text-sm font-semibold leading-tight mb-2 hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--th-text)",
                  }}
                >
                  {item.name}
                </h3>
              </Link>

              <div className="flex items-center justify-between">
                {/* Stepper */}
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
                    style={{ color: "var(--th-muted)" }}
                    className="hover:opacity-60 transition-opacity"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Promo code */}
      <div className="px-5 mb-6">
        <div className="flex gap-2">
          <div
            className="flex flex-1 items-center gap-2 rounded px-3"
            style={{
              backgroundColor: "var(--th-surface)",
              border:
                "1px solid color-mix(in srgb, var(--th-primary) 30%, transparent)",
            }}
          >
            <Tag size={14} style={{ color: "var(--th-muted)" }} />
            <input
              type="text"
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              style={{
                backgroundColor: "transparent",
                color: "var(--th-text)",
                fontFamily: "var(--font-mono)",
                outline: "none",
                border: "none",
                width: "100%",
                fontSize: "0.75rem",
              }}
              className="py-3 text-xs font-mono"
            />
          </div>
          <button
            onClick={handlePromo}
            className="btn-outline text-xs"
            style={{ padding: "0 1rem", flexShrink: 0 }}
          >
            {promoApplied ? "✓" : "Apply"}
          </button>
        </div>
        {promoApplied && (
          <p
            className="mt-2 text-xs font-semibold font-mono"
            style={{ color: "var(--th-primary)" }}
          >
            10% discount applied! Try: CANVAS10
          </p>
        )}
        {!promoApplied && (
          <p
            className="mt-1.5 text-[10px]"
            style={{ color: "var(--th-muted)" }}
          >
            Try <span className="font-mono font-bold">CANVAS10</span> for 10%
            off
          </p>
        )}
      </div>

      {/* Order summary */}
      <div
        className="mx-5 rounded p-5 mb-6"
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
            value: shipping === 0 ? "Free" : `$${shipping}`,
          },
          ...(discount > 0
            ? [{ label: "Promo (CANVAS10)", value: `-$${discount}` }]
            : []),
        ].map((row) => (
          <div key={row.label} className="flex justify-between mb-2.5">
            <span className="text-xs" style={{ color: "var(--th-muted)" }}>
              {row.label}
            </span>
            <span
              className="text-xs font-semibold"
              style={{
                color: row.label.startsWith("Promo")
                  ? "var(--th-primary)"
                  : "var(--th-text)",
              }}
            >
              {row.value}
            </span>
          </div>
        ))}
        <div
          className="flex justify-between pt-3 mt-1"
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
            className="text-sm font-bold"
            style={{ color: "var(--th-text)" }}
          >
            ${total.toLocaleString()}
          </span>
        </div>

        {subtotal < 200 && (
          <p
            className="mt-3 text-[10px] text-center font-mono"
            style={{ color: "var(--th-muted)" }}
          >
            Add ${(200 - subtotal).toFixed(0)} more for free shipping
          </p>
        )}
      </div>

      {/* Checkout */}
      <div className="px-5">
        <button className="btn-primary w-full mb-3">
          Proceed to Checkout
          <ArrowRight size={14} />
        </button>
        <Link
          to="/catalog"
          className="block text-center text-xs font-semibold uppercase tracking-widest hover:opacity-60 transition-opacity"
          style={{ color: "var(--th-muted)" }}
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
