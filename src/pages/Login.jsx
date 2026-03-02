import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Home, Mail, Lock, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/* ── Per-theme config ── */
const THEME_CONFIG = {
  gallery: {
    // Desktop: side-by-side split
    heroBg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeAfIGueNHfekTijBAJpawtoCjJh_u-yzXc3i_f0kgyhmNwNlLOkR8t9ZlmzIL81icurIT40AnMjMcES2nUdkbOSGLyva3P4zf1x7UOJxUTudQ6b3qphjXA3ecSC3zRhmLeTeTsnvgtcisEvm7TxS8MkaYL1ZAIkWhhkIeoObLv6FFsI4gSyta9_9Ao0ve_2SWi8Kot0zETklCYrtD0G_q9RH_Bxo1TrSd60G0r6XXmy_VEuhSKdvqe4oAcjUT2n8NCCz5ZeR5Peu_",
    heroTitle: "Elevate Your Wardrobe Experience.",
    heroSub:
      "Curated collections for the modern connoisseur. Enter the gallery of style.",
    formTitle: "Sign In",
    formSub: "Welcome back to your curated collection.",
    signUpText: "Don't have an account?",
    signUpCta: "Sign up now",
    inputRadius: "0.375rem",
    btnRadius: "0.375rem",
    emailPlaceholder: "name@example.com",
    passwordPlaceholder: "Enter your password",
    footerLinks: true,
    mobileHero: false, // mobile uses centered card
  },
  luxury: {
    heroBg:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80",
    heroTitle: "Elevate Your Wardrobe Experience.",
    heroSub:
      "Discover exclusive collections and curated luxury pieces tailored just for you.",
    formTitle: "Sign In",
    formSub: "Welcome back to ShopCanvas. Please enter your details.",
    signUpText: "Don't have an account?",
    signUpCta: "Sign for free",
    inputRadius: "0.625rem",
    btnRadius: "0.5rem",
    emailPlaceholder: "Enter your email",
    passwordPlaceholder: "Enter your password",
    footerLinks: false,
    mobileHero: false,
  },
  gourmet: {
    heroBg:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
    heroTitle: "Elevate Your Wardrobe Experience.",
    heroSub:
      "Curated fashion meets organic living. Join our community of conscious consumers today.",
    formTitle: "Sign In",
    formSub: "Welcome back to your curated market.",
    signUpText: "Don't have an account?",
    signUpCta: "Sign up for free",
    inputRadius: "0.625rem",
    btnRadius: "9999px",
    emailPlaceholder: "name@example.com",
    passwordPlaceholder: "Enter your password",
    footerLinks: false,
    mobileHero: false,
  },
  street: {
    heroBg:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    heroTitle: "Elevate Your Wardrobe Experience.",
    heroSub:
      "Join the movement defining the next generation of streetwear culture.",
    formTitle: "WELCOME BACK.",
    formSub: "Enter your details to access the latest drops.",
    signUpText: "Don't have an account?",
    signUpCta: "Sign Up",
    inputRadius: "0.25rem",
    btnRadius: "0.25rem",
    emailPlaceholder: "user@shopcanvas.com",
    passwordPlaceholder: "••••••••",
    footerLinks: false,
    mobileHero: false,
  },
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const { theme } = useTheme();

  const cfg = THEME_CONFIG[theme] || THEME_CONFIG.gallery;
  const isStreet = theme === "street";
  const isGallery = theme === "gallery";
  const isGourmet = theme === "gourmet";

  /* ── Shared styles ── */
  const inputStyle = {
    backgroundColor: isStreet
      ? "#1a1a1a"
      : "color-mix(in srgb, var(--th-primary) 6%, var(--th-surface))",
    color: "var(--th-text)",
    border: isStreet
      ? "1px solid #333"
      : `1px solid color-mix(in srgb, var(--th-primary) 20%, transparent)`,
    borderRadius: cfg.inputRadius,
  };

  const btnStyle = {
    backgroundColor: "var(--th-primary)",
    color: isStreet ? "#000" : "#fff",
    borderRadius: cfg.btnRadius,
    fontFamily: isStreet ? "var(--font-mono)" : "var(--font-display)",
    letterSpacing: isStreet ? "0.12em" : "0.05em",
  };

  const socialBtnStyle = {
    backgroundColor: isStreet ? "#1a1a1a" : "var(--th-surface)",
    color: "var(--th-text)",
    border: `1px solid color-mix(in srgb, var(--th-primary) 20%, var(--th-bg))`,
    borderRadius: cfg.btnRadius,
  };

  return (
    <div
      className="flex min-h-screen"
      style={{ backgroundColor: "var(--th-bg)", color: "var(--th-text)" }}
    >
      {/* ── LEFT: Hero Panel (desktop only) ── */}
      <div
        className="hidden lg:flex lg:w-[55%] xl:w-1/2 relative overflow-hidden flex-col justify-end"
        style={{ backgroundColor: isStreet ? "#0f0f0f" : "var(--th-surface)" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${cfg.heroBg}')` }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: isStreet
              ? "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.15) 100%)"
              : `linear-gradient(to top, color-mix(in srgb, var(--th-primary) 80%, #000) 0%, color-mix(in srgb, var(--th-primary) 25%, transparent) 45%, transparent 100%)`,
          }}
        />

        {/* Logo — top left */}
        <div className="absolute top-8 left-8 z-10 flex items-center gap-2.5">
          <div
            className="size-8 rounded flex items-center justify-center shrink-0"
            style={{ backgroundColor: "var(--th-primary)" }}
          >
            <svg
              fill={isStreet ? "#000" : "#fff"}
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
            >
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" />
            </svg>
          </div>
          <span
            className="font-bold tracking-tight"
            style={{
              color: "#fff",
              fontFamily: isStreet ? "var(--font-mono)" : "var(--font-display)",
              fontSize: isStreet ? "1rem" : "1.1rem",
              letterSpacing: isStreet ? "0.12em" : undefined,
            }}
          >
            {isStreet ? "SHOPCANVAS" : "ShopCanvas"}
          </span>
        </div>

        {/* Hero text — bottom left */}
        <div className="relative z-10 px-10 pb-14">
          <h2
            className="font-extrabold leading-tight mb-3"
            style={{
              color: "#fff",
              fontFamily: isStreet ? "var(--font-mono)" : "var(--font-serif)",
              fontSize: isStreet ? "2.5rem" : "2.75rem",
              letterSpacing: isStreet ? "0.02em" : undefined,
            }}
          >
            {isStreet ? (
              <>
                Elevate Your{" "}
                <span style={{ color: "var(--th-primary)" }}>Wardrobe</span>{" "}
                Experience.
              </>
            ) : (
              cfg.heroTitle
            )}
          </h2>
          <p className="text-white/70 text-base max-w-sm">{cfg.heroSub}</p>
        </div>
      </div>

      {/* ── RIGHT: Login Form Panel ── */}
      <div
        className="flex-1 flex items-center justify-center min-h-screen p-6 sm:p-10 lg:p-16 xl:p-20 relative"
        style={{ backgroundColor: "var(--th-bg)" }}
      >
        {/* Home button — top left for mobile, top-right for desktop */}
        <div className="absolute top-5 left-5 lg:top-6 lg:left-6 z-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all hover:opacity-80 group"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--th-primary) 10%, transparent)",
              color: "var(--th-primary)",
            }}
          >
            <Home size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Home
            </span>
          </button>
        </div>

        {/* Mobile logo (show on mobile only) */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 lg:hidden z-10">
          <span
            className="text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "var(--th-muted)" }}
          >
            ShopCanvas
          </span>
        </div>

        <div className="w-full max-w-sm lg:max-w-md mt-12 lg:mt-0">
          {/* Form heading */}
          <div className="mb-8">
            <h1
              className="font-extrabold tracking-tight mb-2"
              style={{
                fontSize: isStreet ? "2.25rem" : isGallery ? "1.75rem" : "2rem",
                color: "var(--th-text)",
                fontFamily: isStreet
                  ? "var(--font-mono)"
                  : isGallery
                    ? "var(--font-serif)"
                    : "var(--font-display)",
                letterSpacing: isStreet ? "0.02em" : undefined,
              }}
            >
              {isStreet ? (
                <>
                  WELCOME{" "}
                  <span style={{ color: "var(--th-primary)" }}>BACK.</span>
                </>
              ) : (
                cfg.formTitle
              )}
            </h1>
            <p className="text-sm" style={{ color: "var(--th-muted)" }}>
              {cfg.formSub}
            </p>
          </div>

          {/* ── FORM ── */}
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            {/* Email */}
            <div>
              <label
                className="block text-xs font-bold uppercase tracking-wider mb-2"
                style={{
                  color: isStreet ? "var(--th-text)" : "var(--th-muted)",
                }}
              >
                {isStreet ? "EMAIL" : "Email Address"}
              </label>
              <div className="relative">
                {!isStreet && (
                  <Mail
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: "var(--th-muted)" }}
                  />
                )}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={cfg.emailPlaceholder}
                  className="w-full h-12 outline-none transition-all text-sm"
                  style={{
                    ...inputStyle,
                    paddingLeft: isStreet ? "1rem" : "2.75rem",
                    paddingRight: "1rem",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--th-primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = isStreet
                      ? "#333"
                      : `color-mix(in srgb, var(--th-primary) 20%, transparent)`)
                  }
                />
                {isStreet && (
                  <Mail
                    size={15}
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: "var(--th-muted)" }}
                  />
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{
                    color: isStreet ? "var(--th-text)" : "var(--th-muted)",
                  }}
                >
                  {isStreet ? "PASSWORD" : "Password"}
                </label>
                {isGallery && (
                  <button
                    type="button"
                    className="text-xs font-semibold hover:underline"
                    style={{ color: "var(--th-primary)" }}
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                {!isStreet && (
                  <Lock
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: "var(--th-muted)" }}
                  />
                )}
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={cfg.passwordPlaceholder}
                  className="w-full h-12 outline-none transition-all text-sm"
                  style={{
                    ...inputStyle,
                    paddingLeft: isStreet ? "1rem" : "2.75rem",
                    paddingRight: "3rem",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--th-primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = isStreet
                      ? "#333"
                      : `color-mix(in srgb, var(--th-primary) 20%, transparent)`)
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-60 transition-opacity"
                  style={{ color: "var(--th-muted)" }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember me + Forgot password row */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded focus:ring-0 focus:ring-offset-0"
                  style={{ accentColor: "var(--th-primary)" }}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: "var(--th-muted)" }}
                >
                  {isGallery
                    ? "Remember me"
                    : isStreet
                      ? "Remember me"
                      : "Remember for 30 days"}
                </span>
              </label>
              {!isGallery && (
                <button
                  type="button"
                  className="text-xs font-semibold hover:underline"
                  style={{ color: "var(--th-primary)" }}
                >
                  Forgot Password?
                </button>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-13 font-bold text-sm uppercase tracking-wider transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
              style={{ ...btnStyle, height: "3.25rem" }}
            >
              {isStreet ? (
                <>
                  SIGN IN <ArrowRight size={16} />
                </>
              ) : (
                <>
                  Sign In <ArrowRight size={15} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div
                className="w-full border-t"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--th-primary) 20%, var(--th-bg))",
                }}
              />
            </div>
            <div className="relative flex justify-center">
              <span
                className="px-4 text-[10px] uppercase tracking-widest font-medium"
                style={{
                  backgroundColor: "var(--th-bg)",
                  color: "var(--th-muted)",
                }}
              >
                Or continue with
              </span>
            </div>
          </div>

          {/* Social logins */}
          {isStreet ? (
            /* Street: two icon-only buttons */
            <div className="grid grid-cols-2 gap-3">
              <button
                className="flex items-center justify-center h-12 transition-all hover:opacity-80"
                style={socialBtnStyle}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </button>
              <button
                className="flex items-center justify-center h-12 font-bold text-sm tracking-wider transition-all hover:opacity-80"
                style={{ ...socialBtnStyle, color: "var(--th-text)" }}
              >
                iOS
              </button>
            </div>
          ) : (
            /* Gallery / Luxury / Gourmet: labeled buttons */
            <div
              className={`grid gap-3 ${isGallery ? "grid-cols-2" : "grid-cols-1"}`}
            >
              <button
                className="flex items-center justify-center h-12 gap-2.5 font-semibold text-sm transition-all hover:opacity-80"
                style={socialBtnStyle}
              >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
              <button
                className="flex items-center justify-center h-12 gap-2.5 font-semibold text-sm transition-all hover:opacity-80"
                style={socialBtnStyle}
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 24 24"
                  style={{ fill: "var(--th-text)" }}
                >
                  <path d="M17.05 20.28c-.96.95-2.04 2.15-3.66 2.15-1.57 0-2.06-1-3.66-1-1.6 0-2.14 1-3.66 1-1.6 0-2.73-1.23-3.66-2.15C.57 18.2 0 14.15 0 11.23c0-4.05 2.5-6.19 5.31-6.19 1.44 0 2.54.89 3.51.89s2.1-.89 3.55-.89c1.07 0 2.37.5 3.19 1.4-.23.15-2.73 1.58-2.73 4.5 0 3.51 3.03 4.72 3.06 4.74-.03.09-.47 1.62-1.84 3.6M12.03 5.07c1.3-.15 2.45-1.12 2.45-2.54 0-1.2-.95-2.53-2.38-2.53-1.42 0-2.67 1.15-2.45 2.53.1 1.19.98 2.39 2.38 2.54" />
                </svg>
                Apple
              </button>
            </div>
          )}

          {/* Sign Up */}
          <div className="mt-8 text-center">
            <p className="text-sm" style={{ color: "var(--th-muted)" }}>
              {cfg.signUpText}{" "}
              <button
                className="font-bold hover:underline transition-opacity hover:opacity-80"
                style={{ color: "var(--th-primary)" }}
              >
                {cfg.signUpCta}
              </button>
            </p>
          </div>

          {/* Footer links (gallery desktop only) */}
          {cfg.footerLinks && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                className="text-xs hover:underline"
                style={{ color: "var(--th-muted)" }}
              >
                Privacy Policy
              </button>
              <button
                className="text-xs hover:underline"
                style={{ color: "var(--th-muted)" }}
              >
                Terms of Service
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
