import { createFileRoute, notFound } from "@tanstack/react-router";
import { Header } from "@/components/twc/Header";
import { Footer } from "@/components/twc/Footer";
import ascensionAsset from "@/assets/ascension.png.asset.json";
import aureliaAsset from "@/assets/aurelia.png.asset.json";
import { ArrowRight, Shield, Package, Truck, Award, Gem, Droplets, Clock } from "lucide-react";

const products: Record<string, {
  name: string;
  tagline: string;
  tag: string;
  price: string;
  original: string;
  save: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}> = {
  ascension: {
    name: "Ascension",
    tagline: "Rise above ordinary.",
    tag: "Limited Edition",
    price: "₹21,000",
    original: "₹49,999",
    save: "₹28,999",
    description: "A masterpiece of precision and ambition. The Ascension features an open-heart tourbillon skeleton dial, 18K rose gold plating, and a 72-hour power reserve. Crafted for those who rise above ordinary — and leave a legacy.",
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
    description: "The Aurelia captures timeless grace in a diamond-set rose gold case. A refined open-heart dial reveals the soul of the movement, while the polished bracelet catches light like jewellery. Made for moments that become memories.",
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

export const Route = createFileRoute("/products/$slug")({
  component: ProductPage,
  head: ({ params }) => {
    const product = products[params.slug];
    return {
      meta: [
        { title: product ? `${product.name} — TWC Watches` : "Product — TWC Watches" },
        { name: "description", content: product ? `${product.name} — ${product.description.slice(0, 155)}` : "Discover TWC Watches limited edition timepieces." },
        { property: "og:title", content: product ? `${product.name} — TWC Watches` : "Product — TWC Watches" },
        { property: "og:description", content: product ? product.description.slice(0, 160) : "Discover TWC Watches." },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

const highlights = [
  { icon: Gem, label: "18K Rose Gold" },
  { icon: Award, label: "Swiss Inspired" },
  { icon: Droplets, label: "Water Resistant" },
  { icon: Shield, label: "2 Year Warranty" },
];

function ProductPage() {
  const { slug } = Route.useParams();
  const product = products[slug];

  if (!product) {
    throw notFound();
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative bg-[#0a0a0a] border border-white/5 aspect-square flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-8 md:p-12"
                />
              </div>

              <div>
                <p className="eyebrow mb-4">{product.tag}</p>
                <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-3">{product.name}</h1>
                <p className="font-serif text-2xl text-gold/80 italic mb-8">{product.tagline}</p>
                <p className="text-white/70 leading-relaxed font-light max-w-lg mb-8">
                  {product.description}
                </p>

                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-serif text-4xl text-gold">{product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">{product.original}</span>
                </div>
                <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold/40 mb-10">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="text-[10px] tracking-[0.28em] uppercase text-gold">
                    Launch Offer · Save {product.save}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-12">
                  <button className="btn-gold btn-gold-hover group">
                    Add to Bag
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="btn-ghost-gold">
                    Book Concierge Call
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                  {highlights.map((h) => (
                    <div key={h.label} className="border border-white/5 p-4 text-center">
                      <h.icon className="h-5 w-5 text-gold mx-auto mb-2" strokeWidth={1} />
                      <p className="text-[10px] tracking-[0.2em] uppercase text-white/70">{h.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-white/50">
                  <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> Free Shipping</span>
                  <span className="flex items-center gap-2"><Package className="h-4 w-4" /> Premium Box</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 2 Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-y border-white/5 bg-[#080808]">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <h2 className="font-serif text-3xl text-white mb-10">Specifications</h2>
            <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {product.specs.map((spec) => (
                <div key={spec.label} className="bg-[#080808] p-6 flex justify-between items-center">
                  <span className="text-white/50 text-sm">{spec.label}</span>
                  <span className="text-white text-sm font-medium text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
