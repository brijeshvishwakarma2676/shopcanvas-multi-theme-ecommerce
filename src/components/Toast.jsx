import { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/**
 * Global Toast provider + hook
 *
 * Usage:
 *   // In your root component:
 *   <ToastProvider />
 *
 *   // Anywhere in the tree:
 *   import { showToast } from "./Toast";
 *   showToast({ message: "Added!", productName: "Wabi-Sabi Vessel", size: "M" });
 */

let _setToast = null;

export function showToast(opts) {
  if (_setToast) _setToast(opts);
}

export default function Toast() {
  const { theme } = useTheme();
  const [toast, setToast] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    _setToast = (opts) => {
      setToast(opts);
      setVisible(true);
    };
    return () => {
      _setToast = null;
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(t);
  }, [visible, toast]);

  const isStreet = theme === "street";
  const isGourmet = theme === "gourmet";

  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed z-[9999] transition-all duration-500"
      style={{
        bottom: "6rem",
        right: "1.25rem",
        maxWidth: "min(340px, calc(100vw - 2.5rem))",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0) scale(1)"
          : "translateY(16px) scale(0.96)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        className={`flex items-start gap-3 px-4 py-4 shadow-2xl ${
          isStreet ? "rounded-none" : isGourmet ? "rounded-3xl" : "rounded-2xl"
        }`}
        style={{
          backgroundColor: isStreet ? "#0f0f0f" : "var(--th-surface)",
          border: isStreet
            ? "1px solid color-mix(in srgb, var(--th-primary) 35%, transparent)"
            : "1px solid color-mix(in srgb, var(--th-primary) 15%, transparent)",
          backdropFilter: "blur(16px)",
        }}
      >
        {/* Icon */}
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center ${
            isGourmet
              ? "rounded-full"
              : isStreet
                ? "rounded-none"
                : "rounded-lg"
          }`}
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--th-primary) 12%, transparent)",
          }}
        >
          <CheckCircle size={18} style={{ color: "var(--th-primary)" }} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p
            className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${isStreet ? "font-mono" : ""}`}
            style={{ color: "var(--th-primary)" }}
          >
            {isStreet
              ? "Dropped into Bag"
              : isGourmet
                ? "Added to Basket!"
                : "Added to Cart"}
          </p>
          {toast.productName && (
            <p
              className="text-sm font-semibold truncate"
              style={{
                color: isStreet ? "#fff" : "var(--th-text)",
                fontFamily: isStreet ? "var(--font-mono)" : "var(--font-serif)",
              }}
            >
              {toast.productName}
            </p>
          )}
          {toast.size && (
            <p
              className="text-[10px] font-bold uppercase tracking-wider mt-0.5"
              style={{ color: "var(--th-muted)" }}
            >
              Size: {toast.size} · Qty: {toast.qty ?? 1}
            </p>
          )}
        </div>

        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          className="shrink-0 p-0.5 opacity-40 hover:opacity-100 transition-opacity"
          aria-label="Dismiss"
          style={{ color: isStreet ? "#fff" : "var(--th-text)" }}
        >
          <X size={15} />
        </button>
      </div>

      {/* Progress bar */}
      <div
        className="mt-0 h-0.5 overflow-hidden"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--th-primary) 10%, transparent)",
          borderRadius: isStreet ? "0" : "0 0 1rem 1rem",
        }}
      >
        <div
          className="h-full"
          style={{
            backgroundColor: "var(--th-primary)",
            animation: visible ? "toast-progress 3s linear forwards" : "none",
          }}
        />
      </div>

      <style>{`
        @keyframes toast-progress {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  );
}
