import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/twc/Header";
import { Footer } from "@/components/twc/Footer";
import ascensionAsset from "@/assets/ascension.png.asset.json";
import aureliaAsset from "@/assets/aurelia.png.asset.json";
import { ArrowRight, Heart } from "lucide-react";

export const Route = createFileRoute("/collections")({
  component: CollectionsPage,
  head: () => ({
    meta: [
      { title: "Collections — TWC Watches" },
      { name: "description", content: "Explore the TWC Watches collections — Ascension, Aurelia and upcoming limited editions. Only 250 pieces worldwide." },
      { property: "og:title", content: "Collections — TWC Watches" },
      { property: "og:description", content: "Explore Ascension, Aurelia and upcoming limited editions. Only 250 pieces worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const watches = [
  {
    slug: "ascension",
    name: "Ascension",
    tag: "Limited Edition",
    price: "₹21,000",
    original: "₹49,999",
    img: ascensionAsset.url,
    gender: "Men",
  },
  {
    slug: "aurelia",
    name: "Aurelia",
    tag: "Limited Edition",
    price: "₹21,000",
    original: "₹49,999",
    img: aureliaAsset.url,
    gender: "Women",
  },
  {
    slug: "chronos",
    name: "Chronos",
    tag: "Coming Soon",
    price: null,
    original: null,
    img: ascensionAsset.url,
    gender: "Men",
  },
  {
    slug: "elevate",
    name: "Elevate",
    tag: "Coming Soon",
    price: null,
    original: null,
    img: aureliaAsset.url,
    gender: "Women",
  },
];

function CollectionsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-black py-24 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <p className="eyebrow mb-6">The Collections</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 max-w-3xl">
              Timepieces engineered<br />to outlive generations.
            </h1>
            <p className="text-white/60 max-w-xl font-light">
              Every TWC collection is strictly limited to 250 pieces worldwide. Once reserved, never repeated.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 border-y border-white/5">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {watches.map((p) => (
                <div key={p.slug} className="group relative bg-[#0c0c0c] border border-white/5 hover:border-gold/30 transition-all duration-500">
                  <button
                    aria-label="Add to wishlist"
                    className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full border border-white/10 bg-black/50 backdrop-blur flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/40 transition-all"
                  >
                    <Heart className="h-3.5 w-3.5" />
                  </button>
                  <div className="aspect-square overflow-hidden bg-black">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-1">{p.gender}</p>
                    <h3 className="font-serif text-2xl text-white mb-1">{p.name}</h3>
                    <p className={`text-[10px] tracking-[0.28em] uppercase mb-4 ${p.price ? "text-gold" : "text-white/50"}`}>
                      {p.tag}
                    </p>
                    {p.price ? (
                      <div className="flex items-baseline justify-center gap-2 mb-5">
                        <span className="font-serif text-xl text-gold">{p.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{p.original}</span>
                      </div>
                    ) : (
                      <p className="text-[11px] tracking-[0.28em] uppercase text-gold/70 mb-5">
                        → Coming Soon ←
                      </p>
                    )}
                    {p.price ? (
                      <Link
                        to="/products/$slug"
                        params={{ slug: p.slug }}
                        className="inline-flex items-center justify-center gap-2 w-full py-3 border border-white/10 text-[10px] tracking-[0.28em] uppercase text-white/80 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all"
                      >
                        View Details <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <button className="w-full py-3 border border-white/10 text-[10px] tracking-[0.28em] uppercase text-white/80 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all">
                        Notify Me
                      </button>
                    )}
                  </div>
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
