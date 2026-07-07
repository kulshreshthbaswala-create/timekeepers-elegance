import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/twc/HomePage";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "TWC Watches — Ascension · Time Will Change" },
      {
        name: "description",
        content:
          "TWC Watches — luxury-inspired timepieces. Discover Ascension and Aurelia, limited edition tourbillon skeletons in 18K rose gold. Only 25 pieces worldwide.",
      },
      { property: "og:title", content: "TWC Watches — Ascension · Time Will Change" },
      {
        property: "og:description",
        content: "Limited edition tourbillon skeleton timepieces. Swiss-inspired craftsmanship. Time Will Change.",
      },
    ],
  }),
});
