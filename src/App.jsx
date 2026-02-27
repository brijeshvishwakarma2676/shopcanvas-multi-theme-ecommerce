import { useState, useEffect, useMemo } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import ThemeCustomizer from "./components/ThemeCustomizer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function ScrollHandler() {
  const location = useLocation();
  const navType = useNavigationType();
  // Memorize scroll positions for visited pages
  const scrollPositions = useMemo(() => ({}), []);

  useEffect(() => {
    const handleScroll = () => {
      scrollPositions[location.key] = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.key, scrollPositions]);

  useEffect(() => {
    if (navType === "POP" && scrollPositions[location.key] !== undefined) {
      // Restore memorized scroll position when user navigates BACK (POP)
      window.scrollTo(0, scrollPositions[location.key]);
    } else {
      // Start from the top for new navigations
      window.scrollTo(0, 0);
    }
  }, [location.key, navType, scrollPositions]);

  return null;
}

function AppInner() {
  const [cart, setCart] = useState([]);
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  // Auto-switch theme based on page for the Stitch demo
  // (users can override manually via customizer)
  // Uncomment to enable auto-theming:
  // useEffect(() => {
  //   if (location.pathname === '/') setTheme('gallery')
  //   if (location.pathname === '/catalog') setTheme('luxury')
  //   if (location.pathname.startsWith('/product')) setTheme('gourmet')
  //   if (location.pathname === '/cart') setTheme('street')
  // }, [location.pathname])

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i,
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  const updateQty = (id, qty) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div
      style={{
        minHeight: "100dvh",
        backgroundColor: "var(--th-bg)",
        color: "var(--th-text)",
      }}
    >
      <ScrollHandler />
      <Header cartCount={cartCount} />

      <main>
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route
            path="/catalog"
            element={<Catalog onAddToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail onAddToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                onUpdateQty={updateQty}
                onRemove={removeFromCart}
              />
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <BottomNav
        cartCount={cartCount}
        onCustomizerOpen={() => setCustomizerOpen(true)}
      />
      <ThemeCustomizer
        open={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </BrowserRouter>
  );
}
