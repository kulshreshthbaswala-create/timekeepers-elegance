import logoAsset from "@/assets/twc-logo.png.asset.json";
import { Instagram, Facebook, Youtube } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: ["All Watches", "Men's Watches", "Women's Watches", "Limited Editions", "Accessories"],
  },
  {
    title: "Company",
    links: ["About TWC", "Our Craftsmanship", "Our Promise", "Journal"],
  },
  {
    title: "Customer Care",
    links: ["FAQs", "Warranty", "Shipping & Returns", "Track Order"],
  },
  {
    title: "Support",
    links: ["Contact Us", "Privacy Policy", "Terms & Conditions", "Cookie Policy"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <img src={logoAsset.url} alt="TWC Watches" className="h-20 w-auto mb-6" />
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
                  <li key={l}>
                    <a href="#" className="text-sm text-white/70 hover:text-gold transition-colors">
                      {l}
                    </a>
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
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-gold transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/60 hover:text-gold transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Youtube" className="text-white/60 hover:text-gold transition-colors">
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
