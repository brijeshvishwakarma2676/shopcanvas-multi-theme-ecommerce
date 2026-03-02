import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";
import { useTheme } from "../context/ThemeContext";

/* ── Per-theme hero config ── */
const THEME_DATA = {
  gallery: {
    heroBadge: "New Collection 2024",
    heroHeading: ["Curation of", "the Sublime"],
    heroSub:
      "Discover exclusive pieces from emerging global artists. Minimalist forms meeting emotional depth.",
    heroCta: "Explore Gallery",
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxrofSysxk3AzBmkMI9W9X-AQj8shV7UVQDasLJshEjFyRvMVK_C986T_d8MzaQzI7Je33B3im525LvZyVlrX7oTZdJuUS5efB2yJAIkUrN3kMvb8sr4opG73-usNDEnWtrnm88dnIKdIiOluv7l4SdkilZJ_fM6rzvNj4mdCG47HG8YSv7JGdZWPpBXyNkwmJEr2IflqCMF8yU8Leapvo1xlxw3on6Ju_XHZiaCYDLcE6MLBj2H-WL8z0oYENTYwhA9fR1cjuJ8t1",
    categoriesHeading: "Categories",
    categories: [
      {
        id: "paintings",
        label: "Paintings",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMxuWUS7V-vfzqb7DCBg3IZBgMLZi90T8d-rybs5WpP5PDqQh0FpJvuSGPfgCzDrb67n9w9heMQkTMAz33NZn4o4ae4XI8bJAFLXmARz7Pzb3KoInPF_yHEZ9s_B6MAtdE7tAytwN4n8VC88OKIZf4meafQcGoxbVVxVrLLjU3tG-zUAPec4-BT_4vMIXgA9NNmSuAUlpkK6BnTe-BOINYFm1xuZ9c38NgkictjGyeVOJ9IxleSxKu8yBg0epgcjlXyRVHvgissTO-",
      },
      {
        id: "sculpture",
        label: "Sculpture",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBALFgMdoQyf_zpUuyZI2ImEfyDBQPhhuwHgtsWFif-1OnNpCSQTwA5tLQpvEswv2VYoUnXxroKH6PYBrFZWThsSYAROlGLPUEapIPQQwJOJREeYEpr50VDbyIyk5e8DrUiFhgT85VL9xjITCvGX4flf-qLCDOlJh8GNu7sUdjp0d2nOqZETPWihgjXyN6TzxA3CY25qi3BskOCjzlucio05_jesDYRjzON53O9rlmEOHQEXm3wTZY9bmUY4ed6J9FLdgO7FeThLIHe",
      },
      {
        id: "prints",
        label: "Prints",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN9lCf_fb1sT5q7_W9vPm-9_qtIMsp_lx6NWjbjx7g9Grd_R7h4aOblA50u5AWsJrCSeSFMTV-IvMBXdU9ZoyLO1nBUF7kW8rABof8dlY415X1_R90-DnyFH685R6s-5g_21UfO0G1tcy9ZvfY0dVzgp6O_aMn2BNOvGzM1luPmmJRVyz6V37XuIatcyrLxrCm2IL12US-TfzUhWrN-D6WHYErpgLuswDaFws6DCMm8Rm74VHKhzFvRFJxJTxen0QMxeJok0ncfzt5",
      },
    ],
    productsLabel: "Curated Selection",
    productsHeading: "Featured Works",
    viewAllCta: "View All Works",
    tickerItems: [
      "Free returns on originals",
      "New ceramics drop Friday",
      "Limited edition prints available",
      "Sustainably sourced materials",
    ],
  },
  luxury: {
    heroBadge: "Autumn Collection 2025",
    heroHeading: ["Elevate Your", "Wardrobe."],
    heroSub:
      "Discover exclusive collections and curated luxury pieces tailored just for you.",
    heroCta: "Shop the Edit",
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeAfIGueNHfekTijBAJpawtoCjJh_u-yzXc3i_f0kgyhmNwNlLOkR8t9ZlmzIL81icurIT40AnMjMcES2nUdkbOSGLyva3P4zf1x7UOJxUTudQ6b3qphjXA3ecSC3zRhmLeTeTsnvgtcisEvm7TxS8MkaYL1ZAIkWhhkIeoObLv6FFsI4gSyta9_9Ao0ve_2SWi8Kot0zETklCYrtD0G_q9RH_Bxo1TrSd60G0r6XXmy_VEuhSKdvqe4oAcjUT2n8NCCz5ZeR5Peu_",
    categoriesHeading: "New Arrivals",
    categories: [
      {
        id: "bags",
        label: "Bags",
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
      },
      {
        id: "accessories",
        label: "Accessories",
        img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
      },
      {
        id: "jewelry",
        label: "Jewelry",
        img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
      },
    ],
    productsLabel: "Bestsellers",
    productsHeading: "Curated for You",
    viewAllCta: "View All",
    tickerItems: [
      "Complimentary gift wrapping",
      "Express delivery available",
      "New season arrivals",
      "Members earn triple points",
    ],
  },
  gourmet: {
    heroBadge: "New Season",
    heroHeading: ["Fresh from", "the Market"],
    heroSub:
      "Discover the finest artisanal produce delivered from local farms to your kitchen.",
    heroCta: "Explore Now",
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA249eFbnEOw0pF_pPR51zXxmR2Pu9UR68LVazNX0s67fDiTr2KAjnSf6IIKQR4s4KT4gfQdnQ4zwgLqJqt_98O1RwWWyWa9uh7ayV_tL6fkXSVDGJQW-ZbQlEyTGvO3bgutwtZfRstUdPGgd-DyLN5-mOIJXNRcq9thsfpZG50vOvSXyqYJGWDPS27K8UkQbik3_RdvJ-PtDPsACWjblwPAPlkjer_jyhsGZ1zJLkpp25jt6A8EtDB4KAhQclPcMvgjAIxgwWjnIZA",
    categoriesHeading: "Curated Collections",
    categories: [
      {
        id: "pantry",
        label: "Pantry",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjiGbCha1BFySg22aCHJ3NjHNLENeAH0Le84LSkxjnrq1Bou9JgX2vwMgIINIW-4-UKMC_Agt0BswYczaKQWPb0BEyXJmXB94qjR7kOcGQo-nqo_wmeJIed6q-IlJ5hBP5qCI0k8CsozqC2xOGKzJPp6WFsYOUA9dcuC3Nc7M3TYMLMBrVyzxszTPlst-eblDRRm2Vxnd_c0J2PwdFQVi8Z5CthJ_qU6AMN-2iML0mIQs_aBuuiUgrIr7G7TuM9ssR-BrlGSwPCEe3",
      },
      {
        id: "fresh",
        label: "Fresh",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChxuZ8e6INas3jm-8EX0EToAMUCXZBhz9w0Op_xoBYksLe5RPX-L_sx2T0aySXxxeY-wMkSJuTHnwNtyvq6l_kDt3Niwi6rJXjIH9PT2V8JUej_GgrJWifEHC_VocBYi_mNOq3oNQhg1WaXUjg5bh493k_mXWtbSoujrbXah_7Plqf6NZFrNG2fgbhFDTBnNY6G8sAfu50vww7enKoXTFsQFel1t_DzZwbxry5B72wh4sVcIj7E5ealDc0jsCOJa8hrViPXzhPD1d7",
      },
      {
        id: "artisan",
        label: "Artisan",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3IbR4UvkDQ8JdGLjpnmiAu3dn3amlp6QdJazsrjVUJyJVG7vZSIG_s3VZdFKgc6fDyRCToOIF23Onv2sEIQWXr4tUZsrzi9FoLX4ZB4dOY_CxXxHs12w0mVj_UGg0u0MllUz4aZHntSSi02XeCMcmk-cT2STCHp5Gam4ahu5BzDr-yxTRDhtJVzfRZM2qSEkbY9rYHAqjtMtTV7hwlNIOrxk-a5w1OuLxrWPluL7TTcJqGetnlowLfIe7xTEx7VkHZ3B-A2hPMBLe",
      },
      {
        id: "beverages",
        label: "Beverages",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2rvPDJIE3mMYbBnogSxz7it3pJ744Q9HMMSn5pJ8mcEgFIKSouZp4nOtU9PpJyB2-J4_j84AgRWJ7RIMcxOcK9P9a2UWtSIaBoBruVwj-ABgHBoLfOym-iCOGXAv2mETnLzdEwHkOjPzcVV3ElHkTvx18_fd4DLQx8pLAELGvpDC33NGO2slZsCg63nErfd2XZFHvKLHHTr0gZIppxVDhoURYc_X3ShZ_9KDqmdkRnVBdd82meYpxrP_2JbleVX63YbBzLVrlsGDj",
      },
    ],
    productsLabel: "Farm to Table",
    productsHeading: "Featured Products",
    viewAllCta: "View All Products",
    tickerItems: [
      "Same-day delivery available",
      "Certified organic produce",
      "Artisan sourdough every Friday",
      "Zero waste packaging",
    ],
  },
  street: {
    heroBadge: "DROP 001",
    heroHeading: ["FRESH", "DRIP"],
    heroSub:
      "Join the movement defining the next generation of streetwear culture.",
    heroCta: "SHOP NOW",
    heroImg:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZD4xM0rdrNfplmaTimMO3UqxLf-H3ln3kRx8XQ1yO60YXY3iZ7wr5zQB43pybjvDqt3voS0Lf7l3i9eDfuhi0ro1rl_h7yEj9w2qHMspgkv_LWRS_7XL5ochJu5wVVW6y0sH38pgIninHKxExfhzUz2pzRsLkbecEEcJ-37JNO9zg5PeqBGBlraEjIzgVrujfUJtkSqvCrbS0jY3qN36C_cJDpHSbrGJldkpM64KY50T9qPRc-xqHOOiUtdIaZfmGecdaczEETjIZ",
    categoriesHeading: "CATEGORIES",
    categories: [
      {
        id: "hoodies",
        label: "HOODIES",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAyjA78uU55B_wAGrkcmTt-39S2yWyMIW6DgyI9xI9eBHVSXgjggwsy5bDK5NmcTy3K4yutMUgXvPDZ30z0aq_2REGZnnt4uPmUmDSNXbayAwCZRQdDyABoW8HtEQeg5Tqmoakfo1ymqc6qF3I1VD-uXzTMd7b75087T4lK0_TEV5G985uwruckVrlxPdmEKArq00ikI1EXYKfJdNdcy48miWRO5-GsFNk1Qf98c9ADe88HlLQaBSrkssZWZDcSWGD0DgixSV1DMPM",
      },
      {
        id: "cargo",
        label: "CARGO",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMA1qkUhE5jl15uptq8ojT0zvFeI6P9R2kQBMuVribuE4spDqqurU6y4Z2LRdYADfJg4xMT81o0UK1hW_ZSfq1zNOg3q1IQWuokaWwPET8biNWJQqmG-mDIsCU20Hk4L6JuqKEz1_r0I74Xfz7qQdCoMhSShOsWks_HbqOBTWIfDzgxdW0JmcWgUlOVGMIwX88QJnvhX1MeTP1ERcBSiAgez1xRad-0ObhewhykYVW3jP-uoezvK1UZpY4pQImbblqdGtSkuwXtc_-",
      },
      {
        id: "sneakers",
        label: "SNEAKERS",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzD80Kd4dWUW-4gjZhAe1Fu-e0G1iyvo_iiT-ZirfEfG4nGm_o6Rn0FKENQsgXC3FdCCh_X2hphdcAZC8ttQKg3soyDgLymyA0Hk7TkCtcWgLOUn6II8MG-8inZznBSI63aXvDbu0kwDKroKyvgOHtAMC3wFQoFqQLIGI_lfgM8XZ8ZZb4pLHSPxEHPWwOjxPIc8a_lZzXxTmtBkNVRQfSo2y4RA-RQGcjRQ8FdxbV_qqb_jGkoJHT-dR0BNikTHtJ2Ecy9WqfHtN3",
      },
    ],
    productsLabel: "NEW ARRIVALS",
    productsHeading: "NEW ARRIVALS",
    viewAllCta: "SEE ALL DROPS",
    tickerItems: [
      "LIMITED DROPS EVERY WEEK",
      "FREE RETURNS ON ALL ORDERS",
      "NEW HOODIES COLLECTION LIVE",
      "EXCLUSIVE MEMBERS EARLY ACCESS",
    ],
  },
};

const TICKER_REPEAT = 3;

export default function Home({ onAddToCart }) {
  const { theme } = useTheme();
  const cfg = THEME_DATA[theme] || THEME_DATA.gallery;

  const isStreet = theme === "street";
  const isGourmet = theme === "gourmet";

  const products = PRODUCTS.slice(0, 4);

  const tickerItems = [
    ...cfg.tickerItems,
    ...cfg.tickerItems,
    ...cfg.tickerItems,
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--th-bg)" }}>
      {/* ── Hero ── */}
      {isGourmet ? (
        /* Gourmet: fullwidth rounded card hero */
        <section className="pt-20 pb-6 px-4 lg:px-12">
          <div
            className="relative overflow-hidden flex flex-col justify-end group"
            style={{
              height: "min(420px, 55vw)",
              minHeight: "360px",
              borderRadius: "1rem",
              backgroundColor: "var(--th-surface)",
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 55%), url('${cfg.heroImg}')`,
              }}
            />
            <div className="relative p-6 lg:p-10 space-y-3">
              <span
                className="inline-block px-3 py-1 text-white text-xs font-bold rounded-full tracking-wider uppercase"
                style={{ backgroundColor: "var(--th-primary)" }}
              >
                {cfg.heroBadge}
              </span>
              <h1
                className="text-white text-4xl lg:text-5xl leading-tight font-bold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {cfg.heroHeading[0]} <br /> {cfg.heroHeading[1]}
              </h1>
              <p className="text-white/90 text-sm max-w-sm">{cfg.heroSub}</p>
              <Link
                to="/catalog"
                className="mt-4 inline-flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-transform px-6 py-3 text-white text-sm"
                style={{
                  backgroundColor: "var(--th-primary)",
                  borderRadius: "var(--th-radius-full, 9999px)",
                }}
              >
                {cfg.heroCta}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      ) : isStreet ? (
        /* Street: dark full-bleed hero */
        <section
          className="relative w-full pb-0 pt-14"
          style={{ minHeight: "70vh" }}
        >
          <div
            className="relative flex flex-col justify-end"
            style={{ minHeight: "70vh" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(15,15,15,1) 5%, rgba(15,15,15,0.4) 45%, rgba(15,15,15,0) 100%), url('${cfg.heroImg}')`,
              }}
            />
            <div className="relative z-10 p-6 pb-10 space-y-4">
              <span
                className="inline-block px-3 py-1 text-xs font-bold tracking-widest"
                style={{
                  backgroundColor: "var(--th-primary)",
                  color: "#000",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {cfg.heroBadge}
              </span>
              <h1
                className="text-6xl lg:text-8xl font-extrabold leading-[0.9] tracking-tighter"
                style={{ color: "#fff", fontFamily: "var(--font-mono)" }}
              >
                {cfg.heroHeading[0]}
                <br />
                {cfg.heroHeading[1]}
              </h1>
              <Link
                to="/catalog"
                className="flex items-center justify-center font-extrabold py-4 text-sm lg:inline-flex lg:px-10 transition-colors duration-300 hover:opacity-90"
                style={{
                  backgroundColor: "var(--th-primary)",
                  color: "#000",
                  fontFamily: "var(--font-mono)",
                  borderRadius: "0",
                }}
              >
                {cfg.heroCta}
              </Link>
            </div>
          </div>
        </section>
      ) : (
        /* Gallery / Luxury: full-bleed editorial hero */
        <section
          className="relative overflow-hidden flex flex-col justify-end pt-14"
          style={{ height: "90dvh" }}
        >
          <div className="absolute inset-0 z-0">
            <img
              src={cfg.heroImg}
              alt="ShopCanvas editorial"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, var(--th-bg) 0%, color-mix(in srgb, var(--th-bg) 40%, transparent) 45%, transparent 100%)",
              }}
            />
          </div>

          <div className="relative z-10 pb-16 px-6 max-w-screen-xl mx-auto w-full">
            <div className="max-w-sm lg:max-w-xl">
              <p
                className="mb-4 text-xs font-bold uppercase tracking-[0.25em]"
                style={{
                  color: "var(--th-primary)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {cfg.heroBadge}
              </p>
              <h1
                className="mb-6 text-5xl lg:text-7xl italic leading-[1.05] font-bold"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--th-text)",
                }}
              >
                {cfg.heroHeading[0]}
                <br />
                {cfg.heroHeading[1]}
              </h1>
              <p
                className="mb-8 max-w-xs text-sm leading-relaxed"
                style={{ color: "var(--th-muted)" }}
              >
                {cfg.heroSub}
              </p>
              <div className="flex items-center gap-4">
                <Link to="/catalog" className="btn-primary inline-flex">
                  {cfg.heroCta}
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/catalog"
                  className="text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
                  style={{ color: "var(--th-text)" }}
                >
                  View All →
                </Link>
              </div>
            </div>
          </div>

          {/* Ticker */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t py-3"
            style={{
              borderColor:
                "color-mix(in srgb, var(--th-primary) 20%, transparent)",
              backgroundColor:
                "color-mix(in srgb, var(--th-bg) 85%, transparent)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex gap-12 animate-[ticker_20s_linear_infinite] whitespace-nowrap">
              {tickerItems.map((t, i) => (
                <span
                  key={i}
                  className="text-[11px] font-semibold uppercase tracking-widest shrink-0"
                  style={{ color: "var(--th-muted)" }}
                >
                  <span className="mr-3" style={{ color: "var(--th-primary)" }}>
                    ◆
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Categories ── */}
      <section className="py-10 px-4 lg:px-12">
        <div className="max-w-screen-xl mx-auto">
          {/* Heading */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              {!isStreet && (
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.2em] mb-1"
                  style={{
                    color: "var(--th-primary)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Collections
                </p>
              )}
              <h2
                className="text-xl font-bold"
                style={{
                  fontFamily: isStreet
                    ? "var(--font-mono)"
                    : "var(--font-serif)",
                  color: isStreet ? "var(--th-primary)" : "var(--th-text)",
                  letterSpacing: isStreet ? "0.08em" : undefined,
                }}
              >
                {cfg.categoriesHeading}
              </h2>
            </div>
            <Link
              to="/catalog"
              className="text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity flex items-center gap-1"
              style={{ color: "var(--th-primary)" }}
            >
              View All
            </Link>
          </div>

          {/* Category items: horizontal scroll on mobile */}
          <div
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {cfg.categories.map((cat) =>
              isGourmet ? (
                /* Gourmet: rounded square cards */
                <div
                  key={cat.id}
                  className="flex-none w-32 group cursor-pointer"
                >
                  <div
                    className="size-32 mb-2 overflow-hidden"
                    style={{
                      borderRadius: "1rem",
                      backgroundColor: "var(--th-surface)",
                    }}
                  >
                    <img
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={cat.img}
                      alt={cat.label}
                    />
                  </div>
                  <p
                    className="text-center text-sm font-bold"
                    style={{ color: "var(--th-text)" }}
                  >
                    {cat.label}
                  </p>
                </div>
              ) : isStreet ? (
                /* Street: tall sharp cards */
                <div
                  key={cat.id}
                  className="flex-none relative flex items-center justify-center group overflow-hidden cursor-pointer"
                  style={{
                    width: "140px",
                    aspectRatio: "4/5",
                    backgroundColor: "#151515",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${cat.img}')` }}
                  />
                  <p
                    className="relative z-10 text-white font-extrabold text-sm tracking-tighter px-3 py-1"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.5)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {cat.label}
                  </p>
                </div>
              ) : (
                /* Gallery / Luxury: image card with overlay label */
                <div
                  key={cat.id}
                  className="group relative overflow-hidden cursor-pointer flex-none"
                  style={{
                    width: "clamp(120px, 28vw, 200px)",
                    height: "clamp(120px, 28vw, 200px)",
                    borderRadius: "var(--th-radius-lg, 0.25rem)",
                    backgroundColor: "var(--th-surface)",
                  }}
                >
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h4
                      className="text-xl italic text-white font-semibold"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {cat.label}
                    </h4>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section
        className="px-4 lg:px-12 py-12"
        style={{
          backgroundColor: isStreet ? "#151515" : "var(--th-surface)",
          borderRadius: isStreet ? "0" : "1.5rem 1.5rem 0 0",
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span
                className="flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-widest mb-1"
                style={{ color: "var(--th-primary)" }}
              >
                {!isStreet && <Sparkles size={11} />}
                {cfg.productsLabel}
              </span>
              <h2
                className="text-2xl font-bold"
                style={{
                  fontFamily: isStreet
                    ? "var(--font-mono)"
                    : "var(--font-serif)",
                  color: isStreet ? "#fff" : "var(--th-text)",
                  textTransform: isStreet ? "uppercase" : undefined,
                  fontStyle: isStreet ? "italic" : undefined,
                  letterSpacing: isStreet ? "-0.02em" : undefined,
                }}
              >
                {cfg.productsHeading}
              </h2>
            </div>
            <Link
              to="/catalog"
              className="text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity items-center gap-1 hidden sm:flex"
              style={{ color: "var(--th-muted)" }}
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all hover:opacity-80"
              style={{
                border: `1px solid color-mix(in srgb, var(--th-primary) 40%, transparent)`,
                color: isStreet ? "#fff" : "var(--th-text)",
                borderColor: isStreet ? "rgba(255,255,255,0.2)" : undefined,
              }}
            >
              {cfg.viewAllCta}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Brand Statement (gallery / luxury only) ── */}
      {!isStreet && !isGourmet && (
        <section
          className="px-6 py-20 text-center"
          style={{ backgroundColor: "var(--th-bg)" }}
        >
          <div className="max-w-lg mx-auto">
            <p
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{
                color: "var(--th-primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Our Philosophy
            </p>
            <h2
              className="mb-5 text-4xl lg:text-5xl italic leading-tight"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--th-text)",
              }}
            >
              Objects that
              <br />
              outlive trends
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--th-muted)" }}
            >
              We partner exclusively with independent makers who treat craft as
              a practice, not production. Every piece is chosen for its
              integrity, not its moment.
            </p>
            <Link to="/catalog" className="btn-primary inline-flex">
              Explore the Collection
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      )}

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0) }
          to   { transform: translateX(-33.333%) }
        }
      `}</style>
    </div>
  );
}
