import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import logoAsset from "@/assets/twc-logo.png.asset.json";

const nav = [
  { label: "Shop", to: "/collections" },
  { label: "Collections", to: "/collections" },
  { label: "Men", to: "/men" },
  { label: "Women", to: "/women" },
  { label: "Journal", to: "/journal" },
  { label: "About", to: "/about" },
  { label: "Support", to: "/support" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <div className="w-full border-b border-white/5 bg-black text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-2.5">
          <span>Free Shipping Worldwide</span>
          <span className="hidden md:block text-gold">Time Will Change</span>
          <span>2 Year International Warranty</span>
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5">
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            {nav.slice(0, 4).map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="text-[11px] tracking-[0.28em] uppercase text-white/80 hover:text-gold transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link to="/" className="flex flex-col items-center gap-1 flex-shrink-0">
            <img src={logoAsset.url} alt="TWC Watches" className="h-14 md:h-16 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center justify-end gap-6 flex-1">
            {nav.slice(4).map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="text-[11px] tracking-[0.28em] uppercase text-white/80 hover:text-gold transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              <button aria-label="Search" className="text-white/80 hover:text-gold transition-colors">
                <Search className="h-4 w-4" />
              </button>
              <button aria-label="Account" className="text-white/80 hover:text-gold transition-colors">
                <User className="h-4 w-4" />
              </button>
              <button aria-label="Wishlist" className="text-white/80 hover:text-gold transition-colors">
                <Heart className="h-4 w-4" />
              </button>
              <button aria-label="Cart" className="text-white/80 hover:text-gold transition-colors relative">
                <ShoppingBag className="h-4 w-4" />
                <span className="absolute -top-2 -right-2 text-[9px] bg-gold text-black rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>

          <button className="lg:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/5 bg-black">
            <div className="flex flex-col px-6 py-6 gap-4">
              {nav.map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-[12px] tracking-[0.28em] uppercase text-white/80 hover:text-gold"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
