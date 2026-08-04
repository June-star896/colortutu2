export type ProductSlug = "zodiac-mirror-comb-gift-set" | "makeup-puff-applicator-gift-set";

export interface ProductPageData {
  slug: ProductSlug;
  name: string;
  kicker: string;
  intro: string;
  images: { src: string; alt: string; position?: string }[];
  storyImage: string;
  storyTitle: string;
  story: string;
  tags: string[];
  gallery: { src: string; title: string; text: string; position?: string }[];
  highlights: { kicker: string; title: string; text: string }[];
  productType: string;
  customization: string;
}

export const products: Record<ProductSlug, ProductPageData> = {
  "zodiac-mirror-comb-gift-set": {
    slug: "zodiac-mirror-comb-gift-set",
    name: "Zodiac Mirror & Comb Gift Set",
    kicker: "COLLECTIBLE BEAUTY RITUALS",
    intro: "An art-led mirror and comb collection created for gifting, collectible launches and distinctive retail displays.",
    images: [
      { src: "/images/zodiac-gift-set-studio.png", alt: "Colotutu zodiac mirror and comb gift set with lavender packaging", position: "center 55%" },
      { src: "/images/zodiac-mirrors-editorial.png", alt: "Four collectible Colotutu zodiac mirrors" },
      { src: "/images/zodiac-combs-editorial.png", alt: "Four jeweled Colotutu decorative combs" },
      { src: "/images/zodiac-collection-four-colors.png", alt: "Four Colotutu zodiac gift set colorways" },
    ],
    storyImage: "/images/zodiac-gift-set.png",
    storyTitle: "A little treasure for every beauty ritual.",
    story: "Jewelry-like silhouettes, expressive zodiac details and coordinated gift presentation turn an everyday tool into a collection with emotional and commercial appeal.",
    tags: ["Mirror & comb set", "Zodiac gifting", "Custom packaging"],
    gallery: [
      { src: "/images/zodiac-mirrors-editorial.png", title: "The Zodiac Mirror Collection", text: "Jewelry-like frames in four collectible color stories." },
      { src: "/images/zodiac-combs-editorial.png", title: "The Decorative Comb Collection", text: "Ornamental details with a luminous, premium finish." },
      { src: "/images/zodiac-collection-four-colors.png", title: "Gift-Ready Colorways", text: "Coordinated product, packaging and retail presentation." },
    ],
    highlights: [
      { kicker: "COLLECTIBLE DESIGN", title: "Collectible Design", text: "Recognizable forms built for display, gifting and social storytelling." },
      { kicker: "COORDINATED SET", title: "Coordinated Set", text: "Mirror, comb and packaging share one consistent visual language." },
      { kicker: "RETAIL PRESENCE", title: "Retail Presence", text: "Dimensional details help the collection feel memorable on shelf." },
    ],
    productType: "Mirror and comb gift set",
    customization: "Finish, color, graphics, logo and packaging",
  },
  "makeup-puff-applicator-gift-set": {
    slug: "makeup-puff-applicator-gift-set",
    name: "Makeup Puff & Applicator Gift Set",
    kicker: "SOFT-TOUCH DAILY ESSENTIALS",
    intro: "A gift-ready beauty application set combining soft-touch tools, expressive packaging and private-label development support.",
    images: [
      { src: "/images/puff-lavender-editorial.png", alt: "Colotutu lavender makeup puff and applicator gift set", position: "center 54%" },
      { src: "/images/makeup-puff-gift-set-studio.png", alt: "Colotutu makeup puff gift set studio view", position: "center 54%" },
      { src: "/images/makeup-puff-gift-set.jpg", alt: "Colotutu makeup puff gift set retail view", position: "center 48%" },
    ],
    storyImage: "/images/makeup-puff-gift-set.jpg",
    storyTitle: "Soft-touch performance, made gift-ready.",
    story: "A coordinated puff and applicator set brings together daily usability, comfortable materials and a presentation designed for seasonal gifting and beauty retail.",
    tags: ["Makeup puff set", "Applicator tools", "Private label"],
    gallery: [
      { src: "/images/puff-lavender-editorial.png", title: "A Complete Beauty Ritual", text: "Puff, applicator and compact presented as one gift-ready story." },
      { src: "/images/makeup-puff-gift-set-studio.png", title: "Designed for Gifting", text: "Lavender packaging, satin detail and coordinated brand graphics." },
      { src: "/images/makeup-puff-gift-set.jpg", title: "Retail-Ready Presentation", text: "A polished set created for shelves, launches and seasonal edits." },
    ],
    highlights: [
      { kicker: "SOFT-TOUCH USE", title: "Soft-Touch Use", text: "A comfortable beauty application experience for everyday routines." },
      { kicker: "CURATED TOOL SET", title: "Curated Tool Set", text: "Puff and applicator formats presented as one coordinated collection." },
      { kicker: "GIFT PRESENTATION", title: "Gift Presentation", text: "Designed for beauty retail, promotional sets and seasonal gifting." },
    ],
    productType: "Makeup puff and applicator gift set",
    customization: "Material, shape, color, logo and packaging",
  },
};

export const productSlugs = Object.keys(products) as ProductSlug[];
