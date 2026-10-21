import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/aics/Hero";
import { Nav, InfoStrip, About, WhyAttend, Speakers, Gallery, Register, Footer } from "@/components/aics/Sections";

export const Route = createFileRoute("/aics")({
  head: () => ({
    meta: [
      { title: "AICS — Artificial Intelligence Career Summit" },
      { name: "description", content: "Discover AI. Build Your Future. Explore AI careers, meet industry experts and shape tomorrow." },
      { property: "og:title", content: "AICS — Artificial Intelligence Career Summit" },
      { property: "og:description", content: "Discover AI. Build Your Future." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lexend:wght@500;700;800&family=Inter:wght@400;500&display=swap",
      },
    ],
  }),
  component: AicsPage,
});

function AicsPage() {
  return (
    <main className="aics-scope bg-background">
      <Nav />
      <Hero />
      <div className="aics-neon bg-background">
        <Speakers />
        <InfoStrip />
        <About />
        <WhyAttend />
        <Gallery />
        <Register />
        <Footer />
      </div>
    </main>
  );
}
