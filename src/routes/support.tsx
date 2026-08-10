import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/twc/Header";
import { Footer } from "@/components/twc/Footer";
import { Mail, Phone, Clock, Shield, Truck, Package } from "lucide-react";

export const Route = createFileRoute("/support")({
  component: SupportPage,
  head: () => ({
    meta: [
      { title: "Support — TWC Watches" },
      { name: "description", content: "Get support for your TWC Watch — warranty, shipping, returns, FAQs and concierge contact." },
      { property: "og:title", content: "Support — TWC Watches" },
      { property: "og:description", content: "Warranty, shipping, returns, FAQs and concierge support for TWC Watches." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const faqs = [
  { q: "What is the warranty period?", a: "Every TWC timepiece comes with a 2-year international warranty covering manufacturing defects." },
  { q: "Do you ship worldwide?", a: "Yes. We offer free worldwide shipping on all orders, fully insured and tracked." },
  { q: "What is your return policy?", a: "You may return unworn timepieces in original packaging within 14 days for a full refund." },
  { q: "How limited are the editions?", a: "Each collection is strictly limited to 250 pieces worldwide. Every watch includes a numbered certificate." },
];

function SupportPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="max-w-2xl mb-16">
              <p className="eyebrow mb-6">Support</p>
              <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
                We're here to help.
              </h1>
              <p className="text-white/60 text-lg font-light">
                White-glove support for every stage of your TWC experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <div className="border border-white/5 p-8 hover:border-gold/20 transition-colors">
                <Mail className="h-6 w-6 text-gold mb-6" strokeWidth={1} />
                <h3 className="font-serif text-2xl text-white mb-2">Email</h3>
                <p className="text-white/60 text-sm mb-4">concierge@twcwatches.com</p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold/70">Response within 24h</p>
              </div>
              <div className="border border-white/5 p-8 hover:border-gold/20 transition-colors">
                <Phone className="h-6 w-6 text-gold mb-6" strokeWidth={1} />
                <h3 className="font-serif text-2xl text-white mb-2">Phone</h3>
                <p className="text-white/60 text-sm mb-4">+91 1800 TWC CARE</p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold/70">Mon–Sat, 10am–7pm IST</p>
              </div>
              <div className="border border-white/5 p-8 hover:border-gold/20 transition-colors">
                <Clock className="h-6 w-6 text-gold mb-6" strokeWidth={1} />
                <h3 className="font-serif text-2xl text-white mb-2">Live Chat</h3>
                <p className="text-white/60 text-sm mb-4">Available on site</p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold/70">Mon–Fri, 9am–6pm IST</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-serif text-3xl text-white mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq) => (
                    <div key={faq.q} className="border-b border-white/5 pb-6">
                      <h3 className="text-white font-medium mb-2">{faq.q}</h3>
                      <p className="text-white/60 text-sm leading-relaxed font-light">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-white mb-8">Service Promise</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Shield className="h-5 w-5 text-gold flex-shrink-0 mt-1" strokeWidth={1} />
                    <div>
                      <h4 className="text-white font-medium mb-1">2-Year International Warranty</h4>
                      <p className="text-white/60 text-sm font-light">Full coverage against manufacturing defects across the globe.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Truck className="h-5 w-5 text-gold flex-shrink-0 mt-1" strokeWidth={1} />
                    <div>
                      <h4 className="text-white font-medium mb-1">Free Insured Shipping</h4>
                      <p className="text-white/60 text-sm font-light">Every order ships free, fully insured and tracked to your door.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Package className="h-5 w-5 text-gold flex-shrink-0 mt-1" strokeWidth={1} />
                    <div>
                      <h4 className="text-white font-medium mb-1">Premium Packaging</h4>
                      <p className="text-white/60 text-sm font-light">Hand-crafted presentation case, gloves, certificate and warranty booklet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
