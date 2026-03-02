export const PRODUCTS = [
  // ── GALLERY / ART ──────────────────────────────────────────────
  {
    id: "1",
    name: "Wabi-Sabi Vessel No. 3",
    artist: "Hiro Tanaka",
    price: 420,
    originalPrice: 560,
    category: "ceramics",
    theme: "gallery",
    rating: 4.8,
    reviews: 34,
    tag: "Limited",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=600&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&q=80",
    ],
    description:
      "A meditative piece exploring the beauty of imperfection. Hand-thrown stoneware with natural ash glaze, fired at 1280°C in an anagama kiln. Each vessel is one-of-a-kind.",
    dimensions: "H: 18 cm × D: 12 cm",
    material: "Stoneware, natural ash glaze",
    inStock: true,
    sizes: ["Small", "Medium", "Large"],
    mockReviews: [
      {
        id: "r1",
        user: "Elena G.",
        rating: 5,
        date: "2024-02-15",
        comment:
          "Absolutely stunning. The glaze is even more beautiful in person — depth and texture I've never seen before.",
      },
      {
        id: "r2",
        user: "Marcus V.",
        rating: 4,
        date: "2024-01-20",
        comment:
          "Great quality, though slightly smaller than I expected from the photos. Still worth every cent.",
      },
    ],
  },
  {
    id: "2",
    name: "Ink & Void Print, No. 7",
    artist: "Sable Roux",
    price: 280,
    originalPrice: null,
    category: "prints",
    theme: "gallery",
    rating: 5.0,
    reviews: 9,
    tag: "Limited",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80",
      "https://images.unsplash.com/photo-1561839561-b13bcfe20db6?w=600&q=80",
    ],
    description:
      "Museum-quality giclée print on 310gsm cotton rag. Edition of 50, hand-signed and numbered. Archival pigment inks rated 200+ years lightfast.",
    dimensions: "50 × 70 cm",
    material: "Giclée on cotton rag paper",
    inStock: true,
    sizes: ["A3", "50×70 cm", "70×100 cm"],
    mockReviews: [
      {
        id: "r2a",
        user: "Isabella S.",
        rating: 5,
        date: "2024-02-01",
        comment:
          "Breathtaking quality. The depth of the blacks is incredible — unlike any print I've owned.",
      },
    ],
  },
  {
    id: "3",
    name: "Celadon Moon Bowl",
    artist: "Studio Kiri",
    price: 195,
    originalPrice: null,
    category: "ceramics",
    theme: "gallery",
    rating: 4.6,
    reviews: 22,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
      "https://images.unsplash.com/photo-1513557520527-ef37580f4ad2?w=600&q=80",
    ],
    description:
      "Wheel-thrown porcelain bowl with signature celadon glaze. The translucent glaze pools beautifully in the foot ring, creating a subtle gradient from seafoam to pale jade.",
    dimensions: "D: 24 cm × H: 10 cm",
    material: "Porcelain, celadon glaze",
    inStock: true,
    sizes: ["Small (16cm)", "Medium (24cm)", "Large (32cm)"],
    mockReviews: [
      {
        id: "r3a",
        user: "Anika P.",
        rating: 5,
        date: "2024-03-01",
        comment:
          "Truly a functional work of art. I use it every morning and still stop to admire it.",
      },
    ],
  },
  {
    id: "4",
    name: "Abstract Triptych Study",
    artist: "Lena Morin",
    price: 680,
    originalPrice: null,
    category: "prints",
    theme: "gallery",
    rating: 4.9,
    reviews: 5,
    tag: "Limited",
    image:
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&q=80",
    ],
    description:
      "Three complementary fine art prints exploring contrasting emotions through color theory and gestural mark-making. Sold as a complete triptych, framed in solid oak.",
    dimensions: "3 × 40 × 50 cm, framed",
    material: "Archival pigment on Hahnemühle German Etching",
    inStock: true,
    sizes: ["Unframed", "Oak frame", "Walnut frame"],
    mockReviews: [
      {
        id: "r4a",
        user: "Remy D.",
        rating: 5,
        date: "2024-02-20",
        comment:
          "Transformed our living room completely. The framing quality matches the print quality perfectly.",
      },
    ],
  },

  // ── LUXURY / FASHION ──────────────────────────────────────────────
  {
    id: "5",
    name: "Velvet Noir Blazer",
    artist: "Maison Elara",
    price: 890,
    originalPrice: null,
    category: "fashion",
    theme: "luxury",
    rating: 4.9,
    reviews: 18,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    ],
    description:
      "Structured velvet blazer with hand-stitched lapels and a double-button closure. Cut from Italian velvet, zero-waste pattern cutting, fully organic cotton lining.",
    dimensions: "S / M / L / XL",
    material: "Italian velvet, organic lining",
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    mockReviews: [
      {
        id: "r5a",
        user: "Sophia L.",
        rating: 5,
        date: "2024-02-10",
        comment:
          "The velvet is incredibly soft and the fit is perfect. Worth every penny.",
      },
      {
        id: "r5b",
        user: "Julian K.",
        rating: 5,
        date: "2024-01-05",
        comment: "Exquisite craftsmanship. A true statement piece.",
      },
    ],
  },
  {
    id: "6",
    name: "Amethyst Dust Eau de Parfum",
    artist: "Maison Elara",
    price: 320,
    originalPrice: null,
    category: "beauty",
    theme: "luxury",
    rating: 4.9,
    reviews: 43,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80",
    ],
    description:
      "A woody-floral composition with top notes of bergamot and black pepper, heart of iris and violet, base of aged sandalwood and ambergris. Long-lasting 12–14 hour projection.",
    dimensions: "50ml / 100ml EDP",
    material: "EDP concentration, vegan & cruelty-free",
    inStock: true,
    sizes: ["30ml", "50ml", "100ml"],
    mockReviews: [
      {
        id: "r6a",
        user: "Chloe B.",
        rating: 5,
        date: "2024-02-14",
        comment:
          "Unique and sophisticated. I get so many compliments every time I wear it.",
      },
      {
        id: "r6b",
        user: "Nour A.",
        rating: 5,
        date: "2024-03-02",
        comment:
          "The longevity is remarkable — 12 hours and still going. True luxury.",
      },
    ],
  },
  {
    id: "7",
    name: "Cashmere Wrap Coat",
    artist: "House of Voss",
    price: 1240,
    originalPrice: 1580,
    category: "fashion",
    theme: "luxury",
    rating: 4.8,
    reviews: 11,
    tag: "Sale",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80",
      "https://images.unsplash.com/photo-1548624313-0396986d1536?w=600&q=80",
    ],
    description:
      "Belted wrap coat in Grade-A Mongolian cashmere. Oversized silhouette with a deep shawl collar. Dry-clean only. Season-less investment piece.",
    dimensions: "XS / S / M / L / XL",
    material: "100% Grade-A Mongolian Cashmere",
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    mockReviews: [
      {
        id: "r7a",
        user: "Margot F.",
        rating: 5,
        date: "2024-01-18",
        comment:
          "The softest coat I have ever owned. Lived up to every expectation.",
      },
    ],
  },
  {
    id: "8",
    name: "The Icon Sneaker - Ivory",
    artist: "Voss Sport",
    price: 395,
    originalPrice: null,
    category: "fashion",
    theme: "luxury",
    rating: 4.7,
    reviews: 67,
    tag: null,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      "https://images.unsplash.com/photo-1600185365778-1b8ee70a3220?w=600&q=80",
    ],
    description:
      "Premium court sneaker in waxed full-grain leather. Commano outsole made from recycled rubber. Hand-burnished toe box. Ships in signature box with dust bags.",
    dimensions: "EU 36–47",
    material: "Full-grain waxed leather, recycled rubber sole",
    inStock: true,
    sizes: ["EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
    mockReviews: [
      {
        id: "r8a",
        user: "Luca V.",
        rating: 5,
        date: "2024-02-28",
        comment: "The leather quality is extraordinary. Breaks in beautifully.",
      },
    ],
  },

  // ── GOURMET / FOOD ──────────────────────────────────────────────
  {
    id: "9",
    name: "Single Origin Terroir Trio",
    artist: "Altura Farms",
    price: 68,
    originalPrice: null,
    category: "food",
    theme: "gourmet",
    rating: 4.7,
    reviews: 92,
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&q=80",
    ],
    description:
      "Three 100g bags of experimental single-origin coffees — natural, washed, and honey process — from a single cooperative in Yirgacheffe, Ethiopia. Harvest 2024. Roasted to order.",
    dimensions: "3 × 100g",
    material: "100% Arabica, altitude 1800–2200m",
    inStock: true,
    sizes: ["100g × 3", "250g × 3", "500g × 3"],
    mockReviews: [
      {
        id: "r9a",
        user: "David R.",
        rating: 5,
        date: "2024-02-28",
        comment:
          "Best coffee I've had in years. The flavor profiles are clear, elegant, and distinctive.",
      },
      {
        id: "r9b",
        user: "Linda M.",
        rating: 4,
        date: "2024-02-12",
        comment:
          "Really loved the honey process. Shipping took a little longer than expected but worth the wait.",
      },
    ],
  },
  {
    id: "10",
    name: "Aged Balsamic di Modena",
    artist: "Acetaia Vecchia",
    price: 48,
    originalPrice: null,
    category: "food",
    theme: "gourmet",
    rating: 4.9,
    reviews: 65,
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80",
      "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?w=600&q=80",
    ],
    description:
      "Traditional Balsamic Vinegar of Modena DOP, aged 25 years in a battery of seven barrels (juniper, chestnut, cherry, mulberry, oak, ash, acacia). Viscous, sweet-tart, complex.",
    dimensions: "100ml bottle",
    material: "Trebbiano & Lambrusco grapes, 25-year aged",
    inStock: true,
    sizes: ["100ml", "250ml"],
    mockReviews: [
      {
        id: "r10a",
        user: "Gianna M.",
        rating: 5,
        date: "2024-03-01",
        comment:
          "I have never tasted anything like this. It transformed a simple Parmigiano plate into fine dining.",
      },
    ],
  },
  {
    id: "11",
    name: "Aleppo Soap Bundle",
    artist: "Savonnerie du Levant",
    price: 44,
    originalPrice: null,
    category: "wellness",
    theme: "gourmet",
    rating: 4.8,
    reviews: 78,
    tag: null,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
      "https://images.unsplash.com/photo-1607006483224-5c65fd71dec1?w=600&q=80",
    ],
    description:
      "Traditional Aleppo laurel-berry soap (Savon de Château), cave-aged 3 years to develop its distinctive dark exterior and honey-colored core. Zero additives. 3-bar bundle.",
    dimensions: "3 × 180g bars",
    material: "Olive oil, laurel berry oil (20%)",
    inStock: true,
    sizes: ["1 Bar", "3 Bar Bundle", "5 Bar Bundle"],
    mockReviews: [
      {
        id: "r11a",
        user: "Thomas H.",
        rating: 5,
        date: "2024-01-30",
        comment:
          "My skin has never felt better. Natural, effective, and it smells like nothing else on earth.",
      },
    ],
  },
  {
    id: "12",
    name: "Calabrian Chilli Honey",
    artist: "Masseria Lamiola",
    price: 29,
    originalPrice: null,
    category: "food",
    theme: "gourmet",
    rating: 4.8,
    reviews: 130,
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80",
    ],
    description:
      "Raw wildflower honey infused with whole dried Calabrian chillies for 60 days. Sweet, floral, fiercely hot — drizzle over cheese, pizza, or gelato.",
    dimensions: "250g jar",
    material: "Raw Italian wildflower honey, Calabrian chilli",
    inStock: true,
    sizes: ["250g", "500g"],
    mockReviews: [
      {
        id: "r12a",
        user: "Priya S.",
        rating: 5,
        date: "2024-02-22",
        comment:
          "I put this on everything. The heat and sweetness balance is perfect.",
      },
    ],
  },

  // ── STREETWEAR ──────────────────────────────────────────────────
  {
    id: "13",
    name: "Acid Wash Utility Cargo",
    artist: "BLOK",
    price: 145,
    originalPrice: 190,
    category: "streetwear",
    theme: "street",
    rating: 4.6,
    reviews: 211,
    tag: "Sale",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
    ],
    description:
      "Oversized cargo trousers with 8-pocket utility construction. Heavy-duty 380gsm twill with hand-done acid wash. Bar-tack reinforced at all stress points. Adjustable drawcord hem.",
    dimensions: "Oversized — size down for a regular fit",
    material: "380gsm heavy twill, 100% cotton",
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    mockReviews: [
      {
        id: "r13a",
        user: "Zack T.",
        rating: 5,
        date: "2024-02-20",
        comment:
          "The fit and weight is exactly what I wanted. Material is built to last years.",
      },
      {
        id: "r13b",
        user: "Alex J.",
        rating: 4,
        date: "2024-01-15",
        comment:
          "Sick wash, pockets are actually functional. Runs a bit large so I'd recommend sizing down.",
      },
    ],
  },
  {
    id: "14",
    name: "Reflective Tarp Shell",
    artist: "BLOK",
    price: 265,
    originalPrice: null,
    category: "streetwear",
    theme: "street",
    rating: 4.7,
    reviews: 56,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
      "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=600&q=80",
    ],
    description:
      "Full-length shell jacket constructed from recycled nylon tarp. 360° retroreflective coating activates in headlights. Fully seam-sealed. Packable into inner pocket. 10,000mm waterhead.",
    dimensions: "Standard fit — true to size",
    material: "Recycled nylon tarp, 360° reflective coating",
    inStock: false,
    sizes: ["S", "M", "L", "XL"],
    mockReviews: [
      {
        id: "r14a",
        user: "Jordan P.",
        rating: 5,
        date: "2024-02-18",
        comment:
          "Insane visibility at night. Perfect for urban cycling — I feel totally safe.",
      },
    ],
  },
  {
    id: "15",
    name: "Washed Fleece Quarter-Zip",
    artist: "VOID SUPPLY",
    price: 120,
    originalPrice: null,
    category: "streetwear",
    theme: "street",
    rating: 4.5,
    reviews: 88,
    tag: null,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
    ],
    description:
      "Garment-washed heavyweight fleece quarter-zip with contrast stitching and an embroidered chest logo. Brushed interior for warmth without bulk. Boxy, cropped silhouette.",
    dimensions: "Boxy — size up for a longer hem",
    material: "340gsm microfleece, 100% polyester recycled",
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    mockReviews: [
      {
        id: "r15a",
        user: "Mia K.",
        rating: 4,
        date: "2024-03-05",
        comment:
          "Very cozy. The garment wash gives it that perfect worn-in look from day one.",
      },
    ],
  },
  {
    id: "16",
    name: "Triple Sole Runner — Black",
    artist: "RAW FORM",
    price: 175,
    originalPrice: 230,
    category: "streetwear",
    theme: "street",
    rating: 4.8,
    reviews: 149,
    tag: "Sale",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    ],
    description:
      "Chunky triple-density EVA runner with a mesh ripstop upper, co-moulded TPU overlays at the toe and heel, and a rubberised lug outsole. Streetwear-ready athletic silhouette.",
    dimensions: "EU 36–47, true to size",
    material: "Ripstop mesh, TPU overlays, triple-density EVA midsole",
    inStock: true,
    sizes: [
      "EU 38",
      "EU 39",
      "EU 40",
      "EU 41",
      "EU 42",
      "EU 43",
      "EU 44",
      "EU 45",
    ],
    mockReviews: [
      {
        id: "r16a",
        user: "Carlos M.",
        rating: 5,
        date: "2024-01-29",
        comment:
          "Most comfortable shoes I own. The sole is thick but not clunky.",
      },
      {
        id: "r16b",
        user: "Sam W.",
        rating: 5,
        date: "2024-02-10",
        comment: "Big shoe energy. Gets attention everywhere.",
      },
    ],
  },

  // ── MIXED ──────────────────────────────────────────────────────
  {
    id: "17",
    name: "Handwoven Linen Tablecloth",
    artist: "Atelier Fil",
    price: 155,
    originalPrice: null,
    category: "homeware",
    theme: "gallery",
    rating: 4.7,
    reviews: 29,
    tag: null,
    image:
      "https://images.unsplash.com/photo-1615715874867-2f6e2bd8ae3d?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1615715874867-2f6e2bd8ae3d?w=600&q=80",
    ],
    description:
      "Stone-washed European linen tablecloth in natural undyed ecru. Handwoven in a small family workshop in the Vendée, France. Pre-washed to minimize further shrinkage. Softens with each wash.",
    dimensions: "140 × 280 cm",
    material: "100% European linen, stone-washed",
    inStock: true,
    sizes: ["140×200 cm", "140×280 cm", "180×280 cm"],
    mockReviews: [
      {
        id: "r17a",
        user: "Nina D.",
        rating: 5,
        date: "2024-02-08",
        comment:
          "The texture and drape is impeccable. Our Sunday lunches feel elevated instantly.",
      },
    ],
  },
  {
    id: "18",
    name: "Palo Santo & Wild Herb Candle",
    artist: "Borough Wax",
    price: 36,
    originalPrice: null,
    category: "wellness",
    theme: "gourmet",
    rating: 4.6,
    reviews: 204,
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    ],
    description:
      "Hand-poured soy-coconut blend scented with palo santo resin, wild rosemary, and cypress. 55-hour burn time. Cotton wick. No paraffin, no synthetic fragrance.",
    dimensions: "220g, approx. 55 hr burn",
    material: "Soy-coconut wax, essential oil fragrance",
    inStock: true,
    sizes: ["Small (100g)", "Medium (220g)", "Large (400g)"],
    mockReviews: [
      {
        id: "r18a",
        user: "Yuki T.",
        rating: 5,
        date: "2024-03-03",
        comment:
          "The best candle I've ever bought. The scent is complex but subtle and lasts well.",
      },
    ],
  },
  {
    id: "19",
    name: "Merino Base Layer Set",
    artist: "Nordform",
    price: 98,
    originalPrice: 130,
    category: "fashion",
    theme: "luxury",
    rating: 4.8,
    reviews: 53,
    tag: "Sale",
    image:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&q=80",
    ],
    description:
      "Long-sleeve crew and matching legging in 200gsm Mulesing-free Merino. Temperature-regulating, odour-resistant, machine washable. Scandinavian minimal design with flatlock seams.",
    dimensions: "XS / S / M / L / XL",
    material: "200gsm Merino wool, mulesing-free",
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    mockReviews: [
      {
        id: "r19a",
        user: "Ellen B.",
        rating: 5,
        date: "2024-02-25",
        comment:
          "I wear this for hiking and it works better than any synthetic I've tried. And it looks beautiful.",
      },
    ],
  },
  {
    id: "20",
    name: "Cold Brew Concentrate Kit",
    artist: "Altura Farms",
    price: 42,
    originalPrice: null,
    category: "food",
    theme: "gourmet",
    rating: 4.5,
    reviews: 47,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    ],
    description:
      "Everything you need to brew café-quality cold brew at home. Includes 400g of coarse-ground specialty coffee, a reusable cotton brew bag, and an illustrated recipe card.",
    dimensions: "400g coffee + brew bag",
    material: "Specialty-grade Arabica, reusable cotton brew bag",
    inStock: true,
    sizes: ["400g Kit", "800g Kit (2-pack)"],
    mockReviews: [
      {
        id: "r20a",
        user: "Sam P.",
        rating: 5,
        date: "2024-03-04",
        comment:
          "Made my first batch and it was better than any coffee shop cold brew.",
      },
    ],
  },
];

export const CATEGORIES = [
  { id: "all", label: "All", icon: "⬡" },
  { id: "ceramics", label: "Ceramics", icon: "🏺" },
  { id: "fashion", label: "Fashion", icon: "👗" },
  { id: "prints", label: "Prints", icon: "🖼️" },
  { id: "food", label: "Gourmet", icon: "☕" },
  { id: "beauty", label: "Beauty", icon: "✨" },
  { id: "wellness", label: "Wellness", icon: "🌿" },
  { id: "streetwear", label: "Streetwear", icon: "🧥" },
  { id: "homeware", label: "Homeware", icon: "🏠" },
];
