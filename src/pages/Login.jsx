import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, X, Home } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="flex min-h-screen"
      style={{ backgroundColor: "var(--th-bg)", color: "var(--th-text)" }}
    >
      {/* ── Left hero panel (desktop only) ── */}
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{ backgroundColor: "var(--th-surface)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeAfIGueNHfekTijBAJpawtoCjJh_u-yzXc3i_f0kgyhmNwNlLOkR8t9ZlmzIL81icurIT40AnMjMcES2nUdkbOSGLyva3P4zf1x7UOJxUTudQ6b3qphjXA3ecSC3zRhmLeTeTsnvgtcisEvm7TxS8MkaYL1ZAIkWhhkIeoObLv6FFsI4gSyta9_9Ao0ve_2SWi8Kot0zETklCYrtD0G_q9RH_Bxo1TrSd60G0r6XXmy_VEuhSKdvqe4oAcjUT2n8NCCz5ZeR5Peu_')",
          }}
        />
        {/* Color-tinted overlay using --th-primary for brand identity */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, color-mix(in srgb, var(--th-primary) 70%, #000) 0%, color-mix(in srgb, var(--th-primary) 20%, transparent) 50%, transparent 100%)",
          }}
        />
        <div className="absolute bottom-16 left-16 max-w-md text-white z-10">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="size-8 rounded flex items-center justify-center"
              style={{ backgroundColor: "var(--th-primary)" }}
            >
              <svg
                fill="white"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" />
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              ShopCanvas
            </span>
          </div>
          <h2 className="text-4xl font-extrabold leading-tight mb-4">
            Elevate Your Wardrobe Experience.
          </h2>
          <p className="text-white/70 text-lg">
            Access your curated selection of premium high-end fashion and
            designer labels.
          </p>
        </div>
      </div>

      {/* ── Right login panel ── */}
      <div
        className="flex-1 flex items-center justify-center min-h-screen p-6 sm:p-12 lg:p-24"
        style={{ backgroundColor: "var(--th-bg)" }}
      >
        <div className="w-full max-w-md relative">
          {/* Home button (all devices) */}
          <div className="absolute -top-12 left-0 lg:-top-16">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:bg-black/5 dark:hover:bg-white/5 group"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--th-primary) 8%, transparent)",
                color: "var(--th-primary)",
              }}
            >
              <Home
                size={18}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              <span className="text-sm font-bold uppercase tracking-wider">
                Home
              </span>
            </button>
          </div>

          {/* Heading */}
          <div className="mb-8 text-center lg:text-left">
            <h1
              className="text-4xl font-bold tracking-tight mb-2"
              style={{ color: "var(--th-text)" }}
            >
              Welcome Back
            </h1>
            <p style={{ color: "var(--th-muted)" }} className="font-medium">
              Elevate your style experience.
            </p>
          </div>

          {/* Form */}
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            {/* Email */}
            <div>
              <label
                className="block text-sm font-semibold mb-2 ml-1"
                style={{ color: "var(--th-muted)" }}
              >
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full h-14 px-5 rounded-2xl border-0 outline-none transition-all"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--th-primary) 8%, var(--th-surface))",
                  color: "var(--th-text)",
                  boxShadow: "0 0 0 2px transparent",
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow =
                    "0 0 0 2px color-mix(in srgb, var(--th-primary) 50%, transparent)")
                }
                onBlur={(e) =>
                  (e.target.style.boxShadow = "0 0 0 2px transparent")
                }
                placeholder="name@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-sm font-semibold mb-2 ml-1"
                style={{ color: "var(--th-muted)" }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full h-14 px-5 pr-14 rounded-2xl border-0 outline-none transition-all"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--th-primary) 8%, var(--th-surface))",
                    color: "var(--th-text)",
                    boxShadow: "0 0 0 2px transparent",
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 2px color-mix(in srgb, var(--th-primary) 50%, transparent)")
                  }
                  onBlur={(e) =>
                    (e.target.style.boxShadow = "0 0 0 2px transparent")
                  }
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: "var(--th-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--th-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--th-muted)")
                  }
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between px-1 pt-1">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded-md focus:ring-0 focus:ring-offset-0"
                  style={{ accentColor: "var(--th-primary)" }}
                />
                <span
                  className="text-sm font-medium transition-colors"
                  style={{ color: "var(--th-muted)" }}
                >
                  Remember Me
                </span>
              </label>
              <button
                type="button"
                className="text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: "var(--th-primary)" }}
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-16 text-white font-bold rounded-2xl hover:scale-[1.01] active:scale-[0.98] transition-all mt-4"
              style={{
                backgroundColor: "var(--th-primary)",
                boxShadow:
                  "0 8px 24px color-mix(in srgb, var(--th-primary) 30%, transparent)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--th-primary-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--th-primary)")
              }
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div
                className="w-full border-t"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--th-primary) 25%, var(--th-bg))",
                }}
              />
            </div>
            <div className="relative flex justify-center text-sm font-medium">
              <span
                className="px-4 uppercase tracking-widest text-[10px]"
                style={{
                  backgroundColor: "var(--th-bg)",
                  color: "var(--th-muted)",
                }}
              >
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="space-y-4">
            {/* Google */}
            <button
              className="flex items-center justify-center w-full h-14 rounded-2xl border transition-all"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--th-primary) 25%, var(--th-bg))",
                backgroundColor: "var(--th-surface)",
                color: "var(--th-text)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "color-mix(in srgb, var(--th-primary) 10%, var(--th-surface))")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--th-surface)")
              }
            >
              <svg className="h-5 w-5 mr-3 flex-shrink-0" viewBox="0 0 24 24">
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
              <span className="font-semibold">Google</span>
            </button>

            {/* Apple */}
            <button
              className="flex items-center justify-center w-full h-14 rounded-2xl border transition-all"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--th-primary) 25%, var(--th-bg))",
                backgroundColor: "var(--th-surface)",
                color: "var(--th-text)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "color-mix(in srgb, var(--th-primary) 10%, var(--th-surface))")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--th-surface)")
              }
            >
              <svg
                className="h-5 w-5 mr-3 flex-shrink-0"
                viewBox="0 0 24 24"
                style={{ fill: "var(--th-text)" }}
              >
                <path d="M17.05 20.28c-.96.95-2.04 2.15-3.66 2.15-1.57 0-2.06-1-3.66-1-1.6 0-2.14 1-3.66 1-1.6 0-2.73-1.23-3.66-2.15C.57 18.2 0 14.15 0 11.23c0-4.05 2.5-6.19 5.31-6.19 1.44 0 2.54.89 3.51.89s2.1-.89 3.55-.89c1.07 0 2.37.5 3.19 1.4-.23.15-2.73 1.58-2.73 4.5 0 3.51 3.03 4.72 3.06 4.74-.03.09-.47 1.62-1.84 3.6M12.03 5.07c1.3-.15 2.45-1.12 2.45-2.54 0-1.2-.95-2.53-2.38-2.53-1.42 0-2.67 1.15-2.45 2.53.1 1.19.98 2.39 2.38 2.54" />
              </svg>
              <span className="font-semibold">Apple</span>
            </button>
          </div>

          {/* Sign Up */}
          <div className="mt-10 text-center">
            <p className="font-medium" style={{ color: "var(--th-muted)" }}>
              Don&apos;t have an account?{" "}
              <button
                className="font-bold hover:underline transition-opacity hover:opacity-80"
                style={{ color: "var(--th-primary)" }}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
