import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/twc/Header";
import { Footer } from "@/components/twc/Footer";
import movementImg from "@/assets/movement.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About TWC Watches — Time Will Change" },
      { name: "description", content: "Learn about TWC Watches — a luxury-inspired atelier creating limited edition timepieces for those who rise above ordinary." },
      { property: "og:title", content: "About TWC Watches — Time Will Change" },
      { property: "og:description", content: "Luxury-inspired atelier creating limited edition timepieces. Time Will Change." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-black py-24 md:py-40">
          <div className="absolute inset-0 opacity-30">
            <img src={movementImg} alt="Watch movement" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 text-center">
            <p className="eyebrow mb-6">Our Story</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
              Time Will Change.<br />
              <span className="text-gold italic">So should you.</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              TWC Watches was born from a simple belief: time is life's greatest luxury. We create limited edition timepieces for those who refuse to settle — engineered to defy time, crafted to outlive generations.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 border-y border-white/5">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-3xl text-white mb-4">Our Mission</h3>
              <p className="text-white/60 leading-relaxed font-light">
                To democratise luxury watchmaking without compromise — bringing Swiss-inspired craftsmanship to ambitious individuals worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-white mb-4">Our Craft</h3>
              <p className="text-white/60 leading-relaxed font-light">
                Every silhouette begins as an obsession. 18K rose gold, grade-5 titanium, sapphire crystal, and natural diamonds shaped by master artisans.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-white mb-4">Our Promise</h3>
              <p className="text-white/60 leading-relaxed font-light">
                Limited to 250 pieces per collection. Premium packaging. Two-year international warranty. White-glove concierge support for life.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
