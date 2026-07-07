import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/twc/Header";
import { Footer } from "@/components/twc/Footer";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/collections")({
  component: CollectionsPage,
  head: () => ({
    meta: [
      { title: "Collections — TWC Watches" },
      { name: "description", content: "Explore the TWC Watches collections — Ascension, Aurelia and upcoming limited editions." },
    ],
  }),
});

function CollectionsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="mx-auto max-w-[1200px] px-6 py-32 text-center">
        <p className="eyebrow mb-6">The Collections</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
          Timepieces engineered<br />to outlive generations.
        </h1>
        <p className="text-white/60 max-w-xl mx-auto mb-10 font-light">
          The full atelier is being prepared. Return to the home page to discover our first two limited editions —
          Ascension and Aurelia.
        </p>
        <Link to="/" className="btn-ghost-gold inline-flex">
          <ArrowLeft className="h-3.5 w-3.5" /> Back Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
