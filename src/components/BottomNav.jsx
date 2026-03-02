import { Link, useLocation } from "react-router-dom";
import { Home, Search, ShoppingBag, Palette, User } from "lucide-react";

const NAV = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/catalog", icon: Search, label: "Shop" },
  { to: "/cart", icon: ShoppingBag, label: "Cart" },
  { to: "/login", icon: User, label: "Account" },
];

export default function BottomNav({ onCustomizerOpen, cartCount = 0 }) {
  const { pathname } = useLocation();

  return (
    <nav
      style={{
        backgroundColor: "color-mix(in srgb, var(--th-bg) 94%, transparent)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop:
          "1px solid color-mix(in srgb, var(--th-primary) 15%, transparent)",
      }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
    >
      {/* Safe area for phones with home indicator */}
      <div className="flex items-stretch justify-around px-1 pt-1 pb-safe pb-2">
        {NAV.map(({ to, icon: Icon, label }) => {
          const active =
            pathname === to ||
            (to === "/catalog" && pathname.startsWith("/product"));

          return (
            <Link
              key={to}
              to={to}
              className="relative flex flex-col items-center justify-center gap-0.5 flex-1 py-2 min-w-0 transition-all duration-150"
            >
              {/* Active pill background */}
              {active && (
                <span
                  className="absolute inset-x-2 inset-y-1 rounded-xl"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--th-primary) 12%, transparent)",
                  }}
                />
              )}

              {/* Icon + badge */}
              <div className="relative z-10">
                <Icon
                  size={21}
                  strokeWidth={active ? 2.5 : 1.75}
                  style={{
                    color: active ? "var(--th-primary)" : "var(--th-muted)",
                  }}
                />
                {label === "Cart" && cartCount > 0 && (
                  <span
                    className="absolute -top-1.5 -right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-bold"
                    style={{
                      backgroundColor: "var(--th-primary)",
                      color: "#fff",
                    }}
                  >
                    {cartCount > 9 ? "9+" : cartCount}
                  </span>
                )}
              </div>

              {/* Label */}
              <span
                className="relative z-10 text-[10px] font-semibold uppercase tracking-wide truncate"
                style={{
                  color: active ? "var(--th-primary)" : "var(--th-muted)",
                }}
              >
                {label}
              </span>
            </Link>
          );
        })}

        {/* Theme customizer tab */}
        <button
          onClick={onCustomizerOpen}
          className="relative flex flex-col items-center justify-center gap-0.5 flex-1 py-2 min-w-0 transition-all duration-150"
        >
          <Palette
            size={21}
            strokeWidth={1.75}
            style={{ color: "var(--th-muted)" }}
          />
          <span
            className="text-[10px] font-semibold uppercase tracking-wide"
            style={{ color: "var(--th-muted)" }}
          >
            Theme
          </span>
        </button>
      </div>
    </nav>
  );
}
