import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/twc/Header";
import { Footer } from "@/components/twc/Footer";
import ascensionAsset from "@/assets/ascension.png.asset.json";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/men")({
  component: MenPage,
  head: () => ({
    meta: [
      { title: "Men's Watches — TWC Watches" },
      { name: "description", content: "Discover TWC Watches for men — bold, limited edition timepieces including the Ascension tourbillon skeleton." },
      { property: "og:title", content: "Men's Watches — TWC Watches" },
      { property: "og:description", content: "Bold limited edition timepieces for men. Swiss-inspired craftsmanship." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function MenPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-black py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <p className="eyebrow mb-6">For Him</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 max-w-3xl">
              Engineered for ambition.
            </h1>
            <p className="text-white/60 max-w-xl mb-12 font-light">
              A curated selection of men's limited editions — where power meets precision.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/products/ascension" className="group relative bg-[#0c0c0c] border border-white/5 hover:border-gold/30 transition-all duration-500">
                <div className="aspect-square overflow-hidden bg-black">
                  <img
                    src={ascensionAsset.url}
                    alt="Ascension"
                    loading="lazy"
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl text-white mb-1">Ascension</h3>
                  <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-4">Limited Edition</p>
                  <div className="flex items-baseline justify-center gap-2 mb-5">
                    <span className="font-serif text-xl text-gold">₹21,000</span>
                    <span className="text-xs text-muted-foreground line-through">₹1,40,000</span>
                  </div>
                  <span className="inline-flex items-center justify-center gap-2 w-full py-3 border border-white/10 text-[10px] tracking-[0.28em] uppercase text-white/80 group-hover:border-gold group-hover:text-gold group-hover:bg-gold/5 transition-all">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
