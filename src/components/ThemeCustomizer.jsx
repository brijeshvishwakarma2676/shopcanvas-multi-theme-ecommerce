import { X, Moon, Sun } from "lucide-react";
import { useTheme, THEMES, THEME_META } from "../context/ThemeContext";

export default function ThemeCustomizer({ open, onClose }) {
  const { theme, setTheme, dark, setDark } = useTheme();

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

      {/* Drawer */}
      <div
        style={{
          backgroundColor: "var(--th-surface)",
          color: "var(--th-text)",
          borderTop:
            "1px solid color-mix(in srgb, var(--th-primary) 30%, transparent)",
          transform: open ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
        className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl px-6 pb-10 pt-5 shadow-2xl"
      >
        {/* Handle */}
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-gray-300/60" />

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2
              className="text-base font-bold uppercase tracking-widest"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Theme Customizer
            </h2>
            <p
              className="text-xs mt-0.5"
              style={{
                color: "var(--th-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Visual identity switcher
            </p>
          </div>
          <button
            onClick={onClose}
            style={{ color: "var(--th-muted)" }}
            className="hover:opacity-60"
          >
            <X size={20} />
          </button>
        </div>

        {/* Theme swatches */}
        <p
          className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em]"
          style={{ color: "var(--th-muted)" }}
        >
          Choose Theme
        </p>
        <div className="mb-6 grid grid-cols-2 gap-3">
          {THEMES.map((t) => {
            const meta = THEME_META[t];
            const active = theme === t;
            return (
              <button
                key={t}
                onClick={() => setTheme(t)}
                style={{
                  border: active
                    ? `2px solid ${meta.color}`
                    : "2px solid transparent",
                  backgroundColor: meta.bg,
                  transition: "all 0.2s ease",
                  outline: active ? `4px solid ${meta.color}30` : "none",
                }}
                className="relative flex items-center gap-3 rounded-lg px-4 py-3 text-left"
              >
                <span
                  style={{ backgroundColor: meta.color }}
                  className="h-6 w-6 flex-shrink-0 rounded-full shadow-sm"
                />
                <div>
                  <p
                    className="text-xs font-bold"
                    style={{
                      color: t === "street" ? "#f0f0f0" : "#1a1a1a",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {meta.label}
                  </p>
                  <p
                    className="text-[10px] font-mono"
                    style={{ color: t === "street" ? "#888" : "#666" }}
                  >
                    {meta.color}
                  </p>
                </div>
                {active && (
                  <span
                    style={{ backgroundColor: meta.color }}
                    className="absolute right-3 top-3 h-2 w-2 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dark mode toggle */}
        <div
          style={{
            borderTop:
              "1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)",
          }}
          className="flex items-center justify-between pt-4"
        >
          <div className="flex items-center gap-3">
            {dark ? (
              <Moon size={18} style={{ color: "var(--th-primary)" }} />
            ) : (
              <Sun size={18} style={{ color: "var(--th-primary)" }} />
            )}
            <p
              className="text-sm font-semibold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {dark ? "Dark Mode" : "Light Mode"}
            </p>
          </div>
          <button
            onClick={() => setDark((v) => !v)}
            style={{
              backgroundColor: dark ? "var(--th-primary)" : "#e5e7eb",
              transition: "background-color 0.2s ease",
            }}
            className="relative h-7 w-12 rounded-full"
          >
            <span
              style={{
                transform: dark ? "translateX(20px)" : "translateX(2px)",
                transition: "transform 0.2s ease",
                backgroundColor: dark ? "#000" : "#fff",
              }}
              className="absolute top-0.5 h-6 w-6 rounded-full shadow"
            />
          </button>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity:0 } to { opacity:1 } }`}</style>
    </>
  );
}
