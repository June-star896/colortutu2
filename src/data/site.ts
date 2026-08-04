export type ConceptSlug = "rococo" | "rococo-v2" | "midnight" | "modern";

export interface ProductCategory { name: string; kicker: string; description: string }
export interface FAQItem { question: string; answer: string }
export interface InquiryFormData { name: string; email: string; country: string; requirement: string; message: string }

export const categories: ProductCategory[] = [
  { name: "Zodiac Mirror & Comb Gift Sets", kicker: "COLLECTIBLE BEAUTY RITUALS", description: "Gift-ready mirror and comb sets with plated metal, dimensional details and customizable finishes." },
  { name: "Makeup Puff Gift Sets", kicker: "SOFT-TOUCH DAILY ESSENTIALS", description: "Distinctive silhouettes, skin-friendly materials and packaging designed for gifting and retail display." },
];

export const strengths = [
  ["20 Years", "Beauty tool manufacturing"], ["OEM / ODM", "Concept to production"],
  ["Global", "Export delivery support"], ["Quality", "Process-led inspection"],
];

export const process = [
  ["01", "Brief", "Share your market, positioning and target price."],
  ["02", "Design", "Align shape, color, finish, logo and packaging."],
  ["03", "Sample", "Review appearance, function and production details."],
  ["04", "Produce", "Move into controlled production and export delivery."],
];

export const faqs: FAQItem[] = [
  { question: "Can you develop exclusive products for our brand?", answer: "Yes. We support OEM and ODM projects across product styling, finishes, branding and packaging." },
  { question: "Can we request samples before production?", answer: "Yes. Sampling confirms appearance, function and production requirements before the order proceeds." },
  { question: "Which markets do you support?", answer: "Our export-focused team supports international beauty brands, importers, wholesalers and gift buyers." },
];

export const concepts: Record<ConceptSlug, { label: string; eyebrow: string; heroTitle: string; heroText: string }> = {
  rococo: { label: "Rococo Atelier", eyebrow: "ARTFUL BEAUTY TOOLS · OEM / ODM", heroTitle: "Art-Inspired Beauty Tools, Crafted for Your Brand.", heroText: "Turn everyday rituals into collectible moments with expressive design and two decades of manufacturing experience." },
  "rococo-v2": { label: "Rococo Atelier Refined", eyebrow: "THE ART OF BEAUTY · MADE FOR YOUR BRAND", heroTitle: "Collectible Beauty Tools, Made to Enchant.", heroText: "Where jewelry-like detail meets dependable manufacturing—created for beauty brands, gifting collections and memorable retail moments." },
  midnight: { label: "Midnight Jewelry", eyebrow: "DESIGNED TO CAPTIVATE · ENGINEERED TO SCALE", heroTitle: "Beauty Tools with the Presence of Jewelry.", heroText: "Distinctive metalwork, premium finishes and practical OEM/ODM support for brands ready to stand apart." },
  modern: { label: "Modern Beauty Manufacturer", eyebrow: "BEAUTY TOOL MANUFACTURER · EST. 2006", heroTitle: "Designed to Delight. Built for Your Brand.", heroText: "A clear path from product concept to export delivery—supported by experienced development and quality control." },
};
