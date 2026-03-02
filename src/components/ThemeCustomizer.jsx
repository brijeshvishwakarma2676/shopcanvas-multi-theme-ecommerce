import { useState } from "react";
import { X, Moon, Sun, Palette, Tag, Edit3 } from "lucide-react";
import { useTheme, THEMES, THEME_META } from "../context/ThemeContext";

const THEME_COLORS = {
  gallery: {
    bg: ["#f8f7f6", "#fff"],
    accent: ["#c8a96f", "#1e1a14"],
    btn: ["#161513", "#c8a96f"],
  },
  luxury: {
    bg: ["#F5F2F7", "#fff"],
    accent: ["#9B6BB5", "#c8a96f"],
    btn: ["#9B6BB5", "#fff"],
  },
  gourmet: {
    bg: ["#f2f7f0", "#fff"],
    accent: ["#5a8c4a", "#c8a96f"],
    btn: ["#5a8c4a", "#fff"],
  },
  street: {
    bg: ["#0f0f0f", "#1a1a1a"],
    accent: ["#eaff00", "#fff"],
    btn: ["#eaff00", "#0f0f0f"],
  },
};

export default function ThemeCustomizer({ open, onClose }) {
  const { theme, setTheme, dark, setDark } = useTheme();
  const [headline, setHeadline] = useState("Autumn '24 Collection");
  const [primaryCat, setPrimaryCat] = useState("Featured Products");
  const [secondaryCat, setSecondaryCat] = useState("New Arrivals");
  const [selectedBg, setSelectedBg] = useState(0);
  const [selectedAccent, setSelectedAccent] = useState(0);
  const [selectedBtn, setSelectedBtn] = useState(0);

  const colors = THEME_COLORS[theme] || THEME_COLORS.gallery;

  const inputStyle = {
    backgroundColor:
      "color-mix(in srgb, var(--th-primary) 6%, var(--th-surface))",
    color: "var(--th-text)",
    border: "1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)",
    borderRadius: "0.5rem",
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          style={{ animation: "fadeIn 0.2s ease" }}
        />
      )}

      {/* ── Side Drawer (desktop) / Bottom Sheet (mobile) ── */}
      <div
        className="fixed z-50 shadow-2xl flex flex-col bottom-0 left-0 right-0 rounded-t-2xl max-h-[85vh] lg:bottom-0 lg:top-0 lg:left-auto lg:right-0 lg:h-full lg:w-80 lg:rounded-none lg:rounded-l-2xl lg:max-h-full"
        style={{
          backgroundColor: "var(--th-surface)",
          color: "var(--th-text)",
          borderTop:
            "1px solid color-mix(in srgb, var(--th-primary) 30%, transparent)",
          borderLeft:
            "1px solid color-mix(in srgb, var(--th-primary) 15%, transparent)",
          transform: open ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* Drawer Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b shrink-0"
          style={{
            borderColor:
              "color-mix(in srgb, var(--th-primary) 20%, transparent)",
          }}
        >
          <button
            onClick={onClose}
            className="hover:opacity-60 transition-opacity p-1"
            style={{ color: "var(--th-text)" }}
          >
            <X size={22} />
          </button>
          <h2
            className="text-base font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Theme Customizer
          </h2>
          <button
            className="text-sm font-bold uppercase tracking-wider hover:opacity-70 transition-opacity"
            style={{ color: "var(--th-primary)" }}
            onClick={onClose}
          >
            Save
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8">
          {/* ── Section 1: Preset Skins ── */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Palette size={16} style={{ color: "var(--th-primary)" }} />
              <h3
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--th-text)" }}
              >
                Preset Skins
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {THEMES.map((t) => {
                const meta = THEME_META[t];
                const active = theme === t;
                return (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className="px-4 py-2 text-sm font-medium transition-all"
                    style={{
                      borderRadius: "9999px",
                      border: active
                        ? `1.5px solid var(--th-primary)`
                        : "1.5px solid color-mix(in srgb, var(--th-primary) 20%, transparent)",
                      backgroundColor: active
                        ? "color-mix(in srgb, var(--th-primary) 12%, var(--th-surface))"
                        : "var(--th-surface)",
                      color: active ? "var(--th-primary)" : "var(--th-muted)",
                      fontWeight: active ? 700 : 500,
                    }}
                  >
                    {meta.label}
                  </button>
                );
              })}
            </div>
          </section>

          {/* ── Section 2: Custom Colors ── */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="size-4 rounded-full"
                style={{ backgroundColor: "var(--th-primary)" }}
              />
              <h3
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--th-text)" }}
              >
                Custom Colors
              </h3>
            </div>
            <div className="space-y-4">
              {/* Background */}
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--th-muted)" }}
                >
                  Background
                </span>
                <div className="flex gap-2">
                  {colors.bg.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedBg(i)}
                      className="size-8 rounded-full border transition-all"
                      style={{
                        backgroundColor: color,
                        borderColor:
                          selectedBg === i
                            ? "var(--th-primary)"
                            : "color-mix(in srgb, var(--th-text) 20%, transparent)",
                        boxShadow:
                          selectedBg === i
                            ? `0 0 0 2px var(--th-surface), 0 0 0 3.5px var(--th-primary)`
                            : "none",
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Accent */}
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--th-muted)" }}
                >
                  Accent
                </span>
                <div className="flex gap-2">
                  {colors.accent.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedAccent(i)}
                      className="size-8 rounded-full border transition-all"
                      style={{
                        backgroundColor: color,
                        borderColor:
                          selectedAccent === i
                            ? "var(--th-primary)"
                            : "color-mix(in srgb, var(--th-text) 20%, transparent)",
                        boxShadow:
                          selectedAccent === i
                            ? `0 0 0 2px var(--th-surface), 0 0 0 3.5px var(--th-primary)`
                            : "none",
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Button */}
              <div className="flex items-center justify-between">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--th-muted)" }}
                >
                  Button
                </span>
                <div className="flex gap-2">
                  {colors.btn.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedBtn(i)}
                      className="size-8 rounded-full border transition-all"
                      style={{
                        backgroundColor: color,
                        borderColor:
                          selectedBtn === i
                            ? "var(--th-primary)"
                            : "color-mix(in srgb, var(--th-text) 20%, transparent)",
                        boxShadow:
                          selectedBtn === i
                            ? `0 0 0 2px var(--th-surface), 0 0 0 3.5px var(--th-primary)`
                            : "none",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 3: Store Labels ── */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Edit3 size={16} style={{ color: "var(--th-primary)" }} />
              <h3
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "var(--th-text)" }}
              >
                Store Labels
              </h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  label: "Hero Headline",
                  value: headline,
                  setter: setHeadline,
                  icon: "T",
                },
                {
                  label: "Primary Category",
                  value: primaryCat,
                  setter: setPrimaryCat,
                  icon: "⊞",
                },
                {
                  label: "Secondary Category",
                  value: secondaryCat,
                  setter: setSecondaryCat,
                  icon: "⊞",
                },
              ].map(({ label, value, setter, icon }) => (
                <div key={label} className="space-y-1.5">
                  <label
                    className="text-[10px] font-bold uppercase tracking-wide"
                    style={{ color: "var(--th-muted)" }}
                  >
                    {label}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => setter(e.target.value)}
                      className="w-full h-11 outline-none text-sm pl-3 pr-10 transition-all"
                      style={{
                        ...inputStyle,
                        paddingLeft: "0.75rem",
                        paddingRight: "2.5rem",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--th-primary)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor =
                          "color-mix(in srgb, var(--th-primary) 20%, transparent)")
                      }
                    />
                    <span
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold"
                      style={{ color: "var(--th-muted)" }}
                    >
                      {icon}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Dark mode toggle ── */}
          <div
            className="flex items-center justify-between pt-5"
            style={{
              borderTop:
                "1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--th-primary) 10%, transparent)",
                }}
              >
                {dark || theme === "street" ? (
                  <Moon size={16} style={{ color: "var(--th-primary)" }} />
                ) : (
                  <Sun size={16} style={{ color: "var(--th-primary)" }} />
                )}
              </div>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {dark || theme === "street" ? "Dark Mode" : "Light Mode"}
                </p>
                {theme === "street" && (
                  <p
                    className="text-[10px] uppercase tracking-wider font-bold opacity-50"
                    style={{ color: "var(--th-primary)" }}
                  >
                    Street is dark only
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => theme !== "street" && setDark((v) => !v)}
              disabled={theme === "street"}
              style={{
                backgroundColor:
                  dark || theme === "street"
                    ? "var(--th-primary)"
                    : "color-mix(in srgb, var(--th-text) 10%, transparent)",
                opacity: theme === "street" ? 0.6 : 1,
                cursor: theme === "street" ? "not-allowed" : "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              className="relative h-7 w-12 rounded-full ring-2 ring-transparent hover:ring-primary/20 transition-all"
            >
              <span
                style={{
                  left: dark || theme === "street" ? "24px" : "4px",
                  transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  backgroundColor:
                    dark || theme === "street"
                      ? theme === "street"
                        ? "#000"
                        : "#fff"
                      : "#fff",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
                className="absolute top-1 h-5 w-5 rounded-full shadow-md"
              />
            </button>
          </div>

          {/* Reset */}
          <div
            className="pt-2"
            style={{
              borderTop:
                "1px solid color-mix(in srgb, var(--th-primary) 10%, transparent)",
            }}
          >
            <button
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium rounded-lg transition-colors hover:text-red-500 hover:bg-red-50"
              style={{ color: "var(--th-muted)" }}
              onClick={() => {
                setTheme("gallery");
                setDark(false);
              }}
            >
              <span className="text-lg">↺</span>
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity:0 } to { opacity:1 } }`}</style>
    </>
  );
}
