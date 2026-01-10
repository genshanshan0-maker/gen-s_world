"use client";

import Hero from "./components/Hero";
import Policy from "./components/Policy";
import Gallery from "./components/Gallery";
import Biography from "./components/Biography";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-cyan-200 selection:text-cyan-900">
      <Hero />
      <Policy />
      <Gallery />
      <Biography />
      <Contact />
    </main>
  );
}
