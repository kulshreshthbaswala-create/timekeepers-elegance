import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/twc/Header";
import { Footer } from "@/components/twc/Footer";
import movementImg from "@/assets/movement.jpg";
import rocksImg from "@/assets/rocks-bg.jpg";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
  head: () => ({
    meta: [
      { title: "Journal — TWC Watches" },
      { name: "description", content: "Read the TWC Watches journal — stories on watchmaking, limited editions, craftsmanship and the philosophy of Time Will Change." },
      { property: "og:title", content: "Journal — TWC Watches" },
      { property: "og:description", content: "Stories on watchmaking, limited editions and the philosophy of Time Will Change." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const posts = [
  {
    title: "The Art of the Tourbillon",
    excerpt: "Why the tourbillon remains the ultimate expression of mechanical watchmaking mastery.",
    image: movementImg,
    date: "August 2026",
  },
  {
    title: "Only 250: The Power of Scarcity",
    excerpt: "Inside our decision to limit every collection to 250 pieces worldwide.",
    image: rocksImg,
    date: "July 2026",
  },
  {
    title: "From Sketch to Heirloom",
    excerpt: "A behind-the-scenes look at how the Ascension came to life.",
    image: movementImg,
    date: "June 2026",
  },
];

function JournalPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="max-w-2xl mb-16">
              <p className="eyebrow mb-6">Journal</p>
              <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
                Stories of time.
              </h1>
              <p className="text-white/60 text-lg font-light">
                Insights on craftsmanship, limited editions, and the philosophy behind every TWC timepiece.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.title} className="group border border-white/5 hover:border-gold/20 transition-colors bg-[#0a0a0a]">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-gold/70 mb-3">{post.date}</p>
                    <h3 className="font-serif text-2xl text-white mb-3">{post.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed font-light">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
