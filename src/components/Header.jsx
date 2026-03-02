import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  User,
  Heart,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/catalog", label: "Shop All" },
];

export default function Header({ cartCount = 0, onSearchOpen }) {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const location = useLocation();

  const isStreet = theme === "street";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  const logoStyle = {
    fontFamily: isStreet ? "var(--font-mono)" : "var(--font-serif)",
    color: "var(--th-text)",
    letterSpacing: isStreet ? "0.12em" : "normal",
  };

  return (
    <>
      <header
        style={{
          backgroundColor: scrolled
            ? `color-mix(in srgb, var(--th-bg) 96%, transparent)`
            : `color-mix(in srgb, var(--th-bg) 82%, transparent)`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom:
            "1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)",
          transition: "background-color 0.3s ease",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex h-16 items-center justify-between gap-6">
            {/* ── LEFT: Hamburger (mobile) + Logo ── */}
            <div className="flex items-center gap-3">
              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                style={{ color: "var(--th-text)" }}
                className="lg:hidden p-1 hover:opacity-60 transition-opacity"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              {/* Logo */}
              <Link
                to="/"
                style={logoStyle}
                className="text-xl font-bold shrink-0"
              >
                {isStreet ? "SHOPCANVAS" : "ShopCanvas"}
              </Link>
            </div>

            {/* ── CENTER: Desktop nav links ── */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {NAV_LINKS.map(({ to, label }) => {
                const active =
                  location.pathname === to ||
                  (to === "/catalog" &&
                    location.pathname.startsWith("/product"));
                return (
                  <Link
                    key={to}
                    to={to}
                    className="relative px-4 py-2 text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:opacity-70"
                    style={{
                      color: active ? "var(--th-primary)" : "var(--th-text)",
                    }}
                  >
                    {label}
                    {active && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                        style={{ backgroundColor: "var(--th-primary)" }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── RIGHT: Desktop search bar + icons ── */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Desktop inline search */}
              <div className="hidden lg:flex items-center gap-2">
                {searchOpen ? (
                  <div
                    className="flex items-center gap-2 rounded-full px-4 py-1.5 w-56 transition-all duration-200"
                    style={{
                      backgroundColor: "var(--th-surface)",
                      border:
                        "1px solid color-mix(in srgb, var(--th-primary) 40%, transparent)",
                    }}
                  >
                    <Search size={14} style={{ color: "var(--th-muted)" }} />
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="Search products…"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Escape" && setSearchOpen(false)
                      }
                      className="flex-1 bg-transparent text-xs outline-none"
                      style={{ color: "var(--th-text)" }}
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        style={{ color: "var(--th-muted)" }}
                      >
                        <X size={12} />
                      </button>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all hover:opacity-80"
                    style={{
                      backgroundColor: "var(--th-surface)",
                      color: "var(--th-muted)",
                      border:
                        "1px solid color-mix(in srgb, var(--th-primary) 15%, transparent)",
                    }}
                  >
                    <Search size={13} />
                    <span>Search…</span>
                  </button>
                )}
              </div>

              {/* Mobile search icon */}
              <button
                onClick={() => setSearchOpen((v) => !v)}
                style={{ color: "var(--th-text)" }}
                className="lg:hidden p-1 hover:opacity-60 transition-opacity"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Wishlist */}
              <Link
                to="/catalog"
                aria-label="Wishlist"
                className="hidden lg:flex p-1.5 rounded-full hover:opacity-70 transition-opacity"
                style={{ color: "var(--th-text)" }}
              >
                <Heart size={19} />
              </Link>

              {/* Account */}
              <Link
                to="/login"
                aria-label="Account"
                className="p-1.5 rounded-full hover:opacity-70 transition-opacity"
                style={{ color: "var(--th-text)" }}
              >
                <User size={20} />
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative flex items-center gap-1.5 hover:opacity-70 transition-opacity"
                aria-label="Cart"
              >
                <div className="relative">
                  <ShoppingBag size={20} style={{ color: "var(--th-text)" }} />
                  {cartCount > 0 && (
                    <span
                      style={{
                        backgroundColor: "var(--th-primary)",
                        color: isStreet ? "#000" : "#fff",
                      }}
                      className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold"
                    >
                      {cartCount}
                    </span>
                  )}
                </div>
                {/* Desktop cart label */}
                {cartCount > 0 && (
                  <span
                    className="hidden lg:inline text-xs font-bold whitespace-nowrap"
                    style={{ color: "var(--th-text)" }}
                  >
                    Cart ({cartCount})
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile search bar — expands below header */}
          {searchOpen && (
            <div
              className="lg:hidden pb-3 -mx-5 px-5 border-t"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--th-primary) 15%, transparent)",
              }}
            >
              <div
                className="flex items-center gap-3 rounded-full px-4 py-2.5 mt-3"
                style={{
                  backgroundColor: "var(--th-surface)",
                  border:
                    "1px solid color-mix(in srgb, var(--th-primary) 30%, transparent)",
                }}
              >
                <Search size={15} style={{ color: "var(--th-muted)" }} />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search products…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-sm outline-none"
                  style={{ color: "var(--th-text)" }}
                  autoFocus
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery("")}
                    style={{ color: "var(--th-muted)" }}
                  >
                    <X size={14} />
                  </button>
                ) : (
                  <button
                    onClick={() => setSearchOpen(false)}
                    style={{ color: "var(--th-muted)" }}
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile full-screen nav drawer */}
        {menuOpen && (
          <nav
            style={{
              backgroundColor: "var(--th-bg)",
              borderTop:
                "1px solid color-mix(in srgb, var(--th-primary) 15%, transparent)",
            }}
            className="lg:hidden"
          >
            <div className="px-6 pt-4 pb-6">
              {NAV_LINKS.map(({ to, label }) => {
                const active = location.pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    className="flex items-center justify-between py-4 border-b"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--th-primary) 10%, transparent)",
                      color: active ? "var(--th-primary)" : "var(--th-text)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    <span className="text-lg font-semibold">{label}</span>
                    <ChevronRight
                      size={16}
                      style={{ color: "var(--th-muted)" }}
                    />
                  </Link>
                );
              })}
              <Link
                to="/login"
                className="flex items-center justify-between py-4"
                style={{
                  color: "var(--th-text)",
                  fontFamily: "var(--font-display)",
                }}
              >
                <span className="text-lg font-semibold">Account</span>
                <ChevronRight size={16} style={{ color: "var(--th-muted)" }} />
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
