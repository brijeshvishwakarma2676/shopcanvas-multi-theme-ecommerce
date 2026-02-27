import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const THEMES = ["gallery", "luxury", "gourmet", "street"];

export const THEME_META = {
  gallery: { label: "Art Gallery", color: "#c8a96f", bg: "#f8f7f6" },
  luxury: { label: "Luxury Boutique", color: "#9B6BB5", bg: "#F5F2F7" },
  gourmet: { label: "Gourmet Market", color: "#5A8A4A", bg: "#F2F7F0" },
  street: { label: "Street Brand", color: "#E8FF00", bg: "#0F0F0F" },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("shopcanvas-theme") || "gallery";
  });
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("shopcanvas-dark") === "true";
  });

  useEffect(() => {
    localStorage.setItem("shopcanvas-theme", theme);
    localStorage.setItem("shopcanvas-dark", dark);

    const root = document.documentElement;
    // Remove all theme attrs
    root.removeAttribute("data-theme");
    root.classList.remove("dark");

    if (theme !== "gallery") root.setAttribute("data-theme", theme);
    if (dark || theme === "street") root.classList.add("dark");
  }, [theme, dark]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
