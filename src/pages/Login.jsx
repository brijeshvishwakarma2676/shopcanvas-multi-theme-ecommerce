import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, X } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col pb-20">
      {/* Top Navigation Bar - Appears behind the Header, we use margin to push it down or just a simple close button */}
      <div className="flex items-center justify-between px-6 py-4 pt-24">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center size-10 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors hover:bg-slate-300 dark:hover:bg-slate-700"
        >
          <X className="text-slate-700 dark:text-slate-300" size={20} />
        </button>
        <div className="size-10"></div> {/* Spacer for symmetry */}
      </div>

      {/* Main Content */}
      <div className="flex-1 px-8 pt-4 pb-8 max-w-md mx-auto w-full">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Elevate your style experience.
          </p>
        </div>

        {/* Login Form */}
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <div>
            <label className="block text-sm font-semibold mb-2 ml-1 text-slate-700 dark:text-slate-300">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                className="w-full h-14 px-5 rounded-2xl border-0 bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-[color:var(--th-primary)]/50 transition-all outline-none"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 ml-1 text-slate-700 dark:text-slate-300">
              Password
            </label>
            <div className="relative group">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full h-14 px-5 pr-14 rounded-2xl border-0 bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-[color:var(--th-primary)]/50 transition-all outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[color:var(--th-primary)] transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between px-1 pt-1">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  className="peer h-5 w-5 rounded-md border-slate-300 dark:border-slate-700 bg-transparent text-[color:var(--th-primary)] focus:ring-0 focus:ring-offset-0"
                />
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-[color:var(--th-primary)] transition-colors">
                Remember Me
              </span>
            </label>
            <button
              type="button"
              className="text-sm font-semibold text-[color:var(--th-primary)] hover:opacity-80 transition-opacity"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full h-16 bg-slate-900 dark:bg-[color:var(--th-primary)] text-white font-bold rounded-2xl shadow-xl shadow-[color:var(--th-primary)]/10 hover:scale-[1.01] active:scale-[0.98] transition-all mt-4"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
          </div>
          <div className="relative flex justify-center text-sm font-medium">
            <span className="px-4 bg-[color:var(--th-bg)] text-slate-400 uppercase tracking-widest text-[10px]">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Logins */}
        <div className="space-y-4">
          <button className="flex items-center justify-center w-full h-14 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group">
            <div className="mr-3 flex items-center">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
            </div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Google
            </span>
          </button>

          <button className="flex items-center justify-center w-full h-14 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group">
            <div className="mr-3 flex items-center">
              <svg
                className="h-5 w-5 fill-slate-900 dark:fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M17.05 20.28c-.96.95-2.04 2.15-3.66 2.15-1.57 0-2.06-1-3.66-1-1.6 0-2.14 1-3.66 1-1.6 0-2.73-1.23-3.66-2.15C.57 18.2 0 14.15 0 11.23c0-4.05 2.5-6.19 5.31-6.19 1.44 0 2.54.89 3.51.89s2.1-.89 3.55-.89c1.07 0 2.37.5 3.19 1.4-.23.15-2.73 1.58-2.73 4.5 0 3.51 3.03 4.72 3.06 4.74-.03.09-.47 1.62-1.84 3.6M12.03 5.07c1.3-.15 2.45-1.12 2.45-2.54 0-1.2-.95-2.53-2.38-2.53-1.42 0-2.67 1.15-2.45 2.53.1 1.19.98 2.39 2.38 2.54"></path>
              </svg>
            </div>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Apple
            </span>
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Don't have an account?{" "}
            <button className="text-[color:var(--th-primary)] font-bold hover:underline">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
