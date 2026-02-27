import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Header({ cartCount = 0, onSearchOpen }) {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const isStreet = theme === "street";

  return (
    <header
      style={{
        backgroundColor: scrolled
          ? `color-mix(in srgb, var(--th-bg) 92%, transparent)`
          : `color-mix(in srgb, var(--th-bg) 80%, transparent)`,
        backdropFilter: "blur(16px)",
        borderBottom:
          "1px solid color-mix(in srgb, var(--th-primary) 25%, transparent)",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 py-4">
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          style={{ color: "var(--th-text)" }}
          className="transition-opacity hover:opacity-60"
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: isStreet ? "var(--font-mono)" : "var(--font-serif)",
            color: "var(--th-text)",
            letterSpacing: isStreet ? "0.15em" : "normal",
          }}
          className="text-2xl font-bold tracking-tight"
        >
          {isStreet ? "SHOPCANVAS" : "ShopCanvas"}
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onSearchOpen}
            style={{ color: "var(--th-text)" }}
            className="transition-opacity hover:opacity-60"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Link to="/cart" className="relative" aria-label="Cart">
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
          </Link>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav
          style={{
            borderTop:
              "1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)",
            backgroundColor: "var(--th-bg)",
          }}
          className="px-6 pb-6 pt-4"
        >
          {[
            { to: "/", label: "Home" },
            { to: "/catalog", label: "Shop All" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color:
                  location.pathname === link.to
                    ? "var(--th-primary)"
                    : "var(--th-text)",
                fontFamily: "var(--font-display)",
              }}
              className="block py-3 text-sm font-semibold uppercase tracking-widest"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
