import ascensionAsset from "@/assets/ascension.png.asset.json";
import aureliaAsset from "@/assets/aurelia.png.asset.json";

export interface Product {
  name: string;
  tagline: string;
  tag: string;
  price: string;
  original: string;
  save: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export const products: Record<string, Product> = {
  ascension: {
    name: "Ascension",
    tagline: "Rise above ordinary.",
    tag: "Limited Edition",
    price: "₹21,000",
    original: "₹49,999",
    save: "₹28,999",
    description:
      "A masterpiece of precision and ambition. The Ascension features an open-heart tourbillon skeleton dial, 18K rose gold plating, and a 72-hour power reserve. Crafted for those who rise above ordinary — and leave a legacy.",
    image: ascensionAsset.url,
    specs: [
      { label: "Movement", value: "Manual-winding tourbillon" },
      { label: "Case", value: "316L stainless steel with 18K rose gold PVD" },
      { label: "Crystal", value: "Sapphire with AR coating" },
      { label: "Water Resistance", value: "5 ATM (50 metres)" },
      { label: "Diameter", value: "42 mm" },
      { label: "Thickness", value: "12.5 mm" },
      { label: "Power Reserve", value: "72 hours" },
      { label: "Limited To", value: "250 pieces worldwide" },
    ],
  },
  aurelia: {
    name: "Aurelia",
    tagline: "Elegance, eternal.",
    tag: "Limited Edition",
    price: "₹21,000",
    original: "₹49,999",
    save: "₹28,999",
    description:
      "The Aurelia captures timeless grace in a diamond-set rose gold case. A refined open-heart dial reveals the soul of the movement, while the polished bracelet catches light like jewellery. Made for moments that become memories.",
    image: aureliaAsset.url,
    specs: [
      { label: "Movement", value: "Automatic open-heart" },
      { label: "Case", value: "316L stainless steel with 18K rose gold PVD" },
      { label: "Crystal", value: "Sapphire with AR coating" },
      { label: "Water Resistance", value: "3 ATM (30 metres)" },
      { label: "Diameter", value: "36 mm" },
      { label: "Thickness", value: "10.5 mm" },
      { label: "Stones", value: "Natural VS1 diamonds on bezel" },
      { label: "Limited To", value: "250 pieces worldwide" },
    ],
  },
};

export const productSlugs = Object.keys(products).sort();
