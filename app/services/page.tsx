import type { Metadata } from "next";
import { GridBackground } from "@/components/ui/GridBackground";
import { GradientOrbs } from "@/components/ui/GradientOrbs";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services — Jagadeesh Kakunuri",
  description:
    "Backend systems and agentic AI engagements — what I can take on, how I work, and how to get in touch.",
};

export default function ServicesPage() {
  return (
    <>
      <GradientOrbs />
      <GridBackground />
      <Nav />
      <main id="main" className="pt-28">
        <Services />
      </main>
      <Footer />
    </>
  );
}
