import { Header } from "@/components/twc/Header";
import { Footer } from "@/components/twc/Footer";
import ascensionAsset from "@/assets/ascension.png.asset.json";
import aureliaAsset from "@/assets/aurelia.png.asset.json";
import movementImg from "@/assets/movement.jpg";
import rocksImg from "@/assets/rocks-bg.jpg";
import {
  ArrowRight,
  Play,
  Gem,
  Cog,
  Shield,
  Globe,
  Droplets,
  Package,
  Sparkles,
  Award,
  Heart,
  Truck,
  Headphones,
  Clock,
} from "lucide-react";

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url(${rocksImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center min-h-[86vh]">
        {/* Left */}
        <div className="reveal-up">
          <p className="eyebrow mb-6">Limited Edition</p>
          <h1 className="font-serif text-[3.5rem] md:text-[5.5rem] leading-[0.95] tracking-tight text-white mb-4">
            Ascension
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-divider" />
            <span className="eyebrow" style={{ letterSpacing: "0.4em" }}>Time Will Change</span>
          </div>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-md mb-10 font-light">
            A masterpiece of precision and ambition. Crafted for those who rise above ordinary — and leave a legacy.
          </p>

          <div className="flex items-baseline gap-4 mb-2">
            <span className="font-serif text-4xl text-gold">₹21,000</span>
            <span className="text-lg text-muted-foreground line-through">₹1,40,000</span>
          </div>
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold/40 mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] tracking-[0.28em] uppercase text-gold">
              Launch Offer · Save ₹1,19,000
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-gold btn-gold-hover group">
              Discover Ascension
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center gap-3 text-white/80 hover:text-gold transition-colors group">
              <span className="h-10 w-10 rounded-full border border-gold/50 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <Play className="h-3.5 w-3.5 fill-gold text-gold" />
              </span>
              <span className="text-[11px] tracking-[0.28em] uppercase">Watch Story</span>
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative fade-slow">
          <div className="relative float-slow">
            <img
              src={ascensionAsset.url}
              alt="TWC Ascension — Limited Edition Tourbillon Skeleton"
              className="w-full h-auto"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 md:bottom-6 right-2 md:right-6 bg-black/80 backdrop-blur border border-gold/30 px-6 py-5 text-center luxe-shadow">
            <p className="text-[9px] tracking-[0.3em] uppercase text-white/60 mb-1">Limited To</p>
            <p className="font-serif text-4xl text-gold leading-none">250{"\n\n"}</p>
            <p className="text-[9px] tracking-[0.3em] uppercase text-white/60 mt-1">Pieces Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURES ---------- */
const features = [
  { icon: Gem, label: "18K Rose Gold & Titanium" },
  { icon: Cog, label: "Tourbillon Skeleton" },
  { icon: Award, label: "Swiss Inspired" },
  { icon: Sparkles, label: "Sapphire Crystal" },
  { icon: Droplets, label: "5 ATM Water Resistant" },
  { icon: Shield, label: "2 Year Warranty" },
  { icon: Package, label: "Premium Packaging" },
  { icon: Globe, label: "Limited Edition" },
];

function Features() {
  return (
    <section className="border-y border-white/5 bg-[#080808]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center text-center gap-3 group">
              <f.icon className="h-6 w-6 text-gold group-hover:scale-110 transition-transform" strokeWidth={1} />
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/70 leading-relaxed">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- COLLECTIONS ---------- */
function Collections() {
  return (
    <section className="grid md:grid-cols-2">
      {/* For Him */}
      <div className="relative overflow-hidden bg-black min-h-[600px] group">
        <img
          src={ascensionAsset.url}
          alt="Ascension collection"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-[1500ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="relative p-10 md:p-16 h-full flex flex-col justify-end min-h-[600px]">
          <p className="eyebrow mb-4">For Him</p>
          <h3 className="font-serif text-5xl md:text-6xl text-white mb-2">Ascension</h3>
          <p className="text-[11px] tracking-[0.28em] uppercase text-white/60 mb-6">Limited Edition</p>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-serif text-3xl text-gold">₹21,000</span>
            <span className="text-sm text-muted-foreground line-through">₹1,40,000</span>
          </div>
          <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-8">Launch Offer</p>
          <button className="btn-ghost-gold self-start">
            Explore Collection <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* For Her */}
      <div
        className="relative overflow-hidden min-h-[600px] group"
        style={{ background: "linear-gradient(135deg, #3a2a1f 0%, #6b4a35 50%, #a07a55 100%)" }}
      >
        <img
          src={aureliaAsset.url}
          alt="Aurelia collection"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-[1500ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="relative p-10 md:p-16 h-full flex flex-col justify-end min-h-[600px]">
          <p className="eyebrow mb-4">For Her</p>
          <h3 className="font-serif text-5xl md:text-6xl text-white mb-2">Aurelia</h3>
          <p className="text-[11px] tracking-[0.28em] uppercase text-white/60 mb-6">Limited Edition</p>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-serif text-3xl text-gold">₹21,000</span>
            <span className="text-sm text-muted-foreground line-through">₹1,04,000</span>
          </div>
          <p className="text-[10px] tracking-[0.28em] uppercase text-gold mb-8">Launch Offer · Save ₹83,000</p>
          <button className="btn-ghost-gold self-start">
            Explore Collection <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- PHILOSOPHY ---------- */
function Philosophy() {
  return (
    <section className="bg-[#050505] py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={movementImg} alt="Luxury mechanical movement" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/10" />
        </div>
        <div>
          <p className="eyebrow mb-6">Our Philosophy</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] text-white mb-3">
            Time Will Change.
          </h2>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] shimmer-text mb-10">
            So Should You.
          </h2>
          <div className="space-y-5 text-white/70 leading-relaxed font-light max-w-lg">
            <p>Time is life's greatest luxury. Every second shapes who you become.</p>
            <p>TWC Watches creates timepieces for those who refuse to settle for ordinary.</p>
            <p className="italic text-gold/80 font-serif text-xl">
              Luxury is not measured by wealth. It is measured by legacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BEST SELLERS ---------- */
const bestSellers = [
  { name: "Ascension", tag: "Limited Edition", price: "₹21,000", original: "₹1,40,000", img: ascensionAsset.url, cta: "View Details" },
  { name: "Aurelia", tag: "Limited Edition", price: "₹21,000", original: "₹1,04,000", img: aureliaAsset.url, cta: "View Details" },
  { name: "Chronos", tag: "Coming Soon", price: null, original: null, img: ascensionAsset.url, cta: "Notify Me" },
  { name: "Elevate", tag: "Coming Soon", price: null, original: null, img: aureliaAsset.url, cta: "Notify Me" },
];

function BestSellers() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="eyebrow mb-4">The Collection</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Best Sellers</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold hover:gap-3 transition-all">
            View All Watches <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((p) => (
            <div key={p.name} className="group relative bg-[#0c0c0c] border border-white/5 hover:border-gold/30 transition-all duration-500">
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
                <button className="w-full py-3 border border-white/10 text-[10px] tracking-[0.28em] uppercase text-white/80 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all">
                  {p.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CRAFTSMANSHIP TIMELINE ---------- */
const craft = [
  { n: "01", t: "Swiss Inspired Design", d: "Every silhouette begins as an obsession — sketched, refined, and reborn." },
  { n: "02", t: "Premium Materials", d: "18K rose gold, grade-5 titanium, sapphire crystal, natural diamonds." },
  { n: "03", t: "Precision Engineering", d: "Manual-winding tourbillon movements with 72-hour power reserve." },
  { n: "04", t: "Quality Inspection", d: "Each piece passes 200+ checks before it ever leaves the workshop." },
  { n: "05", t: "Luxury Finishing", d: "Hand-polished, satin-brushed and hand-engraved to exhibition standard." },
  { n: "06", t: "Premium Packaging", d: "Delivered in a hand-crafted presentation case worthy of an heirloom." },
];

function Craftsmanship() {
  return (
    <section className="bg-[#080808] py-24 md:py-32 border-y border-white/5">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Our Craftsmanship</p>
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.05]">
            Engineered to defy time.
            <br />
            <span className="text-gold italic">Crafted to outlive generations.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {craft.map((c) => (
            <div key={c.n} className="bg-[#080808] p-10 hover:bg-[#0f0f0f] transition-colors group">
              <p className="font-serif text-5xl text-gold/40 group-hover:text-gold transition-colors mb-6">{c.n}</p>
              <h3 className="font-serif text-2xl text-white mb-3">{c.t}</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY TWC ---------- */
const why = [
  { icon: Clock, t: "Time Will Change", d: "A philosophy of ambition, evolution, and legacy — worn on the wrist." },
  { icon: Award, t: "Swiss Inspired", d: "Master-crafted movements, engineered with Swiss precision." },
  { icon: Gem, t: "Limited Editions", d: "Only 25 pieces worldwide per collection. Once gone, gone forever." },
  { icon: Package, t: "Premium Packaging", d: "A hand-crafted case, gloves, warranty booklet and certificate." },
  { icon: Headphones, t: "Concierge Support", d: "White-glove service from selection through the life of your timepiece." },
  { icon: Shield, t: "2 Year Warranty", d: "International coverage on every timepiece we build." },
];

function WhyTWC() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Why TWC</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white">The mark of a timepiece</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {why.map((w) => (
            <div key={w.t} className="border border-white/5 p-10 hover:border-gold/30 transition-colors">
              <w.icon className="h-6 w-6 text-gold mb-6" strokeWidth={1} />
              <h3 className="font-serif text-2xl text-white mb-3">{w.t}</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const reviews = [
  { q: "It feels like wearing a piece of art. The finishing is beyond anything I expected at this price.", n: "Arjun M.", r: "Verified Owner · Ascension" },
  { q: "My Aurelia stops conversations. The diamond work is exquisite and the movement is mesmerising.", n: "Ishita K.", r: "Verified Owner · Aurelia" },
  { q: "The packaging alone tells you TWC is different. This is a house that respects its craft.", n: "Rohan V.", r: "Verified Owner · Ascension" },
];

function Testimonials() {
  return (
    <section className="bg-[#080808] py-24 md:py-32 border-y border-white/5">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">Owner Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Worn by those who rise.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <figure key={r.n} className="bg-[#0c0c0c] border border-white/5 p-10 hover:border-gold/20 transition-colors">
              <p className="text-gold font-serif text-4xl leading-none mb-4">"</p>
              <blockquote className="font-serif text-xl text-white/85 leading-snug italic mb-8">
                {r.q}
              </blockquote>
              <figcaption>
                <p className="text-sm text-white">{r.n}</p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold/70 mt-1">{r.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- NEWSLETTER ---------- */
function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url(${movementImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Truck className="h-6 w-6 text-gold mx-auto mb-6" strokeWidth={1} />
        <p className="eyebrow mb-6">Be The First To Know</p>
        <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.05] mb-6">
          Become part of the legacy.
        </h2>
        <p className="text-white/60 leading-relaxed max-w-lg mx-auto mb-10 font-light">
          Receive exclusive launches, limited editions and luxury stories before anyone else.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-stretch gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="flex-1 bg-transparent border border-white/15 px-6 py-4 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none transition-colors"
          />
          <button type="submit" className="btn-gold btn-gold-hover">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */
export function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Collections />
        <Philosophy />
        <BestSellers />
        <Craftsmanship />
        <WhyTWC />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
