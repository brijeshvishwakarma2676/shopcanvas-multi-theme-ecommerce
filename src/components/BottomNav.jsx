import { Link, useLocation } from "react-router-dom";
import { Home, Grid3x3, ShoppingBag, Palette } from "lucide-react";

const NAV = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/catalog", icon: Grid3x3, label: "Shop" },
  { to: "/cart", icon: ShoppingBag, label: "Cart" },
];

export default function BottomNav({ onCustomizerOpen, cartCount = 0 }) {
  const { pathname } = useLocation();

  return (
    <nav
      style={{
        backgroundColor: "color-mix(in srgb, var(--th-bg) 92%, transparent)",
        backdropFilter: "blur(16px)",
        borderTop:
          "1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)",
      }}
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around px-2 py-2"
    >
      {NAV.map(({ to, icon: Icon, label }) => {
        const active = pathname === to;
        return (
          <Link
            key={to}
            to={to}
            className="flex flex-col items-center gap-0.5 px-4 py-1.5 transition-opacity"
            style={{ color: active ? "var(--th-primary)" : "var(--th-muted)" }}
          >
            <div className="relative">
              <Icon size={20} strokeWidth={active ? 2.5 : 1.75} />
              {label === "Cart" && cartCount > 0 && (
                <span
                  style={{
                    backgroundColor: "var(--th-primary)",
                    color: "#fff",
                  }}
                  className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-bold"
                >
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider">
              {label}
            </span>
          </Link>
        );
      })}

      {/* Theme customizer */}
      <button
        onClick={onCustomizerOpen}
        className="flex flex-col items-center gap-0.5 px-4 py-1.5 transition-opacity"
        style={{ color: "var(--th-muted)" }}
      >
        <Palette size={20} strokeWidth={1.75} />
        <span className="text-[10px] font-semibold uppercase tracking-wider">
          Theme
        </span>
      </button>
    </nav>
  );
}
