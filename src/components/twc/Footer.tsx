import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/twc-logo.png.asset.json";
import { Instagram, Facebook, Youtube } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Watches", to: "/collections" },
      { label: "Men's Watches", to: "/men" },
      { label: "Women's Watches", to: "/women" },
      { label: "Limited Editions", to: "/collections" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About TWC", to: "/about" },
      { label: "Our Craftsmanship", to: "/collections" },
      { label: "Our Promise", to: "/about" },
      { label: "Journal", to: "/journal" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "FAQs", to: "/support" },
      { label: "Warranty", to: "/support" },
      { label: "Shipping & Returns", to: "/support" },
      { label: "Track Order", to: "/support" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", to: "/support" },
      { label: "Privacy Policy", to: "/support" },
      { label: "Terms & Conditions", to: "/support" },
      { label: "Cookie Policy", to: "/support" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/">
              <img src={logoAsset.url} alt="TWC Watches" className="h-20 w-auto mb-6" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Luxury-inspired timepieces engineered to defy time. Crafted for those who rise, evolve, and leave a legacy.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow mb-6">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-white/70 hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            © 2026 TWC Watches. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-gold transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-gold transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="text-white/60 hover:text-gold transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
          <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>Amex</span>
            <span>·</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
